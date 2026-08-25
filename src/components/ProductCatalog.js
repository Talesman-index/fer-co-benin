import { productCategories, products } from '../data/products.js';

export function renderProductCatalog(selectedCategory = 'all', searchQuery = '') {
  const filteredProducts = products.filter(prod => {
    const matchesCategory = selectedCategory === 'all' || prod.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      prod.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return `
    <section class="section" id="produits" style="background:var(--bg-secondary);">
      <div class="container">
        <div class="section-header">
          <div class="badge" style="margin-bottom:12px;">Pôle 02 • Catalogue Sidérurgique</div>
          <h2>Produits Métallurgiques Certifiés</h2>
          <p>
            Tôles Bac Aluzinc, panneaux sandwichs, tubes, fers marchands et poutrelles en stock permanent à Cotonou. Découpe à façon et livraison rapide.
          </p>
        </div>

        <!-- Toolbar : Search + Filters -->
        <div class="catalog-toolbar">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;">
            <div class="catalog-search-wrapper">
              <i data-lucide="search" class="catalog-search-icon" style="width:18px;height:18px;"></i>
              <input 
                type="text" 
                class="catalog-search-input" 
                id="catalogSearchInput" 
                placeholder="Rechercher par mot-clé (Aluzinc, sandwich, IPE, HA12...)" 
                value="${searchQuery}"
              />
            </div>
            
            <div style="color:var(--text-secondary);font-size:0.875rem;font-weight:600;">
              <span>Affichage : <strong style="color:var(--text-primary);">${filteredProducts.length}</strong> référence(s)</span>
            </div>
          </div>

          <!-- Category Chips -->
          <div class="category-chips" id="categoryChips">
            ${productCategories.map(cat => `
              <button 
                class="category-chip ${selectedCategory === cat.id ? 'active' : ''}" 
                data-category-id="${cat.id}"
              >
                <i data-lucide="${cat.icon}" style="width:15px;height:15px;"></i>
                <span>${cat.name}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Products Grid -->
        ${filteredProducts.length === 0 ? `
          <div class="card-glass" style="text-align:center;padding:64px 20px;">
            <i data-lucide="package-search" style="width:48px;height:48px;color:var(--text-muted);margin-bottom:16px;"></i>
            <h3>Aucun produit ne correspond à votre recherche</h3>
            <p style="margin-bottom:20px;">Essayez d’élargir vos termes de recherche ou réinitialisez les filtres.</p>
            <button class="btn btn-secondary btn-sm" id="resetCatalogFilters">Réinitialiser les filtres</button>
          </div>
        ` : `
          <div class="grid-3" id="productsGrid">
            ${filteredProducts.map(prod => `
              <article class="product-card" data-product-id="${prod.id}">
                <div class="product-thumb">
                  <img src="${prod.image}" alt="${prod.name}" loading="lazy" />
                  ${prod.tag ? `<span class="product-tag">${prod.tag}</span>` : ''}
                </div>

                <div class="product-body">
                  <div class="product-category-name">${prod.categoryName}</div>
                  <h3 class="product-title">${prod.name}</h3>
                  <p class="product-short-desc">${prod.shortDesc}</p>

                  <div class="product-specs-preview">
                    ${Object.entries(prod.specs).slice(0, 2).map(([key, val]) => `
                      <div class="spec-line">
                        <span class="spec-label">${key} :</span>
                        <span class="spec-val">${val}</span>
                      </div>
                    `).join('')}
                  </div>

                  <div class="product-card-actions">
                    <button class="btn btn-secondary btn-sm btn-product-details" data-product-id="${prod.id}" style="flex:1;">
                      <i data-lucide="eye" style="width:15px;height:15px;"></i>
                      <span>Détails</span>
                    </button>
                    <button class="btn btn-primary btn-sm btn-add-quote" data-product-id="${prod.id}" data-product-name="${prod.name}" style="flex:1;">
                      <i data-lucide="plus" style="width:15px;height:15px;"></i>
                      <span>Devis</span>
                    </button>
                  </div>
                </div>
              </article>
            `).join('')}
          </div>
        `}
      </div>
    </section>
  `;
}
