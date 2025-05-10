"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <>
      {/* Top Bar - Custom Red Icons */}
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
              <a className="btn btn-sm-square bg-white me-1" style={{ color: '#d81313' }} href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-sm-square bg-white me-1" style={{ color: '#d81313' }} href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="btn btn-sm-square bg-white me-1" style={{ color: '#d81313' }} href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-sm-square bg-white me-1" style={{ color: '#d81313' }} href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <div className="container-fluid">
          <Link href="/accueil" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 className="m-0" style={{ color: '#d81313' }}>
              <FontAwesomeIcon icon={faCar} className="me-3" style={{ color: '#d81313' }} />
              ValidAuto
            </h2>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="flex space-x-6" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <Link href="/accueil" className="nav-item nav-link">
                Acceuil
              </Link>
              <Link href="/services" className="nav-item nav-link">
                Nos services
              </Link>
              <Link href="/contact" className="nav-item nav-link">
                Contact
              </Link>
            </div>
            <Link 
              href="/rendezvous" 
              className="btn py-4 px-lg-5 d-none d-lg-block"
              style={{ backgroundColor: '#d81313', color: '#fff' }}
            >
              Prendre un rendez-vous
              <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
