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
        dates_page_title: "Важни дати",
        burgas_hero_tagline: "Градът на морето, птиците и фестивалите",
        burgas_welcome_title: "Добре дошли в Бургас",
        burgas_welcome_desc: "Бургас е четвъртият по големина град в България, разположен на красивия бряг на Черно море. Известен със своята Морска градина, фестивала на пясъчните фигури и гостоприемния си дух, градът е перфектната дестинация за почивка и културни преживявания.",
        burgas_card_garden_title: "Морска градина",
        burgas_card_garden_desc: "Един от най-големите и красиви паркове в България, простиращ се покрай морския бряг.",
        burgas_card_sand_title: "Пясъчни фигури",
        burgas_card_sand_desc: "Ежегоден фестивал, събиращ творци от цял свят, които създават шедьоври от пясък.",
        burgas_card_port_title: "Пристанище Бургас",
        burgas_card_port_desc: "Модерна зона за отдих с красив фар, ресторанти и места за разходка.",
        back_to_burgas: "Назад към Бургас",
        burgas_history_page_title: "История на Бургас",
        burgas_history_p1: "Историята на Бургас датира от хилядолетия, като първите селища в района са от времето на траките. Древните лечебни извори на Акве Калиде са привличали посетители още от античността, включително римски императори и византийски владетели.",
        burgas_history_p2: "През средновековието районът е бил важен стратегически пункт, но истинският разцвет на града започва в края на 19-ти и началото на 20-ти век. Изграждането на пристанището превръща Бургас в основен търговски и икономически център на южното Черноморие.",
        burgas_history_p3: "Днес Бургас е модерен европейски град, който пази своето културно наследство, докато смело гледа към бъдещето като фестивален и туристически център от световна величина.",
        pgmee_hero_subtitle: "Знание, професионализъм, бъдеще",
        pgmee_about_title: "За училището",
        pgmee_about_desc: "Професионална гимназия по механоелектротехника и електроника (ПГМЕЕ) е едно от най-престижните учебни заведения в град Бургас. С дългогодишна история и иновативни методи на обучение, ние подготвяме следващото поколение инженери и технически специалисти.",
        pgmee_stat1_val: "50+",
        pgmee_stat1_label: "Години опит",
        pgmee_stat2_val: "1000+",
        pgmee_stat2_label: "Ученици",
        pgmee_specialties_title: "Специалности",
        pgmee_spec1_title: "Автотранспорт",
        pgmee_spec1_desc: "Съвременна диагностика и ремонт на автомобили.",
        pgmee_spec2_title: "Електроника",
        pgmee_spec2_desc: "Проектиране и поддръжка на електронни системи.",
        pgmee_spec3_title: "Мехатроника",
        pgmee_spec3_desc: "Бъдещето на автоматизацията и роботиката."
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
        dates_page_title: "Important Dates",
        burgas_hero_tagline: "The city of the sea, birds and festivals",
        burgas_welcome_title: "Welcome to Burgas",
        burgas_welcome_desc: "Burgas is the fourth largest city in Bulgaria, located on the beautiful coast of the Black Sea. Known for its Sea Garden, the sand figures festival and its hospitable spirit, the city is the perfect destination for relaxation and cultural experiences.",
        burgas_card_garden_title: "Sea Garden",
        burgas_card_garden_desc: "One of the largest and most beautiful parks in Bulgaria, stretching along the seashore.",
        burgas_card_sand_title: "Sand Figures",
        burgas_card_sand_desc: "An annual festival bringing together artists from all over the world who create masterpieces from sand.",
        burgas_card_port_title: "Port of Burgas",
        burgas_card_port_desc: "A modern recreation area with a beautiful lighthouse, restaurants and places for walking.",
        back_to_burgas: "Back to Burgas",
        burgas_history_page_title: "History of Burgas",
        burgas_history_p1: "The history of Burgas dates back millennia, with the first settlements in the area from the time of the Thracians. The ancient healing springs of Aquae Calidae have attracted visitors since antiquity, including Roman emperors and Byzantine rulers.",
        burgas_history_p2: "During the Middle Ages, the area was an important strategic point, but the city's true prosperity began in the late 19th and early 20th centuries. The construction of the port turned Burgas into a major commercial and economic center of the southern Black Sea coast.",
        burgas_history_p3: "Today, Burgas is a modern European city that preserves its cultural heritage while boldly looking to the future as a world-class festival and tourist center.",
        pgmee_hero_subtitle: "Knowledge, professionalism, future",
        pgmee_about_title: "About the school",
        pgmee_about_desc: "Vocational High School of Mechanical and Electrical Engineering and Electronics (PGMEE) is one of the most prestigious educational institutions in the city of Burgas. With a long history and innovative teaching methods, we prepare the next generation of engineers and technical specialists.",
        pgmee_stat1_val: "50+",
        pgmee_stat1_label: "Years of experience",
        pgmee_stat2_val: "1000+",
        pgmee_stat2_label: "Students",
        pgmee_specialties_title: "Specialties",
        pgmee_spec1_title: "Automotive Transport",
        pgmee_spec1_desc: "Modern diagnosis and repair of cars.",
        pgmee_spec2_title: "Electronics",
        pgmee_spec2_desc: "Design and maintenance of electronic systems.",
        pgmee_spec3_title: "Mechatronics",
        pgmee_spec3_desc: "The future of automation and robotics."
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
        dates_page_title: "Wichtige Daten",
        burgas_hero_tagline: "Die Stadt des Meeres, der Vögel und der Festivals",
        burgas_welcome_title: "Willkommen in Burgas",
        burgas_welcome_desc: "Burgas ist die viertgrößte Stadt Bulgariens und liegt an der wunderschönen Küste des Schwarzen Meeres. Bekannt für seinen Meeresgarten, das Sandfigurenfestival und seinen gastfreundlichen Geist, ist die Stadt das perfekte Ziel für Entspannung und kulturelle Erlebnisse.",
        burgas_card_garden_title: "Meeresgarten",
        burgas_card_garden_desc: "Einer der größten und schönsten Parks Bulgariens, der sich entlang der Meeresküste erstreckt.",
        burgas_card_sand_title: "Sandfiguren",
        burgas_card_sand_desc: "Ein jährliches Festival, bei dem Künstler aus der ganzen Welt Meisterwerke aus Sand erschaffen.",
        burgas_card_port_title: "Hafen von Burgas",
        burgas_card_port_desc: "Ein modernes Erholungsgebiet mit einem schönen Leuchtturm, Restaurants und Orten zum Wandern.",
        back_to_burgas: "Zurück nach Burgas",
        burgas_history_page_title: "Geschichte von Burgas",
        burgas_history_p1: "Die Geschichte von Burgas reicht Jahrtausende zurück, wobei die ersten Siedlungen in der Gegend aus der Zeit der Thraker stammen. Die alten Heilquellen von Aquae Calidae ziehen seit der Antike Besucher an, darunter römische Kaiser und byzantinische Herrscher.",
        burgas_history_p2: "Im Mittelalter war die Gegend ein wichtiger strategic Punkt, aber die wahre Blütezeit der Stadt begann im späten 19. und frühen 20. Jahrhundert. Der Bau des Hafens machte Burgas zu einem bedeutenden Handels- und Wirtschaftszentrum an der südlichen Schwarzmeerküste.",
        burgas_history_p3: "Heute ist Burgas eine moderne europäische Stadt, die ihr kulturelles Erbe bewahrt und gleichzeitig mutig in die Zukunft als Festival- und Tourismuszentrum von Weltrang blickt.",
        pgmee_hero_subtitle: "Wissen, Professionalität, Zukunft",
        pgmee_about_title: "Über die Schule",
        pgmee_about_desc: "Die Berufsoberschule für Maschinenbau, Elektrotechnik und Elektronik (PGMEE) ist eine der renommiertesten Bildungseinrichtungen in der Stadt Burgas. Mit einer langen Geschichte und innovativen Lehrmethoden bereiten wir die nächste Generation von Ingenieuren und technischen Spezialisten vor.",
        pgmee_stat1_val: "50+",
        pgmee_stat1_label: "Jahre Erfahrung",
        pgmee_stat2_val: "1000+",
        pgmee_stat2_label: "Schüler",
        pgmee_specialties_title: "Fachrichtungen",
        pgmee_spec1_title: "Kraftfahrzeugtechnik",
        pgmee_spec1_desc: "Moderne Diagnose und Reparatur von Autos.",
        pgmee_spec2_title: "Elektronik",
        pgmee_spec2_desc: "Design und Wartung elektronischer Systeme.",
        pgmee_spec3_title: "Mechatronik",
        pgmee_spec3_desc: "Die Zukunft der Automatisierung und Robotik."
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
        dates_page_title: "Σημαντικές Ημερομηνίες",
        burgas_hero_tagline: "Η πόλη της θάλασσας, των πουλιών και των φεστιβάλ",
        burgas_welcome_title: "Καλώς ήρθατε στον Πύργο",
        burgas_welcome_desc: "Ο Πύργος (Μπουργκάς) είναι η τέταρτη μεγαλύτερη πόλη της Βουλγαρίας, που βρίσκεται στην πανέμορφη ακτή της Μαύρης Θάλασσας. Γνωστή για τον Θαλάσσιο Κήπο της, το φεστιβάλ γλυπτών από άμμο και το φιλόξενο πνεύμα της, η πόλη είναι ο τέλειος προορισμός για χαλάρωση και πολιτιστικές εμπειρίες.",
        burgas_card_garden_title: "Θαλάσσιος Κήπος",
        burgas_card_garden_desc: "Ένα από τα μεγαλύτερα και ομορφότερα πάρκα της Βουλγαρίας, που εκτείνεται κατά μήκος της παραλίας.",
        burgas_card_sand_title: "Γλυπτά από Άμμο",
        burgas_card_sand_desc: "Ένα ετήσιο φεστιβάλ που συγκεντρώνει καλλιτέχνες από όλο τον κόσμο που δημιουργούν αριστουργήματα από άμμο.",
        burgas_card_port_title: "Λιμάνι του Μπουργκάς",
        burgas_card_port_desc: "Μια σύγχρονη περιοχή αναψυχής με έναν όμορφο φάρο, εστιατόρια και μέρη για περίπατο.",
        back_to_burgas: "Πίσω στο Μπουργκάς",
        burgas_history_page_title: "Ιστορία του Μπουργκάς",
        burgas_history_p1: "Η ιστορία του Μπουργκάς χρονολογείται χιλιετίες πίσω, με τους πρώτους οικισμούς στην περιοχή από την εποχή των Θρακών. Οι αρχαίες ιαματικές πηγές των Aquae Calidae έχουν προσελκύσει επισκέπτες από την αρχαιότητα, συμπεριλαμβανομένων Ρωμαίων αυτοκρατόρων και Βυζαντινών ηγεμόνων.",
        burgas_history_p2: "Κατά τη διάρκεια του Μεσαίωνα, η περιοχή ήταν σημαντικό στρατηγικό σημείο, αλλά η πραγματική άνθηση της πόλης ξεκίνησε στα τέλη του 19ου και στις αρχές του 20ού αιώνα. Η κατασκευή του λιμανιού μετέτρεψε το Μπουργκάς σε σημαντικό εμπορικό και οικονομικό κέντρο των νότιων ακτών της Μαύρης Θάλασσας.",
        burgas_history_p3: "Σήμερα, το Μπουργκάς είναι μια σύγχρονη ευρωπαϊκή πόλη που διατηρεί την πολιτιστική της κληρονομιά, ενώ κοιτάζει τολμηρά προς το μέλλον ως φεστιβάλ και τουριστικό κέντρο παγκόσμιας κλάσης.",
        pgmee_hero_subtitle: "Γνώση, επαγγελματισμός, μέλλον",
        pgmee_about_title: "Σχετικά με το σχολείο",
        pgmee_about_desc: "Το Επαγγελματικό Λύκειο Μηχανολογίας και Ηλεκτρολογίας και Ηλεκτρονικής (ΠΓМΕΕ) είναι ένα από τα πιο αναγνωρισμένα εκπαιδευτικά ιδρύματα στην πόλη του Μπουργκάς. Με μακρά ιστορία και καινοτόμες μεθόδους διδασκαλίας, προετοιμάζουμε την επόμενη γενιά μηχανικών και τεχνικών ειδικών.",
        pgmee_stat1_val: "50+",
        pgmee_stat1_label: "Χρόνια εμπειρίας",
        pgmee_stat2_val: "1000+",
        pgmee_stat2_label: "Μαθητές",
        pgmee_specialties_title: "Ειδικότητες",
        pgmee_spec1_title: "Αυτοκινητοβιομηχανία",
        pgmee_spec1_desc: "Σύγχρονη διάγνωση και επισκευή αυτοκινήτων.",
        pgmee_spec2_title: "Ηλεκτρονική",
        pgmee_spec2_desc: "Σχεδιασμός και συντήρηση ηλεκτρονικών συστημάτων.",
        pgmee_spec3_title: "Μηχατρονική",
        pgmee_spec3_desc: "Το μέλλον του αυτοματισμού και της ρομποτικής."
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
        dates_page_title: "Dates Importantes",
        burgas_hero_tagline: "La ville de la mer, des oiseaux et des festivals",
        burgas_welcome_title: "Bienvenue à Bourgas",
        burgas_welcome_desc: "Bourgas est la quatrième plus grande ville de Bulgarie, située sur la magnifique côte de la mer Noire. Connue pour son jardin maritime, son festival de sculptures de sable et son esprit hospitalier, la ville est la destination idéale pour la détente et les expériences culturelles.",
        burgas_card_garden_title: "Jardin Maritime",
        burgas_card_garden_desc: "L'un des parcs les plus grands et les plus beaux de Bulgarie, s'étendant le long du bord de mer.",
        burgas_card_sand_title: "Sculptures de Sable",
        burgas_card_sand_desc: "Un festival annuel réunissant des artistes du monde entier qui créent des chefs-d'œuvre à partir de sable.",
        burgas_card_port_title: "Port de Bourgas",
        burgas_card_port_desc: "Une zone de loisirs moderne avec un beau phare, des restaurants et des lieux de promenade.",
        back_to_burgas: "Retour à Bourgas",
        burgas_history_page_title: "Histoire de Bourgas",
        burgas_history_p1: "L'histoire de Bourgas remonte à des millénaires, avec les premiers peuplements de la région datant de l'époque des Thraces. Les anciennes sources thermales d'Aquae Calidae ont attiré des visiteurs depuis l'Antiquité, notamment des empereurs romains et des souverains byzantins.",
        burgas_history_p2: "Au Moyen Âge, la région était un point stratégique important, но истинският разцвет на града започва в края на 19-ти и началото на 20-ти век. La construction du port a transformé Bourgas en un centre commercial et économique majeur de la côte sud de la mer Noire.",
        burgas_history_p3: "Aujourd'hui, Bourgas est une ville européenne moderne qui préserve son patrimoine culturel tout en regardant hardiment vers l'avenir en tant que centre de festivals et de tourisme de classe mondiale.",
        pgmee_hero_subtitle: "Connaissance, professionnalisme, avenir",
        pgmee_about_title: "À propos de l'école",
        pgmee_about_desc: "Le Lycée Professionnel de Génie Mécanique, Électrotechnique et Électronique (PGMEE) est l'un des établissements d'enseignement les plus prestigieux de la ville de Bourgas. Avec une longue histoire et des méthodes d'enseignement innovantes, nous préparons la prochaine génération d'ingénieurs et de spécialistes techniques.",
        pgmee_stat1_val: "50+",
        pgmee_stat1_label: "Années d'expérience",
        pgmee_stat2_val: "1000+",
        pgmee_stat2_label: "Élèves",
        pgmee_specialties_title: "Spécialités",
        pgmee_spec1_title: "Transport Automobile",
        pgmee_spec1_desc: "Diagnostic et réparation modernes de voitures.",
        pgmee_spec2_title: "Électronique",
        pgmee_spec2_desc: "Conception et maintenance de systèmes électroniques.",
        pgmee_spec3_title: "Mécatronique",
        pgmee_spec3_desc: "L'avenir de l'automatisation et de la robotique."
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
        dates_page_title: "重要日期",
        burgas_hero_tagline: "海洋、鸟类和节日的城市",
        burgas_welcome_title: "欢迎来到布尔加斯",
        burgas_welcome_desc: "布尔加斯是保加利亚第四大城市，位于美丽的黑海沿岸。该市以其海洋公园、沙雕节和待客热情而闻名，是放松和文化体验的完美目的地。",
        burgas_card_garden_title: "海洋公园",
        burgas_card_garden_desc: "保加利亚最大、最美丽的公园之一，沿着海岸延伸。",
        burgas_card_sand_title: "沙雕",
        burgas_card_sand_desc: "一年一度的节日，汇集了来自世界各地的艺术家，他们用沙子创作杰作。",
        burgas_card_port_title: "布尔加斯港",
        burgas_card_port_desc: "现代化的休闲区，拥有灯塔、餐厅和散步场所。",
        back_to_burgas: "返回布尔加斯",
        burgas_history_page_title: "布尔加斯历史",
        burgas_history_p1: "布尔加斯的历史可以追溯到几千年前，该地区最早的定居点可以追溯到色雷斯人时期。Aquae Calidae 古老的治疗泉水自古以来就吸引着游客，包括罗马皇帝和拜占庭统治者。",
        burgas_history_p2: "在中世纪，该地区是一个重要的战略点，但该市真正的繁荣始于 19 世纪末和 20 世纪初。港口的建设使布尔加斯成为黑海南部沿岸的主要商业和经济中心。",
        burgas_history_p3: "今天，布尔加斯是一座现代化的欧洲城市，它保留了其文化遗产，同时大胆地展望未来，成为世界级的节日和旅游中心。",
        pgmee_hero_subtitle: "知识、专业、未来",
        pgmee_about_title: "关于学校",
        pgmee_about_desc: "布尔加斯机械与电气工程和电子职业高中 (PGMEE) 是布尔加斯市最著名的教育机构之一。凭借悠久的历史和创新的教学方法，我们培养下一代工程师和技术专家。",
        pgmee_stat1_val: "50+",
        pgmee_stat1_label: "多年经验",
        pgmee_stat2_val: "1000+",
        pgmee_stat2_label: "学生",
        pgmee_specialties_title: "专业",
        pgmee_spec1_title: "汽车运输",
        pgmee_spec1_desc: "现代化的汽车诊断和维修。",
        pgmee_spec2_title: "电子学",
        pgmee_spec2_desc: "电子系统的设计和维护。",
        pgmee_spec3_title: "机电一体化",
        pgmee_spec3_desc: "自动化和机器人技术的未来。"
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
        if (lang === "bg") logo.textContent = "България";
        else logo.textContent = "Bulgaria";
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
