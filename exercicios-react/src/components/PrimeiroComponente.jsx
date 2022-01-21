import React from "react";
import { CompA, CompB } from "./DoisComponentes";
export default (props) =>
    <div>
        <h1>{props.value}</h1>
        <CompA valor='Olá' />
        <CompB valor='Pão na Chapa' />
    </div>
//exemplos de export
//export default function (){
  //  return <h1>Primeiro Componente</h1>
//}
