import React from "react";

import "../style/home.css";

const Hero = () => {
  return (
    <div className="block hero">
      <div className="hero__content block">
        <h5 className="hero__subtitle">Un service au top</h5>
        <h1 className="hero__header">TS-WORKING</h1>
        <p className="hero__description">
          Entreprise proposant divers services dans le domaine
          de l'automobile, du transport et bien plus encore.
        </p>
        <button className="btn btn-primary">
            nous contacter
        </button>
      </div>
  
    </div>
  );
};

export default Hero;
