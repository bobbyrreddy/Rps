const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const btn_grp_div = document.querySelector('.buttons');




let pSelection='';
let cSelection='';

pSelection='r'
rockBtn.addEventListener('click',()=> {
    pSelection='rock';
    console.log(pSelection);
    displayPSelection(pSelection);
    //display your selection
    //tigger computer selection.
    getComputerchoice (); 
 
    //display computer selection
    }, 
    {once: true});

paperBtn.addEventListener('click',()=> {
    pSelection='paper';
    console.log(pSelection);
    displayPSelection(pSelection);
    //display your selection
    //tigger computer selection.
    getComputerchoice (); 
 
    //display computer selection
    }, 
    {once: true});

scissorsBtn.addEventListener('click',()=> {
    pSelection='scissors';
    console.log(pSelection);
    displayPSelection(pSelection);
    //display your selection
    //tigger computer selection.
    getComputerchoice (); 
    //display computer selection
    // round of game
    roundOfRPS ();
    }, 
    {once: true});


//selection of the player.
function displayPSelection(pSelection) {


    const pTag= document.createElement('p');
    pTag.textContent = `you selected ${pSelection}`;
    btn_grp_div.appendChild(pTag);
    
}

// selection of the computer

    
function getComputerchoice () {
    //randomly return rock paper or scissors
    // math.ramdom. divide it by 3 and accordig to 
    // the result it'll choose rock paper or scissors.
    let x = Math.random();

    let y = 'rock';
    const pTagC_hoice = document.createElement('p');


        if (x < 0.33) {
        console.log(`computer chose Rock `);
        pTagC_hoice.textContent= `computer selected ${y}`;
        } else if (x => 0.33 && x < 0.66) {
        y = 'paper';
        console.log(`computer chose Paper `);
        pTagC_hoice.textContent= `computer selected ${y}`;

        } else if (x > 0.66) {
        y = 'scissors';
        console.log(`computer chose Scissors `);
        pTagC_hoice.textContent= `computer selected ${y}`;

        }
        btn_grp_div.appendChild(pTagC_hoice);
        
        cSelection=y;
        console.log(`inside the function ${cSelection}`);
        return y;
    // use console to see if it is returning the expected
    //result
}

console.log(`outside the function ${cSelection}`);




// the game begins


function roundOfRPS(params) {
    
}

// function roundOfRPS (){
//     let msg;

//     if (pSelection===getComputerchoice()) {
//         msg = 'its a tie' ;
//     } else if (pSelection==='r'&& getComputerchoice()==='p'){
//         msg = `computer won round ${gNO}`;
//         cPoints = 1 +cPoints;
//     }else if (pSelection==='p'&& getComputerchoice()==='r'){
//         msg = `you won round ${gNO}`;
//         pPoints = 1 +pPoints;
//     }else if (pSelection==='r'&& getComputerchoice()==='s'){
//         msg = `you won round ${gNO}`;
//         pPoints = 1 +pPoints;
//     }else if (pSelection==='s'&& getComputerchoice()==='r'){
//         msg = `computer won round ${gNO}`;
//         cPoints = 1 +cPoints;
//     }else if (pSelection==='s'&& getComputerchoice()==='p'){
//         msg = `you won round ${gNO}`;
//         pPoints = 1 +pPoints;
//     }else if (pSelection==='p'&& getComputerchoice()==='s'){
//         msg = `computer won round ${gNO}`;
//         cPoints = 1 +cPoints;   
//     }
//     return msg;

// }


// console.log(`computer choice the return function ${roundOfRPS ()}`);