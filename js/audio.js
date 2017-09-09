(function() {
  'use strict';
  
  var AudioCommunication = {
    operative: operativeSound,
    accept: acceptSound,
    deny: denySound
  }
  
  function operativeSound() {
    return new Audio('../assets/sounds/operative.wav');
  }

  function acceptSound() {
    return new Audio('../assets/sounds/accept.wav');
  }

  function denySound() {
    return new Audio('../assets/sounds/deny.wav');
  }

  window.AudioCommunication = AudioCommunication || {};
})();