import * as THREE from 'https://cdn.skypack.dev/three@0.128.0';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { Gradient } from './Gradient.js'

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const PRELOADER = document.querySelector('.preloader');

const gradient = new Gradient()

gradient.initGradient('#gradient-canvas')

let page = window.location.href;

let lastPage = sessionStorage.getItem("pageURL");

sessionStorage.setItem("pageURL", page);

console.log(page, lastPage);

if (lastPage && lastPage.includes("http://127.0.0.1:8080/")){
        PRELOADER.style.visibility = "visible";

        document.body.removeChild(document.querySelector('.preloader'));
        document.body.style.overflow = "visible";
        document.body.style.overflowX = "hidden";
    
}

else {
    PRELOADER.style.visibility = "visible";

    PRELOADER.style.animationName = 'load';
    PRELOADER.style.animationDuration = '1.8s';
    PRELOADER.style.animationTimingFunction = 'ease-in-out';
    PRELOADER.style.animationDelay = '1s';
    PRELOADER.style.animationFillMode = 'forwards';

      
      
      document.addEventListener('DOMContentLoaded', function () {
        const scrollableElement = document.documentElement; 
      
        scrollableElement.addEventListener('scroll', function () {
            if (scrollableElement.scrollTop > 0) {
                scrollableElement.classList.add('show-scrollbar-thumb');
            } else {
                scrollableElement.classList.remove('show-scrollbar-thumb');
            }
        });
      });
      
      
      const scrollingText = document.querySelector('#scroll-to-discover');
      
      const scrollPoint = 200;
      
      window.addEventListener('scroll', () => {
          const scrollY = window.scrollY;
      
          if (scrollY >= scrollPoint) {
              scrollingText.style.visibility = 'hidden';
              
          } else {
              scrollingText.style.visibility = 'visible';
          }
      });
      
      setTimeout(function () {
        document.body.removeChild(document.querySelector('.preloader'));
        document.body.style.overflow = "visible";
        document.body.style.overflowX = "hidden";
    }, 3000);
    
    document.addEventListener("DOMContentLoaded", function () {
    
        const loadingText = document.getElementById("loading-text");
        const LOAD_ARRAY = ["Loading", "Loading.","Loading..","Loading..."]
        let currentIndex = 0;
    
        changeLoadText();
    
        function changeLoadText(){
            loadingText.textContent = LOAD_ARRAY[currentIndex];
            currentIndex = (currentIndex + 1) % LOAD_ARRAY.length;
        }
    
        setInterval(changeLoadText, 350);
    });
} 



document.addEventListener('DOMContentLoaded', function () {
    const clickableElement = document.getElementById('scroll-to-discover');
  
    clickableElement.addEventListener('click', function () {
      console.log('Clicked!');
        const scrollAmount = 950;
  
        window.scrollBy({
            top: scrollAmount,
            behavior: 'smooth',
        });
    });
  });
     
      window.addEventListener('beforeunload', function() {
          window.scrollTo(0, 0);
      });
      






// camera.position.z = 5;

