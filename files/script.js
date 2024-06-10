// script.js
$(document).ready(function() {
    // Event listener for close button
    $('#closeBtn').click(function() {
      closeNav();
    });
  
    // Event listener for open button
    $('#openBtn').click(function() {
      openNav();
    });
  });
  
  // Function to open navigation
  function openNav() {
    $('#myNav').css('height', '100%');
  }
  
  // Function to close navigation
  function closeNav() {
    $('#myNav').css('height', '0');
  }


// Horizontal Scrolling Animation



document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".scrollContainer");
  
  function getScrollAmount() {
    return container.scrollWidth - window.innerWidth;
  }

  function createScrollAnimation() {
    // Kill any existing ScrollTriggers to prevent multiple instances
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Create the tween animation
    gsap.to(container, {
      x: () => -getScrollAmount(),
      ease: "none",
      scrollTrigger: {
        trigger: ".scrollWrapper",
        pin: true,
        scrub: 1,
        end: () => "+=" + getScrollAmount(),
        invalidateOnRefresh: true,
        markers: true,
      }
    });
  }

  // Initial animation creation
  createScrollAnimation();

  // Re-create the animation on window resize
  window.addEventListener('resize', createScrollAnimation);
});




  