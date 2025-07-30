function scan(s, t){
    let arr = t.split('').sort()
    let arr2 = s.split('').sort()
    if(arr.length != arr2.length){
        return false
    }
    else if (arr.join('') === arr2.join('')){
        return true
    }
    return false
}

console.log(scan("cat", "tac"))
