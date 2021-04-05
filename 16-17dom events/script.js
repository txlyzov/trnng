var h1selector = document.querySelector('h1');

h1selector.style.color='blue';
var isYellow = false; 
var bodyElement = document.querySelector('body')

setInterval(function(){
    if (isYellow){
        bodyElement.style.background='white';
    }
    else{
       // bodyElement.style.background='red';
    }
    //isYellow=!isYellow;
});


var button = document.querySelector('#btn1');

button.addEventListener('click',function(){
    console.log('botton pushed');
})

var header1 = document.querySelector('#h1ead');
function toggleBackground(){
    header1.classList.toggle('toggleBackground');
}

header1.addEventListener('click',toggleBackground);