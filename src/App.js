import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      aliens: [],
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`).then((response) =>
      response.json().then((users) =>
        this.setState(() => {
          return { aliens: users };
        },
        () => {console.log(this.state);}
        )
      )
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.aliens.map((alien) => {
          return <h1>{alien.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
