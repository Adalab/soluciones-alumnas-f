import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilmPreview extends Component {
  render() {
    return (
      <div className="card">
        <h2>{this.props.state.title}</h2>
        <p>{this.props.state.description}</p>
        <p>{this.props.state.language}</p>
        <p>{this.props.state.age}</p>
        <ul>{this.props.state.genre.map((genre, index) => <li key={index}>{genre}</li>)}</ul>
      </div>
    );
  }
}

FilmPreview.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  language: PropTypes.string,
  age: PropTypes.string,
  genre: PropTypes.arrayOf(PropTypes.string),
}

export default FilmPreview;