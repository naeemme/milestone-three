
function getArraySum(numbers){
var sum = 0;
for(var i= 0;i<numbers.length;i++){
    var element = numbers[i];
    sum = sum + element;

    }
    return sum;
}
var numbers = [45,98,59,38,56,65];   
var result = getArraySum(numbers); 
console.log("total of the number:",result);
var total = getArraySum([45,50,59,65,56]);
console.log("total of the number:",total);