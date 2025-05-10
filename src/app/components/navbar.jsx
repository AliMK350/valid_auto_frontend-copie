'use client';

import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');

    // Fix top padding for fixed-top navbar
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

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow fixed-top p-0">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center px-4 px-lg-5" href="#">
            <h2 className="m-0" style={{ color: '#d81313' }}>
              <FontAwesomeIcon icon={faCar} className="me-3" />
              ValidAuto
            </h2>
          </a>

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

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto p-4 p-lg-0">
              {['Accueil', 'Nos services', 'Contact'].map((item, idx) => (
                <li className="nav-item" key={idx}>
                  <a className="nav-link" href="#">{item}</a>
                </li>
              ))}
              <li className="d-lg-none mt-3">
                <button className="btn w-100" style={{ backgroundColor: '#d81313', color: '#fff' }}>
                  Prendre un rendez-vous
                </button>
              </li>
            </ul>
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
        </div>
      </nav>
    </>
  );
}
