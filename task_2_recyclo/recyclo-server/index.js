const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// mailgun
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);

// const mailgun = require("mailgun-js");
// const DOMAIN = "sandbox23fe59d3204944d79ad1baa489a9b2ad.mailgun.org";

const mg = mailgun.client({
  username: 'api',
  key: process.env.MAIL_GUN_API_KEY,
});


const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iizwh4q.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const userCollection = client.db("recycloDb").collection("users");
    const serviceCollection = client.db("recycloDb").collection("service");
    const reviewCollection = client.db("recycloDb").collection("reviews");
    const cartCollection = client.db("recycloDb").collection("carts");
    const paymentCollection = client.db("recycloDb").collection("payments");

    // jwt related api
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1h",
      });
      res.send({ token });
    });

    // middlewares
    const verifyToken = (req, res, next) => {
      // console.log('inside verify token', req.headers.authorization);
      if (!req.headers.authorization) {
        return res.status(401).send({ message: "unauthorized access" });
      }
      const token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).send({ message: "unauthorized access" });
        }
        req.decoded = decoded;
        next();
      });
    };

    // use verify admin after verifyToken
    const verifyAdmin = async (req, res, next) => {
      const email = req.decoded.email;
      const query = { email: email };
      const user = await userCollection.findOne(query);
      const isAdmin = user?.role === "admin";
      if (!isAdmin) {
        return res.status(403).send({ message: "forbidden access" });
      }
      next();
    };

    //user related api
    app.get("/users", verifyToken, verifyAdmin, async (req, res) => {
      // console.log(req.headers);
      const result = await userCollection.find().toArray();
      res.send(result);
    });

    app.get("/users/admin/:email", verifyToken, async (req, res) => {
      const email = req.params.email;

      if (email !== req.decoded.email) {
        return res.status(403).send({ message: "forbidden access" });
      }

      const query = { email: email };
      const user = await userCollection.findOne(query);
      let admin = false;
      if (user) {
        admin = user?.role === "admin";
      }
      res.send({ admin });
    });

    app.post("/users", async (req, res) => {
      const user = req.body;
      const query = { email: user?.email };
      const existingUser = await userCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: "User already exists", insertedId: null });
      }
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    app.patch(
      "/users/admin/:id",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const updatedDoc = {
          $set: {
            role: "admin",
          },
        };
        const result = await userCollection.updateOne(filter, updatedDoc);
        res.send(result);
      }
    );

    app.delete("/users/:id", verifyToken, verifyAdmin, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });

    // Service APIs
    app.get("/service", async (req, res) => {
      const result = await serviceCollection.find().toArray();
      res.send(result);
    });

    app.get('/service/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId (id)}
      const result = await serviceCollection.findOne(query);
      // console.log(result);
      res.send(result);
      
    })

    app.post("/service", verifyToken, verifyAdmin, async (req, res) => {
      const item = req.body;
      const result = await serviceCollection.insertOne(item);
      res.send(result);
    });

    app.patch('/service/:id', async(req, res) => {
      const item = req.body;
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const updatedDoc = {
        $set: {
          name: item.name,
          category: item.category,
          price: item.price,
          service: item.service,
          image: item.image
        }
      }
      const result = await serviceCollection.updateOne(filter, updatedDoc);
      res.send(result);
    })

    app.delete("/service/:id",verifyToken, verifyAdmin, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await serviceCollection.deleteOne(query);
      res.send(result);
    });

    app.get("/reviews", async (req, res) => {
      const result = await reviewCollection.find().toArray();
      res.send(result);
    });

    //carts collection
    app.get("/carts", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const result = await cartCollection.find(query).toArray();
      res.send(result);
    });

    app.post("/carts", async (req, res) => {
      const cartItem = req.body;
      const result = await cartCollection.insertOne(cartItem);
      res.send(result);
    });

    app.delete("/carts/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    });

    // payment intent
    app.post('/create-payment-intent', async(req, res) => {
      const {price} = req.body;
      const amount = parseInt(price * 100);
      // console.log(amount, 'amount inside the intent');

      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'usd',
        payment_method_types: ['card']
      });

      res.send({
        clientSecret: paymentIntent.client_secret,
      })
    })

    app.get('/payments/:email', verifyToken, async(req, res) => {
      const query = {email: req.params.email}
      if(req.params.email !== req.decoded.email){
        return res.status(403).send({message: 'forbidden access'});
      }
      const result = await paymentCollection.find(query).toArray();
      res.send(result);
    })

    app.post('/payments', async (req, res) => {
      const payment = req.body;
      const paymentResult = await paymentCollection.insertOne(payment);

      // console.log('payment info', payment);
      const query = {_id: {
        $in: payment.cartIds.map(id => new ObjectId(id))
      }};
      const deleteResult = await cartCollection.deleteMany(query);

      // send user email about payment confirmation
      mg.messages
        .create(process.env.MAIL_SENDING_DOMAIN, {
          from: "Mailgun Sandbox <postmaster@sandbox190b146030974482aee6cb57f42bfcfe.mailgun.org>",
          to: ["rockyhaque99@gmail.com"],
          subject: "Recyclo - Your order confirmation",
          text: "Testing some Mailgun awesomness!",
          html: `
            <div>
              <h2>Thank you for your order</h2>
              <h4>Email address: <strong>${payment.email}</strong>
              <h4>Your Transaction Id: <strong>${payment.transactionId}</strong></h4>
              <h6>Order Date: <strong>${payment.date}</strong></h6>
              <p>We would like to get your feedback! &#128525</p>
            </div>
          `
        })
        .then(msg => console.log(msg)) // logs response data
        .catch(err => console.log(err)); // logs any error`;


      res.send({paymentResult, deleteResult});
      // const query = {_id: new ObjectId(id)}

    })

    // stats or analytics
    app.get('/admin-stats', verifyToken, verifyAdmin, async(req, res) => {
      const users = await userCollection.estimatedDocumentCount();
      const productItems = await serviceCollection.estimatedDocumentCount();
      const orders = await paymentCollection.estimatedDocumentCount();

      // const payments = await paymentCollection.find().toArray();
      // const revenue = payments.reduce((total, payment) => total + payment.price, 0)

      const result = await paymentCollection.aggregate([
        {
          $group:{
            _id: null,
            totalRevenue: {
              $sum: '$price'
            }
          }
        }
      ]).toArray();

      const revenue = result.length > 0 ? result[0].totalRevenue : 0;

      res.send({
        users,
        productItems,
        orders,
        revenue
      })
    })

    // order status
    // using aggregate pipeline
    app.get('/order-stats', verifyToken, verifyAdmin, async(req, res) => {
      // const pipeline = [
      //   {
      //     $addFields: {
      //       menuItemsObjectIds: {
      //         $map: {
      //           input: '$menuItemIds',
      //           as: 'itemId',
      //           in: '$$itemId'
      //         }
      //       }
      //     }
      //   },
      //   {
      //     $lookup: {
      //       from: 'service',
      //       localField: 'menuItemsObjectIds',
      //       foreignField: '_id',
      //       as: 'menuItemsData'
      //     }
      //   },
      //   {
      //     $unwind: '$menuItemsData'
      //   },
      //   {
      //     $group: {
      //       _id: '$menuItemsData.category',
      //       count: { $sum: 1 },
      //       total: { $sum: '$menuItemsData.price' }
      //     }
      //   },
      //   {
      //     $project: {
      //       category: '$_id',
      //       count: 1,
      //       total: { $round: ['$total', 2] },
      //       _id: 0
      //     }
      //   }
      // ];

      // const result = await paymentCollection.aggregate(pipeline).toArray();
      // console.log(result)
      // res.send(result);

      const result = await paymentCollection.aggregate([
        {
          $unwind: '$menuItemIds'
        },
        {
          $lookup: {
            from: 'service',
            localField: 'menuItemIds',
            foreignField: '_id',
            as: 'menuItems'
          }
        },
        {
          $unwind: '$menuItems'
        },
        {
          $group: {
            _id: '$menuItems.category',
            quantity:{ $sum: 1 },
            revenue: { $sum: '$menuItems.price'} 
          }
        },
        {
          $project: {
            _id: 0,
            category: '$_id',
            quantity: '$quantity',
            revenue: '$revenue'
          }
        }
      ]).toArray();

      res.send(result);
    });
    

    // Send a ping to confirm a successful connection

    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Re Re Recyclo...");
});

app.listen(port, () => {
  console.log(`Recyclo is processing on port ${port}`);
});