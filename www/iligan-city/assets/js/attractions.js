// Attractions page functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const attractions = document.querySelectorAll('.attraction-showcase, .attraction-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active filter button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter attractions
            attractions.forEach(attraction => {
                if (filter === 'all' || attraction.classList.contains(filter)) {
                    attraction.classList.remove('hidden');
                } else {
                    attraction.classList.add('hidden');
                }
            });
        });
    });
    
    // Smooth scroll to attraction sections
    const attractionLinks = document.querySelectorAll('a[href*="#"]');
    attractionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.includes('#')) {
                const targetId = href.split('#')[1];
                const target = document.getElementById(targetId);
                
                if (target) {
                    e.preventDefault();
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = target.offsetTop - navHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Rating system for attractions
    function createRatingStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - Math.ceil(rating);
        
        let starsHTML = '';
        
        // Full stars
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fas fa-star"></i>';
        }
        
        // Half star
        if (hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        }
        
        // Empty stars
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="far fa-star"></i>';
        }
        
        return starsHTML;
    }
    
    // Add interactive rating displays
    const ratingElements = document.querySelectorAll('.meta-item:has(.fa-star)');
    ratingElements.forEach(element => {
        const ratingText = element.textContent;
        const rating = parseFloat(ratingText.split('/')[0]);
        
        if (!isNaN(rating)) {
            const starsContainer = document.createElement('span');
            starsContainer.className = 'rating-stars';
            starsContainer.innerHTML = createRatingStars(rating);
            
            const textSpan = document.createElement('span');
            textSpan.textContent = ratingText;
            textSpan.className = 'rating-text';
            
            element.innerHTML = '';
            element.appendChild(starsContainer);
            element.appendChild(textSpan);
        }
    });
    
    // Image gallery lightbox functionality
    function createLightbox() {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            cursor: pointer;
        `;
        
        const img = document.createElement('img');
        img.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
        `;
        
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '<i class="fas fa-times"></i>';
        closeBtn.style.cssText = `
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: none;
            padding: 15px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 20px;
            backdrop-filter: blur(10px);
        `;
        
        lightbox.appendChild(img);
        lightbox.appendChild(closeBtn);
        document.body.appendChild(lightbox);
        
        // Close lightbox events
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
        
        closeBtn.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
        
        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.style.display === 'flex') {
                lightbox.style.display = 'none';
            }
        });
        
        return { lightbox, img };
    }
    
    // Initialize lightbox
    const { lightbox, lightboxImg } = createLightbox();
    
    // Weather widget for attractions page
    function createWeatherWidget() {
        const weatherWidget = document.createElement('div');
        weatherWidget.className = 'weather-widget';
        weatherWidget.style.cssText = `
            position: fixed;
            top: 120px;
            right: 20px;
            background: rgba(26, 54, 93, 0.95);
            color: white;
            padding: 20px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            min-width: 200px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        weatherWidget.innerHTML = `
            <div class="weather-header">
                <i class="fas fa-cloud-sun"></i>
                <span>Current Weather</span>
            </div>
            <div class="weather-temp">28°C</div>
            <div class="weather-desc">Perfect for waterfall visits!</div>
            <div class="weather-details">
                <div><i class="fas fa-tint"></i> Humidity: 75%</div>
                <div><i class="fas fa-wind"></i> Wind: 12 km/h</div>
            </div>
        `;
        
        document.body.appendChild(weatherWidget);
        
        // Show weather widget after page load
        setTimeout(() => {
            weatherWidget.style.transform = 'translateX(0)';
        }, 1000);
        
        // Hide on scroll down, show on scroll up
        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            if (window.scrollY > lastScrollY && window.scrollY > 200) {
                weatherWidget.style.transform = 'translateX(100%)';
            } else if (window.scrollY < lastScrollY) {
                weatherWidget.style.transform = 'translateX(0)';
            }
            lastScrollY = window.scrollY;
        });
    }
    
    // Create weather widget
    createWeatherWidget();
    
    // Attraction distance calculator (mock functionality)
    function calculateDistance() {
        const distanceElements = document.querySelectorAll('.meta-item:has(.fa-map-marker-alt)');
        
        distanceElements.forEach(element => {
            const button = document.createElement('button');
            button.textContent = 'Get Directions';
            button.className = 'directions-btn';
            button.style.cssText = `
                background: #64b5f6;
                color: white;
                border: none;
                padding: 5px 10px;
                border-radius: 15px;
                font-size: 12px;
                margin-left: 10px;
                cursor: pointer;
            `;
            
            button.addEventListener('click', function() {
                // In a real application, this would integrate with Google Maps or similar
                alert('Directions feature would open in your preferred maps app!');
            });
            
            element.appendChild(button);
        });
    }
    
    // Initialize distance calculator
    calculateDistance();
    
    // Attraction booking system (mock)
    function createBookingButtons() {
        const showcases = document.querySelectorAll('.attraction-showcase');
        
        showcases.forEach(showcase => {
            const bookingBtn = document.createElement('button');
            bookingBtn.innerHTML = '<i class="fas fa-calendar-plus"></i> Book Tour';
            bookingBtn.className = 'btn btn-primary booking-btn';
            bookingBtn.style.marginTop = '20px';
            
            bookingBtn.addEventListener('click', function() {
                showBookingModal(showcase.id);
            });
            
            const infoSection = showcase.querySelector('.showcase-info');
            if (infoSection) {
                infoSection.appendChild(bookingBtn);
            }
        });
    }
    
    // Booking modal
    function showBookingModal(attractionId) {
        const modal = document.createElement('div');
        modal.className = 'booking-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        `;
        
        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            background: white;
            padding: 30px;
            border-radius: 15px;
            max-width: 500px;
            width: 90%;
            max-height: 90%;
            overflow-y: auto;
        `;
        
        modalContent.innerHTML = `
            <div class="modal-header">
                <h3>Book Your Visit</h3>
                <button class="close-modal" style="float: right; background: none; border: none; font-size: 24px; cursor: pointer;">&times;</button>
            </div>
            <form class="booking-form">
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" required style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ddd; border-radius: 5px;">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" required style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ddd; border-radius: 5px;">
                </div>
                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="tel" required style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ddd; border-radius: 5px;">
                </div>
                <div class="form-group">
                    <label>Preferred Date</label>
                    <input type="date" required style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ddd; border-radius: 5px;">
                </div>
                <div class="form-group">
                    <label>Number of Guests</label>
                    <select required style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ddd; border-radius: 5px;">
                        <option value="">Select number of guests</option>
                        <option value="1">1 Guest</option>
                        <option value="2-4">2-4 Guests</option>
                        <option value="5-10">5-10 Guests</option>
                        <option value="10+">More than 10 Guests</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Special Requests</label>
                    <textarea rows="3" placeholder="Any special requirements or requests..." style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ddd; border-radius: 5px;"></textarea>
                </div>
                <div class="form-actions" style="margin-top: 20px;">
                    <button type="submit" class="btn btn-primary" style="width: 100%; padding: 12px;">Submit Booking Request</button>
                </div>
            </form>
        `;
        
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        
        // Close modal events
        const closeBtn = modalContent.querySelector('.close-modal');
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
        
        // Form submission
        const form = modalContent.querySelector('.booking-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Booking request submitted! We will contact you within 24 hours to confirm your visit.');
            document.body.removeChild(modal);
        });
    }
    
    // Initialize booking system
    createBookingButtons();
    
    // Progressive image loading
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('.image-placeholder').forEach(img => {
        imageObserver.observe(img);
    });
});

// Add some CSS for the rating stars
const style = document.createElement('style');
style.textContent = `
    .rating-stars {
        color: #ffc107;
        margin-right: 8px;
    }
    
    .rating-stars i {
        margin-right: 2px;
    }
    
    .directions-btn:hover {
        background: #42a5f5 !important;
    }
    
    .weather-widget {
        font-size: 14px;
    }
    
    .weather-header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 10px;
        font-weight: bold;
    }
    
    .weather-temp {
        font-size: 24px;
        font-weight: bold;
        margin: 10px 0;
    }
    
    .weather-desc {
        color: #64b5f6;
        margin-bottom: 10px;
    }
    
    .weather-details div {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 5px 0;
        font-size: 12px;
    }
    
    .image-placeholder {
        opacity: 0.8;
        transition: opacity 0.3s ease;
    }
    
    .image-placeholder.loaded {
        opacity: 1;
    }
`;

document.head.appendChild(style);