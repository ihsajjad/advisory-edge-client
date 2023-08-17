import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  // handle google login
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="text-center text-xl ">
      <button onClick={handleGoogleLogin} className=" p-2 rounded-full">
        <img
          src="https://i.postimg.cc/pdB7XJ3q/google.png"
          alt=""
          className="h-10 w-10"
        />
      </button>
    </div>
  );
};

export default SocialLogin;
