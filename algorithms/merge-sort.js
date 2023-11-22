function quicksort(arr) {
    if (arr.length < 2) {
        return arr
    } else {
        let middle = Math.floor(arr.length / 2);
        let pivot = arr[middle]
        
        let less = arr.filter(item => item < pivot);
        let greater = arr.filter(item => item > pivot);

        let s = []
        return s.concat(quicksort(less),pivot,quicksort(greater));

    }    
}

let array = [1,7,3,2,9,11];
console.log(quicksort(array));