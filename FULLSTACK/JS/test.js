
var arr=[10,12,15,20];
for(var i=0;i<arr.length;i++){
    setTimeout(function(){
        console.log(i);
        console.log(arr[i]);
    },3000);}
