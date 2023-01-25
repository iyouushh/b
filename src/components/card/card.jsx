import { Component } from "react";
import './../../card.styles.css'

class Card extends Component {
    render() { 
        const { name, email, id } = this.props.alien
        return (
            <div className="card-container" key={id}>
            <img
              alt={`{name}`}
              src={`https://robohash.org/${id}?set=set2&size=150x150`}
            />
            \<h2>{name}</h2>
            <h2>{email}</h2>
          </div>
        );
    }
}
 
export default Card;