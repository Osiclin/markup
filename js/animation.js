var text1 = document.getElementById('text1');
var text2 = document.getElementById('text2');
var text3 = document.getElementById('text3');
var bgText8 = document.getElementsByClassName('bg-text8');
var head = document.getElementsByClassName('bg-text1');



text1.style.display = "none";
text2.style.display = "none";
text3.style.display = "none";
bgText8[0].style.height = "400px";

function showText() {
    
    $('#text1').slideDown().delay(10000).fadeOut();
    $('#text2').delay(11000).slideDown().delay(10000).fadeOut();
    $('#text3').delay(22000).slideDown().delay(10000).fadeOut();
    setTimeout(() => {
        showText()
    }, 33000);
    
}

showText();