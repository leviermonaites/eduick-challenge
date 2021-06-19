import React from "react";

import "./index.css";

const Footer = ({ screenType }) => {
  return (
    <footer id="footer">
      <p id="footer-text">
        Copyright &copy; 2020 <b>Eduick</b>.
        {screenType !== "mobile" ? " Todos os direitos reservados." : null}
      </p>
    </footer>
  );
};

export default Footer;
