    // JavaScript code for form validation
	// Prevent form from submitting
const subButt = document.getElementById("button")
      // Retrieve the input field value
const userInput = document.getElementById("inputField").value
      // Regular expression pattern for alphanumeric input
userInput.setAttribute("pattern","[a-zA-Z0-9]")
      // Check if the input value matches the pattern
subButt.addEventListener("click", validPattern)
function validPattern(){
  // Valid input: display confirmation and submit the form
  if(userInput.validity.patternMismatch){
    userInput.setCustomValidity("Please enter an alphanumeric value")
  }else{ // Invalid input: display error message 
    userInput.setCustomValidity("")
  }
}

