// declaring an array with name myCommutes
let myCommutes = ["metro bus", "rental bike", "friends"];

// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "car",
    route: 1,
    print: "white",
    hasMiddleDoor: true,
    drivers: ["Johnny"],};

let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[2] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[0] + "</p>";

$("#output").html(megaSentence);



