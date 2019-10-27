const API_KEY = '5778a28a2a830848e559f798b1300f5b';
const BASE_URL = 'https://api.darksky.net/forecast/';


//Registering the serviceWorker in project
window.addEventListener('load',()=>{
 if('serviceWorker' in navigator){
   navigator.serviceWorker.register('/serviceWorker.js')
  .then((registerResponse)=>{
    console.log('Yeh! Service worker has successfully registered');
  })
  .catch((registerErr)=>{
    console.log(registerErr);
  })
 }
})



changeName = ()=>{
let inputFieldRef = document.getElementById("topic_name");
let pRef = document.getElementById('name');
const userData = inputFieldRef.value;
pRef.innerHTML = "Welcome " + userData;
}
