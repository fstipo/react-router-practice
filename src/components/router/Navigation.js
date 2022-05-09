import React from 'react';
import {
  Link,
  matchRoutes,
  // Outlet,
  // Route,
  // Routes,
  useLocation,
  useRoutes,
} from 'react-router-dom';
import './../../App.css';
import Dashboard from './Dashboard';
import Page from './Page';

export const NavLink = ({
  to,
  className,
  activeClassName,
  inactiveClassName,
  exact,
  ...rest
}) => {
  const location = useLocation();
  let routeMatches = matchRoutes(routes, location);
  let isActive;
  if (exact) {
    isActive = location.pathname === to;
  } else {
    isActive = routeMatches.some((match) => match.pathname === to);
  }
  const allClassNames =
    className + (isActive ? ` ${activeClassName}` : ` ${inactiveClassName} `);
  return <Link className={allClassNames} to={to} {...rest} />;
};

const routes = [
  {
    path: '/',
    element: <Dashboard title={'Dashboard'}></Dashboard>,
    children: [
      { path: '/', element: <p className="fw-bold p-2">overview</p> },
      { path: '/new-users', element: <p className="fw-bold p-2">new users</p> },
      { path: '/sales', element: <p className="fw-bold p-2">sales</p> },
    ],
  },
  { path: '/', element: <p className="fw-bold p-2">overview</p> },

  { path: '/projects', element: <Page title={'Projects'}></Page> },

  { path: '/team', element: <Page title={'Team'}></Page> },
  {
    path: '/calendar',
    element: <Page title={'Calendar'}></Page>,
  },
];

const Navigation = () => {
  let element = useRoutes(routes);

  return (
    <div className="container">
      <header className="d-flex justify-content-start align-items-end ms-2 mt-2">
        <h2 className="fw-3 fs-2 text-danger">ReactRouter</h2>
        <ul className="d-flex gap-3">
          <li className="btn btn-link text-decoration-none ">
            <NavLink
              className="nav__link text-decoration-none text-dark  fs-3"
              activeClassName="actives"
              inactiveClassName="inactive"
              to="/"
            >
              Dashboard
            </NavLink>
          </li>
          <li className=" btn btn-link text-decoration-none   ">
            <NavLink
              activeClassName="actives"
              inactiveClassName="inactive"
              className=" nav__link text-dark  text-decoration-none fs-3"
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li className=" btn btn-link text-decoration-none">
            <NavLink
              activeClassName="actives"
              inactiveClassName="inactive"
              className="nav__link text-dark  text-decoration-none  fs-3"
              to="/team"
            >
              Team
            </NavLink>
          </li>
          <li className="btn btn-link text-decoration-none">
            <NavLink
              activeClassName="actives"
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
      {element}
      {/* <Routes>
        <Route path="/" element={<Dashboard title={'Dashboard'}></Dashboard>}>
          <Route path="/" element={<p className="fw-bold p-2">overview</p>} />
          <Route
            path="/new-users"
            element={<p className="fw-bold p-2">new users</p>}
          ></Route>
          <Route path="/sales" element={<p className="fw-bold p-2">sales</p>} />
        </Route>
        <Route
          path="/projects"
          element={<Page title={'Projects'}></Page>}
        ></Route>
        <Route path="/team" element={<Page title={'Team'}></Page>}></Route>
        <Route
          path="/calendar"
          element={<Page title={'Calendar'}></Page>}
        ></Route>
      </Routes> */}
    </div>
  );
};

export default Navigation;
