const inp = document.querySelector('#inp');
const win = document.querySelector('#win');
const loss = document.querySelector('#loss');
const reset = document.querySelector('#reset');
const w = document.querySelector('#w');
const l = document.querySelector('#l');
let totalScore = 0;
let currWin = 0;
let currLoss = 0;
let inProgress = false;

const isInProgress = () => {
    if(totalScore===currWin+currLoss){
        inProgress = false;
        if(currWin>currLoss){
            w.style.color = "rgba(48, 206, 82, 0.671)";
            l.style.color = "rgba(48, 206, 82, 0.671)";
        }
        else if(currLoss>currWin){
            w.style.color = "rgba(206, 72, 48, 0.671)";
            l.style.color = "rgba(206, 72, 48, 0.671)";
        }
        else{
            w.style.color = "gray";
            l.style.color = "gray";
        }
        console.log('finished');
    }
}

inp.addEventListener('blur', () => {
    totalScore = parseInt(inp.value);
    if(totalScore>0){
        inProgress = true;
    }
    else{
        totalScore = 0;
        inp.value = "";
    }
})

win.addEventListener('click', function(){
    if(inProgress){
        currWin++;
        w.innerText = currWin;
        isInProgress();
    }
})

loss.addEventListener('click', () => {
    if(inProgress){
        currLoss++;
        l.innerText = currLoss;
        isInProgress();
    }
})

reset.addEventListener('click', () =>{
    totalScore = currWin = currLoss = 0;
    w.innerText = l.innerText = 0;
    inp.value = "";
    inProgress = false;
    w.style.color = "black";
    l.style.color = "black";
})

