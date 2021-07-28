import React from 'react';
import '../../App.css';
import CurrentDateTime from '../time/current_datetime.js';
import {Spinner} from 'react-bootstrap';

class Main extends React.Component {
  render(){
    return (
      <div id="main-page">
        <div className="warning-texts">
          <span>READY</span>
          <br/>
          <span>GO!</span>
        </div>
        <div className="current-datetime-container">
          <CurrentDateTime/>
        </div>
        <div className="logo-container">
          <div className="page-logo">
            <div className="page-logo-element">
              <span>
                <Spinner animation="border" />
              </span>Mistah
            </div>
            <div className="page-logo-element">CheonG</div>
          </div>
          <div className="page-instructions">
            (CLICK ANYWHERE TO PROCEED)
          </div>
        </div>
      </div>
    );
  };
}

export default Main;