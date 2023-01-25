import "././css/index.css";
import { Component } from "react";
import CardList from "./components/card-lists/card-list";
import SearchBox from "./components/search-box/search-box";

class App extends Component {
  constructor() {
    super();

    this.state = {
      aliens: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`).then((response) =>
      response.json().then((users) =>
        this.setState(
          () => {
            return { aliens: users };
          },
          () => {}
        )
      )
    );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { aliens, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredAliens = aliens.filter((alien) => {
      return alien.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
      <h1 className='app-title'>Aliens Ben10</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder={"search aliens"}
          className={"search-box"}
        />
        <CardList aliens={filteredAliens} />
      </div>
    );
  }
}

export default App;
