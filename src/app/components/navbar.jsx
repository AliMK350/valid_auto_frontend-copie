'use client';

import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

export default function Navbar() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');

    // Add top padding to body to make room for fixed navbar
    const updateBodyPadding = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        const height = navbar.clientHeight;
        document.body.style.paddingTop = `${height}px`;
      }
    };

    updateBodyPadding();
    window.addEventListener('resize', updateBodyPadding);
    return () => window.removeEventListener('resize', updateBodyPadding);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="container-fluid bg-light p-0 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <i className="fas fa-map-marker-alt me-2" style={{ color: '#d81313' }}></i>
              <small>Route Ain Chkef, Fès</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3">
              <i className="far fa-clock me-2" style={{ color: '#d81313' }}></i>
              <small>Lundi - Vendredi : 09.00h - 21.00h</small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <i className="fas fa-phone-alt me-2" style={{ color: '#d81313' }}></i>
              <small>0770145404</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              {['facebook-f', 'instagram', 'twitter', 'linkedin-in'].map((icon, index) => (
                <button
                  key={index}
                  type="button"
                  className="btn btn-sm-square bg-white me-1"
                  style={{ color: '#d81313' }}
                >
                  <i className={`fab fa-${icon}`}></i>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Navbar with Next.js links */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <Link href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <h2 className="m-0 text-primary">
            <FontAwesomeIcon icon={faCar} className="me-3" />
            ValidAuto
          </h2>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link href="/" className="nav-item nav-link active">Accueil</Link>
            <Link href="/about" className="nav-item nav-link">About</Link>
            <Link href="/service" className="nav-item nav-link">Nos services</Link>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <div className="dropdown-menu fade-up m-0">
                <Link href="/booking" className="dropdown-item">Réservations</Link>
                <Link href="/team" className="dropdown-item">Techniciens</Link>
                <Link href="/testimonial" className="dropdown-item">Testament</Link>
                <Link href="/404" className="dropdown-item">404 Page</Link>
              </div>
            </div>
            <Link href="/contact" className="nav-item nav-link">Contact</Link>
          </div>
          <Link href="/booking" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
            Prendre un rendez-vous
            <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
          </Link>
        </div>
      </nav>
    </>
  );
}
