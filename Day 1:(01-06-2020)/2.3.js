//2.3 Insert a new reader in the readers array for Nodejs.

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

//function to insert reader into readers in library

var addReader = function(index,n,a){
library[index].readers[library[index].readers.length]={"name":n,"count":a};
console.log(library[index].readers);
}

//assigning reader into readers in library

addReader(0,"Bala",300);
addReader(1,"Bala",300);
