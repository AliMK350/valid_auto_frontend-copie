'use client'
import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    import('wowjs').then((module) => {
      const WOW = module.WOW;
      new WOW().init();
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <FontAwesomeIcon style={{color:'#d81313'}} icon={faCar} size="5x" spin />
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact us for any inquiries." />
      </Head>

      <Navbar/>

      <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: 'url(/img/carousel-bg-1.jpg)' }}>
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Contact</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item"><a href="/accueil">Home</a></li>
                <li className="breadcrumb-item"><a href="/services">Service</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase" style={{color: "red"}}>Contactez-nous</h6>
            <h1 className="mb-5">Contactez-nous pour toute question</h1>
            <p></p>
          </div>

          <div className="row g-4">
            <ContactCard title="Réservation" email="validautoBooking@gmail.com" />
            <ContactCard title="Général" email="validautoGeneral@gmail.com" />
            <ContactCard title="Technique" email="validautoTech@gmail.com" />

            <div className="col-md-6">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8137443924397!2d-4.9925448254265365!3d33.9973175731777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b9a64fab547%3A0xd38556de600a8eeb!2sISTA%20%3A%20Institut%20Sp%C3%A9cialis%C3%A9%20de%20Technologie%20Appliqu%C3%A9e_Route%20Immouzer%20F%C3%A8s!5e0!3m2!1sfr!2sma!4v1745770813921!5m2!1sfr!2sma"
                frameBorder="0"
                style={{ minHeight: "350px", border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>

            <div className="col-md-6">
              <h3>Inscription</h3>
              <p><i className="fa fa-user-plus" style={{color: "red"}} aria-hidden="true"></i> Inscrivez-vous dès maintenant</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
