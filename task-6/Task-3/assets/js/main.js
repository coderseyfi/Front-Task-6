'use strict'


//Custom Map
let numbers1 = [1, 2, 3, 4, 5, 6, 7];

function customMap(array, callbackFunction) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const result = callbackFunction(array[i]);
        newArray.push(result);
    }
    return newArray;
}
const result2 = customMap(numbers1, item => item * 5);
console.log(result2);
console.log('----------------')




// //custom Filter
let numbers2 = [2, 4, 6, 8, 10, 11, 23, 29, 31];

function customFilter(array, callbackFunction) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const result = callbackFunction(array[i])
        if (result) {
            newArray.push(array[i])
        }
    }
    return newArray;
}
console.log(customFilter(numbers2, item => item < 20))
console.log('----------------')



// custom Reduce 
let numbers3 = [1, 2, 3, 4, 5]

function customReduce(array, cb) {
    const newArray = [];
    let sum = 0; //0 1 6 10 15
    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        sum = sum + current;
        const result = cb(sum, current)
        newArray.push(result)
    }
    return sum;
}
const resultNew = customReduce(numbers3, (sum, current) => sum + current);
console.log(resultNew);
console.log('----------------')



//Custom foreach 
let numbers4 = [1, 2, 3, 4, 5];

function customForeach(array, callbackFunction) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const result = callbackFunction(array[i]);
        newArray.push(result);
    }
    return newArray;
}
customForeach(numbers4, item => console.log(item));
console.log('----------------')



//custom Some
const numbers5 = [1, 3, 3, 1, 5];

function customSome(array, callbackFunction) {
    for (let i = 0; i < array.length; i++) {
        const result = callbackFunction(array[i])
        if (result) {
            return true;
        } else {
            return false;
        }
    }
}
const result5 = customSome(numbers5, item => item % 2 === 0)
console.log(result5)
console.log('----------------')


//custome Every
const numbers6 = [1, 3, 3, 1, 2, 2];

function customEvery(array, cbFn) {

    for (let i = 0; i < array.length; i++) {
        const res = cbFn(array[i])
        if (!res) {
            return false;
        }
    }
    return true;
}
console.log(customEvery(numbers6, item => item < 10))