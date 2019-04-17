'use strict';

const container = document.querySelector('.container');
const phrase = 'He aprendido bien cómo funcionan los bucles';
const colorsArr = ['blanco', 'azul', 'rojo', 'verde', 'amarillo', 'rosa'];

const changeColor = (event, array) => {
  const { currentTarget: currentSelect } = event;
  const { selectedIndex } = currentSelect;
  // remove all previous classes and add only the selected one
  currentSelect.parentElement.classList.remove(...array);
  currentSelect.parentElement.classList.add(array[selectedIndex]);
};

const paintSelect = (arr, elementParent) => {
  const select = document.createElement('select');
  select.classList.add('contentSelect');
  // loop over colors array and create all the options
  for (let i = 0; i < arr.length; i++) {
    const option = document.createElement('option');
    const text = document.createTextNode(arr[i]);
    option.appendChild(text);
    option.setAttribute('value', i);

    select.appendChild(option);
  }
  select.addEventListener('change', event => {
    changeColor(event, colorsArr);
  });
  // add the select to the contentContainer div
  elementParent.appendChild(select);
};

const paintPhrase = (textString, count) => {
  for (let i = 0; i < count; i++) {
    const contentContainer = document.createElement('li');
    contentContainer.classList.add('contentContainer');

    const paragraph = document.createElement('p');
    paragraph.classList.add('contentText');

    const text = document.createTextNode(textString);
    paragraph.appendChild(text);

    contentContainer.appendChild(paragraph);
    // create select element and add it to the contentContainer
    paintSelect(colorsArr, contentContainer);
    // add each li to the big container
    container.appendChild(contentContainer);
  }
};

paintPhrase(phrase, 100);
