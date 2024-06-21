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








  