export function renderQuoteModal(selectedProducts = []) {
  return `
    <div class="modal-overlay" id="quoteModalOverlay">
      <div class="modal-window">
        <button class="modal-close-btn" id="closeQuoteModalBtn" aria-label="Fermer la modale">
          <i data-lucide="x" style="width:18px;height:18px;"></i>
        </button>

        <div style="margin-bottom:24px;">
          <div class="badge" style="margin-bottom:8px;">Configurateur Express</div>
          <h3 style="font-size:1.6rem;margin-bottom:6px;">Demande de Devis Personnalisé</h3>
          <p style="font-size:0.875rem;color:var(--text-secondary);">
            Recevez un chiffrage technique et commercial sous 24h par notre équipe d’ingénieurs à Cotonou.
          </p>
        </div>

        <form id="quoteModalForm" onsubmit="event.preventDefault();">
          <!-- Pôle & Catégorie -->
          <div class="form-group">
            <label class="form-label" for="quoteDomain">Domaine principal de votre besoin *</label>
            <select id="quoteDomain" class="form-select">
              <option value="Produits Métallurgiques (Tôles, Fers, Tubes, Poutres...)">01. Produits Métallurgiques & Découpe</option>
              <option value="Bâtiments Modulaires & Conteneurs">02. Bungalows, Modules & Bases-Vie</option>
              <option value="Charpentes & Hangars Métalliques">03. Hangars & Structures Industrielles</option>
              <option value="Services d'Usinage & Découpe/Pliage 3M">04. Prestation d’Usinage (Pliage, Perçage, Cintrage)</option>
              <option value="Projet Global Clé en Main">05. Projet Global Clé en Main</option>
            </select>
          </div>

          <!-- Articles sélectionnés du catalogue -->
          <div class="form-group" id="quoteSelectedItemsContainer">
            <label class="form-label">Articles ou références ajoutés depuis le catalogue :</label>
            <div id="quoteCartItemsList" style="background:var(--bg-tertiary);border-radius:var(--radius-sm);padding:12px;border:1px solid var(--border-subtle);min-height:50px;">
              ${selectedProducts.length === 0 
                ? `<span style="font-size:0.8125rem;color:var(--text-muted);font-style:italic;">Aucun produit spécifique ajouté (vous pouvez décrire votre besoin ci-dessous).</span>` 
                : selectedProducts.map(p => `
                  <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
                    <span style="font-size:0.85rem;font-weight:600;color:var(--text-primary);">${p.name}</span>
                    <button type="button" class="btn-remove-quote-item" data-product-id="${p.id}" style="background:none;border:none;color:var(--accent-orange);cursor:pointer;font-size:0.8rem;">Retirer</button>
                  </div>
                `).join('')
              }
            </div>
          </div>

          <!-- Coordonnées Client -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;" class="form-row-2">
            <div class="form-group">
              <label class="form-label" for="quoteClientName">Nom / Société *</label>
              <input type="text" id="quoteClientName" class="form-input" placeholder="Ex: Jean Houngbo (SOGEB)" required />
            </div>
            <div class="form-group">
              <label class="form-label" for="quoteClientPhone">Téléphone / WhatsApp *</label>
              <input type="tel" id="quoteClientPhone" class="form-input" placeholder="+229 ..." required />
            </div>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;" class="form-row-2">
            <div class="form-group">
              <label class="form-label" for="quoteClientEmail">Email</label>
              <input type="email" id="quoteClientEmail" class="form-input" placeholder="contact@entreprise.com" />
            </div>
            <div class="form-group">
              <label class="form-label" for="quoteLocation">Lieu du chantier</label>
              <input type="text" id="quoteLocation" class="form-input" placeholder="Ex: Cotonou, Porto-Novo, Parakou..." />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="quoteNotes">Spécifications, dimensions & quantités souhaitées *</label>
            <textarea id="quoteNotes" class="form-textarea" rows="3" placeholder="Indiquez les dimensions (ex: 20x40m), épaisseurs, quantités de tôles, délais..." required></textarea>
          </div>

          <div style="display:flex;gap:12px;margin-top:8px;">
            <button type="submit" class="btn btn-primary" id="submitQuoteModalBtn" style="flex:1;">
              <i data-lucide="check" style="width:18px;height:18px;"></i>
              <span>Valider ma demande de devis</span>
            </button>
          </div>

          <div id="quoteModalSuccess" style="display:none;margin-top:16px;padding:16px;background:rgba(16,185,129,0.15);border:1px solid #10b981;border-radius:var(--radius-sm);color:#10b981;font-size:0.875rem;text-align:center;">
            🎉 <strong>Demande enregistrée !</strong> Notre bureau d'études prépare votre proposition technique et commerciale.
          </div>
        </form>
      </div>
    </div>
  `;
}
