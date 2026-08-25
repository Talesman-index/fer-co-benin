import { productCategories, products } from '../data/products.js';

export function renderGlobalReachCatalog(selectedCategory = 'all', searchQuery = '') {
  const filteredProducts = products.filter(prod => {
    const matchesCategory = selectedCategory === 'all' || prod.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      prod.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return `
    <section class="card-block-white" id="produits">
      <div class="split-reach-grid">
        <!-- Left Column : Title + Filter Tabs + Products Grid -->
        <div>
          <div style="margin-bottom:24px;">
            <h2 style="font-size:clamp(1.75rem, 3vw, 2.4rem);margin-bottom:8px;">Disponibilité Immédiate & Fiabilité Sans Égale</h2>
            <p style="font-size:0.95rem;color:var(--text-dark-secondary);">
              Notre entrepôt sidérurgique à Cotonou assure l'approvisionnement continu des plus grands chantiers du Bénin.
            </p>
          </div>

          <!-- 2 Bento Stats Cards -->
          <div class="reach-bento-cards">
            <div class="reach-small-card">
              <div style="font-size:0.75rem;text-transform:uppercase;color:var(--text-dark-muted);font-weight:700;margin-bottom:4px;">Stock Permanent</div>
              <div style="font-size:1.4rem;font-weight:800;color:var(--accent-orange);margin-bottom:4px;">+1 500 T</div>
              <div style="font-size:0.8rem;color:var(--text-dark-secondary);">De profilés, fers et tôles prêts à livrer</div>
            </div>

            <div class="reach-small-card">
              <div style="font-size:0.75rem;text-transform:uppercase;color:var(--text-dark-muted);font-weight:700;margin-bottom:4px;">Délai Moyen Devis</div>
              <div style="font-size:1.4rem;font-weight:800;color:var(--text-dark-primary);margin-bottom:4px;">&lt; 24 Heures</div>
              <div style="font-size:0.8rem;color:var(--text-dark-secondary);">Étude technique chiffrée par nos ingénieurs</div>
            </div>
          </div>

          <!-- Category Chips -->
          <div class="category-filter-ribbon" id="catalogTabs">
            ${productCategories.slice(0, 6).map(cat => `
              <button 
                class="category-tab-btn ${selectedCategory === cat.id ? 'active' : ''}" 
                data-category-id="${cat.id}"
              >
                ${cat.name}
              </button>
            `).join('')}
          </div>

          <!-- Products Compact List -->
          <div style="display:flex;flex-direction:column;gap:10px;max-height:280px;overflow-y:auto;padding-right:6px;">
            ${filteredProducts.slice(0, 4).map(prod => `
              <div style="background:var(--bg-card-subtle);border:1px solid var(--border-light);border-radius:var(--radius-sm);padding:12px 16px;display:flex;align-items:center;justify-content:space-between;gap:12px;">
                <div>
                  <div style="font-size:0.75rem;color:var(--accent-orange);font-weight:700;text-transform:uppercase;">${prod.categoryName}</div>
                  <div style="font-size:0.95rem;font-weight:700;color:var(--text-dark-primary);">${prod.name}</div>
                </div>
                <button class="btn btn-dark btn-sm btn-add-quote" data-product-id="${prod.id}" data-product-name="${prod.name}" style="padding:6px 14px;font-size:0.8rem;">
                  <span>Ajouter</span>
                </button>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Right Column : Crane / Port Image with Floating Quick Quote Widget -->
        <div class="reach-crane-box">
          <img 
            src="/images/construction-worker-overseeing-a-crane-operation-o-2026-03-25-00-00-49-utc.jpg" 
            alt="Opération de levage et logistique FER CO" 
          />

          <div class="reach-floating-form">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
              <span style="font-size:0.85rem;font-weight:700;color:var(--text-dark-primary);">Estimation Express</span>
              <span class="badge badge-cyan" style="font-size:0.7rem;padding:2px 8px;">Cotonou & Régions</span>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;">
              <input type="text" id="quickQuotePhone" class="form-input" placeholder="Votre téléphone..." style="padding:8px 12px;font-size:0.85rem;" />
              <button class="btn btn-primary btn-sm" id="btnQuickSubmitSide" style="width:100%;padding:8px 12px;">
                <span>Être rappelé</span>
              </button>
            </div>
            <div style="font-size:0.75rem;color:var(--text-dark-muted);text-align:center;">
              ⚡ Réponse d'un technico-commercial sous 15 minutes
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
