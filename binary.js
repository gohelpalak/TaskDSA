let arr=[1,2,3,4,5,6,7,8,9,10];
let valu=10;
    function binary(arr,first,last,valu){
        if(last>=first){
            let mid=Math.floor((first+last)/2)
            if(arr[mid]==valu){
                return true
            }
            if(arr[mid>valu]){
                return binary(arr,first,mid,valu)
            }

                return binary(arr,mid,last,valu)
        }
        return false
    }
    let result=binary(arr[0],arr.length,valu)
    console.log(result);
