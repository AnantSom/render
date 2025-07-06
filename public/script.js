// Add smooth scrolling and interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);

    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click animation to project links
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add typing effect to the title
    const titleElement = document.querySelector('.title');
    const titleText = titleElement.textContent;
    titleElement.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < titleText.length) {
            titleElement.textContent += titleText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after a delay
    setTimeout(typeWriter, 1000);

    // Add parallax effect to background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.body;
        const speed = scrolled * 0.5;
        parallax.style.backgroundPosition = `center ${speed}px`;
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe skill items for staggered animation
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });

    // Add dynamic gradient background
    let gradientAngle = 135;
    setInterval(() => {
        gradientAngle += 0.5;
        document.body.style.background = `linear-gradient(${gradientAngle}deg, #667eea 0%, #764ba2 100%)`;
    }, 100);

    // Add click counter for fun
    let clickCount = 0;
    document.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 10) {
            showEasterEgg();
            clickCount = 0;
        }
    });

    function showEasterEgg() {
        const easterEgg = document.createElement('div');
        easterEgg.innerHTML = '🎉 You found the easter egg! 🎉';
        easterEgg.style.position = 'fixed';
        easterEgg.style.top = '50%';
        easterEgg.style.left = '50%';
        easterEgg.style.transform = 'translate(-50%, -50%)';
        easterEgg.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
        easterEgg.style.color = 'white';
        easterEgg.style.padding = '20px 40px';
        easterEgg.style.borderRadius = '20px';
        easterEgg.style.fontSize = '1.2rem';
        easterEgg.style.fontWeight = 'bold';
        easterEgg.style.zIndex = '1000';
        easterEgg.style.animation = 'bounce 0.5s ease-in-out';
        easterEgg.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        
        document.body.appendChild(easterEgg);
        
        setTimeout(() => {
            easterEgg.remove();
        }, 3000);
    }
});

// Add CSS animations via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes bounce {
        0%, 20%, 60%, 100% {
            transform: translate(-50%, -50%) translateY(0);
        }
        40% {
            transform: translate(-50%, -50%) translateY(-10px);
        }
        80% {
            transform: translate(-50%, -50%) translateY(-5px);
        }
    }
`;
document.head.appendChild(style);