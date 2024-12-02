import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      // console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div className="p-2 text-center">
      <div>
        <button
          onClick={handleGoogleSignIn}
          className="w-full border-2 border-stone-200 btn font-bold rounded-full text-customGray hover:bg-[#00CC71]"
        >
          <img
            className="w-12"
            src="https://i.ibb.co/jMCnQss/7123025-logo-google-g-icon.png"
            alt=""
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
