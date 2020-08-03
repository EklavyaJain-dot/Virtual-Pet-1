//Create variables here
var dog, happyDog, database,foodS,foodStock;


function preload()
{
  //load images 
  this.dog = loadIMG(sprites/"dogimg.png");
  this.happyDog = loadIMG(sprites/"dogimg1.png");
}

function setup() {
createCanvas(500,500);
  
dataBase = firebase.database();
console.log(database);
fooodStock = database.ref('Food');
foodStock.on("value", readStock,showError);
}


function draw() {  
  background(46,139,87);

  if(keyCode === 38){
    writeStock(foodS);
    dog.addImage(happyDog);
    x = x - 1;
  }

  textSize(30);
  text("Press up arrow key to feed your dig milk",20,20);

  drawSprites();
  //add styles here
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

if(x<=0){
  x = 0;
  }

else{
  x = x - 1;
}

database.ref('/').update({
  Food:x
})
}





