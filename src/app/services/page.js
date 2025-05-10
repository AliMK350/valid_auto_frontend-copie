'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
export default function Service(){
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
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
        <Navbar/>
        <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(img/carousel-bg-2.jpg)"}}>
        <div className="container-fluid page-header-inner py-5">
            <div className="container text-center">
                <h1 className="display-3 text-white mb-3 animated slideInDown">Services</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center text-uppercase">
                        <li className="breadcrumb-item"><a href="/accueil">Home</a></li>
                        <li className="breadcrumb-item"><a href="/rendezvous">Booking</a></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">Services</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
        <div className="container-xxl service py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h1 className="mb-5">Explorer nos services</h1>
            </div>
            <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="col-lg-4">
                    <div className="nav w-100 nav-pills me-4">
                        <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active" data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                            <i className="fa fa-car-side fa-2x me-3" style={{color: "black"}} ></i>
                            <h4 className="m-0" style={{color: "black"}}>Test diagnostic</h4>
                        </button>
                        <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                            <i className="fa fa-car fa-2x me-3" style={{color:"black"}}></i>
                            <h4 className="m-0" style={{color:"black"}}>Entretien moteur</h4>
                        </button>
                        <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                            <i className="fa fa-cog fa-2x me-3" style={{color:"black"}}></i>
                            <h4 className="m-0" style={{color:"black"}}>Changement de pneus</h4>
                        </button>
                        <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-0" data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                            <i className="fa fa-oil-can fa-2x me-3" style={{color:"black"}}></i>
                            <h4 className="m-0" style={{color:"black"}}>Vidange</h4>
                        </button>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="tab-content w-100">
                        <div className="tab-pane fade show active" id="tab-pane-1">
                            <div className="row g-4">
                                <div className="col-md-6" style={{minHeight: '350px'}}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute img-fluid w-100 h-100" src="img/service-1.jpg"
                                            style={{objectFit: 'cover'}} alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-3">15 ans d'experience dans le domaine de l'entretien automobile</h3>
                                    <p className="mb-4">En tant que société d'inspection neutre et indépendante, ValidAuto se concentre sur les deux principaux enjeux : vérifier le bon état des véhicules pour la sécurité des conducteurs et des usagers de la route, et mesurer la pollution des gaz d'échappement pour protéger l'environnement</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Service de qualité</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Mechaniciens experts</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Equipement moderne</p>
                                    <a href="/rendezvous" className="btn btn-primary py-3 px-5 mt-3" style={{backgroundColor:'#d81313'}}>Résérver un rendez-vous<i className="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-2">
                            <div className="row g-4">
                                <div className="col-md-6" style={{minHeight: '350px'}}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute img-fluid w-100 h-100" src="img/service-2.jpg"
                                            style={{objectFit: 'cover'}} alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-3">15 ans d'experience dans le domaine de l'entretien automobile</h3>
                                    <p className="mb-4">Avec des années d'expertise dans l'entretien moteur, nous offrons des services de vérification et de réparation de tous les composants essentiels. Assurez-vous que votre moteur fonctionne de manière optimale grâce à nos interventions spécialisées.</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                    <a href="/rendezvous" className="btn btn-primary py-3 px-5 mt-3" style={{backgroundColor:'#d81313'}}>Résérver un rendez-vous<i className="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-3">
                            <div className="row g-4">
                                <div className="col-md-6" style={{minHeight: '350px'}}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute img-fluid w-100 h-100" src="img/service-3.jpg"
                                            style={{objectFit: 'cover'}} alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-3">15 ans d'experience dans le domaine de l'entretien automobile</h3>
                                    <p className="mb-4">Nous vous aidons à remplacer vos pneus usés ou endommagés pour garantir une conduite en toute sécurité. Profitez de notre service de montage, d'équilibrage et de choix de pneus adaptés à votre véhicule.</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                    <a href="/rendezvous" className="btn btn-primary py-3 px-5 mt-3" style={{backgroundColor:'#d81313'}}>Résérver un rendez-vous<i className="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-4">
                            <div className="row g-4">
                                <div className="col-md-6" style={{minHeight: '350px'}}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute img-fluid w-100 h-100" src="img/service-4.jpg"
                                            style={{objectFit: 'cover'}} alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-3">15 ans d'experience dans le domaine de l'entretien automobile</h3>
                                    <p className="mb-4">Maintenez votre moteur en parfait état avec notre service de vidange. Nous changeons l'huile moteur et remplaçons le filtre pour assurer une performance optimale et prolonger la durée de vie de votre moteur.</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                    <a href="/rendezvous" className="btn btn-primary py-3 px-5 mt-3" style={{backgroundColor:'#d81313'}}>Résérver un rendez-vous<i className="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <Footer/>
        </>
    )
}