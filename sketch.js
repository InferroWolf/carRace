var ball;
var database;
var gameState=0;
var form;
var game;
var playerCount=0;
var player;
var title,greeting;
var gameInfo;
var car1,car2,car3,car4,cars;
var bluec,rc,wc,bc,track,cursor;
var finishedPlayer=0;
var passedFinish=false;
var y=0;
function preload(){
  bluec=loadImage("image/car3.png");
  wc=loadImage("image/car1.png");
  rc=loadImage("image/car2.png");
  bc=loadImage("image/car4.png");
  track=loadImage("image/track.jpg");
  cursor=loadImage("image/cursor.png");
  gold=loadImage("image/gold.png");
  silver=loadImage("image/silver.png");
  bronze=loadImage("image/bronze.png");
  last=loadImage("image/4th.png")

}

function setup(){
    createCanvas(displayWidth-50,displayHeight-140);
  
    database=firebase.database();
   
    game=new Game();
    game.getState();
    if(gameState===0){
        game.start();
    }
}

function draw(){
    background("gray");

   
    if(playerCount===4){
        game.updateState(1);
    }
    if(gameState===1){
        game.play();
    }
    if(finishedPlayer===4){
      game.updateState(2);
    }
    if(gameState===2){
      game.end();
    }

    
}


