import React from "react";
import { Container } from "react-bootstrap";

const AboutPage = () => {
  return (
    <Container className="my-5">
      <h1 className="text-primary mb-4 fw-bold">About LAStormMapr</h1>

      <p>
        <strong>LAStormMapr</strong> is a free, open-source civic tool designed to help
        Louisiana residents locate emergency shelters, prepare for hurricanes, and stay
        informed during severe weather events. It combines real-time mapping, responsive
        design, and accessibility-first development — because everyone deserves clear,
        reliable disaster information.
      </p>

      <h2 className="text-accent mt-5 mb-3 fw-bold">Why I Built This</h2>
      <p>
        After experiencing the chaos and confusion of storm season firsthand, I realized
        how difficult it can be to find trustworthy, centralized information when you
        need it most. Many public tools are outdated or unfriendly to mobile users. So
        I decided to build something better — a tool designed for the people who actually
        need it, including our elders, neighbors, and communities often left behind.
      </p>

      <h2 className="text-accent mt-5 mb-3 fw-bold">Tech Stack</h2>
      <ul>
        <li>⚛️ React (Vite) frontend</li>
        <li>🐘 PHP REST API backend</li>
        <li>🗺️ Leaflet.js for interactive mapping</li>
        <li>🎨 Bootstrap 5 + custom CSS theming</li>
        <li>📄 CSV + JSON support for offline fallback</li>
        <li>📱 Fully mobile-responsive and accessibility-focused</li>
      </ul>

      <h2 className="text-accent mt-5 mb-3 fw-bold">Who Built This?</h2>
      <p>
        This project was created by <strong>Ashley Broussard</strong> — a Louisiana-based full-stack
        developer focused on accessibility, civic technology, and human-first design.
        Learn more or connect with me on:
      </p>
      <ul>
        <li><a href="https://github.com/AshB4" target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a href="https://linkedin.com/in/ashley-m-broussard-33a392253" target="_blank" rel="noreferrer">LinkedIn</a></li>
      </ul>
    </Container>
  );
};

export default AboutPage;
