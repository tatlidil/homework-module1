/*---------random codes----------*/

//function to generate combination of characters
function generateCode(){
     //Create variables to store generated codes and the type of characters we want to show as codes
     var code = ''; //initialize to null value
     var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

     // generate m,ultiple characters using loop
     for (i=1; i<=8; i++){
        var char = Math.random() * str.length; //random select a character from the vari
        code += str.charAt(Math.floor(char)); //accumulate the generated character into a string of 8
        
     }
     return code; //return the final accumulated strring when loop ends
}

//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

//Disable Button
function disableButton() {
    document.getElementById("submit").disabled = true;
}

//activate function
disableButton();



//NOTE: submit button is initially disabled upon loading of this page - see <body> in html

var code = ''; //to store generated codes and initialize to empty value
var getCode = ''; //to store entered code
var btnvalue; //for button boolean value
//create variable to hold the type of characters we want to show as codes
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
function disableButton(btnvalue) {
    document.getElementById("submit").disabled = btnvalue; //able/disable button
    if (btnvalue === true) { //test if button is disabled or enabled
        //set button and label color translucent
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        //set button and label color with no transparency
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
    }
}
    //listen to user input code
    var codebox = document.getElementById("codeentered"); //get textbox
    codebox.addEventListener("input", evaluateCode); //listen to code entered in textbox

    //run function if detected user had entered a character in textbox
    function evaluateCode() {
        getCode = document.getElementById("codeentered").value; //get character entered
        var charset1 = getCode.trim(); //remove any hidden characters entered
        var charset2 = code.trim(); //remove any hidden characters generated
        //test if code entered matches the number of generated characters
        if (charset1.length == charset2.length && charset1 == charset2) {
            disableButton(false); //if match, run the function to enable button
        }
    }
