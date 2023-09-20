import React from "react";
import "./NavBar.css";

export const NavBar = () => {
    
    const navbarStyle = {
        background: "linear-gradient(to bottom, #DDEFFB, #ffffff, #DDEFFB)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Agrega una sombra
        marginBottom: "10px",
        border: "none",
    };

    const navbarCentrar = {
        display : "flex",
        justifyContent: "center",
    };

    const highlightStyle = {
        backgroundColor: "orange", // Color de fondo al pasar el mouse
    };

    const brandTitle = {
        marginLeft: "20px", // Margen en los lados del texto "My Chao"
    };

   
    const branSearch = {
        marginRight: "40px", // Margen en los lados del texto "My Chao"
    };

    return (
    <div className="header" style={navbarStyle}>
        
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" style={brandTitle} href="#">My Chao</a>
            
            <form class="container-fluid" role="search" style={branSearch}>
                    <input class="form-control me-2" type="search" placeholder="Buscador" aria-label="Search"  />
                    &nbsp;&nbsp;&nbsp;
                    <button class="btn btn-outline-success" type="submit" >Buscar</button>
            </form>

        </nav>

        <nav className="navbar navbar-expand-lg mx-auto">
            <div className="container-fluid">
              
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

               

                <div className="collapse navbar-collapse align-center" id="navbarNav" style={navbarCentrar}>
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Cosméticos y Belleza</a></li>
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Alimentos y Bebidas</a></li>
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Artículos para el Hogar</a></li>
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Fans Place</a></li>
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Combos</a></li>
                    </ul>
                </div>

            </div>
        </nav>
    </div>
    )
}

export default NavBar;