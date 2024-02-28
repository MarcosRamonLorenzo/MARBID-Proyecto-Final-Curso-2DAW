import React from "react";
import "./HeroSection.scss";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-1">
        <video autoPlay={true} muted loop>
          <source
            src="https://hpagogvjlwigezymiejy.supabase.co/storage/v1/object/sign/Videos-Inicio/VideoInicio2.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJWaWRlb3MtSW5pY2lvL1ZpZGVvSW5pY2lvMi5tcDQiLCJpYXQiOjE3MDgzNTkyNjUsImV4cCI6MTczOTg5NTI2NX0.VixkQFOyFEuCTku8XU9D-4szwstSk7ooMP_4Pmikc7k&t=2024-02-19T16%3A14%3A25.623Z"
            type="video/mp4"
          />
        </video>
        <p>
          SE <span> FREELANCER</span>
        </p>
      </div>
      <div className="hero-section-2">
        <video autoPlay={true} muted loop>
          <source
            src="https://hpagogvjlwigezymiejy.supabase.co/storage/v1/object/sign/Videos-Inicio/VideoInicio1.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJWaWRlb3MtSW5pY2lvL1ZpZGVvSW5pY2lvMS5tcDQiLCJpYXQiOjE3MDgzNTkyNDgsImV4cCI6MTczOTg5NTI0OH0.cTbxugZO42xN9N9Pq6wnavszVuGFwgfAqylwYJG6zko&t=2024-02-19T16%3A14%3A08.422Z"
            type="video/mp4"
          />
        </video>
        <p>ENSEÑA TU VALOR</p>
      </div>
    </div>
  );
};

export default HeroSection;
