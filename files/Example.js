document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".races");
  
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
        trigger: ".racesWrapper",
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