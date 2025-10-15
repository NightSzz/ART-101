
let totalNumber = 0;

// add a button titled "Click Me!" to the page

$("#the-button").click( function(){

     totalNumber = totalNumber + 3;

     let sentence = "You said hello ";
     let totalNumbers = sentence + totalNumber + " times";

$("#the-button").html(totalNumbers);  
});


// when the button is clicked,
// show how many times it has been clicked
// add one to the total number 

// show the total number
// on our button
//show "clicked total number of times"

// a top limt
