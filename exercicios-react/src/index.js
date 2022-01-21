import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './components/PrimeiroComponente'
import MultiComponents from './components/MultiComponents'
import FamiliaSantos from './components/FamiliaSantos'
import Familia from './components/Familia'
import Membro from './components/Membro'
import ComponenteComFuncao from './components/ComponenteComFuncao'
import Pai from './components/Pai'
import ComponenteClasse from './components/ComponenteClasse'
import Contador from './components/Contador'
const app = document.getElementById('root')

ReactDOM.render(
    <>
    <Pai/>
    <Contador numeroInicial={0}/>
        <MultiComponents value='Bom dia' />
        <Familia sobrenome='Pereira'>
            <Membro nome='Andre' />
            <Membro nome='Mariana' />
        </Familia>
        <FamiliaSantos sobrenome='Santos' />
        <ComponenteComFuncao/>
        <ComponenteClasse valor='Oi'/>
        </>

    , app)