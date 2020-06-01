//2.5 Find the datatype of author age in Nodejs Object.

var library = [
{
  title:"Javascript",
  price:500,
  readers:[
      {
          name:"Person 1",
          count:300
      },
      {
          name:"Person 2",
          count:500
      }
      ],
      authorDetails : {
          name:"Raj",
          age:40
      }
},
{ 
    title:"Nodejs",
  price:600,
  readers:[],
      authorDetails : {
          name:"Raj",
          age:40
      }
}
]

//function to create new object in library

var findDataType = function(){
console.log(typeof(library[0].authorDetails.age));
}

//call function findDataType

findDataType();
