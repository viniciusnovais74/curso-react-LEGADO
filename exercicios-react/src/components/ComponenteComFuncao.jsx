import React from "react";

const aprovados =['Paula','Roberta','Gustavo','Julia']

export default props => {
    const gerarItenss = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return(
        <ul>
            {gerarItenss(aprovados)}
        </ul>
    )
}
