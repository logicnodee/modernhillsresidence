/**
 * Modern Hills Residence - Interactive Logic
 * Author: Google DeepMind Antigravity Pair Programmer
 */

// Global Configuration
const WA_PHONE_NUMBER = "6281234567890"; // Ganti dengan nomor WhatsApp Marketing yang aktif

// Unit Data Repository
const UNIT_DATA = {
  standard: {
    badge: "TYPE STANDARD",
    title: "Type Standard 36 / 60",
    priceText: "Rp 198.000.000",
    priceVal: 198000000,
    kprVal: 166000000,
    dpVal: 32000000,
    monthlyText: "Rp 1.139.000 / bln",
    lb: "36 m²",
    lt: "60 m²",
    kt: "2",
    km: "1",
    img: "type standard.png",
    specs: [
      { label: "Pondasi", val: "Batu kali + Struktur Beton Bertulang" },
      { label: "Dinding", val: "Bata Merah / Hebel diplester, aci & cat exterior Weathercoat" },
      { label: "Lantai", val: "Granit Tile 60x60 cm" },
      { label: "Rangka Atap", val: "Baja Ringan Galvalum SNI" },
      { label: "Genteng", val: "Beton Flat Minimalis" },
      { label: "Kusen & Pintu", val: "Aluminium Powder Coating & Pintu Kayu Solid" },
      { label: "Kamar Mandi", val: "Kloset Duduk & Shower Set Standard" },
      { label: "Listrik", val: "PLN 1.300 Watt" },
      { label: "Sumber Air", val: "Air Bersih PDAM / Sumur Bor Cluster" }
    ]
  },
  medium: {
    badge: "TYPE MEDIUM",
    title: "Type Medium 36 / 66",
    priceText: "Rp 213.000.000",
    priceVal: 213000000,
    kprVal: 166000000,
    dpVal: 47000000,
    monthlyText: "Rp 1.139.000 / bln",
    lb: "36 m²",
    lt: "66 m²",
    kt: "2",
    km: "1",
    img: "type medium.jpeg",
    specs: [
      { label: "Pondasi", val: "Batu kali + Struktur Beton Bertulang" },
      { label: "Dinding", val: "Bata Merah / Hebel diplester, aci & cat Jotun/Dulux" },
      { label: "Lantai", val: "Granit Tile 60x60 cm Luxury Series" },
      { label: "Rangka Atap", val: "Baja Ringan Galvalum SNI" },
      { label: "Genteng", val: "Beton Flat Minimalis Presisi" },
      { label: "Kusen & Pintu", val: "Aluminium Powder Coating & Pintu Engineering Wood" },
      { label: "Kamar Mandi", val: "Kloset Duduk & Shower Set Minimalis" },
      { label: "Listrik", val: "PLN 1.300 Watt" },
      { label: "Sumber Air", val: "Air Bersih PDAM / Sumur Bor Cluster" }
    ]
  },
  premium: {
    badge: "TYPE PREMIUM",
    title: "Type Premium 40 / 72",
    priceText: "Rp 250.000.000",
    priceVal: 250000000,
    kprVal: 200000000,
    dpVal: 50000000,
    monthlyText: "Rp 1.370.000 / bln",
    lb: "40 m²",
    lt: "72 m²",
    kt: "2",
    km: "1",
    img: "type premium.png",
    specs: [
      { label: "Pondasi", val: "Batu kali + Footplat Beton Bertulang" },
      { label: "Dinding", val: "Bata Ringan / Merah Premium Finishing Cat Jotun" },
      { label: "Lantai", val: "Granit Tile 60x60 cm Polished Glazed" },
      { label: "Rangka Atap", val: "Baja Ringan Galvalum SNI Extra Strong" },
      { label: "Genteng", val: "Beton Flat Minimalis Premium Coating" },
      { label: "Kusen & Pintu", val: "Aluminium Powder Coating Tebal & Smart Door Ready" },
      { label: "Kamar Mandi", val: "Kloset Duduk Premium, Shower Set & Exhaust Fan" },
      { label: "Listrik", val: "PLN 1.300 / 2.200 Watt" },
      { label: "Sumber Air", val: "Air Bersih PDAM / Sumur Bor Cluster" }
    ]
  }
};

let currentSelectedTypeKey = "standard";

// ================= INITIALIZATION =================
document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initMobileMenu();
  initSmoothScroll();
  calculateKpr();
  initHeroCounter();
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

