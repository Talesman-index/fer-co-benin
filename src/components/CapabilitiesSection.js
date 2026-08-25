import { technicalCapabilities } from '../data/services.js';

export function renderCapabilities() {
  return `
    <section class="section" id="capacites" style="background:var(--bg-secondary);position:relative;">
      <div class="container">
        <div class="capabilities-banner">
          <div style="display:grid;grid-template-columns:1fr 1.1fr;gap:48px;align-items:center;margin-bottom:48px;">
            <div>
              <div class="badge" style="margin-bottom:12px;">
                <i data-lucide="cpu" style="width:14px;height:14px;"></i>
                <span>Parc Industriel & Haute Précision</span>
              </div>
              <h2 style="font-size:clamp(2rem, 3.2vw, 2.75rem);margin-bottom:16px;">
                La puissance de nos capacités techniques à votre service
              </h2>
              <p style="color:#cbd5e1;font-size:1.05rem;line-height:1.6;margin-bottom:24px;">
                Grâce à un outillage industriel de pointe et une maîtrise éprouvée des métaux, FER CO transforme des bobines brutes et profilés lourds en ouvrages d’art métalliques au millimètre près.
              </p>
              <ul style="list-style:none;display:flex;flex-direction:column;gap:12px;color:var(--text-primary);font-weight:500;">
                <li style="display:flex;align-items:center;gap:10px;">
                  <i data-lucide="check" style="color:var(--accent-orange);width:18px;height:18px;"></i>
                  <span>Transformation de bobines d'acier en tôles ondulées et bacs nervurés</span>
                </li>
                <li style="display:flex;align-items:center;gap:10px;">
                  <i data-lucide="check" style="color:var(--accent-orange);width:18px;height:18px;"></i>
                  <span>Laminage de tôles, barres plates et tubes jusqu'à 2,5 m et 8 mm</span>
                </li>
                <li style="display:flex;align-items:center;gap:10px;">
                  <i data-lucide="check" style="color:var(--accent-orange);width:18px;height:18px;"></i>
                  <span>Bureau d’ingénierie intégré pour dimensionnement selon les Eurocodes</span>
                </li>
              </ul>
            </div>

            <div style="position:relative;border-radius:var(--radius-md);overflow:hidden;border:1px solid var(--border-medium);box-shadow:var(--shadow-lg);">
              <img 
                src="/images/team-male-and-female-engineers-in-a-metal-sheet-fa-2026-03-25-00-00-18-utc.jpg" 
                alt="Équipe d'ingénieurs en usine métallurgique FER CO" 
                style="width:100%;height:380px;object-fit:cover;display:block;"
              />
              <div style="position:absolute;bottom:0;left:0;width:100%;background:linear-gradient(0deg, rgba(10,13,17,0.95), transparent);padding:24px;">
                <span class="badge badge-cyan" style="margin-bottom:6px;">Contrôle Qualité & Métallurgie</span>
                <p style="color:#f8fafc;font-size:0.95rem;font-weight:600;margin:0;">
                  Ateliers de production & équipes d’ingénierie basés à Cotonou
                </p>
              </div>
            </div>
          </div>

          <!-- Métriques Industrielles Visuelles -->
          <div class="grid-4">
            ${technicalCapabilities.map(cap => `
              <div class="capability-stat-box">
                <div class="capability-val">${cap.value}</div>
                <div class="capability-title">${cap.label}</div>
                <div class="capability-sub">${cap.subtext}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}
