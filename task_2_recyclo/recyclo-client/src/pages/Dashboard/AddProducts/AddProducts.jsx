import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProducts = () => {
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
      const serviceRes = await axiosSecure.post("/service", serviceItem);
      // console.log("with image url", serviceRes.data);
      if (serviceRes.data.insertedId) {
        //show success
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.name} is added to the service`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    // console.log(res.data);
  };

  return (
    <div>
      {/* <SectionTitle heading="Add a Product"></SectionTitle> */}
      <div>
        <div>
          <h1 className="text-2xl font-semibold">Add Product</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Service Name</span>
            </label>
            <input
              type="text"
              placeholder="Service Name"
              {...register("name", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/* Category */}
            <div className="form-control w-full my-5">
              <label className="label">
                <span className="label-text">Category Name*</span>
              </label>
              <select
                defaultValue="default"
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
                <option value="offered">Offer</option>
                <option value="popular">Popular Service</option>
              </select>
            </div>

            {/* price */}
            <div className="form-control w-full my-5">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price Name"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Service Details */}
          <div className="flex gap-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Service Details</span>
              </label>
              <textarea
                {...register("service")}
                className="textarea textarea-bordered h-32"
                placeholder="Write something"
              ></textarea>
            </div>
            <div className="form-control w-full">
            <label className="label">
                <span className="label-text font-medium ">Product Image</span>
            </label>
              <div className="flex justify-center items-center border border-neutral-300 rounded-lg py-10">
              <input
                  {...register("image", { required: true })}
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                />
              </div>
            </div>
          </div>

          <div className="">
            <button className="btn bg-customGreen text-customWhite my-4">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
