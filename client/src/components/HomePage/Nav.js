import React from 'react';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-white fixed-top">
            <a className="navbar-brand-2 mt-2 mb-2" href=""></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="false" href="/login">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="false" href="/register">Sign Up</a>
                    </li>
                </ul>
            </div>
        </nav>
      );
};

export default Nav;