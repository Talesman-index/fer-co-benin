import { createIcons, icons } from 'lucide';
import { products } from './data/products.js';
import { projects } from './data/projects.js';
import { renderHero } from './components/Hero.js';
import { renderMetricsBar } from './components/MetricsBar.js';
import { renderPillars } from './components/PillarsSection.js';
import { renderComprehensiveServices } from './components/ComprehensiveServices.js';
import { renderManufacturingDarkSection } from './components/ManufacturingDarkSection.js';
import { renderGlobalReachCatalog } from './components/GlobalReachCatalog.js';
import { renderClientsRealisations } from './components/ClientsRealisations.js';
import { renderFooter } from './components/Footer.js';
import { renderQuoteModal } from './components/QuoteModal.js';
import { renderProductDetailModal } from './components/ProductDetailModal.js';
import { renderProjectDetailModal } from './components/ProjectDetailModal.js';

// Application State
const state = {
  activeMfgTab: 0,
  catalogCategory: 'all',
  catalogSearch: '',
  quoteCart: [],
  isQuoteModalOpen: false,
  detailProduct: null,
  detailProject: null
};

// Initial Render
function initApp() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <div class="page-wrapper">
      <div id="heroMount"></div>
      <div id="metricsMount"></div>
      <div id="pillarsMount"></div>
      <div id="servicesMount"></div>
      <div id="manufacturingMount"></div>
      <div id="reachCatalogMount"></div>
      <div id="clientsMount"></div>
      <div id="footerMount"></div>
      <div id="modalMount"></div>
    </div>
  `;

  renderAllSections();
  setupEventListeners();
}

function renderAllSections() {
  document.getElementById('heroMount').innerHTML = renderHero();
  document.getElementById('metricsMount').innerHTML = renderMetricsBar();
  document.getElementById('pillarsMount').innerHTML = renderPillars();
  document.getElementById('servicesMount').innerHTML = renderComprehensiveServices();
  document.getElementById('manufacturingMount').innerHTML = renderManufacturingDarkSection(state.activeMfgTab);
  document.getElementById('reachCatalogMount').innerHTML = renderGlobalReachCatalog(state.catalogCategory, state.catalogSearch);
  document.getElementById('clientsMount').innerHTML = renderClientsRealisations();
  document.getElementById('footerMount').innerHTML = renderFooter();

  renderModals();
  refreshIcons();
}

function renderManufacturingSection() {
  const mount = document.getElementById('manufacturingMount');
  if (mount) {
    mount.innerHTML = renderManufacturingDarkSection(state.activeMfgTab);
    refreshIcons();
  }
}

function renderCatalogSection() {
  const mount = document.getElementById('reachCatalogMount');
  if (mount) {
    mount.innerHTML = renderGlobalReachCatalog(state.catalogCategory, state.catalogSearch);
    refreshIcons();
  }
}

function renderModals() {
  const modalMount = document.getElementById('modalMount');
  if (!modalMount) return;

  let content = '';

  if (state.isQuoteModalOpen) {
    content += renderQuoteModal(state.quoteCart);
  }

  if (state.detailProduct) {
    content += renderProductDetailModal(state.detailProduct);
  }

  if (state.detailProject) {
    content += renderProjectDetailModal(state.detailProject);
  }

  modalMount.innerHTML = content;
  refreshIcons();
}

function refreshIcons() {
  createIcons({ icons });
}

// Global Event Listeners
function setupEventListeners() {
  document.addEventListener('click', (e) => {
    // 1. Manufacturing Tabs Accordion Click
    const mfgItem = e.target.closest('[data-mfg-idx]');
    if (mfgItem) {
      const idx = parseInt(mfgItem.getAttribute('data-mfg-idx'), 10);
      state.activeMfgTab = idx;
      renderManufacturingSection();
      return;
    }

    // 2. Open Quote Modal Buttons
    if (
      e.target.closest('#headerQuoteBtn') || 
      e.target.closest('#footerQuoteBtn') || 
      e.target.closest('#circularStampBtn') ||
      e.target.closest('#heroQuickSubmitBtn')
    ) {
      const quickInput = document.getElementById('heroQuickInput');
      if (quickInput && quickInput.value.trim()) {
        state.quoteCart.push({ id: `quick-${Date.now()}`, name: quickInput.value.trim() });
      }
      state.isQuoteModalOpen = true;
      renderModals();
      return;
    }

    // 3. Close Quote Modal
    if (e.target.closest('#closeQuoteModalBtn') || (e.target.id === 'quoteModalOverlay' && !e.target.closest('.modal-window'))) {
      state.isQuoteModalOpen = false;
      renderModals();
      return;
    }

    // 4. Category Tab Click in Catalog
    const categoryBtn = e.target.closest('[data-category-id]');
    if (categoryBtn) {
      state.catalogCategory = categoryBtn.getAttribute('data-category-id');
      renderCatalogSection();
      return;
    }

    // 5. Add to Quote from Catalog
    const addQuoteBtn = e.target.closest('.btn-add-quote');
    if (addQuoteBtn) {
      const prodId = addQuoteBtn.getAttribute('data-product-id');
      const prodName = addQuoteBtn.getAttribute('data-product-name');
      if (prodId && !state.quoteCart.some(p => p.id === prodId)) {
        state.quoteCart.push({ id: prodId, name: prodName });
      }
      state.isQuoteModalOpen = true;
      renderModals();
      return;
    }

    // 6. View Project Details
    const viewProjectBtn = e.target.closest('.btn-view-project');
    if (viewProjectBtn) {
      const projId = viewProjectBtn.getAttribute('data-project-id');
      state.detailProject = projects.find(p => p.id === projId) || null;
      renderModals();
      return;
    }

    // 7. Close project details modal
    if (e.target.closest('#closeProjectDetailBtn') || (e.target.id === 'projectDetailModalOverlay' && !e.target.closest('.modal-window'))) {
      state.detailProject = null;
      renderModals();
      return;
    }

    // 8. Remove from quote cart
    const removeQuoteBtn = e.target.closest('.btn-remove-quote-item');
    if (removeQuoteBtn) {
      const prodId = removeQuoteBtn.getAttribute('data-product-id');
      state.quoteCart = state.quoteCart.filter(p => p.id !== prodId);
      renderModals();
      return;
    }

    // 9. Side Quick Quote Submit
    if (e.target.closest('#btnQuickSubmitSide')) {
      const phoneInput = document.getElementById('quickQuotePhone');
      const phone = phoneInput ? phoneInput.value.trim() : '';
      if (phone) {
        state.quoteCart.push({ id: `phone-${Date.now()}`, name: `Rappel au ${phone}` });
        state.isQuoteModalOpen = true;
        renderModals();
      } else {
        state.isQuoteModalOpen = true;
        renderModals();
      }
      return;
    }

    // 10. Nav links smooth scroll
    const navLink = e.target.closest('[data-nav]');
    if (navLink) {
      const targetId = navLink.getAttribute('data-nav');
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  // Forms submission
  document.addEventListener('submit', (e) => {
    if (e.target.id === 'quoteModalForm') {
      const successMsg = document.getElementById('quoteModalSuccess');
      if (successMsg) successMsg.style.display = 'block';
      setTimeout(() => {
        state.isQuoteModalOpen = false;
        state.quoteCart = [];
        renderModals();
      }, 2000);
    }
  });

  // ESC key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      state.isQuoteModalOpen = false;
      state.detailProduct = null;
      state.detailProject = null;
      renderModals();
    }
  });
}

// Bootstrap
document.addEventListener('DOMContentLoaded', initApp);
