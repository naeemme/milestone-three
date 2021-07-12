var marks = [45,98,59,38,56,35,81,71];
var max = marks[0];
for(i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log("Highest value is: ", max);
