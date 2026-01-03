// ==============================================
// SMM MARKET - JAVASCRIPT KODI
// ==============================================

// 1. MA'LUMOTLAR BAZASI
const tariffsData = {
  telegram: {
    premium: [
      {
        id: "tg_premium_1",
        name: "1 Oylik",
        description: "Yuqori sifatli obunachilar",
        price: 55000,
        features: [
          "✅ 30 kun kafolat",
          "✅ Aktiv va haqiqiy foydalanuvchilar",
          "✅ Darhol boshlanadi",
        ],
        badge: "1️⃣",
      },
      {
        id: "tg_premium_2",
        name: "3 Oylik",
        description: "Chegirmali paket",
        price: 180000,
        features: [
          "✅ 30 kun kafolat",
          "✅ Aktiv va haqiqiy foydalanuvchilar",
          "✅ 3 oy uchun katta chegirma",
        ],
        badge: "2️⃣",
      },
      {
        id: "tg_premium_3",
        name: "6 Oylik",
        description: "Eng katta chegirma",
        price: 235000,
        features: [
          "✅ 30 kun kafolat",
          "✅ Aktiv va haqiqiy foydalanuvchilar",
          "✅ 6 oy uchun super chegirma",
        ],
        badge: "3️⃣",
      },
    ],
    stars: [
      {
        id: "tg_stars_1",
        name: "100 Stars",
        description: "Kichik paket",
        price: 28000,
        features: [
          "✅ Barcha kanallar va guruhlar uchun",
          "✅ Tez yetkazib berish",
          "✅ 100% xavfsiz",
        ],
        badge: "1️⃣",
      },
      {
        id: "tg_stars_2",
        name: "500 Stars",
        description: "O'rta paket",
        price: 130000,
        features: [
          "✅ Barcha kanallar va guruhlar uchun",
          "✅ Tez yetkazib berish",
          "✅ 100% xavfsiz",
        ],
        badge: "2️⃣",
      },
      {
        id: "tg_stars_3",
        name: "1000 Stars",
        description: "Katta paket",
        price: 265000,
        features: [
          "✅ Barcha kanallar va guruhlar uchun",
          "✅ Tez yetkazib berish",
          "✅ 100% xavfsiz",
        ],
        badge: "3️⃣",
      },
      {
        id: "tg_stars_4",
        name: "5000 Stars",
        description: "Professional paket",
        price: 1270000,
        features: [
          "✅ Barcha kanallar va guruhlar uchun",
          "✅ Tez yetkazib berish",
          "✅ 100% xavfsiz",
        ],
        badge: "4️⃣",
      },
      {
        id: "tg_stars_5",
        name: "10000 Stars",
        description: "Biznes paket",
        price: 2550000,
        features: [
          "✅ Barcha kanallar va guruhlar uchun",
          "✅ Tez yetkazib berish",
          "✅ 100% xavfsiz",
        ],
        badge: "5️⃣",
      },
    ],
    gift: [
      {
        id: "tg_gift_1",
        name: "Gift-ayiqcha",
        emoji: "🐻",
        price: 13000,
        description: "Sevimli ayiqcha sovg'asi",
        features: [
          "✅ Darhol yetkazib berish",
          "✅ Eng yangi sovg'a",
          "✅ Barcha uchun",
        ],
      },
      {
        id: "tg_gift_2",
        name: "Gift-yurakcha",
        emoji: "❤️",
        price: 5000,
        description: "Muhabbat ramzi",
        features: [
          "✅ Darhol yetkazib berish",
          "✅ Eng yangi sovg'a",
          "✅ Barcha uchun",
        ],
      },
      {
        id: "tg_gift_3",
        name: "Gift-sovga",
        emoji: "🎁",
        price: 7000,
        description: "Oddiy sovg'a",
        features: [
          "✅ Darhol yetkazib berish",
          "✅ Eng yangi sovg'a",
          "✅ Barcha uchun",
        ],
      },
      {
        id: "tg_gift_4",
        name: "Gift-AtirGul",
        emoji: "🌹",
        price: 7000,
        description: "Romantik atirgul",
        features: [
          "✅ Darhol yetkazib berish",
          "✅ Eng yangi sovg'a",
          "✅ Barcha uchun",
        ],
      },
      {
        id: "tg_gift_5",
        name: "Gift-Guldasta",
        emoji: "💐",
        price: 13000,
        description: "Go'zal guldasta",
        features: [
          "✅ Darhol yetkazib berish",
          "✅ Eng yangi sovg'a",
          "✅ Barcha uchun",
        ],
      },
    ],
  },
  instagram: {
    guaranteed: [
      {
        id: "ig_guaranteed_1",
        name: "1000 obunachi",
        price: 15000,
        badge: "1️⃣",
        features: [
          "✅ 90 kun kafolat",
          "✅ Haqiqiy va aktiv",
          "✅ 24 soat ichida boshlanadi",
        ],
      },
      {
        id: "ig_guaranteed_2",
        name: "2000 obunachi",
        price: 23000,
        badge: "2️⃣",
        features: [
          "✅ 90 kun kafolat",
          "✅ Haqiqiy va aktiv",
          "✅ 24 soat ichida boshlanadi",
        ],
      },
      {
        id: "ig_guaranteed_3",
        name: "3000 obunachi",
        price: 27000,
        badge: "3️⃣",
        features: [
          "✅ 90 kun kafolat",
          "✅ Haqiqiy va aktiv",
          "✅ 24 soat ichida boshlanadi",
        ],
      },
      {
        id: "ig_guaranteed_4",
        name: "5000 obunachi",
        price: 40000,
        badge: "4️⃣",
        features: [
          "✅ 90 kun kafolat",
          "✅ Haqiqiy va aktiv",
          "✅ 24 soat ichida boshlanadi",
        ],
      },
    ],
    cheap: [
      {
        id: "ig_cheap_1",
        name: "1000 obunachi",
        price: 11000,
        badge: "1️⃣",
        features: [
          "✅ Hamyonbop narxlar",
          "✅ O'rtacha sifat",
          "✅ Tezkor yetkazib berish",
        ],
      },
      {
        id: "ig_cheap_2",
        name: "2000 obunachi",
        price: 16000,
        badge: "2️⃣",
        features: [
          "✅ Hamyonbop narxlar",
          "✅ O'rtacha sifat",
          "✅ Tezkor yetkazib berish",
        ],
      },
      {
        id: "ig_cheap_3",
        name: "3000 obunachi",
        price: 20000,
        badge: "3️⃣",
        features: [
          "✅ Hamyonbop narxlar",
          "✅ O'rtacha sifat",
          "✅ Tezkor yetkazib berish",
        ],
      },
      {
        id: "ig_cheap_4",
        name: "5000 obunachi",
        price: 27000,
        badge: "4️⃣",
        features: [
          "✅ Hamyonbop narxlar",
          "✅ O'rtacha sifat",
          "✅ Tezkor yetkazib berish",
        ],
      },
    ],
    views: [
      {
        id: "ig_views_1",
        name: "10000 ko'rish",
        price: 5000,
        badge: "1️⃣",
        features: [
          "✅ Postlarni ommalashtirish",
          "✅ Organic ko'rishlar",
          "✅ Profil faolligini oshirish",
        ],
      },
      {
        id: "ig_views_2",
        name: "50000 ko'rish",
        price: 12000,
        badge: "2️⃣",
        features: [
          "✅ Postlarni ommalashtirish",
          "✅ Organic ko'rishlar",
          "✅ Profil faolligini oshirish",
        ],
      },
      {
        id: "ig_views_3",
        name: "100000 ko'rish",
        price: 25000,
        badge: "3️⃣",
        features: [
          "✅ Postlarni ommalashtirish",
          "✅ Organic ko'rishlar",
          "✅ Profil faolligini oshirish",
        ],
      },
      {
        id: "ig_views_4",
        name: "50000 ko'rish",
        price: 30000,
        badge: "4️⃣",
        features: [
          "✅ Postlarni ommalashtirish",
          "✅ Organic ko'rishlar",
          "✅ Profil faolligini oshirish",
        ],
      },
    ],
    likes: [
      {
        id: "ig_likes_1",
        name: "1000 like",
        price: 5000,
        badge: "1️⃣",
        features: [
          "✅ Interaktivlikni oshirish",
          "✅ Post reytingini yaxshilash",
          "✅ Tezkor yetkazib berish",
        ],
      },
      {
        id: "ig_likes_2",
        name: "5000 like",
        price: 25000,
        badge: "2️⃣",
        features: [
          "✅ Interaktivlikni oshirish",
          "✅ Post reytingini yaxshilash",
          "✅ Tezkor yetkazib berish",
        ],
      },
      {
        id: "ig_likes_3",
        name: "10000 like",
        price: 50000,
        badge: "3️⃣",
        features: [
          "✅ Interaktivlikni oshirish",
          "✅ Post reytingini yaxshilash",
          "✅ Tezkor yetkazib berish",
        ],
      },
      {
        id: "ig_likes_4",
        name: "50000 like",
        price: 100000,
        badge: "4️⃣",
        features: [
          "✅ Interaktivlikni oshirish",
          "✅ Post reytingini yaxshilash",
          "✅ Tezkor yetkazib berish",
        ],
      },
    ],
  },
  pubg: [
    {
      id: "pubg_1",
      name: "60 UC",
      flag: "🇺🇸",
      price: 12000,
      badge: "1️⃣",
      features: [
        "✅ Darhol yetkazib berish",
        "✅ Barcha serverlar uchun",
        "✅ 100% xavfsiz",
      ],
    },
    {
      id: "pubg_2",
      name: "325 UC",
      flag: "🇺🇸",
      price: 56000,
      badge: "2️⃣",
      features: [
        "✅ Darhol yetkazib berish",
        "✅ Barcha serverlar uchun",
        "✅ 100% xavfsiz",
      ],
    },
    {
      id: "pubg_3",
      name: "660 UC",
      flag: "🇺🇸",
      price: 111000,
      badge: "3️⃣",
      features: [
        "✅ Darhol yetkazib berish",
        "✅ Barcha serverlar uchun",
        "✅ 100% xavfsiz",
      ],
    },
    {
      id: "pubg_4",
      name: "1800 UC",
      flag: "🇺🇸",
      price: 302000,
      badge: "4️⃣",
      features: [
        "✅ Darhol yetkazib berish",
        "✅ Barcha serverlar uchun",
        "✅ 100% xavfsiz",
      ],
    },
    {
      id: "pubg_5",
      name: "3850 UC",
      flag: "🇺🇸",
      price: 548000,
      badge: "5️⃣",
      features: [
        "✅ Darhol yetkazib berish",
        "✅ Barcha serverlar uchun",
        "✅ 100% xavfsiz",
      ],
    },
    {
      id: "pubg_6",
      name: "8100 UC",
      flag: "🇺🇸",
      price: 1100000,
      badge: "6️⃣",
      features: [
        "✅ Darhol yetkazib berish",
        "✅ Barcha serverlar uchun",
        "✅ 100% xavfsiz",
      ],
    },
  ],
  
  // TELEGRAM BOT XIZMATLARI
  telegramBot: [
    {
      id: "telegram_bot_basic",
      name: "SMM MAXSUSIY BOT",
      description: "Oddiy Telegram bot yasash",
      price: 120000,
      features: [
        "✅ Maxsus dizayn",
        "✅ Asosiy buyruqlar",
        "✅ Foydalanuvchi boshqaruvi",
        "✅ 2 kun ichida tayyor"
      ],
      badge: "🤖",
      developmentTime: "2 kun",
      includes: [
        "Bot dizayni va loyihalash",
        "Asosiy buyruqlar (start, help, info)",
        "Foydalanuvchi ma'lumotlarini saqlash",
        "Admin paneli"
      ]
    },
    {
      id: "telegram_bot_business",
      name: "PUBG cyuberSPORT BOT",
      description: "Kichik biznes uchun bot",
      price: 120000,
      features: [
        "✅ Mahsulotlar katalogi",
        "✅ Buyurtma qabul qilish",
        "✅ Admin paneli",
        "✅ 2 kun ichida tayyor"
      ],
      badge: "🤖",
      developmentTime: "2 kun",
      includes: [
        "Bot dizayni va loyihalash",
        "Mahsulotlar katalogi",
        "Buyurtma qabul qilish tizimi",
        "Admin paneli va buyurtmalar boshqaruvi",
        "Foydalanuvchi bazasi"
      ]
    },
    {
      id: "telegram_bot_pro",
      name: "PRO BOT",
      description: "SMM, CYUBERSPORT va KO'P MAQSADLI BOT",
      price: 250000,
      features: [
        "✅ To'liq moslashtirilgan",
        "✅ Ma'lumotlar bazasi bilan",
        "✅ API integratsiyasi",
        "✅ 3 kun ichida tayyor"
      ],
      badge: "🤖",
      developmentTime: "3 kun",
      includes: [
        "Bot dizayni va loyihalash",
        "To'liq moslashtirilgan interfeys",
        "Ma'lumotlar bazasi bilan ishlash",
        "API integratsiyasi",
        "Kengaytirilgan admin paneli",
        "Texnik qo'llab-quvvatlash"
      ]
    }
  ],

  // WEB SAYT XIZMATLARI
  website: [
    {
      id: "website_basic",
      name: "SMM MARKET",
      description: "Kichik biznes uchun vizitka sayt",
      price: 150000,
      features: [
        "✅ 5 sahifa",
        "✅ Mobil moslashuvchan dizayn",
        "✅ Kontent boshqaruvi tizimi",
        "✅ 5 kun ichida tayyor"
      ],
      badge: "🌐",
      developmentTime: "4 kun",
      includes: [
        "Bosh sahifa",
        "Biz haqimizda",
        "Xizmatlar",
        "Portfolio",
        "Bog'lanish",
        "Mobil moslashuvchan dizayn",
        "Kontent boshqaruvi tizimi"
      ]
    },
    {
      id: "website_corporate",
      name: "SHAXSIY SAIT",
      description: "Korporativ kompaniya sayti",
      price: 300000,
      features: [
        "✅ 10+ sahifa",
        "✅ Yangiliklar bo'limi",
        "✅ Ma'lumotlar bazasi",
        "✅ 3 kun ichida tayyor"
      ],
      badge: "🌐",
      developmentTime: "3 kun",
      includes: [
        "Bosh sahifa",
        "Kompaniya haqida",
        "Xizmatlar / Mahsulotlar",
        "Yangiliklar bo'limi",
        "Portfolio",
        "Hamkorlar",
        "Vakansiyalar",
        "Bog'lanish",
        "Ma'lumotlar bazasi",
        "Admin paneli"
      ]
    },
    {
      id: "website_shop",
      name: "ONLAYN DO'KON",
      description: "To'liq onlayn savdo platformasi",
      price: 200000,
      features: [
        "✅ To'lov tizimlari",
        "✅ Mahsulotlar katalogi",
        "✅ Buyurtma boshqaruvi",
        "✅ 5 kun ichida tayyor"
      ],
      badge: "🌐",
      developmentTime: "5 kun",
      includes: [
        "Bosh sahifa",
        "Mahsulotlar katalogi",
        "Savat va buyurtma tizimi",
        "To'lov tizimlari (Click, Payme, bank kartalari)",
        "Foydalanuvchi kabineti",
        "Buyurtmalar boshqaruvi",
        "Admin paneli",
        "Ma'lumotlar bazasi",
        "Xavfsizlik tizimi"
      ]
    }
  ],
};

