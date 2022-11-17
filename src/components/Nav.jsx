import React from "react";

const Nav = () => {
  return (
    <nav className="w-full h-full">
      <ul className="py-12">
        <li className="h-full flex flex-col justify-center items-center gap-y-8 lg:gap-y-6">
          <a className="text-xl capitalize font-primary italic hover:text-dark transition-all duration-300" href="/">Home</a>
          <a className="text-xl capitalize font-primary italic hover:text-dark transition-all duration-300" href="/">about</a>
          <a className="text-xl capitalize font-primary italic hover:text-dark transition-all duration-300" href="/">menu</a>
          <a className="text-xl capitalize font-primary italic hover:text-dark transition-all duration-300" href="/">team</a>
          <a className="text-xl capitalize font-primary italic hover:text-dark transition-all duration-300" href="/">book a table</a>
          <a className="text-xl capitalize font-primary italic hover:text-dark transition-all duration-300" href="/">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
