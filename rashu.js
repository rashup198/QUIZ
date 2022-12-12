var readlinesync = require('readline-sync');
console.log("Hello My friend how are you!! ");
console.log("Welcome to the quiz");
console.log("----------------");
console.log("Level ZERO");

var score =0;

function quiz(question, answer) {
var user_ans = readlinesync.question(question);
  if (user_ans==answer){
    console.log("you are right");
    score= score+1;
  }
  else{
    console.log("you are wrong");
    score =score-1;
  } 
  if(score>=2){
  console.log("level ONE");
}
}

var load =quiz("what is my name? ","priyanshu");
var load =quiz("what is my age", "19");
var load =quiz("where do i live now", "Chennai");
var load =quiz("what is my college name", "VIT"); 
hsdsasd



console.log(score);