// Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add animation classes and observe elements
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to section headers
    document.querySelectorAll('.section-header').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Add slide-in animations to about content
    const aboutText = document.querySelector('.about-text');
    const aboutStats = document.querySelector('.about-stats');
    if (aboutText) {
        aboutText.classList.add('slide-in-left');
        observer.observe(aboutText);
    }
    if (aboutStats) {
        aboutStats.classList.add('slide-in-right');
        observer.observe(aboutStats);
    }

    // Add fade-in to skill items
    document.querySelectorAll('.skill-item, .soft-skill-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Add fade-in to timeline items
    document.querySelectorAll('.timeline-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Add fade-in to education items
    document.querySelectorAll('.education-item, .certification-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Add fade-in to project cards
    document.querySelectorAll('.project-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Add animations to internship cards
    document.querySelectorAll('.internship-card-3d').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Add animations to stat cards
    document.querySelectorAll('.stat-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Add fade-in to contact items
    document.querySelectorAll('.contact-item, .contact-form').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Skill progress bars animation
const animateProgressBars = () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
    });
};

// Animate progress bars when skills section is visible
const skillsSection = document.querySelector('#skills');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(animateProgressBars, 500);
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Contact form handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Create mailto link
        const mailtoLink = `mailto:skmotalib16@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        // Open default email client
        window.location.href = mailtoLink;
        
        // Show success message
        alert('Thank you for your message! Your default email client should open with the message ready to send.');
        
        // Reset form
        contactForm.reset();
    });
}

// Typing animation for hero title
const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.innerHTML = '';
    
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
};

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        const originalText = nameElement.textContent;
        typeWriter(nameElement, originalText, 150);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add hover effects to social links
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-5px) scale(1.1)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0) scale(1)';
    });
});

// Smooth reveal animation for timeline items
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px)';
    item.style.transition = 'all 0.6s ease';
    timelineObserver.observe(item);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add scroll-to-top functionality
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Add click event to logo for scroll to top
document.querySelector('.nav-logo a').addEventListener('click', (e) => {
    e.preventDefault();
    scrollToTop();
});

// Add floating animation to hero image
const heroImage = document.querySelector('.profile-circle');
if (heroImage) {
    let floatDirection = 1;
    setInterval(() => {
        floatDirection *= -1;
        heroImage.style.transform = `translateY(${floatDirection * 10}px)`;
    }, 3000);
}

// Add particle effect to hero background
const createParticles = () => {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles';
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
        `;
        particleContainer.appendChild(particle);
    }
    
    document.querySelector('.hero').appendChild(particleContainer);
};

// Initialize particles
document.addEventListener('DOMContentLoaded', createParticles);

// Add dynamic text color change based on scroll
window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    const hue = scrollPercent * 3.6; // Full color wheel
    document.documentElement.style.setProperty('--dynamic-color', `hsl(${hue}, 70%, 50%)`);
});

// Add project card hover effects with enhanced animations
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
        card.style.boxShadow = '0 20px 60px rgba(99, 102, 241, 0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    });
});

// Add tech tag hover effects
document.querySelectorAll('.tech-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.background = '#6366f1';
        tag.style.color = 'white';
        tag.style.transform = 'scale(1.1)';
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.background = '#e2e8f0';
        tag.style.color = '#475569';
        tag.style.transform = 'scale(1)';
    });
});

// Enhanced skill progress bar animations with stagger effect
const animateSkillBars = () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
            bar.style.background = `linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)`;
        }, index * 200);
    });
};

// Enhanced intersection observer with custom animations
const enhancedObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) rotate(0deg)';
                entry.target.classList.add('animate-in');
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

// Add enhanced animations to all sections
document.addEventListener('DOMContentLoaded', () => {
    // Initial animation state
    document.querySelectorAll('.project-card, .education-item, .certification-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px) rotate(2deg)';
        el.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        enhancedObserver.observe(el);
    });
});

