export function renderAudiences() {
  return `
    <section class="section" style="background:var(--bg-primary);">
      <div class="container">
        <div class="section-header">
          <div class="badge" style="margin-bottom:12px;">Secteurs & Clients Cibles</div>
          <h2>Des Réponses Adaptées à Vos Enjeux Spécifiques</h2>
          <p>
            Que vous soyez une entreprise générale de BTP, une institution internationale ou un particulier exigeant, FER CO adapte ses process et son accompagnement.
          </p>
        </div>

        <div class="grid-3">
          <!-- B2B -->
          <div class="card-glass">
            <div style="width:48px;height:48px;border-radius:var(--radius-sm);background:rgba(255,87,34,0.12);display:flex;align-items:center;justify-content:center;margin-bottom:20px;border:1px solid rgba(255,87,34,0.3);">
              <i data-lucide="building-2" style="width:24px;height:24px;color:var(--accent-orange);"></i>
            </div>
            <h3 style="font-size:1.4rem;margin-bottom:12px;">Entreprises, BTP & Promoteurs</h3>
            <p style="font-size:0.92rem;color:var(--text-secondary);margin-bottom:20px;">
              Approvisionnement en gros volumes de profilés certifiés, fabrication de charpentes sur plans d’ingénierie et bases-vie clés en main avec respect scrupuleux des plannings de chantier.
            </p>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;font-size:0.84rem;color:var(--text-primary);margin-bottom:24px;">
              <li style="display:flex;align-items:center;gap:8px;">
                <i data-lucide="check" style="width:14px;height:14px;color:var(--accent-orange);"></i>
                <span>Disponibilité immédiate sur stock à Cotonou</span>
              </li>
              <li style="display:flex;align-items:center;gap:8px;">
                <i data-lucide="check" style="width:14px;height:14px;color:var(--accent-orange);"></i>
                <span>Découpe et pliage numérique sur mesure</span>
              </li>
              <li style="display:flex;align-items:center;gap:8px;">
                <i data-lucide="check" style="width:14px;height:14px;color:var(--accent-orange);"></i>
                <span>Gestion logistique et livraison sur site</span>
              </li>
            </ul>
            <button class="btn btn-outline btn-sm btn-quote-audience" data-audience="B2B / BTP" style="width:100%;">
              <span>Espace Professionnels BTP</span>
            </button>
          </div>

          <!-- Institutions -->
          <div class="card-glass">
            <div style="width:48px;height:48px;border-radius:var(--radius-sm);background:rgba(0,210,255,0.12);display:flex;align-items:center;justify-content:center;margin-bottom:20px;border:1px solid rgba(0,210,255,0.3);">
              <i data-lucide="landmark" style="width:24px;height:24px;color:var(--accent-cyan);"></i>
            </div>
            <h3 style="font-size:1.4rem;margin-bottom:12px;">Institutions, Collectivités & ONG</h3>
            <p style="font-size:0.92rem;color:var(--text-secondary);margin-bottom:20px;">
              Déploiement d’urgences de postes médicaux modulaires, écoles, camps sécurisés, sanitaires collectifs et guérites de contrôle conformes aux cahiers des charges institutionnels.
            </p>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;font-size:0.84rem;color:var(--text-primary);margin-bottom:24px;">
              <li style="display:flex;align-items:center;gap:8px;">
                <i data-lucide="check" style="width:14px;height:14px;color:var(--accent-cyan);"></i>
                <span>Installation rapide en zones isolées</span>
              </li>
              <li style="display:flex;align-items:center;gap:8px;">
                <i data-lucide="check" style="width:14px;height:14px;color:var(--accent-cyan);"></i>
                <span>Normes d'hygiène et sécurité strictes</span>
              </li>
              <li style="display:flex;align-items:center;gap:8px;">
                <i data-lucide="check" style="width:14px;height:14px;color:var(--accent-cyan);"></i>
                <span>Mobilité et réutilisation des modules</span>
              </li>
            </ul>
            <button class="btn btn-outline btn-sm btn-quote-audience" data-audience="Institutions / ONG" style="width:100%;">
              <span>Espace Institutions & ONG</span>
            </button>
          </div>

          <!-- Particuliers -->
          <div class="card-glass">
            <div style="width:48px;height:48px;border-radius:var(--radius-sm);background:rgba(245,158,11,0.12);display:flex;align-items:center;justify-content:center;margin-bottom:20px;border:1px solid rgba(245,158,11,0.3);">
              <i data-lucide="home" style="width:24px;height:24px;color:var(--accent-gold);"></i>
            </div>
            <h3 style="font-size:1.4rem;margin-bottom:12px;">Particuliers & Bâtisseurs Privés</h3>
            <p style="font-size:0.92rem;color:var(--text-secondary);margin-bottom:20px;">
              Maisons contemporaines à ossature acier, toitures en bac Aluzinc longue durée, clôtures et portails en fer forgé sur mesure avec devis clair et transparent.
            </p>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;font-size:0.84rem;color:var(--text-primary);margin-bottom:24px;">
              <li style="display:flex;align-items:center;gap:8px;">
                <i data-lucide="check" style="width:14px;height:14px;color:var(--accent-gold);"></i>
                <span>Conseil personnalisé et choix des matériaux</span>
              </li>
              <li style="display:flex;align-items:center;gap:8px;">
                <i data-lucide="check" style="width:14px;height:14px;color:var(--accent-gold);"></i>
                <span>Durabilité maximale sous climat tropical</span>
              </li>
              <li style="display:flex;align-items:center;gap:8px;">
                <i data-lucide="check" style="width:14px;height:14px;color:var(--accent-gold);"></i>
                <span>Délais d’exécution record</span>
              </li>
            </ul>
            <button class="btn btn-outline btn-sm btn-quote-audience" data-audience="Particuliers" style="width:100%;">
              <span>Projet Résidentiel & Particulier</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}
