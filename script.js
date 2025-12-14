// Translation Data
const translations = {
    ar: {
        dir: "rtl",
        btn_text: "English",
        nav_available: "متاح للبيع",
        hero_badge: "💎 Premium Domain - نطاق ذهبي",
        hero_title_sub: "الاسم اللي الكل يحفظه <span class='text-brand-gold'>من أول مرة!</span>",
        hero_desc: "نطاق نادر (4 أحرف) يختصر المسافات ويسيطر على السوق الخليجي والعربي. <br><span class='text-sm opacity-70 block mt-2 font-light'>Short, Catchy, Authority. The perfect brand for the MENA region.</span>",
        btn_buy: "اشترِ النطاق الآن",
        btn_whatsapp: "تواصل واتساب",
        opp_title: "لماذا \"Ya3m\"؟",
        opp_main: "أكثر من مجرد اسم... <br><span class='text-transparent bg-clip-text bg-gradient-to-l from-brand-gold to-white'>هذا برستيج!</span>",
        opp_desc: "كلمة <span class='text-white font-bold'>\"يا عم\"</span> هي جزء من ثقافتنا اليومية. نستخدمها للود، للميانة، ولطلب الخدمة، وأحياناً للاحترام والسلطة.",
        reason_1: "<strong class='text-white'>سهل التذكر:</strong> 4 حروف فقط، يستحيل نسيانه.",
        reason_2: "<strong class='text-white'>عالمي ومحلي:</strong> يكتب بالإنجليزية (Chat Language) ويفهمه الجميع.",
        reason_3: "<strong class='text-white'>Dot Com:</strong> الملكية الأقوى لأي شركة ناشئة جادة.",
        use_cases_title: "تخيل مشروعك بهذا الاسم",
        use_cases_sub: "الفرص لا حصر لها مع براند مرن وقوي",
        uc_1_desc: "تطبيق توصيل طلبات",
        uc_1_quote: "\"يا عم وصّلني\"",
        uc_2_desc: "سلسلة مطاعم وجبات سريعة",
        uc_2_quote: "\"أكلك عندنا يا عم\"",
        uc_3_desc: "وكالة تسويق وإبداع",
        uc_3_quote: "\"ظبطنا يا عم\"",
        uc_4_desc: "منصة خدمات عامة",
        uc_4_quote: "\"خلص أمورك يا عم\"",
        val_badge: "فرصة نادرة",
        val_title: "قيمة النطاقات القصيرة تتضاعف",
        val_desc: "النطاقات المكونة من 4 أحرف (LLLM.com) أصبحت عملة رقمية نادرة. امتلاك <strong>Ya3m.com</strong> ليس مجرد شراء اسم، بل هو استثمار في أصل رقمي يرتفع سعره سنوياً. <br><span class='text-brand-gold font-bold'>لا تفوت الفرصة قبل أن يسبقك منافسك.</span>",
        stat_1: "Short & Rare",
        stat_2: "King of TLDs",
        stat_3: "Targeted Market",
        footer_desc: "Premium Domain Name For Sale. Secure transaction via Namecheap.",
        sticky_text: "احصل على Ya3m.com اليوم!",
        sticky_buy: "اشترِ النطاق الآن (Buy Now)"
    },
    en: {
        dir: "ltr",
        btn_text: "العربية",
        nav_available: "Available For Sale",
        hero_badge: "💎 Premium Domain - Rare Gem",
        hero_title_sub: "The name everyone remembers <span class='text-brand-gold'>instantly!</span>",
        hero_desc: "A rare 4-letter domain that shortcuts the distance to the Gulf and Arab market. <br><span class='text-sm opacity-70 block mt-2 font-light'>Short, Catchy, Authority. The perfect brand for the MENA region.</span>",
        btn_buy: "Buy Domain Now",
        btn_whatsapp: "Chat on WhatsApp",
        opp_title: "Why \"Ya3m\"?",
        opp_main: "More than just a name... <br><span class='text-transparent bg-clip-text bg-gradient-to-l from-brand-gold to-white'>It's Prestige!</span>",
        opp_desc: "The word <span class='text-white font-bold'>\"Ya3m\"</span> is culturally deep. Used for friendliness, buddy-talk, requests, and even authority.",
        reason_1: "<strong class='text-white'>Memorable:</strong> Only 4 letters, impossible to forget.",
        reason_2: "<strong class='text-white'>Global & Local:</strong> Written in Chat Language (Arabizi) yet understood by everyone.",
        reason_3: "<strong class='text-white'>Dot Com:</strong> The ultimate ownership for any serious startup.",
        use_cases_title: "Imagine Your Brand Here",
        use_cases_sub: "Limitless opportunities with a flexible, powerful name",
        uc_1_desc: "Delivery Application",
        uc_1_quote: "\"Ya3m (Hey Buddy), Deliver this!\"",
        uc_2_desc: "Fast Food Chain",
        uc_2_quote: "\"Ya3m Burger\"",
        uc_3_desc: "Creative Marketing Agency",
        uc_3_quote: "\"Ya3m Marketing\"",
        uc_4_desc: "General Services Platform",
        uc_4_quote: "\"Ya3m Services\"",
        val_badge: "Rare Opportunity",
        val_title: "Short Domains are Exploding",
        val_desc: "4-Letter domains (LLLM.com) are a rare digital currency. Owning <strong>Ya3m.com</strong> is not just buying a name, it's investing in a digital asset that appreciates annually. <br><span class='text-brand-gold font-bold'>Don't miss out before your competitor gets it.</span>",
        stat_1: "Short & Rare",
        stat_2: "King of TLDs",
        stat_3: "Targeted Market",
        footer_desc: "Premium Domain Name For Sale. Secure transaction via Namecheap.",
        sticky_text: "Get Ya3m.com Today!",
        sticky_buy: "Buy Domain Now"
    }
};

