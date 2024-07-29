import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/data-science">Data Science</Link>
        </li>
        <li>
          <Link to="/ai-ml">AI & ML</Link>
        </li>
        <li>
          <Link to="/data-analysis">Data Analysis</Link>
        </li>
        <li>
          <Link to="/sql">SQL</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