// 2. STATE MANAGEMENT
let cart = JSON.parse(localStorage.getItem("smm_cart")) || [];
let orders = JSON.parse(localStorage.getItem("smm_orders")) || [];
let selectedBot = null;
let selectedWebsite = null;

// 3. DOM ELEMENTS
const sections = document.querySelectorAll(".section");
const modal = document.getElementById("modal");
const cartCount = document.getElementById("cartCount");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");

// 4. TOASTR CONFIG
toastr.options = {
  positionClass: "toast-top-right",
  progressBar: true,
  timeOut: 3000,
  closeButton: true,
};

// 5. INITIALIZE
document.addEventListener("DOMContentLoaded", function () {
  // Hide loading screen
  setTimeout(() => {
    document.getElementById("loading").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("loading").style.display = "none";
    }, 500);
  }, 1000);

  console.log("🚀 SMM Market ishga tushdi!");

  updateCartCount();
  loadUserName();
  setupEventListeners();
  loadOrders();
  checkFirstTimeVisit();
});

// 6. EVENT LISTENERS
function setupEventListeners() {
  console.log("🔧 Event listenerlar o'rnatilmoqda...");

  // Navigation buttons
  if (document.getElementById("homeBtn")) {
    document.getElementById("homeBtn").onclick = (e) => {
      e.preventDefault();
      showSection("homeSection");
    };
  }

  if (document.getElementById("servicesBtn")) {
    document.getElementById("servicesBtn").onclick = (e) => {
      e.preventDefault();
      showSection("servicesSection");
    };
  }

  if (document.getElementById("cartBtn")) {
    document.getElementById("cartBtn").onclick = (e) => {
      e.preventDefault();
      showCart();
    };
  }

  if (document.getElementById("ordersBtn")) {
    document.getElementById("ordersBtn").onclick = (e) => {
      e.preventDefault();
      showOrders();
    };
  }

  // Main buttons
  if (document.getElementById("showServicesBtn")) {
    document.getElementById("showServicesBtn").onclick = () => {
      showSection("servicesSection");
    };
  }

  if (document.getElementById("contactAdminBtn")) {
    document.getElementById("contactAdminBtn").onclick = () => {
      contactAdmin("buyurtmasiz");
    };
  }

  // Mobile menu
  if (menuToggle) {
    menuToggle.onclick = (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("active");
      document.body.classList.toggle("navbar-open");
    };
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
      navLinks.classList.remove("active");
      document.body.classList.remove("navbar-open");
    }
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove("active");
      document.body.classList.remove("navbar-open");
    });
  });

  // Close modal on outside click
  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };

  // Checkout button
  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.onclick = checkout;
  }

  console.log("✅ Barcha event listenerlar o'rnatildi");
}

