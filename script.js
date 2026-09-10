/**
 * Modern Hills Residence - Interactive Logic
 * Author: Google DeepMind Antigravity Pair Programmer
 */

// Global Configuration
const WA_PHONE_NUMBER = "6289682088820"; // Nomor WhatsApp Marketing Modern Hills Residence (+62 896-8208-8820)

// Unit Data Repository
const UNIT_DATA = {
  standard: {
    badge: "TYPE STANDARD",
    title: "Type Standard 36 / 60",
    dimension: "6 x 10 m",
    promoText: "Angsuran 1 Juta flat sampai lunas",
    lb: "36 m²",
    lt: "60 m²",
    kt: "2",
    km: "1",
    rk: "1",
    dapur: "1",
    sisaLahan: false,
    img: "type medium.jpeg",
    floorplanImg: "assets/6x10 (standart).png",
    specs: [
      { label: "Pondasi", val: "Batu Kali" },
      { label: "Dinding", val: "Bata Merah / Hebel diplester & diaci" },
      { label: "Lantai", val: "Granit Tile 40x40 cm" },
      { label: "Rangka Atap", val: "Baja Ringan Galvalum SNI" },
      { label: "Genteng", val: "Spandex Pasir / Alderon" },
      { label: "Kusen & Pintu", val: "Aluminium & Pintu Kayu" },
      { label: "Kamar Mandi", val: "Kloset Duduk & Shower Set" },
      { label: "Listrik", val: "PLN 900 Watt" },
      { label: "Sumber Air", val: "Sumur Bor Artesis" }
    ]
  },
  medium: {
    badge: "TYPE MEDIUM",
    title: "Type Medium 36 / 66",
    dimension: "6 x 11 m",
    promoText: "Angsuran 1 Juta flat sampai lunas",
    lb: "36 m²",
    lt: "66 m²",
    kt: "2",
    km: "1",
    rk: "1",
    dapur: "1",
    sisaLahan: true,
    img: "type medium.jpeg",
    floorplanImg: "assets/6x11 (medium).jpg",
    specs: [
      { label: "Pondasi", val: "Batu Kali" },
      { label: "Dinding", val: "Bata Merah / Hebel diplester & diaci" },
      { label: "Lantai", val: "Granit Tile 40x40 cm" },
      { label: "Rangka Atap", val: "Baja Ringan Galvalum SNI" },
      { label: "Genteng", val: "Spandex Pasir / Alderon" },
      { label: "Kusen & Pintu", val: "Aluminium & Pintu Kayu" },
      { label: "Kamar Mandi", val: "Kloset Duduk & Shower Set" },
      { label: "Listrik", val: "PLN 900 Watt" },
      { label: "Sumber Air", val: "Sumur Bor Artesis" }
    ]
  },
  premium: {
    badge: "TYPE PREMIUM",
    title: "Type Premium 40 / 72",
    dimension: "6.6 x 11 m",
    promoText: "Angsuran 1 Juta flat sampai lunas",
    lb: "40 m²",
    lt: "72 m²",
    kt: "2",
    km: "1",
    rk: "1",
    dapur: "1",
    sisaLahan: true,
    img: "type premium.png",
    floorplanImg: "assets/6.6x11 (premium).jpg",
    specs: [
      { label: "Pondasi", val: "Batu Kali" },
      { label: "Dinding", val: "Bata Merah / Hebel diplester & diaci" },
      { label: "Lantai", val: "Granit Tile 40x40 cm" },
      { label: "Rangka Atap", val: "Baja Ringan Galvalum SNI" },
      { label: "Genteng", val: "Alderon" },
      { label: "Kusen & Pintu", val: "Aluminium & Pintu Kayu" },
      { label: "Kamar Mandi", val: "Kloset Duduk & Shower Set" },
      { label: "Listrik", val: "PLN 1.300 Watt" },
      { label: "Sumber Air", val: "Sumur Bor Artesis" }
    ]
  }
};

let currentSelectedTypeKey = "standard";
let currentModalView = "fasad";

// ================= INITIALIZATION =================
document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initMobileMenu();
  initSmoothScroll();
  setDefaultSurveyDate();
  initLightboxPanZoom();
});

