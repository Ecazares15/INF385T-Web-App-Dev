import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav id="app-navbar" className="navbar bg-body-tertiary">
      <div className="container m-0 p-0 text-center">
        <div className="row align-items-center w-100">
          <div className="col-1">Icon</div>
          <div className="col-2">Wander World</div>
          <div className="col-6"></div>
          <div className="col-1">
            <Link to="/Feed">Feed</Link>
          </div>
          <div className="col-1">
            <Link to="/Community">Community</Link>
          </div>
          <div className="col-1">Icon</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
