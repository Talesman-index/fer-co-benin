export function renderProjectDetailModal(project) {
  if (!project) return '';
  return `
    <div class="modal-overlay open" id="projectDetailModalOverlay">
      <div class="modal-window" style="max-width:800px;">
        <button class="modal-close-btn" id="closeProjectDetailBtn" aria-label="Fermer la fiche projet">
          <i data-lucide="x" style="width:18px;height:18px;"></i>
        </button>

        <div style="height:320px;border-radius:var(--radius-sm);overflow:hidden;margin-bottom:24px;position:relative;">
          <img src="${project.image}" alt="${project.title}" style="width:100%;height:100%;object-fit:cover;" />
          <div style="position:absolute;bottom:0;left:0;width:100%;background:linear-gradient(0deg, rgba(10,13,17,0.95), transparent);padding:24px;">
            <span class="badge badge-cyan" style="margin-bottom:6px;">${project.categoryName}</span>
            <h3 style="font-size:1.6rem;color:#fff;margin:0;">${project.title}</h3>
          </div>
        </div>

        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid var(--border-subtle);">
          <div style="font-size:0.875rem;color:var(--text-secondary);">
            Localisation : <strong style="color:var(--text-primary);">${project.location}</strong>
          </div>
          <div style="font-size:0.875rem;color:var(--text-secondary);">
            Année : <strong style="color:var(--text-primary);">${project.year}</strong>
          </div>
          <div style="font-size:0.875rem;color:var(--text-secondary);">
            Client : <strong style="color:var(--accent-orange);">${project.client}</strong>
          </div>
        </div>

        <div style="margin-bottom:24px;">
          <h4 style="font-size:1.05rem;margin-bottom:8px;color:var(--text-primary);">Contexte & Défi du Projet</h4>
          <p style="font-size:0.92rem;color:var(--text-secondary);line-height:1.6;margin-bottom:20px;">
            ${project.description}
          </p>

          <h4 style="font-size:1.05rem;margin-bottom:8px;color:var(--text-primary);">Spécifications & Données d'Ingénierie</h4>
          <div style="background:var(--bg-tertiary);border-radius:var(--radius-sm);padding:18px;">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
              ${Object.entries(project.specs).map(([key, val]) => `
                <div>
                  <span style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;display:block;">${key}</span>
                  <strong style="font-size:0.875rem;color:var(--text-primary);">${val}</strong>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div style="display:flex;gap:12px;">
          <button class="btn btn-primary" id="modalProjectQuoteBtn" data-project-name="${project.title}" style="flex:1;">
            <i data-lucide="calculator" style="width:18px;height:18px;"></i>
            <span>Demander une étude similaire</span>
          </button>
        </div>
      </div>
    </div>
  `;
}
