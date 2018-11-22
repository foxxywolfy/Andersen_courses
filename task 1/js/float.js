var array = [
    1,
    2,
    3,
    [4, 5, 6, [7, 8, 9, [0]]]
];


function float(arr) {
    let additionalArray = [];
    for (let i in arr) {
        if (Array.isArray(arr[i])) {
            let nestedArray = float(arr[i]);
            for (let j in nestedArray) {
                additionalArray.push(nestedArray[j]);
            }
        } else {
            additionalArray.push(arr[i]);
        }
    }
    return additionalArray;
}


var newArr = float(array);
console.log(newArr);