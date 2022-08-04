// var hatul = [1,2,3];

// for (let i in hatul){
//     console.log(i)
// }

// for (let i of hatul){
//     console.log(i)
// }

var Ctallaels = ".menu_top_item";
var CTacount = 0;
for (i=0; i<Ctallaels.length; i++){
    Ctallaels[i].id = "RowExpand" + CTacount;
    CTacount++;
}

console.log(Ctallaels)
console.log(CTacount)