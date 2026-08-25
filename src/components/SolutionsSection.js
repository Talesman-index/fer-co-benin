import { solutionsCategories } from '../data/solutions.js';

export function renderSolutions() {
  return `
    <section class="section" id="solutions" style="background:var(--bg-primary);">
      <div class="container">
        <div class="section-header">
          <div class="badge" style="margin-bottom:12px;">Pôle 01 • Constructions & Productions</div>
          <h2>Bungalows, Modules Préfabriqués & Charpentes Métalliques</h2>
          <p>
            Des solutions constructives sur-mesure, économiques, déployables à une vitesse incomparable et adaptées aux environnements exigeants.
          </p>
        </div>

        <div style="display:flex;flex-direction:column;gap:64px;">
          ${solutionsCategories.map((sol, index) => `
            <div class="card-glass" style="padding:0;overflow:hidden;">
              <div style="display:grid;grid-template-columns:${index % 2 === 0 ? '1.1fr 1fr' : '1fr 1.1fr'};gap:0;" class="solution-item-grid">
                
                <div style="padding:48px;display:flex;flex-direction:column;justify-content:center;order:${index % 2 === 0 ? 1 : 2};">
                  <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
                    <span class="badge badge-cyan">${sol.num}</span>
                    <span style="font-size:0.875rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-secondary);font-weight:700;">${sol.subtitle}</span>
                  </div>

                  <h3 style="font-size:1.85rem;margin-bottom:16px;">${sol.title}</h3>
                  <p style="margin-bottom:28px;font-size:1rem;color:var(--text-secondary);line-height:1.6;">
                    ${sol.description}
                  </p>

                  <div style="display:grid;grid-template-columns:1fr;gap:16px;margin-bottom:32px;">
                    ${sol.items.map(it => `
                      <div style="background:var(--bg-tertiary);border:1px solid var(--border-subtle);border-radius:var(--radius-sm);padding:16px;">
                        <h4 style="font-size:1.05rem;color:var(--text-primary);margin-bottom:6px;display:flex;align-items:center;gap:8px;">
                          <i data-lucide="check-circle-2" style="width:16px;height:16px;color:var(--accent-orange);"></i>
                          ${it.title}
                        </h4>
                        <p style="font-size:0.875rem;color:var(--text-secondary);margin-bottom:8px;">${it.desc}</p>
                        <div style="display:flex;flex-wrap:wrap;gap:6px;">
                          ${it.specs.map(sp => `
                            <span style="font-size:0.75rem;padding:2px 8px;background:rgba(255,255,255,0.05);border-radius:var(--radius-xs);color:var(--text-primary);">
                              ${sp}
                            </span>
                          `).join('')}
                        </div>
                      </div>
                    `).join('')}
                  </div>

                  <div style="display:flex;align-items:center;gap:16px;">
                    <button class="btn btn-primary btn-sm btn-quote-solution" data-solution-title="${sol.title}">
                      <i data-lucide="calculator" style="width:16px;height:16px;"></i>
                      <span>Devis pour ${sol.title}</span>
                    </button>
                  </div>
                </div>

                <div style="position:relative;min-height:360px;order:${index % 2 === 0 ? 2 : 1};">
                  <img 
                    src="${sol.image}" 
                    alt="${sol.title}" 
                    style="width:100%;height:100%;object-fit:cover;min-height:360px;display:block;"
                  />
                  <div style="position:absolute;inset:0;background:linear-gradient(180deg, transparent 40%, rgba(10,13,17,0.85) 100%);"></div>
                  
                  <div style="position:absolute;bottom:24px;left:24px;right:24px;display:flex;flex-wrap:wrap;gap:8px;">
                    ${sol.advantages.map(adv => `
                      <span class="badge" style="background:rgba(10,13,17,0.85);backdrop-filter:blur(8px);border-color:var(--border-medium);color:#fff;">
                        <i data-lucide="check" style="width:12px;height:12px;color:var(--accent-orange);"></i>
                        ${adv}
                      </span>
                    `).join('')}
                  </div>
                </div>

              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
