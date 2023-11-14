 function addTxt(){
    var deliverytime=document.getElementById("deliverytime");
    var  returntime =document.getElementById("returntime");
    deliverytime.innerText="the agreed up on time frame";
    returntime.innerText="3 days";}

    window.addEventListener('load', addTxt);
 function addSlideshow(){
    var product =document.getElementById("product-slideshow");
    var tops = document.createElement('section');
    var bikini = document.createElement('section');
    var tote = document.createElement('section');
    var skirt = document.createElement('section');
    var beanies = document.createElement('section');
     
      tops.className="slideshow";
      tops.innerHTML=`      
      <hr><h2 id="tops">TOPS</h2><hr><br>
      <div class="image-container">
       <div><img name="slide" alt="pictures of brallets"><br><button class="view-all">View all</button> <div class="overlay"><button class="hover-btn" ><a href="tops-crochet.html">View all Tops</a></button> </div></div>
      </div>`;
    
    bikini.className="slideshow";
    bikini.innerHTML=` <div class="image-container">
        <hr><h2 id="sets">Bikini sets</h2><hr><br>
        <div><img name="bikiniSlide" alt="bikini pictures"><br><button class="view-all">View all</button><div class="overlay"><button class="hover-btn" ><a href="bikini-crochet.html">View all Bikini's</a></button></div>
        </div>
       <div>`;
    
      tote.className="slideshow";
      tote.innerHTML=`<div class="image-container">
        <hr><h2 id="tote">Tote bag</h2><hr><br>
        <div id="tote-bags-section"><img name="toteSlide" alt="tote bag"><br><button class="view-all">View all</button> <div class="overlay"><button class="hover-btn" ><a href="tote-bag-crochet.html">All tote bags</a></button></div> 
        </div>
       </div>
      `;
       
      skirt.className="slideshow";
      skirt.innerHTML=`
      <div class="image-container">
        <hr><h2 id="skirts">Skirts</h2><hr><br>
        <div><img name="skirtSlide" alt="skirt"><br><button class="view-all">View all</button>
         <div class="overlay"><button class="hover-btn" ><a href="skirts-crochet.html">View all skirts</a></button></div>
        </div> 
      </div>`;
    
      beanies.className="slideshow";
      beanies.innerHTML=`
      <div class="image-container">
        <hr><h2 id="beanies">Beanies</h2><hr><br>
        <div><img name="beaniesSlide" alt="beanies"></div>
     </div>`;
        
     product.appendChild(tote);
     product.appendChild(skirt);
    // main.appendChild(tops);
     product.appendChild(bikini);
    //main.appendChild(beanies);
    
    }
    window.addEventListener("load", addSlideshow);
    var i = 0;
    var ii = 0;
    var iii = 0;
    var iv = 0;
    
    var time = 2000;
    var beaniesLoc =['white-green-hat.jpg', 'brown_ruffle_hat.jpg', 'blue-white-hat.jpg', 'blue-ruffle-hat.jpg'];
    var skirtLoc =['pic12.jpg', 'orange-mesh-skirt.webp'];
    var toteLoc=['flowered-tote-bag.webp','pink-tote-bag.jpg'];
    var bikiniLoc=['pink-divide-bikini-set.webp','pink-divide×mesh-skirt.webp'];
    
    
    function changebeanies() {
        document.beaniesSlide.src = beaniesLoc[i];
        if (i < beaniesLoc.length - 1) {
            i++;
        } else {
            i = 0;
        }
        setTimeout(changebeanies, time);
    }
    function changeSkirts() {
        document.skirtSlide.src = skirtLoc[ii];
        if (ii < skirtLoc.length - 1) {
            ii++;
        } else {
            ii = 0;
        }
        setTimeout(changeSkirts, time);
    }
    function changeTote() {
        document.toteSlide.src = toteLoc[iii];
        if (iii < toteLoc.length - 1) {
            iii++;
        } else {
            iii = 0;
        }
        setTimeout(changeTote, time);
    }
    function changeBikini() {
        document.bikiniSlide.src = bikiniLoc[iv];
        if (iv < bikiniLoc.length - 1) {
            iv++;
        } else {
            iv = 0;
        }
        setTimeout(changeBikini, time);
    }
    
      
      window.addEventListener("load", changeTote);
      //window.addEventListener("load", changebeanies);
      window.addEventListener("load", changeSkirts);
      window.addEventListener("load", changeBikini);
    
    
     