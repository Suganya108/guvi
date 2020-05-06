var a=[1,2,3,4,5,6,7,8,9,10];
  
  // findIndex()
  
  function index(b){
      for(var i=0;i<a.length;i++){
          if(b===a[i]){
              break;
          }
      }
      return i;
  }
  console.log(index(5));
  
  // concat()
  
  function concat(s1,s2,m){
      return s1+m+s2;
  }
  console.log(concat("cat","dog",","));
  
  // sum()
  
  function sum(a){
      var s=0;
      for(var i=0;i<a.length;i++){
          s+=a[i];
      }
      return s;
  }
  console.log(sum(a));
  
  // map() mul by 3
  
  function map(x){
      for(var i=0;i<a.length;i++){
          a[i]=a[i]*x;
      }
      return a;
  }
  console.log(map(3));
  
  // filter() even no. in array
  
  function filter(a){
      var f=[];
      for(var i=0;i<a.length;i++){
          if(a[i]%2===0)f.push(a[i]);
      }
      return f;
  }
  console.log(filter(a));
  
  // every() element is even
  
  function every(x){
      var e=1;
      for(var i=0;i<a.length;i++){
          if(a[i]%x===0)e*=1;
          else e*=0;
      }
      if(e===1)return true;
      else return false;
  }
  console.log(every(2));
