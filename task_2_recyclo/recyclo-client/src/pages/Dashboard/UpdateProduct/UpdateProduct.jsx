import { useLoaderData, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaCartPlus } from "react-icons/fa";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProduct = () => {
  const { name, category, service, price, image, _id } = useLoaderData();
  // console.log(_id, name);
  
  // const {id} = useParams()
  // console.log(id);

  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    // console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // send the service data to the server with image
      const serviceItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        service: data.service,
        image: res.data.data.display_url,
      };
      const serviceRes = await axiosSecure.patch(
        `/service/${_id}`,
        serviceItem
      );
      // console.log("with image url", serviceRes.data);
      if (serviceRes.data.modifiedCount > 0) {
        //show success
        // reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.name} is updated to the service`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };

  return (
    <div>
      {/* <SectionTitle heading={"Update a product"}></SectionTitle> */}

      <div className="bg-customWhite px-10 py-12 rounded-lg">
        <div>
          <h1 className="text-2xl font-semibold">Update Product</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex">
            <div className="w-1/3 flex  items-center">
              <img className="w-48 h-auto rounded-lg" src={image} alt="" />
            </div>
            <div className="w-full">
              {/* name */}
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-medium">Product Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={name}
                  placeholder="Service Name"
                  {...register("name", { required: true })}
                  required
                  className="input input-bordered w-full"
                />
              </div>

              {/* Category */}
              <div className="form-control w-full my-5">
                <label className="label">
                  <span className="label-text font-medium">
                    Product Category
                  </span>
                </label>
                <select
                  defaultValue={category}
                  {...register("category", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option disabled value="default">
                    Select a category
                  </option>
                  <option value="paper">Paper</option>
                  <option value="plastic">Plastic</option>
                  <option value="metal">Metal</option>
                  <option value="glass">Glass</option>
                  <option value="textile">Textile</option>
                  <option value="electronic">Electronic</option>
                </select>
              </div>

              {/* price */}
              <div className="form-control w-full my-5">
                <label className="label">
                  <span className="label-text font-medium">Price</span>
                </label>
                <input
                  type="number"
                  defaultValue={price}
                  placeholder="Price Name"
                  {...register("price", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Service Details */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Service Details</span>
              </label>
              <textarea
                defaultValue={service}
                {...register("service")}
                className="textarea textarea-bordered h-32"
                placeholder="Write something"
              ></textarea>
            </div>

            {/* File Upload */}

            <div className="w-full">
            <label className="label">
                <span className="label-text font-medium ">Product Image</span>
            </label>
              <div className="form-control flex justify-center items-center border border-neutral-300 rounded-lg py-10">
                <input
                  {...register("image", { required: true })}
                  type="file"
                  className="file-input file-input-bordered  file-input-accent w-full max-w-xs"
                />
              </div>
            </div>
          </div>

          {/* update btn */}
          <div className="">
            <button className="btn bg-customGreen text-customWhite my-4">
              Update Product<FaCartPlus></FaCartPlus>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
