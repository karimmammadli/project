const firstname = document.getElementById("Name");
const first = document.getElementById("first");
const lastname = document.getElementById("Surname");
const surname = document.getElementById("surnm");
const Email = document.getElementById("Email");
const gmail = document.getElementById("gml");
const pass = document.getElementById("password");
const parol = document.getElementById("pswrd");
const form = document.getElementById("Sign-up");
const signupbtn = document.getElementById("signup")
let arr = [];

// if(localStorage.getItem("users")){
//      console.log("var");
//      arr = JSON.parse(localStorage.getItem("users"));
// }else{
//      console.log("yoxdur");
//      arr = [];
// };
signupbtn.addEventListener('click', function (i) {
     // i.preventDefault();
     const obj = {
          fname: firstname.value,
          lname: lastname.value,
          Email: Email.value,
          pass: pass.value
     };
     arr.push(obj);
     let jsonArr = JSON.stringify(arr);
     localStorage.setItem('users', jsonArr);
     window.location.assign("giris.html");
     if(obj = 2){
          alert("bele bir hesab var !")
       }
});
 

// })
// firstname.addEventListener("mouseover", function (e) {
// if (firstname.onmouseout()) {
//      for (firstname = 0; firstname <= 3; firstname++) {
//           firstname.style.border = "green";
//           first.style.color = "green";
//      }
// } else if(firstname.onmouseout()){
//      for(firstname = 0; firstname <= 2; firstname++){
//      firstname.style.border = "red";
//      first.style.color = "red";
//      }
// };
// })
