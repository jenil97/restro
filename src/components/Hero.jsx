import React from "react";
import Header from "./Header";

const Hero = () => {
  return (
    <section className="min-h-[980px] bg-hero bg-cover bg-right">
      {/* header */}
      <Header />
      <div className="container mx-auto lg:min-h-[700px] min-h-[850px] flex justify-center items-center">
        {/* text */}
        <div className="text-center flex flex-col items-center">
          {/* pretitle */}
          <div className="text-white text-[24px] lg:text-[28px] font-primary italic lg:font-medium mb-4 lg:mb-2">
            Nothing brings together like
          </div>
          {/* title */}
          <h1 className="h1 mb-5">Bistro Cafe</h1>
          {/* subtitle */}
          <p className="text-white max-w-[540px] font-primary mb-8">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit .{" "}
          </p>
          {/* button */}
          <button className="btn">Find out more</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