// ================= NAVBAR & SCROLL =================
function initNavbarScroll() {
  const header = document.getElementById("header");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    // Header shadow & glass state
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Active navigation highlighter
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}

function initMobileMenu() {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!hamburgerBtn || !navMenu) return;

  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    navMenu.classList.toggle("open");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburgerBtn.classList.remove("active");
      navMenu.classList.remove("open");
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}

// ================= MODAL HANDLERS =================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function handleModalBackdropClick(event, modalId) {
  if (event.target.id === modalId) {
    closeModal(modalId);
  }
}

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-overlay.active").forEach(m => {
      m.classList.remove("active");
    });
    document.body.style.overflow = "";
  }
});

// ================= UNIT CARD PREVIEW SWITCHER =================
function switchCardPreview(e, typeKey, view) {
  if (e) e.stopPropagation();
  const card = document.querySelector(`.unit-card[data-type="${typeKey}"]`);
  if (!card) return;
  
  const imgEl = card.querySelector(".unit-img");
  const tabs = card.querySelectorAll(".card-tab");
  const data = UNIT_DATA[typeKey];
  if (!data || !imgEl) return;

  tabs.forEach(t => t.classList.remove("active"));
  if (e && e.currentTarget) {
    e.currentTarget.classList.add("active");
  }

  if (view === "denah") {
    imgEl.src = data.floorplanImg;
    imgEl.classList.add("is-denah");
    imgEl.alt = `Denah ${data.title}`;
  } else {
    imgEl.src = data.img;
    imgEl.classList.remove("is-denah");
    imgEl.alt = `Tampak Depan ${data.title}`;
  }
}

// ================= LIGHTBOX HD VIEWER =================
let currentLightboxTypeKey = "standard";
let currentLightboxView = "fasad";
let currentLightboxZoom = 1;
let currentLightboxPanX = 0;
let currentLightboxPanY = 0;
let isPanning = false;
let startPanX = 0;
let startPanY = 0;

function applyLightboxTransform(smooth = false) {
  const lbImg = document.getElementById("lightboxImg");
  const lbBody = document.querySelector(".lightbox-body");
  if (!lbImg) return;

  if (smooth) {
    lbImg.style.transition = "transform 0.18s cubic-bezier(0.2, 0, 0, 1)";
  } else {
    lbImg.style.transition = "none";
  }

  lbImg.style.transform = `translate(${currentLightboxPanX}px, ${currentLightboxPanY}px) scale(${currentLightboxZoom})`;

  if (lbBody) {
    lbBody.style.cursor = isPanning ? "grabbing" : (currentLightboxZoom > 1.05 ? "grab" : "grab");
  }
}

function openLightbox(src = null, title = null, typeKey = null, view = null) {
  if (typeKey) {
    currentLightboxTypeKey = typeKey;
  } else if (currentSelectedTypeKey) {
    currentLightboxTypeKey = currentSelectedTypeKey;
  } else {
    currentLightboxTypeKey = "standard";
  }
  
  if (view) {
    currentLightboxView = view;
  } else if (currentModalView) {
    currentLightboxView = currentModalView;
  } else {
    currentLightboxView = "fasad";
  }

  updateLightboxContent();
  resetLightboxZoom();
  openModal("modalLightbox");
}

