


var generateBtn = document.querySelector("#generate");

//Below are variables that stores array onjects that contain characters depecicting the user options between uppercase, lowercase, numbers, and special characters.
var optionUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var optionLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var optionNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var optionSpec = ["#", "?", "!", "&", "%"];

//Function is called to write the password.
function writePassword() {
    //below the function generate password is stored in a variable. 
    var password = generatePassword();
    //below the 
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
// for(i=0; i<8; i++) {
//     console.log(i)
// }
function generatePassword(){
    var passLength = prompt("How many character would you like for your password to be? Password must between 8-128 characters long.")
    
    while(passLength < 8 || passLength > 128){
        passLength = prompt("yo, come on (8-128)")
    }

    var upperConfirm = confirm("do you want uppercase characters?")
    var lowerConfirm = confirm("lower?")
    var numberConfirm = confirm("number?")
    var specialConfirm = confirm("special?")

    var characterBank = []
    if(upperConfirm == true){
        characterBank = characterBank.concat(optionUpper)
    }
    if(lowerConfirm == true){
        characterBank = characterBank.concat(optionLower)
    }
    if(numberConfirm == true){
        characterBank = characterBank.concat(optionNumber)
    }
    if(specialConfirm == true){
        characterBank = characterBank.concat(optionSpec)
    }
    
    console.log(characterBank)
    var randomPass = ""

    for(i=0; i<passLength; i++) {
        var randomIndex = Math.floor(Math.random() * characterBank.length);
        console.log(randomIndex)
        console.log(characterBank[randomIndex])
        randomPass += characterBank[randomIndex]
        console.log(randomPass)
    }

    return randomPass
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
