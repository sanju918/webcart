import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = ({ title, subtitle, link, image }) => {
  return (
    <div>
      <section className="hero_section">
        <div className="align_center">
          <h2 className="hero_title">{title}</h2>
          <p className="hero_subtitle">{subtitle}</p>
          <Link to={link} className="align_center hero_link">
            Buy Now
          </Link>
        </div>
        <div className="align_center hero_image">
          <img src={image} alt="iphone image" className="hero_image" />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
