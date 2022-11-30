// Starter code
var generateBtn = document.querySelector("#generate");
// End of starter code

// functions
function generateRandom(list) {
  return list[randomInt(0, list.length - 1)]
}

function randomInt(min, max) {
if (!max) {
  max = min
  min = 0
}
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function generatePassword() {

var userInput = window.prompt("How long do you want the password?")
var passwordLength = parseInt(userInput)

if (isNaN(passwordLength)) {
  window.alert("That is not a number!")
  return
}

if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Password must be between 8-128 characters.")
  return
}

// variables

var passwordNumbers = window.confirm("Would you like numbers?")

var passwordSymbols = window.confirm("Would you like symbols?")

var passwordLowerCase = window.confirm("Would you like lowercase letters?")

var passwordUpperCase = window.confirm("Would you like uppercase letters?")

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var symbols = ["!", "@", "#", "$", "^", "&", "*"]

var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
 "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
 "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var passwordCriteria = []

for (var i = 0; i < lowerCaseLetters.length; i++) {
  upperCaseLetters[i] = lowerCaseLetters[i].toUpperCase()
}

if (passwordNumbers === true) {
  passwordCriteria.push(numbers)
}

if (passwordSymbols === true) {
  passwordCriteria.push(symbols)
}

if (passwordLowerCase === true) {
  passwordCriteria.push(lowerCaseLetters)
}

if (passwordUpperCase === true) {
  passwordCriteria.push(upperCaseLetters)
}

if (passwordCriteria.length === 0) {
  passwordCriteria.push(lowerCaseLetters)
}

var generatedPassword = ""

for (var i = 0; i < passwordLength; i++) {
  var randomList = generateRandom(passwordCriteria)
  var randomItem = generateRandom(randomList)
  generatedPassword += randomItem
}

return generatedPassword

}

// Starter code
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
// End of starter code