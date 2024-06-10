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
  const container = document.querySelector(".races");
  const sections = gsap.utils.toArray(".races .scrollBoxes");

  let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".racesWrapper",
      pin: true,
      scrub: 1,
      end: () => "+=" + container.offsetWidth,
      markers: true,
    }
  });

  console.log(1 / (sections.length - 1));
});

  