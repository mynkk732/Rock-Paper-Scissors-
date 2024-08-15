let result = document.getElementById("result");
let userRock = document.getElementById("userRock").style;
let userPaper = document.getElementById("userPaper").style;
let userScissor = document.getElementById("userScissor").style;
let roboRock = document.getElementById("roboRock").style;
let roboPaper = document.getElementById("roboPaper").style;
let roboScissor = document.getElementById("roboScissor").style;

function getResult(value){
  console.log("clicked" + value);

  var roboChoice = Math.floor(Math.random() * 3) + 1;
  console.log(roboChoice);

  if(value == roboChoice){
    console.log("Tie match");
    result.innerHTML = "Tie";
  }

  if(value == 1 && roboChoice == 2){
    console.log("Robo Win " + roboChoice)
    result.innerHTML = "Robot Winner";
    roboRock.display = "none";
    roboScissor.display = "none";
    userPaper.display = "none";
    userScissor.display = "none";
  }
  else if(value == 1 && roboChoice == 3){
    console.log("User Win " + value);
    result.innerHTML = "User Winner";
    userPaper.display = "none";
    userScissor.display = "none";
    roboRock.display = "none";
    roboPaper.display = "none";
  }
  else if(value == 2 && roboChoice == 1){
    console.log("User Win " + value);
    result.innerHTML = "User Winner";
    userRock.display = "none";
    userScissor.display = "none";
    roboScissor.display = "none";
    roboPaper.display = "none";
  }
  else if(value == 2 && roboChoice == 3){
    console.log("Robo Win " + roboChoice);
    result.innerHTML = "Robot Winner";
    roboRock.display = "none";
    roboPaper.display = "none";
    userRock.display = "none";
    userScissor.display = "none";

  }
  else if(value == 3 && roboChoice == 2){
    console.log("User Win " + value);
    result.innerHTML = "User Winner";
    userRock.display = "none";
    userPaper.display = "none";
    roboRock.display = "none";
    roboScissor.display = "none";
  }
  else if(value == 3 && roboChoice == 1){
    console.log("Robo Win " + roboChoice);
    result.innerHTML = "Robot Winner";
    roboScissor.display = "none";
    roboPaper.display = "none";
    userRock.display = "none";
    userPaper.display = "none";
  }
}

function resetAll(){
  result.innerHTML = "Result";
  userRock.display = "inline-block";
  userPaper.display = "inline-block";
  userScissor.display = "inline-block"
  roboScissor.display = "inline-block";
  roboPaper.display = "inline-block";
  roboRock.display = "inline-block";
}
