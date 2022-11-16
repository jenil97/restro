import React from "react";
import Plate from "../assets/about/plate.png";
import { motion } from "framer-motion";
import { plateVariants, staggerContainer, fadeIn } from "../variants";

const About = () => {
  return (
    <section className="h-screen">
      <div className="container mx-auto min-h-[620px]">
        {/* text & image wrapper */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="min-h-[620px] flex flex-col lg:flex-row items-center"
        >
          {/* text */}
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1.8)}
            className="flex-1 text-center lg:text-left"
          >
            <div className="pretitle cursor-default">our story</div>
            <h2 className="h2 capitalize cursor-default">who we are</h2>
            <p className="mb-8 max-w-[560px] cursor-default">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis odio, tenetur et nemo quisquam a quod quaerat optio vel
              similique obcaecati accusamus fugit eveniet aut maiores numquam
              facilis voluptatibus omnis! Placeat vel non quod quis pariatur a
              aperiam, aliquam adipisci voluptatum voluptatem sit cupiditate
              dolore .
            </p>
            <button className="btn capitalize font-primary mx-auto lg:mx-0">
              find more
            </button>
          </motion.div>
          {/* image */}
          <motion.div
            variants={plateVariants}
            className="-mb-[300px] -mr-[186px] z-10"
          >
            <img src={Plate} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
