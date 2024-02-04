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