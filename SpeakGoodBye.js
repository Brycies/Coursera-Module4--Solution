// Define byeSpeaker object in the global scope
var byeSpeaker = {};

(function () {
  byeSpeaker.speak = speak;
  byeSpeaker.name = "John";
  var speakWord = "Good Bye";
  function speak(name) {
    console.log(speakWord + " " + name);
  }
})();

// Access byeSpeaker object from global scope
byeSpeaker.speak(byeSpeaker.name);
