import React from "react";
import "./testimonials.css";
import IMG1 from "../../assets/client1.jpg";
import IMG2 from "../../assets/client2.jpg";
import IMG3 from "../../assets/client3.jpg";
import IMG4 from "../../assets/client4.jpg";
import IMG5 from "../../assets/client5.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {[IMG1, IMG2, IMG3, IMG4, IMG5].map((img, index) => (
          <SwiperSlide className="testimonial" key={index}>
            <div className="client__avatar">
              <img src={img} alt="" />
            </div>
            <h5 className="client__name">Earnest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              provident facere id quasi rem, ipsam dignissimos aut dicta ab
              inventore et? Repellendus, accusantium repellat quasi dolorem iure
              accusamus recusandae dolorum.
            </small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
