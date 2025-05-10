// app/layout.js
import './globals.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css/animate.min.css';

export const metadata = {
  title: 'ValidAuto',
  description: 'Centre de service automobile qualifié',
  keywords: 'automobile, service, contrôle technique, voiture, ValidAuto',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@600;700&family=Ubuntu:wght@400;500&display=swap"
          rel="stylesheet"
        />
        
        {/* Other CSS Libraries */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
        <link href="/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

        {/* Favicon */}
        <link rel="icon" href="/img/favicon.ico" />
        
        {/* Custom styles */}
        <link href="/css/style.css" rel="stylesheet" />
        
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
