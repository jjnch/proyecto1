import React, { useState } from "react";

export const Contador = () => {
    const [ count, setCount ] = useState(1);

    const sumar = () => {        
        setCount(count + 1);
    }

    const restar = () => {        
        setCount(count - 1);

        if (count <= 0)
            setCount(0);            
    }

    
    return (
        <>
            <div>
                <button className="btn btn-primary" onClick={restar}>-</button>
                <span> {count} </span>
                <button className="btn btn-primary" onClick={sumar}>+</button>
            </div>
        </>
    )
}

export default Contador;