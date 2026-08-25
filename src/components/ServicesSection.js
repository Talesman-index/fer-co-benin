import { services } from '../data/services.js';

export function renderServices() {
  return `
    <section class="section" id="services" style="background:var(--bg-primary);">
      <div class="container">
        <div class="section-header">
          <div class="badge" style="margin-bottom:12px;">Pôle 03 • Services & Usinage</div>
          <h2>Transformation Métallique & Accompagnement Projets</h2>
          <p>
            De l’ingénierie 3D en amont jusqu’à la supervision du montage sur le terrain, nos experts vous accompagnent à chaque étape de votre chantier.
          </p>
        </div>

        <div class="grid-3">
          ${services.map(srv => `
            <div class="card-glass" style="display:flex;flex-direction:column;">
              <div style="height:180px;border-radius:var(--radius-sm);overflow:hidden;margin-bottom:20px;position:relative;">
                <img src="${srv.image}" alt="${srv.title}" style="width:100%;height:100%;object-fit:cover;" />
                <div style="position:absolute;top:12px;right:12px;background:rgba(10,13,17,0.85);backdrop-filter:blur(6px);padding:6px;border-radius:var(--radius-xs);border:1px solid var(--border-subtle);">
                  <i data-lucide="${srv.icon}" style="width:20px;height:20px;color:var(--accent-orange);display:block;"></i>
                </div>
              </div>

              <h3 style="font-size:1.35rem;margin-bottom:10px;">${srv.title}</h3>
              <p style="font-size:0.9rem;margin-bottom:18px;flex-grow:1;">${srv.shortDesc}</p>

              <div style="background:var(--bg-tertiary);border-radius:var(--radius-xs);padding:14px;margin-bottom:24px;">
                <div style="font-size:0.75rem;text-transform:uppercase;font-weight:700;letter-spacing:0.08em;color:var(--accent-cyan);margin-bottom:8px;">
                  Prestations incluses :
                </div>
                <ul style="list-style:none;display:flex;flex-direction:column;gap:6px;font-size:0.8125rem;color:var(--text-secondary);">
                  ${srv.deliverables.map(del => `
                    <li style="display:flex;align-items:flex-start;gap:8px;">
                      <i data-lucide="check" style="width:14px;height:14px;color:var(--accent-orange);flex-shrink:0;margin-top:2px;"></i>
                      <span>${del}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <button class="btn btn-secondary btn-sm btn-quote-service" data-service-title="${srv.title}" style="width:100%;">
                <i data-lucide="message-square" style="width:15px;height:15px;"></i>
                <span>Demander une étude technique</span>
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
