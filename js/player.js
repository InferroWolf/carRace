class Player{
  constructor(){
   this.name=null;
   this.distance=0;
   this.index=null;
   this.rank=0;
  } 

  getCount(){

    var playerCountRef=database.ref('playerCount');
    playerCountRef.on("value",function(data){
         playerCount=data.val();
       
       });
    


  }

  updateCount(count){
    var playerCountRef=database.ref('/');
      playerCountRef.update({
        playerCount:count   
  });
}

  updateDetail(){
   
    var playerIndex="player"+this.index;//play
    database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance,
        rank:this.rank
    });


  }

  static getDetails(){
      database.ref('/').on("value",function(data){
          gameInfo=data.val();
      })
  }

  getFinishedPlayer(){
    database.ref('finishedPlayer').on("value",function(data){
    finishedPlayer=data.val();
    })
  }

  updateFinishedPlayer(){
    database.ref('/').update({
      finishedPlayer:finishedPlayer
     })
  }
  
}