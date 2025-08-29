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




// Initial coins
let coins = 100;

// Get elements
const coinElement =
document.getElementById('coinCount');
const callHistroyList = document.getElementById ('callHistory');
const  clearHistoryBtn = document. getElementById('clearHistoryBtn');
const callBtns = document.querySelectorAll('.callBtn');

let history = [];
// updates coin display
function updateCoins(){
  coinElement.textContent = coins;
}

// Renders call history


// On call button click
callBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const card = btn.closest('div[data-name]');
        const serviceName = card.getAttribute('data-name');
        const serviceNumber = card.getAttribute('data-number');
        
        if (coins < 20) {
            alert('Not enough coins. You need at least 20 coins to make a call.');
            return;
        }

        alert(`Calling ${serviceName} at number ${serviceNumber}`);
        coins -= 20;
        updateCoins();

        history.push({name: serviceName, number: serviceNumber});
        renderHistory();
    });
});

// Clear history button
clearHistoryBtn.addEventListener('click', function() {
  
});

