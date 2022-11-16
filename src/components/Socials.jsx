import React from "react";
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
} from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex gap-x-[12px]">
      <a
        href="/"
        className="border border-white/20  rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm hover:text-accent hover:border-accent transition-all"
      >
        <FaYoutube />
      </a>
      <a
        href="/"
        className="border border-white/20  rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm hover:text-accent hover:border-accent transition-all"
      >
        <FaFacebookF />
      </a>
      <a
        href="/"
        className="border border-white/20  rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm hover:text-accent hover:border-accent transition-all"
      >
        <FaInstagram />
      </a>
      <a
        href="/"
        className="border border-white/20  rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm hover:text-accent hover:border-accent transition-all"
      >
        <FaPinterestP />
      </a>
      <a
        href="/"
        className="border border-white/20  rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm hover:text-accent hover:border-accent transition-all"
      >
        <FaDiscord />
      </a>
    </div>
  );
};

export default Socials;
