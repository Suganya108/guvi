//2.4 Create a New Object in the library for a new Book called SQL.

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

var addObject = function(ObjName){
library[ObjName]={};
console.log(library);
}

//assigning new object to library

addObject("SQL");
