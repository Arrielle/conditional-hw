
function conditional(x, y) {
  var x = parseFloat(x);
  var y = parseFloat(y);
  if (x > y) {
    console.log("The first number was bigger!");
  } else if (x < y) {
    console.log("The second number was bigger!");
  } else if (x = y){
    console.log("The numbers are the same!");
  } else {
    console.log("This is not a number");
  }

}

//testing

conditional(9, 4);
conditional(2, 19);
conditional('9 taco', 9);
conditional('Space tacos are the best!', 'Another String');


// my code doesn't really work with the following problems;

conditional('Space whales ingest many tacos', 89);
conditional('Space kittens ride on tacos,', '89');
