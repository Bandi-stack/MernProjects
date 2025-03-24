document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.container');
    let currentSection = 1; // Initialize to 0 (Home section)
    // Scroll to the Home section on page load
    scrollToSection();
// Function to scroll to the appropriate section
    function scrollToSection() {
        const width = container.clientWidth;
        container.scrollLeft = width * currentSection;
    }
    // Listen for horizontal scroll events to detect swipe gestures
    let startX = 0;
    let endX = 0;
    // Function to handle the direction of scrolling
    function handleScrollDirection() {
        if (startX > endX + 50 && currentSection < 2) {
            currentSection += 1;
        } else if (startX < endX - 50 && currentSection > 0) {
            currentSection -= 1;
        }
        scrollToSection();
    }
});

document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the specified classes
  const animatedDivs = document.querySelectorAll('.nav,.right,.bottom,.left');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Check which class the target div has and add the appropriate animation class
        if (entry.target.classList.contains('nav')) {
          entry.target.classList.add('topanimate');
        } else if (entry.target.classList.contains('right')) {
          entry.target.classList.add('right_animate');
        } else if (entry.target.classList.contains('bottom')) {
          entry.target.classList.add('bottom_animate');
        }else if (entry.target.classList.contains('left')) {
          entry.target.classList.add('left_animate');
        }
      }
    });
  });

  // Observe each div in the NodeList
  animatedDivs.forEach(div => {
    observer.observe(div);
  });
});