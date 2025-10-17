let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"]; // new line tp add

$("#dumb").click(function () {

     let reminder = count % colors.length; 
     count = reminder;
    $("#dumb").html( "Clicks: " + count + " Color: " + colors[count] ); 
   // new line tp add
     $("body").css
     ("background-color",
      colors[count]); // new line tp add

    count = count + 1;

});