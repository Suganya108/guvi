//2.8. Print how many readers for javascript in console.

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

//function to find number of readers of specific book in library

var findNumOfReaders = function(bookName){
for(var i=0;i<library.length;i++){
if(library[i].title===bookName){
console.log(library[i].readers.length);
break;
}
}}
//call function findNumOfReaders

findNumOfReaders("Javascript");
