import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
    this.myTimer = this.myTimer.bind(this);
    setInterval(this.myTimer, 1000);
  }

  myTimer() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return <div>{this.state.time.toLocaleTimeString()}</div>;
  }
}

export default Clock;
