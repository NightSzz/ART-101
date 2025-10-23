let count = 0;

let mood = [" fresh and happy", " keep pushing"]

let total_count = 0;

let colors = ["Orchid", "Coral", "Hot Pink", "Plum"]; // new line tp add

$("#dumb").click(function () {

    let reminder = count % colors.length; 
     count = reminder;
    $("#dumb").html( "Clicks: " + total_count + " Color: " + colors[count] + mood); 
   // new line tp add
     $("body").css
     ("background-color",
      colors[count]); // new line tp add

    count = count + 1; //or count += 1;
    total_count = total_count + 1;

    //if (count == 4) {count = 0;} //new line
    if (total_count < colors.length) 
      { mood = " fresh and happy";}
   else if ((total_count >= 5) && ( 10 > total_count ) )
      { mood = " keep pushing";}
    else {mood = " so tired" };

 $("body").css("background-color", colors[colorCount]);

    if ( colors[colorCount] == "Orchid" ) {
        $("body").append("<img width=50 src='images/kitten.jpg'>");
}

});