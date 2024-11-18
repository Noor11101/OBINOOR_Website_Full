// // contact form
// const form = document.querySelector('form');
// const name = document.getElementById("Name");
// // const last_name = document.getElementById("lastName");
// const email = document.getElementById("email");
// const company= document.getElementById("company");
// const message = document.getElementById("message");

// function sendEmail() {
//   const bodyMessage = `Name: ${Name.value} <br>
//   Email: ${email.value}<br> Company: ${company.value}<br> Message: ${message.value}` ;

//   Email.send({
//     SecureToken: "e03b94b8-af5e-468d-9ba0-af51ab1abb01" ,
//     To: 'nooralhamshari70@gmail.com',
//     From: "nooralhamshari70@gmail.com",
//     Subject: company.value,
//     Body: bodyMessage
//   }).then(
//     message => {
//       if (message == "OK"){
//           Swal.fire({
//               title: "Success!",
//               text: "message sent successfully!",
//               icon: "success"
//             });
//       }
//     }
//   );
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   sendEmail();
// });

// function checkEmail(){
//   const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

//   const errorTxtEmail = document.querySelector(".error-txt.email")

//   if (!email.value.match(emailRegex)) {
//       email.classList.add("error");
//       email.parentElement.classList.add("error");

//       if (email.value != "") {
//           errorTxtEmail.innerText = "Enter a Valid email address"
//       }
//       else {
//           errorTxtEmail.innerText = "Email Address Can't be blank"

//       }
//   }
//   else {
//       email.classList.remove("error");
//       email.parentElement.classList.remove("error");
//   }
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   checkInput();

//   if (
//       !name.classList.contains("error") &&
//       !email.classList.contains("error") &&
//       !company.classList.contains("error") &&
//       !message.classList.contains("error")
//   ) {
//       sendEmail();

//       form.reset();
//       return false;
//   }
// });

const form = document.querySelector("form"),
  name = document.getElementById("Name"),
  email = document.getElementById("email"),
  company = document.getElementById("company"),
  message = document.getElementById("message");
function sendEmail() {
  let e = `Name: ${Name.value} <br> 
  Email: ${email.value}<br> Company: ${company.value}<br> Message: ${message.value}`;
  Email.send({
    SecureToken: "e03b94b8-af5e-468d-9ba0-af51ab1abb01",
    To: "nooralhamshari70@gmail.com",
    From: "nooralhamshari70@gmail.com",
    Subject: company.value,
    Body: e,
  }).then((e) => {
    "OK" == e &&
      Swal.fire({
        title: "Success!",
        text: "message sent successfully!",
        icon: "success",
      });
  });
}
function checkEmail() {
  let e = document.querySelector(".error-txt.email");
  email.value.match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/)
    ? (email.classList.remove("error"),
      email.parentElement.classList.remove("error"))
    : (email.classList.add("error"),
      email.parentElement.classList.add("error"),
      "" != email.value
        ? (e.innerText = "Enter a Valid email address")
        : (e.innerText = "Email Address Can't be blank"));
}
form.addEventListener("submit", (e) => {
  e.preventDefault(), sendEmail();
}),
  form.addEventListener("submit", (e) => {
    if (
      (e.preventDefault(),
      checkInput(),
      !name.classList.contains("error") &&
        !email.classList.contains("error") &&
        !company.classList.contains("error") &&
        !message.classList.contains("error"))
    )
      return sendEmail(), form.reset(), !1;
  });
