import HeroSection from "./HeroSection";
import iphone from "../../assets/icons/iphone-14-pro.webp";
import mac from "../../assets/icons/mac-system-cut.jfif";
import FeatureProdcuts from "./FeatureProdcuts";

const HomePage = () => {
  return (
    <div>
      {/* Hero section */}
      <HeroSection
        title="Buy iPhone 14 Pro"
        image={iphone}
        link="/products/65db51809202180bca27e562"
        subtitle="Experience the power of the latest iPhone 14 Pro with our most Pro camera ever."
      />

      {/* Featured Products */}
      <FeatureProdcuts />

      {/* Hero section */}
      <HeroSection
        title="Build Ultimate Setup"
        image={mac}
        link="/products/65db51809202180bca27e56a"
        subtitle="You can add Studio Display and color-matched magic accessories to your bag after configure your Mac Mini."
      />
    </div>
  );
};

export default HomePage;
