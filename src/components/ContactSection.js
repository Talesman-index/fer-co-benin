export function renderContact() {
  return `
    <section class="section" id="contact" style="background:var(--bg-primary);">
      <div class="container">
        <div class="section-header">
          <div class="badge badge-cyan" style="margin-bottom:12px;">Contact & Échange Direct</div>
          <h2>Parlons de Votre Prochain Projet</h2>
          <p>
            Nos ingénieurs et technico-commerciaux sont à votre disposition pour étudier vos plans, vous conseiller et établir un devis détaillé sous 24h.
          </p>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1.2fr;gap:40px;" class="contact-grid">
          <!-- Coordonnées & Infos -->
          <div style="display:flex;flex-direction:column;gap:24px;">
            <div class="card-glass" style="padding:32px;">
              <h3 style="font-size:1.35rem;margin-bottom:20px;display:flex;align-items:center;gap:10px;">
                <i data-lucide="map-pin" style="color:var(--accent-orange);width:22px;height:22px;"></i>
                <span>Siège & Ateliers FER CO</span>
              </h3>

              <div style="display:flex;flex-direction:column;gap:18px;font-size:0.95rem;">
                <div>
                  <div style="color:var(--text-muted);font-size:0.8rem;text-transform:uppercase;font-weight:700;margin-bottom:4px;">Adresse</div>
                  <div style="color:var(--text-primary);font-weight:600;">Carré 6422 Ahogbo Howe, Cité Eucharestie 3012D</div>
                  <div style="color:var(--text-secondary);">Cotonou, République du Bénin</div>
                </div>

                <div>
                  <div style="color:var(--text-muted);font-size:0.8rem;text-transform:uppercase;font-weight:700;margin-bottom:4px;">Téléphone & WhatsApp</div>
                  <a href="tel:+22999905555" style="color:var(--accent-orange);font-weight:700;font-size:1.1rem;display:inline-flex;align-items:center;gap:6px;">
                    <i data-lucide="phone-call" style="width:16px;height:16px;"></i>
                    +229 99 90 55 55
                  </a>
                </div>

                <div>
                  <div style="color:var(--text-muted);font-size:0.8rem;text-transform:uppercase;font-weight:700;margin-bottom:4px;">Courriel</div>
                  <a href="mailto:info@fer-co.com" style="color:var(--text-primary);text-decoration:underline;">
                    info@fer-co.com
                  </a>
                </div>

                <div>
                  <div style="color:var(--text-muted);font-size:0.8rem;text-transform:uppercase;font-weight:700;margin-bottom:4px;">Horaires d'Ouverture</div>
                  <div style="color:var(--text-secondary);">Lundi – Vendredi : <strong style="color:var(--text-primary);">8h00 – 18h30</strong></div>
                  <div style="color:var(--text-secondary);">Samedi : <strong style="color:var(--text-primary);">8h00 – 13h30</strong> (Ateliers & Retraits)</div>
                </div>
              </div>
            </div>

            <!-- Accès Rapide WhatsApp -->
            <div class="card-glass" style="background:linear-gradient(135deg, rgba(16,185,129,0.1), var(--bg-tertiary));border-color:rgba(16,185,129,0.3);padding:24px;display:flex;align-items:center;justify-content:space-between;gap:16px;">
              <div>
                <h4 style="font-size:1.05rem;color:#10b981;margin-bottom:4px;">Besoin d'une réponse urgente ?</h4>
                <p style="font-size:0.84rem;color:var(--text-secondary);margin:0;">Échangez directement avec un responsable technico-commercial sur WhatsApp.</p>
              </div>
              <a href="https://wa.me/22999905555" target="_blank" rel="noopener noreferrer" class="btn btn-sm" style="background:#10b981;color:#fff;">
                <i data-lucide="message-circle" style="width:16px;height:16px;"></i>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <!-- Formulaire de contact -->
          <div class="card-glass" style="padding:36px;">
            <h3 style="font-size:1.35rem;margin-bottom:8px;">Envoyez-nous un Message</h3>
            <p style="font-size:0.875rem;color:var(--text-secondary);margin-bottom:24px;">Remplissez ce formulaire, nous vous recontactons sous 24 heures ouvrées.</p>

            <form id="contactForm" onsubmit="event.preventDefault();">
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;" class="form-row-2">
                <div class="form-group">
                  <label class="form-label" for="contactName">Nom complet *</label>
                  <input type="text" id="contactName" class="form-input" placeholder="Ex: Marc Dossou" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="contactPhone">Téléphone *</label>
                  <input type="tel" id="contactPhone" class="form-input" placeholder="+229 ..." required />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="contactEmail">Adresse E-mail *</label>
                <input type="email" id="contactEmail" class="form-input" placeholder="votre.email@domaine.com" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="contactSubject">Objet de votre demande *</label>
                <select id="contactSubject" class="form-select">
                  <option value="Devis Produits Sidérurgiques">Devis Produits Sidérurgiques (Tôles, Fers, Tubes...)</option>
                  <option value="Projet Modulaire & Conteneurs">Projet Modulaire & Conteneurs</option>
                  <option value="Hangar & Structure Métallique">Hangar & Structure Métallique</option>
                  <option value="Usinage, Découpe & Pliage">Prestation d’Usinage (Découpe / Pliage)</option>
                  <option value="Autre demande">Autre demande / Partenariat</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="contactMessage">Détails de votre projet ou commande *</label>
                <textarea id="contactMessage" class="form-textarea" rows="4" placeholder="Précisez les dimensions, quantités, délais souhaités et lieu du chantier..." required></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-lg" id="submitContactBtn" style="width:100%;">
                <i data-lucide="send" style="width:18px;height:18px;"></i>
                <span>Envoyer ma demande</span>
              </button>

              <div id="contactFormSuccess" style="display:none;margin-top:16px;padding:12px;background:rgba(16,185,129,0.15);border:1px solid #10b981;border-radius:var(--radius-sm);color:#10b981;font-size:0.875rem;text-align:center;">
                ✅ Merci ! Votre message a été transmis avec succès à l'équipe commerciale FER CO.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}
