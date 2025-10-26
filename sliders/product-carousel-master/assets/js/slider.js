(function () {
  'use strict';

  class Slider {
    constructor(id, mediaQueries) {
      this.slider = document.querySelector(`#${id}`);
      this.sliderList = this.slider.querySelector('.slider-list');
      this.sliderItems = this.slider.querySelectorAll('.slider-item');

      // Clone the first item and append it to the end for continuous scrolling
      const firstItem = this.sliderItems[0].cloneNode(true);
      this.sliderList.appendChild(firstItem);

      this.sliderItems = this.slider.querySelectorAll('.slider-item'); // Update sliderItems with cloned item

      // Initialize other variables
      this.sliderWidth = this.slider.offsetWidth;
      this.slideWidth = this.sliderItems[0].offsetWidth;
      this.totalWidth = this.slideWidth * this.sliderItems.length;
      this.currentIndex = 0;

      // Set the total width of the slider list
      this.sliderList.style.width = `${this.totalWidth}px`;

      // Smooth scroll setup
      this.sliderList.style.transition = 'transform 0.5s ease';
    }

    // Method for moving the slider
    moveSlider() {
      // Move the slider to the next image
      this.currentIndex++;

      if (this.currentIndex >= this.sliderItems.length) {
        this.currentIndex = 0; // Reset back to the first image
        this.sliderList.style.transition = 'none'; // Disable transition for a seamless loop
        this.sliderList.style.transform = `translateX(0)`; // Reset position
        setTimeout(() => {
          this.sliderList.style.transition = 'transform 0.5s ease'; // Re-enable transition
        }, 20); // Wait for the reset to complete before re-enabling the transition
      }

      // Move the slider by adjusting the translateX value
      this.sliderList.style.transform = `translateX(-${this.currentIndex * this.slideWidth}px)`;
    }

    // Function for auto-scrolling
    autoScroll() {
      setInterval(() => {
        this.moveSlider();
      }, 3000); // Auto-scroll every 3 seconds
    }

    // Run the slider
    run() {
      this.autoScroll();
    }
  }

  // Create and run a new slider for 'new-products'
  const newSlider = new Slider('new-products', [576, 992]);
  newSlider.run();

  // Create and run a new slider for 'featured-products'
  const featuredSlider = new Slider('featured-products', [576, 768, 992]);
  featuredSlider.run();

})();

