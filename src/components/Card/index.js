import react from "react";
import './Card.css'


const Card = (props) => (
    <div 
        on Click={() => props.handleClick} key={props.letter} className="card">
            {props.letter}
    </div>
)

export default Card;