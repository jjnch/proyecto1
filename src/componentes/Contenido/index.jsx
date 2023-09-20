import React from "react";

export const Contenido = ( {nombre, edad} ) => {
    return (
        <>
            <h2>Hola { nombre }</h2>
            <h3>Edad { edad }</h3>
        </>      
    )
}

export default Contenido;