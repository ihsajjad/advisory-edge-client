import { useEffect, useState } from "react";
import CountUp from "react-countup";

const OurImpect = () => {
  const [impacts, setImpacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("impact.json");
      const data = await res.json();
      setImpacts(data);
    };

    fetchData();
  }, []);
  return (
    <section className="min-h-fit md:px-10 md:py-16">
      <h3 className="section-title">Our Impact</h3>
      <div className="flex items-center justify-between text-center">
        {impacts.map((impact) => (
          <div
            key={impact.count}
            className="bg-[var(--bg-secondary)] md:p-10 rounded-lg"
          >
            <h3 className="text-2xl text-white">{impact.title}</h3>
            <span className="text-4xl font-bold text-[var(--main-color)]">
              <CountUp
                scrollSpyOnce={true}
                start={0}
                duration={5}
                end={impact.count}
                enableScrollSpy
              />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurImpect;
