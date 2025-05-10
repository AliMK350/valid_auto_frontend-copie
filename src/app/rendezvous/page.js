"use client"
import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import axios from 'axios';

export default function Rendezvous() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    service: '',
    date: '',
    requete: '',
    marque:'',
    year:'',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const envoyerRendezVous = async (data) => {

    try {
        const response = await axios.post('http://127.0.0.1:8000/api/rendezvous', data);
        console.log('Rendez-vous enregistré !', response.data);
        alert('Rendez-vous enregistré avec succès!');
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement', error.response?.data || error.message);
        alert('Erreur lors de l’enregistrement.');
    }
};


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await envoyerRendezVous(formData);
    alert('Rendez-vous enregistré avec succès!');
    setFormData({ nom: '', email: '', service: '', date: '', requete: '', marque:'', year:'' }); // Reset form
  } catch (error) {
    console.error(error);
    alert('Erreur lors de l’enregistrement.');
  }
};


  return (
    <>
      <Navbar />
      <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: 'url(img/carousel-bg-1.jpg)' }}>
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Booking</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item"><a href="/accueil">Home</a></li>
                <li className="breadcrumb-item"><a href="/contact">Contact</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Booking</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-secondary booking my-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6 py-5">
              <div className="py-5">
                <h1 className="text-white mb-4">Fournisseur de services de réparation automobile certifié et primé</h1>
                <p className="text-white mb-0">Plus qu’une marque, ValidAuto est devenu en 15 ans un acteur majeur du contrôle technique automobile.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" style={{backgroundColor:'#d81313'}} data-wow-delay="0.6s">
                <h1 className="text-white mb-4">Prendre un rendez-vous</h1>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Nom"
                        style={{ height: '55px' }}
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control border-0"
                        placeholder="Email"
                        style={{ height: '55px' }}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select border-0"
                        style={{ height: '55px' }}
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Selectionner un service</option>
                        <option value="Visite technique">Visite technique</option>
                        <option value="Vidange">Vidange</option>
                        <option value="Pneumatiques">Pneumatiques</option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="date"
                        className="form-control border-0 datetimepicker-input"
                        placeholder="Date entretien"
                        style={{ height: '55px' }}
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Marque et modèle"
                        style={{ height: '55px' }}
                        name="marque"
                        value={formData.marque}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="number"
                        className="form-control border-0"
                        placeholder="Année modèle"
                        style={{ height: '55px' }}
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control border-0"
                        placeholder="Requete spéciale"
                        name="requete"
                        value={formData.requete}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <button style={{backgroundColor:'black'}} className="btn btn-secondary w-100 py-3" type="submit">
                        Réserver maintenant
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
