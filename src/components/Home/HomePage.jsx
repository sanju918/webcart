import HeroSection from "./HeroSection";
import iphone from "../../assets/icons/iphone-14-pro.webp";
import mac from "../../assets/icons/mac-system-cut.jfif";

const HomePage = () => {
  return (
    <div>
      {/* Hero section */}
      <HeroSection
        title="Buy iPhone 14 Pro"
        image={iphone}
        link="/"
        subtitle="Experience the power of the latest iPhone 14 Pro with our most Pro camera ever."
      />

      {/* Featured Products */}
      <div>Featured Products</div>

      {/* Hero section */}
      <HeroSection
        title="Build Ultimate Setup"
        image={mac}
        link="/"
        subtitle="You can add Studio Display and color-matched magic accessories to your bag after configure your Mac Mini."
      />
    </div>
  );
};

export default HomePage;
