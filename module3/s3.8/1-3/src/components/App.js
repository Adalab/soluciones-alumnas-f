import React, { Component } from 'react';
import FilmForm from './FilmForm';
import FilmPreview from './FilmPreview';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: '',
      cover: '',
      description: '',
      language: '',
      age: '',
      genre: []
    }
  }

  handleChange(event) {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    if (event.currentTarget.type !== "checkbox") {
      this.setState({ [name]: value });
    } else {
      if (this.state.genre.includes(value)) {
        const array = [...this.state.genre];
        const index = array.indexOf(value);
        if (index !== -1) {
          array.splice(index, 1);
          this.setState({genre: array});
        }
      } else {
        if (this.state.genre.length < 3) {
          const array = [...this.state.genre];
          array.push(value);
          this.setState({ genre: array })
        }
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <FilmForm
          state={this.state}
          handleChange={this.handleChange}
        />
        <FilmPreview 
          state={this.state}
        />
      </React.Fragment>
    );
  }
}

export default App;