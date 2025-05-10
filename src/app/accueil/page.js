'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faCheck, faUsersCog, faUsers } from "@fortawesome/free-solid-svg-icons";

export default function Accueil() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // This useEffect runs only on the client side
    if (typeof window !== "undefined") {
      // Ensure Bootstrap's JS functions are only initialized on the client-side
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []); // Empty dependency array ensures this runs only once when the component mounts

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
    { icon: faCheck, value: "15", label: "Années d'expérience" },
    { icon: faUsersCog, value: "20", label: "Techniciens expérimentés" },
    { icon: faUsers, value: "150", label: "Clients satisfaits" },
    { icon: faCar, value: "120", label: "Projets complets" },
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
                        <h6 className="text-white text-uppercase mb-3">Service Auto</h6>
                        <h1 className="display-3 text-white mb-4 pb-3">
                          Centre de services automobile qualifié
                        </h1>
                        <a href="/services" className="btn py-3 px-5" style={{ backgroundColor: '#d81313', borderColor: '#dc3545', color: 'white' }}>
                          En savoir plus<i className="fa fa-arrow-right ms-3"></i>
                        </a>
                      </div>
                      <div className="col-lg-5 d-none d-lg-flex">
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
              <div key={i} className={`col-lg-4 col-md-6`}>
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
              <div className="position-relative h-100">
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
              <p className="mb-4">Chez ValidAuto, votre véhicule bénéficie d’un contrôle de qualité, réalisé par des experts avec un équipement de pointe pour une sécurité optimale.</p>
              <div className="row g-4 mb-3 pb-3">
                {aboutFeatures.map((item, i) => (
                  <div key={i} className="col-12">
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
              <div key={i} className="col-md-6 col-lg-3 text-center">
                <div className="fact-item bg-light rounded py-5 px-4">
                  <FontAwesomeIcon icon={fact.icon} className="fa-3x mb-3" style={{ color: '#d81313' }} />
                  <h1 className="text-primary mb-3">{fact.value}</h1>
                  <span className="fs-5 text-uppercase">{fact.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
