import React from 'react';
import Collapsible from './components/Collapsible';
import Content from './components/Content';
import './App.css';
import { shipsArr } from './utils/data';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: 'col0'
    }
    this.openPanel = this.openPanel.bind(this);
  }
  openPanel(e){
    const target = e.currentTarget.id;
    
    this.setState((prevState) => {
      let newId;
      if(prevState.isOpen === target) {
        newId = 'col99';
      } else {
        newId = target;
      }
      return {
        isOpen: newId
      }
    });
  }
  render() {
    return (
      <div className="App">
        {shipsArr.palettes.map((data, indexCol, indexCont) =>
          <div>
            <Collapsible 
              name={data.name}
              symbol={this.state.isOpen === `col${indexCol}` ? 'fas fa-minus' : 'fas fa-plus'}
              key={`col${indexCol}`} 
              id={`col${indexCol}`}
              openPanel={this.openPanel}
            />
            <Content 
              from={data.from} 
              key={`cont${indexCont}`}
              open={this.state.isOpen === `col${indexCol}` ? '' : 'collapsible__content'}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
