const MenuItem = document.querySelectorAll('.nav_list a');
const circles = document.querySelectorAll('.circle');
const Btn = document.querySelectorAll('.fillter-button .btn');
const themeButton = document.querySelector("#theme-btn");
/*Active Nav*/
const ChangeActiveItem = () =>{
    MenuItem.forEach(item => {
        item.classList.remove('active');
  });
}

MenuItem.forEach(item => {
    item.addEventListener('click', () => {
        ChangeActiveItem();
        item.classList.add('active');
    })
});

/*Active Btn*/
const ChangeActiveBtn = () =>{
    Btn.forEach(item => {
        item.classList.remove('active');
  });
}

Btn.forEach(item => {
    item.addEventListener('click', () => {
        ChangeActiveBtn();
        item.classList.add('active');
    })
});

/*Change text*/
let words = document.querySelectorAll('.word');
words.forEach(word => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    }));
});

let currentwordIndex = 0;
let maxWordIndex = words.length -1;
words[currentwordIndex].style.opacity = "1";

let changeText =()=> {
    let currentword = words[currentwordIndex];
    let nextword = currentwordIndex === maxWordIndex ? words[0] : words[currentwordIndex +1];
    Array.from(currentword.children).forEach((letter,i) => {
        setTimeout(()=> {
            letter.className = "letter out";
        },i *80);
        nextword.style.opacity = "1";
    });

    Array.from(nextword.children).forEach((letter,i) => {
        letter.className = "letter behind";
        setTimeout(()=> {
            letter.className = "letter in";
        },340 + i *80);
    });
    currentwordIndex = currentwordIndex === maxWordIndex ? 0 : currentwordIndex +1;
};
changeText();
setInterval(changeText,5000);
/*circle skyle*/
circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots ;

    for (let i = 0; i < dots; i++) {
        points += `<div class="point" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;
     
    const pointmarked = elem.querySelectorAll('.point');
    for (let i = 0; i < percent; i++) {
      pointmarked[i].classList.add('marked');
    }
});
/*Active menu by scroll*/
/*
let section = document.querySelectorAll('section');
let MenuLi = document.querySelectorAll('header ul li a');
function  ActiveMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){} 
        MenuLi.forEach(sec => sec.section.classList.remove("active"));
        MenuLi[len].classList.add("active");
}
ActiveMenu();
window.addEventListener("scroll",ActiveMenu);*/

/*menuIcon*/
let menuIcon = document.querySelector('#menu-icon');
let navList = document.querySelector('.nav_list');

menuIcon.onclick = ()=> {
    menuIcon.classList.toggle("bx-x");
    navList.classList.toggle("open");
}

window.onscroll = ()=> {
    menuIcon.classList.remove("bx-x");
    navList.classList.remove("open");
}
/*parallax*/
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        } else{
            entry.target.classList.remove("show-items")
        }
    });
});


/*portfolio section mixt*/

var mixer = mixitup ('.portfolio-gallery');

const scrollScal = document.querySelectorAll(".scroll-scall");
scrollScal.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-Bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-Top");
scrollTop.forEach((el)=>observer.observe(el));

const scrollright = document.querySelectorAll(".scroll-right");
scrollright.forEach((el)=>observer.observe(el));

const scrollleft = document.querySelectorAll(".scroll-left");
scrollleft.forEach((el)=>observer.observe(el));
/*light-mode*/
const LocalDataFromLocalStorage = () => {

    const themeColor = localStorage.getItem("theme-color");

    document.body.classList.toggle("light-mode", themeColor === "light_mode");
    themeButton.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    localStorage.setItem("theme-color", themeButton.innerText);
    themeButton.innertText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";
});


LocalDataFromLocalStorage();

//Download pdf//
function telechargerpdf(){
    let lienpdf = document.createElement('a');
    lienpdf.href = '/cv/IcholaBriceAkiossiResume.pdf';
    lienpdf.download = 'IcholaBriceAkiossiResume.pdf';
    document.body.appendChild(lienpdf);
    lienpdf.click();
    document.body.removeChild(lienpdf)
}
//read more//
const service = document.querySelector('.service .btn-box');
const dev = document.getElementById('dev');
const mob = document.getElementById('mobile');
const about = document.querySelector('.about-content .btn-box');
function toggleReadMore(){
    var hiddenContent = document.querySelector('.hidden-content');
    if(hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
        hiddenContent.style.display = 'inline';
        about.style.display = 'none';
        service.style.display = 'none';
    }
    else {
        
        hiddenContent.style.display = 'none';
       
    }
     
}
function toggleText(){
    let hiddenContent = document.querySelector('.hidden-content');
     hiddenContent.style.display = 'none';
     about.style.display = 'flex';
     service.style.display = 'flex';

}

//read more service ui/ux*/
function toggleReadMor(){
    var hiddenContent = document.querySelector('.hidden-conten');
    if(hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
        hiddenContent.style.display = 'inline';
        service.style.display = 'none';
    }
    else {
        
        hiddenContent.style.display = 'none';
       
    }
     
}
function toggleTexte(){
    let hiddenContent = document.querySelector('.hidden-conten');
     hiddenContent.style.display = 'none';
     service.style.display = 'flex';

}
//read more service web developpement*/
function toggleReadMo(){
    var hiddenContent = document.querySelector('.hidden-conte');
    if(hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
        hiddenContent.style.display = 'inline';
        dev.style.display = 'none';
    }
    else {
        
        hiddenContent.style.display = 'none';
       
    }
     
}
function toggleTex(){
    let hiddenContent = document.querySelector('.hidden-conte');
     hiddenContent.style.display = 'none';
     dev.style.display = 'flex';

}
//read more service mobile developpement*/
function toggleReadM(){
    var hiddenContent = document.querySelector('.hidden-cont');
    if(hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
        hiddenContent.style.display = 'inline';
        mob.style.display = 'none';
    }
    else {
        
        hiddenContent.style.display = 'none';
       
    }
     
}
function toggleTe(){
    let hiddenContent = document.querySelector('.hidden-cont');
     hiddenContent.style.display = 'none';
     mob.style.display = 'flex';

}

/*=============== ADD BLUR TO HEADER ===============*/
const blurheader = () => {
    const header = document.querySelector('header');
    this.scrollY >= 50 ? header.classList.add('blur-header') :
    header.classList.remove('blur-header');
}
window.addEventListener('scroll', blurheader)

/*formulaire */

  const message = document.querySelector('form .messageconfirm');

  function envoyerFormulaire() {
    const formulaire = document.getElementById("monFormulaire");

    if (formulaire.checkValidity()) {
      // Envoi via EmailJS
      emailjs.sendForm('service_i0lr5wn', 'template_qe3e40d', formulaire)
        .then(function() {
          message.style.display = 'flex';
          message.innerHTML = "<h3 style='color: green;'>Votre message a été envoyé avec succès.</h3>";
          formulaire.reset(); // Réinitialise les champs

          setTimeout(() => {
            message.style.display = 'none';
          }, 3000);
        }, function(error) {
          message.style.display = 'flex';
          message.innerHTML = "<h3 style='color: red;'>Erreur lors de l'envoi. Veuillez réessayer.</h3>";

          setTimeout(() => {
            message.style.display = 'none';
          }, 3000);
        });

    } else {
      message.style.display = 'flex';
      message.innerHTML = "<h3 style='color: red;'>Le formulaire n'est pas valide.</h3>";

      setTimeout(() => {
        message.style.display = 'none';
      }, 3000);
    }
  }


const ScrollUp = () => {
    const ScrollUp = document.getElementById('scrollup');
    this.scrollY >= 1100 ? ScrollUp.classList.add('showscroll') :
    ScrollUp.classList.remove('showscroll');
}

window.addEventListener('scroll', ScrollUp)

const Scrollwat = () => {
    const Scrollwat = document.getElementById('scrollwat');
    this.scrollY >= 350 ? Scrollwat.classList.add('showswatt') :
    Scrollwat.classList.remove('showswatt');
}

window.addEventListener('scroll', Scrollwat)




function blockAccess(event) {
    if(event.keyCode === 123 || (event.ctrlkey && event.shftkey && event.keyCode == 73)){
        event.preventDefault();
    }
}
document.addEventListener('keydown', blockAccess);
document.addEventListener('contextmenu', event => event.preventDefault());
// year dynamic
document.getElementById("year").textContent = new Date().getFullYear();
