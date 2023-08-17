import logo1 from "./../../assets/patner-logos/logo-1.png";
import logo2 from "./../../assets/patner-logos/logo-2.png";
import logo3 from "./../../assets/patner-logos/logo-3.png";
import logo4 from "./../../assets/patner-logos/logo-4.png";
import logo5 from "./../../assets/patner-logos/logo-5.png";

const Partners = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <section className="h-fit md:px-10 px-2 md:py-16 py-5">
      <h3 className="section-title">Our Partners</h3>
      <div className="flex md:flex-row items-center justify-between flex-wrap gap-5 md:px-10 h-fit">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt=""
            className="md:w-40 w-20 md:h-12 h-6 block"
          />
        ))}
      </div>
    </section>
  );
};

export default Partners;
