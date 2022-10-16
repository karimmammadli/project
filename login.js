const Email = document.getElementById("Email");
const pass = document.getElementById("password");
const loginForm = document.getElementById("login");
const loginbtn = document.getElementById("log");
let arr = JSON.parse(localStorage.getItem("users"));

loginbtn.addEventListener('click', function (i) {
   // i.preventDefault();
   let istifadeci = true;
   for (let i = 0; i < arr.length; i++) {
      if (Email.value == arr[i].email) {
         istifadeci = false;
         if (pass.value == arr[i].pass) {
            alert("Hesab Dogrulandi");
            window.location("giris.html");
         } else {
            alert("Parol Yanlishdir");
         }
      }
   }
   if (istifadeci) {
      alert("Bele Bir Hesab Yoxdur");
   };
});