import React from "react";
import PropTypes from "prop-types";

function Navbar() {
  return (
    <nav
      style={{ top: "0" }}
      className="bg-white border-gray-200 dark:bg-gray-900 fixed	w-full h-28"
    >
      <div className="bg-black text-white justify-center w-full h-2/5 flex flex-col">
        <div className="container text-right p-5"> Navbar </div>
      </div>
      <div className="bg-white h-3/5 flex w-full flex-col">
        <div className="container flex justify-between m-auto">
          <div className="bg-white text-black ml-10">
            <img src="/footer-content/footer-logo.png" />
          </div>
          <div className="nav-tools   flex justify-evenly  h-10 w-40 ">
            <img className="m-1" src="/nav/photo1.png" alt="" />
            <img src="/nav/Photo2.png" alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;