// 7. NAVIGATION FUNCTIONS
function showSection(sectionId) {
  console.log("🔄 Sahifaga o'tish:", sectionId);

  sections.forEach((section) => {
    section.classList.remove("active");
  });

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add("active");

    // Load tariffs if needed
    if (sectionId === "telegramPremiumSection") {
      loadTelegramTariffs("premium");
    } else if (sectionId === "telegramStarsSection") {
      loadTelegramTariffs("stars");
    } else if (sectionId === "telegramGiftSection") {
      loadTelegramTariffs("gift");
    } else if (sectionId === "instagramGuaranteedSection") {
      loadInstagramTariffs("guaranteed");
    } else if (sectionId === "pubgSection") {
      loadPubgTariffs();
    } else if (sectionId === "telegramBotSection") {
      loadTelegramBotTariffs();
    } else if (sectionId === "websiteSection") {
      loadWebsiteTariffs();
    }

    // Close mobile menu
    if (navLinks) {
      navLinks.classList.remove("active");
      document.body.classList.remove("navbar-open");
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }
}

// 8. CATEGORY NAVIGATION
function showCategory(category) {
  console.log("🎯 Kategoriya tanlandi:", category);

  switch (category) {
    case "telegram":
      showSection("telegramSection");
      break;
    case "instagram":
      showSection("instagramSection");
      break;
    case "pubg":
      showSection("pubgSection");
      break;
    case "telegramBot":
      showSection("telegramBotSection");
      break;
    case "website":
      showSection("websiteSection");
      break;
  }
}

function showTelegramService(service) {
  console.log("📱 Telegram xizmati tanlandi:", service);

  switch (service) {
    case "premium":
      showSection("telegramPremiumSection");
      break;
    case "stars":
      showSection("telegramStarsSection");
      break;
    case "gift":
      showSection("telegramGiftSection");
      break;
  }
}

function showInstagramService(service) {
  console.log("📸 Instagram xizmati tanlandi:", service);
  showSection("instagramGuaranteedSection");
  loadInstagramTariffs(service);
}

// 9. BACK FUNCTIONS
function goHome() {
  showSection("homeSection");
}

function goBackToServices() {
  showSection("servicesSection");
}

function goBackToTelegram() {
  showSection("telegramSection");
}

function goBackToInstagram() {
  showSection("instagramSection");
}

function goBackToTelegramBot() {
  showSection("telegramBotSection");
}

function goBackToWebsite() {
  showSection("websiteSection");
}

function goBackToCart() {
  showCart();
}

