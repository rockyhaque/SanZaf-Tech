import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          // create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the database");
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  // console.log(useWatch("example"));

  return (
    <>
      <Helmet>
        <title>Recyclo | Sign Up</title>
      </Helmet>
      <div className="hero h-screen bg-base-200 mt-44 ">
        <div className="hero-content w-full">
          <div className=" w-full max-w-lg shadow-2xl bg-base-100 px-8 py-6 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              <h1 className="text-3xl font-semibold text-center mt-4">
                Create Account
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-customRed mt-2">Name is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-customRed mt-2">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-customRed mt-2 text-xs">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-customRed text-xs mt-3">
                    Password Must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-customRed text-xs mt-3">
                    Password Must be less than 20 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-customRed mt-3 text-xs">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-customRed mt-2 text-xs">
                    Photo URL is required
                  </span>
                )}
              </div>
              <div className="form-control py-4">
                <label className="cursor-pointer flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-info" />
                  <span className="label-text">
                    Accept all terms & Conditions
                  </span>
                </label>
              </div>
              <div className="form-control">
                <input
                  className="btn bg-[#101211] rounded-full text-neutral-300 hover:bg-[#00CC71]"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              
            </form>
            <SocialLogin></SocialLogin>
            <p className="text-center mb-4">
              <small>
                Already have an account{" "}
                <Link className="text-[#101211] font-bold" to="/login">
                  Login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
