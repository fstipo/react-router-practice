import React from 'react';
import './../../App.css';

const Navigation = () => {
  return (
    <>
      <header className="d-flex justify-content-start align-items-end ms-2 mt-2">
        <h2 className="fw-3 fs-2">ReactRouter</h2>
        <ul className="d-flex gap-3">
          <li className="btn btn-link text-decoration-none ">
            <a className="text-decoration-none text-dark  fs-3 active" href="/">
              Dashboard
            </a>
          </li>
          <li className="btn btn-link text-decoration-none   ">
            <a
              className="text-dark  text-decoration-none fs-3 inactive"
              href="/"
            >
              Projects
            </a>
          </li>
          <li className="btn btn-link text-decoration-none">
            <a className="text-dark  text-decoration-none  fs-3" href="/">
              Team
            </a>
          </li>
          <li className="btn btn-link text-decoration-none">
            <a className="text-dark text-decoration-none fs-3" href="/">
              Calendar
            </a>
          </li>
        </ul>
      </header>
      <hr />
      <section className="m-5 section__border">
        <h1 className="m-3">Dashboard</h1>
      </section>
    </>
  );
};

export default Navigation;