// 10. LOAD TARIFFS
function loadTelegramTariffs(serviceType) {
  console.log("📊 Telegram tariflari yuklanmoqda:", serviceType);

  const tariffs = tariffsData.telegram[serviceType];
  let sectionId;

  switch (serviceType) {
    case "premium":
      sectionId = "telegramTariffs";
      break;
    case "stars":
      sectionId = "telegramStarsTariffs";
      break;
    case "gift":
      sectionId = "telegramGiftTariffs";
      break;
    default:
      return;
  }

  const container = document.getElementById(sectionId);
  if (!container) return;

  let html = "";
  tariffs.forEach((tariff) => {
    html += `
            <div class="tariff-card">
                <div class="tariff-header">
                    <span class="tariff-badge">${tariff.badge || ""}</span>
                    <span class="tariff-price">${formatPrice(
                      tariff.price
                    )}</span>
                </div>
                <h3>${tariff.emoji ? tariff.emoji + " " : ""}${tariff.name}</h3>
                <p>${tariff.description}</p>
                <ul class="tariff-features">
                    ${tariff.features
                      .map(
                        (feature) =>
                          `<li><i class="fas fa-check"></i> ${feature}</li>`
                      )
                      .join("")}
                </ul>
                <button class="btn-service" onclick="addToCart('${
                  tariff.id
                }', 'Telegram ${
      serviceType === "premium"
        ? "Premium"
        : serviceType === "stars"
        ? "Stars"
        : "Gift"
    } - ${tariff.name}', ${tariff.price})">
                    <i class="fas fa-cart-plus"></i> Savatchaga qo'shish
                </button>
            </div>
        `;
  });

  container.innerHTML = html;
}

function loadInstagramTariffs(serviceType) {
  console.log("📊 Instagram tariflari yuklanmoqda:", serviceType);

  const tariffs = tariffsData.instagram[serviceType];
  const container = document.getElementById("instagramGuaranteedTariffs");

  if (!container || !tariffs) return;

  let serviceName = "";
  switch (serviceType) {
    case "guaranteed":
      serviceName = "Kafolatlangan";
      break;
    case "cheap":
      serviceName = "Arzon";
      break;
    case "views":
      serviceName = "Ko'rishlar";
      break;
    case "likes":
      serviceName = "Layklar";
      break;
  }

  let html = "";
  tariffs.forEach((tariff) => {
    html += `
            <div class="tariff-card">
                <div class="tariff-header">
                    <span class="tariff-badge">${tariff.badge}</span>
                    <span class="tariff-price">${formatPrice(
                      tariff.price
                    )}</span>
                </div>
                <h3>${tariff.name}</h3>
                <ul class="tariff-features">
                    ${tariff.features
                      .map(
                        (feature) =>
                          `<li><i class="fas fa-check"></i> ${feature}</li>`
                      )
                      .join("")}
                </ul>
                <button class="btn-service" onclick="addToCart('${
                  tariff.id
                }', 'Instagram ${serviceName} - ${tariff.name}', ${
      tariff.price
    })">
                    <i class="fas fa-cart-plus"></i> Savatchaga qo'shish
                </button>
            </div>
        `;
  });

  container.innerHTML = html;

  // Update title
  const titleMap = {
    guaranteed: "KAFOLATLANGAN OBUNACHILAR",
    cheap: "ARZON OBUNACHILAR",
    views: "KO'RISHLAR",
    likes: "LAYKLAR",
  };

  const titleElement = document.querySelector("#instagramGuaranteedSection h2");
  if (titleElement && titleMap[serviceType]) {
    titleElement.innerHTML = `<i class="${
      serviceType === "guaranteed"
        ? "fas fa-shield-alt"
        : serviceType === "cheap"
        ? "fas fa-wallet"
        : serviceType === "views"
        ? "fas fa-eye"
        : "fas fa-heart"
    }"></i> INSTAGRAM ${titleMap[serviceType]}`;
  }
}

function loadPubgTariffs() {
  console.log("🎮 PUBG tariflari yuklanmoqda");

  const tariffs = tariffsData.pubg;
  const container = document.getElementById("pubgTariffs");

  if (!container) return;

  let html = "";
  tariffs.forEach((tariff) => {
    html += `
            <div class="tariff-card">
                <div class="tariff-header">
                    <span class="tariff-badge">${tariff.badge}</span>
                    <span class="tariff-price">${formatPrice(
                      tariff.price
                    )}</span>
                </div>
                <h3>${tariff.flag} ${tariff.name}</h3>
                <ul class="tariff-features">
                    ${tariff.features
                      .map(
                        (feature) =>
                          `<li><i class="fas fa-check"></i> ${feature}</li>`
                      )
                      .join("")}
                </ul>
                <button class="btn-service" onclick="addToCart('${
                  tariff.id
                }', 'PUBG UC - ${tariff.flag} ${tariff.name}', ${
      tariff.price
    })">
                    <i class="fas fa-cart-plus"></i> Savatchaga qo'shish
                </button>
            </div>
        `;
  });

  container.innerHTML = html;
}

// TELEGRAM BOT TARIFLARINI YUKLASH
function loadTelegramBotTariffs() {
  console.log("🤖 Telegram bot tariflari yuklanmoqda");

  const tariffs = tariffsData.telegramBot;
  const container = document.getElementById("telegramBotTariffs");

  if (!container) return;

  let html = "";
  tariffs.forEach((tariff) => {
    html += `
            <div class="tariff-card">
                <div class="tariff-header">
                    <span class="tariff-badge">${tariff.badge}</span>
                    <span class="tariff-price">${formatPrice(
                      tariff.price
                    )}</span>
                </div>
                <h3>${tariff.name}</h3>
                <p>${tariff.description}</p>
                <div class="bot-develop-info">
                    <p><i class="fas fa-clock"></i> Tayyor bo'lish muddati: <strong>${
                      tariff.developmentTime
                    }</strong></p>
                </div>
                <ul class="tariff-features">
                    ${tariff.features
                      .map(
                        (feature) =>
                          `<li><i class="fas fa-check"></i> ${feature}</li>`
                      )
                      .join("")}
                </ul>
                <button class="btn-service" onclick="selectTelegramBot('${
                  tariff.id
                }')">
                    <i class="fas fa-arrow-right"></i> Tanlash va buyurtma berish
                </button>
            </div>
        `;
  });

  container.innerHTML = html;
}

// TELEGRAM BOTNI TANLASH
function selectTelegramBot(botId) {
  console.log("🤖 Telegram bot tanlandi:", botId);
  
  const bot = tariffsData.telegramBot.find(b => b.id === botId);
  if (!bot) return;
  
  selectedBot = bot;
  showBotOrderForm();
}

