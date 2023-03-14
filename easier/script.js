(function () {
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];

  for (let i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0);

    if (firstLetter.toLowerCase() === "j") {
      console.log(`Goodbye ${names[i]}`);
    } else {
      console.log(`Hello ${names[i]}`);
    }
  }
})();
