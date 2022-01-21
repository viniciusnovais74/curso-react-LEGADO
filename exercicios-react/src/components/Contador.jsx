import React from 'react'

export default class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {

        this.alterarNum(1)

    }

    menosUm = () => {

        this.alterarNum(-1)
    }
    alterarNum = (diferenca) => {

        this.setState({ numero: this.state.numero + diferenca })

    }
    render() {
        return (
            <div>
                <div>Numero: {+this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={() => this.alterarNum(10)}>Inc10</button>
                <button onClick={() => this.alterarNum(-10)}>Dec-10</button>

            </div>
        )
    }
}