import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("services.json");
      const data = await res.json();
      setServices(data?.slice(0, 3));
    };

    fetchData();
  }, []);

  return (
    <section id="featured-services" className="">
      <div className="bg-slate-600 bg-opacity-50 min-h-screen md:px-10 px-2 md:py-16 py-5">
        <h3 className="text-3xl w-fit mx-auto py-2 px-5 text-[var(--main-color)] text-center font-bold md:mb-10 bg-[var(--bg-secondary)] rounded-full mb-5">
          Featured Searvices
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:gap-12 gap-5 md:px-10 px-2">
          {services?.map((service, i) => (
            <div key={i} className="featured-service-card flex-1 p-5">
              <h3 className="text-xl font-bold text-center ">
                {service.title}
              </h3>
              <p className="text-justify">{service.description}</p>
              <h5 className="font-bold">Features :-</h5>
              <ul className="list-disc pl-6 isc-[var(--main-color)]">
                {service?.features?.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Link
                to="/services"
                className="hover:bg-[var(--bg-primary)] hover:text-[var(--main-color)] py-2 rounded-lg border border-[var(--main-color)] text-white duration-300 px-2 w-fit mx-auto"
              >
                {service.ctaText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
