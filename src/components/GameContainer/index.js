import React, { Component } from "react";
import Card from "../Card";

class GameContainer extends Component {
    state = {
        cards: clickCards,
        score: 0
    };

    handleClick = () => {
        console.log(here);
    }

    render() {
        return (
            <div>
                {this.state.cards.map((card) => {
                    return <Card key={card.letter} handleClick={this.handleClick} letter={card.letter} />
                })}
            </div>
        )
    }
}

export default GameContainer;