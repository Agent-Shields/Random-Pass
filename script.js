// Assignment code here

  //Declare lower case characters

  // var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
 
  //declare random lower case char from array
  
    let lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';

    //  var pickedLowChar = lowerCaseChar[Math.floor(Math.random()*lowerCaseChar.length)];
  
  //Declare upper case characters

  // var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    let upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      // var pickedUpChar = upperCaseChar[Math.floor(Math.random()*upperCaseChar.length)];

  //Declare special characters

  // var specialChars = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', '(', ')', '{', '}', '[', ']', '~', '-', '_', '.']


    let specialChars = "@%+/'!#$^?:,(){}[]~-_.";

      // var pickedSpecChar = specialChars[Math.floor(Math.random()*specialChars.length)];

  //Declare numeric characters

  // var numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    let numericChars = "0123456789";

      // var pickedNumVal = numericChars[Math.floor(Math.random()*numericChars.length)];

        // console.log(PickedNumVal);



// Prompt user for password

function generatePassword() {

  //Request desired password criteria info

    function pwCriteria() {

        //get desired password Length

      var pwLength = window.prompt('Please enter your desired password length, must be between 8 and 180 characters');
        // console.log(pwLength);

        //check validity of user input

        if (pwLength == "" || pwLength === null || pwLength === undefined) {
          window.alert("you must enter a numeric value!");
          return pwCriteria();
        }

        //convert string input value to integer for pass/fail

        pwLength = parseInt(pwLength);
        // console.log(pwLength);

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
          pwCharType = pwCharType += lowerCaseChar;
        } else {
          window.alert('Your password will not contain lower case characters');
        } 

         //Ask user if want uppercase characters
         var pwCharTypeUpper = window.confirm('Do you want your password to include upper case characters?');

         //Verify user wants uppercase characters 

         if (pwCharTypeUpper) {
           window.alert('Your password will contain upper case characters');
            pwCharType = pwCharType += upperCaseChar;
         } else {
           window.alert('Your password will not contain upper case characters');
         }

          //Ask user if want numeric characters
        var pwCharTypeNumeric = window.confirm('Do you want your password to include numeric characters?');

        //Verify user wants numeric characters 

        if (pwCharTypeNumeric) {
          window.alert('Your password will contain numbers');
           pwCharType = pwCharType += numericChars;
        } else {
          window.alert('Your password will not contain numbers');
        }

        //Ask user if want special characters
        var pwCharTypeSpecial = window.confirm('Do you want your password to include special characters?');

        //Verify user wants special characters 

        if (pwCharTypeSpecial) {
          window.alert('Your password will contain special characters');
           pwCharType = pwCharType += specialChars;
        } else {
          window.alert('Your password will not contain special characters');
        }

        //Verify at least one criteria was selected
        if (!pwCharTypeSpecial && !pwCharTypeLower && !pwCharTypeNumeric && !pwCharTypeUpper) {
          window.alert('You need to select at least one password criteria!');
          return pwCriteria();
        }

        //Convert CharType string to array

        desiredPwChars = Array.from(pwCharType);

        // console.log(desiredPwChars);

        // instantiate empty pw string to be added to in for loop afterwards

        let generatedPW = "";

        // for loop to assign random characters from selected character types
        for (var i = 0; i < pwLength; i++ ) {

          // calculate a random character from user selected criteria

          var pickedRanChar = desiredPwChars[Math.floor(Math.random()*desiredPwChars.length)];

          // concantenate single characters into new generated password

          generatedPW = generatedPW += pickedRanChar;

       }
      

      // Return the new password on webpage

       window.alert("Your password is " + generatedPW)
      
       console.log(generatedPW);

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
