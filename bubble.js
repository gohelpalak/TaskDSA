let arr=[2,5,1,7,4,8,];

for(let i=0; i<arr.length;i++){
    for(let j=0;j<arr.length; j++){
        if(arr[i]>arr[j+1]){
            let tmp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=tmp
            // console.log(tmp);
        }
    }
}
console.log(arr);
