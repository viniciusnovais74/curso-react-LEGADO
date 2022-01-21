import React, { useEffect, useState } from "react";

export default props => {
    let [Contador, setContador] = useState(100)
    let [status, setParOuImpar] = useState(100)

    useEffect(() => {
        Contador % 2 === 0 ? setParOuImpar('Par'):setParOuImpar('Impar')
    });
    return (
        <div>
            <h1>{Contador}</h1>
            <h1>{status}</h1>
            <button onClick={() => setContador(Contador + 1)}>Up</button>
            <button onClick={() => setContador(Contador - 1)}>Down</button>
        </div>
    )
}