// TELEGRAM BOT BUYURTMA FORMASINI KO'RSATISH
function showBotOrderForm() {
  if (!selectedBot) return;
  
  showSection("telegramBotOrderSection");
  
  const container = document.getElementById("botOrderContainer");
  
  let html = `
        <div class="bot-info-card">
            <h3><i class="fas fa-robot"></i> Tanlangan Bot: ${selectedBot.name}</h3>
            <p>${selectedBot.description}</p>
            <div class="bot-price-info">
                <h4><i class="fas fa-tag"></i> Narx: ${formatPrice(selectedBot.price)}</h4>
                <p><i class="fas fa-clock"></i> Tayyor bo'lish muddati: ${selectedBot.developmentTime}</p>
            </div>
        </div>
        
        <div class="bot-details">
            <div class="detail-item">
                <h4><i class="fas fa-list-check"></i> Kiritilgan xizmatlar:</h4>
                <ul class="tariff-features">
                    ${selectedBot.includes
                      .map(item => `<li><i class="fas fa-check"></i> ${item}</li>`)
                      .join("")}
                </ul>
            </div>
            
            <div class="detail-item">
                <h4><i class="fas fa-info-circle"></i> Qo'shimcha ma'lumot:</h4>
                <p><strong>Bot yasash jarayoni:</strong></p>
                <ol>
                    <li>Bot dizayni va loyihalash</li>
                    <li>Kod yozish va test qilish</li>
                    <li>Serverga joylashtirish</li>
                    <li>So'nggi testlar va topshirish</li>
                </ol>
                <p><strong>Eslatma:</strong> Botning ishlashi uchun sizning Telegram akkauntingiz kerak bo'ladi.</p>
            </div>
        </div>
        
        <div class="order-instruction">
            <h4><i class="fas fa-clipboard-check"></i> Buyurtma berish tartibi:</h4>
            <div class="order-steps">
                <div class="step">
                    <div class="step-number">1</div>
                    <p>Quyidagi "Zakaz Berish" tugmasini bosing</p>
                </div>
                <div class="step">
                    <div class="step-number">2</div>
                    <p>Admin bilan Telegramda bog'lanasiz</p>
                </div>
                <div class="step">
                    <div class="step-number">3</div>
                    <p>Bot talablaringizni batafsil muhokama qilasiz</p>
                </div>
                <div class="step">
                    <div class="step-number">4</div>
                    <p>Admin sizga to'lov ma'lumotlarini yuboradi</p>
                </div>
                <div class="step">
                    <div class="step-number">5</div>
                    <p>To'lov qilgandan so'ng bot yasash boshlanadi</p>
                </div>
            </div>
        </div>
        
        <div class="order-action-buttons">
            <button class="btn-primary btn-lg" onclick="placeBotOrder()">
                <i class="fab fa-telegram"></i> ZAKAZ BERISH
            </button>
            <button class="btn-secondary" onclick="goBackToTelegramBot()">
                <i class="fas fa-arrow-left"></i> Ortga qaytish
            </button>
        </div>
    `;
  
  container.innerHTML = html;
}

// TELEGRAM BOT BUYURTMA BERISH
function placeBotOrder() {
  if (!selectedBot) return;
  
  const orderId = "BOT-" + Date.now();
  
  const orderMessage = `Assalomu alaykum! Men Telegram bot buyurtma berishni xohlayman.

Bot turi: ${selectedBot.name}
Narxi: ${formatPrice(selectedBot.price)}
Tayyor bo'lish muddati: ${selectedBot.developmentTime}

Bot talablari haqida batafsil gaplashishimiz kerak.`;

  // Telegram admin bilan bog'lanish
  contactAdmin(`bot_order_${orderId}`, orderMessage);
  
  // Toast xabar
  showToast("✅ Admin bilan bog'lanish oynasi ochildi!", "success");
  
  // Modalni ko'rsatish
  showBotOrderModal(orderId);
}

// TELEGRAM BOT BUYURTMA MODALI
function showBotOrderModal(orderId) {
  let html = `
        <div class="order-confirmation">
            <div class="confirmation-icon">
                <i class="fas fa-robot"></i>
            </div>
            <h2>TELEGRAM BOT BUYURTMASI</h2>
            <p>Buyurtma raqami: <strong>${orderId}</strong></p>
            <p>Bot turi: <strong>${selectedBot.name}</strong></p>
            <p>Narx: <strong>${formatPrice(selectedBot.price)}</strong></p>
            <p>Tayyor bo'lish muddati: <strong>${selectedBot.developmentTime}</strong></p>
            
            <div class="instructions">
                <h4><i class="fas fa-info-circle"></i> DIQQAT! ENDI ADMINGA BOT TALABLARINGIZNI YOZING:</h4>
                
                <div class="alert alert-info">
                    <i class="fas fa-exclamation-triangle"></i>
                    <strong>BOTNING QANDAY BO'LISHINI BATAFSIL TASVIRLAB BERING!</strong>
                </div>
                
                <h4><i class="fas fa-paper-plane"></i> Admin bilan gaplashishda:</h4>
                <ol>
                    <li>Botning asosiy maqsadini aytib bering</li>
                    <li>Qanday funksiyalar bo'lishini aniqlang</li>
                    <li>Bot nomini va tokenini o'rnatish</li>
                    <li>Qo'shimcha talablaringiz bo'lsa aytib qo'ying</li>
                </ol>
                
                <p class="note"><i class="fas fa-clock"></i> Bot ${selectedBot.developmentTime} ichida tayyor bo'ladi.</p>
            </div>
            
            <div class="action-buttons">
                <button onclick="contactAdmin('bot_order_${orderId}')" class="btn-primary">
                    <i class="fab fa-telegram"></i> ADMIN BILAN GAFLASHISHNI BOSHLASH
                </button>
                <button onclick="goHome()" class="btn-outline">
                    <i class="fas fa-home"></i> BOSH MENYUGA QAYTISH
                </button>
            </div>
        </div>
    `;

  document.getElementById("modalBody").innerHTML = html;
  modal.style.display = "flex";
}

// WEB SAYT TARIFLARINI YUKLASH
function loadWebsiteTariffs() {
  console.log("🌐 Web sayt tariflari yuklanmoqda");

  const tariffs = tariffsData.website;
  const container = document.getElementById("websiteTariffs");

  if (!container) return;

  let html = "";
  tariffs.forEach((tariff) => {
    html += `
            <div class="tariff-card">
                <div class="tariff-header">
                    <span class="tariff-badge">${tariff.badge}</span>
                    <span class="tariff-price">${formatPrice(
                      tariff.price
                    )}</span>
                </div>
                <h3>${tariff.name}</h3>
                <p>${tariff.description}</p>
                <div class="website-develop-info">
                    <p><i class="fas fa-clock"></i> Tayyor bo'lish muddati: <strong>${
                      tariff.developmentTime
                    }</strong></p>
                </div>
                <ul class="tariff-features">
                    ${tariff.features
                      .map(
                        (feature) =>
                          `<li><i class="fas fa-check"></i> ${feature}</li>`
                      )
                      .join("")}
                </ul>
                <button class="btn-service" onclick="selectWebsite('${
                  tariff.id
                }')">
                    <i class="fas fa-arrow-right"></i> Tanlash va buyurtma berish
                </button>
            </div>
        `;
  });

  container.innerHTML = html;
}

// WEB SAYTNI TANLASH
function selectWebsite(websiteId) {
  console.log("🌐 Web sayt tanlandi:", websiteId);
  
  const website = tariffsData.website.find(w => w.id === websiteId);
  if (!website) return;
  
  selectedWebsite = website;
  showWebsiteOrderForm();
}

