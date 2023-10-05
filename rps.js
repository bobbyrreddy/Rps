

// write a function which take two pameters 
// player selection
// computer selection. 

let pSelection = prompt(`Choose -> Rock Paper or Scissors "R for Rock":: P for Paper:: S for Scissors`, ` `);
// switch case to filter out player selection 'pSelection'




/// use while loops 

    while (pSelection!='r'&&pSelection!='p'&&pSelection!='s'&&pSelection!=null){


        pSelection=pSelection.toLowerCase();
        console.log(pSelection);
        pSelection=prompt(`Choose only between 'R'  'P'  'S'  with no extra charectors`,` `);
        if (pSelection!=null) {
        pSelection=pSelection.toLowerCase();
            console.log(pSelection); 
        }
        
    }




function choosePlayerSelection () {
        if (pSelection==='r') {
            console.log('you chose Rock');
            } 
            else if (pSelection==='p') {
            console.log('you chose Paper');
            }
            else if (pSelection==='s') {
            console.log('you chose Scissors');
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
       


        function getComputerchoice (){
            //randomly return rock paper or scissors
            // math.ramdom. divide it by 3 and accordig to 
            // the result it'll choose rock paper or scissors.
        
            let x = Math.random();
            let y = 'r';
            if (x<.33) {
                console.log(`computer chose Rock ${y}`);
            } else  if (x=>.33 && x<.66){
                y = 'p'
                console.log(`computer chose Paper ${y}`);
            } else if (x>.66) {
                y = 's'
                console.log(`computer chose Scissors ${y}`);
            }
            return y;
            // use console to see if it is returning the expected
            //result
        }

const cSelection = getComputerchoice();

console.log (`cSelection ${cSelection}`);


// convert "pSelection" to lower case... 


// 

function filterRPSselection() {

    console.log("in rps selection")
}

function roundOfRPS (){

    let msg;

    console.log(pSelection);
    console.log(cSelection);

    if (pSelection===cSelection) {
        msg = 'its a tie' ;
        
    } else if (pSelection==='r'&& cSelection==='p'){
        msg = 'computer won';
        
    }else if (pSelection==='p'&& cSelection==='r'){
        msg = 'you won';
    }else if (pSelection==='r'&& cSelection==='s'){
        msg = 'you won';
    }else if (pSelection==='s'&& cSelection==='r'){
        msg = 'computer won';
    }else if (pSelection==='s'&& cSelection==='p'){
        msg = 'you won';
    }else if (pSelection==='p'&& cSelection==='s'){
        msg = 'computer won';   
    }

    return msg;
    // returns a string

    // you lose! Paper beats Rock

    // make pSelection case-insensitive


}

console.log(roundOfRPS());


// 5 round game .. use the roundOfRPS five times snd 
// declare the result.
// Use console.log to dispaly result
//use prompt to get user input.