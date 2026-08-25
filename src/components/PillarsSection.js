export function renderPillars() {
  return `
    <section class="card-block-white" id="solutions">
      <div class="section-heading-centered">
        <h2>Ce Que Nous Bâtissons, Nous le Faisons avec Rigueur</h2>
        <p>Des solutions métalliques et modulaires pensées pour durer, conçues avec précision et livrées clé en main.</p>
      </div>

      <div class="pillars-grid-3">
        <!-- Card 1 : Consultation & Planning -> Constructions & Modules -->
        <div class="pillar-tall-card" data-pillar-id="modules">
          <img 
            src="/images/building-under-construction-2026-03-10-02-08-51-utc.jpg" 
            alt="Bungalows & Conteneurs aménagés FER CO" 
            class="pillar-card-img" 
          />
          <div class="pillar-top-tag">Préfabriqué & Rapide</div>
          <div class="pillar-bottom-caption">
            <div class="pillar-caption-title">01. Modules & Conteneurs</div>
            <div class="pillar-caption-desc">Bases-vie de chantier, sanitaires autonomes et guérites de sécurité déployables en 24h.</div>
          </div>
        </div>

        <!-- Card 2 : Design & Prototyping -> Bâtiments & Charpentes -->
        <div class="pillar-tall-card" data-pillar-id="structures">
          <img 
            src="/images/metal-frames-being-constructed-on-a-building-site-2026-03-27-01-30-54-utc.JPG" 
            alt="Charpentes et Hangars métalliques" 
            class="pillar-card-img" 
          />
          <div class="pillar-top-tag">Grandes Portées</div>
          <div class="pillar-bottom-caption">
            <div class="pillar-caption-title">02. Structures & Hangars</div>
            <div class="pillar-caption-desc">Entrepôts logistiques, ateliers et bureaux modulaires sur mesure selon les Eurocodes.</div>
          </div>
        </div>

        <!-- Card 3 : Manufacturing & Testing -> Produits Métallurgiques -->
        <div class="pillar-tall-card" data-pillar-id="produits">
          <img 
            src="/images/urban-geometry-the-squares-and-rectangle-shapes-o-2026-07-15-21-36-29-utc.jpg" 
            alt="Panneaux sandwichs et bacs Aluzinc" 
            class="pillar-card-img" 
          />
          <div class="pillar-top-tag">Stock & Sidérurgie</div>
          <div class="pillar-bottom-caption">
            <div class="pillar-caption-title">03. Produits Métallurgiques</div>
            <div class="pillar-caption-desc">Bac Aluzinc AZ150, panneaux sandwichs PUR, fers à béton HA et tubes profilés.</div>
          </div>
        </div>
      </div>
    </section>
  `;
}
