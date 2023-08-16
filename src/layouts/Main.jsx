import { Outlet } from "react-router-dom";
import NavBar from "../shared/navBar/NavBar";
import Footer from "../shared/footer/Footer";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
