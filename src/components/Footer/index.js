import React from 'react';

import './style.scss';

const Footer = () => (
  <div className="footer-container">
    <footer className="footer">
      <div >
        <p>Términos y condiciones</p>
        <p>Comentarios  sugerencias <a href="/" target="_self">atencion@liverpool.com.mx</a></p>
      </div>
      <div className="footer-social-container">
        <ul className="footer-social">
          <li><i className="fa fa-instagram"></i></li>
          <li><i className="fa fa-facebook"></i></li>
          <li><i className="fa fa-twitter"></i></li>
        </ul>
      </div>

      <p className="footer-rights">Precio en rojo aplica el descuento más alto, las promociones pueden diferir de las publicadas en tienda</p>
      <p className="footer-rights">2020 Liverpool / Todos los derechos reservados D.R. &reg;</p>
    </footer>
  </div>
);

export default Footer;