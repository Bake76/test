function wortSpiel() {
   var nomen;
   var verb;
   var adjektiv;

   function abfrage(wort) {
      var ergebnis = prompt("Gib ein " + wort + " ein");
      return ergebnis;
   }

   for (i = 3; i > 0; i--) {
      switch (i) {
         case 3:
            nomen = abfrage("Nomen");
            break;
         case 2:
            verb = abfrage("Verb");
            break;
         default:
            adjektiv = abfrage("Adjektiv");
      }
   }

   message = "Nomen: " + nomen + "<br>";
   message += "Verb: " + verb + "<br>";
   message += "Adjektiv: " + adjektiv;

   document.write(message);
}



/****** Zahlen raten ******/
function zahlenRaten() {
   function createNumber() {
      var randomNumber = Math.random() * 10 + 1;
      var randomNumber = Math.floor(randomNumber);
      // var randomNumber = 2;
      return randomNumber;
   }


   function askUser(i) {
      if (i === 1) {
         var geraten = parseInt(prompt("Geben Sie eine Zahl zwischen 1 und 10 ein. Sie haben noch " + i + " Versuch"));
      } else {
         var geraten = parseInt(prompt("Geben Sie eine Zahl zwischen 1 und 10 ein. Sie haben noch " + i + " Versuche"));
      }
      //auf Zahl checken
      while (isNaN(geraten)) {
         geraten = parseInt(prompt("Geben Sie eine ZAHL!!! zwischen 1 und 10 ein. Sie haben noch " + i + " Versuche"));
      }

      return geraten;
   }

   function checkInput(geraten, randomNumber) {
      var ergebnis = false;
      if (geraten < randomNumber) {
         alert("Leider daneben, die Zahl ist höher");
      }
      else if (geraten > randomNumber) {
         alert("Leider daneben, die Zahl ist kleiner");
      }
      else {
         ergebnis = true;
      }
      return ergebnis;
   }


   function tellUser(ergebnis, randomNumber) {
      if (ergebnis) {
         var message = "Richtig geraten!!!";
      } else {
         var message = "Sie haben die Zahl leider nicht erraten. Die Zahl war " + randomNumber;
      }
      return message;
   }


   do {
      var randomNumber = createNumber();

      for (i = 3; i >= 1; i--) {
         var ergebnis = false;

         var geraten = askUser(i);

         var ergebnis = checkInput(geraten, randomNumber);

         if (ergebnis) {
            i = 0;  // beendet Schleife
         }
      }

      alert(tellUser(ergebnis, randomNumber));
      var spielen = prompt("Noch einmal (j/n)?");
   }
   while (spielen === "j")
}


// Rechenaufgaben lösen
function mathBasic() {
   function createNumbers() {
      var number = Math.random() * 10 + 1;
      var number = Math.floor(number)
      return number;
   }


   function rechne(zahl1, zahl2, operator) {
      var ergebnis;
      var str = zahl1 + operator + zahl2;

      if (operator === "/") {
         ergebnis = Math.floor(eval(str));
      }
      else {
         ergebnis = eval(str);
      }

      return ergebnis;
   }

   function ausgabe(richtig) {
      switch (richtig) {
         case 4:
            alert("Very good - " + richtig + " / 4 right");
            break;
         case 3:
            alert("Good - " + richtig + " / 4 right");
            break;
         default:
            alert("You're an idiot - go home");
      }
   }

   var richtig = 0;
   var zahl = new Array();
   var operator = new Array("+", "-", "*", "/");

   for (i = 0; i <= 3; i++) {
      for (j = 0; j <= 1; j++) {
         zahl[j] = createNumbers(); // Array mit 2 Zahlen füllen
      }

      var geraten = parseInt(prompt("Wie viel ist " + zahl[0] + " " + operator[i] + " " + zahl[1]));
      var richtigeLoesung = rechne(zahl[0], zahl[1], operator[i]);

      if (geraten == richtigeLoesung) {
         richtig++;
      }
   }

   ausgabe(richtig);
}


/******* Random number from to ********/

function randomNumberScope(unten, oben) {
   if (isNaN(unten) || isNaN(oben)) {
      throw new Error("one or more argument in NaN");
   }
   else {
      var number = Math.random() * (oben - unten + 1) + unten;
      var number = Math.floor(number);
      return number;
   }
}



function createColorDivs() {

   function createNumber() {
      var number = Math.floor(Math.random() * 256 + 1);
      return number;
   }

   function generateRGB() {

      var rgb = new Array();

      //darf nicht i sein, sonst Endlosschleife (nimmt i von global)
      for (j = 0; j < 3; j++) {
         rgb[j] = createNumber();
      }

      var color = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";

      return color;
   }

   var html = "";

   for (i = 1; i <= 10; i++) {
      var color = generateRGB();
      html += "<div style=\"background-color:" + color + ";\">" + i + "</div>";
   }

   document.write(html);
}


/* Array Stuff */

function createArray(length) {
   
   var newArray = [];

   for (i = 0; i < length; i++) {
      newArray[i] = i + 1;
   }

   return newArray;

}


function pushItems(array, number) {

   for (i = 1; i <= number; i++) {
      array.push(i);   
   }

   return array;
}


function popItems(array, number) {
   
   var popped = [];

   for (i = 0; i < number; i++) {
      popped[i] = array.pop();
   }

   console.log(popped);
   return array;
}


function unshiftItems(array, number) {
   
   for (i = 1; i <= number; i++) {
      array.unshift(i);
   }
   
   return array;
}


function shiftItems(array, number) {

   var shifted = [];

   for (i = 0; i < number; i++) {
      shifted[i] = array.shift();
   }

   console.log(shifted);
   return array;
}


function pushShift(array, number) {
   var shifted = [];

   for (i = 0; i < number; i++) {
      array.push(i + 1);
      shifted[i] = array.shift(i);
   }

   console.log(shifted);
   return array;
}


function unshiftPop(array, number) {
   var popped = [];
   
   for (i = 0; i < number; i++) {
      array.unshift(i + 1);
      popped[i] = array.pop();
   }
   
   console.log(popped);
   return array;
}


function printArray(array) {

   for (i = 0; i < array.length; i++) {
      console.log(array[i]);
   }
}

var test = createArray(10);

