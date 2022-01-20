import React from "react";
import ReactDOM from "react-dom";
import Primeiro,{ Segundo } from './componente'
import SilvaFamily from './silvaFamily'
import Family from './family'
import Member from './member'
ReactDOM.render(<div><Primeiro /><Family lastName="Santos"><Member name='Maria' lastName='Santos'/></Family><Segundo /></div>, document.getElementById('app'))

