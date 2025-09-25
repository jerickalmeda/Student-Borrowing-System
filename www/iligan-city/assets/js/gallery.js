// Gallery Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeGalleryFilter();
    initializeGalleryItemsAnimation();
    initializeCollectionViews();
    initializeVirtualTours();
    initializePhotoContest();
    initializeLightbox();
});

// Gallery Filter Functionality
function initializeGalleryFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filterValue = this.dataset.filter;
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter gallery items
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.classList.remove('hide');
                    setTimeout(() => {
                        item.style.display = 'block';
                    }, 50);
                } else {
                    item.classList.add('hide');
                    setTimeout(() => {
                        if (item.classList.contains('hide')) {
                            item.style.display = 'none';
                        }
                    }, 500);
                }
            });

            // Update gallery grid animation
            updateGalleryLayout();
        });
    });
}

// Gallery Items Animation
function initializeGalleryItemsAnimation() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Add hover effects
    galleryItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });

        item.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });

        // Add staggered entrance animation
        setTimeout(() => {
            item.classList.add('animate-in');
        }, index * 100);
    });
}

// Update Gallery Layout
function updateGalleryLayout() {
    const galleryGrid = document.getElementById('galleryGrid');
    const visibleItems = galleryGrid.querySelectorAll('.gallery-item:not(.hide)');
    
    visibleItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('fade-in-up');
    });
}

// Collection Views
function initializeCollectionViews() {
    const viewCollectionBtns = document.querySelectorAll('.view-collection');
    
    viewCollectionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const collection = this.dataset.collection;
            const filterBtn = document.querySelector(`.filter-btn[data-filter="${collection}"]`);
            
            if (filterBtn) {
                // Scroll to gallery section
                document.querySelector('.photo-gallery').scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Apply filter after scroll
                setTimeout(() => {
                    filterBtn.click();
                }, 800);
            }
        });
    });
}

// Virtual Tours
function initializeVirtualTours() {
    const startTourBtns = document.querySelectorAll('.start-tour');
    
    startTourBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tourType = this.dataset.tour;
            startVirtualTour(tourType);
        });
    });
}

