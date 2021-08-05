import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { ReactComponent as AllPhotosIcon } from "./icons/menu_item_icon_all.svg";
import { ReactComponent as FavoritePhotosIcon } from "./icons/menu_item_icon_favorites.svg";

export type NavBarPage = "home" | "favorites";

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState<NavBarPage>("home");

  useEffect(() => {
    const currentPage = location.pathname.slice(1);

    if (currentPage !== activePage) {
      setActivePage(currentPage as NavBarPage);
    }
  }, [location, activePage]);

  return (
    <nav className="Navbar">
      <section>
        <h1 className="Navbar__logo">k.</h1>
        <div className="Navbar__items">
          <Link
            className={`Navbar__item ${
              activePage === "home" && "Navbar__item--active"
            }`}
            to="/home"
          >
            <AllPhotosIcon />
          </Link>
          <Link
            className={`Navbar__item ${
              activePage === "favorites" && "Navbar__item--active"
            }`}
            to="/favorites"
          >
            <FavoritePhotosIcon />
          </Link>
        </div>
      </section>
    </nav>
  );
};
