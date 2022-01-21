import React from "react";
import Filho from "./Filho";

export default props => {

    const notificarSida = lugar => alert(lugar)

    return (
        <div>
            <Filho notificarSaida={notificarSida} />
        </div>
    )
}