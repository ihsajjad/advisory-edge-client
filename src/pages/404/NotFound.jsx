import Lottie from "lottie-react";
import animation from "../../assets/404.json";
import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const errorData = useRouteError();
  const { error } = errorData;
  console.log(errorData.status);
  return (
    <div className="h-screen w-screen bg-[var(--bg-secondary)]">
      <Lottie animationData={animation} className="h-[80vh] w-full" />
      <div className="text-center text-white">
        <p>{error?.message}</p>
        <p>
          Back to home{" "}
          <Link to="/" className="text-[var(--main-color)] font-bold">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
