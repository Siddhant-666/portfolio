let nav = document.querySelector(".info");
nav.addEventListener("click", all);
let ala1 = document.getElementById("close");
ala1.addEventListener("click",clear);

let a = document.querySelector(".nav");
let ski = document.querySelector(".ski");
let btn = document.querySelector(".btn");
let icon = document.querySelector(".rotate");
let card = document.querySelector(".card-body");
btn.addEventListener("mousemove",rotate);
btn.addEventListener("mouseout",rotate_l);
card.addEventListener("mousemove",blurr);

function blurr(){
    card.style.color = "black";
}

function rotate_l(){
    if (icon.classList.contains("rotate2")) {
        icon.classList.remove("rotate2");
    }
}
function rotate(){
    icon.classList.add("rotate2");

}
function all() {
    if (a.classList.contains("nal2")) {
        a.classList.remove("nal2");
    }
    a.classList.add("nal");

    console.log("button was clicked");
}

let ala = document.querySelector(".alpha");
ala.addEventListener("click", clear);
function clear() {
    // If you want to remove the class 'nal' only if it exists
    if (a.classList.contains("nal")) {
        a.classList.remove("nal");
    }
    a.classList.add("nal2");
}
document.getElementById('Resume').addEventListener('click', function() {
    window.scrollTo({ top: 6*window.innerHeight, behavior: 'smooth' });
});
document.getElementById('btn').addEventListener('click', function() {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
});

document.getElementById('skills').addEventListener('click', function() {
    window.scrollTo({ top: 2*window.innerHeight, behavior: 'smooth' });
});
document.getElementById('ski').addEventListener('click', function() {
    window.scrollTo({ top: 2*window.innerHeight, behavior: 'smooth' });
});

document.getElementById('projects').addEventListener('click', function() {
    window.scrollTo({ top: 3*window.innerHeight, behavior: 'smooth' });
});
document.getElementById('pro').addEventListener('click', function() {
    window.scrollTo({ top: 3*window.innerHeight, behavior: 'smooth' });
});
document.getElementById('Robotics').addEventListener('click', function() {
  window.scrollTo({ top: 4*window.innerHeight, behavior: 'smooth' });
});
const sky = document.querySelector('.section1');
const starCount = 100;  

for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const delay = Math.random() * 6;  
    const duration = 4 + Math.random() * 2; 
    const topPosition = Math.random() * 100;  
    const leftPosition = Math.random() * 100;  
    star.style.animationDelay = `${delay}s`;
    star.style.animationDuration = `${duration}s`;
    star.style.top = `${topPosition}vh`;
    star.style.left = `${leftPosition}vw`;
    sky.appendChild(star);


}
window.addEventListener('scroll', () => {
    const scrollHeight = window.scrollY;
    const ski = document.getElementById('ski');
    if (scrollHeight >= 2 * window.innerHeight && scrollHeight <= 3 * window.innerHeight) {
      ski.style.color = 'red';
    } else {
      ski.style.color = 'white'; // Reset color when not meeting the condition
    }
  });
window.addEventListener('scroll', () => {
    const scrollHeight = window.scrollY;
    const pro = document.getElementById('pro');
    if (scrollHeight >= 3 * window.innerHeight && scrollHeight <= 4 * window.innerHeight) {
      pro.style.color = 'red';
    } else {
      pro.style.color = 'white'; // Reset color when not meeting the condition
    }
  });


  function addHoverListeners(box, animateBox) {
    box.addEventListener('mouseenter', () => handleMouseEnter(box, animateBox));
    box.addEventListener('mouseleave', () => handleMouseLeave(box, animateBox));
  
    animateBox.addEventListener('mouseenter', () => handleMouseEnter(box, animateBox));
    animateBox.addEventListener('mouseleave', () => handleMouseLeave(box, animateBox));
  }
  
  function handleMouseEnter(box, animateBox) {
    box.classList.add('hovered');
    animateBox.classList.add('hovered');
  }
  
  function handleMouseLeave(box, animateBox) {
    setTimeout(() => {
      // Check if the mouse is still inside either the box or animateBox before removing the class
      if (!box.matches(':hover') && !animateBox.matches(':hover')) {
        box.classList.remove('hovered');
        animateBox.classList.remove('hovered');
      }
    }, 500); // Duration of the transition
  }
  function showPopup(content) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    popupContent.textContent = content;
    popup.classList.add('active');
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('active');
}
  
  const box = document.querySelector('.card-img-top');
  const animateBox = document.querySelector('.card-body');
  const box1 = document.querySelector('.card-img-top1');
  const animateBox1 = document.querySelector('.card-body1');
  
  addHoverListeners(box, animateBox);
  addHoverListeners(box1, animateBox1);
  
  
