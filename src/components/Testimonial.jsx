import React from "react";

import TestimonialCarousel from '../components/Carousel';
import { testimonialData } from "../Data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Testimonial = () => {
  const { title, subtitle, modelImg, slider } = testimonialData;

  return (
    <section className="bg-testimonial bg-cover bg-no-repeat relative -top-[30px] lg:top-[10px] z-10 h-[850px] lg:h-[800px] pt-[60px] md:pt-[120px]">
      <div className="container mx-auto">
        {/* text */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1.6)}
          initial="hidden"
          whileInView={"show"}
          className="text-center capitalize flex flex-col items-center"
        >
          <h2 className="h2 text-white cursor-default">{title}</h2>
          <p className="text-white/70 capitalize mb-8 font-primary cursor-default">{subtitle}</p>
          <div className="mb-12">
            <img src={modelImg} alt="" />
          </div>
        </motion.div>

        {/* slider */}
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1.6)}
          initial="hidden"
          whileInView={"show"}
          className="flex justify-center items-center"
        >
          <TestimonialCarousel slider={slider} />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
