import logo1 from "./../../assets/patner-logos/logo-1.png";
import logo2 from "./../../assets/patner-logos/logo-2.png";
import logo3 from "./../../assets/patner-logos/logo-3.png";
import logo4 from "./../../assets/patner-logos/logo-4.png";
import logo5 from "./../../assets/patner-logos/logo-5.png";

const Partners = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <section className="md:px-10 md:py-12 h-fit">
      <h3 className="section-title">Our Partners</h3>
      <div className="flex items-center justify-between gap-5 md:px-10">
        {logos.map((logo, i) => (
          <div key={i} className="w-52">
            <img src={logo} alt="" className="w-full h-20" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
