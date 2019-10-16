function fn(){
  let a=document.getElementById("inp").value;
  let b=document.getElementById("b");
  let b3=document.getElementById("dd");
  let c="https://twitter.com/"+a;
  let d="https://twitter.com/hashtag/"+a;
  //b.target=blank;
  b3.href=c;
  b.href=c;
  b2.href=d;
  console.log(b);
}  
