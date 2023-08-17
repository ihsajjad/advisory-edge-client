import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroBtn = ({ link, children }) => {
  return (
    <Link
      to={link}
      className="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-[var(--main-color)] border-2 border-[var(--main-color)] rounded-full hover:text-white group hover:bg-gray-50"
    >
      <span className="absolute left-0 block w-full h-0 transition-all bg-[var(--bg-primary)] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 translate-x-full group-hover:translate-x-0 ease">
        <FaArrowRight />
      </span>
      <span className="relative">{children}</span>
    </Link>
  );
};

export default HeroBtn;
