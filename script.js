/* Premium Presentation — Tutya / Growdash
   Slide controller + English/Arabic i18n with RTL */

const TRANSLATIONS = {
    en: {
        'nav.prev': '←',
        'nav.next': '→',
        'nav.done': '✓',
        'nav.prevAria': 'Previous slide',
        'nav.nextAria': 'Next slide',
        'title.main': 'Seafood 2.0',
        'title.subtitle': "Optimizing Tutya Fish Market's Digital Menu for Conversion & Loyalty",
        'title.hint': 'Swipe or use arrow keys to navigate',
        's1.title': 'The Digital Seafood Challenge',
        's1.problem.head': 'The Problem',
        's1.problem.text': 'On apps like Talabat, users don\'t "read"—they <strong>scan</strong>.',
        's1.barrier.head': 'The Barrier',
        's1.barrier.text': 'Seafood carries "Freshness Anxiety." If the menu looks plain, the food feels "generic."',
        's1.objective.head': 'The Objective',
        's1.objective.intro': 'Transform the menu from a list of items into a <strong>visual sales funnel</strong> using:',
        's1.objective.li1': 'Visual Anchors (Emojis/Special Characters)',
        's1.objective.li2': 'Sensory Copywriting',
        's1.objective.li3': 'Custom "Chef\'s Signature" Sections',
        's2.title': 'Visual Hierarchy & Anchors',
        's2.subtitle': 'How to use "Thumb-Stoppers" to stop the scroll',
        's2.strategy.head': 'Strategy',
        's2.strategy.text': 'Use specific emojis to act as shorthand for quality and flavor.',
        's2.icon1': 'Premium / Must-Try',
        's2.icon2': 'Fresh Catch (Builds trust)',
        's2.icon3': 'Signature "Provençale" Flavor',
        's2.icon4': 'Local Heritage/Authenticity',
        's3.title': 'The "Best Seller" Workaround',
        's3.subtitle': 'Strategy: Creating a manual "Hero Section" to bypass app limitations',
        's3.issue.head': 'The Issue',
        's3.issue.text': 'The "Best Seller" section is auto-generated and cannot be edited.',
        's3.fix.head': 'The Fix',
        's3.fix.text': 'Create a new top-level category: <code>✦── CHEF\'S SIGNATURES ──✦</code>',
        's3.why.head': 'Why it works',
        's3.why.text': 'It gives us 100% control over descriptions and emojis.',
        's3.double.head': 'Double Exposure',
        's3.double.text': 'Placing the same item in "Signatures" and "Main Course" increases the chance of a click by <strong>30%</strong>.',
        's4.title': 'From Ingredients to Experiences',
        's4.subtitle': 'Upgrading text for the Top 5 "Signature" items',
        's4.d1': 'The Lebanese classic. Slow-caramelized onion rice topped with tender fish & crunchy roasted nuts.',
        's4.d2': 'Sautéed in our secret lemon-butter emulsion with farm-fresh coriander. A Tutya favorite!',
        's4.d3': 'Traditional spiced rice infused with dried lime (Loomi) and our hand-blended Gulf spices.',
        's4.d4': 'Char-grilled to perfection. Served with oven-roasted Mediterranean vegetables. [High Protein]',
        's4.d5': 'Premium Atlantic Salmon glazed in rich Teriyaki. A perfect balance of East meets West.',
        's5.title': 'Increasing Average Order Value (AOV)',
        's5.subtitle': 'Using Bundles & Upselling',
        's5.bundles.head': 'Meal Bundles',
        's5.bundles.intro': 'Instead of just single items, create:',
        's5.bundles.name': 'Family Sea Feast (For 4)',
        's5.bundles.desc': 'A curated mix of whole fish, rice, and mezze at a bundle price.',
        's5.addon.head': 'The "Add-on" Strategy',
        's5.addon.intro': 'Every fish dish should include a prompt:',
        's5.addon.prompt': '"Add a side of 🌶️ Spicy Batata Harra for AED 15?"',
        's6.title': 'Sandwich Meal Plans (Menus)',
        's6.subtitle': 'Reduce decision friction + increase AOV',
        's6.pricingNote': 'Create a dedicated category like <code>🍔 Sandwich Menus</code> so customers instantly understand the deal.',
        's6.why.head': 'Why it works',
        's6.why.li1': '<strong>1-tap choice</strong>: customers pick a sandwich and move on.',
        's6.why.li2': '<strong>Built-in upsell</strong>: fries + drink are included by default.',
        's6.why.li3': '<strong>Clear value</strong>: a single menu price feels "safe".',
        's6.structure.head': 'How to structure in-app',
        's6.structure.li1': 'Category: <code>🍔 Sandwich Menus (29 Dhs)</code>',
        's6.structure.li2': 'Item name: sandwich + "Menu"',
        's6.structure.li3': 'Description: "Includes fries + drink"',
        's6.suggested': 'Suggested Sandwich Menus',
        's7.title': 'Limited Time Offer',
        's7.subtitle': 'Until 15 February • Use "Limited Time Offer" in section name & deadline in copy',
        's7.why.head': 'Why discount now?',
        's7.why.text': 'Right now, almost <strong>all customers are new</strong>. Treat the discount as <strong>CAC</strong> (acquisition cost), then <strong>switch it off</strong> once traction is built.',
        's7.naming.head': 'Naming & copy',
        's7.naming.li1': 'Use a section titled <strong>"Limited Time Offer"</strong> (not just "Offers") so urgency is clear.',
        's7.naming.li2': '<strong>Deliveroo:</strong> In the section description, add the deadline — e.g. <em>"Valid until 15 Feb"</em> or <em>"Offer ends 15 February"</em>. This increases pressure to order and captures the deal.',
        's7.aggressive.head': 'Be more aggressive on discounts',
        's7.aggressive.text': 'Once it\'s communicated as a <strong>Limited Time Offer</strong>, you can afford steeper discounts. Stronger % off (e.g. 35–40% on hero items) increases conversion when the end date is visible; the deadline justifies the depth of the offer.',
        's7.existing': 'Existing "Offers" items (already in the menu)',
        's7.footnote': 'No new items — focus on <strong>visibility</strong> (move "Limited Time Offer" near the top) and <strong>deadline in description</strong>.',
        's7.tip': 'Tip: Place "Limited Time Offer" near the top; put the deadline in the section description (Deliveroo); use ⭐ on 1–2 hero deals.',
        's8.title': 'Recommendation: Hero image refresh',
        's8.subtitle': 'Crispy Fish Fillet Sandwich — one of the best sellers, but the current image underperforms',
        's8.issue': '<strong>Issue:</strong> The Crispy Fish Fillet Sandwich is a top seller, but the current photo looks flat and casual (plain bun, haphazard fries/pickles, muted colours). It doesn\'t convey crispiness or premium quality, which can hurt conversion on aggregator menus.',
        's8.current': 'Current (not appealing)',
        's8.recommended': 'Recommended style (reshoot or AI‑enhance)',
        's8.action.head': 'Action',
        's8.action.text': 'Replace the item image with a reshoot or an AI‑enhanced version: golden, crispy fish, structured plating, vibrant greens and sauce. Use the right-hand style as a visual benchmark for "appetising" and "premium" so the hero item matches its sales performance.',
        's9.title': 'Trust Signals & Health Tags',
        's9.subtitle': 'Capturing the Al Barsha 3 demographic (Families & Health-conscious)',
        's9.transparency.head': 'Transparency',
        's9.transparency.text': 'Use brackets to highlight value:',
        's9.dietary.head': 'Dietary Marketing',
        's9.dietary.text': 'Use tags to stand out to fitness enthusiasts:'
    },
    ar: {
        'nav.prev': 'السابق',
        'nav.next': 'التالي',
        'nav.done': '✓',
        'nav.prevAria': 'الشريحة السابقة',
        'nav.nextAria': 'الشريحة التالية',
        'title.main': 'المأكولات البحرية 2.0',
        'title.subtitle': 'تحسين القائمة الرقمية لسوق توتيا للسمك لتحقيق التحويل والولاء',
        'title.hint': 'اسحب أو استخدم مفاتيح الأسهم للتنقل',
        's1.title': 'تحدي المأكولات البحرية الرقمي',
        's1.problem.head': 'المشكلة',
        's1.problem.text': 'على تطبيقات مثل طلبات، المستخدمون لا "يقرؤون"—بل <strong>يتصفحون</strong>.',
        's1.barrier.head': 'الحاجز',
        's1.barrier.text': 'المأكولات البحرية تحمل "قلق النضارة". إن بدت القائمة عادية، يبدو الطعام "عابراً".',
        's1.objective.head': 'الهدف',
        's1.objective.intro': 'تحويل القائمة من قائمة أصناف إلى <strong>قمع مبيعات بصري</strong> باستخدام:',
        's1.objective.li1': 'مراسي بصرية (رموز تعبيرية/حروف خاصة)',
        's1.objective.li2': 'كتابة حسية',
        's1.objective.li3': 'أقسام "توقيع الشيف" المخصصة',
        's2.title': 'التسلسل البصري والمراسي',
        's2.subtitle': 'كيفية استخدام "مُوقِفات الإبهام" لإيقاف التمرير',
        's2.strategy.head': 'الاستراتيجية',
        's2.strategy.text': 'استخدم رموزاً تعبيرية محددة كاختصار للجودة والنكهة.',
        's2.icon1': 'بريميوم / يجب تجربته',
        's2.icon2': 'صيد طازج (يبني الثقة)',
        's2.icon3': 'نكهة "بروفنسال" التوقيعية',
        's2.icon4': 'التراث المحلي والأصالة',
        's3.title': 'الالتفاف على "الأكثر مبيعاً"',
        's3.subtitle': 'استراتيجية: إنشاء "قسم أبطال" يدوي لتجاوز حدود التطبيق',
        's3.issue.head': 'المشكلة',
        's3.issue.text': 'قسم "الأكثر مبيعاً" يُنشأ تلقائياً ولا يمكن تعديله.',
        's3.fix.head': 'الحل',
        's3.fix.text': 'إنشاء فئة جديدة على المستوى الأعلى: <code>✦── توقيعات الشيف ──✦</code>',
        's3.why.head': 'لماذا ينجح',
        's3.why.text': 'يعطينا تحكماً كاملاً في الوصف والرموز التعبيرية.',
        's3.double.head': 'تعرض مزدوج',
        's3.double.text': 'وضع نفس الصنف في "التوقيعات" و"الطبق الرئيسي" يزيد فرصة النقر <strong>30%</strong>.',
        's4.title': 'من المكونات إلى التجارب',
        's4.subtitle': 'ترقية النص لأهم 5 أصناف "توقيعية"',
        's4.d1': 'الكلاسيكية اللبنانية. أرز بصل مُكرمل ببطء مع سمك طري ومكسرات محمصة مقرمشة.',
        's4.d2': 'مقلي في مستحلب الليمون–الزبدة السري مع كزبرة طازجة. مفضل توتيا!',
        's4.d3': 'أرز متبل تقليدي مع الليمون المجفف (لومي) ومزيج التوابل الخليجية.',
        's4.d4': 'مشوي على الفحم بشكل مثالي. يقدم مع خضار متوسطية مشوية. [بروتين عالي]',
        's4.d5': 'سلمون أطلسي بريميوم ملمع بترياكي غني. توازن مثالي بين الشرق والغرب.',
        's5.title': 'زيادة متوسط قيمة الطلب (AOV)',
        's5.subtitle': 'باستخدام الباقات والبيع الإضافي',
        's5.bundles.head': 'باقات الوجبات',
        's5.bundles.intro': 'بدلاً من أصناف فردية فقط، أنشئ:',
        's5.bundles.name': 'وليمة بحر عائلية (لـ 4)',
        's5.bundles.desc': 'مزيج مختار من سمك كامل وأرز ومقبلات بسعر باقة.',
        's5.addon.head': 'استراتيجية "الإضافة"',
        's5.addon.intro': 'كل طبق سمك يجب أن يتضمن تذكيراً:',
        's5.addon.prompt': '"إضافة جانب من 🌶️ بطاطا حرّة مقابل 15 درهماً؟"',
        's6.title': 'قوائم وجبات الساندويتش',
        's6.subtitle': 'تقليل احتكاك القرار + زيادة AOV',
        's6.pricingNote': 'أنشئ فئة مخصصة مثل <code>🍔 قوائم الساندويتش</code> ليستوعب الزبون العرض فوراً.',
        's6.why.head': 'لماذا تنجح',
        's6.why.li1': '<strong>اختيار بلمسة واحدة</strong>: الزبون يختار ساندويتش ويكمل.',
        's6.why.li2': '<strong>بيع إضافي مدمج</strong>: البطاطا والمشروب مضمونان افتراضياً.',
        's6.why.li3': '<strong>قيمة واضحة</strong>: سعر قائمة واحد يبدو "آمناً".',
        's6.structure.head': 'كيفية الهيكلة داخل التطبيق',
        's6.structure.li1': 'الفئة: <code>🍔 قوائم الساندويتش (29 درهماً)</code>',
        's6.structure.li2': 'اسم الصنف: الساندويتش + "قائمة"',
        's6.structure.li3': 'الوصف: "يشمل بطاطا ومشروب"',
        's6.suggested': 'قوائم ساندويتش مقترحة',
        's7.title': 'عرض لفترة محدودة',
        's7.subtitle': 'حتى 15 فبراير • استخدم "عرض لفترة محدودة" في اسم القسم والموعد في النص',
        's7.why.head': 'لماذا الخصم الآن؟',
        's7.why.text': 'حالياً، <strong>معظم العملاء جدد</strong>. اعتبر الخصم <strong>تكلفة اكتساب (CAC)</strong>، ثم <strong>أوقفه</strong> بعد ترسيخ الزخم.',
        's7.naming.head': 'التسمية والنص',
        's7.naming.li1': 'استخدم قسماً بعنوان <strong>"عرض لفترة محدودة"</strong> (ليس "عروض" فقط) ليكون الإلحاح واضحاً.',
        's7.naming.li2': '<strong>دليفرو:</strong> في وصف القسم، أضف الموعد النهائي—مثلاً <em>"صالح حتى 15 فبراير"</em> أو <em>"ينتهي العرض في 15 فبراير"</em>. هذا يزيد ضغط الطلب ويوضح الصفقة.',
        's7.aggressive.head': 'كن أكثر جرأة في الخصومات',
        's7.aggressive.text': 'بمجرد توصيله كـ <strong>عرض لفترة محدودة</strong>، يمكنك خصومات أكبر. خصم أقوى (مثلاً 35–40% على أصناف الأبطال) يرفع التحويل عندما يكون تاريخ الانتهاء ظاهراً؛ الموعد يبرر عمق العرض.',
        's7.existing': 'أصناف "العروض" الحالية (موجودة في القائمة)',
        's7.footnote': 'لا أصناف جديدة—ركز على <strong>الظهور</strong> (اقترب "عرض لفترة محدودة" من الأعلى) و<strong>الموعد في الوصف</strong>.',
        's7.tip': 'نصيحة: ضع "عرض لفترة محدودة" قرب الأعلى؛ ضع الموعد النهائي في وصف القسم (دليفرو)；استخدم ⭐ على صفقة أو صفقتين أبطال.',
        's8.title': 'التوصية: تجديد صورة البطل',
        's8.subtitle': 'ساندويتش فيليه السمك المقرمش—من الأكثر مبيعاً، لكن الصورة الحالية دون المستوى',
        's8.issue': '<strong>المشكلة:</strong> ساندويتش فيليه السمك المقرمش من الأكثر مبيعاً، لكن الصورة الحالية تبدو مسطحة وعادية (كعكة عادية، بطاطا ومخلل عشوائيان، ألوان باهتة). لا توصل المقرمش أو الجودة البريميوم، مما قد يضر التحويل على قوائم التجميع.',
        's8.current': 'الحالي (غير جذاب)',
        's8.recommended': 'النمط الموصى به (إعادة تصوير أو تحسين بالذكاء الاصطناعي)',
        's8.action.head': 'الإجراء',
        's8.action.text': 'استبدل صورة الصنف بإعادة تصوير أو نسخة محسّنة بالذكاء الاصطناعي: سمك ذهبي مقرمش، تقديم منظم، خضار وصلصة حية. استخدم النمط على اليمين كمعيار بصري لـ "شهي" و"بريميوم" ليتوافق صنف البطل مع أداء مبيعاته.',
        's9.title': 'إشارات الثقة ووسوم الصحة',
        's9.subtitle': 'استهداف ديموغرافيا البرشاء 3 (عائلات وواعون صحياً)',
        's9.transparency.head': 'الشفافية',
        's9.transparency.text': 'استخدم الأقواس لإبراز القيمة:',
        's9.dietary.head': 'التسويق الغذائي',
        's9.dietary.text': 'استخدم الوسوم للتميز لدى مهتمي اللياقة:'
    }
};

