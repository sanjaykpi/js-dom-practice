  function product(){
  let unit=document.getElementById("unitprice").innerText;
  let qty=document.getElementById("quentity").value;
  let result =unit*qty;
  let price=document.getElementById("price").innerHTML=result;
}

let button=document.getElementById("trigger").addEventListener("click",product);

