// Escreva uma função recursiva que conte o número de items em uma lista

function arrayLength(arr,length = 0) {

    if (arr[length]) {
        return arrayLength(arr, length + 1);
    } else {
        return length
    }



}

console.log(arrayLength([1,1,1,1,1]));

