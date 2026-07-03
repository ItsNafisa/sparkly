let burger=document.querySelector(' .section1 .container nav .menu .burger');
let close=document.querySelector(' .section1 .container nav .menu .close');
let menu=document.querySelector('.section1 .container nav .menu ')
let ul=document.querySelector('.section1 .container nav ul');

menu.onclick=function(){
    burger.classList.toggle('active');
     close.classList.toggle('active');
     ul.classList.toggle('active')
}

//when i click on a-href tag I will close the menu
let links = document.querySelectorAll('.section1 .container nav ul li a');
links.forEach(function(link) {
    link.onclick = function() {
        ul.classList.remove('active');
        close.classList.remove('active');
        burger.classList.add('active');
    }
});

