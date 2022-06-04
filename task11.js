let myObj = {
    name1 : "Ankit",
    age : 28
};

localStorage.setItem("Userdetails", JSON.stringify(myObj));

var retrievedObject = localStorage.getItem('Userdetails');

console.log('Userdetails: ', JSON.parse(retrievedObject));