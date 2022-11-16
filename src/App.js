import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Team from "./components/Team";

function App() {
  return (
    <div className="h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden">
      <Hero />
      <About />
      <Menu />
      <Team />
    </div>
  );
}

export default App;
