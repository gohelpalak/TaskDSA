let arr=[1,2,3,4,5,6,7,8,9,10];
let sum=6;
for(let i=0; i<arr.length;i++){
    for(let j=i+1;j<arr.length; j++){
        if(arr[i]+arr[j]===sum){
            console.log(`The sum of ${sum} is from element ${arr[i]} and ${arr[j]} at indices ${i} ans ${j}`);
        }
    }
}

// let arr=[1,2,3,4,5,6,7,8]
// sum=5;
// for(let i=0;i<arr.length; i++){
//     let sums=arr[i]+arr[i+1];
//     if(sum==sums){
//         console.log("true");
//     }
//     else{
//         console.log("false");
//     }
// }