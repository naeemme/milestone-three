function doubleIt(num){
    var result = num*3;
    //console.log(result);

}
doubleIt(5);
doubleIt(20);
doubleIt(30);
doubleIt(50);


function doubleIt(num){
    var result = num*3;
   return result;

}
var first = doubleIt(5);
var second = doubleIt(20);
var third = doubleIt(30);
var fourth = doubleIt(50);
var total=first+second+third+fourth;
//console.log(total);
function add (num1, num2){
    var result = num1 + num2;
    return result;
}
var sum = add(15,17);
console.log(sum);