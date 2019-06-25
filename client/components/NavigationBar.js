import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          {/* <Link to="/" className="navbar-brand">Immortal Portal</Link> */}
          <a className="navbar-brand" href="/">Immortal Portal</a>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            {/* <li><Link to="/signup">Sign up</Link></li> */}
            <li><a href="/signup">Sign Up</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}