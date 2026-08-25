import { projects } from '../data/projects.js';

export function renderClientsRealisations() {
  return `
    <section class="card-block-white" id="realisations">
      <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:20px;margin-bottom:32px;">
        <div>
          <h2 style="font-size:clamp(1.75rem, 3vw, 2.4rem);margin-bottom:8px;">Ce Que Nos Clients Disent de Notre Travail</h2>
          <p style="font-size:0.95rem;color:var(--text-dark-secondary);">
            Nous croyons que les grands ouvrages commencent avec des personnes d’expérience et de confiance.
          </p>
        </div>

        <button class="btn btn-dark btn-sm" id="btnViewAllProjects">
          <span>Tous les Projets</span>
          <i data-lucide="arrow-right" style="width:14px;height:14px;"></i>
        </button>
      </div>

      <!-- Avatar circles row (Exact match to reference design) -->
      <div class="clients-avatar-row">
        <div class="client-avatar-circle" title="Ingénieur Chantier BTP">
          <img src="/images/construction-worker-on-ladder-at-building-framewor-2026-01-09-00-02-46-utc.jpg" alt="Client 1" />
        </div>
        <div class="client-avatar-circle" title="Architecte Modulaire">
          <img src="/images/modern-constructed-apartment-building-block-house-2026-03-19-05-39-57-utc.jpg" alt="Client 2" />
        </div>
        <div class="client-avatar-circle" title="Directeur d'Usine">
          <img src="/images/workers-building-metal-structure-on-construction-s-2026-07-15-21-33-46-jpg.jpg" alt="Client 3" />
        </div>
        <div class="client-avatar-circle" title="Conducteur de Travaux">
          <img src="/images/team-male-and-female-engineers-in-a-metal-sheet-fa-2026-03-25-00-00-18-utc.jpg" alt="Client 4" />
        </div>
      </div>

      <!-- Project Cards Grid -->
      <div class="pillars-grid-3" style="margin-top:36px;">
        ${projects.slice(0, 3).map(p => `
          <div class="card-glass btn-view-project" data-project-id="${p.id}" style="padding:0;overflow:hidden;border:1px solid var(--border-light);background:var(--bg-card-subtle);cursor:pointer;">
            <div style="height:190px;overflow:hidden;position:relative;">
              <img src="${p.image}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;" />
              <span class="pillar-top-tag" style="top:12px;left:12px;">${p.categoryName}</span>
            </div>
            <div style="padding:20px;">
              <div style="font-size:0.75rem;color:var(--text-dark-muted);font-weight:600;margin-bottom:4px;">${p.location} • ${p.client}</div>
              <h3 style="font-size:1.1rem;margin-bottom:8px;color:var(--text-dark-primary);">${p.title}</h3>
              <p style="font-size:0.8125rem;color:var(--text-dark-secondary);line-height:1.4;margin-bottom:12px;">${p.description}</p>
              <div style="display:flex;align-items:center;gap:6px;font-size:0.8125rem;font-weight:700;color:var(--accent-orange);">
                <span>Voir les spécifications</span>
                <i data-lucide="arrow-up-right" style="width:14px;height:14px;"></i>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}
