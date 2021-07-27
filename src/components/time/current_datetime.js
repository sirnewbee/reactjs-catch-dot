import React from 'react';
import './Date.css';

class CurrentDateTime extends React.Component{
  state = {
    date: new Date(),
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }
  
  render(){
    return (
      <div id="current-datetime">
        <div className="current-date-container">
          {this.state.date.toLocaleDateString()}
        </div>
        <div className="current-time-container">
          {this.state.date.toLocaleTimeString()}
        </div>
      </div>
    );
  }
}

export default CurrentDateTime;