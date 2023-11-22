function highestValue(arr, highest = arr[0],highestIndex = 0, i = 0) {
    
    if(i > arr.length) {
        return highest
    }

    if (arr[i] > highest) {
        return highestValue(arr, arr[i], i , i + 1);
    }

    return highestValue(arr, highest, highestIndex, i + 1);
}

console.log(highestValue([5,3,10,7]))