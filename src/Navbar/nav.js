import React from "react";
import "./nav.css";
import Navitem from "./navitem";
const Nav = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark px-0 m-pading nav"
        style={{
          paddingTop: "0px",
          paddingBottom: "0px",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand mt-2 mt-lg-0 d-mobile" href="#">
            <h4 className="my-auto logo">
              <b>Interior Design</b>
            </h4>
          </a>
          <div className="dropdown ms-3 mt-1 d-mobile">
            <a
              className="text-reset me-2 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-bars nav-text"></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end  bg-dark"
              aria-labelledby="navbarDropdownMenuLink"
            >
              {Navitem.map((el) => (
                <li key={el.id}>
                  <a
                    className="dropdown-item text-capitalize text-light"
                    href="#"
                  >
                    {el.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="collapse navbar-collapse d-desktop"
            id="navbarSupportedContent"
          >
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <h4 className="my-auto logo">
                <b>Interior Design</b>
              </h4>
            </a>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {Navitem.map((el) => (
                <li key={el.id} className="nav-item">
                  <a
                    className="nav-link text-capitalize nav-text"
                    href="#"
                  >
                    {el.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