// Add loading screen effect
window.addEventListener('load', () => {
    const loadingScreen = document.createElement('div');
    loadingScreen.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        ">
            <div style="
                color: white;
                font-size: 2rem;
                font-weight: 700;
                animation: pulse 2s infinite;
            ">SK MOTALIB</div>
        </div>
    `;
    
    document.body.appendChild(loadingScreen);
    
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 1500);
});

// Enhanced 3D Internships Section Interactions
document.addEventListener('DOMContentLoaded', () => {
    // Auto-flip internship cards on scroll
    const internshipCards = document.querySelectorAll('.internship-card-3d');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.transform = 'rotateY(180deg) scale(1.02)';
                    setTimeout(() => {
                        entry.target.style.transform = 'rotateY(0deg) scale(1)';
                    }, 2000);
                }, index * 300);
            }
        });
    }, { threshold: 0.3 });

    internshipCards.forEach(card => {
        cardObserver.observe(card);
        
        // Add mouse movement 3D effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });

    // Counting animation for stats
    const animateCounters = () => {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
    };

    // Trigger counter animation when internships section is visible
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const internshipsSection = document.querySelector('.internships-stats');
    if (internshipsSection) {
        statsObserver.observe(internshipsSection);
    }

    // Add dynamic background particles for internships section
    const createInternshipParticles = () => {
        const internshipsSection = document.querySelector('.internships');
        if (!internshipsSection) return;

        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 6 + 2}px;
                height: ${Math.random() * 6 + 2}px;
                background: rgba(99, 102, 241, ${Math.random() * 0.5 + 0.2});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: internshipFloat ${Math.random() * 10 + 10}s linear infinite;
                pointer-events: none;
                z-index: 1;
            `;
            internshipsSection.appendChild(particle);
        }
    };

    // Add CSS animation for internship particles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes internshipFloat {
            0% {
                transform: translateY(100vh) translateX(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) translateX(${Math.random() * 200 - 100}px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    createInternshipParticles();

    // Apply intensive color effects to text elements
    const applyIntensiveColors = () => {
        // Hero section text
        const nameElement = document.querySelector('.name');
        if (nameElement) {
            nameElement.classList.add('text-rainbow-intensive');
        }
        
        const greetingElement = document.querySelector('.greeting');
        if (greetingElement) {
            greetingElement.classList.add('text-glow-blue');
        }
        
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) {
            heroSubtitle.classList.add('text-green-intensive');
        }
        
        // Section titles with different colors
        const sectionTitles = document.querySelectorAll('.section-title');
        sectionTitles.forEach((title, index) => {
            const colors = ['text-rainbow-intensive', 'text-blue-intensive', 'text-green-intensive', 'text-red-intensive'];
            title.classList.add(colors[index % colors.length]);
        });
        
        // Project titles with intensive colors
        const projectTitles = document.querySelectorAll('.project-header h3');
        projectTitles.forEach((title, index) => {
            const colors = ['text-green-intensive', 'text-blue-intensive', 'text-red-intensive'];
            title.classList.add(colors[index % colors.length]);
        });
        
        // Skill category titles
        const categoryTitles = document.querySelectorAll('.category-title');
        categoryTitles.forEach((title, index) => {
            const colors = ['text-glow-green', 'text-glow-blue', 'text-glow-red'];
            title.classList.add(colors[index % colors.length]);
        });
        
        // Company names in internships
        const companyNames = document.querySelectorAll('.company-name');
        companyNames.forEach((company, index) => {
            const colors = ['text-blue-intensive', 'text-green-intensive', 'text-red-intensive'];
            company.classList.add(colors[index % colors.length]);
        });
        
        // Add intensive colors to key words in descriptions
        const descriptions = document.querySelectorAll('.hero-description, .project-description p, .about-description p, .timeline-description p, .timeline-description li');
        descriptions.forEach(desc => {
            let content = desc.innerHTML;
            content = content.replace(/AI/g, '<span class="text-green-intensive">AI</span>');
            content = content.replace(/Machine Learning/g, '<span class="text-green-intensive">Machine Learning</span>');
            content = content.replace(/Python/g, '<span class="text-green-intensive">Python</span>');
            content = content.replace(/TensorFlow/g, '<span class="text-green-intensive">TensorFlow</span>');
            content = content.replace(/Neural Network/g, '<span class="text-green-intensive">Neural Network</span>');
            content = content.replace(/Deep Learning/g, '<span class="text-green-intensive">Deep Learning</span>');
            content = content.replace(/NLP/g, '<span class="text-green-intensive">NLP</span>');
            content = content.replace(/PyTorch/g, '<span class="text-green-intensive">PyTorch</span>');
            content = content.replace(/AWS/g, '<span class="text-green-intensive">AWS</span>');
            desc.innerHTML = content;
        });
        
        // Apply green text to all elements
        const allTextElements = document.querySelectorAll('p, li, span:not([class*="text-"]), h4, h5, h6, .duration, .company, .location');
        allTextElements.forEach(element => {
            if (!element.style.color && !element.classList.length) {
                element.style.color = '#10b981';
            }
        });
    };
    
    // Apply colors when DOM is ready
    applyIntensiveColors();
});

// Advanced Canvas Particle System
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('advanced-particle-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const colors = [
        'rgba(99, 102, 241, 0.8)',   // blue
        'rgba(139, 92, 246, 0.8)',   // purple  
        'rgba(6, 182, 212, 0.8)',    // cyan
        'rgba(34, 197, 94, 0.8)',    // green
        'rgba(245, 158, 11, 0.8)',   // orange
        'rgba(239, 68, 68, 0.8)',    // red
        'rgba(16, 185, 129, 0.8)',   // emerald
        'rgba(59, 130, 246, 0.8)'    // sky blue
    ];
    
    // Create particles
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.6 + 0.2,
            color: colors[Math.floor(Math.random() * colors.length)],
            pulsePhase: Math.random() * Math.PI * 2
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((particle, index) => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;
            
            // Update pulse phase
            particle.pulsePhase += 0.02;
            const pulseFactor = Math.sin(particle.pulsePhase) * 0.5 + 0.5;
            
            // Draw particle with pulsing effect
            ctx.globalAlpha = particle.opacity * pulseFactor;
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size * (1 + pulseFactor * 0.5), 0, Math.PI * 2);
            ctx.fill();
            
            // Draw connections to nearby particles
            particles.forEach((otherParticle, otherIndex) => {
                if (index !== otherIndex) {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 150) {
                        ctx.globalAlpha = (150 - distance) / 150 * 0.25;
                        ctx.strokeStyle = particle.color;
                        ctx.lineWidth = 1.2;
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.stroke();
                    }
                }
            });
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    // Add mouse interaction
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        particles.forEach(particle => {
            const dx = mouseX - particle.x;
            const dy = mouseY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                const force = (100 - distance) / 100;
                particle.vx += (dx / distance) * force * 0.02;
                particle.vy += (dy / distance) * force * 0.02;
                
                // Limit velocity
                const maxVel = 3;
                const vel = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
                if (vel > maxVel) {
                    particle.vx = (particle.vx / vel) * maxVel;
                    particle.vy = (particle.vy / vel) * maxVel;
                }
            }
        });
    });

    // Staggered card entrance animation
    const staggeredObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) rotateX(0deg)';
                    entry.target.classList.add('animate-in');
                }, index * 150);
            }
        });
    }, { threshold: 0.1 });

    // Apply staggered animation to internship cards
    document.querySelectorAll('.internship-card-3d').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(80px) rotateX(15deg)';
        card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        staggeredObserver.observe(card);
    });
});
