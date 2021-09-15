const initialPrice=document.querySelector('#initial-price');
const currentPrice=document.querySelector('#current-price')
const stockQuantity=document.querySelector('#stock-quantity')
const checkBtn=document.querySelector('#check-btn')
const outputArea=document.querySelector('#output-area')
const imgLeft=document.querySelector('.img-left')
const imgRight = document.querySelector(".img-right");

function showProfitLoss(){
    let startPrice= Number(initialPrice.value);
    let current= Number(currentPrice.value);
    let quantity=Number(stockQuantity.value);

    if(startPrice>current && startPrice>=0 && quantity>=0){
        let loss=(startPrice-current)*quantity;
        let lossPercent=(loss/startPrice)*100;
        imgLeft.style.display = "none";
        imgRight.style.display = "none";

        outputArea.innerHTML=`Your loss is ${loss} and the loss percentage is ${lossPercent}!`
        
    }else if(startPrice<current && startPrice>=0 && quantity>=0){
        let profit=(current-startPrice)*quantity;
        
        let profitPercent=(profit/startPrice)*100;
        imgLeft.style.display='block';
        imgRight.style.display = "block";
        outputArea.innerHTML = `Your profit is ${profit} and the profit percentage is ${profitPercent}!`;
    }else{
        if (startPrice <= 0 || quantity <= 0) {
          outputArea.innerHTML = "Please enter correct values";
        } else {
          outputArea.innerHTML = "No gain, No pain";
        }
        
    }
}

checkBtn.addEventListener('click',()=>{
    showProfitLoss();
})