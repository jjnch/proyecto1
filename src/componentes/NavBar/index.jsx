import React from "react";

export const NavBar = () => {
    
    const navbarStyle_a = {
        background: "linear-gradient(to bottom, #DDEFFB, #DDEFFB, #DDEFFB)",
        //boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Agrega una sombra
        marginBottom: "10px",
        border: "none",
    };

    const navbarStyle_b = {
        background: "#DDEFFB", // Color de fondo para la parte superior
        borderBottom: "1px solid #000000", // Línea separadora en la parte superior
        marginBottom: "-1px", // Margen negativo para ocultar la línea de separación
        border: "none",
    };

    return (
    <div>
        <nav className="navbar navbar-expand-lg" style={navbarStyle_b}>
            <a className="navbar-brand" href="#">Chao</a>
            
            <form class="container-fluid" role="search">
                    <input class="form-control me-2" type="search" placeholder="Buscador" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>

        </nav>

        <nav className="navbar navbar-expand-lg" style={ navbarStyle_a }>
            <div className="container-fluid">
              
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

               

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Cosméticos y Belleza</a></li>
                                <li><a className="dropdown-item" href="#">Alimentos y Bebidas</a></li>
                                <li><a className="dropdown-item" href="#">Artículos para el Hogar</a></li>
                                <li><a className="dropdown-item" href="#">Fans Place</a></li>
                                <li><a className="dropdown-item" href="#">Combos</a></li>
                            </ul>

                        </li>
                    </ul>
                </div>


                

            </div>
        </nav>
    </div>
    )
}

export default NavBar;