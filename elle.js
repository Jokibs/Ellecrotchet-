
function changeImage(container, images, time) {
    let i = 0;
    function updateImage() {
        if (container) {
            container.src = images[i];
            i = (i < images.length - 1) ? i + 1 : 0;
            setTimeout(updateImage, time);
        }
    }

    updateImage();
}

window.onload = function() {var changehome=document.getElementsByClassName("hamburger");changehome[1].innerHTML='<i class="material-icons">menu</i>';changehome[0].innerHTML='<i class="material-icons">menu</i>';changehome[0].style.color="white";changehome[0].style.fontSize="40px";
changeImage(document.slide, images1, time1);changeImage(document.two, images2, time2);
                           
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






  


    
