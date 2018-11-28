
// var nomen;
// var verb;
// var adjektiv;

// function abfrage(wort) {
//    var ergebnis = prompt("Gib ein " + wort + " ein");
//    return ergebnis;
// }

// for (i = 3; i > 0; i--) {
//    switch (i) {
//       case 3: 
//          nomen = abfrage("Nomen");
//          break;
//       case 2:
//          verb = abfrage("Verb");
//          break;
//       default:
//          adjektiv = abfrage("Adjektiv");
//    }
// }

// message = "Nomen: " + nomen + "<br>";
// message += "Verb: " + verb + "<br>";
// message += "Adjektiv: " + adjektiv;

// document.write(message);


var unten = parseInt(prompt("Geben Sie eine Zahl ein"));
var oben = parseInt(prompt("Geben Sie noch eine Zahl ein"));
for (i = 1; i <= oben; i++) {
   var zahl = Math.random() * (oben - unten + 1) + unten;
   var zahlRund = Math.floor(zahl);
   console.log(zahlRund);
}

