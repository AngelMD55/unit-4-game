// List of array an variables
var crystals=[
    {
        name:"red",
        id:"red",
        image: "assets/images/red.jpg",
        randomNumber: Math.floor((Math.random() * 12) + 1)
    },
    {
        name:"green",
        id:"green",
        image: "assets/images/green.jpg",
        randomNumber: Math.floor((Math.random() * 12) + 1)
    },
    {
        name:"purple",
        id:"purple",
        image: "assets/images/purple.jpg",
        randomNumber: Math.floor((Math.random() * 12) + 1)
    },
    {
        name:"blue",
        id:"blue",
        image: "assets/images/blue.jpg",
        randomNumber: Math.floor((Math.random() * 12) + 1)
    }
]

var targetNumber = Math.floor(Math.random()*101)+19;
console.log(targetNumber)

var counter = 0
var wins = 0
var loses= 0

// text target number into html
$("#targetNumber").text(targetNumber)
                  .addClass("text-center")

// for loop to set images and rendom values                
for(var i = 0; i<crystals.length; i++){
    var crys = $("<div>")
    

    var img = $("<img>")
    .attr("src", crystals[i].image)
    .addClass("crystalImages")
    .attr("crystalValue", crystals[i].randomNumber)
    .attr("id", crystals[i].id)

    $(".crystals").append(img);
    
}
// on click event to add crystal values
$(".crystalImages").on("click", function(){
   var value = ($(this).attr("crystalValue"));

    value = parseInt(value);

    

    counter += value;

    $("#counter").text(counter);
// conditions to check for wins and loses
    if(counter === targetNumber){
      wins++;
      $("#wins").text(wins);
      reset()
    }else if
    (counter >= targetNumber){
        loses++;
        $("#lose").text(loses);
        reset()
    }

    function reset(){
        targetNumber= 0
        targetNumber = Math.floor(Math.random()*101)+19;
        $("#targetNumber").text(targetNumber);
        counter = 0;
        $("#counter").text(counter);
        for (var j =0; j<crystals.length; j++){
            crystals[j].randomNumber = 0;
        
        }
        for (var h =0; h<crystals.length; h++){
        crystals[h].randomNumber = Math.floor((Math.random() * 12) + 1);
        console.log(crystals[h].randomNumber);
        crystals[h].id = crystals[h].randomNumber

        $.each($('.crystalImages'), function (index, item) {
            $(item).attr('crystalValue', crystals[index].randomNumber);
        });
        // $(#).attr("crystalValue", crystals[h].randomNumber)
        // img.attr("crystalValue", crystals[i].randomNumber) = crystals[h].randomNumber 
        // ($(this).attr("crystalValue")) = crystals[h].randomNumber
        // crystals[h].randomNumber = value;
        // value = crystals[h].randomNumber

        }
        
}
    
});

