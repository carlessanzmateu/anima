(function() {
  'use strict';

  var audioCommunication = AudioCommunication;
  var anima = false;

  if (annyang) {
    annyang.setLanguage('es');

    var commands = {
      'anima': () => { 
        anima = true;
        audioCommunication.operative().play();
      },
      'pon musica': () => {
        if( anima ) {
          audioCommunication.accept().play();
          getMusic();
          disallowAnima();
        } else {
          audioCommunication.deny().play();
        }
      },
      'busca *search': ( search ) => {
        if( anima ) {
          audioCommunication.accept().play();
          googleSearch( search );
          disallowAnima();
        } else {
          audioCommunication.deny().play();
        }
      }
    };
    annyang.addCommands(commands);

    annyang.start({ autoRestart: true, continuous: true });
  }
  
  function disallowAnima () {
    anima = false;
  }

  function getMusic () {
    window.open('https://www.youtube.com/watch?v=hHRNSeuvzlM','_blank');
  }

  function googleSearch ( search ) {
    search = googleSearchHelper( search );
    window.open('https://www.google.es/search?q=' + search );
  }

  function googleSearchHelper ( text ) {
    var notRawText = text.split(' ');
    var readyToSearchText = '';
    for( var i = 0; i < notRawText.length; i++ ){
      readyToSearchText += notRawText[i];

      if (i !== notRawText.length -1) {
        readyToSearchText += '-';
      }
    }

    return readyToSearchText;
  }
})();
