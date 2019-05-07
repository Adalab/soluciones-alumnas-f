import React from 'react';

const getRandomInteger = maxNumber => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS = 10;

class RandomCat extends React.Component {
  render() {
    const randomCat = getRandomInteger(NUMBER_OF_CATS);
    let width = this.props.width || 400;
    let height = this.props.height || 200;
    return (
      <a href="http://lorempixel.com">
        <img src={`http://lorempixel.com/${width}/${height}/cats/${randomCat}`} alt="Random cat"/>
      </a>
    );
  }
}
export default RandomCat;