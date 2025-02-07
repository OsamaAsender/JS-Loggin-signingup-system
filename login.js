document.getElementById('loginForm').addEventListener('submit',function(event){
    event.preventDefault();
    const email = document.getElementById("Email").value;
    const password = document.getElementById("pass").value;

    const users = JSON.parse(localStorage.getItem("users")) || []; // to store the (list of objects / array of objects) in a variable


})