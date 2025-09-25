// Contact Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeContactForm();
    initializeFAQSection();
    initializeMapInteractions();
    initializeFormValidation();
    initializeSocialMediaLinks();
    initializeEmergencyContacts();
});

// Contact Form Functionality
function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this);
        });

        // Add real-time validation
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });

            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
}

// Form Validation
function initializeFormValidation() {
    // Email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Phone validation pattern (Philippine format)
    const phonePattern = /^(\+63|0)?[0-9]{10}$/;
    
    window.validateField = function(field) {
        const value = field.value.trim();
        const fieldType = field.type;
        const isRequired = field.hasAttribute('required');
        
        clearFieldError(field);
        
        // Required field validation
        if (isRequired && !value) {
            showFieldError(field, 'This field is required');
            return false;
        }
        
        // Email validation
        if (fieldType === 'email' && value && !emailPattern.test(value)) {
            showFieldError(field, 'Please enter a valid email address');
            return false;
        }
        
        // Phone validation
        if (field.name === 'phone' && value && !phonePattern.test(value)) {
            showFieldError(field, 'Please enter a valid Philippine phone number');
            return false;
        }
        
        // Message length validation
        if (field.name === 'message' && value.length < 10) {
            showFieldError(field, 'Message must be at least 10 characters long');
            return false;
        }
        
        return true;
    };
    
    window.showFieldError = function(field, message) {
        field.classList.add('error');
        
        // Remove existing error message
        const existingError = field.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Add new error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    };
    
    window.clearFieldError = function(field) {
        field.classList.remove('error');
        const errorMessage = field.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    };
}

// Handle Form Submission
function handleFormSubmission(form) {
    const formData = new FormData(form);
    const submitBtn = form.querySelector('.submit-btn');
    
    // Validate all fields
    const fields = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    fields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    if (!isValid) {
        showToast('Please correct the errors in the form', 'error');
        return;
    }
    
    // Show loading state
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        showFormSuccessMessage();
        form.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

function showFormSuccessMessage() {
    showToast('Thank you! Your message has been sent successfully. We\'ll get back to you soon.', 'success');
    
    // Show success modal
    const modal = createSuccessModal();
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 100);
}

function createSuccessModal() {
    const modal = document.createElement('div');
    modal.className = 'success-modal';
    
    modal.innerHTML = `
        <div class="success-modal-content">
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for contacting us. We have received your message and will respond within 24-48 hours.</p>
            <div class="success-actions">
                <button class="btn btn-primary close-success">Continue Browsing</button>
                <button class="btn btn-secondary send-another">Send Another Message</button>
            </div>
        </div>
    `;

    // Add event listeners
    modal.querySelector('.close-success').addEventListener('click', function() {
        closeModal(modal);
    });

    modal.querySelector('.send-another').addEventListener('click', function() {
        closeModal(modal);
        document.querySelector('.contact-form').scrollIntoView({ behavior: 'smooth' });
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal(modal);
        }
    });

    return modal;
}

// FAQ Section
function initializeFAQSection() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Close all other FAQ items
            faqQuestions.forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('show');
            });
            
            // Toggle current item
            if (!isActive) {
                this.classList.add('active');
                answer.classList.add('show');
            }
        });
    });
}

// Map Interactions
function initializeMapInteractions() {
    const mapPlaceholder = document.querySelector('.map-placeholder');
    
    if (mapPlaceholder) {
        mapPlaceholder.addEventListener('click', function() {
            openMapModal();
        });
        
        // Add hover effect
        mapPlaceholder.style.cursor = 'pointer';
        mapPlaceholder.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        mapPlaceholder.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
}

function openMapModal() {
    const modal = document.createElement('div');
    modal.className = 'map-modal';
    
    modal.innerHTML = `
        <div class="map-modal-content">
            <div class="map-modal-header">
                <h3><i class="fas fa-map-marker-alt"></i> Iligan City Location</h3>
                <button class="close-map-modal">&times;</button>
            </div>
            <div class="map-modal-body">
                <div class="interactive-map">
                    <div class="map-embed-placeholder">
                        <i class="fas fa-map fa-4x"></i>
                        <h4>Interactive Map</h4>
                        <p>Click to open in Google Maps</p>
                        <button class="btn btn-primary open-google-maps">
                            <i class="fab fa-google"></i> Open Google Maps
                        </button>
                    </div>
                </div>
                <div class="location-details">
                    <div class="detail-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <strong>Address:</strong>
                            <span>Iligan City, Lanao del Norte, Philippines</span>
                        </div>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-clock"></i>
                        <div>
                            <strong>Office Hours:</strong>
                            <span>Monday - Friday: 8:00 AM - 5:00 PM</span>
                        </div>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-phone"></i>
                        <div>
                            <strong>Contact:</strong>
                            <span>+63 (063) 221-xxxx</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);

    // Event listeners
    modal.querySelector('.close-map-modal').addEventListener('click', function() {
        closeModal(modal);
    });

    modal.querySelector('.open-google-maps').addEventListener('click', function() {
        window.open('https://maps.google.com/?q=Iligan+City,+Lanao+del+Norte,+Philippines', '_blank');
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
}

// Social Media Links
function initializeSocialMediaLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const platform = this.querySelector('i').classList.contains('fa-facebook') ? 'Facebook' :
                           this.querySelector('i').classList.contains('fa-twitter') ? 'Twitter' :
                           this.querySelector('i').classList.contains('fa-instagram') ? 'Instagram' :
                           this.querySelector('i').classList.contains('fa-youtube') ? 'YouTube' :
                           'Social Media';
            
            showToast(`Opening ${platform} page...`, 'info');
            
            // Simulate opening social media (replace with actual links)
            setTimeout(() => {
                window.open('#', '_blank');
            }, 1000);
        });
    });
}

// Emergency Contacts
function initializeEmergencyContacts() {
    const emergencyCards = document.querySelectorAll('.emergency-card');
    
    emergencyCards.forEach(card => {
        card.addEventListener('click', function() {
            const number = this.querySelector('.emergency-number').textContent;
            const service = this.querySelector('h4').textContent;
            
            if (confirm(`Call ${service} at ${number}?`)) {
                window.open(`tel:${number}`, '_self');
            }
        });
        
        // Add hover effect
        card.style.cursor = 'pointer';
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Utility Functions
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = type === 'success' ? 'check-circle' : 
                 type === 'error' ? 'exclamation-circle' : 'info-circle';
    
    toast.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
        <button class="toast-close">&times;</button>
    `;

    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);

    // Auto remove after 5 seconds
    setTimeout(() => removeToast(toast), 5000);

    // Manual close
    toast.querySelector('.toast-close').addEventListener('click', function() {
        removeToast(toast);
    });
}