// WEB SAYT BUYURTMA FORMASINI KO'RSATISH
function showWebsiteOrderForm() {
  if (!selectedWebsite) return;
  
  showSection("websiteOrderSection");
  
  const container = document.getElementById("websiteOrderContainer");
  
  let html = `
        <div class="website-info-card">
            <h3><i class="fas fa-globe"></i> Tanlangan Sayt: ${selectedWebsite.name}</h3>
            <p>${selectedWebsite.description}</p>
            <div class="website-price-info">
                <h4><i class="fas fa-tag"></i> Narx: ${formatPrice(selectedWebsite.price)}</h4>
                <p><i class="fas fa-clock"></i> Tayyor bo'lish muddati: ${selectedWebsite.developmentTime}</p>
            </div>
        </div>
        
        <div class="website-details">
            <div class="detail-item">
                <h4><i class="fas fa-list-check"></i> Kiritilgan xizmatlar:</h4>
                <ul class="tariff-features">
                    ${selectedWebsite.includes
                      .map(item => `<li><i class="fas fa-check"></i> ${item}</li>`)
                      .join("")}
                </ul>
            </div>
            
            <div class="detail-item">
                <h4><i class="fas fa-info-circle"></i> Qo'shimcha ma'lumot:</h4>
                <p><strong>Sayt yasash jarayoni:</strong></p>
                <ol>
                    <li>Dizayn va maket yaratish</li>
                    <li>Frontend va Backend dasturlash</li>
                    <li>Ma'lumotlar bazasini sozlash</li>
                    <li>Test qilish va hostingga joylashtirish</li>
                </ol>
                <p><strong>Eslatma:</strong> Domen va hosting alohida sotib olinadi (yordam beramiz).</p>
            </div>
        </div>
        
        <div class="order-instruction">
            <h4><i class="fas fa-clipboard-check"></i> Buyurtma berish tartibi:</h4>
            <div class="order-steps">
                <div class="step">
                    <div class="step-number">1</div>
                    <p>Quyidagi "Zakaz Berish" tugmasini bosing</p>
                </div>
                <div class="step">
                    <div class="step-number">2</div>
                    <p>Admin bilan Telegramda bog'lanasiz</p>
                </div>
                <div class="step">
                    <div class="step-number">3</div>
                    <p>Sayt talablaringizni batafsil muhokama qilasiz</p>
                </div>
                <div class="step">
                    <div class="step-number">4</div>
                    <p>Admin sizga to'lov ma'lumotlarini yuboradi</p>
                </div>
                <div class="step">
                    <div class="step-number">5</div>
                    <p>To'lov qilgandan so'ng sayt yasash boshlanadi</p>
                </div>
            </div>
        </div>
        
        <div class="order-action-buttons">
            <button class="btn-primary btn-lg" onclick="placeWebsiteOrder()">
                <i class="fab fa-telegram"></i> ZAKAZ BERISH
            </button>
            <button class="btn-secondary" onclick="goBackToWebsite()">
                <i class="fas fa-arrow-left"></i> Ortga qaytish
            </button>
        </div>
    `;
  
  container.innerHTML = html;
}

// WEB SAYT BUYURTMA BERISH
function placeWebsiteOrder() {
  if (!selectedWebsite) return;
  
  const orderId = "WEB-" + Date.now();
  
  const orderMessage = `Assalomu alaykum! Men Web sayt buyurtma berishni xohlayman.

Sayt turi: ${selectedWebsite.name}
Narxi: ${formatPrice(selectedWebsite.price)}
Tayyor bo'lish muddati: ${selectedWebsite.developmentTime}

Sayt talablari haqida batafsil gaplashishimiz kerak.`;

  // Telegram admin bilan bog'lanish
  contactAdmin(`website_order_${orderId}`, orderMessage);
  
  // Toast xabar
  showToast("✅ Admin bilan bog'lanish oynasi ochildi!", "success");
  
  // Modalni ko'rsatish
  showWebsiteOrderModal(orderId);
}

// WEB SAYT BUYURTMA MODALI
function showWebsiteOrderModal(orderId) {
  let html = `
        <div class="order-confirmation">
            <div class="confirmation-icon">
                <i class="fas fa-globe"></i>
            </div>
            <h2>WEB SAYT BUYURTMASI</h2>
            <p>Buyurtma raqami: <strong>${orderId}</strong></p>
            <p>Sayt turi: <strong>${selectedWebsite.name}</strong></p>
            <p>Narx: <strong>${formatPrice(selectedWebsite.price)}</strong></p>
            <p>Tayyor bo'lish muddati: <strong>${selectedWebsite.developmentTime}</strong></p>
            
            <div class="instructions">
                <h4><i class="fas fa-info-circle"></i> DIQQAT! ENDI ADMINGA SAYT TALABLARINGIZNI YOZING:</h4>
                
                <div class="alert alert-info">
                    <i class="fas fa-exclamation-triangle"></i>
                    <strong>SAYTNING QANDAY BO'LISHINI BATAFSIL TASVIRLAB BERING!</strong>
                </div>
                
                <h4><i class="fas fa-paper-plane"></i> Admin bilan gaplashishda:</h4>
                <ol>
                    <li>Saytning asosiy maqsadini aytib bering</li>
                    <li>Qanday sahifalar bo'lishini aniqlang</li>
                    <li>Dizayn va ranglar haqida fikringizni aytib qo'ying</li>
                    <li>Qo'shimcha funksiyalar talablaringiz bo'lsa aytib qo'ying</li>
                </ol>
                
                <p class="note"><i class="fas fa-clock"></i> Sayt ${selectedWebsite.developmentTime} ichida tayyor bo'ladi.</p>
            </div>
            
            <div class="action-buttons">
                <button onclick="contactAdmin('website_order_${orderId}')" class="btn-primary">
                    <i class="fab fa-telegram"></i> ADMIN BILAN GAFLASHISHNI BOSHLASH
                </button>
                <button onclick="goHome()" class="btn-outline">
                    <i class="fas fa-home"></i> BOSH MENYUGA QAYTISH
                </button>
            </div>
        </div>
    `;

  document.getElementById("modalBody").innerHTML = html;
  modal.style.display = "flex";
}

// 11. CART FUNCTIONS
function addToCart(id, name, price) {
  console.log("➕ Savatchaga qo'shish:", name);

  const existingItem = cart.find((item) => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: id,
      name: name,
      price: price,
      quantity: 1,
      date: new Date().toISOString(),
    });
  }

  updateCartCount();
  saveCart();
  showToast(`✅ "${name}" savatchaga qo'shildi!`, "success");
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCount) {
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? "flex" : "none";
  }
}

