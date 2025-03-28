    // JavaScript code for form validation
	// Prevent form from submitting
const form = document.getElementById("myForm")
      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input
      // Check if the input value matches the pattern
form.addEventListener("click", validPattern)
function validPattern(){
  const userInput = document.getElementById("inputField")
  // Valid input: display confirmation and submit the form
  if((/^[a-z0-9A-Z]+$/.test(userInput.value))){

    userInput.setCustomValidity("yippes")
    console.log(userInput)
  }else{ // Invalid input: display error message 
    userInput.setCustomValidity("Please enter an alphanumeric value");
  }
  event.preventDefault

}
