"use client";
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');

    // Add top padding to body to make room for fixed navbar
    if (typeof window !== 'undefined') {
      const navbarHeight = document.querySelector('.navbar')?.clientHeight || 70;
      document.body.style.paddingTop = `${navbarHeight}px`;
    }
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
              <button type="button" className="btn btn-sm-square bg-white me-1" style={{ color: '#d81313' }}><i className="fab fa-facebook-f"></i></button>
              <button type="button" className="btn btn-sm-square bg-white me-1" style={{ color: '#d81313' }}><i className="fab fa-instagram"></i></button>
              <button type="button" className="btn btn-sm-square bg-white me-1" style={{ color: '#d81313' }}><i className="fab fa-twitter"></i></button>
              <button type="button" className="btn btn-sm-square bg-white me-1" style={{ color: '#d81313' }}><i className="fab fa-linkedin-in"></i></button>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Navbar */}
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ValidAuto</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#testNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="testNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item"><a className="nav-link" href="#">Accueil</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
}
