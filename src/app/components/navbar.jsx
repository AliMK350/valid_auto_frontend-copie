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

      {/* Fixed Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light shadow fixed-top p-0" style={{ backgroundColor: '#fff' }}>
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center px-4 px-lg-5" href="#">
            <h2 className="m-0" style={{ color: '#d81313' }}>
              <FontAwesomeIcon icon={faCar} className="me-3" />
              ValidAuto
            </h2>
          </Link>

          {/* Hamburger Icon on Mobile */}
          <button
            className="navbar-toggler me-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="nav-item nav-link">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <Link className="nav-item nav-link" href="#">Accueil</Link>
              <Link className="nav-item nav-link" href="#">Nos services</Link>
              <Link className="nav-item nav-link" href="#">Contact</Link>
              <div className="d-lg-none mt-3">
                <button
                  type="button"
                  className="btn w-100"
                  style={{ backgroundColor: '#d81313', color: '#fff' }}
                >
                  Prendre un rendez-vous
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Button */}
          <div className="d-none d-lg-block">
            <button
              type="button"
              className="btn py-4 px-lg-5"
              style={{ backgroundColor: '#d81313', color: '#fff' }}
            >
              Prendre un rendez-vous
              <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