function updateLightboxContent() {
  const data = UNIT_DATA[currentLightboxTypeKey];
  if (!data) return;

  const lbImg = document.getElementById("lightboxImg");
  const lbTitle = document.getElementById("lightboxTitle");
  const waBtn = document.getElementById("lightboxWaBtn");
  const btnFasad = document.getElementById("lbBtnFasad");
  const btnDenah = document.getElementById("lbBtnDenah");
  const denahLbl = document.getElementById("lbDenahLabel");
  const lbBody = document.querySelector(".lightbox-body");

  if (denahLbl) denahLbl.innerText = `Denah (${data.dimension})`;

  if (currentLightboxView === "denah") {
    if (lbImg) {
      lbImg.src = data.floorplanImg;
      lbImg.alt = `Denah & Ukuran ${data.title} (${data.dimension})`;
    }
    if (lbTitle) lbTitle.innerText = `Denah & Ukuran ${data.title} (${data.dimension})`;
    if (btnDenah) btnDenah.classList.add("active");
    if (btnFasad) btnFasad.classList.remove("active");
    if (lbBody) lbBody.classList.add("is-denah");
  } else {
    if (lbImg) {
      lbImg.src = data.img;
      lbImg.alt = `Tampak Depan ${data.title}`;
    }
    if (lbTitle) lbTitle.innerText = `Tampak Depan ${data.title}`;
    if (btnFasad) btnFasad.classList.add("active");
    if (btnDenah) btnDenah.classList.remove("active");
    if (lbBody) lbBody.classList.remove("is-denah");
  }

  const msg = `Halo Admin Modern Hills Residence, saya ingin konsultasi mengenai ${currentLightboxView === "denah" ? "Denah & Ukuran" : "Tampak Depan"} *${data.title}* (Dimensi ${data.dimension}). Mohon info ketersediaan unit.`;
  if (waBtn) waBtn.href = `https://wa.me/${WA_PHONE_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function setLightboxView(view) {
  currentLightboxView = view;
  resetLightboxZoom();
  updateLightboxContent();
}

function lightboxNav(dir) {
  // Toggle between fasad and denah seamlessly
  if (currentLightboxView === "fasad") {
    currentLightboxView = "denah";
  } else {
    currentLightboxView = "fasad";
  }
  resetLightboxZoom();
  updateLightboxContent();
}

function openCardLightbox(btn, typeKey) {
  const card = document.querySelector(`.unit-card[data-type="${typeKey}"]`);
  if (!card) return;
  const imgEl = card.querySelector(".unit-img");
  const isDenah = imgEl && imgEl.classList.contains("is-denah");
  const view = isDenah ? "denah" : "fasad";
  openLightbox(null, null, typeKey, view);
}

function zoomLightbox(factor, centerX = null, centerY = null) {
  const oldZoom = currentLightboxZoom;
  currentLightboxZoom = Math.min(Math.max(currentLightboxZoom * factor, 0.7), 4.5);
  
  if (centerX !== null && centerY !== null && oldZoom !== 0) {
    const scaleRatio = currentLightboxZoom / oldZoom;
    currentLightboxPanX = centerX - (centerX - currentLightboxPanX) * scaleRatio;
    currentLightboxPanY = centerY - (centerY - currentLightboxPanY) * scaleRatio;
  }

  if (currentLightboxZoom <= 1.0) {
    currentLightboxPanX = 0;
    currentLightboxPanY = 0;
  }
  
  applyLightboxTransform(true);
}

function resetLightboxZoom() {
  currentLightboxZoom = 1;
  currentLightboxPanX = 0;
  currentLightboxPanY = 0;
  applyLightboxTransform(true);
}

// Lightbox interactive Drag-to-Pan and Mouse Wheel Zoom
function initLightboxPanZoom() {
  const lbBody = document.querySelector(".lightbox-body");
  const lbImg = document.getElementById("lightboxImg");
  if (!lbBody || !lbImg) return;

  // Prevent default drag image behavior
  lbImg.addEventListener("dragstart", (e) => e.preventDefault());

  // Mouse wheel zoom
  lbBody.addEventListener("wheel", (e) => {
    e.preventDefault();
    const rect = lbBody.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    const factor = e.deltaY < 0 ? 1.2 : 0.83;
    zoomLightbox(factor, mouseX, mouseY);
  }, { passive: false });

  // Mouse down - start drag pan
  lbBody.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return; // Only left mouse button
    isPanning = true;
    startPanX = e.clientX - currentLightboxPanX;
    startPanY = e.clientY - currentLightboxPanY;
    lbBody.style.cursor = "grabbing";
    e.preventDefault();
  });

  window.addEventListener("mousemove", (e) => {
    if (!isPanning) return;
    currentLightboxPanX = e.clientX - startPanX;
    currentLightboxPanY = e.clientY - startPanY;
    applyLightboxTransform(false);
  });

  window.addEventListener("mouseup", () => {
    if (isPanning) {
      isPanning = false;
      const body = document.querySelector(".lightbox-body");
      if (body) {
        body.style.cursor = "grab";
      }
    }
  });

  // Mobile Touch Pan & Pinch Zoom
  let touchStartDist = 0;
  let touchStartZoom = 1;
  let isTouching = false;

  lbBody.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) {
      isTouching = true;
      startPanX = e.touches[0].clientX - currentLightboxPanX;
      startPanY = e.touches[0].clientY - currentLightboxPanY;
    } else if (e.touches.length === 2) {
      isTouching = false;
      touchStartDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchStartZoom = currentLightboxZoom;
    }
  }, { passive: true });

  lbBody.addEventListener("touchmove", (e) => {
    if (e.touches.length === 1 && isTouching) {
      currentLightboxPanX = e.touches[0].clientX - startPanX;
      currentLightboxPanY = e.touches[0].clientY - startPanY;
      applyLightboxTransform(false);
    } else if (e.touches.length === 2 && touchStartDist > 0) {
      const currentDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const factor = currentDist / touchStartDist;
      currentLightboxZoom = Math.min(Math.max(touchStartZoom * factor, 0.7), 4.5);
      applyLightboxTransform(false);
    }
  }, { passive: true });

  lbBody.addEventListener("touchend", (e) => {
    if (e.touches.length === 0) {
      isTouching = false;
      touchStartDist = 0;
      if (currentLightboxZoom < 0.9) {
        resetLightboxZoom();
      }
    }
  }, { passive: true });

  // Double click to toggle 2x zoom / reset
  lbBody.addEventListener("dblclick", (e) => {
    if (currentLightboxZoom > 1.2) {
      resetLightboxZoom();
    } else {
      const rect = lbBody.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;
      zoomLightbox(2.0, mouseX, mouseY);
    }
  });
}

// Keyboard navigation listener for Lightbox
document.addEventListener("keydown", (e) => {
  const lbModal = document.getElementById("modalLightbox");
  if (!lbModal || !lbModal.classList.contains("active")) return;
  
  if (e.key === "ArrowRight") {
    lightboxNav(1);
  } else if (e.key === "ArrowLeft") {
    lightboxNav(-1);
  } else if (e.key === "+" || e.key === "=") {
    zoomLightbox(1.25);
  } else if (e.key === "-") {
    zoomLightbox(0.8);
  } else if (e.key === "0") {
    resetLightboxZoom();
  }
});

// ================= DETAIL TYPE MODAL =================
function switchModalImg(viewType) {
  currentModalView = viewType;
  const data = UNIT_DATA[currentSelectedTypeKey];
  if (!data) return;

  const imgEl = document.getElementById("mImg");
  const tabFasadBtn = document.getElementById("tabFasadBtn");
  const tabDenahBtn = document.getElementById("tabDenahBtn");
  const containerEl = document.querySelector(".modal-img-container");

  if (viewType === "denah") {
    imgEl.src = data.floorplanImg;
    imgEl.alt = `Denah Ukuran ${data.dimension} - ${data.title}`;
    if (tabDenahBtn) tabDenahBtn.classList.add("active");
    if (tabFasadBtn) tabFasadBtn.classList.remove("active");
    if (containerEl) containerEl.classList.add("denah-view");
  } else {
    imgEl.src = data.img;
    imgEl.alt = `Fasad ${data.title}`;
    if (tabFasadBtn) tabFasadBtn.classList.add("active");
    if (tabDenahBtn) tabDenahBtn.classList.remove("active");
    if (containerEl) containerEl.classList.remove("denah-view");
  }
}

function openDetailModal(typeKey, initialView = "fasad") {
  const data = UNIT_DATA[typeKey];
  if (!data) return;

  currentSelectedTypeKey = typeKey;
  currentModalView = initialView;

  document.getElementById("mBadge").innerText = data.badge;
  document.getElementById("mTitle").innerText = data.title;
  
  const mPromo = document.getElementById("mPromo");
  if (mPromo) mPromo.innerText = data.promoText;

  const mDim = document.getElementById("mDim");
  if (mDim) mDim.innerText = `Dimensi: ${data.dimension}`;

  const tabDenahLbl = document.getElementById("tabDenahLbl");
  if (tabDenahLbl) tabDenahLbl.innerText = `Denah & Ukuran (${data.dimension})`;

  switchModalImg(initialView);

  document.getElementById("mLb").innerText = data.lb;
  document.getElementById("mLt").innerText = data.lt;

  const mDimensiVal = document.getElementById("mDimensiVal");
  if (mDimensiVal) mDimensiVal.innerText = data.dimension;

  const mSl = document.getElementById("mSl");
  if (mSl) {
    if (data.sisaLahan) {
      mSl.innerText = "Ada (+)";
      mSl.style.color = "var(--gold-light)";
    } else {
      mSl.innerText = "Optimal";
      mSl.style.color = "var(--text-muted)";
    }
  }

  document.getElementById("mKt").innerText = data.kt;
  document.getElementById("mKm").innerText = data.km;
  document.getElementById("mRk").innerText = data.rk || "1";
  document.getElementById("mDp").innerText = data.dapur || "1";

  // Populate Specs List
  const specListEl = document.querySelector(".spec-tech-list");
  if (specListEl) {
    specListEl.innerHTML = data.specs.map(s => `<li><strong>${s.label}:</strong> ${s.val}</li>`).join("");
  }

  openModal("modalDetail");
}

function chatTypeWa() {
  const data = UNIT_DATA[currentSelectedTypeKey];
  const message = `Halo Admin Modern Hills Residence, saya tertarik dengan *${data.title}* (Dimensi ${data.dimension}) dengan promo *${data.promoText}*. Mohon informasi ketersediaan unit dan jadwal survey lokasi. Terima kasih.`;
  const waUrl = `https://wa.me/${WA_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
}

