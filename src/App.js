import React, { Component } from 'react';
import './App.css';
import Table from './components/Table'
import Form from './components/Form';
const axios = require('axios')

const headerTitle = "Hello, See a List of Characters";
const header = <h1>{headerTitle}</h1>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      baseUrl: "http://localhost:8080/api"
    };

  }
  componentDidMount() {
    // Make a request for a user with a given ID
    axios.get(this.state.baseUrl + '/characters')
      .then((response) => {
        this.setState({
          characters: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed       
      })

  }

  removeCharacter = index => {
    const { characters } = this.state
    const id = characters[index]._id;

    axios.delete(this.state.baseUrl + '/characters/' + id)
      .then(res => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }
  // […]. The spread operator can be used to take an existing array and add another element to it while still preserving the original array

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  render() {
    return (
      <div className="App">
        {header}
        <div className="container">
          <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
          <Form handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