function showCart() {
  console.log("🛒 Savatcha ko'rsatilmoqda");
  showSection("cartSection");
  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById("cartItems");

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart fa-3x"></i>
                <h3>Savatchangiz bo'sh</h3>
                <p>Xizmatlar tanlash uchun xizmatlar bo'limiga o'ting</p>
                <button onclick="showSection('servicesSection')" class="btn-primary">
                    Xizmatlar sahifasiga o'tish
                </button>
            </div>
        `;
    document.getElementById("totalPrice").textContent = "0 so'm";
    document.getElementById("checkoutBtn").disabled = true;
    return;
  }

  let html = "";
  let totalPrice = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;

    html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-quantity">
                        <button onclick="updateQuantity(${index}, -1)" class="quantity-btn">-</button>
                        <span>${item.quantity} ta</span>
                        <button onclick="updateQuantity(${index}, 1)" class="quantity-btn">+</button>
                    </div>
                </div>
                <div class="cart-item-price">${formatPrice(itemTotal)}</div>
                <button onclick="removeFromCart(${index})" class="remove-item">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
  });

  container.innerHTML = html;
  document.getElementById("totalPrice").textContent = formatPrice(totalPrice);
  document.getElementById("checkoutBtn").disabled = false;
}

function updateQuantity(index, change) {
  cart[index].quantity += change;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  updateCartCount();
  saveCart();
  renderCartItems();
}

function removeFromCart(index) {
  if (confirm("Bu xizmatni savatchadan olib tashlamoqchimisiz?")) {
    const removedItem = cart.splice(index, 1)[0];
    updateCartCount();
    saveCart();
    renderCartItems();
    showToast(`🗑️ "${removedItem.name}" savatchadan olib tashlandi`, "info");
  }
}

function saveCart() {
  localStorage.setItem("smm_cart", JSON.stringify(cart));
}

// 12. CHECKOUT FUNCTIONS
function checkout() {
  console.log("💰 To'lov sahifasiga o'tish");
  if (cart.length === 0) {
    showToast("❌ Savatchangiz bo'sh!", "error");
    return;
  }
  showSection("checkoutSection");
  renderOrderDetails();
}

function renderOrderDetails() {
  const container = document.getElementById("orderDetails");
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  let html = `
        <h3><i class="fas fa-shopping-bag"></i> BUYURTMA TAFSILOTLARI</h3>
        <div class="order-items">
    `;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    html += `
            <div class="order-item-summary">
                <span>${item.name}</span>
                <span>${item.quantity} x ${formatPrice(
      item.price
    )} = ${formatPrice(itemTotal)}</span>
            </div>
        `;
  });

  html += `
        </div>
        <div class="order-total">
            <strong>Jami to'lov:</strong>
            <strong>${formatPrice(totalPrice)}</strong>
        </div>
    `;

  container.innerHTML = html;
}

function confirmPayment() {
  const orderId = "ORD-" + Date.now();
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const newOrder = {
    id: orderId,
    items: [...cart],
    total: totalPrice,
    date: new Date().toISOString(),
    status: "pending",
  };

  orders.push(newOrder);
  saveOrders();

  // Clear cart
  cart = [];
  saveCart();
  updateCartCount();

  showToast(
    "✅ Buyurtmangiz qabul qilindi! Endi adminga chekni tashlang...",
    "success"
  );

  // Show confirmation and redirect to admin panel
  showOrderConfirmation(newOrder);
}

function showOrderConfirmation(order) {
  let html = `
        <div class="order-confirmation">
            <div class="confirmation-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h2>BUYURTMA BERILDI!</h2>
            <p>Buyurtma raqami: <strong>${order.id}</strong></p>
            <p>Jami to'lov: <strong>${formatPrice(order.total)}</strong></p>
            <p>Sana: <strong>${new Date(order.date).toLocaleDateString(
              "uz-UZ"
            )}</strong></p>
            
            <div class="instructions">
                <h4><i class="fas fa-info-circle"></i> ENDI CHEK RASMINGIZNI ADMINGA TASHLANG:</h4>
                
                <div class="alert alert-info">
                    <i class="fas fa-exclamation-triangle"></i>
                    <strong>QUYIDAGI TUGMANI BOSING VA CHEK RASMINGIZNI YUBORING!</strong>
                </div>
                
                <h4><i class="fas fa-paper-plane"></i> Qanday qilish kerak:</h4>
                <ol>
                    <li>Quyidagi "CHEKNI ADMINGA TASHLASH" tugmasini bosing</li>
                    <li>Telegram ochilganda, chek rasmingizni yuboring</li>
                    <li>Buyurtma raqamingizni ham yozib qo'ying</li>
                    <li>Admin sizni tekshiradi va xizmatni boshlaydi</li>
                </ol>
                
                <p class="note"><i class="fas fa-clock"></i> Chekni tashlaganingizdan so'ng xizmat 1-24 soat ichida boshlanadi.</p>
            </div>
            
            <div class="action-buttons">
                <button onclick="openAdminPanel('${
                  order.id
                }')" class="btn-primary">
                    <i class="fab fa-telegram"></i> CHEKNI ADMINGA TASHLASH
                </button>
                <button onclick="copyOrderId('${
                  order.id
                }')" class="btn-secondary">
                    <i class="fas fa-copy"></i> BUYURTMA RAQAMINI NUSXALASH
                </button>
                <button onclick="goHome()" class="btn-outline">
                    <i class="fas fa-home"></i> BOSH MENYUGA QAYTISH
                </button>
            </div>
        </div>
    `;

  document.getElementById("modalBody").innerHTML = html;
  modal.style.display = "flex";
}

// 13. ADMIN PANEL FUNCTIONS
function openAdminPanel(orderId) {
  // Telegram botga to'g'ridan-to'g'ri xabar yuborish
  const botToken = "8125306375:AAHg80Y9enb5a_KWk-WB7C-nCA1Bqstw33Q";
  const chatId = "8074394669";
  
  // Buyurtma ma'lumotlarini yig'amiz
  let orderDetails = `📦 <b>YANGI BUYURTMA!</b>\n\n`;
  orderDetails += `🆔 <b>Buyurtma raqami:</b> ${orderId}\n`;
  orderDetails += `📅 <b>Sana:</b> ${new Date().toLocaleDateString('uz-UZ')}\n`;
  orderDetails += `⏰ <b>Soat:</b> ${new Date().toLocaleTimeString('uz-UZ')}\n\n`;
  
  // Foydalanuvchi nomi
  const userName = localStorage.getItem("smm_userName") || "Noma'lum";
  orderDetails += `👤 <b>Foydalanuvchi:</b> ${userName}\n\n`;
  
  // Buyurtma tarkibi
  const order = orders.find(o => o.id === orderId);
  if (order) {
    orderDetails += `🛍️ <b>Buyurtma tarkibi:</b>\n`;
    order.items.forEach((item, index) => {
      orderDetails += `${index + 1}. ${item.name} - ${item.quantity} x ${formatPrice(item.price)} = ${formatPrice(item.price * item.quantity)}\n`;
    });
    orderDetails += `\n💰 <b>Jami to'lov:</b> ${formatPrice(order.total)}\n`;
    orderDetails += `📊 <b>Status:</b> Kutilmoqda\n`;
  }
  
  orderDetails += `\n📱 <b>Platforma:</b> SMM Market Web Sayti`;
  
  // Telegram API orqali xabar yuborish
  const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: orderDetails,
      parse_mode: 'HTML'
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Telegram xabar yuborildi:', data);
    
    // Xabar yuborilgandan so'ng, foydalanuvchini admin bilan gaplashish uchun telegram chatiga yo'naltiramiz
    setTimeout(() => {
      const adminUsername = "adhhamjonov";
      const userMessage = `Assalomu alaykum! Men buyurtma berdim.\nBuyurtma raqami: ${orderId}\n\nTo'lov qilganimni tasdiqlayman va chek rasmini tashlamoqchiman.`;
      
      const telegramUrl = `https://t.me/${adminUsername}?text=${encodeURIComponent(userMessage)}`;
      
      // Yangi oynada telegram chatini ochamiz
      window.open(telegramUrl, "_blank");
      
      // Xabarni ko'rsatamiz
      showToast("✅ Buyurtma ma'lumotlari adminga yuborildi! Endi admin bilan gaplashishingiz mumkin.", "success");
      
      // Modalni yopish
      setTimeout(() => {
        modal.style.display = "none";
      }, 2000);
    }, 1500);
  })
  .catch(error => {
    console.error('Xatolik:', error);
    
    // Agar API ishlamasa, to'g'ridan-to'g'ri telegram chatiga yo'naltiramiz
    const adminUsername = "adhhamjonov";
    const userMessage = `Assalomu alaykum! Men buyurtma berdim.\nBuyurtma raqami: ${orderId}\n\nTo'lov qilganimni tasdiqlayman va chek rasmini tashlamoqchiman.`;
    
    const telegramUrl = `https://t.me/${adminUsername}?text=${encodeURIComponent(userMessage)}`;
    
    // Yangi oynada telegram chatini ochamiz
    window.open(telegramUrl, "_blank");
    
    showToast("✅ Admin bilan gaplashish oynasi ochildi! Endi chek rasmingizni yuboring.", "success");
    
    // Modalni yopish
    setTimeout(() => {
      modal.style.display = "none";
    }, 1500);
  });

  console.log("📱 Buyurtma ma'lumotlari adminga yuborildi va chatga yo'naltirildi", orderId);
}

