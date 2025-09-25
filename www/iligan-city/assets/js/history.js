// History Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeTimelineAnimations();
    initializeTimelineNavigation();
    initializeLandmarkCards();
    initializeIndustrialAnimations();
    initializeScrollEffects();
});

// Timeline Animations
function initializeTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Intersection Observer for timeline items
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Add staggered animation delay
                const index = Array.from(timelineItems).indexOf(entry.target);
                entry.target.style.animationDelay = `${index * 0.2}s`;
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
}

// Timeline Navigation
function initializeTimelineNavigation() {
    const navItems = document.querySelectorAll('.timeline-nav-item');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Create navigation if it doesn't exist
    if (navItems.length === 0) {
        createTimelineNavigation();
    }

    // Handle navigation clicks
    navItems.forEach(navItem => {
        navItem.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Update active nav item
                navItems.forEach(item => item.classList.remove('active'));
                this.classList.add('active');
                
                // Smooth scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    });

    // Update active nav item on scroll
    window.addEventListener('scroll', function() {
        let activeSection = null;
        
        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                activeSection = item.id;
            }
        });

        if (activeSection) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${activeSection}`) {
                    item.classList.add('active');
                }
            });
        }
    });
}

function createTimelineNavigation() {
    const timelineSection = document.querySelector('.timeline-section');
    if (!timelineSection) return;

    const nav = document.createElement('div');
    nav.className = 'timeline-nav';
    
    nav.innerHTML = `
        <div class="container">
            <div class="timeline-nav-items">
                <a href="#prehistoric" class="timeline-nav-item">Prehistoric</a>
                <a href="#spanish-era" class="timeline-nav-item">Spanish Era</a>
                <a href="#american-period" class="timeline-nav-item">American Period</a>
                <a href="#commonwealth" class="timeline-nav-item">Commonwealth</a>
                <a href="#independence" class="timeline-nav-item">Independence</a>
                <a href="#modern-era" class="timeline-nav-item">Modern Era</a>
            </div>
        </div>
    `;

    timelineSection.insertBefore(nav, timelineSection.firstChild);
}

// Landmark Cards Interactions
function initializeLandmarkCards() {
    const landmarkCards = document.querySelectorAll('.landmark-card');
    
    landmarkCards.forEach(card => {
        // Add hover effect data
        card.addEventListener('mouseenter', function() {
            this.setAttribute('data-hover', 'true');
        });

        card.addEventListener('mouseleave', function() {
            this.removeAttribute('data-hover');
        });

        // Add click interaction for more details
        card.addEventListener('click', function() {
            const landmarkName = this.querySelector('.landmark-name').textContent;
            const landmarkDescription = this.querySelector('.landmark-description').textContent;
            
            showLandmarkModal(landmarkName, landmarkDescription, this);
        });
    });
}

function showLandmarkModal(name, description, cardElement) {
    const modal = document.createElement('div');
    modal.className = 'landmark-modal';
    
    modal.innerHTML = `
        <div class="landmark-modal-content">
            <div class="landmark-modal-header">
                <h3><i class="fas fa-landmark"></i> ${name}</h3>
                <button class="close-landmark-modal">&times;</button>
            </div>
            <div class="landmark-modal-body">
                <div class="landmark-details">
                    <p>${description}</p>
                    <div class="landmark-gallery">
                        <div class="gallery-placeholder">
                            <i class="fas fa-images fa-3x"></i>
                            <p>Photo gallery coming soon</p>
                        </div>
                    </div>
                    <div class="landmark-actions">
                        <button class="btn btn-primary visit-landmark">
                            <i class="fas fa-map-marker-alt"></i> Get Directions
                        </button>
                        <button class="btn btn-secondary share-landmark">
                            <i class="fas fa-share"></i> Share
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);

    // Close modal functionality
    const closeBtn = modal.querySelector('.close-landmark-modal');
    closeBtn.addEventListener('click', () => closeLandmarkModal(modal));
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeLandmarkModal(modal);
        }
    });

    // Action buttons
    modal.querySelector('.visit-landmark').addEventListener('click', function() {
        showDirections(name);
    });

    modal.querySelector('.share-landmark').addEventListener('click', function() {
        shareContent(name, description);
    });
}

