var buyPrice = document.querySelector("#buy-price");
var stockQuantity = document.querySelector("#stock-quantity");
var sellPrice = document.querySelector("#sell-price");
var checkBtn = document.querySelector("#check-btn");
var outputBox = document.querySelector("#output-box");

checkBtn.addEventListener("click",submitHandler);

function submitHandler(){
    var ip = Number(buyPrice.value);
    var qty = Number(stockQuantity.value);
    var sp = Number(sellPrice.value);

    calculateProfitAndLoss(ip,qty,sp);
}

function calculateProfitAndLoss(initial,quantity,current){
    if(initial>current){
        var loss = (initial-current)*quantity;
        var lossPercentage = (loss/initial)*100;
        outputBox.innerHTML = "Hey the loss is "+loss+" and the loss percent is "+lossPercentage+"%";
    }   
    else if(current>initial){
        var profit = (current-initial)*quantity;
        var profitPercentage = (profit/initial)*100;
        outputBox.innerHTML = "Hey the profit is "+profit+" and the profit percent is "+profitPercentage+"%";
    }
    else{
        outputBox.innerHTML = "You have neither made a profit nor made a loss";
    }
}