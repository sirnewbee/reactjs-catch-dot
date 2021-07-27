import React from 'react';
import './App.css';
import $ from 'jquery';
import Main from './components/main/main.js';
import RandomSpinner from './components/spinners/random_spinner.js';

const current_pages = {
  countdown: 30,
  score: 0,
  clickActions: function(){
    $('#main-page').unbind('click');
    $('#main-page').click(function(){
      $('.current-datetime-container')[0].style.transform = "translate(500%,0px)";
      $('.logo-container')[0].style.transform = "translate(-500%,0px)";
      setTimeout(function(){
        $('#main-page').css({display: 'none'});
        $('.spinner-container').css({display: 'block'});
      }, 4500);

      setTimeout(function(){
        current_pages.countdownTimer();
      }, 4500);
      //Revert
      // $('#current-datetime').style.left = "50%";
      // $('#current-datetime').style.transform = "translate(-50%,0px)";
    });

    $('#random-spinner').unbind('click');
    $('#random-spinner').click(function(){
      $('#random-spinner-score span').text(++current_pages.score);
    });
  },
  countdownTimer: function(){
    var countdown_interval = setInterval(() => {
      if(current_pages.countdown >= 0){
        console.log(--current_pages.countdown);
      }else{
        clearInterval(countdown_interval);
      }
    }, 1000);
  },
  run: function(){
    current_pages.clickActions();
  }
};

class App extends React.Component {
  componentDidMount(){
    current_pages.run();
  }

  render(){
    return (
      <div className="landing-page">
        <Main/>
        <RandomSpinner/>
      </div>
    );
  };
}

export default App;
