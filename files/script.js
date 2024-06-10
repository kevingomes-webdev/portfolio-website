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



gsap.to(".scrollWrapper", {
  xPercent: -75, // Moves the container left by 75% of its width
  ease: "none",
  scrollTrigger: {
      trigger: ".scrollWrapper", // Pins the container in place
      scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      end: "+=3000", // End after scrolling 3000px
      pin: true,
      markers: true
  }
});



  