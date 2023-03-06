var eKey = document.querySelector('.card_key');
var eLocation = document.querySelector('.card_location');
var eWhich = document.querySelector('.card_which');
var eCode = document.querySelector('.card_code');
var Alert = document.querySelector('.press');
var box = document.querySelector('.box');
var result = document.querySelector('.result');

document.addEventListener('keydown',e=>{

    eKey.innerText = e.key.toUpperCase();
    eLocation.innerText = e.location;
    eWhich.innerText = e.which;    
    eCode.innerText =e.code;
    result.innerText = e.which;
    Alert.classList.add('hide');
    box.classList.remove('hide');
})