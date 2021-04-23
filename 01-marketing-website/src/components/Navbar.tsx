import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="section-1 bg-primary border-t-4 border-secondary">
        <div className="w-full flex items-center justify-center py-6">
          <Link to="/">
            <img className="block" src="/logo.svg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
