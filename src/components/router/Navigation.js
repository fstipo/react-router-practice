import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './../../App.css';

const NavLink = ({
  to,
  className,
  activeClassName,
  inactiveClassName,
  ...rest
}) => {
  const location = useLocation();
  console.log({ location });
  const isActive = location.pathname === to;
  const allClassNames =
    className + (isActive ? ` ${activeClassName}` : ` ${inactiveClassName} `);
  return <Link className={allClassNames} to={to} {...rest} />;
};

const Navigation = () => {
  return (
    <div className="container">
      <header className="d-flex justify-content-start align-items-end ms-2 mt-2">
        <h2 className="fw-3 fs-2 text-danger">ReactRouter</h2>
        <ul className="d-flex gap-3">
          <li className="btn btn-link text-decoration-none ">
            <NavLink
              className="nav__link text-decoration-none text-dark  fs-3"
              activeClassName="active"
              inactiveClassName="inactive"
              to="/"
            >
              Dashboard
            </NavLink>
          </li>
          <li className=" btn btn-link text-decoration-none   ">
            <NavLink
              activeClassName="active"
              inactiveClassName="inactive"
              className=" nav__link text-dark  text-decoration-none fs-3"
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li className=" btn btn-link text-decoration-none">
            <NavLink
              activeClassName="active"
              inactiveClassName="inactive"
              className="nav__link text-dark  text-decoration-none  fs-3"
              to="/team"
            >
              Team
            </NavLink>
          </li>
          <li className="btn btn-link text-decoration-none">
            <NavLink
              activeClassName="active"
              inactiveClassName="inactive"
              className="nav__link text-dark text-decoration-none fs-3"
              to="/calendar"
            >
              Calendar
            </NavLink>
          </li>
        </ul>
      </header>
      <hr />
      <h1 className="mt-2">Dashboard</h1>
      <section className="m-5 section__border"></section>
    </div>
  );
};

export default Navigation;
