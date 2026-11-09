import React from 'react';
import graffitiImg from '../assets/banner-graffiti.jpeg';

export default function GraffitiBanner() {
  return (
    <section className="portfolio-graffiti-section" id="graffiti-banner">
      <div className="graffiti-inner">
        <div className="graffiti-frame">
          <img
            src={graffitiImg}
            alt="Love Letters Street Graffiti Art Mural"
            className="graffiti-image"
          />
        </div>
      </div>
    </section>
  );
}
