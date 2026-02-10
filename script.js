/* Premium Presentation — Badabing / Growdash
   Slide controller + English/Arabic i18n with RTL */

const TRANSLATIONS = {
    en: {
        'nav.prev': '←',
        'nav.next': '→',
        'nav.done': '✓',
        'nav.prevAria': 'Previous slide',
        'nav.nextAria': 'Next slide',
        'title.main': 'Badabing Pizza & Bakehouse',
        'title.subtitle': 'Menu Strategy, Offers & Channel Optimization',
        'title.hint': 'Swipe or use arrow keys to navigate',

        's1.title': 'Menu Strategy & Naming',
        's1.subtitle': 'First impressions drive ordering behavior',
        's1.risk.head': 'The Risk',
        's1.risk.text': 'Starting the menu with <strong>Bakehouse</strong> items may increase breakfast orders, but it\'s dangerous for lunch and dinner — approximately <strong>~70% of platform orders</strong> happen during those dayparts.',
        's1.options.head': 'Options',
        's1.options.li1': '<strong>Option A:</strong> Change menu order dynamically by daypart (if the platform supports it)',
        's1.options.li2': '<strong>Option B (Recommended):</strong> Keep pizza first in the menu at all times to protect the majority of order volume',
        's1.naming.head': 'Rename the Brand on Platforms',
        's1.naming.text': 'Change from <strong>"Badabing Bakehouse and Pizza"</strong> to <strong>"Badabing Pizza & Bakehouse"</strong>. When you say "Bakehouse and Pizza," it gives the impression that pizza is a side offering. Lead with your strongest category.',

        's2.title': 'Offers Optimization',
        's2.subtitle': 'Alignment across platforms & better combo pairing',
        's2.inconsistency.head': 'Inconsistent Offers Across Platforms',
        's2.inconsistency.text': 'Offers are <strong>not identical</strong> on Talabat and Deliveroo. This creates confusion for repeat customers and makes performance tracking harder. Align the offers across all platforms.',
        's2.combo.head': 'Pizza Combo Needs Rework',
        's2.combo.current': '<strong>Current:</strong> Pizza Combo = Any Pizza + Any Drink + Any Side <em>or Bakehouse Item</em>',
        's2.combo.issue': 'Combining pizza with bakery items is not the best pairing — it feels off-brand and doesn\'t drive perceived value.',
        's2.fix.head': 'Recommended Combo',
        's2.fix.text': 'Replace the bakehouse option in the combo with <strong>Potato Wedges</strong> or <strong>Chicken Tenders</strong> — classic pizza sides that feel like a natural, high-value pairing.',

        's3.title': 'Channel Economics',
        's3.subtitle': 'Per-order economics across all delivery platforms',
        's3.gem.head': 'Talabat Gems: Eating the Bottom Line',
        's3.gem.text': 'Talabat Gem orders erode the bottom line regardless of incrementality. With a <strong>5.64% EBITDA</strong> vs. <strong>36.53%</strong> for non-Gem Talabat orders, Gems are destroying profitability. The Gems algorithm is not beneficial — it attracts discount-seeking customers, not loyal ones.',
        's3.action.head': 'Recommendation',
        's3.action.li1': '<strong>Cancel Talabat Gems</strong> — the unit economics don\'t justify participation',
        's3.action.li2': '<strong>Double down on Careem</strong> — highest EBITDA% at <strong>39.58%</strong> and strong CMPO%',
        's3.action.li3': '<strong>Double down on Deliveroo</strong> — solid EBITDA% at <strong>24.38%</strong> with the highest AOV (<strong>108.03</strong>)',

        's4.title': 'Total Orders Per Channel',
        's4.subtitle': '10 Jan – 08 Feb vs. previous period',
        's4.insight.head': 'Key Insights',
        's4.insight.li1': '<strong>Deliveroo</strong> is the leading channel (<strong>736</strong> orders, <strong>+31%</strong> growth) — continue investing here',
        's4.insight.li2': '<strong>Careem</strong> shows strong growth (<strong>+34.2%</strong>) and has the best unit economics — high potential channel',
        's4.insight.li3': '<strong>Talabat</strong> is declining (<strong>-3.9%</strong>) even with Gems — further evidence that Gems aren\'t driving real growth',
        's4.strategy.head': 'Channel Strategy',
        's4.strategy.text': 'Focus marketing spend and promotional effort on <strong>Careem</strong> and <strong>Deliveroo</strong>. Both channels are growing and profitable. Redirect budget from Talabat Gems into these higher-performing channels.',

        's5.title': 'Action Items',
        's5.subtitle': 'Summary of recommendations',
        's5.a1': 'Rename to <strong>"Badabing Pizza & Bakehouse"</strong> on all platforms — lead with pizza',
        's5.a2': '<strong>Cancel Talabat Gems</strong> — EBITDA drops from 36.53% to 5.64% on Gem orders',
        's5.a3': 'Keep <strong>pizza first</strong> in the menu order, or implement dynamic menu by daypart',
        's5.a4': 'Fix the <strong>Pizza Combo</strong> — replace bakehouse pairing with Potato Wedges or Chicken Tenders',
        's5.a5': '<strong>Align offers</strong> across Talabat and Deliveroo — identical promotions on both',
        's5.a6': '<strong>Double down on Careem & Deliveroo</strong> — redirect Gems budget to these channels',
        'nav.pdf': 'PDF',
        'nav.pdfExporting': 'Exporting…'
    },
    ar: {
        'nav.prev': 'السابق',
        'nav.next': 'التالي',
        'nav.done': '✓',
        'nav.prevAria': 'الشريحة السابقة',
        'nav.nextAria': 'الشريحة التالية',
        'title.main': 'بادابينغ بيتزا & بيكهاوس',
        'title.subtitle': 'استراتيجية القائمة، العروض وتحسين القنوات',
        'title.hint': 'اسحب أو استخدم مفاتيح الأسهم للتنقل',

        's1.title': 'استراتيجية القائمة والتسمية',
        's1.subtitle': 'الانطباع الأول يحدد سلوك الطلب',
        's1.risk.head': 'المخاطرة',
        's1.risk.text': 'بدء القائمة بأصناف <strong>المخبز</strong> قد يزيد طلبات الفطور، لكنه خطير على الغداء والعشاء — حوالي <strong>~70% من طلبات المنصات</strong> تحدث في هذه الأوقات.',
        's1.options.head': 'الخيارات',
        's1.options.li1': '<strong>الخيار أ:</strong> تغيير ترتيب القائمة ديناميكياً حسب الفترة (إن دعمت المنصة ذلك)',
        's1.options.li2': '<strong>الخيار ب (الموصى به):</strong> إبقاء البيتزا أولاً في القائمة دائماً لحماية غالبية حجم الطلبات',
        's1.naming.head': 'تغيير اسم العلامة على المنصات',
        's1.naming.text': 'التغيير من <strong>"بادابينغ بيكهاوس اند بيتزا"</strong> إلى <strong>"بادابينغ بيتزا & بيكهاوس"</strong>. عندما تقول "بيكهاوس اند بيتزا"، يعطي انطباعاً أن البيتزا عرض جانبي. ابدأ بأقوى فئة لديك.',

        's2.title': 'تحسين العروض',
        's2.subtitle': 'توحيد عبر المنصات وتحسين تركيبة الكومبو',
        's2.inconsistency.head': 'عروض غير متطابقة عبر المنصات',
        's2.inconsistency.text': 'العروض <strong>غير متطابقة</strong> على طلبات ودليفرو. هذا يخلق ارتباكاً للعملاء المتكررين ويصعّب تتبع الأداء. وحّد العروض عبر جميع المنصات.',
        's2.combo.head': 'كومبو البيتزا يحتاج إعادة صياغة',
        's2.combo.current': '<strong>الحالي:</strong> كومبو بيتزا = أي بيتزا + أي مشروب + أي جانب <em>أو صنف من المخبز</em>',
        's2.combo.issue': 'دمج البيتزا مع أصناف المخبز ليس الأفضل — يبدو غير متناسق ولا يحقق قيمة مدركة.',
        's2.fix.head': 'الكومبو الموصى به',
        's2.fix.text': 'استبدل خيار المخبز في الكومبو بـ <strong>بطاطا ودجز</strong> أو <strong>تشيكن تندرز</strong> — أطباق جانبية كلاسيكية للبيتزا تبدو كخيار طبيعي عالي القيمة.',

        's3.title': 'اقتصاديات القنوات',
        's3.subtitle': 'الاقتصاديات لكل طلب عبر جميع منصات التوصيل',
        's3.gem.head': 'طلبات جيمز طلبات: تأكل من الأرباح',
        's3.gem.text': 'طلبات جيمز تآكل الخط الأدنى بغض النظر عن التزايدية. مع <strong>EBITDA 5.64%</strong> مقابل <strong>36.53%</strong> لطلبات طلبات غير الجيمز، الجيمز تدمر الربحية. خوارزمية الجيمز غير مفيدة — تجذب باحثي الخصومات لا العملاء المخلصين.',
        's3.action.head': 'التوصية',
        's3.action.li1': '<strong>إلغاء طلبات جيمز</strong> — اقتصاديات الوحدة لا تبرر المشاركة',
        's3.action.li2': '<strong>مضاعفة الاستثمار في كريم</strong> — أعلى EBITDA% عند <strong>39.58%</strong> ونسبة CMPO% قوية',
        's3.action.li3': '<strong>مضاعفة الاستثمار في دليفرو</strong> — EBITDA% جيد عند <strong>24.38%</strong> مع أعلى AOV (<strong>108.03</strong>)',

        's4.title': 'إجمالي الطلبات لكل قناة',
        's4.subtitle': '10 يناير – 8 فبراير مقابل الفترة السابقة',
        's4.insight.head': 'الرؤى الرئيسية',
        's4.insight.li1': '<strong>دليفرو</strong> القناة الرائدة (<strong>736</strong> طلب، نمو <strong>+31%</strong>) — استمر في الاستثمار هنا',
        's4.insight.li2': '<strong>كريم</strong> يُظهر نمواً قوياً (<strong>+34.2%</strong>) وأفضل اقتصاديات وحدة — قناة عالية الإمكانية',
        's4.insight.li3': '<strong>طلبات</strong> في تراجع (<strong>-3.9%</strong>) حتى مع الجيمز — دليل إضافي أن الجيمز لا تدفع نمواً حقيقياً',
        's4.strategy.head': 'استراتيجية القنوات',
        's4.strategy.text': 'ركّز الإنفاق التسويقي والجهد الترويجي على <strong>كريم</strong> و<strong>دليفرو</strong>. كلتا القناتين في نمو ومربحتان. أعد توجيه ميزانية جيمز إلى هذه القنوات الأعلى أداءً.',

        's5.title': 'بنود العمل',
        's5.subtitle': 'ملخص التوصيات',
        's5.a1': 'إعادة التسمية إلى <strong>"بادابينغ بيتزا & بيكهاوس"</strong> على جميع المنصات — ابدأ بالبيتزا',
        's5.a2': '<strong>إلغاء طلبات جيمز</strong> — EBITDA ينخفض من 36.53% إلى 5.64% على طلبات الجيمز',
        's5.a3': 'إبقاء <strong>البيتزا أولاً</strong> في ترتيب القائمة، أو تطبيق قائمة ديناميكية حسب الفترة',
        's5.a4': 'إصلاح <strong>كومبو البيتزا</strong> — استبدال خيار المخبز ببطاطا ودجز أو تشيكن تندرز',
        's5.a5': '<strong>توحيد العروض</strong> عبر طلبات ودليفرو — عروض متطابقة على كليهما',
        's5.a6': '<strong>مضاعفة الاستثمار في كريم ودليفرو</strong> — إعادة توجيه ميزانية الجيمز إلى هذه القنوات',
        'nav.pdf': 'PDF',
        'nav.pdfExporting': 'جارٍ التصدير…'
    }
};

