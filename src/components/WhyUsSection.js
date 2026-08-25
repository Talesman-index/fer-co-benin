export function renderWhyUs() {
  const reasons = [
    {
      icon: 'sliders',
      title: 'Sur-Mesure & Personnalisation',
      desc: 'Chaque projet est dimensionné, découpé et façonné selon vos contraintes géométriques et vos spécifications exactes.'
    },
    {
      icon: 'zap',
      title: 'Rapidité de Déploiement',
      desc: 'Les modules préfabriqués et la pré-fabrication d’ossatures réduisent jusqu’à 70% le temps de présence sur le chantier.'
    },
    {
      icon: 'shield-check',
      title: 'Durabilité & Résistance Marine',
      desc: 'Alliages Aluzinc AZ150, galvanisation à chaud et aciers haute ductilité conçus pour affronter l’humidité et les embruns.'
    },
    {
      icon: 'award',
      title: '+20 Ans de Savoir-Faire',
      desc: 'Une équipe d’ingénieurs en calcul de structure et de maîtres chaudronniers hautement qualifiés à Cotonou.'
    },
    {
      icon: 'user-check',
      title: 'Accompagnement de Bout en Bout',
      desc: 'De la note de calcul initiale à la livraison par grue et au boulonnage sur site, bénéficiez d’un interlocuteur unique.'
    },
    {
      icon: 'leaf',
      title: 'Éco-Construction & Acier Vert',
      desc: 'L’acier est 100% recyclable à l’infini. Nos procédés constructifs à sec minimisent l’usage d’eau et de déchets de chantier.'
    }
  ];

  return `
    <section class="section" id="a-propos" style="background:var(--bg-secondary);">
      <div class="container">
        <div class="section-header">
          <div class="badge" style="margin-bottom:12px;">Pourquoi Choisir FER CO</div>
          <h2>L'Excellence Industrielle au Service de Vos Ambitions</h2>
          <p>
            Fondée en 2020 à Cotonou, FER CO s’est imposée comme le partenaire sidérurgique et constructeur de référence au Bénin.
          </p>
        </div>

        <div class="grid-3" style="margin-bottom:48px;">
          ${reasons.map(r => `
            <div class="card-glass" style="padding:28px;">
              <div style="width:44px;height:44px;border-radius:var(--radius-sm);background:rgba(255,87,34,0.1);display:flex;align-items:center;justify-content:center;margin-bottom:16px;border:1px solid rgba(255,87,34,0.25);">
                <i data-lucide="${r.icon}" style="width:22px;height:22px;color:var(--accent-orange);"></i>
              </div>
              <h3 style="font-size:1.18rem;margin-bottom:8px;">${r.title}</h3>
              <p style="font-size:0.875rem;color:var(--text-secondary);line-height:1.5;">${r.desc}</p>
            </div>
          `).join('')}
        </div>

        <!-- Vision Banner -->
        <div class="card-glass" style="background:linear-gradient(135deg, rgba(255,87,34,0.12), rgba(18,23,30,0.9));border-color:rgba(255,87,34,0.3);padding:40px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:24px;">
          <div style="max-width:700px;">
            <span class="badge" style="margin-bottom:8px;background:#fff;color:var(--accent-orange);border:none;">Notre Vision</span>
            <h3 style="font-size:1.6rem;margin-bottom:8px;color:#fff;">« Construire un monde meilleur »</h3>
            <p style="color:#e2e8f0;font-size:1rem;margin:0;">
              En conjuguant relations de confiance, responsabilité environnementale et rigueur technique, nous bâtissons les infrastructures de demain au Bénin.
            </p>
          </div>
          <button class="btn btn-primary btn-lg" id="whyUsQuoteBtn">
            <span>Démarrer un projet</span>
            <i data-lucide="arrow-right" style="width:18px;height:18px;"></i>
          </button>
        </div>
      </div>
    </section>
  `;
}
