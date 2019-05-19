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
      return {
        isOpen: prevState.isOpen === target ? 'col99' : target
      }
    });
  }
  render() {
    return (
      <div className="App">
        {shipsArr.palettes.map((data, index) =>
          <div key={`group${index}`}>
            <Collapsible 
              name={data.name}
              symbol={this.state.isOpen === `col${index}` ? 'fas fa-minus' : 'fas fa-plus'}
              key={`col${index}`} 
              id={`col${index}`}
              openPanel={this.openPanel}
            />
            <Content 
              from={data.from} 
              key={`content${index}`}
              open={this.state.isOpen === `col${index}` ? '' : 'collapsible__content'}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
