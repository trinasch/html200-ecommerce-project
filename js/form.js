//Capture input from sign up form upon submit
function capture(){
  event.preventDefault();
  var theEmail = document.signUp.email.value;
  
//Write message to console  
  console.log("Thanks for signing up, " + theEmail + "!");   
}