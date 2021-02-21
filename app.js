var neno = 00;
var seconds = 00;


var appendNeno = document.getElementById('neno');
var appendSeconds = document.getElementById('seconds');
var startBtn = document.getElementById('btnStart');
var stopBtn = document.getElementById('btnStop');
var resetBtn = document.getElementById('btnReset');
var interval;
var add;

function startTime() {
    neno++;
    if (neno <= 9) {
        appendNeno.innerHTML = "0" + neno;
    } else if (neno > 9 && neno < 98) {
        appendNeno.innerHTML = neno;
    } else {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        neno = 0;
    
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
    if(seconds===01){
        timer();
    }
}


startBtn.onclick = function () {
    interval = setInterval(startTime, 100);
}

stopBtn.onclick = function () {
    clearInterval(interval);
    

}

resetBtn.onclick = function () {
    clearInterval(interval);
    appendNeno.innerHTML = "0" + 0;
    appendSeconds.innerHTML = "0" + 0;
}
btnlap.onclick=function(){
    document.write(seconds+" : "+neno);
}
 


function timer(){
 var ad=window.location.assign("https://www.google.com/search?rlz=1C1CHBF_enPK887PK887&ei=1HyAX8-vM8SCjLsPip24eA&q=show+ads+in+javascript&oq=show+ads+in+javascript&gs_lcp=CgZwc3ktYWIQAzoECAAQRzoICAAQCBAHEB46CggAEAgQBxAKEB5QjyhYkipg-C1oAHACeACAAdIBiAGRA5IBBTAuMS4xmAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab&ved=0ahUKEwjP6ZqG5afsAhVEAWMBHYoODg8Q4dUDCA0&uact=5");
  add=setInterval(ad);
}


