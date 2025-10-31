var count = 0;
let colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];
//images 
function makeImage(imageName) {
     if (colors[colorCount] == imageName) {
     $("body").append("<img width=50 src='images/" + imageName + ".png'>");
    }
}
//background color
function changeBackground (newColor) {
     $("body").css("background-color", newColor);
}
$(".color-button").click(function () {

    changeBackground(this.id);
});

function moody(moodyCount) {
    let mood = "";
    if (moodyCount < 5) { mood = "fresh and happy"; }
    else if ((moodyCount >= 5) && (moodyCount < 10)) { mood = "keep pushing"; }
    else { mood = "so tired"; }

    return mood;
}



//the button
$("#needy-button").click(function () {
//moved the mood code into a function
     //if (count < 5) { mood = "fresh and happy"; }
     //else if ((count >= 5) && (count < 10)) { mood = "keep pushing"; }
     //else { mood = "so tired"; }
   let moodMessage = moody(count);

   $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorCount] + " " + moodMessage);
    //unused code>>>
     //$("body").css("background-color", colors[colorCount]); 
     // if (colors[colorCount] == "Orchid") {
     // $("body").append("<img width=50 src='images/orchid.png'>");
   
    changeBackground(colors[colorCount]);

     makeImage("Orchid");
     makeImage("Coral");
     makeImage("Plum");
     makeImage("HotPink"); 

   count = count + 1;
   colorCount = colorCount + 1;
   if (colorCount == 4) { colorCount = 0; }
});

const myAudio = document.getElementById('myAudio');
const playPauseButton = document.getElementById("#playPauseButton");


// Function to toggle play/pause
function togglePlayPause() {
   if (myAudio.paused) {
       myAudio.play();
       playPauseButton.textContent = 'Pause'; // Update button text
   } else {
       myAudio.pause();
       playPauseButton.textContent = 'Play'; // Update button text
   }
}


// Add an event listener to the button
playPauseButton.addEventListener('click', togglePlayPause);


// Optional: Update button text when the song ends
myAudio.addEventListener('ended', () => {
   playPauseButton.textContent = 'Play';
});
