import React from 'react';
import './App.css';
import $ from 'jquery';
import Main from './components/main/main.js';
import RandomSpinner from './components/spinners/random_spinner.js';

const countdown_timer = 30;
const current_pages = {
  countdown: countdown_timer,
  score: 0,
  clickActions: function(){
    $('#main-page').unbind('click');
    $('#main-page').click(function(){
      $('.current-datetime-container')[0].style.transform = "translate(300%,0px)";
      $('.logo-container')[0].style.transform = "translate(-300%,0px)";
      $('#random-spinner-score span').text(0);
      $('.warning-texts span:first-child').css({display: 'block'});

      current_pages.countdown = countdown_timer;
      $('#spinner-timer').text(countdown_timer);

      setTimeout(function(){
        $('.warning-texts span:first-child').css({display: 'none'});
        $('.warning-texts span:last-child').css({display: 'block'});
      },3000);

      setTimeout(function(){
        $('.warning-texts span:last-child').css({display: 'none'});
        $('#main-page').css({display: 'none'});
        current_pages.countdownTimer();
        $('.spinner-container').css({display: 'block'});
        $('#random-spinner').css({display: 'block'});
      }, 4500);
      // 4500
    });

    $('#random-spinner').unbind('click');
    $('#random-spinner').click(function(){
      $('#random-spinner-score span').text(++current_pages.score);
    });

    $('#return-button').unbind('click');
    $('#return-button').click(function(){
      $('.spinner-container').css({display: 'none'});
      $('#main-page').css({display: 'block'});
      $('#return-button').css({display: 'none'});
      current_pages.score = 0;
      
      setTimeout(function(){
        $('.current-datetime-container').css({left: '50%', transform: 'translate(-50%, 0px)'});
        $('.logo-container').css({left: '50%', transform: 'translate(-50%, 0px)'});
      }, 300);

      $(this).css({display: 'none'});
    });
  },
  countdownTimer: function(){
    var countdown_interval = setInterval(() => {
      if(current_pages.countdown >= 0){
        $('#spinner-timer').text(current_pages.countdown--);
      }else{
        clearInterval(countdown_interval);
        $('#return-button').css({display: 'block'});
        $('#random-spinner').css({display: 'none'});
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