// Application State
let currentLang = 'ar';

// Function to set language
function setLanguage(lang) {
    currentLang = lang;
    const data = translations[lang];
    
    // 1. Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = data.dir;

    // 2. Update Text Content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (data[key]) {
            element.innerHTML = data[key];
        }
    });

    // 3. Update Toggle Button Text
    document.getElementById('lang-text').innerText = data.btn_text;

    // 4. Refresh ScrollTrigger to handle layout shifts caused by text changes
    ScrollTrigger.refresh();
}

// Initialize
document.addEventListener("DOMContentLoaded", (event) => {
    // ---------------------------------------------
    // Language Toggle Logic
    // ---------------------------------------------
    const toggleBtn = document.getElementById('lang-toggle');
    toggleBtn.addEventListener('click', () => {
        const newLang = currentLang === 'ar' ? 'en' : 'ar';
        setLanguage(newLang);
    });

    // ---------------------------------------------
    // GSAP Animation Logic
    // ---------------------------------------------
    gsap.registerPlugin(ScrollTrigger);

    // 1. Loading Sequence
    const tl = gsap.timeline();

    tl.to("#loader-text", { opacity: 1, duration: 0.8, ease: "power2.out" })
      .to("#loader-bar", { width: "200px", duration: 0.8, ease: "power2.inOut" })
      .to("#loader-bar", { width: "100%", height: "100%", top: 0, left: 0, opacity: 0, duration: 0.5, ease: "power4.inOut" }, "+=0.2")
      .to("#loader", { y: "-100%", duration: 0.8, ease: "power4.inOut" }, "-=0.3")
      
    // 2. Hero Animation (Staggered Entrance)
      .to(".hero-anim", {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "back.out(1.7)"
      }, "-=0.5");

    // 3. Navbar Reveal
    gsap.from("#navbar", {
        y: -100,
        opacity: 0,
        duration: 1,
        delay: 2.5,
        ease: "power2.out"
    });

    // 4. Content Scroll Animations
    gsap.from(".content-anim", {
        scrollTrigger: {
            trigger: ".content-anim",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
    });

    // 5. Cards Stagger
    gsap.from(".use-case-card", {
        scrollTrigger: {
            trigger: ".use-case-card",
            start: "top 85%",
        },
        y: 100,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.2)"
    });

    // 6. Sticky CTA Reveal logic
    ScrollTrigger.create({
        trigger: "#hero",
        start: "bottom center",
        onEnter: () => gsap.to("#sticky-cta", { y: 0, duration: 0.4 }),
        onLeaveBack: () => gsap.to("#sticky-cta", { y: "100%", duration: 0.4 })
    });

    // Mouse Move Effect for 3D Feel on Hero
    const heroSection = document.getElementById('hero');
    heroSection.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        gsap.to('.premium-text', {
            x: moveX * 2,
            y: moveY * 2,
            duration: 1
        });
    });
});