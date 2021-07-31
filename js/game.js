class Game{
   constructor(){
       
   } 

   getState(){
     var gameStateRef=database.ref('gameState');
     gameStateRef.on("value",function(data){
          gameState=data.val();
     });
      
   }
   
   updateState(state){
    var gameStateRef=database.ref('/');
    gameStateRef.update({
        gameState:state
    })
    
   }

start(){
  form=new Form();
  form.display();
  player=new Player();
  player.getCount();
  car1=createSprite(400,200,50,50);
 car1.addImage(bluec);
  car2=createSprite(625,200,50,50);
car2.addImage(bc);
  car3=createSprite(875,200,50,50);
 car3.addImage(rc);
  car4=createSprite(1100,200,50,50);
 car4.addImage(wc);
  cars=[car1,car2,car3,car4];
  player.getFinishedPlayer();

}
play(){
  
  textSize(40);
  text("Game Start",120,100);
  form.disappear();
  Player.getDetails();
  var pos=150;
  var y;
 image(track,0,-displayHeight*4,displayWidth-30,displayHeight*5);
  if(gameInfo!=undefined){
    drawSprites();
    for(var i=1;i<=4;i++){
      var playerIndex="player"+i;
    
      
      y=displayHeight-gameInfo[playerIndex].distance;
      cars[i-1].y=y;

      if(i===player.index){
      cars[player.index-1].shapeColor="red";
        camera.position.x=displayWidth/2;
        camera.position.y=cars[i-1].y
        push();
        imageMode(CENTER);
        image(cursor,cars[i-1].x,cars[i-1].y-75,75,50);
        pop();
      }
      else{
        fill('black');
      }
      // textSize(20)
      // text(gameInfo[playerIndex].name+ ":"+gameInfo[playerIndex].distance,120,pos)
      
  
      pos=pos+20;
  
  
    }






  }
  

  if(keyDown(UP_ARROW)&&passedFinish===false){
    player.distance=player.distance+10;
    player.updateDetail();
  }



  if(player.distance>displayHeight*5-80&&passedFinish===false){
   
     finishedPlayer=finishedPlayer+1;
     player.rank=finishedPlayer;
     player.updateDetail();
     player.updateFinishedPlayer();
     passedFinish=true;
    }

}

end(){

  image(track,0,-displayHeight*4,displayWidth-30,displayHeight*5);
  drawSprites();
  
  for(var i=1;i<=4;i++){
    var playerIndex="player"+i;
  
    
    y=displayHeight-gameInfo[playerIndex].distance;
    cars[i-1].y=y;
    var rank=gameInfo[playerIndex].rank;

    if(i===player.index){
    
      camera.position.x=displayWidth/2;
      camera.position.y=cars[i-1].y
     
    }
    else{
      fill('black');
    }
 
    if(rank==1){
    push();
    imageMode(CENTER);
    image(gold,cars[i-1].x,cars[i-1].y-75,75,50);
    pop();
    }
 
    if(rank==2){
      push();
      imageMode(CENTER);
      image(silver,cars[i-1].x,cars[i-1].y-75,75,50);
      pop();
      }
      if(rank==3){
        push();
        imageMode(CENTER);
        image(bronze,cars[i-1].x,cars[i-1].y-75,75,50);
        pop();
        }
        if(rank==4){
          push();
          imageMode(CENTER);
          image(last,cars[i-1].x,cars[i-1].y-75,75,50);
          pop();
          }
  }
     
}





}