function startVirtualTour(tourType) {
    // Create modal for virtual tour
    const modal = createTourModal(tourType);
    document.body.appendChild(modal);
    
    // Animate modal entrance
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function createTourModal(tourType) {
    const modal = document.createElement('div');
    modal.className = 'tour-modal';
    
    const tourData = {
        'maria-cristina': {
            title: '360° Maria Cristina Falls',
            description: 'Experience the majestic twin falls in stunning 360-degree view.',
            iframe: 'https://example.com/360-maria-cristina'
        },
        'downtown': {
            title: 'Downtown Walking Tour',
            description: 'Take a virtual stroll through the heart of Iligan City.',
            iframe: 'https://example.com/downtown-tour'
        },
        'festival': {
            title: 'Festival Highlights',
            description: 'Immerse yourself in the vibrant Diyandi Festival celebration.',
            iframe: 'https://example.com/festival-tour'
        }
    };

    const tour = tourData[tourType];
    
    modal.innerHTML = `
        <div class="tour-modal-content">
            <div class="tour-modal-header">
                <h3>${tour.title}</h3>
                <button class="close-tour">&times;</button>
            </div>
            <div class="tour-modal-body">
                <div class="tour-placeholder">
                    <i class="fas fa-vr-cardboard fa-5x"></i>
                    <h4>Virtual Tour Coming Soon</h4>
                    <p>${tour.description}</p>
                    <div class="tour-controls">
                        <button class="btn btn-primary">
                            <i class="fas fa-play"></i> Start Experience
                        </button>
                        <button class="btn btn-secondary">
                            <i class="fas fa-expand"></i> Fullscreen
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add close functionality
    modal.querySelector('.close-tour').addEventListener('click', function() {
        modal.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    });

    // Close on backdrop click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.querySelector('.close-tour').click();
        }
    });

    return modal;
}

// Photo Contest
function initializePhotoContest() {
    const contestBtns = document.querySelectorAll('.contest-actions .btn');
    
    contestBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (btn.textContent.includes('Submit')) {
                openPhotoSubmissionModal();
            } else if (btn.textContent.includes('Rules')) {
                openContestRulesModal();
            }
        });
    });
}

function openPhotoSubmissionModal() {
    const modal = document.createElement('div');
    modal.className = 'photo-submission-modal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-camera"></i> Submit Your Photo</h3>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <form class="submission-form">
                    <div class="form-group">
                        <label for="photo-upload">Select Photo</label>
                        <div class="file-upload-area">
                            <input type="file" id="photo-upload" accept="image/*" required>
                            <div class="upload-placeholder">
                                <i class="fas fa-cloud-upload-alt fa-3x"></i>
                                <p>Drag & drop your photo here or click to browse</p>
                                <small>Maximum file size: 10MB</small>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="photo-title">Photo Title</label>
                            <input type="text" id="photo-title" required>
                        </div>
                        <div class="form-group">
                            <label for="photo-location">Location</label>
                            <input type="text" id="photo-location" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="photo-description">Description</label>
                        <textarea id="photo-description" rows="4" required></textarea>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="photographer-name">Your Name</label>
                            <input type="text" id="photographer-name" required>
                        </div>
                        <div class="form-group">
                            <label for="photographer-email">Email</label>
                            <input type="email" id="photographer-email" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="checkbox-label">
                            <input type="checkbox" required>
                            I agree to the contest terms and conditions
                        </label>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn btn-secondary cancel-submission">Cancel</button>
                        <button type="submit" class="btn btn-primary">Submit Photo</button>
                    </div>
                </form>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);

    // Add event listeners
    addModalEventListeners(modal);
}

function openContestRulesModal() {
    const modal = document.createElement('div');
    modal.className = 'contest-rules-modal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-trophy"></i> Photo Contest Rules</h3>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="rules-content">
                    <div class="rule-section">
                        <h4><i class="fas fa-camera"></i> Photo Requirements</h4>
                        <ul>
                            <li>Original photos taken within Iligan City limits</li>
                            <li>Minimum resolution: 1920x1080 pixels</li>
                            <li>Maximum file size: 10MB</li>
                            <li>Accepted formats: JPG, PNG, TIFF</li>
                        </ul>
                    </div>
                    <div class="rule-section">
                        <h4><i class="fas fa-user"></i> Eligibility</h4>
                        <ul>
                            <li>Open to all ages and skill levels</li>
                            <li>Maximum 3 submissions per person</li>
                            <li>Must provide photographer information</li>
                        </ul>
                    </div>
                    <div class="rule-section">
                        <h4><i class="fas fa-award"></i> Judging Criteria</h4>
                        <ul>
                            <li>Technical quality (30%)</li>
                            <li>Composition and creativity (40%)</li>
                            <li>Representation of Iligan City (30%)</li>
                        </ul>
                    </div>
                    <div class="rule-section">
                        <h4><i class="fas fa-gift"></i> Prizes</h4>
                        <ul>
                            <li>1st Place: ₱10,000 + Certificate</li>
                            <li>2nd Place: ₱5,000 + Certificate</li>
                            <li>3rd Place: ₱3,000 + Certificate</li>
                            <li>People's Choice: ₱2,000 + Certificate</li>
                        </ul>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="btn btn-primary close-rules">I Understand</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);

    addModalEventListeners(modal);
}

function addModalEventListeners(modal) {
    // Close button
    const closeBtn = modal.querySelector('.close-modal, .close-rules, .cancel-submission');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            closeModal(modal);
        });
    }

    // Backdrop click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal(modal);
        }
    });

    // Form submission
    const form = modal.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handlePhotoSubmission(form);
        });
    }
}

function closeModal(modal) {
    modal.classList.remove('show');
    setTimeout(() => {
        if (document.body.contains(modal)) {
            document.body.removeChild(modal);
        }
    }, 300);
}

function handlePhotoSubmission(form) {
    const formData = new FormData(form);
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;

    // Simulate submission (replace with actual API call)
    setTimeout(() => {
        showSubmissionSuccess();
        closeModal(form.closest('.photo-submission-modal'));
    }, 2000);
}

function showSubmissionSuccess() {
    const toast = document.createElement('div');
    toast.className = 'toast success';
    toast.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>Photo submitted successfully! We'll review it soon.</span>
    `;

    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// Lightbox functionality
function initializeLightbox() {
    const viewBtns = document.querySelectorAll('.view-btn');
    
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const galleryItem = this.closest('.gallery-item');
            const title = galleryItem.dataset.title;
            const description = galleryItem.dataset.description;
            
            openLightbox(title, description);
        });
    });
}

function openLightbox(title, description) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close">&times;</button>
            <div class="lightbox-image">
                <i class="fas fa-image fa-5x"></i>
                <div class="image-placeholder">
                    <h3>${title}</h3>
                    <p>${description}</p>
                </div>
            </div>
            <div class="lightbox-controls">
                <button class="lightbox-btn"><i class="fas fa-chevron-left"></i></button>
                <button class="lightbox-btn"><i class="fas fa-chevron-right"></i></button>
            </div>
        </div>
    `;

    document.body.appendChild(lightbox);
    setTimeout(() => lightbox.classList.add('show'), 10);

    // Close lightbox
    lightbox.querySelector('.lightbox-close').addEventListener('click', function() {
        lightbox.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(lightbox)) {
                document.body.removeChild(lightbox);
            }
        }, 300);
    });

    // Close on backdrop click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.querySelector('.lightbox-close').click();
        }
    });
}

// CSS for modals and lightbox (injected dynamically)
function injectModalStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .tour-modal, .photo-submission-modal, .contest-rules-modal, .lightbox {
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

        .tour-modal.show, .photo-submission-modal.show, 
        .contest-rules-modal.show, .lightbox.show {
            opacity: 1;
            visibility: visible;
        }

        .tour-modal-content, .modal-content, .lightbox-content {
            background: white;
            border-radius: 15px;
            max-width: 90vw;
            max-height: 90vh;
            overflow-y: auto;
            transform: scale(0.8);
            transition: transform 0.3s ease;
        }

        .tour-modal.show .tour-modal-content,
        .photo-submission-modal.show .modal-content,
        .contest-rules-modal.show .modal-content,
        .lightbox.show .lightbox-content {
            transform: scale(1);
        }

        .toast {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
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

        .animate-in {
            animation: fadeInUp 0.6s ease forwards;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
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
injectModalStyles();