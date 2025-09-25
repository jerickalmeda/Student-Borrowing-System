<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iligan City - The City of Majestic Falls</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <a href="#" class="nav-brand">
                    <i class="fas fa-water"></i>
                    Iligan City
                </a>
            </div>
            <div class="nav-menu">
                <a href="index.php" class="nav-link active">Home</a>
                <a href="attractions.php" class="nav-link">Attractions</a>
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

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1 class="hero-title">Welcome to Iligan City</h1>
            <p class="hero-subtitle">The City of Majestic Falls</p>
            <p class="hero-description">
                Discover the natural beauty, rich culture, and warm hospitality of Iligan City, 
                home to over 20 breathtaking waterfalls and the industrial heart of Northern Mindanao.
            </p>
            <div class="hero-buttons">
                <a href="attractions.php" class="btn btn-primary">Explore Attractions</a>
                <a href="gallery.php" class="btn btn-secondary">View Gallery</a>
            </div>
        </div>
        <div class="hero-image">
            <div class="waterfall-animation"></div>
        </div>
    </section>

    <!-- Featured Attractions -->
    <section class="featured-attractions">
        <div class="container">
            <h2 class="section-title">Featured Attractions</h2>
            <p class="section-subtitle">Discover the most beautiful spots in Iligan City</p>
            
            <div class="attractions-grid">
                <div class="attraction-card">
                    <div class="card-image">
                        <i class="fas fa-tint fa-3x"></i>
                    </div>
                    <div class="card-content">
                        <h3>Maria Cristina Falls</h3>
                        <p>The twin falls that power the city and inspire countless visitors with their natural beauty and industrial significance.</p>
                        <a href="attractions.php#maria-cristina" class="card-link">Learn More <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <div class="attraction-card">
                    <div class="card-image">
                        <i class="fas fa-mountain fa-3x"></i>
                    </div>
                    <div class="card-content">
                        <h3>Tinago Falls</h3>
                        <p>A hidden gem nestled in a deep ravine, accessible through a scenic trek down stone steps carved into the mountainside.</p>
                        <a href="attractions.php#tinago" class="card-link">Learn More <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <div class="attraction-card">
                    <div class="card-image">
                        <i class="fas fa-leaf fa-3x"></i>
                    </div>
                    <div class="card-content">
                        <h3>Mimbalot Falls</h3>
                        <p>A multi-tiered waterfall surrounded by lush tropical vegetation, perfect for nature lovers and adventure seekers.</p>
                        <a href="attractions.php#mimbalot" class="card-link">Learn More <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Quick Facts -->
    <section class="quick-facts">
        <div class="container">
            <h2 class="section-title">Quick Facts About Iligan</h2>
            
            <div class="facts-grid">
                <div class="fact-item">
                    <div class="fact-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="fact-content">
                        <h4>Location</h4>
                        <p>Northern Mindanao, Philippines</p>
                    </div>
                </div>

                <div class="fact-item">
                    <div class="fact-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="fact-content">
                        <h4>Population</h4>
                        <p>Over 350,000 residents</p>
                    </div>
                </div>

                <div class="fact-item">
                    <div class="fact-icon">
                        <i class="fas fa-industry"></i>
                    </div>
                    <div class="fact-content">
                        <h4>Known As</h4>
                        <p>Industrial Center of the South</p>
                    </div>
                </div>

                <div class="fact-item">
                    <div class="fact-icon">
                        <i class="fas fa-water"></i>
                    </div>
                    <div class="fact-content">
                        <h4>Waterfalls</h4>
                        <p>More than 20 waterfalls</p>
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
</body>
</html>