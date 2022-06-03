function saveData ()
{
let name1 =document.getElementById("name").value;
let email=document.getElementById("email").value;

localStorage.setItem("name", name1);
localStorage.setItem("email", email);
}