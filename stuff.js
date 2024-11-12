const speech = [
    "henlo",
    "ducks are cool",
    "im so cool",
    "woah",
    "boop",
    "im bippy the duck",
    "i like corn",
    "i watch you",
    "haha",
    "im hungy",
    "quack",
    ":)",
    "quaCK quackity quak",
    "achoo",
    "quak",
    "woah",
    "im so cool",
    "ducks are best",
    "give me num nums",
    "pat my head",
    "give me crackers",
    "im watchin you",
    "i want some ice water",
    ":3",
    "meow"
  ];
  
  function TextChange() {
    let speechText = speech[Math.floor(Math.random()*speech.length)];
    let quotation = "'";
    document.getElementById("ducktext").innerHTML = quotation.concat(speechText, "'");
  };