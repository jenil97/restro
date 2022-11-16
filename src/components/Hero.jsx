import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";

const Hero = () => {
  return (
    <section className="min-h-[750px] bg-hero bg-cover bg-right">
      {/* header */}
      <Header />
      <div className="container mx-auto lg:min-h-[700px] min-h-[850px] flex justify-center items-center">
        {/* text */}
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          className="text-center flex flex-col items-center"
        >
          {/* pretitle */}
          <motion.div
            variants={fadeIn("down", "tween", 0.2, 1.1)}
            className="text-white text-[24px] lg:text-[28px] font-primary italic lg:font-medium mb-4 lg:mb-2 cursor-default"
          >
            Nothing brings together like
          </motion.div>
          {/* title */}
          <motion.h1
            variants={fadeIn("down", "tween", 0.3, 1.1)}
            className="h1 mb-5 cursor-default"
          >
            Bistro Cafe
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", "tween", 0.4, 1.1)}
            className="text-white max-w-[540px] font-primary italic mb-8 cursor-default"
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit .{" "}
          </motion.p>
          {/* button */}
          <motion.div variants={fadeIn("down", "tween", 0.5, 1.1)}>
            <button className="btn font-primary">Find more</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
