import React from "react";

const Hero = ({ handleLougout }) => {
  return (
    <section className="hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLougout}>Logout</button>
      </nav>
    </section>
  );
};

export default Hero;
