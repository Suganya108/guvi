//4.2. Convert all the strings to title caps in a string array
var array=["apple","bat","cat","dog"];
//arrow function to Convert all the strings to title caps
var titleCaps=array.map(word=>{
   var string = word[0].toUpperCase();
   for(var i=1;i<word.length;i++)string+=word[i].toLowerCase();
   return string;
    
});
console.log(titleCaps)//[ 'Apple', 'Bat', 'Cat', 'Dog' ]

