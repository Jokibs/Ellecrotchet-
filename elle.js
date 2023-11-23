var changehome=document.getElementsByClassName("hamburger");changehome[1].innerHTML="<i class="material-icons">menu</i>";changehome[0].innerHTML='<i class="material-icons">menu</i>';changehome[0].style.color="white";changehome[0].style.fontSize="40px";



var i1 = 0;
var images1 = ['purple-pom-pom-crochet-top.jpg','brown-divide-crochet-top.jpg', 'thalia-top-crochet.jpg', 'purple-half-pom-pom-crochet-top.jpg','peek-a-boob-top-crochet.webp', 'butterfly-top-crochet.webp','yellow-crochet-top.jpg','maren-top-crochet.jpg','orange-maren-top-crochet.jpg','pink-divide-top-crochet.jpg'];
var time1 = 2000;

function changeimg1() {
    document.slide.src = images1[i1];
    if (i1 < images1.length - 1) {
        i1++;
    } else {
        i1 = 0;
    }
    setTimeout(changeimg1, time1);
}

  var i2 = 0;
var images2 = ['red-bikini-set.jpg', 'pink-white-bikini-set.jpg', 'blue-bikini-set.jpg'];
var time2 = 4000;

function changeimg2() {
    document.two.src = images2[i2];
    if (i2 < images2.length - 1) {
        i2++;
    } else {
        i2 = 0;
    }
    setTimeout(changeimg2, time2);
}
 
window.onload = function() {
    changeimg1();
    changeimg2();
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


/*    // Set the time period in milliseconds
  const timePeriod = 9000; // 9 seconds
  
  // Function to show the button
  function showButton() {
    document.getElementById("myButton").style.display = "block";
  }
  
  // Set a timeout to show the button after the time period has elapsed
  setTimeout(showButton, timePeriod); */




  


    
