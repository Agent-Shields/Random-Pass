// Assignment code here

  //Declare lower case characters

  let lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  
  //Declare upper case characters

  let upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  //Declare special characters

  let specialChar = []

// Prompt user for password, 
function generatePassword() {

  //Request desired password criteria info
    function pwCriteria() {

        //get desired password Length

      var pwLength = window.prompt('Please enter your desired password length, must be between 8 and 180 characters')

        //convert string value to integer

      Number(pwLength)
      console.log(pwLength)

        //check desired password Length

      window.prompt('You want your password to be ' + pwLength + ' characters long?')
          
      if (pwLength < 8 || pwLength > 180 && !pwLength === null) {
        window.prompt('You must enter a password length between 8 minimum and 180 maximum characters for your password!')
        return pwCriteria()
      }
    
        //get desired Password Character Types 

      var pwCharType = window.prompt('Please Enter your desired password character types from this list: "LOWERCASE", "UPPERCASE", "NUMERIC" and or "SPECIAL CHARACTERS" ')
      window.prompt('You want your password to contain ' + pwCharType + ' ? ')
    }

    pwCriteria();
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
