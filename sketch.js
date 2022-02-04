var canvas;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;

var database;

var form;
var player;
var game;

/////////////////
function setup(){
 canvas = createCanvas(400,400);

 database = firebase.database();

 game = new Game();
 game.getState();
 game.start();

}
/////////////////
function draw(){

    //Código adicionado pela professora para verificar se a quantidade de player é = a 4 e trocar o estado do jogo
    if(playerCount===4){
        game.update(1);
          }
        if(gameState===1){
        clear();
        game.play();
        
        }

}