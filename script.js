// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    }));
}

// Navbar scroll and hide/show logic
let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (!header) return;
    const currentScrollY = window.scrollY;

    // Show/Hide logic
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.classList.add("nav-hidden");
    } else {
        header.classList.remove("nav-hidden");
    }

    // Background and padding logic
    if (currentScrollY > 50) {
        header.style.padding = "0.5rem 0";
        header.style.background = "rgba(255, 255, 255, 0.95)";
    } else {
        header.style.padding = "1rem 0";
        header.style.background = "rgba(255, 255, 255, 0.8)";
    }

    lastScrollY = currentScrollY;
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll(".section-title, .fade-in").forEach(el => {
    observer.observe(el);
});

// Language Switcher Toggle
const langBtn = document.getElementById("langBtn");
const langOptions = document.getElementById("langOptions");

if (langBtn) {
    langBtn.addEventListener("click", () => {
        langOptions.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (!langBtn.contains(e.target) && !langOptions.contains(e.target)) {
            langOptions.classList.remove("active");
        }
    });
}

// Translations Dictionary
const translations = {
    bg: {
        nav_home: "Начало",
        nav_history: "История",
        nav_treasures: "Съкровища",
        nav_dates: "Важни дати",
        hero_title: "Bulgaria",
        history_title: "История",
        history_desc: "България има богата и древна история, обхващаща хилядолетия. От древните траки до съвременната държава, всяка епоха е оставила своя отпечатък.",
        treasures_title: "Съкровища",
        treasures_desc: "България е дом на някои от най-впечатляващите антични съкровища в света, разкриващи величието на древните цивилизации.",
        btn_learn_more: "Научи повече",
        btn_discover_more: "Открий повече",
        back_to_home: "Назад към началото",
        history_page_title: "История на България",
        dates_page_title: "Важни дати"
    },
    en: {
        nav_home: "Home",
        nav_history: "History",
        nav_treasures: "Treasures",
        nav_dates: "Important Dates",
        hero_title: "Bulgaria",
        history_title: "History",
        history_desc: "Bulgaria has a rich and ancient history spanning millennia. From the ancient Thracians to the modern state, each era has left its mark.",
        treasures_title: "Treasures",
        treasures_desc: "Bulgaria is home to some of the most impressive ancient treasures in the world, revealing the greatness of ancient civilizations.",
        btn_learn_more: "Learn More",
        btn_discover_more: "Discover More",
        back_to_home: "Back to Home",
        history_page_title: "History of Bulgaria",
        dates_page_title: "Important Dates"
    },
    de: {
        nav_home: "Startseite",
        nav_history: "Geschichte",
        nav_treasures: "Schätze",
        nav_dates: "Wichtige Daten",
        hero_title: "Bulgarien",
        history_title: "Geschichte",
        history_desc: "Bulgarien hat eine reiche und alte Geschichte, die Jahrtausende umspannt. Von den alten Thrakern bis zum modernen Staat hat jede Ära ihre Spuren hinterlassen.",
        treasures_title: "Schätze",
        treasures_desc: "Bulgarien beherbergt einige der beeindruckendsten antiken Schätze der Welt, die die Größe alter Zivilisationen offenbaren.",
        btn_learn_more: "Mehr erfahren",
        btn_discover_more: "Mehr entdecken",
        back_to_home: "Zurück zur Startseite",
        history_page_title: "Geschichte Bulgariens",
        dates_page_title: "Wichtige Daten"
    },
    el: {
        nav_home: "Αρχική",
        nav_history: "Ιστορία",
        nav_treasures: "Θησαυροί",
        nav_dates: "Σημαντικές Ημερομηνίες",
        hero_title: "Βουλγαρία",
        history_title: "Ιστορία",
        history_desc: "Η Βουλγαρία έχει μια πλούσια και αρχαία ιστορία που εκτείνεται σε χιλιετίες. Από τους αρχαίους Θράκες μέχρι το σύγχρονο κράτος, κάθε εποχή έχει αφήσει το στίγμα της.",
        treasures_title: "Θησαυροί",
        treasures_desc: "Η Βουλγαρία φιλοξενεί μερικούς από τους πιο εντυπωσιακούς αρχαίους θησαυρούς στον κόσμο, αποκαλύπτοντας το μεγαλείο των αρχαίων πολιτισμών.",
        btn_learn_more: "Μάθετε περισσότερα",
        btn_discover_more: "Ανακαλύψτε περισσότερα",
        back_to_home: "Επιστροφή στην αρχική",
        history_page_title: "Ιστορία της Βουλγαρίας",
        dates_page_title: "Σημαντικές Ημερομηνίες"
    },
    fr: {
        nav_home: "Accueil",
        nav_history: "Histoire",
        nav_treasures: "Trésors",
        nav_dates: "Dates Importantes",
        hero_title: "Bulgarie",
        history_title: "Histoire",
        history_desc: "La Bulgarie possède une histoire riche et ancienne s'étendant sur des millénaires. Des anciens Thraces à l'État moderne, chaque époque a laissé sa trace.",
        treasures_title: "Trésors",
        treasures_desc: "La Bulgarie abrite certains des trésors anciens les plus impressionnants au monde, révélant la grandeur des civilisations anciennes.",
        btn_learn_more: "En savoir plus",
        btn_discover_more: "Découvrir plus",
        back_to_home: "Retour à l'accueil",
        history_page_title: "Histoire de la Bulgarie",
        dates_page_title: "Dates Importantes"
    },
    zh: {
        nav_home: "首页",
        nav_history: "历史",
        nav_treasures: "宝藏",
        nav_dates: "重要日期",
        hero_title: "保加利亚",
        history_title: "历史",
        history_desc: "保加利亚拥有跨越数千年的丰富而古老的历史。从古色雷斯人到现代国家，每个时代都留下了烙印。",
        treasures_title: "宝藏",
        treasures_desc: "保加利亚拥有世界上一些最令人印象深刻的古代宝藏，揭示了古代文明的伟大。",
        btn_learn_more: "了解更多",
        btn_discover_more: "发现更多",
        back_to_home: "返回首页",
        history_page_title: "保加利亚历史",
        dates_page_title: "重要日期"
    }
};

function setLanguage(lang) {
    if (!translations[lang]) return;
    localStorage.setItem("selectedLang", lang);
    
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    const logo = document.querySelector(".logo");
    if (logo) {
        if (lang === "bg" || lang === "en") logo.textContent = "Bulgaria";
        else if (lang === "de") logo.textContent = "Bulgarien";
        else if (lang === "el") logo.textContent = "Βουλγαρία";
        else if (lang === "fr") logo.textContent = "Bulgarie";
        else if (lang === "zh") logo.textContent = "保加利亚";
    }
    
    if (langOptions) langOptions.classList.remove("active");
}

document.querySelectorAll(".lang-option").forEach(opt => {
    opt.addEventListener("click", () => {
        setLanguage(opt.getAttribute("data-lang"));
    });
});

window.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("selectedLang") || "bg";
    setLanguage(savedLang);
});
