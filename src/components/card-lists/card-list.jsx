import { Component } from "react";
import Card from "./../card/card";
import './../../card-list.styles.css'
import '../../card.styles.css'


class CardList extends Component {
  render() {
    const { aliens } = this.props;
    return (
      <div className="card-list">
        {aliens.map((alien) => {
          return <Card alien={alien} />;
        })}
      </div>
    );
  }
}

export default CardList;
