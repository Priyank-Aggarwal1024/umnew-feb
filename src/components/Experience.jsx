import "../styles/Experience.css";
import star from "../assets/review/star.svg";
import eximage1 from "../assets/review/eximage1.svg";
import eximage2 from "../assets/review/eximage2.svg";
import eximage3 from "../assets/review/eximage3.svg";
import eximage4 from "../assets/review/eximage4.svg";
import eximage5 from "../assets/review/eximage5.svg";
import eximage6 from "../assets/review/eximage6.svg";
import largestar from "../assets/review/largestar.svg";
import largehalfstar from "../assets/review/largehalfstar.svg";
function Experience() {
  return (
    <>
      <div className="tutedude-experience">
        <div className="tutedude-experience-inner">
          <div className="tutedude-experience-main">
            <div className="tutedude-experience-stars">
              <img src={largestar} alt="Large Star" />
              <img src={largestar} alt="Large Star" />
              <img src={largestar} alt="Large Star" />
              <img src={largestar} alt="Large Star" />
              <img src={largehalfstar} alt="Large Half Star" />
            </div>
            <div className="tutedude-experience-heading">
              <b> Share Your Experience </b>
              Inspire Future Learners!
            </div>
            <a
              href="https://forms.gle/nvSciMjFrkGm8Ud16"
              target="_blank"
              className="tutedude-experience-submit"
            >
              Submit Review
            </a>
          </div>
          <img
            src={eximage1}
            alt="eximage1"
            className="tutedude-experience-image tutedude-experience-image-1"
          />
          <img
            src={eximage2}
            alt="eximage2"
            className="tutedude-experience-image tutedude-experience-image-2"
          />
          <img
            src={eximage3}
            alt="eximage3"
            className="tutedude-experience-image tutedude-experience-image-3"
          />
          <img
            src={eximage4}
            alt="eximage4"
            className="tutedude-experience-image tutedude-experience-image-4"
          />
          <img
            src={eximage5}
            alt="eximage5"
            className="tutedude-experience-image tutedude-experience-image-5"
          />
          <img
            src={eximage6}
            alt="eximage6"
            className="tutedude-experience-image tutedude-experience-image-6"
          />
        </div>
      </div>
    </>
  );
}

export default Experience;
