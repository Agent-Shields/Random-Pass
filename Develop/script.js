// Assignment code here

  //Declare lower case characters

  let lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  // console.log(lowerCaseChar);

  //Declare upper case characters

  let upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    // console.log(upperCaseChar);

  //Declare special characters

  // let specialChar = []

// Prompt user for password, 
function generatePassword() {

  //Request desired password criteria info
    function pwCriteria() {

        //get desired password Length

      var pwLength = window.prompt('Please enter your desired password length, must be between 8 and 180 characters');
        console.log(pwLength);

        //check validity of user input

      if (pwLength == "" || pwLength === null || pwLength === undefined) {
        window.alert("you must enter a numeric value!");
        return pwCriteria();
      }

        //convert string input value to integer 

        pwLength = parseInt(pwLength);
        console.log(pwLength);

      if (!pwLength) {
        window.alert("you must enter a numeric value!");
        return pwCriteria();
      } 

      if (pwLength < 8 || pwLength > 180) {
        window.alert('You must enter a password length between 8 minimum and 180 maximum characters for your password!');
        return pwCriteria();
      }

        //verify desired password Length

      window.confirm('You want your password to be ' + pwLength + ' characters long?');

      // if (pwLength < 8 || pwLength > 180) {
      //   window.alert('You must enter a password length between 8 minimum and 180 maximum characters for your password!')
      //   return pwCriteria()
      // }
    
        //get desired Password Character Types 

      var pwCharType = window.prompt('Please Enter your desired password character types from this list: "LOWERCASE", "UPPERCASE", "NUMERIC" and or "SPECIAL CHARACTERS" ');
      window.confirm('You want your password to contain ' + pwCharType + ' ? ');
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
