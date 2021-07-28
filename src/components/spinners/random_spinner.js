import React from 'react';
import {Spinner, Button} from 'react-bootstrap';
import $ from 'jquery';

const current_pages = {
  colors: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"],
  getRandomInt: function(max) {
    return Math.floor(Math.random() * max);
  },
  getRandomColor: function(){
    return current_pages.colors[current_pages.getRandomInt(current_pages.colors.length)];
  },
  makeNewPosition: function(){
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];     
  },
  animateDiv: function(){
    var newq = current_pages.makeNewPosition();
    $('#random-spinner').animate({ top: newq[0], left: newq[1] }, function(){
      setTimeout(function(){
        current_pages.animateDiv();   
      },200);     
    });
    
    setInterval(function(){
      if($('.random-spinner-instructions')[0].style.visibility == "visible"){
        $('.random-spinner-instructions').css({visibility:'hidden'});
      }else{
        $('.random-spinner-instructions').css({visibility:'visible'});
      }
    }, 1000)
  },
  run: function(){
    current_pages.makeNewPosition();
    current_pages.animateDiv();
  }
};

class RandomSpinner extends React.Component{
  state = {
    color: current_pages.getRandomColor()
  };

  componentDidMount(){
    current_pages.run();
    setInterval(
      () => {
        this.setState({ color: current_pages.getRandomColor() });
      },
      2000
    );
  }

  render(){
    return(
      <div className="spinner-container">
        <div id="spinner-timer">0</div>
        <div className="spinner-texts-container">
          <div className="random-spinner-instructions">CATCH THE DOT!</div>
          <div id="random-spinner-score">SCORE: <span>0</span></div>
          <div id="actions-container">
            <Button variant="warning" id="return-button">RETURN</Button>
          </div>
        </div>
        <div id="random-spinner">
          <Spinner animation="grow" variant={this.state.color}/>
        </div>
      </div>
    );
  }
}

export default RandomSpinner;