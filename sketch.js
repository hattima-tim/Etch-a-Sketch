let container=document.querySelector('#container');
function sketchPad(a){
    let gridSquare=a*a;
    container.style.gridTemplateRows=`repeat(${a},1fr)`;
    container.style.gridTemplateColumns=`repeat(${a},1fr)`;
    let squareDiv=[];
for (let i=0;i<gridSquare;i++){
    squareDiv[i]=document.createElement('div');
    squareDiv[i].classList.add('hover');
    container.appendChild(squareDiv[i]);
}
let form=document.querySelector("#form")
let hover=document.querySelectorAll('.hover');
    hover.forEach((containerChilds)=>{
        containerChilds.addEventListener('mouseover',()=>{
            containerChilds.style.background=`${form[0].value}`    
        });
    });
}
sketchPad(16);
let input='';
let sketchPadSize=document.querySelector('#size');
let sketchPadReset=document.querySelector('#reset');
sketchPadReset.addEventListener('click',()=>{
    let hover=document.querySelectorAll('.hover');
    hover.forEach((containerChilds)=>{
        containerChilds.style.background="white";
    });
});
sketchPadSize.addEventListener('click',()=>{
    let hover=document.querySelectorAll('.hover');
    hover.forEach((containerChilds)=>{
        containerChilds.style.background="white";
    });
    while (true){
        input=prompt("Please input a value between 2 to 100","2");
        if (input>1 && input<=100 || input==null){
            break;
        }
    }
    if (input){
    sketchPad(input);
    }
    else {
        sketchPad(16);
    }
});