const STORAGE_LANG = 'tutya-lang';

function getLang() {
    try {
        const stored = localStorage.getItem(STORAGE_LANG);
        if (stored === 'ar' || stored === 'en') return stored;
    } catch (_) {}
    return 'en';
}

function setLang(lang) {
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    const t = TRANSLATIONS[lang];
    if (!t) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = t[key];
        if (value != null) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.value = value;
            } else {
                el.innerHTML = value;
            }
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const isActive = btn.getAttribute('data-lang') === lang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', isActive);
    });
    try {
        localStorage.setItem(STORAGE_LANG, lang);
    } catch (_) {}
    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
}

class PresentationController {
    constructor() {
        this.currentSlide = 0;
        const slideList = document.querySelectorAll('.slide');
        this.slides = slideList;
        this.totalSlides = slideList.length;
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.slideCounter = document.getElementById('slideCounter');
        this.progress = document.getElementById('progress');
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.init();
    }

    init() {
        // Initialize slide positions: current is active, before are .prev, after are .next
        this.initSlidePositions();
        this.updateUI();
        this.attachEventListeners();
        document.addEventListener('languagechange', () => this.updateUI());
    }

    initSlidePositions() {
        this.slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev', 'next');
            if (index < this.currentSlide) {
                slide.classList.add('prev');
            } else if (index > this.currentSlide) {
                slide.classList.add('next');
            } else {
                slide.classList.add('active');
            }
        });
    }

    attachEventListeners() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        document.addEventListener('keydown', (e) => {
            const rtl = document.documentElement.getAttribute('dir') === 'rtl';
            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                if (rtl) this.nextSlide();
                else this.prevSlide();
            } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
                e.preventDefault();
                if (rtl) this.prevSlide();
                else this.nextSlide();
            } else if (e.key === 'Home') {
                this.goToSlide(0);
            } else if (e.key === 'End') {
                this.goToSlide(this.totalSlides - 1);
            }
        });

        const container = document.querySelector('.presentation-container');
        container.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        container.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        }, { passive: true });

        let wheelTimeout;
        document.addEventListener('wheel', (e) => {
            if (e.target?.closest?.('.content')) return;
            clearTimeout(wheelTimeout);
            wheelTimeout = setTimeout(() => {
                if (e.deltaY > 0) this.nextSlide();
                else if (e.deltaY < 0) this.prevSlide();
            }, 100);
        }, { passive: true });
    }

    handleSwipe() {
        const threshold = 50;
        const diff = this.touchStartX - this.touchEndX;
        const rtl = document.documentElement.getAttribute('dir') === 'rtl';
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                if (rtl) this.prevSlide();
                else this.nextSlide();
            } else {
                if (rtl) this.nextSlide();
                else this.prevSlide();
            }
        }
    }

    goToSlide(index) {
        if (index < 0 || index >= this.totalSlides || index === this.currentSlide) return;
        
        const direction = index > this.currentSlide ? 'forward' : 'backward';
        const leavingSlide = this.slides[this.currentSlide];
        const enteringSlide = this.slides[index];
        
        // Remove active from leaving slide
        leavingSlide.classList.remove('active');
        
        // Position the leaving slide based on direction
        if (direction === 'forward') {
            // Going forward: leaving slide moves to the left
            leavingSlide.classList.add('prev');
        } else {
            // Going backward: leaving slide moves to the right
            leavingSlide.classList.add('next');
        }
        
        // Clear positioning classes from entering slide and make it active
        enteringSlide.classList.remove('prev', 'next');
        enteringSlide.classList.add('active');
        
        this.currentSlide = index;
        this.updateUI();
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) this.goToSlide(this.currentSlide + 1);
    }

    prevSlide() {
        if (this.currentSlide > 0) this.goToSlide(this.currentSlide - 1);
    }

    updateUI() {
        const n = this.currentSlide + 1;
        const total = this.totalSlides;
        const lang = document.documentElement.getAttribute('lang') || 'en';
        const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
        this.slideCounter.textContent = `${n} / ${total}`;
        this.prevBtn.disabled = this.currentSlide === 0;
        this.nextBtn.disabled = this.currentSlide === total - 1;
        this.progress.style.width = `${(n / total) * 100}%`;
        this.prevBtn.textContent = t['nav.prev'];
        this.nextBtn.textContent = this.currentSlide === total - 1 ? (t['nav.done'] || '✓') : t['nav.next'];
        this.prevBtn.setAttribute('aria-label', t['nav.prevAria'] || 'Previous slide');
        this.nextBtn.setAttribute('aria-label', t['nav.nextAria'] || 'Next slide');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const lang = getLang();
    setLang(lang);

    document.getElementById('langEn').addEventListener('click', () => setLang('en'));
    document.getElementById('langAr').addEventListener('click', () => setLang('ar'));

    new PresentationController();
});

let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) e.preventDefault();
    lastTouchEnd = now;
}, false);
