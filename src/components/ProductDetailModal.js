export function renderProductDetailModal(product) {
  if (!product) return '';
  return `
    <div class="modal-overlay open" id="productDetailModalOverlay">
      <div class="modal-window" style="max-width:760px;">
        <button class="modal-close-btn" id="closeProductDetailBtn" aria-label="Fermer la fiche">
          <i data-lucide="x" style="width:18px;height:18px;"></i>
        </button>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:24px;" class="modal-product-grid">
          <div style="height:260px;border-radius:var(--radius-sm);overflow:hidden;background:#000;">
            <img src="${product.image}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;" />
          </div>

          <div style="display:flex;flex-direction:column;justify-content:center;">
            <span class="product-category-name">${product.categoryName}</span>
            <h3 style="font-size:1.5rem;margin-bottom:10px;">${product.name}</h3>
            ${product.tag ? `<span class="badge" style="width:fit-content;margin-bottom:12px;">${product.tag}</span>` : ''}
            <p style="font-size:0.875rem;color:var(--text-secondary);line-height:1.5;">${product.shortDesc}</p>
          </div>
        </div>

        <div style="margin-bottom:24px;">
          <h4 style="font-size:1.05rem;margin-bottom:8px;color:var(--text-primary);">Description Technique & Propriétés</h4>
          <p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.6;margin-bottom:16px;">
            ${product.description}
          </p>

          <h4 style="font-size:1.05rem;margin-bottom:8px;color:var(--text-primary);">Caractéristiques & Spécifications</h4>
          <div style="background:var(--bg-tertiary);border-radius:var(--radius-sm);padding:16px;margin-bottom:16px;">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
              ${Object.entries(product.specs).map(([key, val]) => `
                <div>
                  <span style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;display:block;">${key}</span>
                  <strong style="font-size:0.875rem;color:var(--text-primary);">${val}</strong>
                </div>
              `).join('')}
            </div>
          </div>

          <h4 style="font-size:1.05rem;margin-bottom:8px;color:var(--text-primary);">Domaines d'application recommandés</h4>
          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            ${product.applications.map(app => `
              <span class="badge badge-outline" style="font-size:0.8rem;text-transform:none;">
                <i data-lucide="check" style="width:12px;height:12px;color:var(--accent-orange);"></i>
                ${app}
              </span>
            `).join('')}
          </div>
        </div>

        <div style="display:flex;gap:12px;">
          <button class="btn btn-primary" id="modalAddQuoteBtn" data-product-id="${product.id}" data-product-name="${product.name}" style="flex:1;">
            <i data-lucide="plus" style="width:18px;height:18px;"></i>
            <span>Ajouter à ma demande de devis</span>
          </button>
        </div>
      </div>
    </div>
  `;
}
