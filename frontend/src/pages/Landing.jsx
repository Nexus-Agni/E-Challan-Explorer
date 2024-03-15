import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

function Landing() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Landing;
