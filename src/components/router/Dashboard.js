import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from './Navigation';
import './../../App.css';

const Dashboard = ({ title }) => {
  return (
    <>
      <header className="d-flex gap-5">
        <h1>{title}</h1>
        <nav className="d-flex gap-2">
          <NavLink
            className="text-decoration-none text-dark"
            activeClassName="active-link"
            exact={true}
            to="/"
          >
            Overview
          </NavLink>
          <NavLink
            to="/new-users"
            activeClassName="active-link"
            inactiveClassName="inactive"
            className="text-decoration-none text-dark"
          >
            New Users
          </NavLink>
          <NavLink
            to="/sales"
            activeClassName="active-link"
            inactiveClassName="inactive"
            className="text-decoration-none text-dark"
          >
            Sales
          </NavLink>
        </nav>
      </header>
      <main>
        <section className="m-5 section__border">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default Dashboard;
