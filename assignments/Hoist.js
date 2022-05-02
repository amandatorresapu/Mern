//     //   1                           
//     var hello = 'world';                                 
//     console.log(hello);  
    
//     // 2
//     var needle = 'haystack';
//     test();
//     function test(){
//         var needle = 'magnet';
//         console.log(needle);
//     }
//       console.log(needle);
    
//     // 3
//     var brendan = 'super cool';
//     function print(){
//         brendan = 'only okay';
//         console.log(brendan);
//     }
//     console.log(brendan);
//     print();

//     // 4
//     var food = 'chicken';
//     function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
//     console.log(food);
// }
// console.log(food);
// eat();

// // 5


// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// mean();

// //6



// var genre = "disco";
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// rewind();

// //7

// dojo = "san jose";
// console.log(dojo);

// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }

// console.log(dojo);
// learn();

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    let dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

