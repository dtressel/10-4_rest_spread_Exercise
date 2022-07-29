//Question 1:
//Refactor the following code:
// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

function filterOutOdds(...nums) {
    return nums.filter(num => num % 2 === 0);
}

//Question 2:
//Write a function called findMin

function findMin(...nums) {
    console.log(nums);
    return nums.reduce((min, nextNum) => {
        return (min < nextNum ? min : nextNum);
    })
}

//Question 3:
//Write a function called mergObjects

function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
}

//Question 4:
//Write a function called doubleAndReturnArgs

function doubleAndReturnArgs(arr, ...args) {
    return [...arr, ...args.map(arg => arg * 2)];
}

//Question 5:
//Write the following functions using rest and spread

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    const newArr = [...items];
    newArr.splice(Math.floor(Math.random() * items.length), 1);
    return newArr;
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    return {...obj, [key]: val};
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    return {...obj, [key]: val};
}