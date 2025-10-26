//Add a div with an ID to your html, similar to <div id="output"></div> from the follow along.
//Use $("#output").append( ..... ); to add content to this div. Observe how ID is used!
//You can use multiple DIVs with different IDs for different bits of content.
//Observe how HTML tags are inserted into JS variables before they are printed. Use it!
//You can also CSS-style those DIVs using the same IDs for CSS selectors!
$("#output").append("<h2> and then...</h2>");
$("#output").append("<p> the mango grew to be known as the best warrior mango in the kingdom of mangoes. </p>");


//In JS, create a function that changes something in your environment 
// based on your variables or objects from the previous lab. 
// Feel free to add new variables or other data.
const img1 = "chillmango.jpg";
const img2 = "mango.jpg";

function changeBackground(imagePath) {
    $("body").css("background-image", `url(${imagePath})`);
}

$(function () {
    //two buttons to change background images
    $(".background-button, .other-button").click(function () {
        let imagePath = $(this).data("image"); 
        if (!imagePath) {
            //The button's ID
            imagePath = this.id || img1;
        }
        if (!imagePath) imagePath = img1;
        changeBackground(imagePath);
    });
});
