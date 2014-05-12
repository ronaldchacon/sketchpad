// default squares per row
var squaresPerRow = 50;

// when doc is ready create grid with default marker
$(document).ready(function() {
  createGrid(squaresPerRow, 'default');
});

// reset grid
$(".reset").click(function() {
  $(".square").css({
    "background-color": "#E8E8E8",
    "opacity": "1"
  });
});

// create a grid with default marker
$(".default").click(function() {
  updateGrid('default');
});

// create a grid with random color marker
$(".colors").click(function() {
  updateGrid('colors');
});

// create a grid with gradient marker
$(".gradient").click(function() {
  updateGrid('gradient');
});

// create a grid with trail marker
$(".trail").click(function() {
  updateGrid('trail');
});

// creates grid
function createGrid(numSquares, option) {
  $grid = $(".grid");

  for (var i = 0; i < numSquares * numSquares; i++) {
    $grid.append("<div class='square'></div>");
  }

  $(".grid_label").html("Draw by hovering mouse over " + squaresPerRow + " x " + squaresPerRow + " grid below:");

  //resize squares to fit within container
  var width = ($(".container").width()) / squaresPerRow;
  $(".square").css({
    "width": width,
    "height": width
  });

  if (option === "trail")
  {
    $(".square").hover(function() {
      $(this).css("opacity", 0);
    }, function () {
      $(this).fadeTo('fast', 1);
    });


  }
  else {
    //anytime mouse enters one of squares, change color
    $(".square").mouseenter(function(){


      if (option === "colors") {
        $(this).css("background-color", getColor());
      }
      else if(option === "gradient")
      {
        //reduces opacity by 25% each mouseenter
        $(this).css("opacity", $(this).css("opacity") * 0.75);
      }
      else{

        $(this).css("background-color", "black");
      }
    });
  }
}

//deletes old grid (start with clean slate), and then prompts user and creates updated grid
function updateGrid(option){

  $(".square").remove();

  //get number of squares from user and data validaiton
  squaresPerRow = parseInt(prompt("Enter number of squares (1-64): ",50),10);
  if (squaresPerRow > 0 && squaresPerRow <= 64)
  {

    createGrid(squaresPerRow, option);
  }
  else
  {
    alert("Sorry that was not a valid input.");
  }

}

//helper function to generate random colors
function getColor() {
  var red = Math.floor((Math.random()*255)+1);
  var green = Math.floor((Math.random()*255)+1);
  var blue = Math.floor((Math.random()*255)+1);
  return "rgb(" + red + "," + green + "," + blue + ")";
}

