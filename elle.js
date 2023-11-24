function changeImage(container, images, time){let i = 0;  var actual =document.container;  console.log(actual);function updateImage(){ console.log(actual);  console.log(images[i]);console.log(actual.src);actual.src= images1[i];i = (i < images.length - 1) ? i + 1 : 0;}

    setTimeout(updateImage, time);
}

// Images for the first slideshow
const images1 = ['purple-pom-pom-crochet-top.jpg', 'brown-divide-crochet-top.jpg', 'thalia-top-crochet.jpg', 'purple-half-pom-pom-crochet-top.jpg', 'peek-a-boob-top-crochet.webp', 'butterfly-top-crochet.webp', 'yellow-crochet-top.jpg', 'maren-top-crochet.jpg', 'orange-maren-top-crochet.jpg', 'pink-divide-top-crochet.jpg'];
const time1 = 2000;


// Images for the second slideshow
const images2 = ['red-bikini-set.jpg', 'pink-white-bikini-set.jpg', 'blue-bikini-set.jpg'];
const time2 = 4000;


 
window.onload = function() {var changehome=document.getElementsByClassName("hamburger");changehome[1].innerHTML='<i class="material-icons">menu</i>';changehome[0].innerHTML='<i class="material-icons">menu</i>';changehome[0].style.color="white";changehome[0].style.fontSize="40px";

changeImage('slide', images1, time1);
changeImage('two', images2, time2);
};

//header scroll

var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px"; // Change the value to adjust the header's height
  }

  prevScrollPos = currentScrollPos;
};






  


    
