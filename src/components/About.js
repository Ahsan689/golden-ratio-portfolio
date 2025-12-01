import { download } from "../svgImage";

const About = () => {
  return (
    <div className="aali_tm_section" id="about">
      <div className="aali_tm_about">
        <div className="about_inner">
          <div className="left">
            <div className="image">
              <img src="img/thumbs/45-49.jpg" alt="aali image" />
              <div className="main" data-img-url="img/thumbs/SUFIYAN_PNG.png" />
              <span
                className="square moving_effect"
                data-direction="y"
                data-reverse="yes"
              />
              <span className="border">
                <span
                  className="in moving_effect"
                  data-direction="x"
                  data-reverse="yes"
                />
              </span>
            </div>
          </div>
          <div className="center">
            <div className="title wow fadeInUp" data-wow-duration="1s">
              <span className="small">About Us</span>
              <h3>
                {`Golden`} <span> Ratio</span>
              </h3>
              <h3>
                 <span>Design</span>
              </h3>
            </div>
            <div
              className="text wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <p>
              At Golden Ratio Design, we are dedicated to delivering excellence across every project, whether it’s residential, commercial, corporate, or hospitality. Our team of passionate professionals is committed to redefining the standards of design and craftsmanship, pushing the boundaries of what is possible.
              </p>
              <p>
              Our work is beautifully showcased at Golden Ratio Design, where stunning interiors meet bespoke artisanal furniture. Complemented by our dynamic Design Studio and an advanced three-storey furniture factory, Golden Ratio Design is more than a brand; it's a celebration of creativity and a relentless pursuit of perfection. We pride ourselves on maintaining the highest standards of quality and exceptional client service, reflecting the very best of the human spirit in every detail
              </p>
            </div>
            <div
              className="aali_tm_button wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
             
            </div>
          </div>
          <div className="right">
            <div className="image">
              <img src="img/thumbs/41-61.jpg" alt="aali image" />
              <div className="main" data-img-url="img/thumbs/ushna_png.png" />
              <div
                className="square moving_effect"
                data-direction="x"
                data-reverse="no"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
