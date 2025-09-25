<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery - Iligan City</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/gallery.css">
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
                <a href="gallery.php" class="nav-link active">Gallery</a>
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
            <h1 class="page-title">Photo Gallery</h1>
            <p class="page-subtitle">Explore the beauty of Iligan City through stunning visuals</p>
        </div>
    </section>

    <!-- Gallery Filter -->
    <section class="gallery-filter">
        <div class="container">
            <div class="filter-tabs">
                <button class="filter-btn active" data-filter="all">All Photos</button>
                <button class="filter-btn" data-filter="waterfalls">Waterfalls</button>
                <button class="filter-btn" data-filter="nature">Nature</button>
                <button class="filter-btn" data-filter="culture">Culture</button>
                <button class="filter-btn" data-filter="festivals">Festivals</button>
                <button class="filter-btn" data-filter="aerial">Aerial Views</button>
                <button class="filter-btn" data-filter="historical">Historical</button>
            </div>
        </div>
    </section>

    <!-- Photo Gallery -->
    <section class="photo-gallery">
        <div class="container">
            <div class="gallery-grid" id="galleryGrid">
                <!-- Waterfalls -->
                <div class="gallery-item waterfalls" data-title="Maria Cristina Falls" data-description="The majestic twin falls that power the city">
                    <div class="gallery-image">
                        <i class="fas fa-water fa-4x"></i>
                        <div class="image-overlay">
                            <h3>Maria Cristina Falls</h3>
                            <p>The Twin Falls</p>
                            <div class="overlay-actions">
                                <button class="view-btn"><i class="fas fa-eye"></i></button>
                                <button class="download-btn"><i class="fas fa-download"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="gallery-item waterfalls" data-title="Tinago Falls" data-description="Hidden paradise in a deep ravine">
                    <div class="gallery-image">
                        <i class="fas fa-mountain fa-4x"></i>
                        <div class="image-overlay">
                            <h3>Tinago Falls</h3>
                            <p>Hidden Gem</p>
                            <div class="overlay-actions">
                                <button class="view-btn"><i class="fas fa-eye"></i></button>
                                <button class="download-btn"><i class="fas fa-download"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="gallery-item waterfalls" data-title="Mimbalot Falls" data-description="Multi-tiered waterfall paradise">
                    <div class="gallery-image">
                        <i class="fas fa-layer-group fa-4x"></i>
                        <div class="image-overlay">
                            <h3>Mimbalot Falls</h3>
                            <p>Seven Tiers</p>
                            <div class="overlay-actions">
                                <button class="view-btn"><i class="fas fa-eye"></i></button>
                                <button class="download-btn"><i class="fas fa-download"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Nature -->
                <div class="gallery-item nature" data-title="NPC Nature's Park" data-description="Ecological paradise in the heart of the city">
                    <div class="gallery-image">
                        <i class="fas fa-tree fa-4x"></i>
                        <div class="image-overlay">
                            <h3>NPC Nature's Park</h3>
                            <p>Eco Tourism</p>
                            <div class="overlay-actions">
                                <button class="view-btn"><i class="fas fa-eye"></i></button>
                                <button class="download-btn"><i class="fas fa-download"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="gallery-item nature" data-title="Iligan River" data-description="The lifeline of the city flowing to the sea">
                    <div class="gallery-image">
                        <i class="fas fa-river fa-4x"></i>
                        <div class="image-overlay">
                            <h3>Iligan River</h3>
                            <p>City's Lifeline</p>
                            <div class="overlay-actions">
                                <button class="view-btn"><i class="fas fa-eye"></i></button>
                                <button class="download-btn"><i class="fas fa-download"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Culture -->
                <div class="gallery-item culture" data-title="Traditional Weaving" data-description="Maranao artisans at work">
                    <div class="gallery-image">
                        <i class="fas fa-palette fa-4x"></i>
                        <div class="image-overlay">
                            <h3>Traditional Weaving</h3>
                            <p>Maranao Crafts</p>
                            <div class="overlay-actions">
                                <button class="view-btn"><i class="fas fa-eye"></i></button>
                                <button class="download-btn"><i class="fas fa-download"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="gallery-item culture" data-title="Local Cuisine" data-description="Traditional dishes and delicacies">
                    <div class="gallery-image">
                        <i class="fas fa-utensils fa-4x"></i>
                        <div class="image-overlay">
                            <h3>Local Cuisine</h3>
                            <p>Flavors of Iligan</p>
                            <div class="overlay-actions">
                                <button class="view-btn"><i class="fas fa-eye"></i></button>
                                <button class="download-btn"><i class="fas fa-download"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Festivals -->
                <div class="gallery-item festivals" data-title="Diyandi Festival" data-description="The city's grandest celebration">
                    <div class="gallery-image">
                        <i class="fas fa-masks-theater fa-4x"></i>
                        <div class="image-overlay">
                            <h3>Diyandi Festival</h3>
                            <p>Grand Celebration</p>
                            <div class="overlay-actions">
                                <button class="view-btn"><i class="fas fa-eye"></i></button>
                                <button class="download-btn"><i class="fas fa-download"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="gallery-item festivals" data-title="Street Dancing" data-description="Colorful performances during festival season">
                    <div class="gallery-image">
                        <i class="fas fa-music fa-4x"></i>
                        <div class="image-overlay">
                            <h3>Street Dancing</h3>
                            <p>Cultural Performance</p>
                            <div class="overlay-actions">
                                <button class="view-btn"><i class="fas fa-eye"></i></button>
                                <button class="download-btn"><i class="fas fa-download"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Aerial Views -->
                <div class="gallery-item aerial" data-title="City Overview" data-description="Iligan City from above">
                    <div class="gallery-image">
                        <i class="fas fa-city fa-4x"></i>
                        <div class="image-overlay">
                            <h3>City Overview</h3>
                            <p>Aerial Perspective</p>
                            <div class="overlay-actions">
                                <button class="view-btn"><i class="fas fa-eye"></i></button>
                                <button class="download-btn"><i class="fas fa-download"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="gallery-item aerial" data-title="Industrial District" data-description="The industrial heart of the south">
                    <div class="gallery-image">
                        <i class="fas fa-industry fa-4x"></i>
                        <div class="image-overlay">
                            <h3>Industrial District</h3>
                            <p>Economic Center</p>
                            <div class="overlay-actions">
                                <button class="view-btn"><i class="fas fa-eye"></i></button>
                                <button class="download-btn"><i class="fas fa-download"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Historical -->
                <div class="gallery-item historical" data-title="St. Michael Cathedral" data-description="Colonial-era spiritual center">
                    <div class="gallery-image">
                        <i class="fas fa-church fa-4x"></i>
                        <div class="image-overlay">
                            <h3>St. Michael Cathedral</h3>
                            <p>Historical Landmark</p>
                            <div class="overlay-actions">
                                <button class="view-btn"><i class="fas fa-eye"></i></button>
                                <button class="download-btn"><i class="fas fa-download"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="gallery-item historical" data-title="Old Municipal Building" data-description="Witness to the city's growth">
                    <div class="gallery-image">
                        <i class="fas fa-landmark fa-4x"></i>
                        <div class="image-overlay">
                            <h3>Old Municipal Building</h3>
                            <p>Heritage Site</p>
                            <div class="overlay-actions">
                                <button class="view-btn"><i class="fas fa-eye"></i></button>
                                <button class="download-btn"><i class="fas fa-download"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Collections -->
    <section class="featured-collections">
        <div class="container">
            <h2 class="section-title">Featured Collections</h2>
            
            <div class="collections-grid">
                <div class="collection-card">
                    <div class="collection-header">
                        <i class="fas fa-camera fa-2x"></i>
                        <h3>Waterfall Photography</h3>
                    </div>
                    <div class="collection-stats">
                        <span><i class="fas fa-images"></i> 25 Photos</span>
                        <span><i class="fas fa-eye"></i> 1,234 Views</span>
                    </div>
                    <p>Stunning captures of Iligan's majestic waterfalls in all their glory.</p>
                    <button class="btn btn-outline view-collection" data-collection="waterfalls">View Collection</button>
                </div>

                <div class="collection-card">
                    <div class="collection-header">
                        <i class="fas fa-calendar-alt fa-2x"></i>
                        <h3>Festival Moments</h3>
                    </div>
                    <div class="collection-stats">
                        <span><i class="fas fa-images"></i> 18 Photos</span>
                        <span><i class="fas fa-eye"></i> 987 Views</span>
                    </div>
                    <p>Vibrant captures from Diyandi Festival and other cultural celebrations.</p>
                    <button class="btn btn-outline view-collection" data-collection="festivals">View Collection</button>
                </div>

                <div class="collection-card">
                    <div class="collection-header">
                        <i class="fas fa-drone fa-2x"></i>
                        <h3>Drone Views</h3>
                    </div>
                    <div class="collection-stats">
                        <span><i class="fas fa-images"></i> 12 Photos</span>
                        <span><i class="fas fa-eye"></i> 756 Views</span>
                    </div>
                    <p>Breathtaking aerial perspectives of the city and its natural wonders.</p>
                    <button class="btn btn-outline view-collection" data-collection="aerial">View Collection</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Photo Contest -->
    <section class="photo-contest">
        <div class="container">
            <div class="contest-content">
                <div class="contest-info">
                    <h2>Share Your Iligan Experience</h2>
                    <p>
                        Captured a beautiful moment in Iligan City? Share your photos with us and 
                        inspire others to visit our magnificent city. The best photos will be featured 
                        in our official gallery and social media channels.
                    </p>
                    <div class="contest-rules">
                        <h4>Submission Guidelines:</h4>
                        <ul>
                            <li><i class="fas fa-check"></i> High resolution (minimum 1920x1080)</li>
                            <li><i class="fas fa-check"></i> Original photos taken in Iligan City</li>
                            <li><i class="fas fa-check"></i> Include location and brief description</li>
                            <li><i class="fas fa-check"></i> Tag us on social media or email submission</li>
                        </ul>
                    </div>
                    <div class="contest-actions">
                        <button class="btn btn-primary">Submit Photo</button>
                        <button class="btn btn-secondary">Contest Rules</button>
                    </div>
                </div>
                <div class="contest-visual">
                    <div class="photo-frame">
                        <i class="fas fa-camera fa-5x"></i>
                        <div class="frame-text">Your Photo Here</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Virtual Tour -->
    <section class="virtual-tour">
        <div class="container">
            <h2 class="section-title">Virtual Tours</h2>
            <p class="section-subtitle">Experience Iligan City from anywhere in the world</p>
            
            <div class="tour-grid">
                <div class="tour-card">
                    <div class="tour-preview">
                        <i class="fas fa-play-circle fa-4x"></i>
                    </div>
                    <div class="tour-info">
                        <h3>360° Maria Cristina Falls</h3>
                        <p>Immersive virtual tour of the iconic twin falls with interactive hotspots.</p>
                        <div class="tour-meta">
                            <span><i class="fas fa-clock"></i> 5 minutes</span>
                            <span><i class="fas fa-vr-cardboard"></i> VR Ready</span>
                        </div>
                        <button class="btn btn-primary start-tour" data-tour="maria-cristina">Start Tour</button>
                    </div>
                </div>

                <div class="tour-card">
                    <div class="tour-preview">
                        <i class="fas fa-play-circle fa-4x"></i>
                    </div>
                    <div class="tour-info">
                        <h3>Downtown Walking Tour</h3>
                        <p>Explore the city center, historical landmarks, and local culture.</p>
                        <div class="tour-meta">
                            <span><i class="fas fa-clock"></i> 8 minutes</span>
                            <span><i class="fas fa-walking"></i> Street View</span>
                        </div>
                        <button class="btn btn-primary start-tour" data-tour="downtown">Start Tour</button>
                    </div>
                </div>

                <div class="tour-card">
                    <div class="tour-preview">
                        <i class="fas fa-play-circle fa-4x"></i>
                    </div>
                    <div class="tour-info">
                        <h3>Festival Highlights</h3>
                        <p>Experience the colors and energy of Diyandi Festival celebration.</p>
                        <div class="tour-meta">
                            <span><i class="fas fa-clock"></i> 6 minutes</span>
                            <span><i class="fas fa-music"></i> Audio Tour</span>
                        </div>
                        <button class="btn btn-primary start-tour" data-tour="festival">Start Tour</button>
                    </div>
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
    <script src="assets/js/gallery.js"></script>
</body>
</html>