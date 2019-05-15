import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Radio from './Radio';
import Checkbox from './Checkbox';


class FilmForm extends Component {
  render() {

    const {
      title,
      description,
      language,
      age,
      genre,
    } = this.props.state;
    const {handleChange} = this.props;

    return (
      <form action="">
        <Input
          name="title"
          label="Título"
          type="text"
          id="title"
          value={title}
          handleChange={handleChange}
        />
        <Input
          name="description"
          label="Descripción"
          type="text"
          id="description"
          value={description}
          handleChange={handleChange}
        />
        <select
          name="language" 
          value={language}
          onChange={handleChange}
        >
          <option value="spanish">Español</option>
          <option value="english">Inglés</option>
          <option value="portuguese">Portugués</option>
        </select>
        <div className="options-container">
          <div className="radio-container">
            <Radio 
              type="radio" 
              name="age" 
              id="age1"
              label="Todos los públicos"
              handleChange={handleChange}
              age={age}
            />
            <Radio 
              type="radio" 
              name="age" 
              id="age2"
              label="7"
              handleChange={handleChange}
              age={age}
            />
            <Radio 
              type="radio" 
              name="age" 
              id="age3"
              label="12"
              handleChange={handleChange}
              age={age}
            />
            <Radio 
              type="radio" 
              name="age" 
              id="age4"
              label="16"
              handleChange={handleChange}
              age={age}
            />
            <Radio 
              type="radio" 
              name="age" 
              id="age5"
              label="18"
              handleChange={handleChange}
              age={age}
            />
          </div>
          <div className="checkbox-container">
            <Checkbox 
              type="checkbox"
              id="comedy"
              name="genre"
              label="Comedia"
              value="comedy"
              handleChange={handleChange}
              genre={genre}
            />
            <Checkbox 
              type="checkbox"
              id="drama"
              name="genre"
              label="Drama"
              value="drama"
              handleChange={handleChange}
              genre={genre}
            />
            <Checkbox 
              type="checkbox"
              id="fantasy"
              name="genre"
              label="Fantasía"
              value="fantasy"
              handleChange={handleChange}
              genre={genre}
            />
            <Checkbox 
              type="checkbox"
              id="action"
              name="genre"
              label="Acción"
              value="action"
              handleChange={handleChange}
              genre={genre}
            />
            <Checkbox 
              type="checkbox"
              id="family"
              name="genre"
              label="Familia"
              value="family"
              handleChange={handleChange}
              genre={genre}
            />
            <Checkbox 
              type="checkbox"
              id="horror"
              name="genre"
              label="Terror"
              value="horror"
              handleChange={handleChange}
              genre={genre}
            />
          </div>
        </div>
      </form>
    );
  }
}

FilmForm.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  language: PropTypes.string,
  age: PropTypes.string,
  genre: PropTypes.arrayOf(PropTypes.string),
  handleChange: PropTypes.func,
}

export default FilmForm;