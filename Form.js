class Form{
  constructor(){
    this.input = createInput("Digite seu nome");
    this.button = createButton("Play");
    this.greeting = createElement('h3');
   }

  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }

  display(){
    var title = createElement('h2');
     title.html("Jogo de Corrida");
     title.position(200,10);

     this.input.position(200,160);

     this.button.position(260,200);
// colocou a palavra funcition ao invés de fazer a function de seta
     this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

     player.name = this.input.value();

     playerCount+=1;
     player.index = playerCount;
     player.update();
     player.updateCount(playerCount);
     
     this.greeting.html("Hello "+player.name);
     this.greeting.position(110,160);

    }) 

  }

}