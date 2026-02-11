/* Premium Presentation — Venture Foods / China Garden
   Slide controller + English/Arabic i18n with RTL */

const TRANSLATIONS = {
    en: {
        'nav.prev': '←',
        'nav.next': '→',
        'nav.done': '✓',
        'nav.prevAria': 'Previous slide',
        'nav.nextAria': 'Next slide',
        'title.main': 'China Garden',
        'title.subtitle': 'Ads Strategy Review & Performance Update — Feb 2026',
        'title.hint': 'Swipe or use arrow keys to navigate',

        's1.title': 'January Recap — Diminishing Returns',
        's1.subtitle': 'We increased spend in December, but sales didn\'t follow',
        's1.problem.head': 'The Problem',
        's1.problem.text': 'Ad spend jumped <strong>+15.7%</strong> but revenue barely moved <strong>(+1.2%)</strong>. Orders only grew <strong>+1.8%</strong>. We were spending significantly more to acquire marginal returns. The paid ads were not generating incremental sales — they were likely cannibalizing organic orders.',
        's1.decision.head': 'The Decision',
        's1.decision.text': 'Based on these numbers, we made the call to <strong>stop all Talabat ads</strong> in February. The goal: determine whether organic demand is strong enough on its own, and whether the bottom line improves without ad spend.',

        's2.title': 'First Week Without Ads',
        's2.subtitle': 'Feb 2–8 vs Jan 5–11 — Sales dropped, but the bottom line tells a different story',
        's2.comparison.head': 'Before vs After — Key Numbers',
        's2.takeaway.head': 'The Key Takeaway',
        's2.takeaway.text': 'Despite losing <strong>190 orders</strong> and <strong>1,568 KWD in revenue</strong>, the operational profit <strong>increased by 372 KWD</strong>. By eliminating 1,217 KWD in ad spend, the bottom line improved even with lower sales volume. The ads were costing more than they were generating.',

        's3.title': 'Economics Deep Dive',
        's3.subtitle': 'Full P&L comparison — with ads vs without ads',
        's3.breakdown.head': 'Where the Money Went',

        's4.title': 'Branch-Level Impact',
        's4.subtitle': 'Revenue change per branch — Feb 2–8 vs Jan 5–11',
        's4.concern.head': 'Branches to Watch',
        's4.concern.text': '<strong>Ardhiya</strong> saw the steepest decline at <strong>-24.8%</strong>, followed by <strong>Al-Qurain</strong> at <strong>-14.4%</strong>. These branches may have been more dependent on paid visibility. <strong>Promenade TGO</strong> actually grew <strong>+3.2%</strong>, suggesting strong organic demand there.',
        's4.note.head': 'Important Context',
        's4.note.text': 'The overall decline is expected when cutting ads. The critical question is whether the <strong>bottom line holds</strong>. So far, it has — and improved. We need to see if this trend sustains over the next 2–3 weeks.',

        's5a.title': 'Ardhiya Deep Dive',
        's5a.subtitle': 'The steepest decline — but does the bottom line hold?',
        's5a.comparison.head': 'Ardhiya — Before vs After',
        's5a.warning.head': 'Ardhiya is Different',
        's5a.warning.text': 'Unlike the overall brand where profit <strong>increased</strong>, Ardhiya\'s operational profit <strong>dropped by 45.66 KWD (-6.0%)</strong>. The 187 KWD saved in ad spend was <strong>not enough</strong> to offset the revenue loss. This suggests ads at Ardhiya may have been driving genuinely incremental orders — not just cannibalizing organic ones.',
        's5a.implication.head': 'What This Means',
        's5a.implication.text': 'Ardhiya is the <strong>branch most at risk</strong> from the no-ads strategy. If the overall bottom line starts to dip, Ardhiya is likely the first place we\'d consider <strong>reinstating targeted ads</strong>. This branch needs the closest monitoring.',

        's5.title': 'Monitoring & Emergency Protocol',
        's5.subtitle': 'We\'re keeping our eyes on — ready to act if needed',
        's5.emergency.head': 'Emergency Threshold',
        's5.emergency.text': 'If the <strong>operational profit drops below a critical threshold</strong>, we will immediately schedule an emergency call and <strong>reinstate Talabat ads</strong>. The bottom line is the ultimate decision-maker — not vanity metrics like orders or revenue.',
        's5.watching.head': 'What We\'re Tracking Daily',
        's5.watching.li1': '<strong>Operational Profit (weekly)</strong> — the single most important metric right now',
        's5.watching.li2': '<strong>Order volume trend</strong> — watching for stabilization or continued decline',
        's5.watching.li3': '<strong>Branch-level revenue</strong> — identifying which locations need attention',
        's5.watching.li4': '<strong>Avg. basket size</strong> — ensuring we\'re not losing higher-value customers',
        's5.status.head': 'Current Status',
        's5.status.text': '<span class="status-indicator"><span class="status-dot watching"></span><strong>Watching closely</strong></span> — Bottom line is currently <strong>above threshold</strong>. Profit improved +6.4% in the first week without ads. We continue to monitor and will act decisively if the trend reverses.',

        's6.title': 'Summary & Next Steps',
        's6.subtitle': 'Where we stand and what happens next',
        's6.a1': '<strong>Talabat ads stopped</strong> — December showed 15.7% more spend with only 1.2% more revenue. Ads were not pulling their weight.',
        's6.a2': 'First week without ads: orders down <strong>10.3%</strong>, revenue down <strong>12%</strong>, but <strong>operational profit up 6.4%</strong> (+372 KWD). The bottom line improved.',
        's6.a3': 'Continue tracking <strong>daily operational profit</strong> and <strong>branch performance</strong>. Watch for sustained decline vs. stabilization over next 2–3 weeks.',
        's6.a4': '<strong>Ardhiya</strong> (-24.8%) and <strong>Al-Qurain</strong> (-14.4%) had the steepest drops. These branches may need targeted action if decline continues.',
        's6.a5': 'If bottom line drops below threshold → <strong>emergency call</strong> → <strong>Talabat ads back on immediately</strong>. We won\'t let profitability erode for the sake of testing.',

        'nav.pdf': 'PDF',
        'nav.pdfExporting': 'Exporting…'
    },
    ar: {
        'nav.prev': 'السابق',
        'nav.next': 'التالي',
        'nav.done': '✓',
        'nav.prevAria': 'الشريحة السابقة',
        'nav.nextAria': 'الشريحة التالية',
        'title.main': 'تشاينا غاردن',
        'title.subtitle': 'مراجعة استراتيجية الإعلانات وتحديث الأداء — فبراير 2026',
        'title.hint': 'اسحب أو استخدم مفاتيح الأسهم للتنقل',

        's1.title': 'ملخص يناير — عوائد متناقصة',
        's1.subtitle': 'زدنا الإنفاق في ديسمبر، لكن المبيعات لم تتبع',
        's1.problem.head': 'المشكلة',
        's1.problem.text': 'الإنفاق على الإعلانات قفز <strong>+15.7%</strong> لكن الإيرادات بالكاد تحركت <strong>(+1.2%)</strong>. الطلبات نمت فقط <strong>+1.8%</strong>. كنا ننفق أكثر بكثير لتحقيق عوائد هامشية. الإعلانات المدفوعة لم تكن تولّد مبيعات إضافية — كانت على الأرجح تأكل من الطلبات العضوية.',
        's1.decision.head': 'القرار',
        's1.decision.text': 'بناءً على هذه الأرقام، اتخذنا قرار <strong>إيقاف جميع إعلانات طلبات</strong> في فبراير. الهدف: تحديد ما إذا كان الطلب العضوي قوياً بما يكفي وحده، وما إذا كان خط الربح يتحسن بدون إنفاق إعلاني.',

        's2.title': 'الأسبوع الأول بدون إعلانات',
        's2.subtitle': '2-8 فبراير مقابل 5-11 يناير — المبيعات انخفضت، لكن خط الربح يروي قصة مختلفة',
        's2.comparison.head': 'قبل وبعد — الأرقام الرئيسية',
        's2.takeaway.head': 'الخلاصة الرئيسية',
        's2.takeaway.text': 'رغم خسارة <strong>190 طلب</strong> و<strong>1,568 دينار في الإيرادات</strong>، الربح التشغيلي <strong>زاد بمقدار 372 دينار</strong>. بإلغاء 1,217 دينار من الإنفاق الإعلاني، تحسّن خط الربح حتى مع انخفاض حجم المبيعات.',

        's3.title': 'تحليل اقتصادي معمّق',
        's3.subtitle': 'مقارنة كاملة للأرباح والخسائر — مع إعلانات مقابل بدون',
        's3.breakdown.head': 'أين ذهبت الأموال',

        's4.title': 'التأثير على مستوى الفروع',
        's4.subtitle': 'تغير الإيرادات لكل فرع — 2-8 فبراير مقابل 5-11 يناير',
        's4.concern.head': 'فروع تحتاج مراقبة',
        's4.concern.text': '<strong>العارضية</strong> شهدت أكبر انخفاض بنسبة <strong>-24.8%</strong>، تليها <strong>القرين</strong> بنسبة <strong>-14.4%</strong>. هذه الفروع ربما كانت أكثر اعتماداً على الظهور المدفوع. <strong>بروميناد TGO</strong> نمت فعلياً <strong>+3.2%</strong>، مما يشير لطلب عضوي قوي هناك.',
        's4.note.head': 'سياق مهم',
        's4.note.text': 'الانخفاض العام متوقع عند قطع الإعلانات. السؤال الحاسم هو هل <strong>يصمد خط الربح</strong>. حتى الآن، نعم — وتحسّن. نحتاج لرؤية هل يستمر هذا الاتجاه خلال 2-3 أسابيع القادمة.',

        's5a.title': 'تحليل فرع العارضية',
        's5a.subtitle': 'أكبر انخفاض — لكن هل يصمد خط الربح؟',
        's5a.comparison.head': 'العارضية — قبل وبعد',
        's5a.warning.head': 'العارضية مختلفة',
        's5a.warning.text': 'على عكس العلامة ككل حيث <strong>ارتفع</strong> الربح، الربح التشغيلي للعارضية <strong>انخفض بمقدار 45.66 دينار (-6.0%)</strong>. توفير 187 دينار من الإعلانات <strong>لم يكن كافياً</strong> لتعويض خسارة الإيرادات. هذا يشير أن الإعلانات في العارضية ربما كانت تقود طلبات إضافية حقيقية.',
        's5a.implication.head': 'ماذا يعني هذا',
        's5a.implication.text': 'العارضية هو <strong>الفرع الأكثر عرضة للخطر</strong> من استراتيجية بدون إعلانات. إذا بدأ خط الربح الإجمالي بالانخفاض، العارضية هو أول مكان نفكر فيه بـ<strong>إعادة الإعلانات المستهدفة</strong>. هذا الفرع يحتاج أقرب مراقبة.',

        's5.title': 'المراقبة وبروتوكول الطوارئ',
        's5.subtitle': 'نراقب عن كثب — مستعدون للتصرف إن لزم',
        's5.emergency.head': 'حد الطوارئ',
        's5.emergency.text': 'إذا انخفض <strong>الربح التشغيلي تحت حد معين</strong>، سنقوم فوراً بجدولة مكالمة طوارئ و<strong>إعادة تفعيل إعلانات طلبات</strong>. خط الربح هو صانع القرار النهائي — ليس مقاييس المظهر مثل الطلبات أو الإيرادات.',
        's5.watching.head': 'ما نتتبعه يومياً',
        's5.watching.li1': '<strong>الربح التشغيلي (أسبوعياً)</strong> — المقياس الأهم حالياً',
        's5.watching.li2': '<strong>اتجاه حجم الطلبات</strong> — مراقبة الاستقرار أو الاستمرار في الانخفاض',
        's5.watching.li3': '<strong>إيرادات مستوى الفروع</strong> — تحديد المواقع التي تحتاج اهتماماً',
        's5.watching.li4': '<strong>متوسط حجم السلة</strong> — التأكد من عدم خسارة العملاء ذوي القيمة العالية',
        's5.status.head': 'الحالة الحالية',
        's5.status.text': '<span class="status-indicator"><span class="status-dot watching"></span><strong>مراقبة عن كثب</strong></span> — خط الربح حالياً <strong>فوق الحد</strong>. الربح تحسّن +6.4% في الأسبوع الأول بدون إعلانات. نستمر في المراقبة وسنتصرف بحزم إذا انعكس الاتجاه.',

        's6.title': 'الملخص والخطوات القادمة',
        's6.subtitle': 'أين نقف وما سيحدث لاحقاً',
        's6.a1': '<strong>إيقاف إعلانات طلبات</strong> — ديسمبر أظهر 15.7% زيادة في الإنفاق مع 1.2% فقط زيادة في الإيرادات. الإعلانات لم تكن تستحق.',
        's6.a2': 'الأسبوع الأول بدون إعلانات: الطلبات انخفضت <strong>10.3%</strong>، الإيرادات انخفضت <strong>12%</strong>، لكن <strong>الربح التشغيلي ارتفع 6.4%</strong> (+372 دينار). خط الربح تحسّن.',
        's6.a3': 'الاستمرار في تتبع <strong>الربح التشغيلي اليومي</strong> و<strong>أداء الفروع</strong>. مراقبة الانخفاض المستمر مقابل الاستقرار خلال 2-3 أسابيع القادمة.',
        's6.a4': '<strong>العارضية</strong> (-24.8%) و<strong>القرين</strong> (-14.4%) شهدتا أكبر الانخفاضات. قد تحتاج هذه الفروع لإجراء مستهدف إن استمر الانخفاض.',
        's6.a5': 'إذا انخفض خط الربح تحت الحد → <strong>مكالمة طوارئ</strong> → <strong>إعادة إعلانات طلبات فوراً</strong>. لن نسمح بتآكل الربحية من أجل الاختبار.',

        'nav.pdf': 'PDF',
        'nav.pdfExporting': 'جارٍ التصدير…'
    }
};

const STORAGE_LANG = 'venture-foods-lang';

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
            filename: 'China-Garden-Venture-Foods-Ads-Strategy.pdf',
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
