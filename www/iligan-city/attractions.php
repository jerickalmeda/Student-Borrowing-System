<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Attractions - Iligan City</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/attractions.css">
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
                <a href="attractions.php" class="nav-link active">Attractions</a>
                <a href="culture.php" class="nav-link">Culture</a>
                <a href="history.php" class="nav-link">History</a>
                <a href="gallery.php" class="nav-link">Gallery</a>
                <a href="contact.php" class="nav-link">Contact</a>
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
            <h1 class="page-title">Natural Attractions</h1>
            <p class="page-subtitle">Discover the breathtaking waterfalls and natural wonders of Iligan City</p>
        </div>
    </section>

    <!-- Attractions Filter -->
    <section class="attractions-filter">
        <div class="container">
            <div class="filter-tabs">
                <button class="filter-btn active" data-filter="all">All Attractions</button>
                <button class="filter-btn" data-filter="waterfalls">Waterfalls</button>
                <button class="filter-btn" data-filter="parks">Parks & Recreation</button>
                <button class="filter-btn" data-filter="historical">Historical Sites</button>
                <button class="filter-btn" data-filter="adventure">Adventure Sports</button>
            </div>
        </div>
    </section>

    <!-- Main Attractions -->
    <section class="attractions-showcase">
        <div class="container">
            <!-- Maria Cristina Falls -->
            <div class="attraction-showcase waterfalls" id="maria-cristina">
                <div class="showcase-content">
                    <div class="showcase-info">
                        <h2>Maria Cristina Falls</h2>
                        <div class="attraction-meta">
                            <span class="meta-item"><i class="fas fa-map-marker-alt"></i> 9.5 km from city center</span>
                            <span class="meta-item"><i class="fas fa-clock"></i> Open 24/7</span>
                            <span class="meta-item"><i class="fas fa-star"></i> 4.8/5 Rating</span>
                        </div>
                        <p class="attraction-description">
                            Known as the "twin falls," Maria Cristina Falls is one of the most famous waterfalls in the Philippines. 
                            Standing at 320 feet high, these majestic falls not only provide breathtaking beauty but also serve as 
                            the primary source of electric power for the city and the entire Mindanao region.
                        </p>
                        <div class="attraction-features">
                            <h4>Features & Activities:</h4>
                            <ul>
                                <li><i class="fas fa-camera"></i> Photography hotspot</li>
                                <li><i class="fas fa-bolt"></i> Hydroelectric power plant tours</li>
                                <li><i class="fas fa-hiking"></i> Nature trails and viewing decks</li>
                                <li><i class="fas fa-users"></i> Family-friendly destination</li>
                            </ul>
                        </div>
                        <div class="attraction-tips">
                            <h4><i class="fas fa-lightbulb"></i> Visitor Tips:</h4>
                            <ul>
                                <li>Best viewed during rainy season (June-November) for maximum water flow</li>
                                <li>Visit early morning or late afternoon for best lighting</li>
                                <li>Guided tours available through the National Power Corporation</li>
                                <li>Free entrance, parking available</li>
                            </ul>
                        </div>
                    </div>
                    <div class="showcase-image">
                        <div class="image-placeholder">
                            <i class="fas fa-water fa-5x"></i>
                            <span>Maria Cristina Falls</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tinago Falls -->
            <div class="attraction-showcase waterfalls" id="tinago">
                <div class="showcase-content reverse">
                    <div class="showcase-image">
                        <div class="image-placeholder">
                            <i class="fas fa-mountain fa-5x"></i>
                            <span>Tinago Falls</span>
                        </div>
                    </div>
                    <div class="showcase-info">
                        <h2>Tinago Falls</h2>
                        <div class="attraction-meta">
                            <span class="meta-item"><i class="fas fa-map-marker-alt"></i> 14 km from city center</span>
                            <span class="meta-item"><i class="fas fa-clock"></i> 6:00 AM - 6:00 PM</span>
                            <span class="meta-item"><i class="fas fa-star"></i> 4.9/5 Rating</span>
                        </div>
                        <p class="attraction-description">
                            Hidden in a deep ravine and accessible through a 500-step descent, Tinago Falls is truly a hidden gem. 
                            The name "Tinago" means "hidden" in the local dialect. This 240-foot waterfall cascades into a deep, 
                            cold lagoon perfect for swimming and is surrounded by lush tropical vegetation.
                        </p>
                        <div class="attraction-features">
                            <h4>Features & Activities:</h4>
                            <ul>
                                <li><i class="fas fa-swimming-pool"></i> Natural swimming pool</li>
                                <li><i class="fas fa-hiking"></i> Adventure trekking (500 steps down)</li>
                                <li><i class="fas fa-tree"></i> Rich biodiversity and flora</li>
                                <li><i class="fas fa-camera-retro"></i> Unique photography opportunities</li>
                            </ul>
                        </div>
                        <div class="attraction-tips">
                            <h4><i class="fas fa-exclamation-triangle"></i> Important Notes:</h4>
                            <ul>
                                <li>Wear comfortable hiking shoes with good grip</li>
                                <li>Bring water and snacks for the trek</li>
                                <li>Swimming is allowed but be cautious of deep waters</li>
                                <li>Entrance fee: ₱30 per person</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mimbalot Falls -->
            <div class="attraction-showcase waterfalls" id="mimbalot">
                <div class="showcase-content">
                    <div class="showcase-info">
                        <h2>Mimbalot Falls</h2>
                        <div class="attraction-meta">
                            <span class="meta-item"><i class="fas fa-map-marker-alt"></i> 25 km from city center</span>
                            <span class="meta-item"><i class="fas fa-clock"></i> 7:00 AM - 5:00 PM</span>
                            <span class="meta-item"><i class="fas fa-star"></i> 4.7/5 Rating</span>
                        </div>
                        <p class="attraction-description">
                            A multi-tiered waterfall system consisting of seven levels, Mimbalot Falls offers visitors multiple 
                            viewing points and swimming areas. Each tier has its own unique character, from gentle cascades perfect 
                            for relaxation to more powerful drops that create natural jacuzzis.
                        </p>
                        <div class="attraction-features">
                            <h4>Features & Activities:</h4>
                            <ul>
                                <li><i class="fas fa-layer-group"></i> Seven-tiered waterfall system</li>
                                <li><i class="fas fa-spa"></i> Natural pools and jacuzzis</li>
                                <li><i class="fas fa-campground"></i> Camping and picnic areas</li>
                                <li><i class="fas fa-fish"></i> Freshwater fishing opportunities</li>
                            </ul>
                        </div>
                    </div>
                    <div class="showcase-image">
                        <div class="image-placeholder">
                            <i class="fas fa-layer-group fa-5x"></i>
                            <span>Mimbalot Falls</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- NPC Nature's Park -->
            <div class="attraction-showcase parks" id="npc-park">
                <div class="showcase-content reverse">
                    <div class="showcase-image">
                        <div class="image-placeholder">
                            <i class="fas fa-tree fa-5x"></i>
                            <span>NPC Nature's Park</span>
                        </div>
                    </div>
                    <div class="showcase-info">
                        <h2>NPC Nature's Park</h2>
                        <div class="attraction-meta">
                            <span class="meta-item"><i class="fas fa-map-marker-alt"></i> 8 km from city center</span>
                            <span class="meta-item"><i class="fas fa-clock"></i> 6:00 AM - 6:00 PM</span>
                            <span class="meta-item"><i class="fas fa-star"></i> 4.5/5 Rating</span>
                        </div>
                        <p class="attraction-description">
                            A 127-hectare ecological park managed by the National Power Corporation, featuring diverse flora and fauna, 
                            walking trails, and educational exhibits about sustainable energy and environmental conservation.
                        </p>
                        <div class="attraction-features">
                            <h4>Features & Activities:</h4>
                            <ul>
                                <li><i class="fas fa-walking"></i> Nature trails and boardwalks</li>
                                <li><i class="fas fa-graduation-cap"></i> Educational exhibits</li>
                                <li><i class="fas fa-binoculars"></i> Bird watching</li>
                                <li><i class="fas fa-seedling"></i> Native plant conservation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Adventure Activities -->
            <div class="attractions-grid">
                <div class="attraction-card adventure">
                    <div class="card-header">
                        <i class="fas fa-mountain-sun fa-3x"></i>
                        <h3>White Water Rafting</h3>
                    </div>
                    <div class="card-content">
                        <p>Experience thrilling rapids on the Cagayan de Oro River, just a short drive from Iligan City.</p>
                        <div class="card-meta">
                            <span><i class="fas fa-clock"></i> 3-4 hours</span>
                            <span><i class="fas fa-users"></i> Group activity</span>
                        </div>
                    </div>
                </div>

                <div class="attraction-card adventure">
                    <div class="card-header">
                        <i class="fas fa-hiking fa-3x"></i>
                        <h3>Waterfall Trekking</h3>
                    </div>
                    <div class="card-content">
                        <p>Guided treks to hidden waterfalls and scenic viewpoints throughout the city's mountainous terrain.</p>
                        <div class="card-meta">
                            <span><i class="fas fa-clock"></i> Half/Full day</span>
                            <span><i class="fas fa-map"></i> Multiple trails</span>
                        </div>
                    </div>
                </div>

                <div class="attraction-card adventure">
                    <div class="card-header">
                        <i class="fas fa-binoculars fa-3x"></i>
                        <h3>Bird Watching</h3>
                    </div>
                    <div class="card-content">
                        <p>Spot endemic Philippine bird species in the city's protected forest areas and nature reserves.</p>
                        <div class="card-meta">
                            <span><i class="fas fa-clock"></i> 2-3 hours</span>
                            <span><i class="fas fa-leaf"></i> Eco-friendly</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Practical Information -->
    <section class="practical-info">
        <div class="container">
            <h2 class="section-title">Plan Your Visit</h2>
            
            <div class="info-grid">
                <div class="info-card">
                    <div class="info-header">
                        <i class="fas fa-route"></i>
                        <h3>Getting Around</h3>
                    </div>
                    <ul>
                        <li>Tricycles and jeepneys for local transport</li>
                        <li>Habal-habal for remote waterfalls</li>
                        <li>Car rentals available in the city center</li>
                        <li>Tour packages with transportation included</li>
                    </ul>
                </div>

                <div class="info-card">
                    <div class="info-header">
                        <i class="fas fa-calendar-alt"></i>
                        <h3>Best Time to Visit</h3>
                    </div>
                    <ul>
                        <li>Dry season: March to May (less rainfall)</li>
                        <li>Rainy season: June to November (fuller waterfalls)</li>
                        <li>Avoid typhoon season: September to November</li>
                        <li>Peak tourist season: December to February</li>
                    </ul>
                </div>

                <div class="info-card">
                    <div class="info-header">
                        <i class="fas fa-backpack"></i>
                        <h3>What to Bring</h3>
                    </div>
                    <ul>
                        <li>Comfortable hiking shoes</li>
                        <li>Waterproof bag for electronics</li>
                        <li>Swimwear and extra clothes</li>
                        <li>Sunscreen and insect repellent</li>
                    </ul>
                </div>

                <div class="info-card">
                    <div class="info-header">
                        <i class="fas fa-shield-alt"></i>
                        <h3>Safety Tips</h3>
                    </div>
                    <ul>
                        <li>Always inform someone of your itinerary</li>
                        <li>Hire local guides for remote areas</li>
                        <li>Check weather conditions before visiting</li>
                        <li>Respect local customs and environment</li>
                    </ul>
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
    <script src="assets/js/attractions.js"></script>
</body>
</html>