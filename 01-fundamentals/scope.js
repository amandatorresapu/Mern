var beatles = ['Paul', 'George', 'John', 'Ringo']; //globally scopred becuase beatles is declared inside this file but not inside of any function or loop

//if something is declared inside a function, it is only available inside that function 
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
  
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);
                     
//difference between var vs. let
/*
var i limted only by the function scope
let is lmited by funcitonal scope and block scope(loops and conditionals
  
  cont behaves just like let when it comes to scopring, used to declare variables that you want any change/code to reassing that variable)
*/