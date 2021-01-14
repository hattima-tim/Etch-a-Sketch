let div=document.querySelector('#container');
function sketch(a){
    let gridSquare=a*a;
    div.style.gridTemplateRows=`repeat(${a},1fr)`;
    div.style.gridTemplateColumns=`repeat(${a},1fr)`;
    let divGrid=[];
for (let i=0;i<gridSquare;i++){
    divGrid[i]=document.createElement('div');
    divGrid[i].classList.add('hover');
}
for (let i=0;i<gridSquare;i++){
    div.appendChild(divGrid[i]);
}
let divs=document.querySelectorAll('.hover');
    divs.forEach((grid)=>{
        grid.addEventListener('mouseover',()=>{
            grid.style.background="black"
    });
});
}
sketch(50);
let input=''
let button=document.querySelector('button');
button.addEventListener('click',()=>{

    input=prompt("If you want to change the layout please input a value between 1 to 100","1");
    sketch(input);
});