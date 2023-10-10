const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');



let pSelection='';

pSelection='r'
rockBtn.addEventListener('click',()=> {
    pSelection='rock';
    console.log(pSelection);
    displayPSelection(pSelection);
    //display your selection
    //tigger computer selection. 
    //display computer selection
    }, 
    {once: true});

paperBtn.addEventListener('click',()=> {
    pSelection='paper';
    console.log(pSelection);
    displayPSelection(pSelection);
    //display your selection
    //tigger computer selection. 
    //display computer selection
    }, 
    {once: true});

scissorsBtn.addEventListener('click',()=> {
    pSelection='scissors';
    console.log(pSelection);
    displayPSelection(pSelection);
    //display your selection
    //tigger computer selection. 
    //display computer selection
    }, 
    {once: true});



function displayPSelection(pSelection) {

    const btn_grp_div = document.querySelector('.buttons');

    const pTag= document.createElement('p');
    pTag.textContent = `you selected ${pSelection}`;
    btn_grp_div.appendChild(pTag);
    
}