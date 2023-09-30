import React from "react";
import "./NavBar.css";

export const NavBar = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light" name="nav1">
                <div className="container-fluid">
                    <div className="col-1">
                        <a className="navbar-brand" href="#">My Chao</a>
                    </div>
                    <div className="col-10">
                        <input type="text" className="form-control" placeholder="Buscar palabras" />
                    </div>
                    <div className="col-1 text-center">
                        <a href="#">Iniciar Sesión <i className="fas fa-sign-in-alt"></i></a>
                    </div>
                </div>
                
            </nav>

            <nav className="navbar navbar-expand-lg navbar-light bg-light" name="nav2">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Acerca de</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Servicios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>  
    )
}

export default NavBar;