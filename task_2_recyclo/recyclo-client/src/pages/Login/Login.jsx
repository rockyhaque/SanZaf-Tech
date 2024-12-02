// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplate,
//   validateCaptcha,
// } from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
//   const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";
  console.log("state in the location login page", location.state);

//   useEffect(() => {
//     loadCaptchaEnginge(6);
//   }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };

//   const handleValidateCaptcha = (e) => {
//     const user_captcha_value = e.target.value;
//     if (validateCaptcha(user_captcha_value)) {
//       setDisabled(false);
//     } else {
//       setDisabled(true);
//     }
//   };

  return (
    <>
      <Helmet>
        <title>Recyclo | Login</title>
      </Helmet>
      <div className="hero h-screen bg-base-200 mt-44">
        <div className="hero-content w-full">
          <div className="w-full max-w-lg shadow-2xl bg-base-100 px-8 py-6 rounded-lg">
            <form onSubmit={handleLogin} className="space-y-2">
              <h1 className="text-3xl font-semibold text-center mt-4">
              Sign In
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                
              </div>
              {/* <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                />

                <button className='btn btn-outline btn-xs mt-4'>Validate</button>
              </div> */}
              
              <div className="form-control pt-6">
                {/* TODO: apply disabled for re captcha */}
                <input
                  disabled={false}
                  className="btn bg-customBlack rounded-full text-neutral-300 hover:bg-[#00CC71]"
                  type="submit"
                  value="Login"
                />
              </div>
              
            </form>
            <SocialLogin></SocialLogin> 
            <p className="text-center py-6">
              <small>
              Don’t have account?{" "}
                <Link className="text-customBlack font-bold" to="/signup">
                  Register
                </Link>
              </small>
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
