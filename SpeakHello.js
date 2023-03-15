// Define helloSpeaker object in the global scope
var helloSpeaker = {};

(function () {
  helloSpeaker.speak = speak;
  helloSpeaker.name = "John";
  var speakWord = "Hello";
  function speak(name) {
    console.log(speakWord + " " + name);
  }
})();

// Access helloSpeaker object from global scope
helloSpeaker.speak(helloSpeaker.name);