function removeToast(toast) {
    if (document.body.contains(toast)) {
        toast.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
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

// Form Animation Effects
function initializeFormAnimations() {
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach((group, index) => {
        group.style.opacity = '0';
        group.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            group.style.transition = 'all 0.6s ease';
            group.style.opacity = '1';
            group.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Initialize form animations when the form comes into view
const contactFormSection = document.querySelector('.contact-form-section');
if (contactFormSection) {
    const formObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initializeFormAnimations();
                formObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    formObserver.observe(contactFormSection);
}

// Modal and Toast Styles (injected dynamically)
function injectContactModalStyles() {
    if (document.getElementById('contact-modal-styles')) return;

    const style = document.createElement('style');
    style.id = 'contact-modal-styles';
    style.textContent = `
        .success-modal, .map-modal {
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

        .success-modal.show, .map-modal.show {
            opacity: 1;
            visibility: visible;
        }

        .success-modal-content, .map-modal-content {
            background: white;
            border-radius: 15px;
            padding: 40px;
            text-align: center;
            max-width: 500px;
            width: 90%;
            transform: scale(0.8);
            transition: transform 0.3s ease;
        }

        .map-modal-content {
            max-width: 700px;
            padding: 0;
            text-align: left;
        }

        .success-modal.show .success-modal-content,
        .map-modal.show .map-modal-content {
            transform: scale(1);
        }

        .success-icon {
            font-size: 4rem;
            color: #28a745;
            margin-bottom: 20px;
        }

        .success-modal h3 {
            color: #2c3e50;
            margin-bottom: 15px;
            font-size: 1.8rem;
        }

        .success-modal p {
            color: #6c757d;
            line-height: 1.6;
            margin-bottom: 30px;
        }

        .success-actions {
            display: flex;
            gap: 15px;
            justify-content: center;
        }

        .map-modal-header {
            padding: 25px;
            border-bottom: 1px solid #e9ecef;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .map-modal-header h3 {
            margin: 0;
            color: #2c3e50;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .close-map-modal {
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

        .close-map-modal:hover {
            background: #f8f9fa;
            color: #495057;
        }

        .map-modal-body {
            padding: 25px;
        }

        .map-embed-placeholder {
            background: #f8f9fa;
            padding: 60px 30px;
            border-radius: 10px;
            text-align: center;
            color: #6c757d;
            margin-bottom: 25px;
        }

        .map-embed-placeholder i {
            margin-bottom: 20px;
        }

        .map-embed-placeholder h4 {
            margin-bottom: 10px;
            color: #495057;
        }

        .location-details {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
        }

        .detail-item {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 15px;
        }

        .detail-item:last-child {
            margin-bottom: 0;
        }

        .detail-item i {
            color: #007bff;
            width: 20px;
            text-align: center;
        }

        .detail-item strong {
            display: block;
            color: #2c3e50;
            margin-bottom: 2px;
        }

        .detail-item span {
            color: #6c757d;
            font-size: 0.9rem;
        }

        .error-message {
            color: #dc3545;
            font-size: 0.875rem;
            margin-top: 5px;
        }

        .form-group input.error,
        .form-group select.error,
        .form-group textarea.error {
            border-color: #dc3545;
            box-shadow: 0 0 0 3px rgba(220,53,69,0.1);
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
            max-width: 350px;
        }

        .toast.show {
            transform: translateX(0);
        }

        .toast.success { background: #28a745; }
        .toast.error { background: #dc3545; }
        .toast.info { background: #007bff; }

        .toast-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0;
            margin-left: auto;
            opacity: 0.8;
        }

        .toast-close:hover {
            opacity: 1;
        }

        @media (max-width: 768px) {
            .success-actions {
                flex-direction: column;
            }
            
            .success-modal-content,
            .map-modal-content {
                width: 95%;
                padding: 30px;
            }
            
            .toast {
                max-width: calc(100vw - 40px);
                right: 20px;
                left: 20px;
                transform: translateY(-100%);
            }
            
            .toast.show {
                transform: translateY(0);
            }
        }
    `;
    
    document.head.appendChild(style);
}

// Initialize modal styles
injectContactModalStyles();