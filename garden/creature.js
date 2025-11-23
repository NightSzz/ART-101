// memorize all creatures in array

let allCreatures = [];

// random name api
async function getRandomName() {

   const response = await fetch(
"https://api.gofakeit.com/funcs/petname", 
  {method: "GET",});

   const nameRandom = await response.text();
   console.log("Got name:", nameRandom);
   return nameRandom;
}

// random color api
async function getRandomColor() {
   const response = await fetch(
    "https://api.gofakeit.com/funcs/hexcolor",
    {method:"GET",});

    const colorRandom = await response.text();
    console.log("Got color:",colorRandom);
    return colorRandom;

}

// random emoji api
async function getRandomEmoji() {

   const response = await fetch(
"https://api.gofakeit.com/funcs/emojianimal", 
{method: "GET",});

   const nameRandom = await response.text();
   console.log("Got name:", nameRandom);
   return nameRandom;
}

// random creature
async function randomizeCreature() {

   const eyesRandom = Math.floor(Math.random() * 5) + 1;
   const nameRandom = await getRandomName();
   const colorRandom = await getRandomColor();
   const emojiRandom=await getRandomEmoji();

   const randomCreature = {
       name: emojiRandom+nameRandom,
       color: colorRandom,
       eyesNum: eyesRandom
   };

   return randomCreature;
}
// main add click handler
  // create creature object based on form inputs
  // safety check-ups
  // prepare an html for a single creature
 
  // print single creature on a page
  // add the creature to the memory
  // reset the from

function getCreatureFromForm(){ 

    const freshCreature={
    name: $("#crName").val(),
    color: $("#crColor").val(),
    eyesNum: $("#crEyesNum").val()
    };

    return freshCreature;

};

// prepare HTML for a single creature (does NOT add to the page)
function renderCreature(creature) {
  let crEyesHTML = "";

  for (let i = 0; i < creature.eyesNum; i++) {
    crEyesHTML = crEyesHTML + "<div class='eye'>.</div>";
  }

  const html=`
<div class="creature">
  <div class="creature-body" style="background: ${creature.color}">
${crEyesHTML}
  </div>
  <div class="creature-info">${creature.name}</div>
</div>
`;
  return html;
}


// append one creature to the DOM using its HTML
function addCreatureToDOM(creature) {
  const html = renderCreature(creature);
  // create jQuery element so we can set position and attributes
  const $el = $(html);
  // append to container first so sizes are known
  $("#creature-list").append($el);

  // attach an index/id to the DOM element for later reference
  const idx = allCreatures.indexOf(creature);
  $el.attr('data-crid', idx);

  // place at a random position inside the container bounds
  const $container = $("#creature-list");
  const cw = $container.width();
  const ch = $container.height();
  const ew = $el.outerWidth();
  const eh = $el.outerHeight();

  const left = Math.floor(Math.random() * Math.max(1, cw - ew));
  const top = Math.floor(Math.random() * Math.max(1, ch - eh));

  $el.css({ position: 'absolute', left: left + 'px', top: top + 'px' });
}

// check if creature data is valid
function isCreatureValid(creature) {
  if (creature.name === "") return false;
  if (creature.name.length > 12) return false;
  if (creature.eyesNum=="" || creature.eyesNum > 5) return false;
  return true;  
}

// clear all form fields
function clearForm() {
  $("#crName").val("");
  $("#crColor").val("#7da3eeff");  // or keep previous if you prefer
  $("#crEyesNum").val(1);
}

// render all creatures in random order (uses the creatures array)
function renderAllCreaturesRandom() {
  $("#creature-list").empty();

  const shuffled = allCreatures.slice().sort(() => Math.random() - 0.5);

  shuffled.forEach(function (c, i) {
    const $creature = $(renderCreature(c)).hide(); 
    $("#creature-list").append($creature);
    $creature.delay(i * 120).fadeIn(300);  
  });
}

$("#add-creature").click(
    async function () {

    // create creature object based on form inputs
    //const newCreature = getCreatureFromForm();
      let newCreature;

      if ($("#crRandom").is(':checked'))
      { newCreature= await randomizeCreature();}
      else
      {newCreature = getCreatureFromForm();}

    // do checks, exit function if something is wrong
   if ( isCreatureValid(newCreature)==false) {
    return;
   }
   
   allCreatures.push(newCreature);   // remember it
   addCreatureToDOM(newCreature);    // show it
   clearForm();

    });

$("#shuffle-creatures").click(
function (){
  renderAllCreaturesRandom();

});


    /*
        // grab the value from the input
        let crName = $("#crName").val();
        let crColor= $("#crColor").val();
        let crEyesNum= $("#crEyesNum").val();
        let crEyesHTML="";
        let crFeature= $("#crFeature").val();


        for (let i = 0; i < crEyesNum ; i++){
            crEyesHTML=crEyesHTML + "<div class=eye>.</div>";
        }


        // check for the field value do not add empty ones
        if ( (crName == "") || (crName.length>12) ) { // do nothing 
        }
        else {
            $("#creature-list").append(`
    <div class="creature">
        <div class="creature-body" style="background: ${crColor}">${crEyesHTML}</div>
        <div class="creature-info">${crName}</div>
    </div>
    `);
            }

            // remove the name after it's added
            $("#crName").val("");

        });
    */