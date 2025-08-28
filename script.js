//  
let count = 0;
const loveCount = document.getElementById("heartCount");

const loveBtns = document.querySelectorAll("[id=loveBtn]");

loveBtns.forEach(btn => {
  btn.addEventListener("click",function(){
    count++;
    loveCount.textContent = count;
  })
})

// function getElement(id){
//   const element= document.getElementById(id)
//   return element;
// }

// document.getElementById("calling").addEventListener("click",function(){
//   const title= getElement("cart-title").innerText;
//   const subTittle= getElement("call-emergency").innerText;
//   console.log(title,subTittle)

//   const totalCalling = getElement("total-call").innerText;
// })