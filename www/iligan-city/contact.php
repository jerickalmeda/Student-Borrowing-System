<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - Iligan City</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/contact.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <a href="index.php" class="nav-brand">
                    <i class="fas fa-water"></i>
                    Iligan City
                </a>
            </div>
            <div class="nav-menu">
                <a href="index.php" class="nav-link">Home</a>
                <a href="attractions.php" class="nav-link">Attractions</a>
                <a href="culture.php" class="nav-link">Culture</a>
                <a href="history.php" class="nav-link">History</a>
                <a href="gallery.php" class="nav-link">Gallery</a>
                <a href="contact.php" class="nav-link active">Contact</a>
            </div>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </nav>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1 class="page-title">Contact Us</h1>
            <p class="page-subtitle">Plan your visit, get information, or connect with us</p>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
        <div class="container">
            <div class="contact-grid">
                <!-- Contact Form -->
                <div class="contact-form-container">
                    <h2>Send Us a Message</h2>
                    <p>Have questions about visiting Iligan City? We're here to help!</p>
                    
                    <form class="contact-form" id="contactForm">
                        <div class="form-group">
                            <label for="name">Full Name *</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="email">Email Address *</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone">
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="subject">Subject *</label>
                            <select id="subject" name="subject" required>
                                <option value="">Select a topic</option>
                                <option value="tourism">Tourism Information</option>
                                <option value="attractions">Attractions & Activities</option>
                                <option value="accommodation">Accommodation</option>
                                <option value="transportation">Transportation</option>
                                <option value="events">Events & Festivals</option>
                                <option value="business">Business Inquiries</option>
                                <option value="media">Media & Press</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="message">Message *</label>
                            <textarea id="message" name="message" rows="6" placeholder="Tell us how we can help you..." required></textarea>
                        </div>
                        
                        <div class="form-group checkbox-group">
                            <label class="checkbox-label">
                                <input type="checkbox" id="newsletter" name="newsletter">
                                <span class="checkmark"></span>
                                Subscribe to our newsletter for updates and events
                            </label>
                        </div>
                        
                        <button type="submit" class="btn btn-primary submit-btn">
                            <i class="fas fa-paper-plane"></i>
                            Send Message
                        </button>
                    </form>
                </div>

                <!-- Contact Information -->
                <div class="contact-info-container">
                    <h2>Get in Touch</h2>
                    
                    <div class="contact-cards">
                        <div class="contact-card">
                            <div class="card-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="card-content">
                                <h3>Visit Us</h3>
                                <p>City Tourism Office<br>
                                Iligan City Hall<br>
                                Quezon Avenue Extension<br>
                                Iligan City, Lanao del Norte 9200</p>
                            </div>
                        </div>

                        <div class="contact-card">
                            <div class="card-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="card-content">
                                <h3>Call Us</h3>
                                <p>Tourism Hotline: +63 (063) 221-4689<br>
                                City Hall: +63 (063) 221-5423<br>
                                Emergency: 911</p>
                            </div>
                        </div>

                        <div class="contact-card">
                            <div class="card-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="card-content">
                                <h3>Email Us</h3>
                                <p>tourism@iligancity.gov.ph<br>
                                info@iligancity.gov.ph<br>
                                mayor@iligancity.gov.ph</p>
                            </div>
                        </div>

                        <div class="contact-card">
                            <div class="card-icon">
                                <i class="fas fa-clock"></i>
                            </div>
                            <div class="card-content">
                                <h3>Office Hours</h3>
                                <p>Monday - Friday: 8:00 AM - 5:00 PM<br>
                                Saturday: 8:00 AM - 12:00 PM<br>
                                Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    <!-- Social Media -->
                    <div class="social-section">
                        <h3>Follow Us</h3>
                        <div class="social-grid">
                            <a href="#" class="social-card facebook">
                                <i class="fab fa-facebook-f"></i>
                                <span>Facebook</span>
                            </a>
                            <a href="#" class="social-card twitter">
                                <i class="fab fa-twitter"></i>
                                <span>Twitter</span>
                            </a>
                            <a href="#" class="social-card instagram">
                                <i class="fab fa-instagram"></i>
                                <span>Instagram</span>
                            </a>
                            <a href="#" class="social-card youtube">
                                <i class="fab fa-youtube"></i>
                                <span>YouTube</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
        <div class="container">
            <h2 class="section-title">Find Us</h2>
            <div class="map-container">
                <div class="map-placeholder">
                    <i class="fas fa-map fa-4x"></i>
                    <h3>Interactive Map</h3>
                    <p>Iligan City, Lanao del Norte, Philippines</p>
                    <p>Coordinates: 8.2280° N, 124.2452° E</p>
                </div>
                <div class="map-info">
                    <h3>Transportation</h3>
                    <div class="transport-options">
                        <div class="transport-item">
                            <i class="fas fa-plane"></i>
                            <div>
                                <h4>By Air</h4>
                                <p>Laguindingan Airport (1.5 hours drive)<br>
                                Butuan Airport (2 hours drive)</p>
                            </div>
                        </div>
                        <div class="transport-item">
                            <i class="fas fa-bus"></i>
                            <div>
                                <h4>By Land</h4>
                                <p>Regular bus services from Cagayan de Oro<br>
                                Van services available</p>
                            </div>
                        </div>
                        <div class="transport-item">
                            <i class="fas fa-ship"></i>
                            <div>
                                <h4>By Sea</h4>
                                <p>Ferry services from Bohol and Cebu<br>
                                Cargo ships from Manila</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
        <div class="container">
            <h2 class="section-title">Frequently Asked Questions</h2>
            
            <div class="faq-container">
                <div class="faq-item">
                    <div class="faq-question">
                        <h3>What's the best time to visit Iligan City?</h3>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="faq-answer">
                        <p>The best time to visit is during the dry season (March to May) for outdoor activities, or during the rainy season (June to November) when the waterfalls are at their most spectacular. Avoid typhoon season (September to November).</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>How do I get to the waterfalls?</h3>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="faq-answer">
                        <p>Most waterfalls are accessible by tricycle or habal-habal from the city center. Maria Cristina Falls is about 15 minutes away, while Tinago Falls requires a short trek. We recommend booking guided tours for the best experience.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Are there entrance fees for attractions?</h3>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="faq-answer">
                        <p>Most waterfalls have minimal entrance fees (₱20-50 per person). Maria Cristina Falls viewing is free. Some private resorts near waterfalls may charge additional fees for amenities.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>What should I bring when visiting waterfalls?</h3>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="faq-answer">
                        <p>Bring comfortable hiking shoes, swimwear, waterproof bags, sunscreen, insect repellent, and extra clothes. Don't forget your camera and some snacks for longer treks.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Where can I stay in Iligan City?</h3>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="faq-answer">
                        <p>Iligan offers various accommodation options from budget inns to mid-range hotels. Popular choices include GT Hotel, Granddame Hotel, and several pension houses near the city center.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Is it safe for tourists?</h3>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="faq-answer">
                        <p>Iligan City is generally safe for tourists. Follow standard safety precautions, inform someone of your itinerary, and consider hiring local guides for remote waterfall visits. The local community is welcoming to visitors.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Emergency Contacts -->
    <section class="emergency-contacts">
        <div class="container">
            <h2 class="section-title">Emergency Contacts</h2>
            
            <div class="emergency-grid">
                <div class="emergency-card">
                    <i class="fas fa-ambulance"></i>
                    <h3>Medical Emergency</h3>
                    <p class="emergency-number">911</p>
                    <p>Iligan Medical Center<br>+63 (063) 221-2731</p>
                </div>

                <div class="emergency-card">
                    <i class="fas fa-fire"></i>
                    <h3>Fire Department</h3>
                    <p class="emergency-number">116</p>
                    <p>Iligan City Fire Station<br>+63 (063) 221-3456</p>
                </div>

                <div class="emergency-card">
                    <i class="fas fa-shield-alt"></i>
                    <h3>Police</h3>
                    <p class="emergency-number">117</p>
                    <p>Iligan City Police Station<br>+63 (063) 221-2334</p>
                </div>

                <div class="emergency-card">
                    <i class="fas fa-info-circle"></i>
                    <h3>Tourist Assistance</h3>
                    <p class="emergency-number">+63 (063) 221-4689</p>
                    <p>24/7 Tourism Hotline<br>Available in English & Filipino</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3><i class="fas fa-water"></i> Iligan City</h3>
                    <p>The City of Majestic Falls - Where nature meets industry in perfect harmony.</p>
                    <div class="social-links">
                        <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>

                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="index.php">Home</a></li>
                        <li><a href="attractions.php">Attractions</a></li>
                        <li><a href="culture.php">Culture</a></li>
                        <li><a href="history.php">History</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Contact Info</h4>
                    <div class="contact-info">
                        <p><i class="fas fa-phone"></i> +63 (063) 221-xxxx</p>
                        <p><i class="fas fa-envelope"></i> info@iligancity.gov.ph</p>
                        <p><i class="fas fa-map-marker-alt"></i> Iligan City, Lanao del Norte</p>
                    </div>
                </div>

                <div class="footer-section">
                    <h4>Visit Iligan</h4>
                    <p>Plan your trip to experience the natural wonders and warm hospitality of our beautiful city.</p>
                    <a href="contact.php" class="btn btn-outline">Plan Your Visit</a>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2025 Iligan City Tourism. All rights reserved. | Designed with <i class="fas fa-heart"></i> for Iligan</p>
            </div>
        </div>
    </footer>

    <script src="assets/js/script.js"></script>
    <script src="assets/js/contact.js"></script>
</body>
</html>