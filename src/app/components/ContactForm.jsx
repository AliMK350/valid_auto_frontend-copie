import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    adresse: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json', // important pour que Laravel retourne du JSON
        },
        body: JSON.stringify(formData)
      });
  
      // Vérifie si la réponse est vraiment du JSON
      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('La réponse du serveur n’est pas en JSON. Vérifie l’URL ou le contrôleur Laravel.');
      }
  
      const data = await res.json();
  
      if (res.ok) {
        setSuccessMessage(data.message || 'Abonnement enregistré avec succès !');
        setFormData({ nom: '', email: '', telephone: '', adresse: '' });
        setErrorMessage('');
      } else {
        setErrorMessage(data.message || 'Une erreur est survenue');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Erreur de connexion au serveur ou réponse invalide.');
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      <div className="form-group mb-3">
        <input
          type="text"
          name="nom"
          className="form-control"
          placeholder="Nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group mb-3">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group mb-3">
        <input
          type="text"
          name="telephone"
          className="form-control"
          placeholder="Telephone"
          value={formData.telephone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group mb-3">
        <textarea
          name="adresse"
          className="form-control"
          rows="5"
          placeholder="Adresse"
          value={formData.adresse}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <center><button type="submit" className="btn btn-primary" style={{backgroundColor:'red'}}>Envoyer</button></center>
    </form>
  );
}
