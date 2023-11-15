function logIn(){
    let username =document.getElementById('userName').value
    console.log(username);
    

   let validatePass =document.getElementById('pwd').value

   if(username==''||validatePass==''){
    alert('Enter the username & password')
    window.location='./login.html';
   }else{
   localStorage.setItem("USERNAME",username);
    window.location='./welcome.html';
}
}