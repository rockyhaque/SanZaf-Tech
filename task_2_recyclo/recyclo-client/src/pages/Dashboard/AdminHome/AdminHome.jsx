import { useContext } from "react";
// import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from "recharts";
import { AuthContext } from "../../../providers/AuthProvider";
import AllUsers from "../AllUsers/AllUsers";
import ManageProducts from "../ManageProducts/ManageProducts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  // const { user } = useAuth();
  const { user, logOut } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  // console.log(chartData);

  // custom shape for var chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // custom shape for pie chat
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map((data) => {
    return {
      name: data.category,
      value: data.revenue,
    };
  });

  return (
    <div>
      {/* cover img */}
      <div className="h-44">
        <div
          className="bg-no-repeat h-44 object-fill "
          style={{
            backgroundImage:
              "url(https://i.ibb.co/J3cNSK5/Social-Media-Marketing-Colorful-Promo-Facebook-Cover.png)",
          }}
        >
          <div className="relative top-10 left-14 ">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} />
              </div>
            </div>
          </div>
          <div className="relative bottom-10 left-44 text-customBlack font-bold text-xl">
            {user?.displayName ? user.displayName : "Back"}
          </div>
          <div className="relative bottom-10 left-44 text-customBlack">
            <h1>Admin</h1>
          </div>
        </div>
      </div>

      {/* STATs card */}
      <div>
        <h2 className="mt-6 text-xl font-semibold">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
          <div className="flex justify-center items-center gap-8 bg-customWhite rounded-lg py-3 shadow-lg">
            <div>
              <h5 className="text-customGray">Revenue</h5>
              <h2 className="text-xl font-semibold">৳ {stats?.revenue}</h2>
            </div>
            <div className=" p-2 rounded-xl">
              <img
                className="w-12"
                src="https://i.ibb.co/XCy7Ypx/r.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-8 bg-customWhite rounded-lg shadow-lg">
            <div>
              <h5 className="text-customGray">Cutomer</h5>
              <h2 className="text-xl font-semibold">{stats?.users}</h2>
            </div>
            <div className="p-2 rounded-xl">
              <img
                className="w-12"
                src="https://i.ibb.co/nnc6ZsH/c.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-8 bg-customWhite rounded-lg shadow-lg">
            <div>
              <h5 className="text-customGray">Order</h5>
              <h2 className="text-xl font-semibold">{stats?.orders}</h2>
            </div>
            <div className=" p-2 rounded-xl">
              <img
                className="w-12"
                src="https://i.ibb.co/ngMFW1B/o.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-8 bg-customWhite rounded-lg shadow-lg">
            <div>
              <h5 className="text-customGray">Total Stock</h5>
              <h2 className="text-xl font-semibold">{stats?.productItems}</h2>
            </div>
            <div className=" p-2 rounded-xl">
              <img
                className="w-12"
                src="https://i.ibb.co/fDTwFP6/i.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* chart */}
      <div className="mt-10 hidden">
        {/* Bar chart */}
        <div className="w-full bg-customWhite mx-auto  rounded-lg py-10">
          <BarChart
            width={900}
            height={400}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        {/* pie chart */}
        <div className="w-full bg-customWhite mx-auto rounded-lg mt-10 pb-10">
          <PieChart width={900} height={400}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>

      {/* All users */}
      <AllUsers></AllUsers>

      {/* Manage Product */}
      <ManageProducts></ManageProducts>
    </div>
  );
};

export default AdminHome;
