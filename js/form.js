class Form{
 constructor(){

    this.title=createElement('h3');
    this.title.position(displayWidth/2-50,0);
    this.title.html('Epic Racer');
    this.input=createInput('Name');
    this.input.position(displayWidth/2-40,displayHeight/2-80);
    this.button=createButton('Play');
    this.button.position(displayWidth/2+30,displayHeight/2);
    this.reset=createButton('Reset');
    this.reset.position(displayWidth-100,30);

 }
 disappear(){
     this.title.hide();
     this.greeting.hide();
 }
display(){
 

    
    this.button.mousePressed(()=>{


        //console.log(this);
        this.input.hide();
        this.button.hide();
         

        var name=this.input.value();

        this.greeting=createElement('h4');
        this.greeting.html('Hello '+name);
        this.greeting.position(displayWidth/2-70,displayHeight/4);
 
       
        playerCount=playerCount+1;    
        player.updateCount(playerCount);
        player.index=playerCount;
        player.name=name;
        player.updateDetail();
     
       


    })


    this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.updateState(0);
    })
    
}



}

