import React, { useEffect, useState } from "react";
import "./NavBar.css";

export const NavBar = () => {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch ('https://chaovirtual.com/P1/api/categorias')
        .then((response) => response.json())
        .then((data) => { 
            console.log(data);
            setCategorias(data);
            })
        .catch((error) => console.error('Error al obtener categorias:', error));

    }, []);

    return (
        <div className="header" style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)' }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" name="nav1">
                <div className="container-fluid">
                    <div className="col-1">
                        <a className="navbar-brand" href="#">My Chao</a>
                    </div>
                    <div className="col-9">
                        <input type="text" className="form-control" placeholder="Buscar palabras" />
                    </div>
                    <div className="col-1 text-center">
                        <a href="#" style={{ textDecoration: 'none', color: 'black'}} >
                            <i className="fa fa-user"></i>
                            <div style={{ fontSize: '10px', margin: -3}}>Iniciar Sesión</div>
                        </a>
                    </div>
                    <div className="col-1 text-center">
                        <a href="#" style={{ textDecoration: 'none', color: 'black'}} >
                            <i className="fa fa-user"></i>
                            <div style={{ fontSize: '10px', margin: -3}}>Compras</div>
                        </a>
                    </div>
                </div>
                
            </nav>

            <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto" name="nav2">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {categorias.map((categoria, index) => (
                            <li className="nav-item active" key={index}>
                            <a className="nav-link" href="#">{categoria.categoria}</a>
                        </li>        
                        ))}

                    </ul>
                </div>
            </nav>
        </div>  
    )
}

export default NavBar;