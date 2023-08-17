import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import animation from "../../assets/login.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const [error, setError] = useState("");
  const { logInUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    setError("");
    logInUser(data.email, data.password)
      .then(() => {})
      .catch((error) => setError(error.message));
  };

  return (
    <div className="h-fit bg-base-200 md:py-12 md:px-10 flex">
      <div className="flex-1">
        <Lottie animationData={animation}></Lottie>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <div className=" card h-fit md:w-2/3 w-full shadow-2xl bg-base-100 border-[var(--main-color)] border-2">
          <h2 className="text-3xl font-bold text-center mt-8">Please Login!</h2>
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            <div className="flex flex-col ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                  })}
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {error && <span className="text-red-500 text-sm">{error}</span>}
            <div className="form-control mb-0">
              <input
                type="submit"
                value="Login"
                className="custom-btn-outline"
              />
            </div>
          </form>
          <div className="divider">OR</div>

          {/* Socials sign in including google */}

          <p className="text-center mb-4">
            New in Advisory Edge? please{" "}
            <Link to="/register" className="underline text-[var(--main-color)]">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
