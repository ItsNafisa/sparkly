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



const mySection = document.querySelector('.section3');
const allSpans = document.querySelectorAll('.section3 .content .box div span');
const skillsObserver = new IntersectionObserver(function(entries, self) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            allSpans.forEach(function(span) {
                span.style.width = span.getAttribute('data-width');
            });
            self.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15 
});
if (mySection) {
    skillsObserver.observe(mySection);
}





const statsSection = document.querySelector('.section4');
const statNumbers = document.querySelectorAll('.section4 .box h3');
let started = false; 

function startCount(element) {
    const goal = parseInt(element.getAttribute('data-goal')); 
    
    const counter = setInterval(() => {
        
        let currentText = parseInt(element.textContent);
        element.textContent = currentText + 1;
        
        
        if (parseInt(element.textContent) === goal) {
            clearInterval(counter);
        }
    }, 2000 / goal); 
}


const statsObserver = new IntersectionObserver((entries, self) => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting && !started) {
            statNumbers.forEach(num => startCount(num));
            started = true; 
            self.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.2 
});
if (statsSection) {
    statsObserver.observe(statsSection);
}

