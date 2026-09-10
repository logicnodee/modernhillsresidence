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
    img: "type standard.png",
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

// ================= DETAIL TYPE MODAL =================
function switchModalImg(viewType) {
  currentModalView = viewType;
  const data = UNIT_DATA[currentSelectedTypeKey];
  if (!data) return;

  const imgEl = document.getElementById("mImg");
  const tabFasadBtn = document.getElementById("tabFasadBtn");
  const tabDenahBtn = document.getElementById("tabDenahBtn");

  if (viewType === "denah") {
    imgEl.src = data.floorplanImg;
    imgEl.alt = `Denah Ukuran ${data.dimension} - ${data.title}`;
    if (tabDenahBtn) tabDenahBtn.classList.add("active");
    if (tabFasadBtn) tabFasadBtn.classList.remove("active");
  } else {
    imgEl.src = data.img;
    imgEl.alt = `Fasad ${data.title}`;
    if (tabFasadBtn) tabFasadBtn.classList.add("active");
    if (tabDenahBtn) tabDenahBtn.classList.remove("active");
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
  document.getElementById("mKt").innerText = data.kt;
  document.getElementById("mKm").innerText = data.km;
  document.getElementById("mRk").innerText = data.rk || "1";
  document.getElementById("mDp").innerText = data.dapur || "1";
  
  const sisaLahanContainer = document.getElementById("mSisaLahanContainer");
  if (data.sisaLahan) {
    sisaLahanContainer.style.display = "flex";
  } else {
    sisaLahanContainer.style.display = "none";
  }

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
