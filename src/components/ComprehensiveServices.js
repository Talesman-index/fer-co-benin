export function renderComprehensiveServices() {
  return `
    <section class="card-block-white" id="services">
      <div class="section-heading-centered">
        <h2>Une Gamme Complète de Services Industriels</h2>
        <p>Notre engagement envers la qualité, la sécurité et la satisfaction client fait de FER CO le partenaire privilégié du BTP au Bénin.</p>
      </div>

      <div class="bento-services-grid">
        <!-- Card 1 : Licensed & Insured -> Découpe & Pliage 3M -->
        <div class="bento-service-card">
          <div class="bento-icon-circle">
            <i data-lucide="scissors" style="width:24px;height:24px;"></i>
          </div>
          <h3 class="bento-card-title">Découpe & Pliage 3M</h3>
          <p class="bento-card-desc">Cisaillage et pliage de tôles d’acier jusqu’à 3 mètres de long et 8 mm d’épaisseur au millimètre près.</p>
        </div>

        <!-- Card 2 (CENTER DARK HIGHLIGHT CARD) : High-Quality Materials -> Matériaux Certifiés & Aluzinc -->
        <div class="bento-service-card dark-highlight">
          <div class="bento-icon-circle">
            <i data-lucide="shield-check" style="width:24px;height:24px;"></i>
          </div>
          <h3 class="bento-card-title">Aciers Certifiés & Aluzinc</h3>
          <p class="bento-card-desc">Alliages anticorrosion haute durabilité AZ150 et aciers de construction aux normes internationales.</p>
        </div>

        <!-- Card 3 : Free Estimates -> Devis & Étude sous 24h -->
        <div class="bento-service-card">
          <div class="bento-icon-circle">
            <i data-lucide="file-text" style="width:24px;height:24px;"></i>
          </div>
          <h3 class="bento-card-title">Devis Gratuit sous 24h</h3>
          <p class="bento-card-desc">Chiffrage technique précis, bordereaux quantitatifs et conseils d’optimisation sans engagement.</p>
        </div>

        <!-- Card 4 : Fast Turnaround -> Délais de Livraison Record -->
        <div class="bento-service-card">
          <div class="bento-icon-circle">
            <i data-lucide="zap" style="width:24px;height:24px;"></i>
          </div>
          <h3 class="bento-card-title">Délais de Livraison Record</h3>
          <p class="bento-card-desc">Stock permanent à Cotonou et capacité de déploiement de bases-vie et modules en quelques jours.</p>
        </div>

        <!-- Card 5 : Industry Warranty -> Conformité Eurocodes -->
        <div class="bento-service-card">
          <div class="bento-icon-circle">
            <i data-lucide="award" style="width:24px;height:24px;"></i>
          </div>
          <h3 class="bento-card-title">Conformité Eurocodes</h3>
          <p class="bento-card-desc">Calculs de descente de charges, résistance aux vents marins et garanties structurelles rigoureuses.</p>
        </div>

        <!-- Card 6 : Leading Warranty -> Bureau d'Études 3D -->
        <div class="bento-service-card">
          <div class="bento-icon-circle">
            <i data-lucide="cpu" style="width:24px;height:24px;"></i>
          </div>
          <h3 class="bento-card-title">Bureau d'Études & 3D</h3>
          <p class="bento-card-desc">Modélisation 3D complète, plans d’exécution d’atelier et supervision d’ingénierie sur site.</p>
        </div>
      </div>
    </section>
  `;
}