function closeLandmarkModal(modal) {
    modal.classList.remove('show');
    setTimeout(() => {
        if (document.body.contains(modal)) {
            document.body.removeChild(modal);
        }
    }, 300);
}

function showDirections(landmarkName) {
    const toast = createToast(`Opening directions to ${landmarkName}...`, 'info');
    document.body.appendChild(toast);
    
    // Simulate opening directions (replace with actual maps integration)
    setTimeout(() => {
        removeToast(toast);
    }, 3000);
}

function shareContent(title, description) {
    if (navigator.share) {
        navigator.share({
            title: title,
            text: description,
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const shareText = `${title}\n${description}\n${window.location.href}`;
        navigator.clipboard.writeText(shareText).then(() => {
            const toast = createToast('Content copied to clipboard!', 'success');
            document.body.appendChild(toast);
            setTimeout(() => removeToast(toast), 3000);
        });
    }
}

// Industrial Animations
function initializeIndustrialAnimations() {
    const industrialSection = document.querySelector('.industrial-section');
    const industrialIcon = document.querySelector('.industrial-icon');
    
    if (!industrialSection || !industrialIcon) return;

    const industrialObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateIndustrialStats();
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.5
    });

    industrialObserver.observe(industrialSection);
}

function animateIndustrialStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        let currentValue = 0;
        const increment = finalValue / 50;
        
        const animation = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                currentValue = finalValue;
                clearInterval(animation);
            }
            stat.textContent = Math.floor(currentValue);
        }, 50);
    });
}

// Scroll Effects
function initializeScrollEffects() {
    // Parallax effect for timeline line
    const timelineLine = document.querySelector('.timeline-line');
    
    if (timelineLine) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            
            timelineLine.style.transform = `translateX(-50%) translateY(${parallax}px)`;
        });
    }

    // Fade in animation for figures
    const figureCards = document.querySelectorAll('.figure-card');
    const figuresObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.3
    });

    figureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        figuresObserver.observe(card);
    });
}

// Utility Functions
function createToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = type === 'success' ? 'check-circle' : 
                 type === 'error' ? 'exclamation-circle' : 'info-circle';
    
    toast.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
    `;

    setTimeout(() => toast.classList.add('show'), 10);
    return toast;
}

function removeToast(toast) {
    toast.classList.remove('show');
    setTimeout(() => {
        if (document.body.contains(toast)) {
            document.body.removeChild(toast);
        }
    }, 300);
}

// Modal Styles (injected dynamically)
function injectHistoryModalStyles() {
    if (document.getElementById('history-modal-styles')) return;

    const style = document.createElement('style');
    style.id = 'history-modal-styles';
    style.textContent = `
        .landmark-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }

        .landmark-modal.show {
            opacity: 1;
            visibility: visible;
        }

        .landmark-modal-content {
            background: white;
            border-radius: 15px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            transform: scale(0.8);
            transition: transform 0.3s ease;
        }

        .landmark-modal.show .landmark-modal-content {
            transform: scale(1);
        }

        .landmark-modal-header {
            padding: 25px;
            border-bottom: 1px solid #e9ecef;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .landmark-modal-header h3 {
            margin: 0;
            color: #2c3e50;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .close-landmark-modal {
            background: none;
            border: none;
            font-size: 2rem;
            color: #6c757d;
            cursor: pointer;
            padding: 0;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease;
        }

        .close-landmark-modal:hover {
            background: #f8f9fa;
            color: #495057;
        }

        .landmark-modal-body {
            padding: 25px;
        }

        .landmark-gallery {
            margin: 20px 0;
        }

        .gallery-placeholder {
            background: #f8f9fa;
            padding: 40px;
            border-radius: 10px;
            text-align: center;
            color: #6c757d;
        }

        .gallery-placeholder i {
            margin-bottom: 15px;
        }

        .landmark-actions {
            display: flex;
            gap: 15px;
            margin-top: 25px;
        }

        .landmark-actions .btn {
            flex: 1;
        }

        .toast {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 1001;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        }

        .toast.show {
            transform: translateX(0);
        }

        .toast.success { background: #28a745; }
        .toast.error { background: #dc3545; }
        .toast.info { background: #007bff; }

        .animate-in {
            animation: slideInUp 0.8s ease forwards;
        }

        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    
    document.head.appendChild(style);
}

// Initialize modal styles
injectHistoryModalStyles();