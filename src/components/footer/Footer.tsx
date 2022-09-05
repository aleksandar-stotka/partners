import React from "react";
import PropTypes from "prop-types";
import Grid from "dynamic-react-grid";

function Footer() {
  const footerImages = [
    "footer-content/footer-logo.png",
    "footer-content/creativ-logo.png",
    "footer-content/footer-strategie.png",
    "footer-content/footer-direct-naar.png",

    "footer-content/footer-contact.png",

    "footer-content/footer-social.png",
    "footer-content/footer-right.png",
  ];

  return (
    <div className="flex-container bg-dark flex  w-full justify-center  ">
      <div className="inner flex justify-center w-4/5  gap-5  h-80 ">
        {footerImages.map((image) => (
          <div key={image} className="   m-auto">
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
