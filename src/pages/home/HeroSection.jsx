// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HeroBtn from "../../components/heroBtn/HeroBtn";

const HeroSection = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("sliders.json");
      const data = await res.json();
      setSliders(data);
    };

    fetchData();
  }, []);

  return (
    <section className="min-h-screen">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper min-h-screen"
      >
        {sliders.map((slider, i) => (
          <SwiperSlide key={i} className="">
            <div className="relative h-screen w-full overflow-hidden">
              <div className="h-full w-full">
                <img
                  src={slider.image}
                  alt=""
                  className="w-full object-cover h-full"
                />
              </div>
              <div className="absolute z-10 top-0 left-auto bg-opacity-20 bg-slate-800 h-full w-full flex items-center">
                <div className="h-fit md:p-10 p-5 md:mx-10 rounded-lg border-[var(--main-color)] bg-opacity-20 text-white space-y-2 bg-gradient-to-r from-[var(--bg-secondary)]">
                  <h3 className="text-3xl text-[var(--main-color)] font-bold">
                    {slider.title}
                  </h3>
                  <h3 className="text-xl">{slider.subtitle}</h3>
                  <p className="md:w-1/2">{slider.description}</p>
                  <HeroBtn link={slider.link}>{slider.cta}</HeroBtn>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
