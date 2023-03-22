let add = (a,b) => a+b ;
let subtract = (a,b) => a-b;
let multiply = (a,b) => a*b;
let division = (a,b)=> a/b;
let modulus = (a,b) => a % b;
const currDisplay = document.querySelector('.current-display');

const numButtons = document.querySelectorAll('.number');

numButtons.forEach( button=>{
    button.addEventListener('click', e=>{
        currDisplay.textContent = currDisplay.textContent + button.innerHTML;

        e.stopPropagation();
    });
});

const operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach( button=>{
    button.addEventListener('click', e=>{
        // check if an operator already exists, do it then add result + new operator 
        if(currDisplay.textContent.includes('%') || currDisplay.textContent.includes('+') ||currDisplay.textContent.includes('-') || currDisplay.textContent.includes('*') || currDisplay.textContent.includes('/') )
        {
            if(button.innerHTML !== '.')
            doMath();
        }    
        if(button.innerHTML === '.' && currDisplay.textContent.includes('.'))
            return;
        currDisplay.textContent = currDisplay.textContent + button.innerHTML;

        e.stopPropagation();
    });
});


const equal = document.querySelector('.equal');

equal.addEventListener('click', e=>{
    console.table(currDisplay.textContent.split(" "));
    doMath();
    e.stopPropagation();
});


function doMath(){
    myList = currDisplay.textContent.split(" ");
    if( myList.length === 1 || myList[2] === '')
    {
        currDisplay.textContent = ''+myList[0];
        return;
    }
    if (myList.length === 0)
    {
        return;
    }
        

    let result;
    if (myList[1] === '+')
        result = add(Number(myList[0]),Number(myList[2]));
    else if (myList[1] === '-')
        result = subtract(Number(myList[0]),Number(myList[2]));
    else if (myList[1] === '/')
        result = division(Number(myList[0]),Number(myList[2]));
    else if (myList[1] === '*')
        result = multiply(Number(myList[0]),Number(myList[2]));
    else if (myList[1] === '%')
        result = modulus(Number(myList[0]),Number(myList[2]));
    currDisplay.textContent = ''+Math.round(result * 100) / 100;
}


const AC = document.querySelector('.AC');

AC.addEventListener('click', e=>{
    currDisplay.innerHTML = '';
    e.stopPropagation();
});

const back = document.querySelector('.back');

back.addEventListener('click', e=>{
    if(currDisplay.innerHTML.length > 0)
    {
        currDisplay.innerHTML = currDisplay.innerHTML.substring(0, currDisplay.innerHTML.length-1);
    }
});
