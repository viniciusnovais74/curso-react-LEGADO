import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './components/PrimeiroComponente'
import MultiComponents from './components/MultiComponents'
import FamiliaSantos from './components/FamiliaSantos'
import Familia from './components/Familia'
import Membro from './components/Membro'
import ComponenteComFuncao from './components/ComponenteComFuncao'
const app = document.getElementById('root')

ReactDOM.render(
    <>
        <MultiComponents value='Bom dia' />
        <Familia sobrenome='Pereira'>
            <Membro nome='Andre' />
            <Membro nome='Mariana' />
        </Familia>
        <FamiliaSantos sobrenome='Santos' />
        <ComponenteComFuncao/>
        </>

    , app)