function getComputerchoice (){
    //randomly return rock paper or scissors
    // math.ramdom. divide it by 3 and accordig to 
    // the result it'll choose rock paper or scissors.





    // use console to see if it is returning the expected
    //result
}

// write a function which take two pameters 
// player selection
// computer selection. 

let pSelection = prompt(`Choose -> Rock Paper or Scissors "R for Rock":: P for Paper:: S for Scissors`);
// switch case to filter out player selection 'pSelection'




/// use while loops 

while (pSelection!='r'&&pSelection!='p'&&pSelection!='s'){
    pSelection=pSelection.toLowerCase();
    console.log(pSelection);
    pSelection=prompt(`Choose only between 'R'  'P'  'S'  with no extra charectors`);
    pSelection=pSelection.toLowerCase();
    console.log(pSelection);
    // if ( pSelection==='r'||pSelection==='p'||pSelection==='s') break;
}



function choosePlayerSelection () {
        if (pSelection==='r') {
            console.log('you chose Rock');
            } 
            else if (pSelection==='p') {
            console.log('you chose Paper');
            }
            else if (pSelection==='s') {
            console.log('you chose Paper');
            }
        }
choosePlayerSelection();  
            
        


        // switch (pSelection) {
        //     case 'r':
        //         console.log('you chose Rock');
        //         break;
        //     case 'p':
        //         console.log('you chose Paper');
        //         break;
        //     case 's':
        //         console.log('you chose Scissors');
        //         break;
        
        //     default:
        //         pSelection=prompt(`Choose Rock 'R' Paper 'P' Scissors 'S'  without any extra charectors`);
        //         break;
        // }
       

const cSelection = getComputerchoice();

// convert "pSelection" to lower case... 


// 

function filterRPSselection() {}

function roundOfRPS (pSelection, cSelection){
    // returns a string

    // you lose! Paper beats Rock

    // make pSelection case-insensitive


}

console.log(roundOfRPS());


// 5 round game .. use the roundOfRPS five times snd 
// declare the result.
// Use console.log to dispaly result
//use prompt to get user input.