// Assignment code here

  //Declare lower case characters

 
  let lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  
    // alternatively let lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz'
 
  //Declare upper case characters

  let upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
 
    // alternatively let upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  //Declare special characters

  let specialChars = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', '(', ')', '{', '}', '[', ']', '~', '-', '_', '.']
 
    // alternatively let specialChars = "@%+/'!#$^?:,(){}[]~-_."

  //Declare numeric characters

  let numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    // alternatively let numericChars = "0123456789"

// Prompt user for password

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

        //convert string input value to integer for pass/fail

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

        var pwLengthConfirm = window.confirm('You want your password to be ' + pwLength + ' characters long?');
        if (pwLengthConfirm) {
          window.alert('Your password will be ' + pwLength + ' characters long');
        }
        else
        {
          return pwCriteria();
        }
    
        //get desired password character Types 
        
        //instantiate password character type empty array

        var pwCharType = [];

        //Ask user if want lowercase characters
        var pwCharTypeLower = window.confirm('Do you want your password to include lower case characters?');

        //Verify user wants lowercase characters 

        if (pwCharTypeLower) {
          window.alert('Your password will contain lower case characters');
          pwCharType.push(lowerCaseChar);
        } else {
          window.alert('Your password will not contain lower case characters');
        } 

         //Ask user if want uppercase characters
         var pwCharTypeUpper = window.confirm('Do you want your password to include upper case characters?');

         //Verify user wants uppercase characters 

         if (pwCharTypeUpper) {
           window.alert('Your password will contain upper case characters');
           pwCharType.push(upperCaseChar);
         } else {
           window.alert('Your password will not contain upper case characters');
         }

          //Ask user if want numeric characters
        var pwCharTypeNumeric = window.confirm('Do you want your password to include numeric characters?');

        //Verify user wants numeric characters 

        if (pwCharTypeNumeric) {
          window.alert('Your password will contain numbers');
          pwCharType.push(numericChars);
        } else {
          window.alert('Your password will not contain numbers');
        }

        //Ask user if want special characters
        var pwCharTypeSpecial = window.confirm('Do you want your password to include special characters?');

        //Verify user wants special characters 

        if (pwCharTypeSpecial) {
          window.alert('Your password will contain special characters');
          pwCharType.push(specialChars);
        } else {
          window.alert('Your password will not contain special characters');
        }

        console.log(pwCharType)

        //Verify at least one criteria was selected
        if (!pwCharTypeSpecial && !pwCharTypeLower && !pwCharTypeNumeric && !pwCharTypeUpper) {
          window.alert('You need to select at least one password criteria!');
          return pwCriteria();
        }

        //logic to determine which character type to use 
        // function pickCharType () {
        //   var ranVal = math.random();
        //   return (ranVal);
        //    if (ranVal <= 0.25){//assign lowercase
        //    } else if (ranVal > 0.25 || ranVal < 0.5)  {//assign uppercase
        //    }
        //    else if (ranVal >= 0.5 || ranVal <0.75) {//assign numeric}
        //   }else (ranVal >= 0.75) {//assign SpecialChar}
        //   }
        // }

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
