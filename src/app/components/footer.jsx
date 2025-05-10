"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Adresse</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" style={{ color: '#d81313' }}></i>
                Route ain chkef, Fès
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" style={{ color: '#d81313' }}></i>
                +212770145404
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" style={{ color: '#d81313' }}></i>
                validauto@gmail.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social me-2" style={{ borderColor: '#d81313', color: '#d81313' }} href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social me-2" style={{ borderColor: '#d81313', color: '#d81313' }} href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social me-2" style={{ borderColor: '#d81313', color: '#d81313' }} href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-outline-light btn-social" style={{ borderColor: '#d81313', color: '#d81313' }} href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Heures de travail</h4>
              <h6 className="text-light">Lundi - Vendredi:</h6>
              <p className="mb-4">09.00 - 21.00</p>
              <h6 className="text-light">Samedi - Dimanche:</h6>
              <p className="mb-0">09.00 - 17.30</p>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Services</h4>
              <a className="btn btn-link" style={{ color: '#d81313' }} href="/services">Test diagnostique</a>
              <a className="btn btn-link" style={{ color: '#d81313' }} href="/services">Entretien moteur</a>
              <a className="btn btn-link" style={{ color: '#d81313' }} href="/services">Pneumatiques</a>
              <a className="btn btn-link" style={{ color: '#d81313' }} href="/services">Vidange</a>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Boite au lettres</h4>
              <p>Inscrivez-vous dés maintenant pour des offres incontournables</p>
              <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Votre email" />
                <a
                  href='/contact'
                  type="button"
                  className="btn py-2 position-absolute top-0 end-0 mt-2 me-2"
                  style={{ backgroundColor: '#d81313', color: '#fff' }}
                >
                  S'inscrire
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <a className="border-bottom" style={{ color: '#d81313' }} href="#">ValidAuto</a>, Tous droits réservés.
                <br />
                Designed By <a className="border-bottom" style={{ color: '#d81313' }} href="https://htmlcodex.com">HTML Codex</a>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="#" style={{ color: '#d81313' }}>Acceuil</a>
                  <a href="" style={{ color: '#d81313', marginLeft: '15px' }}>Cookies</a>
                  <a href="/contact" style={{ color: '#d81313', marginLeft: '15px' }}>Aide</a>
                  <a href="/contact" style={{ color: '#d81313', marginLeft: '15px' }}>FAQs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
