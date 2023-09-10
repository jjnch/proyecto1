import React, { useState } from "react";

export const Contador = () => {
    const [ count, setCount ] = useState(1);
    const [ habilitado, setHabilitado ] = useState(false);

    const sumar = () => {        
        setCount(count + 1);
        if (count > -1)
            setHabilitado(false);
    }

    const restar = () => {        
        setCount(count - 1);
        if (count <= 1)
        {
            setCount(0);
            setHabilitado(true);
        }
            
    }

    
    return (
        <>
            <div>
                <button className="btn btn-primary" onClick={restar} disabled = { habilitado }>-</button>
                <span> {count} </span>
                <button className="btn btn-primary" onClick={sumar}>+</button>
            </div>
        </>
    )
}

export default Contador;