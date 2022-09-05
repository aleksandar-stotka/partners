import React from "react";
import PropTypes from "prop-types";

function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 h-28">
      <div className="bg-black text-white h-2/5 flex flex-col">
        <div className="container text-right m-auto"> Navbar </div>
      </div>
      <div className="bg-white h-3/5 flex flex-col">
        <div className="container m-auto">
          <div className="bg-white text-black">LOGO</div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;
