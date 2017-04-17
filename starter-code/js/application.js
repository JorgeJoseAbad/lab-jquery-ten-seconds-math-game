// Use this file to write the interactions between your game and the user

//Initialize ion library


window.onload = function(){


};

function newGame(){

  console.log("hola");
  game=new TenSecondsMathGame(["multiplication","addition","substraction","division"],10);
  console.log(game);
  return game;
}