// ================= NUMBER COUNTER ANIMATION =================
function initHeroCounter() {
  const counterElem = document.getElementById("heroPriceCounter");
  if (!counterElem) return;

  let count = 0;
  const target = 198;
  const duration = 1200;
  const stepTime = Math.abs(Math.floor(duration / target));

  const timer = setInterval(() => {
    count += 3;
    if (count >= target) {
      counterElem.innerText = target;
      clearInterval(timer);
    } else {
      counterElem.innerText = count;
    }
  }, stepTime);
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
function openDetailModal(typeKey) {
  const data = UNIT_DATA[typeKey];
  if (!data) return;

  currentSelectedTypeKey = typeKey;

  document.getElementById("mBadge").innerText = data.badge;
  document.getElementById("mTitle").innerText = data.title;
  document.getElementById("mPrice").innerText = data.priceText;
  document.getElementById("mImg").src = data.img;
  document.getElementById("mLb").innerText = data.lb;
  document.getElementById("mLt").innerText = data.lt;
  document.getElementById("mKt").innerText = data.kt;
  document.getElementById("mKm").innerText = data.km;

  // Populate Specs List
  const specListEl = document.querySelector(".spec-tech-list");
  if (specListEl) {
    specListEl.innerHTML = data.specs.map(s => `<li><strong>${s.label}:</strong> ${s.val}</li>`).join("");
  }

  // Populate Finance Breakdown
  document.getElementById("fPrice").innerText = data.priceText;
  document.getElementById("fKpr").innerText = formatRupiah(data.kprVal);
  document.getElementById("fDp").innerText = formatRupiah(data.dpVal);
  document.getElementById("fMonthly").innerText = data.monthlyText;

  switchTab("specs");
  openModal("modalDetail");
}

function switchTab(tabName) {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabBtns.forEach(btn => btn.classList.remove("active"));
  tabPanes.forEach(pane => pane.classList.remove("active"));

  if (tabName === "specs") {
    tabBtns[0].classList.add("active");
    document.getElementById("paneSpecs").classList.add("active");
  } else {
    tabBtns[1].classList.add("active");
    document.getElementById("paneFinance").classList.add("active");
  }
}

function chatTypeWa() {
  const data = UNIT_DATA[currentSelectedTypeKey];
  const message = `Halo Admin Modern Hills Residence, saya ingin menanyakan informasi lebih lanjut mengenai *${data.title}* seharga *${data.priceText}*. Mohon dibantu informasi ketersediaan unit dan jadwal survey.`;
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

// ================= KPR CALCULATOR =================
function updateKprFromType() {
  const typeSelect = document.getElementById("kprTypeSelect");
  const price = parseInt(typeSelect.value);
  const selectedOption = typeSelect.options[typeSelect.selectedIndex];
  const defaultDp = parseInt(selectedOption.getAttribute("data-dp")) || (price * 0.15);

  const priceInput = document.getElementById("kprPriceInput");
  const dpInput = document.getElementById("kprDpInput");

  priceInput.value = price;
  dpInput.max = Math.floor(price * 0.5);
  dpInput.value = defaultDp;

  calculateKpr();
}

function calculateKpr() {
  const price = parseInt(document.getElementById("kprPriceInput").value) || 198000000;
  const dp = parseInt(document.getElementById("kprDpInput").value) || 32000000;
  const tenorYears = parseInt(document.getElementById("kprTenorSelect").value) || 20;
  const interestRate = parseFloat(document.getElementById("kprInterestInput").value) || 5.5;

  // Format Labels
  document.getElementById("kprPriceFormatted").innerText = formatRupiah(price);
  document.getElementById("kprDpFormatted").innerText = formatRupiah(dp);

  const dpPercent = Math.round((dp / price) * 100);
  document.getElementById("kprDpPercent").innerText = `${dpPercent}%`;

  // Plafon Loan
  const plafon = Math.max(0, price - dp);
  document.getElementById("kprPlafonResult").innerText = formatRupiah(plafon);
  document.getElementById("kprDpResult").innerText = `${formatRupiah(dp)} (${dpPercent}%)`;
  document.getElementById("kprTenorResult").innerText = `${tenorYears} Tahun (${tenorYears * 12} Bulan)`;

  // Monthly Installment formula (Annuity standard)
  const monthlyRate = (interestRate / 100) / 12;
  const totalMonths = tenorYears * 12;

  let monthlyInstallment = 0;
  if (monthlyRate > 0) {
    monthlyInstallment = (plafon * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                         (Math.pow(1 + monthlyRate, totalMonths) - 1);
  } else {
    monthlyInstallment = plafon / totalMonths;
  }

  document.getElementById("kprMonthlyResult").innerText = formatNumber(Math.round(monthlyInstallment));
}

function consultKprWa() {
  const price = document.getElementById("kprPriceFormatted").innerText;
  const dp = document.getElementById("kprDpFormatted").innerText;
  const tenor = document.getElementById("kprTenorSelect").value;
  const monthly = document.getElementById("kprMonthlyResult").innerText;
  const plafon = document.getElementById("kprPlafonResult").innerText;

  const message = `Halo Admin Modern Hills Residence, saya ingin konsultasi pengajuan KPR dengan simulasi:\n` +
    `- Harga Rumah: ${price}\n` +
    `- Uang Muka (DP): ${dp}\n` +
    `- Plafon KPR: ${plafon}\n` +
    `- Tenor: ${tenor} Tahun\n` +
    `- Estimasi Angsuran: Rp ${monthly}/bulan\n\n` +
    `Mohon info syarat berkas dan bank rekanan yang tersedia.`;

  const waUrl = `https://wa.me/${WA_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
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
