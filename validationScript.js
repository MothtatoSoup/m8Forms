    // JavaScript code for form validation
	// Prevent form from submitting
const subButt = document.getElementById("button")
      // Retrieve the input field value
const userInput = document.getElementById("inputField").value
      // Regular expression pattern for alphanumeric input
      // Check if the input value matches the pattern
subButt.addEventListener("click", validPattern)
function validPattern(){
  // Valid input: display confirmation and submit the form
  if((/^[a-z0-9A-Z]+$/.test(userInput))){
    userInput.setCustomValidity("yippes")
    console.log(userInput)
  }else{ // Invalid input: display error message 
    userInput.setCustomValidity("Please enter an alphanumeric value")
  }
}
