import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faUsersCog, faUsers, faCar } from "@fortawesome/free-solid-svg-icons";

const facts = [
  { icon: faCheck, value: "15", label: "Années d'expérience" },
  { icon: faUsersCog, value: "20", label: "Techniciens expérimentés" },
  { icon: faUsers, value: "150", label: "Clients satisfaits" },
  { icon: faCar, value: "120", label: "Projets complets" }
];

export default function FactSection() {
  return (
    <div className="container-fluid fact bg-dark my-5 py-5">
      <div className="container">
        <div className="row g-4">
          {facts.map((fact, i) => (
            <div
              className="col-md-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay={`${0.1 + i * 0.2}s`}
              key={i}
            >
              <FontAwesomeIcon icon={fact.icon} className="fa-2x text-white mb-3" />
              <h2 className="text-white mb-2">{fact.value}</h2>
              <p className="text-white mb-0">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
