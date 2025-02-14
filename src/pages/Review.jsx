import "../styles/Review.css";
import Navbar from "../components/Navbar";
import reviewhero from "../assets/review/review-hero.svg";
import PlatformTestimonial from "../components/PlatformTestimonial";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
function Review() {
  return (
    <>
      <div className="tutedude-review">
        <Navbar />
        <div className="tutedude-review-hero">
          <div className="tutedude-review-hero-inner">
            <div className="tutedude-rh-left">
              <h1 className="tutedude-rh-left-head">
                <b>Trusted by Thousands!</b>
              </h1>
              <h1 className="tutedude-rh-left-head">
                Read Genuine Reviews Now!
              </h1>
            </div>
            <div className="tutedude-rh-right">
              <img src={reviewhero} alt="Review Hero" />
            </div>
          </div>
        </div>
        <PlatformTestimonial />
        <Experience />
        <Footer />
      </div>
    </>
  );
}

export default Review;
