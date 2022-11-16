import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden">
      <Hero />
      <About />
    </div>
  );
}

export default App;
