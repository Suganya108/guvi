/* 2.2 Insert a new key called email and assign a value email1@gmail.com and
email2@gmail.com respectively in both authorDetails object; */

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

//function to add email to authorDetails in library

var addEmail = function(index,emailId){
library[index].authorDetails["email"]=emailId;
console.log(library[index].authorDetails);
}

//assigning email to authorDetails in library

addEmail(0,"email1@gmail.com");
addEmail(1,"email2@gmail.com");
