"use client"
const ContactCard = ({ title, email }) => {
    return (
      <div className="col-md-4">
        <div className="bg-light d-flex flex-column justify-content-center p-4">
          <h5 className="text-uppercase">{title}</h5>
          <p className="m-0">
            <i className="fa fa-envelope-open text me-2" style={{color:'red'}}></i>{email}
          </p>
        </div>
      </div>
    );
  };
  
  export default ContactCard;
  