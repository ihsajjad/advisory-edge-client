import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import animation from "../../assets/register.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../providers/AuthProviders";
import SocialLogin from "../../components/socialLogin/SocialLogin";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // handling sign up
  const handleSignUp = (data) => {
    setError("");
    const { email, name, password, confirm } = data;

    // matching password
    if (password !== confirm) {
      return setError("Password doesn't match");
    }

    // creating new user using email and password
    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        if (newUser) {
          // updating user's name and profile
          updateUserProfile(name, "");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-base-200 md:py-12 pb-4 md:px-10 px-2 flex md:flex-row flex-col">
      <div className="flex-1">
        <Lottie animationData={animation}></Lottie>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <div className=" card md:w-2/3 w-full shadow-2xl bg-base-100 border-[var(--main-color)] border-2">
          <h2 className="text-3xl font-bold text-center md:mt-8 mt-4">
            Please Register!
          </h2>
          <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
            <div className="flex flex-col ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                  required
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
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
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
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
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&%*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-400">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-400">
                    Password must have minimum six characters.
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-400">
                    Password must be less than 20 characters.
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-400">
                    Password must have a special character
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password*</span>
                </label>
                <input
                  type="password"
                  name="confirm"
                  placeholder="Confirm Password"
                  {...register("confirm", { required: true })}
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {error && <span className="text-red-500 text-sm">{error}</span>}
            <div className="form-control mb-0">
              <input
                type="submit"
                value="Register"
                className="custom-btn-outline"
              />
            </div>
          </form>
          <div className="divider">OR</div>

          {/* Socials sign in including google */}
          <SocialLogin />

          <p className="text-center mb-4">
            Already have an account? please{" "}
            <Link to="/login" className="underline text-[var(--main-color)]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
