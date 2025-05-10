'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";

// Move Bootstrap import to a client-only context
const BootstrapClient = () => {
  useEffect(() => {
    // Only import Bootstrap on the client side
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  
  return null;
};

export default function Accueil() {
  const [isLoading, setIsLoading] = useState(true);

  // Safe initialization of WOW.js
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('wowjs').then((module) => {
        const WOW = module.WOW;
        new WOW().init();
      });
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <FontAwesomeIcon icon={faCar} size="5x" spin />
      </div>
    );
  }

  const services = [
    {
      icon: "fa-certificate",
      title: "Service de qualité",
      desc: "Nous garantissons un service rapide, précis et conforme aux normes pour assurer votre sécurité sur la route.",
    },
    {
      icon: "fa-users-cog",
      title: "Staff expert",
      desc: "Notre équipe de professionnels qualifiés met son expertise à votre service pour un contrôle fiable de votre véhicule.",
      bg: "bg-light",
    },
    {
      icon: "fa-tools",
      title: "Équipement moderne",
      desc: "Nous utilisons des équipements de pointe pour garantir des diagnostics précis et des contrôles techniques fiables.",
    },
  ];

  const stats = [
    { icon: "fa-check", value: "15", label: "Années d'expérience" },
    { icon: "fa-users-cog", value: "20", label: "Techniciens expérimentés" },
    { icon: "fa-users", value: "150", label: "Clients satisfaits" },
    { icon: "fa-car", value: "120", label: "Projets complets" },
  ];

  const aboutFeatures = [
    {
      num: "01",
      title: "Professionnalisme et Expertise",
      desc: "Tous notre équipement est conforme aux nouvelles réglementations",
    },
    {
      num: "02",
      title: "Centre de service de qualité",
      desc: "Que le meilleur pour votre voiture",
    },
    {
      num: "03",
      title: "Staff expérimenté",
      desc: "20 de nos techniciens à votre disposition",
    },
  ];

  return (
    <>
      {/* Import Bootstrap on client-side only */}
      <BootstrapClient />
      
      <Navbar />

      {/* Carousel */}
      <div className="container-fluid p-0 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {[1, 2].map((i) => (
              <div key={i} className={`carousel-item ${i === 1 ? "active" : ""}`}>
                <Image
                  src={`/img/carousel-bg-${i}.jpg`}
                  alt={`Slide ${i}`}
                  width={1920}
                  height={800}
                  className="d-block w-100"
                  priority={i === 1}
                />
                <div className="carousel-caption d-flex align-items-center">
                  <div className="container">
                    <div className="row align-items-center justify-content-center justify-content-lg-start">
                      <div className="col-10 col-lg-7 text-center text-lg-start">
                        <h6 className="text-white text-uppercase mb-3 animated slideInDown">Service Auto</h6>
                        <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
                          Centre de services automobile qualifié
                        </h1>
                        <a href="/services" className="btn py-3 px-5 animated slideInDown"
                          style={{ backgroundColor: '#d81313', borderColor: '#dc3545', color: 'white' }}>
                          En savoir plus<i className="fa fa-arrow-right ms-3"></i>
                        </a>
                      </div>
                      <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                        <Image
                          src={`/img/carousel-${i}.png`}
                          alt={`Car carousel ${i}`}
                          className="img-fluid"
                          width={600}
                          height={600}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Précédent</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Suivant</span>
          </button>
        </div>
      </div>

      {/* Services */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            {services.map((s, i) => (
              <div key={i} className={`col-lg-4 col-md-6 wow fadeInUp`} data-wow-delay={`${0.1 + i * 0.2}s`}>
                <div className={`d-flex py-5 px-4 ${s.bg || ""}`}>
                  <i className={`fa ${s.icon} fa-3x flex-shrink-0`} style={{ color: '#d81313' }}></i>
                  <div className="ps-4">
                    <h5 className="mb-3">{s.title}</h5>
                    <p>{s.desc}</p>
                    <a className="text-secondary border-bottom" href="/service">En savoir plus...</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 pt-4" style={{ minHeight: "400px" }}>
              <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                <Image
                  src="/img/about.jpg"
                  alt="À propos"
                  className="position-absolute img-fluid w-100 h-100"
                  style={{ objectFit: "cover" }}
                  width={600}
                  height={400}
                />
                <div className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5" style={{ background: "rgba(0, 0, 0, .08)" }}>
                  <h1 className="display-4 text-white mb-0">15 <span className="fs-4">Ans</span></h1>
                  <h4 className="text-white">D'expérience</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h6 style={{ color: '#dc3545' }} className="text-uppercase">// À propos //</h6>
              <h1 className="mb-4"><span style={{ color: '#d81313' }}>ValidAuto</span>, le meilleur endroit pour votre véhicule</h1>
              <p className="mb-4">Chez ValidAuto, votre véhicule bénéficie d'un contrôle de qualité, réalisé par des experts avec un équipement de pointe pour une sécurité optimale.</p>
              <div className="row g-4 mb-3 pb-3">
                {aboutFeatures.map((item, i) => (
                  <div key={i} className="col-12 wow fadeIn" data-wow-delay={`${0.1 + i * 0.2}s`}>
                    <div className="d-flex">
                      <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: "45px", height: "45px" }}>
                        <span className="fw-bold text-secondary">{item.num}</span>
                      </div>
                      <div className="ps-3">
                        <h6>{item.title}</h6>
                        <span>{item.desc}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="rendezvous" className="btn py-3 px-5" style={{ backgroundColor: '#d81313', borderColor: '#d81313', color: 'white' }}>
                Découvrir nos offres<i className="fa fa-arrow-right ms-3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="container-fluid fact bg-dark my-5 py-5">
        <div className="container">
          <div className="row g-4">
            {stats.map((fact, i) => (
              <div key={i} className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay={`${0.1 + i * 0.2}s`}>
                <i className={`fa ${fact.icon} fa-2x text-white mb-3`}></i>
                <h2 className="text-white mb-2">{fact.value}</h2>
                <p className="text-white mb-0">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8 col-md-6">
              <h6 style={{ color: '#d81313' }} className="text-uppercase">Appelez dès maintenant</h6>
              <h1 className="mb-4">Vous avez des questions avant de réserver ?</h1>
              <p className="mb-0">
                Notre équipe est là pour répondre à toutes vos questions avant la prise de rendez-vous. Que ce soit pour les documents à fournir, les tarifs ou les délais, n'hésitez pas à nous contacter.
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="d-flex flex-column justify-content-center text-center h-100 p-4" style={{ backgroundColor: '#d81313' }}>
                <h3 className="text-white mb-4">
                  <i className="fa fa-phone-alt me-3"></i>+212 770 145 404
                </h3>
                <a href="/contact" className="btn btn-secondary py-3 px-5" style={{backgroundColor: 'black'}}>
                  Contactez-nous<i className="fa fa-arrow-right ms-3"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}