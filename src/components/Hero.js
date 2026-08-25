export function renderHero() {
  return `
    <section class="hero-card" id="home">
      <!-- Background Image -->
      <div class="hero-card-bg">
        <img src="images/hero-worker-orange.jpg" alt="Powering Global Industry - FER CO Bénin" />
        <div class="hero-card-bg-overlay"></div>
      </div>

      <!-- Integrated Header (Single Frosted Glass Capsule) -->
      <header class="hero-header">
        <a href="#home" class="hero-brand" data-nav="home">
          <div class="hero-brand-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="6.5" cy="6.5" r="2.5"></circle>
              <circle cx="17.5" cy="17.5" r="2.5"></circle>
              <line x1="19" y1="5" x2="5" y2="19"></line>
            </svg>
          </div>
          <span class="hero-brand-name">FER CO</span>
        </a>

        <div class="hero-header-right-cluster">
          <nav class="hero-white-pill-nav">
            <a href="#solutions" class="hero-white-nav-link" data-nav="solutions">Spots</a>
            <a href="#capacites" class="hero-white-nav-link" data-nav="capacites">Our Mission</a>
            <a href="#contact" class="hero-white-nav-link" data-nav="contact">Contact</a>
            <a href="#realisations" class="hero-white-nav-link" data-nav="realisations">About us</a>
          </nav>

          <button class="hero-white-search-btn open-quote-modal" id="openSearchBtn" title="Search">
            <i data-lucide="search" style="width:14px;height:14px;"></i>
            <span>Search</span>
          </button>

          <button class="hero-white-menu-btn open-quote-modal" id="mobileMenuToggle" aria-label="Menu">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <line x1="4" y1="9" x2="20" y2="9"></line>
              <line x1="4" y1="15" x2="20" y2="15"></line>
            </svg>
          </button>
        </div>
      </header>

      <!-- Hero Main Content Grid -->
      <div class="hero-body-grid">
        <div class="hero-text-content">
          <!-- Version 2.0 Pill Badge -->
          <div class="hero-version-pill open-quote-modal">
            <span class="hero-version-label">Version 2.0 is here</span>
            <span class="hero-version-link">
              Read more
              <i data-lucide="arrow-right" style="width:13px;height:13px;"></i>
            </span>
          </div>

          <h1 class="hero-title-text">
            Powering Global<br />
            Industry
          </h1>

          <p class="hero-desc-text">
            We combine decades of industrial expertise with cutting-edge technology to deliver advanced manufacturing and automation solutions.
          </p>

          <!-- Exact Pill Button: GET A FREE QUOTE (with orange circle arrow) -->
          <button class="hero-quote-pill-btn open-quote-modal" id="heroQuoteBtn" aria-label="Get a free quote">
            <span class="hero-quote-pill-text">GET A FREE QUOTE</span>
            <span class="hero-quote-pill-arrow">
              <i data-lucide="arrow-up-right" style="width:16px;height:16px;"></i>
            </span>
          </button>
        </div>

        <!-- Right Side Floating Preview Card -->
        <div class="hero-right-col">
          <div class="hero-floating-preview-card open-quote-modal">
            <div class="hero-preview-info">
              <div class="hero-preview-index">
                <span class="hero-preview-num">/ 01</span>
                <span class="hero-preview-total">06</span>
              </div>
              <p class="hero-preview-caption">
                You fast, reliable, and cost-effective logistics solutions tailored to your business.
              </p>
            </div>
            <div class="hero-preview-media">
              <img src="images/hero-worker-orange.jpg" alt="Logistics and steel structures preview" />
              <div class="hero-preview-play-btn" title="Lire la vidéo">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#ffffff" stroke="none">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Circular Stamp Badge (Bottom Right) -->
      <div class="stamp-overlapping-badge" id="circularStampBtn" title="Get in touch">
        <svg class="stamp-svg-text" viewBox="0 0 100 100">
          <path id="circleStampPath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
          <text font-size="10.2" font-weight="800" fill="#ffffff" letter-spacing="2.4px">
            <textPath href="#circleStampPath" startOffset="0%">
              • GET IN TOUCH • GET IN TOUCH 
            </textPath>
          </text>
        </svg>
        <div class="stamp-center-arrow">
          <i data-lucide="arrow-down" style="width:22px;height:22px;color:#ffffff;"></i>
        </div>
      </div>
    </section>
  `;
}
