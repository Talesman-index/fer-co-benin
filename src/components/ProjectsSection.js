import { projectCategories, projects } from '../data/projects.js';

export function renderProjects(selectedFilter = 'all') {
  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  return `
    <section class="section" id="realisations" style="background:var(--bg-secondary);">
      <div class="container">
        <div class="section-header">
          <div class="badge badge-cyan" style="margin-bottom:12px;">Portefeuille de Réalisations</div>
          <h2>Chantiers & Projets Signés FER CO</h2>
          <p>
            Découvrez nos réalisations phares en Afrique de l'Ouest : hangars logistiques, complexes de bureaux modulaires et charpentes industrielles de haute technicité.
          </p>
        </div>

        <!-- Project Filter Buttons -->
        <div style="display:flex;justify-content:center;flex-wrap:wrap;gap:10px;margin-bottom:40px;">
          ${projectCategories.map(cat => `
            <button 
              class="category-chip ${selectedFilter === cat.id ? 'active' : ''}" 
              data-project-filter="${cat.id}"
            >
              <span>${cat.name}</span>
            </button>
          `).join('')}
        </div>

        <!-- Projects Grid -->
        <div class="grid-3">
          ${filteredProjects.map(proj => `
            <article class="project-card" data-project-id="${proj.id}">
              <div class="project-image">
                <img src="${proj.image}" alt="${proj.title}" loading="lazy" />
                <div style="position:absolute;top:12px;left:12px;background:rgba(10,13,17,0.85);backdrop-filter:blur(6px);padding:4px 10px;border-radius:var(--radius-xs);font-size:0.75rem;font-weight:700;color:#fff;border:1px solid var(--border-medium);">
                  ${proj.categoryName}
                </div>
                <div style="position:absolute;bottom:12px;right:12px;background:rgba(10,13,17,0.85);backdrop-filter:blur(6px);padding:4px 10px;border-radius:var(--radius-xs);font-size:0.75rem;font-weight:600;color:var(--accent-orange);">
                  ${proj.location} • ${proj.year}
                </div>
              </div>

              <div class="project-body">
                <div style="font-size:0.75rem;text-transform:uppercase;color:var(--text-muted);margin-bottom:6px;font-weight:600;">
                  Client : ${proj.client}
                </div>
                <h3 class="project-title">${proj.title}</h3>
                <p style="font-size:0.875rem;color:var(--text-secondary);margin-bottom:16px;">
                  ${proj.description}
                </p>

                <div class="product-specs-preview" style="margin-bottom:20px;">
                  ${Object.entries(proj.specs).slice(0, 2).map(([k, v]) => `
                    <div class="spec-line">
                      <span class="spec-label">${k} :</span>
                      <span class="spec-val">${v}</span>
                    </div>
                  `).join('')}
                </div>

                <button class="btn btn-secondary btn-sm btn-view-project" data-project-id="${proj.id}" style="width:100%;">
                  <i data-lucide="maximize-2" style="width:15px;height:15px;"></i>
                  <span>Fiche détaillée & Galerie</span>
                </button>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
