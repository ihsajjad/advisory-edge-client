import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[var(--bg-primary)] text-white">
      <div>
        <Link to="/" className=" text-2xl font-bold">
          Advisory<span className="text-[var(--main-color)]">Edge</span>
        </Link>
        {/* Your Goals, Our Expertise, Unstoppable Growth. */}
        <p>
          Advisory Edge Ltd.
          <br />
          Providing reliable tech since 2015
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link to="/about" className="link link-hover">
          About us
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
        <a className="link link-hover">Career</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
