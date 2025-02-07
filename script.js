let user = localStorage.getItem('users');
if(user){
    let parsedUser = JSON.parse(user);
    document.getElementById('welcomeMessage').innerHTML=`Welcome ${parsedUser.name}`;
    document.getElementById('logoutButton').classList.remove('hidden');
}else{
 document.getElementById(
     'welcomeMessage'
 ).innerHTML=`Hello , please <a href ='login.html'> login </a>`;

 document.getElementById('logoutButton').addEventListener('click',function(){
    localStorage.removeItem('user');
    window.location.href="login.html";
 })
}