import React from 'react';
import logo from '../../images/Logo.svg'
const Nav = () => {
    return (
        <div>
            <nav style={{backgroundColor: '#1C2B35'}} className="navbar fixed-top navbar-expand-md navbar-dark ">
                <div className="container ">
                    <a className="navbar-brand" href="/"><img src={logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Order</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Order Review</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Manage Inventory</a>
                        </li>
                        
                    </ul>
                    </div>
                </div>
                </nav>
        </div>
    );
};

export default Nav;