// 14. ORDERS FUNCTIONS
function showOrders() {
  console.log("📋 Buyurtmalar sahifasiga o'tish");
  showSection("ordersSection");
  loadOrders();
}

function loadOrders() {
  const container = document.getElementById("ordersList");

  if (!container) return;

  if (orders.length === 0) {
    container.innerHTML = `
            <div class="empty-orders">
                <i class="fas fa-clipboard-list fa-3x"></i>
                <h3>Hali buyurtmalaringiz yo'q</h3>
                <p>Birinchi buyurtmani berish uchun xizmatlar bo'limiga o'ting</p>
                <button onclick="showSection('servicesSection')" class="btn-primary">
                    Xizmatlar sahifasiga o'tish
                </button>
            </div>
        `;
    return;
  }

  let html = "";
  orders.reverse().forEach((order) => {
    let statusText, statusClass;
    switch (order.status) {
      case "pending":
        statusText = "Kutilmoqda";
        statusClass = "status-pending";
        break;
      case "processing":
        statusText = "Jarayonda";
        statusClass = "status-processing";
        break;
      case "completed":
        statusText = "Yakunlangan";
        statusClass = "status-completed";
        break;
      case "cancelled":
        statusText = "Bekor qilingan";
        statusClass = "status-cancelled";
        break;
      default:
        statusText = "Kutilmoqda";
        statusClass = "status-pending";
    }

    html += `
            <div class="order-item">
                <div>
                    <h4>${order.id}</h4>
                    <p>${new Date(order.date).toLocaleDateString("uz-UZ")}</p>
                    <p>${order.items.length} ta xizmat</p>
                </div>
                <div>
                    <div class="${statusClass} order-status">${statusText}</div>
                    <p class="order-total">${formatPrice(order.total)}</p>
                </div>
            </div>
        `;
  });

  container.innerHTML = html;
}

function saveOrders() {
  localStorage.setItem("smm_orders", JSON.stringify(orders));
}

// 15. UTILITY FUNCTIONS
function formatPrice(price) {
  return price.toLocaleString("uz-UZ") + " so'm";
}

function showToast(message, type = "info") {
  toastr[type](message);
}

function loadUserName() {
  const userName = localStorage.getItem("smm_userName") || "Mehmon";
  const userNameElement = document.getElementById("userName");
  if (userNameElement) {
    userNameElement.textContent = userName;
  }
}

function checkFirstTimeVisit() {
  if (!localStorage.getItem("smm_firstVisit")) {
    setTimeout(() => {
      const name = prompt("Ismingizni kiriting:", "Mehmon");
      if (name && name.trim() !== "") {
        localStorage.setItem("smm_userName", name);
        const userNameElement = document.getElementById("userName");
        if (userNameElement) {
          userNameElement.textContent = name;
        }
      }
    }, 1000);
    localStorage.setItem("smm_firstVisit", "true");
  }
}

// 16. ADMIN FUNCTIONS
function contactAdmin(orderId = "", customMessage = "") {
  const adminUsername = "adhhamjonov";
  
  let message;
  if (orderId.includes("bot_order_")) {
    message = customMessage || `Assalomu alaykum! Men Telegram bot buyurtma berishni xohlayman.`;
  } else if (orderId.includes("website_order_")) {
    message = customMessage || `Assalomu alaykum! Men Web sayt buyurtma berishni xohlayman.`;
  } else if (orderId === "buyurtmasiz") {
    message = "Assalomu alaykum! Men SMM Market veb-sahifasidan yozayapman.";
  } else {
    message = `Assalomu alaykum! Men buyurtma berdim.\nBuyurtma raqami: ${orderId}\n\nTo'lov qilganimni tasdiqlayman.`;
  }

  const telegramUrl = `https://t.me/${adminUsername}?text=${encodeURIComponent(
    message
  )}`;
  window.open(telegramUrl, "_blank");

  console.log("📱 Admin bilan bog'lanish:", orderId);
}

function copyOrderId(orderId) {
  navigator.clipboard
    .writeText(orderId)
    .then(() => {
      showToast(`✅ Buyurtma raqami nusxalandi: ${orderId}`, "success");
    })
    .catch((err) => {
      console.error("❌ Nusxalashda xatolik:", err);
      // Fallback method
      const tempInput = document.createElement("input");
      tempInput.value = orderId;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      showToast(`✅ Buyurtma raqami nusxalandi: ${orderId}`, "success");
    });
}

// 17. SAMPLE DATA
if (
  !localStorage.getItem("smm_orders") ||
  JSON.parse(localStorage.getItem("smm_orders")).length === 0
) {
  orders = [
    {
      id: "ORD-123456",
      items: [
        {
          id: "tg_premium_1",
          name: "Telegram Premium - 1 Oylik",
          price: 50000,
          quantity: 1,
        },
      ],
      total: 50000,
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      status: "completed",
    },
    {
      id: "ORD-123457",
      items: [
        {
          id: "ig_likes_1",
          name: "Instagram Layklar - 1000 like",
          price: 5000,
          quantity: 2,
        },
      ],
      total: 10000,
      date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      status: "processing",
    },
  ];
  saveOrders();
}

// 18. GLOBAL FUNCTIONS FOR HTML
window.showCategory = showCategory;
window.showTelegramService = showTelegramService;
window.showInstagramService = showInstagramService;
window.selectTelegramBot = selectTelegramBot;
window.selectWebsite = selectWebsite;
window.placeBotOrder = placeBotOrder;
window.placeWebsiteOrder = placeWebsiteOrder;
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.checkout = checkout;
window.confirmPayment = confirmPayment;
window.goHome = goHome;
window.goBackToServices = goBackToServices;
window.goBackToTelegram = goBackToTelegram;
window.goBackToInstagram = goBackToInstagram;
window.goBackToTelegramBot = goBackToTelegramBot;
window.goBackToWebsite = goBackToWebsite;
window.goBackToCart = goBackToCart;
window.contactAdmin = contactAdmin;
window.copyOrderId = copyOrderId;
window.openAdminPanel = openAdminPanel;

console.log("🎉 SMM Market JavaScript kodi tayyor!");