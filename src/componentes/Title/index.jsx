import React from "react";

export const Title = ( {nombre, edad} ) => {
    return (
        <>
            <h2>Hola { nombre }</h2>
            <h3>Edad { edad }</h3>
        </>      
    )
}

export default Title;