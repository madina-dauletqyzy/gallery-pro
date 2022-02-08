const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile_nav');

let menuOpen = false;
menuBtn.addEventListener('click', ()=>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        mobileMenu.classList.add('open');
        menuOpen=true;
    }else{
        menuBtn.classList.remove('open');
        mobileMenu.classList.remove('open');
        menuOpen=false;
    }
})

const prevBtn = document.getElementById('partners_arrow_left');
const nextBtn = document.getElementById('partners_arrow_right');
const interval = 4000;

let partners_slider = document.querySelector('.partners_slider');
let slides = document.querySelector('.partners_list');
let partners_box = document.querySelectorAll('.partners_box');


let psliderlength = partners_slider.offsetWidth;
let slideswidth = (partners_box.length)*160+(partners_box.length)*20;

slides.style.width = slideswidth + 'px';



let offset = 0;
let step = 0;
let ostatok = 0;

let slideWidth = partners_box[0].clientWidth;


nextBtn.addEventListener('click', ()=>{
    ostatok = slideswidth -psliderlength-(offset + slideWidth + 20);
 
    if(ostatok>=0){
    partners_list.style.transition = '0.7s';
    step++;
    offset = step*(slideWidth + 20);
    partners_list.style.transform = `translateX(${-offset}px)`;
    }
    
    
    
    
})


prevBtn.addEventListener('click', ()=>{
    
    if(step>=1){
    partners_list.style.transition = '0.7s';
    step--;
    offset = step*(slideWidth + 20);
    partners_list.style.transform = `translateX(${-offset}px)`;
    }

    
})