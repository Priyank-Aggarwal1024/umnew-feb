import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef, useState } from "react";
import "../styles/PlatformTestimonial.css";
import "swiper/css";
import larrow from "../assets/review/larrow.svg";
import rarrow from "../assets/review/rarrow.svg";
import larrowfill from "../assets/review/larrowfill.svg";
import rarrowfill from "../assets/review/rarrowfill.svg";
import LinkedinReview from "./LinkedinReview";
import google from "../assets/review/google.svg";
import reviewtext from "../assets/review/reviewtext.svg";
import star from "../assets/review/star.svg";
import halfstar from "../assets/review/halfstar.svg";
function PlatformTestimonial() {
  const reviews = [
    {
      title: `"Highly recommended for beginners and professionals"`,
      body: (
        <p className="tutedude-rritrb-para">
          Learners appreciate the well-structured courses, expert instructors,
          and hands-on learning. They find the lessons engaging, the support
          helpful, and the pricing affordable, making learning easy and
          effective. <b>Practical assignments and real-world projects</b> help
          them gain confidence and useful skills.
        </p>
      ),
      rating: "4.4",
      totalreview: `{301 total reviews}`,
    },
    {
      title: `"Highly recommended for beginners and professionals"`,
      body: (
        <p className="tutedude-rritrb-para">
          Learners appreciate the well-structured courses, expert instructors,
          and hands-on learning. They find the lessons engaging, the support
          helpful, and the pricing affordable, making learning easy and
          effective. <b>Practical assignments and real-world projects</b> help
          them gain confidence and useful skills.
        </p>
      ),
      rating: "4.0",
      totalreview: `{301 total reviews}`,
    },
    {
      title: `"Highly recommended for beginners and professionals"`,
      body: (
        <p className="tutedude-rritrb-para">
          Learners appreciate the well-structured courses, expert instructors,
          and hands-on learning. They find the lessons engaging, the support
          helpful, and the pricing affordable, making learning easy and
          effective. <b>Practical assignments and real-world projects</b> help
          them gain confidence and useful skills.
        </p>
      ),
      rating: "5.0",
      totalreview: `{302 total reviews}`,
    },
  ];
  const [tab, setTab] = useState(0);
  const swiper = useRef();
  const swiper1 = useRef();
  const [lefthover, setLeftHover] = useState(false);
  const [righthover, setRightHover] = useState(false);
  const goToSlide = (index) => {
    if (swiper.current && swiper.current.swiper) {
      swiper.current.swiper.slideTo(index);
    }
  };
  const goNext = () => {
    if (swiper1.current && swiper1.current.swiper) {
      swiper1.current.swiper.slideNext(); // Move to next slide
    }
  };

  const goPrev = () => {
    if (swiper1.current && swiper1.current.swiper) {
      swiper1.current.swiper.slidePrev(); // Move to previous slide
    }
  };
  return (
    <>
      <div className="tutedude-pt">
        <div className="tutedude-pt-top">
          <div className="tutedude-ptt-top">
            <div className="tutedude-ptt-top-head">Testimonials</div>
            <div className="tutedude-ptt-top-para">
              See what our learners say across WhatsApp, LinkedIn, Instagram,
              Google Reviews, and more – Real feedback, Real impact!
            </div>
          </div>
          <div className="tutedude-ptt-middle">
            <div
              className={`tutedude-ptt-middle-link ${
                tab == 0 && "tutedude-ptt-middle-linkactive"
              } `}
              onClick={() => goToSlide(0)}
            >
              Linkedin
            </div>
            <div
              className={`tutedude-ptt-middle-link ${
                tab == 1 && "tutedude-ptt-middle-linkactive"
              } `}
              onClick={() => goToSlide(1)}
            >
              Google Review{" "}
            </div>
            <div
              className={`tutedude-ptt-middle-link tutedude-ptt-middle-link-whatsapp ${
                tab == 2 && "tutedude-ptt-middle-linkactive"
              } `}
              onClick={() => goToSlide(2)}
            >
              Whatsapp
            </div>
            <div
              className={`tutedude-ptt-middle-link ${
                tab == 3 && "tutedude-ptt-middle-linkactive"
              } `}
              onClick={() => goToSlide(3)}
            >
              Other
            </div>
          </div>
          <div className="tutedude-ptt-bottom">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={(swiper) => setTab(swiper.activeIndex)}
              id="tutedude-ptt-bottom-slide"
              ref={swiper}
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              allowTouchMove={false}
            >
              <SwiperSlide>
                <LinkedinReview />
              </SwiperSlide>
              <SwiperSlide>
                <LinkedinReview />
              </SwiperSlide>
              <SwiperSlide>
                <LinkedinReview />
              </SwiperSlide>
              <SwiperSlide>
                <LinkedinReview />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="tutedude-ratingreview">
        <div className="tutedude-ratingreview-inner">
          <div className="tutedude-rri-top">
            <div className="tutedude-rri-top-head">4.8 average Ratings </div>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={(swiper) => setTab(swiper.activeIndex)}
              ref={swiper1}
              id="tutedude-rri-review-swiper"
            >
              {reviews.map((review) => (
                <SwiperSlide className="tutedude-rri-top-review-slide">
                  <div className="tutedude-rri-top-review">
                    <div className="tutedude-rri-top-review-top">
                      <div className="tutedude-rritrt-left">
                        <img
                          src={google}
                          alt="Google"
                          className="tutedude-rritrt-left-google"
                        />
                        <img
                          src={reviewtext}
                          alt="reviewtext"
                          className="tutedude-rritrt-left-review"
                        />
                      </div>
                      <div className="tutedude-rritrt-right">
                        <div className="tutedude-rritrtr-left">
                          <span>{review.rating}</span>
                          <div className="tutedude-rritrtr-left-stars">
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={halfstar} alt="Half Star" />
                          </div>
                        </div>
                        <div className="tutedude-rritrtr-right">
                          {review.totalreview}
                        </div>
                      </div>
                    </div>
                    <div className="tutedude-rri-top-review-bottom">
                      <div className="tutedude-rritrb-head">{review.title}</div>
                      {review.body}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="tutedude-rri-bottom">
            <img
              src={lefthover ? larrowfill : larrow}
              onMouseEnter={() => setLeftHover(true)}
              onMouseLeave={() => setLeftHover(false)}
              alt="Larrow"
              className="tutedude-rrib-larrow"
              onClick={goPrev}
            />

            <img
              src={righthover ? rarrowfill : rarrow}
              alt="rarrow"
              onMouseEnter={() => setRightHover(true)}
              onMouseLeave={() => setRightHover(false)}
              className="tutedude-rrib-rarrow"
              onClick={goNext}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PlatformTestimonial;
