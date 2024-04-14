import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-center text-white bg-dark">
      <div className="container p-4 pb-0">
        <section className="">
          <p className="d-flex justify-content-center align-items-center">
            <span className="me-3">Registrate gratis</span>
            <button data-mdb-ripple-init type="button" className="btn btn-outline-light btn-rounded">
            ¡Inscribirse!
            </button>
          </p>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: '#002854' }}>
        © 2024 Copyright:  &nbsp;
        <a className="text-white" href="https://github.com/jorearmando15?tab=repositories">Lina - Lucas & Jorge</a>
      </div>
    </footer>
  );
}

export default Footer;
