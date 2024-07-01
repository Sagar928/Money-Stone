var loginbtn = document.querySelector('.LogIn');
var modelbg = document.querySelector('.model-bg');
var modelclose = document.querySelector('.model-close');
 loginbtn.addEventListener('click',function(){
   modelbg.classList.add('bg-active');
 });
modelclose.addEventListener('click',function(){
   modelbg.classList.remove('bg-active');
})
