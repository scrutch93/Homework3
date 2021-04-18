
//This creates a promt for when the user clicks on the generate button. This also asks them how many characters they would like for their password to be. 
function promptCriteria (){
  var passwordLength = prompt("How many characters? ");
  var errorFlag = false; //If the user puts in a value that does not meet the criteria, error message will display.

  if (passwordLength < 8 && passwordLength > 128){
    alert("Error, does not saisty requirements. Please ensure input value is greater than or equal to 8 and less than or equal to 128")
    errorFlag = true;
  }
  // if it's inbetween 8 and 128 do this:
  if (errorFlag === false) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
    var lowercase = prompt ("Password contains lowercase characters? Type Yes or No.").toLowerCase();
    var uppercase = prompt ("Password contains uppercase characters? Type Yes or No.").toLowerCase();
    var numbers = prompt ("Password contains numbers? Type Yes or No").toLowerCase();
    var specialCharacters = prompt ("Password contains special characters? Type Yes or No.").toLowerCase();
  //lowercase, uppercase, numeric, and/or special characters
    
    // new if statement that checks all types if they are no set error flag to true  
    if (lowercase === "no" && uppercase === "no" && numbers === "no" && specialCharacters ==="no") {
      errorFlag = true;
      alert("Error, Please select at least one type in order to create a password");
    }

    if (errorFlag === false) {
      var password = "";
      // gernerate password

      //password =
      //alert(lowercase + ' ' + uppercase + ' ' + numbers + ' ' + specialCharacters);
      //alert(password);
    }


  }
  else {
 // nothing if errorflag is true
  }


}

var optionUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var optionLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var optionNumber = ["1","2","3","4","5","6","7","8","9"];
var optionSpec = ["#","?","!","&","%"];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