// ================= SITE PLAN MODAL =================
function openSitePlanModal() {
  openModal("modalSiteplan");
}

// ================= SURVEY MODAL =================
function openSurveyModal() {
  openModal("modalSurvey");
}

function setDefaultSurveyDate() {
  const dateInput = document.getElementById("surveyDate");
  if (!dateInput) return;
  
  // Set tomorrow as default
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const yyyy = tomorrow.getFullYear();
  const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const dd = String(tomorrow.getDate()).padStart(2, '0');
  dateInput.value = `${yyyy}-${mm}-${dd}`;
  dateInput.min = `${yyyy}-${mm}-${dd}`;
}

function submitSurveyForm(e) {
  e.preventDefault();
  
  const name = document.getElementById("surveyName").value.trim();
  const wa = document.getElementById("surveyWa").value.trim();
  const unit = document.getElementById("surveyType").value;
  const date = document.getElementById("surveyDate").value;
  const time = document.getElementById("surveyTime").value;

  if (!name || !wa || !date) {
    alert("Mohon lengkapi seluruh isian formulir.");
    return;
  }

  const message = `*FORMULIR SURVEY LOKASI - MODERN HILLS RESIDENCE*\n\n` +
    `👤 *Nama:* ${name}\n` +
    `📱 *WhatsApp:* ${wa}\n` +
    `🏠 *Pilihan Unit:* ${unit}\n` +
    `📅 *Tanggal Survey:* ${date}\n` +
    `⏰ *Waktu:* ${time}\n\n` +
    `Mohon konfirmasi ketersediaan jadwal tim marketing untuk mendampingi survey. Terima kasih!`;

  const waUrl = `https://wa.me/${WA_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
  closeModal("modalSurvey");
}


// ================= FAQ ACCORDION =================
function toggleFaq(btnElement) {
  const item = btnElement.parentElement;
  const answer = item.querySelector(".faq-answer");
  const isActive = item.classList.contains("active");

  // Close all other FAQs
  document.querySelectorAll(".faq-item").forEach(el => {
    el.classList.remove("active");
    el.querySelector(".faq-answer").style.maxHeight = null;
  });

  if (!isActive) {
    item.classList.add("active");
    answer.style.maxHeight = answer.scrollHeight + "px";
  }
}

// ================= UTILITY HELPERS =================
function formatRupiah(number) {
  return "Rp " + new Intl.NumberFormat("id-ID").format(number);
}

function formatNumber(number) {
  return new Intl.NumberFormat("id-ID").format(number);
}
