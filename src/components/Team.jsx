import React from "react";

import signatureImg from "../assets/team/signature.png";
import chefImg from "../assets/team/chef.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Team = () => {
  return (
    <section className="relative top-90 z-10 lg:top-[180px] min-h-[720px]">
      <div className="container mx-auto">
        {/* text & image wrapper */}
        <div className="flex flex-col lg:flex-row lg:gap-x-[120px] items-center lg:items-start">
          {/* text */}
          <motion.div
            variants={fadeIn("down", "tween", 0.6, 1.6)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 text-center lg:text-left lg:pt-16"
          >
            <h2 className="h2 capitalize">meet our chef</h2>
            <p className="font-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis adipisci repudiandae enim ratione corrupti voluptatum
              suscipit distinctio dolor. Sequi exercitationem quae deserunt
              reiciendis nesciunt perferendis atque quisquam, odit facere!
              Minima esse reiciendis, magnam fugiat totam maxime consequatur
              perspiciatis voluptas consequuntur.
            </p>
            <div className="my-[26px]">
              <div className="text-2xl capitalize font-bold text-accent font-primary">
                peter senchez
              </div>
              <div className="text-[15px] font-bold capitalize text-grey/70 font-primary">
                executive chef
              </div>
            </div>
            <div className="flex justify-center lg:justify-start mb-6 lg:mb-0">
              <img src={signatureImg} alt="" />
            </div>
          </motion.div>
          {/* image */}
          <motion.div
            variants={fadeIn("up", "tween", 0.7, 1.6)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1"
          >
            <img src={chefImg} alt="" width={350} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
