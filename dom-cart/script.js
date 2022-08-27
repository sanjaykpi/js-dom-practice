//   function product(){
//   let unit=document.getElementById("unitprice").innerText;
//   let qty=document.getElementById("quentity").value;
//   let result =unit*qty;
//   let price=doument.getElementById("price").innerHTML=result;
// }

// let button=document.getElementById("trigger").addEventListener("click",product);
 function calculate(){
  let a=this.parentNode.parentNode;
  // console.log(a);

  let unit=a.getElementsByClassName("unitprice")[0].innerText;
  let qty=a.getElementsByClassName("quentity")[0].value;
  let priceele=a.getElementsByClassName("price")[0];
  unit=parseInt(unit);
  let result=unit*qty;
  priceele.innerHTML=result; 

}
 let checkele=document.getElementsByClassName("trigger");

 for(i=0;i<checkele.length;i++){
    checkele[i].addEventListener("click",calculate);
 }
