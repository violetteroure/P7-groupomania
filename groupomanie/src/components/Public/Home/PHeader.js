import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

import "./header.scss";

const PHeader = () => {
    return (
        <>
            <header className="public-header">
                <img
                    src={logo}
                    alt='logo de Groupomania'
                    width={130}
                    height={130}
                />
                <nav>
                    <ul>
                        {/* <li>
              <Link to="home">Accueil</Link>
            </li> */}
                        <li>
                            <Link to="login">Connexion</Link>
                        </li>
                        <li>
                            <Link to="signup">Inscription</Link>
                        </li>
                        {/* <li>
              <Link to="admin">Admin</Link>
            </li> */}
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default PHeader;