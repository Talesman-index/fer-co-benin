export function renderFooter() {
  return `
    <footer class="footer-dark-card" id="contact">
      <!-- Top Row -->
      <div class="footer-top-row">
        <div>
          <h2 style="font-size:clamp(1.75rem, 3vw, 2.5rem);color:#ffffff;margin-bottom:12px;line-height:1.15;">
            Bâtissons l'Avenir<br />Ensemble
          </h2>
          <p style="font-size:0.95rem;color:var(--text-light-secondary);margin-bottom:24px;max-width:380px;">
            Confiez-nous votre cahier des charges. Nos ingénieurs vous répondent avec une proposition claire et optimisée sous 24h.
          </p>
          <button class="btn btn-primary" id="footerQuoteBtn">
            <span>Demander un devis</span>
            <i data-lucide="arrow-right" style="width:16px;height:16px;"></i>
          </button>
        </div>

        <div>
          <h4 style="font-size:0.9rem;text-transform:uppercase;color:#ffffff;letter-spacing:0.06em;margin-bottom:16px;">Siège & Ateliers</h4>
          <div style="font-size:0.875rem;color:var(--text-light-secondary);line-height:1.6;display:flex;flex-direction:column;gap:8px;">
            <div>Carré 6422 Ahogbo Howe</div>
            <div>Cité Eucharestie 3012D</div>
            <div>Cotonou, République du Bénin</div>
            <div style="margin-top:8px;">
              <a href="tel:+22999905555" style="color:var(--accent-orange);font-weight:700;">+229 99 90 55 55</a>
            </div>
            <div>
              <a href="mailto:info@fer-co.com" style="color:#ffffff;">info@fer-co.com</a>
            </div>
          </div>
        </div>

        <div>
          <h4 style="font-size:0.9rem;text-transform:uppercase;color:#ffffff;letter-spacing:0.06em;margin-bottom:16px;">Pôles d'Excellence</h4>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;font-size:0.875rem;color:var(--text-light-secondary);">
            <li><a href="#solutions" data-nav="solutions">01. Constructions & Modules</a></li>
            <li><a href="#produits" data-nav="produits">02. Produits Métallurgiques</a></li>
            <li><a href="#capacites" data-nav="capacites">03. Usinage, Découpe & 3D</a></li>
            <li><a href="#realisations" data-nav="realisations">04. Réalisations & Chantiers</a></li>
            <li><a href="#a-propos" data-nav="a-propos">05. À Propos de FER CO</a></li>
          </ul>
        </div>
      </div>

      <!-- Large Stylized Watermark Text (Exact match to reference image bottom) -->
      <div class="footer-watermark-text">
        FER CO ✦ STEEL & MORE ✦ COTONOU
      </div>
    </footer>
  `;
}
