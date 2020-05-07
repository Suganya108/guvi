// some() any array element is a multipleof given number

const multipleof = (array, value) => {
  for (let i=0; i < array.length; i++){
    if(array[i]%value === 0){
      return true
    }
  }
  return false
}

const result=multipleof([1,2,3], 5)
console.log(result)

// every() all array element is a multipleof given number

const multipleof = (array, value) => {
    var c=1
  for (let i=0; i < array.length; i++){
    if(array[i]%value !== 0){
      c*=0;
    }
  }
  if(c===1)return true
  else return false
}

const result=multipleof([1,2,3], 1)
console.log(result)

// concat() join two array elements to one

const concat = (array1, array2) => {
  return [...array1,...array2]
}

const result=concat([1,2,3], [4,5,6])
console.log(result)

// indexof()

const index = (array, value) => {
    var c=-1
  for (let i=0; i < array.length; i++){
      c+=1;
    if(array[i]===value){
      return c
    }
  }
  return -1
}

const result=index([1,2,3], 4)
console.log(result)

// map() all array element is multiplied by given number

const multiply = (array, value) => {
    var l=[];
  for (let i=0; i < array.length; i++){
    l[i]=array[i]*value;
    
  }
  return l;
}

const result=multiply([1,2,3], 4)
console.log(result)

// filter() return all array element  multipleof given number

const multipleof = (array, value) => {
    var l=[];
  for (let i=0; i < array.length; i++){
    if(array[i]%value===0)
    l.push(array[i]);
    
  }
  return l;
}

const result=multipleof([1,2,3], 2)
console.log(result)
