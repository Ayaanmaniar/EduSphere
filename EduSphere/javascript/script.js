// navbar scroll Animation 
 window.addEventListener("scroll", function() {
  let navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("animate__animated", "animate__backInDown", "nav-shadow");
    // navbar.classList.add("nav-shadow");
  } else {
    navbar.classList.remove("animate__animated", "animate__backInDown" , "nav-shadow");
  }
});




  // Initialize slider functionality
        const slider = document.getElementById('slider');
        const sliderPrev = document.getElementById('slider-prev');
        const sliderNext = document.getElementById('slider-next');
        
        if (slider && sliderPrev && sliderNext) {
            sliderPrev.addEventListener('click', () => {
                slider.scrollBy({ left: -300, behavior: 'smooth' });
            });
            
            sliderNext.addEventListener('click', () => {
                slider.scrollBy({ left: 300, behavior: 'smooth' });
            });
        }
        
        // 3D card flip functionality
        function flipCard(card) {
            card.classList.toggle('flipped');
            
            // Get all cards and reset any that aren't the clicked card
            const allCards = document.querySelectorAll('.course-card');
            allCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('flipped');
                }
            });
        }
        
        // Mobile menu toggle (would need to be implemented fully)
        document.addEventListener('DOMContentLoaded', () => {
            const mobileMenuButton = document.querySelector('.md\\:hidden');
            if (mobileMenuButton) {
                mobileMenuButton.addEventListener('click', () => {
                    // Implement mobile menu toggle
                    alert('Mobile menu functionality would be implemented here');
                });
            }
        });



           // Counter animation for statistics
        function animateCounter(elementId, finalValue, duration) {
            let startTime = null;
            const element = document.getElementById(elementId);
            const startValue = 0;
            
            function updateCounter(timestamp) {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                const currentValue = Math.floor(progress * finalValue);
                
                element.textContent = currentValue.toLocaleString();
                
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            }
            
            requestAnimationFrame(updateCounter);
        }

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Animate counters when stats section comes into view
                    if (entry.target.classList.contains('stats-container')) {
                        setTimeout(() => {
                            animateCounter('students-count', 50000, 2000);
                            animateCounter('courses-count', 1200, 2000);
                            animateCounter('instructors-count', 350, 2000);
                            animateCounter('countries-count', 150, 2000);
                        }, 500);
                    }
                    
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.addEventListener('DOMContentLoaded', () => {
            const animatedElements = document.querySelectorAll('.fade-in-up, .stats-container');
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                observer.observe(el);
            });
        });



        // Scroll reveal animation
const fadeUps = document.querySelectorAll('.fade-up');
function checkVisibility() {
fadeUps.forEach(el => {
const rect = el.getBoundingClientRect();
if (rect.top < window.innerHeight - 80) {
el.classList.add('visible');
}
});
}
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
   
      

 const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("close-btn");
    const overlay = document.getElementById("overlay");

    menuBtn.addEventListener("click", () => {
      sidebar.classList.remove("-translate-x-full");
      overlay.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", () => {
      sidebar.classList.add("-translate-x-full");
      overlay.classList.add("hidden");
    });

    overlay.addEventListener("click", () => {
      sidebar.classList.add("-translate-x-full");
      overlay.classList.add("hidden");
    });