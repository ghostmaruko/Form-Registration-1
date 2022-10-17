function collectDate(event) {
  event.preventDefault();

  var name = document.querySelector("#name").value;
  var yearBirth = document.querySelector("#yearBirth").value;
  var age = 2022 - yearBirth;

  var welcome = document.querySelector("#welcome");
  var messageAge;

  var message;

  if (age > 18) {
    messageAge = ". Welcome";
  } else {
    messageAge = ". Are you joking me?!";
  }

  message =
    "<p> Welcome, " +
    name +
    " you have " +
    age +
    " years old " +
    messageAge +
    "<p/>";

  welcome.innerHTML = message;
}

var theForm = document.querySelector("#registerForm");

theForm.addEventListener("submit", collectDate); 
