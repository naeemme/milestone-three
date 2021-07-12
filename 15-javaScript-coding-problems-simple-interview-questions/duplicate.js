var name = [4,6,8,3,4,6,8,15,28,15,2,8,2,9];
var uniqueName =[];
for(var i = 0; i<name.length;i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if (index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);