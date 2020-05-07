// some() any array element is a multipleof given number

const mysome = (array, callback) => {
   for (let i=0; i < array.length; i++){
    if(callback(array[i])){
      return true
    }
  }
  return false
}

const predicat = (x) => x.length >3

const data = ['apple','bat','cat']

mysome(data, predicat)===data.some(predicat)

// every()

const myevery = (array, callback) => {
  let c = 0
   for (let i=0; i < array.length; i++){
    if(callback(array[i])){
      c+=1
    }
  }
  if(c===array.length)return true
  return false
}

const predicat = (x) => x.length >3

const data = ['apple','bat','cat']

myevery(data, predicat)===data.every(predicat)

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

// map()

const mymap = (array, callback) => {
  let newArray = []
   for (let i=0; i < array.length; i++){
    
      newArray.push(callback(array[i]))
    
  }
  return newArray
}

const predicat = (x) => x * 2

const data = [1,2,3, 4, 5, 6]

mymap(data, predicat) == data.map(predicat)

// filter()

 myfilter = (array, callback) => {
  let newArray = []
   for (let i=0; i < array.length; i++){
    if(callback(array[i])){
      newArray.push(array[i])
    }
  }
  return newArray
}

const predicat = (x) => x.length >3

const data = ['apple','bat','cat']
myfilter(data, predicat)===data.filter(predicat)
