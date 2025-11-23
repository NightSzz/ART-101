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

function changeBodyBackground(imagePath) {
    $("body").css("background-image", `url(${imagePath})`);
}
function getImagePathFromElement(el, defaultImg = img1) {
  const $el = $(el);
  let imagePath = $el.data("image");
  if (!imagePath) {
    imagePath = $el.attr("id") || defaultImg;
  }
  return imagePath || defaultImg;
}

function attachInputHighlight(selector = "input", focusColor = "orange", blurColor = "green") {
  $(selector).focus(function(){
    $(this).css("background-color", focusColor);
  });
  $(selector).blur(function(){
    $(this).css("background-color", blurColor);
  });
}

function attachHoverMessages(selector = "#pFeed", enterMsg = "Thank you for reading.", leaveMsg = "Wish goodmango luck below!") {
  $(selector).hover(function(){
    alert(enterMsg);
  }, function(){
    alert(leaveMsg);
  });
}

function initEnv06() {
  // two buttons 
  $(".background-button, .other-button").click(function () {
    const imagePath = getImagePathFromElement(this);
    changeBodyBackground(imagePath);
  });
  // blur highlighting
  attachInputHighlight();
  // pFeed hover
  attachHoverMessages();

  // myRock animation 
  $("#myRock").on("click", function() {
    $(this).animate({
      left: '200px', 
      opacity: '0.5', 
      width: '150px', 
      height: '150px' 
    }, 1000, function() {
      // Callback 
      $(this).animate({
        left: '0px', 
        opacity: '1', 
        width: '100px', 
        height: '100px' 
      }, 1000);
    });
  });
}

$(initEnv06);

//2. Using jQuery, create an interactive event-tied relation in your environment. 
// For example, if user clicks one element, another disappears, or appears, or changes size. 
// Go beyond what we have already did in classes and labs. 
// Use .hover()Links to an external site. event. for example. 
// Study jquery .animate() method.
