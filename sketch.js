var database;
var position;
var canvas, backgroundImage;
var gameState = 0
var playerCount = 0
var form, player, game;
var allPlayers

function setup(){
 createCanvas(500,500);
  database = firebase.database();
  game = new Game()
  game.getState();
  game.start();
}

function draw(){
  background("lightBlue");
  
  
  
}