export function renderNavbar(activeTab = 'home', quoteCount = 0) {
  return `
    <header class="navbar-wrapper" id="navbarWrapper">
      <nav class="navbar">
        <a href="#home" class="brand-logo" data-nav="home">
          <div class="brand-symbol">F</div>
          <div class="brand-text">
            <span class="brand-name">FER CO</span>
            <span class="brand-tagline">Steel & More</span>
          </div>
        </a>

        <ul class="nav-links">
          <li><a href="#home" class="nav-item ${activeTab === 'home' ? 'active' : ''}" data-nav="home">Accueil</a></li>
          <li><a href="#solutions" class="nav-item ${activeTab === 'solutions' ? 'active' : ''}" data-nav="solutions">Solutions & Modules</a></li>
          <li><a href="#produits" class="nav-item ${activeTab === 'produits' ? 'active' : ''}" data-nav="produits">Produits Métallurgiques</a></li>
          <li><a href="#capacites" class="nav-item ${activeTab === 'capacites' ? 'active' : ''}" data-nav="capacites">Capacités & Services</a></li>
          <li><a href="#realisations" class="nav-item ${activeTab === 'realisations' ? 'active' : ''}" data-nav="realisations">Réalisations</a></li>
          <li><a href="#a-propos" class="nav-item ${activeTab === 'a-propos' ? 'active' : ''}" data-nav="a-propos">À Propos</a></li>
          <li><a href="#contact" class="nav-item ${activeTab === 'contact' ? 'active' : ''}" data-nav="contact">Contact</a></li>
        </ul>

        <div class="nav-actions">
          <button class="btn btn-primary btn-sm btn-quote-desktop" id="openQuoteModalBtn">
            <i data-lucide="file-text" style="width:16px;height:16px;"></i>
            <span>Demander un devis</span>
            ${quoteCount > 0 ? `<span class="badge" style="background:#fff;color:var(--accent-orange);padding:2px 6px;margin-left:4px;">${quoteCount}</span>` : ''}
          </button>
          
          <button class="mobile-toggle" id="mobileMenuToggle" aria-label="Menu Mobile">
            <i data-lucide="menu" style="width:22px;height:22px;"></i>
          </button>
        </div>
      </nav>
    </header>

    <!-- Mobile Navigation Drawer -->
    <div class="drawer-overlay" id="drawerOverlay"></div>
    <aside class="mobile-drawer" id="mobileDrawer">
      <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:16px;border-bottom:1px solid var(--border-subtle);">
        <div class="brand-logo">
          <div class="brand-symbol">F</div>
          <div class="brand-text">
            <span class="brand-name">FER CO</span>
            <span class="brand-tagline">Bénin • Cotonou</span>
          </div>
        </div>
        <button class="btn-icon btn-secondary" id="closeDrawerBtn" aria-label="Fermer le menu">
          <i data-lucide="x" style="width:20px;height:20px;"></i>
        </button>
      </div>

      <ul style="list-style:none;display:flex;flex-direction:column;gap:12px;margin-top:12px;">
        <li><a href="#home" class="nav-item ${activeTab === 'home' ? 'active' : ''}" data-nav="home" style="display:block;padding:12px 16px;">Accueil</a></li>
        <li><a href="#solutions" class="nav-item ${activeTab === 'solutions' ? 'active' : ''}" data-nav="solutions" style="display:block;padding:12px 16px;">Solutions & Modules</a></li>
        <li><a href="#produits" class="nav-item ${activeTab === 'produits' ? 'active' : ''}" data-nav="produits" style="display:block;padding:12px 16px;">Produits Métallurgiques</a></li>
        <li><a href="#capacites" class="nav-item ${activeTab === 'capacites' ? 'active' : ''}" data-nav="capacites" style="display:block;padding:12px 16px;">Capacités Industrielles & Services</a></li>
        <li><a href="#realisations" class="nav-item ${activeTab === 'realisations' ? 'active' : ''}" data-nav="realisations" style="display:block;padding:12px 16px;">Réalisations</a></li>
        <li><a href="#a-propos" class="nav-item ${activeTab === 'a-propos' ? 'active' : ''}" data-nav="a-propos" style="display:block;padding:12px 16px;">À Propos de FER CO</a></li>
        <li><a href="#contact" class="nav-item ${activeTab === 'contact' ? 'active' : ''}" data-nav="contact" style="display:block;padding:12px 16px;">Contact</a></li>
      </ul>

      <div style="margin-top:auto;padding-top:20px;border-top:1px solid var(--border-subtle);display:flex;flex-direction:column;gap:12px;">
        <button class="btn btn-primary" id="drawerQuoteBtn" style="width:100%;">
          <i data-lucide="file-text" style="width:18px;height:18px;"></i>
          <span>Demande de devis gratuit</span>
        </button>
        <div style="font-size:0.85rem;color:var(--text-secondary);text-align:center;">
          <a href="tel:+22999905555" style="display:inline-flex;align-items:center;gap:6px;color:var(--text-primary);font-weight:600;">
            <i data-lucide="phone" style="width:14px;height:14px;color:var(--accent-orange);"></i>
            +229 99 90 55 55
          </a>
        </div>
      </div>
    </aside>
  `;
}
