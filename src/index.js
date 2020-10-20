import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Square(props) {
        return (
            <button className="square">
                {props.value}
            </button>
        )
}

//componente
class Board extends React.Component{
    renderSquare(i){
        return <Square value={i}/>
    }
    
    render(){
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

//componente
class Game extends React.Component{
    render() {
        return (
        <div className= "game"> 
            <div className="game-board">
                <Board/> 
            </div>

            <div className= "game-info">
                Informações do jogo
            </div>
        </div> //propriedade de programação
        )
    }

}

ReactDOM.render(
    //Componente  -> elemento que vai ser renderizado
    <Game/>,
    // Em um elemento -> Container que vai ser renderizado
    document.getElementById('root')
)