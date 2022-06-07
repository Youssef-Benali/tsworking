import React from "react";
import "../style/services.css";

import { AiFillCar, AiOutlineNodeIndex, AiOutlineControl } from "react-icons/ai";

const Services = () => {
  return (
    <section className="container services">
      <div className="services__heading block">
        <h1>Nos Services</h1>
        <p>
          Découvrez l'éventail de tous les services que nous vous proposons.
        </p>
      </div>
      <section className="services grid grid--1x3 block">
        <article className="services__card">
          <AiFillCar className="services__icon" />
          <h3 className="services__header">Dépannage</h3>
          <p className="services__description">
            Nous proposons un service de dépannage sur tout le territoire belge
            ainsi qu'en Europe. Que ce soit pour un véhicule en panne ou le
            transport d'un véhicule à prix concurentiels
          </p>
        </article>

        <article className="services__card">
          <AiOutlineControl className="services__icon" />
          <h3 className="services__header">Contrôle technique</h3>
          <p className="services__description">
            Nous proposons un service de dépannage sur tout le territoire belge
            ainsi qu'en Europe. Que ce soit pour un véhicule en panne ou le
            transport d'un véhicule à prix concurentiels
          </p>
        </article>

        <article className="services__card">
          <AiOutlineNodeIndex className="services__icon" />
          <h3 className="services__header">Déplacement de véhicule</h3>
          <p className="services__description">
            Nous proposons un service de dépannage sur tout le territoire belge
            ainsi qu'en Europe. Que ce soit pour un véhicule en panne ou le
            transport d'un véhicule à prix concurentiels
          </p>
        </article>
      </section>

      <button style={{display: "block", margin: "0 auto 5rem auto"}} className="btn btn-secondary">découvrez nos services</button>
    </section>
  );
};

export default Services;
