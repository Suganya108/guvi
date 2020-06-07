// 1 - Chunk

/*Creates an array of elements split into groups the length of size. If array
can't be split evenly, the final chunk will be the remaining elements.*/

// Function to Returns the new array of chunks.

function chunk(array,n=1){
    var newArray=[],index=0,l=n;
    var i=0;
    while(i<array.length/n){
        newArray.push(array.slice(index,l));
        index+=n;
        l+=n;
        i+=1;
    }
    return newArray;
}

console.log(chunk(['a', 'b', 'c']));
// => [['a'], ['b'], ['c']]

console.log(chunk(['a', 'b', 'c', 'd'], 2));
// => [['a', 'b'], ['c', 'd']]

console.log(chunk(['a', 'b', 'c', 'd'], 3));
// => [['a', 'b', 'c'], ['d']]

//2 - compact(array)

/*Creates an array with all falsey values removed. The values false, null, 0,
"", undefined, and NaN are falsey.*/

// Function to Returns the new array of filtered values.

function compact(array){
    var newArray=[],i=0;
    while(i<array.length){
        if(array[i])
        newArray.push(array[i]);
        i+=1;
    }
    return newArray;
}

console.log(compact([0,  1, false,  2,  '',  3]));
// => [1, 2, 3]

//3 - flatconcat

/*Creates a new array concatenating and flattens array a single level deep. 
with any additional arrays and/or values.*/

// Function to Returns the new concatenated array.

function flatconcat(...array){
    var newArray=array.reduce((acc, val) => acc.concat(val), []);
    return newArray.reduce((acc, val) => acc.concat(val), []);
}

var array = [1];
console.log(flatconcat(array,  2, [3], [[4]]));
// => [1, 2, 3, 4]

//4 - drop

//Creates a slice of array with n elements dropped from the beginning.

// Function to the slice of array.

function drop(array,l=1){
    array.splice(0,l);
    console.log(array)
    return array;
}

drop([1,  2,  3])
// => [2, 3]

drop([1,  2,  3],  2);
// => [3]

drop([1,  2,  3],  5);
// => []

drop([1,  2,  3],  0);
// => [1, 2, 3]

//5 - dropRight

//Creates a slice of array with n elements dropped from the end.


// Function to the slice of array.

function dropRight(array,l=1){
    array.reverse();
    array.splice(0,l);
    console.log(array.reverse())
    return array.reverse();
}

dropRight([1,  2,  3])
// => [1, 2]

dropRight([1,  2,  3],  2);
// => [1]

dropRight([1,  2,  3],  5);
// => []

drop([1,  2,  3],  0);
// => [1, 2, 3]

//6 - dropWhile

/*Creates a slice of array excluding elements dropped from the end. Elements
are dropped until predicate returns falsey. The predicate is invoked with
three arguments: (value, index, array).
*/

// Function to return the slice of array.

function dropRightWhile(array,fun=null) {
    var i=0,object=[];
    while(i<array.length){
        if(fun)object.push(array[i]);
        i+=1;
    }
  console.log(object)
  return object;
}

dropRightWhile([1,2,3,4,5])
// => []

dropRightWhile([1,2,3,4,5], (value, index, array) => value % 2 === 0)
// => [1, 3, 5]

//7 - findLastIndex

/*This method is like Array.prototype.findIndex except that it iterates over
elements of collection from right to left.
*/

// Function to return the index of the found element, else -1.

function findLastIndex(array,fun=null) {
    var i=0,object=[];
    while(i<array.length){
        if(fun===true)object.push(array[i]);
        i+=1;
    }
    if(fun===null)object=array;
  console.log(object.length)
  return object.length;
}

findLastIndex([5, 12, 6, 130, 8])
// => 4

findLastIndex([1,2,3,4,5], (value, index, array) => value % 2 === 0)
// => 3

findLastIndex([1,2,3,4], (value, index, array) => value + value === 10)
// => -1

//8 - flattenDeep

//Recursively flattens array.

// Function to return the new flattened array.

function flattenDeep(array) {
  const stack = [...array];
  const newArray = [];
  while(stack.length) {
    const next = stack.pop();
    if(Array.isArray(next)) {
      stack.push(...next);
    } else {
      newArray.push(next);
    }
  }
  return newArray.reverse();
}

console.log(flattenDeep([1, [2, [3, [4]],  5]]));
// => [1, 2, 3, 4, 5]

//9 - flattenDepth

//Recursively flatten array up to depth times.

// Function to return the new flattened array.

function flattenDepth(array,n) {
    var i=0;
    while(i<n){
        var newArray=array.reduce((acc, val) => acc.concat(val), []);
        array=newArray;
        i+=1;
    }
  console.log(newArray)
  return newArray;
}

var array = [1, [2, [3, [4]],  5]];

flattenDepth(array,  1);
// => [1, 2, [3, [4]], 5]

flattenDepth(array,  2);
// => [1, 2, 3, [4], 5]

//10 - fromPairs

//this method returns an object composed from key-value pairs.


// Function to return the new object.

function fromPairs(array) {
    var i=0,object={};
    while(i<array.length){
        object[array[i][0]]=array[i][1];
        i+=1;
    }
  console.log(object)
  return object;
}

fromPairs([['a', 1], ['b', 2]]);
// => { 'a': 1, 'b': 2 }
