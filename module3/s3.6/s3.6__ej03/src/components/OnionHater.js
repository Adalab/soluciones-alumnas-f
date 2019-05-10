import React from 'react';

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false;
    this.onChangeListener = this.onChangeListener.bind(this);
  }

  onChangeListener(event) {
    if (event.target.value.includes('cebolla')) {
      this.isHating = true;
      this.forceUpdate();
    } else {
      this.isHating = false;
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div className={`text__container ${this.isHating ? 'background__red' : 'loquesea'}`}>
        <textarea className="text" onChange={this.onChangeListener}/>
      </div>
    );
  }
}

export default OnionHater;