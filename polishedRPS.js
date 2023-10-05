
   
   // five round rcp is done
   
   
   //selects player selection
    let pSelection = prompt(`Choose -> Rock Paper or Scissors "R for Rock":: P for Paper:: S for Scissors`, ``);
    // switch case to filter out player selection 'pSelection'
    /// use while loops 
    while (pSelection!='r'&&pSelection!='p'&&pSelection!='s'&&pSelection!=null) {
            pSelection=pSelection.toLowerCase();
            console.log(pSelection);
            pSelection=prompt(`Choose only between 'R'  'P'  'S'  with no extra charectors`,``);
            if (pSelection!=null) {
                pSelection=pSelection.toLowerCase();
                console.log(pSelection); 
                }
            }

let cPoints = 0;
let pPoints = 0;

let gNO = 1;
function game () {



    // shows  or gives out put of the player selection.
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
   
                

    
    
    function getComputerchoice () {
        //randomly return rock paper or scissors
        // math.ramdom. divide it by 3 and accordig to 
        // the result it'll choose rock paper or scissors.
        let x = Math.random();

        let y = 'r';

            if (x < 0.33) {
            console.log(`computer chose Rock `);
            } else if (x => 0.33 && x < 0.66) {
            y = 'p';
            console.log(`computer chose Paper `);
            } else if (x > 0.66) {
            y = 's';
            console.log(`computer chose Scissors `);
            }
            return y;
        // use console to see if it is returning the expected
        //result
    }
    
    const cSelection = getComputerchoice();
 
    
    // console.log (`cSelection ${cSelection}`);
    
    function roundOfRPS (){
        let msg;

        if (pSelection===cSelection) {
            msg = 'its a tie' ;
        } else if (pSelection==='r'&& cSelection==='p'){
            msg = `computer won round ${gNO}`;
            cPoints = 1 +cPoints;
        }else if (pSelection==='p'&& cSelection==='r'){
            msg = `you won round ${gNO}`;
            pPoints = 1 +pPoints;
        }else if (pSelection==='r'&& cSelection==='s'){
            msg = `you won round ${gNO}`;
            pPoints = 1 +pPoints;
        }else if (pSelection==='s'&& cSelection==='r'){
            msg = `computer won round ${gNO}`;
            cPoints = 1 +cPoints;
        }else if (pSelection==='s'&& cSelection==='p'){
            msg = `you won round ${gNO}`;
            pPoints = 1 +pPoints;
        }else if (pSelection==='p'&& cSelection==='s'){
            msg = `computer won round ${gNO}`;
            cPoints = 1 +cPoints;   
        }
        return msg;

    }
    
    console.log(roundOfRPS());
    // 5 round game .. use the roundOfRPS five times snd 
    // declare the result.
    // Use console.log to dispaly result
    //use prompt to get user input.



    pSelection = prompt(`Choose -> Rock Paper or Scissors "R for Rock":: P for Paper:: S for Scissors`, ``);
    // switch case to filter out player selection 'pSelection'
    /// use while loops 
    while (pSelection!='r'&&pSelection!='p'&&pSelection!='s'&&pSelection!=null) {
            pSelection=pSelection.toLowerCase();
            console.log(pSelection);
            pSelection=prompt(`Choose only between 'R'  'P'  'S'  with no extra charectors`,``);
            if (pSelection!=null) {
                pSelection=pSelection.toLowerCase();
                console.log(pSelection); 
                }
            }
    gNO++;
}




for (let i = 0; i < 4; i++) {

   
    console.log (`round ${i+1}`);
    console.log(`computer has ${cPoints} points, you have ${pPoints} points`);    
    game();
}


if (cPoints>pPoints) {
    console.log(`computer has ${cPoints} points, you have ${pPoints} points`);
    console.log('COMPUTER WINS');
} else if (cPoints<pPoints){
    console.log(`computer has ${cPoints} points, you have ${pPoints} points`);
    console.log('YOU WIN');
}

if (cPoints===pPoints) {
    console.log(`computer has ${cPoints} points, you have ${pPoints} points`);
    console.log('its a TIE');
}