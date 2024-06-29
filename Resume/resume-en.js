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

//ANIMATIONS

  // Hover Animation

$(document).ready(function() {
  // Select all grid boxes
  var $boxes = $('.images-100');

  // Iterate through each box to create individual hover animations
  $boxes.each(function() {
    var $box = $(this);

    // Create the hover animation using GSAP timeline for each box
    var hoverAnimation = gsap.timeline({ paused: true })
      .fromTo($box, { scale: 0.95}, { scale: 1 });

    // Add event listeners for hover using jQuery
    $box.hover(
      function() {
        hoverAnimation.play();
      },
      function() {
        hoverAnimation.reverse();
      }
    );
  });
});


// Smooth Scrolling

const ss = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "+=200%", // Adjust based on how far you want the scrolling animation to go
    scrub: 1 // Smoothly animates the timeline
  }
});

// Define animations for each section
ss.to(window, { scrollTo: { y: "section", autoKill: false }, duration: 1 });

// Create ScrollTrigger to control animations
ScrollTrigger.create({
  animation: ss,
  trigger: "body",
  start: "top top",
  end: "+=200%", // Adjust based on how far you want the scrolling animation to go
  scrub: 1, // Smoothly animates the timeline
  pin: true // Pins the animation so it stays visible while scrolling
});
