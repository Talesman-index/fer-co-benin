export function renderManufacturingDarkSection(activeTab = 0) {
  const tabs = [
    {
      num: '01',
      title: 'Découpe & Pliage Numérique 3M',
      content: 'Cisaillage guillotine et pliage CNC d’acier doux, galvanisé et inox jusqu’à 3m de longueur et 8mm d’épaisseur. Formage de rives, faîtières et profils sur mesure pour toitures.',
      image: '/images/team-male-and-female-engineers-in-a-metal-sheet-fa-2026-03-25-00-00-18-utc.jpg',
      specsTitle: 'Précision Industrielle',
      specsDesc: 'Tolérances au dixième de millimètre et cadences élevées pour vos séries.'
    },
    {
      num: '02',
      title: 'Bâtiments Modulaires & Bases-Vie',
      content: 'Assemblage de conteneurs 20ft et 40ft aménagés, modules sanitaires autonomes et bureaux de chantier isolés thermiquement avec panneaux sandwichs.',
      image: '/images/building-under-construction-2026-03-10-02-08-51-utc.jpg',
      specsTitle: 'Déploiement Express',
      specsDesc: 'Montage sur site en 24h à 48h prêt à brancher (électricité et plomberie).'
    },
    {
      num: '03',
      title: 'Charpentes & Hangars Métalliques',
      content: 'Fabrication de structures lourdes monopente ou double pente avec poutrelles IPE/HEA pour portées libres jusqu’à 40 mètres sans poteau central.',
      image: '/images/metal-frames-being-constructed-on-a-building-site-2026-03-27-01-30-54-utc.JPG',
      specsTitle: 'Grandes Portées',
      specsDesc: 'Calculs certifiés selon les Eurocodes et adaptation aux vents marins.'
    },
    {
      num: '04',
      title: 'Panneaux Sandwichs & Toitures Aluzinc',
      content: 'Fourniture et pose de solutions d’isolation thermique PUR et laine de roche pour entrepôts climatisés, chambres froides et toitures résidentielles.',
      image: '/images/urban-geometry-the-squares-and-rectangle-shapes-o-2026-07-15-21-36-29-utc.jpg',
      specsTitle: 'Isolation & Anti-Corrosion',
      specsDesc: 'Réduction de 70% des apports thermiques sous climat tropical.'
    }
  ];

  const currentTab = tabs[activeTab] || tabs[0];

  return `
    <section class="card-block-dark" id="capacites">
      <div class="section-heading-centered" style="margin-bottom:48px;">
        <h2 style="color:#ffffff;">Services de Fabrication Façonnés pour Vous</h2>
        <p style="color:var(--text-light-secondary);">
          Notre priorité : livrer des solutions métallurgiques haute performance, rentables et adaptées à vos besoins spécifiques.
        </p>
      </div>

      <div class="manufacturing-layout">
        <!-- Accordion List -->
        <div class="mfg-accordion-list">
          ${tabs.map((tab, idx) => `
            <div class="mfg-accordion-item ${idx === activeTab ? 'active' : ''}" data-mfg-idx="${idx}">
              <div class="mfg-item-header">
                <div class="mfg-num-title">
                  <span class="mfg-num">${tab.num}</span>
                  <span class="mfg-title">${tab.title}</span>
                </div>
                <div class="mfg-toggle-icon">
                  <i data-lucide="${idx === activeTab ? 'chevron-up' : 'chevron-down'}" style="width:16px;height:16px;"></i>
                </div>
              </div>
              <div class="mfg-item-content">
                ${tab.content}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Featured Photo & Floating Specs Card -->
        <div class="mfg-photo-wrapper">
          <img src="${currentTab.image}" alt="${currentTab.title}" id="mfgFeaturedImg" />
          <div class="mfg-floating-specs-card">
            <div class="mfg-specs-title" id="mfgSpecsTitle">${currentTab.specsTitle}</div>
            <div class="mfg-specs-desc" id="mfgSpecsDesc">${currentTab.specsDesc}</div>
          </div>
        </div>
      </div>
    </section>
  `;
}