const STORAGE_LANG = 'badabing-lang';

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
        
        leavingSlide.classList.remove('active');
        
        if (direction === 'forward') {
            leavingSlide.classList.add('prev');
        } else {
            leavingSlide.classList.add('next');
        }
        
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

async function exportPDF() {
    if (typeof html2pdf === 'undefined') {
        alert('PDF library failed to load. Please check your internet connection and try again.');
        return;
    }

    const btn = document.getElementById('exportPdf');
    const lang = document.documentElement.getAttribute('lang') || 'en';
    const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

    btn.disabled = true;
    btn.querySelector('[data-i18n]').textContent = t['nav.pdfExporting'];
    btn.classList.add('pdf-btn-loading');

    // Show all slides stacked for capture
    document.body.classList.add('pdf-printing');
    await new Promise(r => setTimeout(r, 400));

    try {
        const wrapper = document.querySelector('.presentation-container');

        const opt = {
            margin: 0,
            filename: 'Badabing-Pizza-Bakehouse-Presentation.pdf',
            image: { type: 'jpeg', quality: 0.95 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                logging: false,
                backgroundColor: '#ffffff',
                scrollX: 0,
                scrollY: 0
            },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
        };

        await html2pdf().set(opt).from(wrapper).save();
    } catch (err) {
        console.error('PDF export failed:', err);
        alert('PDF export failed. Please try again.');
    } finally {
        document.body.classList.remove('pdf-printing');
        btn.disabled = false;
        btn.querySelector('[data-i18n]').textContent = t['nav.pdf'];
        btn.classList.remove('pdf-btn-loading');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const lang = getLang();
    setLang(lang);

    document.getElementById('langEn').addEventListener('click', () => setLang('en'));
    document.getElementById('langAr').addEventListener('click', () => setLang('ar'));
    document.getElementById('exportPdf').addEventListener('click', exportPDF);

    new PresentationController();
});

let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) e.preventDefault();
    lastTouchEnd = now;
}, false);
