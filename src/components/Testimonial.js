import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation]);


const Testimonial = () => {
  const props = {
    slidesPerView: 1,
    loop: true,
    pagination: false,
    navigation: {
      prevEl: ".prev_button",
      nextEl: ".next_button",
    },
  };
  return (
    <div className="aali_tm_section" id="testimonial">
      <div className="aali_tm_testimonials">
        <div className="left">
          <div className="image">
            <img src="SAUDI_ARABIA_LIVING_ROOM_RENDERS/005.png" alt="aali image"  height={"590px"} style={{borderRadius:"30px"}}/>
          </div>
        </div>
        <div className="right">
          <div className="right_in">
            <div
              className="aali_tm_main_title"
              data-text-align="left"
              data-color="light"
            >
              <span>Testimonial</span>
              <h3>What People Say</h3>
            </div>
            <Swiper {...props} className="owl-carousel">
              <SwiperSlide className="item">
                <div className="text">
                  <p>
                    {`Golden Ratio Design turned our house into a home that feels effortlessly elegant. From the first concept to the final styling, every proportion, material and play of light was considered. We still catch ourselves admiring rooms we used to simply walk through.`}
                  </p>
                </div>
                <div className="name">
                  <h3>
                    Ayesha &amp; Bilal Khan, <span>Residential Villa Owners</span>
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="text">
                  <p>
                    {`We needed a space that would make guests stop and look, and that is exactly what they delivered. The team understood our brand instantly and translated it into an interior that has become the talking point of every visit. Our footfall has genuinely grown since the redesign.`}
                  </p>
                </div>
                <div className="name">
                  <h3>
                    Hassan Raza, <span>Restaurant Owner</span>
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="text">
                  <p>
                    {`Working with Golden Ratio Design was refreshingly smooth. They balanced a demanding timeline with an obsessive eye for craftsmanship, and the result is an office our team is proud to walk into every morning. Professional, communicative and genuinely creative.`}
                  </p>
                </div>
                <div className="name">
                  <h3>
                    Sana Mahmood, <span>Managing Director</span>
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="text">
                  <p>
                    {`What sets them apart is the craftsmanship. The bespoke furniture pieces feel like art, yet they are built to live with every day. They listened carefully, respected our budget, and still exceeded what we imagined was possible.`}
                  </p>
                </div>
                <div className="name">
                  <h3>
                    Omar Sheikh, <span>Apartment Owner</span>
                  </h3>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="direct">
              <a className="prev_button">
                <i className="icon-left" />
              </a>
              <a className="next_button">
                <i className="icon-right" />
              </a>
            </div>
          </div>
        </div>
        <span className="border">
          <span
            className="in moving_effect"
            data-direction="x"
            data-reverse="yes"
          />
        </span>
        <span
          className="square moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
        <span className="quote moving_effect" data-direction="x">
          <i className="icon-quote-left" />
        </span>
      </div>
    </div>
  );
};

export default Testimonial;
