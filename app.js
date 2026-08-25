// FER CO — MODERN FRAMER INTERACTIVITY SCRIPT

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 2. FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-accordion-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isCurrentlyActive = item.classList.contains('active');
        
        // Close other items
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question-btn');
          const otherIcon = otherItem.querySelector('.faq-toggle-icon');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherIcon) {
            otherIcon.innerHTML = `<i data-lucide="plus" style="width:16px;height:16px;"></i>`;
          }
        });

        // Toggle current item
        if (!isCurrentlyActive) {
          item.classList.add('active');
          btn.setAttribute('aria-expanded', 'true');
          const icon = item.querySelector('.faq-toggle-icon');
          if (icon) {
            icon.innerHTML = `<i data-lucide="minus" style="width:16px;height:16px;"></i>`;
          }
        }

        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      });
    }
  });

  // 3. Modal Overlay Management
  const quoteModal = document.getElementById('quoteModalOverlay');
  const openModalBtns = document.querySelectorAll('.open-quote-modal');
  const closeModalBtns = document.querySelectorAll('.close-quote-modal');
  const quoteForm = document.getElementById('quoteModalForm');
  const successAlert = document.getElementById('quoteModalSuccess');

  function openModal() {
    if (quoteModal) {
      quoteModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (quoteModal) {
      quoteModal.classList.remove('open');
      document.body.style.overflow = '';
      if (successAlert) successAlert.style.display = 'none';
    }
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal();
    });
  });

  if (quoteModal) {
    quoteModal.addEventListener('click', (e) => {
      if (e.target === quoteModal) {
        closeModal();
      }
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && quoteModal && quoteModal.classList.contains('open')) {
      closeModal();
    }
  });

  // 4. Form Submission Simulation
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (successAlert) {
        successAlert.style.display = 'block';
        setTimeout(() => {
          closeModal();
          quoteForm.reset();
        }, 2200);
      }
    });
  }

  // Mobile Drawer Toggle
  const mobileToggleBtns = document.querySelectorAll('.framer-mobile-toggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileOverlay = document.getElementById('mobileDrawerOverlay');
  const mobileCloseBtn = document.getElementById('mobileMenuClose');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    if (mobileDrawer) mobileDrawer.classList.add('open');
    if (mobileOverlay) mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (mobileOverlay) mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  mobileToggleBtns.forEach(btn => btn.addEventListener('click', openMobileMenu));
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);
  mobileLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

  // 5. Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // 6. Active Nav Link on Scroll Spy (for single page sections)
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.framer-nav-link');

  if (sections.length > 0) {
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          link.classList.remove('active');
          if (href === `#${current}`) {
            link.classList.add('active');
          }
        }
      });
    });
  }

  // 7. Product Catalog Filter Tabs (produits.html)
  const filterBtns = document.querySelectorAll('.filter-btn-pill');
  const productCards = document.querySelectorAll('.product-framer-card');

  if (filterBtns.length > 0 && productCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        productCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 8. Header scroll effect (smooth sticky transition on scroll)
  const headerWrapper = document.querySelector('.framer-navbar-wrapper');
  
  // 9. Hero Scroll Parallax & Multi-plane Motion
  const heroSection = document.querySelector('.hero-framer-section');
  const heroBgImg = document.querySelector('.hero-bg-media img');
  const heroTextCol = document.querySelector('.hero-text-col');
  const heroFloatingCards = document.querySelectorAll('.hero-floating-card');
  const scrollIndicator = document.querySelector('.hero-scroll-indicator');

  let ticking = false;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header sticky styling
    if (headerWrapper) {
      if (scrollY > 40) {
        headerWrapper.classList.add('is-sticky');
      } else {
        headerWrapper.classList.remove('is-sticky');
      }
    }

    // Hero Parallax Scroll
    if (heroSection && scrollY < window.innerHeight * 1.2) {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Background slow parallax
          if (heroBgImg) {
            heroBgImg.style.transform = `translate3d(0, ${scrollY * 0.3}px, 0) scale(${1 + scrollY * 0.0003})`;
          }

          // Content gentle fade & lift
          if (heroTextCol) {
            const opacityVal = Math.max(0, 1 - scrollY / 650);
            heroTextCol.style.opacity = opacityVal;
            heroTextCol.style.transform = `translate3d(0, ${scrollY * 0.12}px, 0)`;
          }

          // Floating cards differential depth parallax
          heroFloatingCards.forEach(card => {
            const speed = parseFloat(card.getAttribute('data-parallax-speed')) || 0.15;
            card.style.marginTop = `${scrollY * -speed * 0.8}px`;
          });

          // Scroll indicator fade out
          if (scrollIndicator) {
            scrollIndicator.style.opacity = Math.max(0, 1 - scrollY / 150);
          }

          ticking = false;
        });
        ticking = true;
      }
    }
  });

  // 10. Hero Interactive 3D Cursor Tilt on Floating Cards Cluster
  const heroCardsCluster = document.getElementById('heroCardsCluster');
  if (heroCardsCluster && window.innerWidth > 900) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      heroFloatingCards.forEach((card, index) => {
        const factor = (index + 1) * 8;
        const rotateX = -y * factor;
        const rotateY = x * factor;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    });

    heroSection.addEventListener('mouseleave', () => {
      heroFloatingCards.forEach(card => {
        card.style.transform = '';
      });
    });
  }

  // 11. Count-up Stats Animation on Hero
  const countStats = document.querySelectorAll('.count-up-stat');
  if (countStats.length > 0) {
    let animated = false;

    function runCounters() {
      if (animated) return;
      animated = true;

      countStats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'), 10) || 0;
        const suffix = stat.getAttribute('data-suffix') || '';
        const duration = 1600;
        const startTime = performance.now();

        function updateNumber(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out expo
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const currentVal = Math.floor(easeProgress * target);

          // Format with spaces for thousands (1 500)
          const formattedNumber = currentVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
          stat.textContent = `${formattedNumber}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(updateNumber);
          } else {
            const finalFormatted = target.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
            stat.textContent = `${finalFormatted}${suffix}`;
          }
        }

        requestAnimationFrame(updateNumber);
      });
    }

    // Trigger counter on page load with brief stagger
    setTimeout(runCounters, 300);
  }

  // 12. Interactive Chat Agent Widget Logic
  const chatTrigger = document.getElementById('chatAgentTrigger');
  const chatModal = document.getElementById('chatAgentModal');
  const chatCloseBtn = document.getElementById('chatCloseBtn');
  const chatForm = document.getElementById('chatInputForm');
  const chatInput = document.getElementById('chatInputField');
  const chatBody = document.getElementById('chatModalBody');
  const chatChips = document.querySelectorAll('.chat-chip');

  function openChat() {
    if (chatModal) {
      chatModal.classList.add('open');
      if (chatInput) chatInput.focus();
    }
  }

  function closeChat() {
    if (chatModal) chatModal.classList.remove('open');
  }

  if (chatTrigger) chatTrigger.addEventListener('click', openChat);
  if (chatCloseBtn) chatCloseBtn.addEventListener('click', closeChat);

  function appendChatMessage(text, sender = 'bot') {
    if (!chatBody) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${sender}`;
    msgDiv.innerHTML = text;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  function handleBotResponse(query) {
    const q = query.toLowerCase();
    let reply = "Merci pour votre question. Nos ingénieurs peuvent dimensionner précisément votre besoin. Pour un chiffrage rapide ou une commande, vous pouvez remplir notre formulaire de devis express ou joindre notre hotline directe au <a href='tel:+22999905555' style='color:#de522f;font-weight:700;'>+229 99 90 55 55</a>.";

    if (q.includes('hangar') || q.includes('charpente') || q.includes('poutre') || q.includes('ipe') || q.includes('hea')) {
      reply = "<strong>Charpentes & Poutrelles Normalisées</strong><br>Nous concevons et fabriquons des hangars industriels complets, portiques et planchers métalliques (poutrelles IPE 80 à 500 et HEA 100 à 400 en nuances S275JR/S355JR).<br><button class='btn-framer-primary btn-sm open-quote-modal' style='margin-top:8px;width:100%;'><span>Demander un devis hangar</span></button>";
    } else if (q.includes('tôle') || q.includes('tole') || q.includes('aluzinc') || q.includes('sandwich') || q.includes('az150')) {
      reply = "<strong>Bacs Aluzinc & Panneaux Sandwichs</strong><br>Nos bacs Aluzinc AZ150 sont garantis anticorrosion tropicale (0.35mm à 0.80mm jusqu'à 12m sur mesure). Nos panneaux sandwichs PUR 50mm isolent à 100% de la chaleur.<br><button class='btn-framer-primary btn-sm open-quote-modal' style='margin-top:8px;width:100%;'><span>Commander des tôles</span></button>";
    } else if (q.includes('pliage') || q.includes('découpe') || q.includes('decoupe') || q.includes('cnc') || q.includes('3m') || q.includes('usinage')) {
      reply = "<strong>Usinage & Pliage Numérique 3 Mètres</strong><br>Notre centre d'usinage à Cotonou est équipé d'une presse plieuse CNC 3000 mm / 160 T et d'une cisaille hydraulique pour vos pièces complexes sans raccord intermédiaire.";
    } else if (q.includes('prix') || q.includes('tarif') || q.includes('devis') || q.includes('combien')) {
      reply = "<strong>Tarifs & Chiffrage Express 24h</strong><br>Nos prix sont calculés au plus juste selon les cours de l'acier et vos spécifications. Cliquez ci-dessous pour recevoir une cotation sous 24h :<br><button class='btn-framer-primary btn-sm open-quote-modal' style='margin-top:8px;width:100%;'><span>Ouvrir le formulaire de devis</span></button>";
    } else if (q.includes('contact') || q.includes('adresse') || q.includes('téléphone') || q.includes('tel') || q.includes('cotonou')) {
      reply = "<strong>Atelier & Siège Fer . Co</strong><br>Carré 6422 Ahogbo Howe, Cotonou.<br>Téléphone : <a href='tel:+22999905555' style='color:#de522f;font-weight:700;'>+229 99 90 55 55</a><br>Email : <a href='mailto:info@fer-co.com' style='color:#de522f;font-weight:700;'>info@fer-co.com</a>";
    }

    setTimeout(() => {
      appendChatMessage(reply, 'bot');
      const newQuoteBtns = chatBody.querySelectorAll('.open-quote-modal');
      newQuoteBtns.forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault();
        closeChat();
        if (typeof openModal === 'function') openModal();
      }));
    }, 400);
  }

  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = chatInput.value.trim();
      if (!query) return;
      appendChatMessage(query, 'user');
      chatInput.value = '';
      handleBotResponse(query);
    });
  }

  chatChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const text = chip.textContent.trim();
      appendChatMessage(text, 'user');
      handleBotResponse(text);
    });
  });

  // 13. Global Scroll Reveal & Parallax Engine (IntersectionObserver)
  const revealElements = document.querySelectorAll(
    '.section-header-center, .section-header-left, .about-split-layout, .capabilities-split-layout, .material-split-layout, .dark-highlight-card, .faq-split-layout, .contact-split-grid, .crimson-card, .service-six-card, .gallery-column-card, .why-us-card, .process-step-card, .product-framer-card, .testimonial-framer-card, .about-feature-item'
  );

  revealElements.forEach(el => {
    if (!el.hasAttribute('data-reveal')) {
      el.setAttribute('data-reveal', 'fade-up');
    }
    // Add auto-staggering to cards in grids
    const parent = el.parentElement;
    if (parent && (parent.classList.contains('crimson-four-grid') || parent.classList.contains('services-six-grid') || parent.classList.contains('gallery-four-columns') || parent.classList.contains('why-us-grid') || parent.classList.contains('process-timeline-grid') || parent.classList.contains('products-catalog-grid'))) {
      const cardIndex = Array.from(parent.children).indexOf(el);
      el.classList.add(`stagger-${(cardIndex % 6) + 1}`);
    }
  });

  const observerOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('[data-reveal]').forEach(el => {
    revealObserver.observe(el);
  });

  // Multi-Section Image & Badge Parallax on Scroll
  const parallaxPhotos = document.querySelectorAll('.about-main-photo, .material-photo, .subpage-hero-bg, .about-main-image-wrap img');
  const parallaxBadges = document.querySelectorAll('.about-crimson-badge, .cap-floating-badge');

  window.addEventListener('scroll', () => {
    parallaxPhotos.forEach(photo => {
      const rect = photo.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const offset = (rect.top - window.innerHeight / 2) * 0.06;
        photo.style.transform = `translate3d(0, ${offset}px, 0) scale(1.04)`;
      }
    });

    parallaxBadges.forEach(badge => {
      const rect = badge.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const offset = (rect.top - window.innerHeight / 2) * -0.05;
        badge.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
    });
  });
});



