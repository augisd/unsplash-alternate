import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => (
  <nav>
    <section>
      <h1>k.</h1>
      <Link to="/home">Home</Link>
      <Link to="/favorites">Favorites</Link>
    </section>
  </nav>
);
