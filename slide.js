
    const slider = document.querySelector('.slider');
    const images = slider.querySelectorAll('img');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentImageIndex = 0;
    
    function showImage(index) {
      images.forEach((image, i) => {
        if (i === index) {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
      });
    }
    
    prevBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      showImage(currentImageIndex);
    });
    
    nextBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      showImage(currentImageIndex);
    });
    
    showImage(currentImageIndex);
  