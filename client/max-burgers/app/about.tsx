import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us - Max Burgers" },
    {
      name: "description",
      content:
        "Learn about Max Burgers - our story, mission, and commitment to quality.",
    },
  ];
}

export default function About() {
  return (
    <div className="about-page">
      <div className="hero-section">
        <h1>About Max Burgers</h1>
        <p className="hero-subtitle">
          Crafting exceptional burgers since day one
        </p>
      </div>

      <div className="content-section">
        <div className="story">
          <h2>Our Story</h2>
          <p>
            Max Burgers was born from a simple passion: creating the perfect
            burger. What started as a small family business has grown into a
            beloved local institution, but our commitment to quality and flavor
            remains unchanged.
          </p>
        </div>

        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            We believe that great food brings people together. Every burger we
            make is crafted with premium ingredients, attention to detail, and a
            whole lot of love. From our hand-formed patties to our freshly baked
            buns, we never compromise on quality.
          </p>
        </div>

        <div className="values">
          <h2>What We Stand For</h2>
          <ul>
            <li>🥩 Premium, locally-sourced ingredients</li>
            <li>🍞 Fresh-baked buns daily</li>
            <li>🌱 Supporting local farmers and suppliers</li>
            <li>👨‍🍳 Expert craftsmanship in every bite</li>
            <li>🤝 Building community through great food</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
