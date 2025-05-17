import React from "react";
import { Container } from "react-bootstrap";

const AboutPage = () => {
  return (
    <Container className="my-5">
      <h1 className="text-primary mb-4 fw-bold">About LAStormMapr</h1>

      <p>
        <strong>LAStormMapr</strong> is a civic tool designed to help
        Louisiana residents locate emergency shelters, prepare for hurricanes, and stay
        informed during severe weather events. It combines real-time mapping, responsive
        design, and accessibility-first development — because everyone deserves clear,
        reliable disaster information.
      </p>

      <h2 className="text-accent mt-5 mb-3 fw-bold">Why I Built This</h2>
<p>
  Louisiana already has strong emergency systems in place—but not all of 
  them are built with modern tech or mobile-first design in mind. 
  I wanted to create something that works seamlessly on the go,
   that’s accessible to more people, and that complements the official 
   resources with clarity, speed, and ease of use. LAStormMapr is about
    taking what’s already good and making it even better—especially for
     everyday folks trying to make quick decisions during chaotic moments.
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
