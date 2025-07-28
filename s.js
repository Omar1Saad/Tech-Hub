
// function scan(arr){
//     let len = arr.length
//     let countZeros = 0
//     for(let i=0 ; i<len ; i++){
//         if(arr[i] === 0){
//             countZeros++
//             for(let j = i ; j < len-countZeros ; j++){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }

// console.log(scan([1,0,4,0,4,1]))


function scan(arr, tar){
    let left = 0
    let mid = 0
    let right = arr.length -1
    while(left <= right){
        mid = left + ((right-left) >> 1)
        if(arr[mid] === tar){
            return mid
        }
        else if(arr[mid] < tar){
            left = mid + 1
        }
        else{
            right = mid - 1
        }
    }
    if(arr[arr.length-1] < tar){
        mid++
    }
    return mid
}
console.log(scan([1,2,3,4,5,6,9],9))