function bigImg(){
    let x=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg"]
    let r = x[Math.floor(Math.random() * x.length)];
    document.getElementById("big").src =r;
  }
  
  function normalImg(){
    let x=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg"]
    let r = x[Math.floor(Math.random() * x.length)];
    document.getElementById("big").src =r;
  }
