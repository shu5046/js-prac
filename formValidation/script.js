const submit = document.getElementById("btn");
const emailId = document.getElementById("email");
const pass = document.getElementById("pass");
const cpass = document.getElementById("cpass");
const reset = document.getElementById("reset");

submit.addEventListener("click", (obj) => {
  obj.preventDefault();
});
emailId.addEventListener("input", (a) => {
  const emailValue = emailId.value.trim();
  if (emailValue === "") {
    setError(emailId, "Email is required");
  } else if (isValidemail(emailValue)) {
    success(emailId);
  } else {
    setError(emailId, "Not valid Email");
  }
});
pass.addEventListener("input", (a) => {
  const passvalue = pass.value.trim();
  if (passvalue === "") {
    setError(pass, "Password is empty");
  } else if (passvalue.length < 8) {
    setError(pass, "Min 8 characters required");
  } else {
    success(pass);
  }
});
cpass.addEventListener("input", (a) => {
  const cpassvalue = cpass.value.trim();
  const passvalue = pass.value.trim();
  if (passvalue !== cpassvalue || cpassvalue === "") {
    setError(cpass, "Passwords do not match");
  } else {
    success(cpass);
  }
});


reset.addEventListener("click", (e) => {   //to reset the page as well as form
  location.reload();    
});



function setError(val, msg) {        //function to set Error
  const input = val.parentElement;
  const inputvalue = input.querySelector(".error");
  inputvalue.innerText = msg;
  input.classList.add("error");
  input.classList.remove("success");
}


function success(val) {                     //func to set success
  const input = val.parentElement;
  const inputvalue = input.querySelector(".error");
  inputvalue.innerText = "";
  input.classList.add("success");
  input.classList.remove("error");
}


function isValidemail(email) {
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
