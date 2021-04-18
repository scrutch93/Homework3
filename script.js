
var optionUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var optionLower = ["abcdefghijklmnopqrstuvwxyz"]
var optionNumber = ['123456789']
var optionSpec = ["#$%&)(*+,/:;<=>?@"]


function promptCriteria (){
  prompt("Please select the desired criteria for password");
}

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




