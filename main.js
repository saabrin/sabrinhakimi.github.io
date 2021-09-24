//skapar en funktion som heter myFunction
function myFunction (number){
  console.log(myFunction)
}
//anropar min funktion. 
myFunction();

//skapar en variabel som ska hämta min div ifrån min html kod.
var myElement = document.getElementById("my-title");

//skapar en eventlyssnare som ska lyssna efter klick, och skapar en funktion för min eventlyssnare.
//funktionen ska anropa min variabel som sedan ska in och ändra i html koden <h1> 
//så den får samma stayling som min gamla titel.
myElement.addEventListener("click", function(){
  myElement.innerHTML="<h1>Welcome!</h1>"
})


//skapar en variabel som sedan kallar på id, sparkle och flame.
var star = document.getElementById("sparkle");
var flames = document.getElementById("flame");



//lägger till en eventlyssnare till variabeln star som ska lyssna efter klick.
//gör en if-sats som ska kolla om fire klassen finns så ska den activera 
//klassen och återkalla star klassen så att emojina byter platser.
star.addEventListener("click", function(){
  if(flames.classList.contains("fire")){
    flames.classList.add("active");
    star.classList.remove("active");
  }
});

// gör samma som ovan för att få tillbaka samma emoji som jag hade från början.
flames.addEventListener("click", function(){
  if(star.classList.contains("spark")){
    star.classList.add("active");
    flames.classList.remove("active");
  }
});


// skapar en funktion som innehåller variabler och en for-loop som skriver ut alla namn
//som jag lagt in i variabeln names, och sedan anropar jag funktionen.  
function totalFunction(){
  var names = ["Karl", "Gustav", "Saga", "Nathalie", "Jonathan", "Jhon", "Clara"];
  var namesTotal = names.length;

  for (var i=0; i<namesTotal; i++)
    console.log(names[i]);
}

totalFunction();

//skapar en try för att försöka hämta ett element ID som inte existerar, och som sedan försöker lägga till det icke existerande ID i html.
try {
  var felID =  document.getElementById("Hej");
  felID.innerHTML += "kom";
} 

// catch skapas för att fånga upp felet ovan i och med att det ID inte existsterar så kommer det att fånga upp det som ett fel.
// Skriver ut ett felmeddelande och sedan + självaste felet. 
catch(error) {
  console.error("Oj! Nu gick det lite snett, detta var felet: " + error); 
}

//nu när felet är fångat så går vi vidare. 
console.log("Nu kan vi gå vidare!")
  
  
  

  




