// Mortgage Calc — flat dot-key i18n
// Keys missing in a language fall back to English via LanguageContext.t()

const translations = {
  // ── English (primary, source of truth) ──
  en: {
    'app.title': 'Mortgage Calc',
    'app.subtitle': 'BROWSER-NATIVE · NO SIGNUP · NO UPLOAD',
    'app.metaStamp1': 'Studio T. Ishi',
    'app.metaStamp2': 'Mortgage Calc',
    'app.metaStamp3': 'Browser-native',

    'tabs.payment': 'Payment',
    'tabs.refinance': 'Refinance',
    'tabs.affordability': 'Affordability',
    'tabs.amortization': 'Schedule',
    'tabs.extra': 'Extra Payment',
    'tabs.biweekly': 'Biweekly',

    'nav.about': 'About',
    'nav.contact': 'Contact',

    'common.loading': 'Loading…',
    'common.calculate': 'Calculate',
    'common.useCasesEyebrow': 'I — Use cases',
    'common.useCasesTitle': 'When to reach for it',
    'common.faqsEyebrow': 'II — Questions',
    'common.faqsTitle': 'Frequently asked',

    'footer.about': 'About',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.contact': 'Contact',
    'footer.backToTools': '← Back to calculators',
    'footer.tagline': 'Built in Saigon by Studio T. Ishi.',
    'footer.sister': 'Sister sites:',
    'footer.sisterImage': 'Image Tools',
    'footer.sisterPdf': 'PDF Tools',
    'footer.portfolio': 'Studio',
    'footer.copyright': '2026 Studio T. Ishi',

    'home.eyebrow': 'I — Studio T. Ishi · Calculators',
    'home.titleSerif': 'Mortgage math,',
    'home.titleEm': 'in your browser.',
    'home.lede':
      'Six free calculators for monthly payments, refinances, affordability, and amortization. Nothing leaves your device.',
    'home.startCta': 'Start with payment →',
    'home.learnCta': 'About the studio',
    'home.strength1Title': 'Browser-native',
    'home.strength1Body':
      'Every figure is computed locally. Your numbers never reach a server.',
    'home.strength2Title': 'No signup, ever',
    'home.strength2Body':
      'No accounts, no email gates, no upsell to a paid tier. Free is the whole product.',
    'home.strength3Title': 'Editorial precision',
    'home.strength3Body':
      'Tabular numerals, sensible defaults, and assumptions stated where they matter.',

    'about.eyebrow': 'I — About Mortgage Calc',
    'about.titleSerif': 'A small set of',
    'about.titleEm': 'honest calculators.',
    'about.lede':
      'Mortgage Calc is part of Studio T. Ishi — a small Saigon-based studio building editorial websites and useful tools for the open web.',
    'about.whyTitle': 'Why we built this',
    'about.whyP1':
      'Most mortgage calculators online are either buried under affiliate offers or quietly route your inputs to a lead-generation pipeline. We wanted something different: a small, well-typed set of calculators that compute everything locally and explain their assumptions in plain language.',
    'about.whyP2':
      'No signup. No upload. No "get pre-approved" CTA inserted between you and a number. Just the math, the formula, and the boundaries of what the formula does and does not say.',
    'about.principlesEyebrow': 'II — Principles',
    'about.principlesTitle': 'Four rules we follow',
    'about.principle1Title': 'Privacy by design',
    'about.principle1Body':
      'Every calculation runs inside your browser. The numbers you type never leave your device.',
    'about.principle2Title': 'State the assumptions',
    'about.principle2Body':
      'Mortgage formulas have hidden assumptions (compounding, fee handling, tax treatment). We surface them on every result.',
    'about.principle3Title': 'Tabular and typed',
    'about.principle3Body':
      'Numbers line up. Currency formats follow your locale. Editorial typography that respects what financial data actually looks like.',
    'about.principle4Title': 'No upsell',
    'about.principle4Body':
      'No premium tier, no email capture, no quote forms. The product is the whole product.',
    'about.toolsTitle': 'What you can calculate',
    'about.toolsIntro': 'Six calculators cover most everyday mortgage questions:',
    'about.toolPayment': 'estimate the monthly payment on a fixed-rate loan, with principal and interest split.',
    'about.toolRefinance': 'compare your current loan against a refinance scenario and find the break-even month.',
    'about.toolAffordability': 'find the loan size you qualify for under a 28/36 debt-to-income rule.',
    'about.toolAmortization': 'see the full month-by-month payment schedule with running balance.',
    'about.toolExtra': 'see how much faster you finish (and how much you save) with an extra monthly payment.',
    'about.toolBiweekly': 'compare a standard monthly schedule with a biweekly schedule and quantify the savings.',
    'about.techTitle': 'How it works under the hood',
    'about.techP1':
      'Mortgage Calc is built on the same stack we use for our editorial client work — but stripped down to a single-page calculator engine:',
    'about.tech1': 'React 19 with a small custom router (no framework lock-in).',
    'about.tech2': 'All math runs locally in pure JavaScript using the standard PMT formula and amortization recurrence.',
    'about.tech3': 'No analytics on the calculation itself — only standard page-view analytics where required for AdSense.',
    'about.tech4': 'Five-language interface (English, Japanese, Vietnamese, Indonesian, Chinese).',
    'about.techP2':
      'The full source is hosted publicly. If you want to verify what we compute or improve a calculator, the code is there for you.',
    'about.makerTitle': 'The maker',
    'about.makerP1':
      'Studio T. Ishi is a one-person studio in Saigon focused on editorial websites for cafés, salons, restaurants, and small businesses across Vietnam — and the occasional public utility like this one.',
    'about.makerP2':
      'If you want to see the bigger client portfolio, the studio site is linked in the footer.',
    'about.freeTitle': 'Why it is free',
    'about.freeP1':
      'A small advertising banner pays for the domain and hosting. That is it. No premium plan, no pro tier, no behind-a-paywall feature.',
    'about.freeP2':
      'If the ads ever interfere with using the calculators, that is our mistake — write to us and we will fix it.',
    'about.closingEyebrow': 'III — Boundaries',
    'about.closingTitle': 'What this is not',
    'about.closingBody':
      "Not financial advice. Not a substitute for a mortgage broker, a tax professional, or your bank's actual quote. Mortgage Calc gives you the math; the decision is yours.",

    'contact.eyebrow': 'I — Contact',
    'contact.titleSerif': 'Talk to',
    'contact.titleEm': 'the studio.',
    'contact.lede':
      'Bug reports, feature ideas, calculation disagreements, or studio inquiries — all welcome. The fastest path is email.',
    'contact.directLabel': 'Direct email',
    'contact.categoriesTitle': 'Pick a category',
    'contact.categoriesIntro':
      'These templates open your mail client with a pre-filled subject line so we can route faster.',
    'contact.cat1Title': 'General inquiry',
    'contact.cat1Body': 'A general question about Mortgage Calc, the studio, or a calculator output you want to discuss.',
    'contact.cat2Title': 'Bug report',
    'contact.cat2Body': 'Something computed unexpectedly, a UI broke, or a translation looks wrong. Include browser + steps.',
    'contact.cat3Title': 'Feature suggestion',
    'contact.cat3Body': 'A calculator we should add, an input we should expose, or a calculation we should clarify.',
    'contact.cat4Title': 'Studio / Business',
    'contact.cat4Body': 'You want to commission a website, a calculator, or a custom editorial site for your business.',
    'contact.responseTitle': 'Response time',
    'contact.responseBody':
      'Usually within 48 hours during business days (UTC+7, Saigon). Bug reports get priority.',
    'contact.privacyTitle': 'Email privacy',
    'contact.privacyBody':
      'Your email goes only to the studio inbox. We never share it, sell it, or add it to a marketing list.',

    'payment.title': 'Mortgage Payment Calculator',
    'payment.seoDesc':
      'Estimate the monthly payment on a fixed-rate mortgage. Enter loan amount, term, and interest rate to see principal & interest, total interest, and total cost.',
    'payment.fieldPrincipal': 'Loan amount',
    'payment.fieldRate': 'Interest rate (annual, %)',
    'payment.fieldTerm': 'Term (years)',
    'payment.fieldCurrency': 'Currency',
    'payment.calculate': 'Calculate payment',
    'payment.resultLabel': 'Monthly payment',
    'payment.totalInterest': 'Total interest',
    'payment.totalCost': 'Total of payments',
    'payment.payoffDate': 'Payoff (months)',
    'payment.assumptions':
      'Fixed rate, monthly compounding. Property tax, insurance, HOA, and PMI are not included.',
  },

  // ── Japanese ──
  ja: {
    'app.title': 'Mortgage Calc',
    'app.subtitle': 'ブラウザ完結 · 登録不要 · アップロード不要',
    'app.metaStamp1': 'Studio T. Ishi',
    'app.metaStamp2': '住宅ローン計算',
    'app.metaStamp3': 'Browser-native',

    'tabs.payment': '月額返済',
    'tabs.refinance': '借換',
    'tabs.affordability': '借入可能額',
    'tabs.amortization': '償還表',
    'tabs.extra': '繰上返済',
    'tabs.biweekly': '隔週返済',

    'nav.about': 'About',
    'nav.contact': 'Contact',

    'common.loading': '読み込み中…',
    'common.calculate': '計算',
    'common.useCasesEyebrow': 'I — 利用シーン',
    'common.useCasesTitle': 'こんな時に',
    'common.faqsEyebrow': 'II — よくある質問',
    'common.faqsTitle': 'FAQ',

    'footer.about': 'About',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.contact': 'Contact',
    'footer.backToTools': '← 計算機一覧へ',
    'footer.tagline': 'Saigon の Studio T. Ishi が作りました。',
    'footer.sister': '姉妹サイト:',
    'footer.sisterImage': 'Image Tools',
    'footer.sisterPdf': 'PDF Tools',
    'footer.portfolio': 'Studio',
    'footer.copyright': '2026 Studio T. Ishi',

    'home.eyebrow': 'I — Studio T. Ishi · Calculators',
    'home.titleSerif': '住宅ローンの計算を、',
    'home.titleEm': 'ブラウザだけで。',
    'home.lede':
      '月額返済・借換・借入可能額・償還表まで6種類の計算機。すべての計算はあなたのデバイス内で完結します。',
    'home.startCta': '月額返済から →',
    'home.learnCta': '制作者について',
    'home.strength1Title': 'ブラウザ完結',
    'home.strength1Body':
      'すべての計算はあなたのデバイス内で実行。サーバーに数字が送られることはありません。',
    'home.strength2Title': '登録不要',
    'home.strength2Body':
      'アカウント不要・メールアドレス入力不要・有料プラン提案なし。無料がすべてです。',
    'home.strength3Title': 'エディトリアル精度',
    'home.strength3Body':
      '数字が桁揃えで読みやすく、前提条件は結果ごとに明記。金融数字に値する設計。',

    'about.eyebrow': 'I — About Mortgage Calc',
    'about.titleSerif': '正直で小さな',
    'about.titleEm': '計算機セット。',
    'about.lede':
      'Mortgage Calc は Studio T. Ishi の一部です。Saigon を拠点にエディトリアルなWebサイトと公開ツールを作っています。',
    'about.whyTitle': '作った理由',
    'about.whyP1':
      'オンラインの住宅ローン計算機の多くは、アフィリエイト広告に埋もれていたり、入力した情報が静かに営業リストに渡されたりします。私たちはそれと違うものを作りたかった。',
    'about.whyP2':
      '登録なし、アップロードなし、「事前審査を申し込む」CTAなし。あるのは数式と、その数式が示す境界だけ。',
    'about.principlesEyebrow': 'II — 原則',
    'about.principlesTitle': '私たちが守る4つのルール',
    'about.principle1Title': 'プライバシー設計',
    'about.principle1Body':
      'すべての計算はブラウザ内で実行。入力した数字はあなたのデバイスから出ません。',
    'about.principle2Title': '前提を明示',
    'about.principle2Body':
      '住宅ローンの計算式には隠れた前提（複利・手数料・税）があります。結果ごとに明示します。',
    'about.principle3Title': '桁揃え・タイポ',
    'about.principle3Body':
      '数字は桁が揃い、通貨表記はロケール準拠。金融データにふさわしいエディトリアル・タイポグラフィ。',
    'about.principle4Title': '営業しない',
    'about.principle4Body':
      'プレミアムプランも、メール収集も、見積フォームもなし。製品が製品の全部です。',
    'about.toolsTitle': '計算できること',
    'about.toolsIntro': '6つの計算機が日常的な住宅ローン疑問の大半をカバーします:',
    'about.toolPayment': '固定金利ローンの月額返済を、元金・利息内訳付きで算出。',
    'about.toolRefinance': '現行ローンと借換シナリオを比較し、損益分岐月を算出。',
    'about.toolAffordability': '28/36 DTI ルールで借入可能額の目安を算出。',
    'about.toolAmortization': '月次の元金・利息・残高を全期間にわたって表示。',
    'about.toolExtra': '繰上返済を加えた場合の短縮期間と利息削減額を計算。',
    'about.toolBiweekly': '月次返済と隔週返済を比較して、利息削減額を算出。',
    'about.techTitle': '裏側の仕組み',
    'about.techP1':
      'Mortgage Calc はクライアント案件と同じスタックで作られていますが、計算機エンジンに削ぎ落としています:',
    'about.tech1': 'React 19 + 自前ルーター（フレームワーク依存なし）',
    'about.tech2': 'すべての計算式（PMT 公式・償還漸化式）は純粋な JavaScript でローカル実行',
    'about.tech3': '計算自体に解析タグなし。AdSense 必須のページビュー計測のみ',
    'about.tech4': '5言語対応（英語・日本語・ベトナム語・インドネシア語・中国語）',
    'about.techP2':
      'ソースコードは公開されています。計算ロジックを検証したい方、改善したい方は GitHub をご覧ください。',
    'about.makerTitle': '制作者',
    'about.makerP1':
      'Studio T. Ishi は Saigon の1人スタジオ。ベトナム各地のカフェ・サロン・レストラン・小規模ビジネス向けにエディトリアルなWebサイトを作っています。たまにこういう公開ツールも。',
    'about.makerP2':
      'クライアントポートフォリオはフッターのリンクから。',
    'about.freeTitle': 'なぜ無料なのか',
    'about.freeP1':
      '小さな広告がドメイン代とホスティング代を賄っています。それだけ。プレミアムプランも有料機能もありません。',
    'about.freeP2':
      '広告が計算機の使い勝手を損ねていたら、それは私たちの設計ミス。連絡をいただければ修正します。',
    'about.closingEyebrow': 'III — 境界線',
    'about.closingTitle': 'この計算機がしないこと',
    'about.closingBody':
      'これは金融アドバイスではありません。住宅ローンブローカー、税理士、銀行の実際の見積もりに代わるものでもありません。Mortgage Calc が提供するのは数学だけ。判断はあなたのものです。',

    'contact.eyebrow': 'I — Contact',
    'contact.titleSerif': 'スタジオに',
    'contact.titleEm': 'ご連絡ください。',
    'contact.lede':
      'バグ報告・機能提案・計算結果への異論・スタジオへの問い合わせ — 何でも歓迎。最速はメールです。',
    'contact.directLabel': 'メール',
    'contact.categoriesTitle': 'カテゴリを選んでください',
    'contact.categoriesIntro':
      'メールクライアントに件名が入った状態で開きます。仕分けが速くなります。',
    'contact.cat1Title': '一般のお問い合わせ',
    'contact.cat1Body': 'Mortgage Calc やスタジオ、計算結果について話したいこと。',
    'contact.cat2Title': 'バグ報告',
    'contact.cat2Body': '計算が予想と違う、UIが壊れた、翻訳がおかしい等。ブラウザ・手順を添えてください。',
    'contact.cat3Title': '機能提案',
    'contact.cat3Body': '追加すべき計算機、表示すべき入力、改善すべき計算等。',
    'contact.cat4Title': 'スタジオ・ビジネス',
    'contact.cat4Body': 'Webサイト・計算機・カスタム案件のご相談。',
    'contact.responseTitle': '返信時間',
    'contact.responseBody':
      '通常48時間以内（営業日, UTC+7 Saigon）。バグ報告は優先対応します。',
    'contact.privacyTitle': 'メールのプライバシー',
    'contact.privacyBody':
      'メールはスタジオの受信箱のみに届きます。共有・販売・マーケティングリスト追加は行いません。',

    'payment.title': '住宅ローン月額返済計算',
    'payment.seoDesc':
      '固定金利住宅ローンの月額返済額を計算します。借入額・期間・金利を入力すると、元金・利息内訳・総利息・総支払額が表示されます。',
    'payment.fieldPrincipal': '借入額',
    'payment.fieldRate': '年利 (%)',
    'payment.fieldTerm': '期間 (年)',
    'payment.fieldCurrency': '通貨',
    'payment.calculate': '計算する',
    'payment.resultLabel': '月額返済額',
    'payment.totalInterest': '総利息',
    'payment.totalCost': '総支払額',
    'payment.payoffDate': '完済まで（月数）',
    'payment.assumptions':
      '固定金利・月複利。固定資産税、火災保険、HOA、PMI は含みません。',
  },

  // ── Vietnamese ──
  vi: {
    'app.title': 'Mortgage Calc',
    'app.subtitle': 'CHẠY TRÊN TRÌNH DUYỆT · KHÔNG ĐĂNG KÝ · KHÔNG TẢI LÊN',
    'tabs.payment': 'Trả góp',
    'tabs.refinance': 'Tái cấp vốn',
    'tabs.affordability': 'Khả năng vay',
    'tabs.amortization': 'Lịch trả nợ',
    'tabs.extra': 'Trả thêm',
    'tabs.biweekly': 'Hai tuần / lần',
    'nav.about': 'Giới thiệu',
    'nav.contact': 'Liên hệ',
    'common.loading': 'Đang tải…',
    'common.calculate': 'Tính',
    'common.useCasesEyebrow': 'I — Trường hợp dùng',
    'common.useCasesTitle': 'Khi nào nên dùng',
    'common.faqsEyebrow': 'II — Câu hỏi',
    'common.faqsTitle': 'Câu hỏi thường gặp',
    'footer.about': 'Giới thiệu',
    'footer.privacy': 'Quyền riêng tư',
    'footer.terms': 'Điều khoản',
    'footer.contact': 'Liên hệ',
    'footer.backToTools': '← Quay lại',
    'footer.tagline': 'Được xây dựng tại Sài Gòn bởi Studio T. Ishi.',
    'footer.sister': 'Trang chị em:',
    'footer.copyright': '2026 Studio T. Ishi',
    'home.eyebrow': 'I — Studio T. Ishi · Calculators',
    'home.titleSerif': 'Tính toán vay mua nhà,',
    'home.titleEm': 'ngay trong trình duyệt.',
    'home.lede':
      'Sáu công cụ miễn phí cho khoản trả hàng tháng, tái cấp vốn, khả năng vay và lịch trả nợ. Không có gì rời khỏi thiết bị của bạn.',
    'home.learnCta': 'Về studio',
    'payment.title': 'Tính khoản trả hàng tháng',
    'payment.seoDesc':
      'Ước tính khoản trả hàng tháng của khoản vay thế chấp lãi suất cố định.',
    'payment.fieldPrincipal': 'Số tiền vay',
    'payment.fieldRate': 'Lãi suất (năm, %)',
    'payment.fieldTerm': 'Thời hạn (năm)',
    'payment.fieldCurrency': 'Tiền tệ',
    'payment.calculate': 'Tính',
    'payment.resultLabel': 'Khoản trả hàng tháng',
    'payment.totalInterest': 'Tổng lãi',
    'payment.totalCost': 'Tổng thanh toán',
    'payment.payoffDate': 'Đáo hạn (tháng)',
  },

  // ── Indonesian ──
  id: {
    'app.title': 'Mortgage Calc',
    'app.subtitle': 'BERJALAN DI BROWSER · TANPA DAFTAR · TANPA UNGGAH',
    'tabs.payment': 'Cicilan',
    'tabs.refinance': 'Refinancing',
    'tabs.affordability': 'Kemampuan Bayar',
    'tabs.amortization': 'Jadwal',
    'tabs.extra': 'Pelunasan',
    'tabs.biweekly': 'Dua mingguan',
    'nav.about': 'Tentang',
    'nav.contact': 'Kontak',
    'common.loading': 'Memuat…',
    'common.calculate': 'Hitung',
    'common.useCasesEyebrow': 'I — Kasus penggunaan',
    'common.useCasesTitle': 'Kapan menggunakan',
    'common.faqsEyebrow': 'II — Pertanyaan',
    'common.faqsTitle': 'FAQ',
    'footer.about': 'Tentang',
    'footer.privacy': 'Privasi',
    'footer.terms': 'Syarat',
    'footer.contact': 'Kontak',
    'footer.backToTools': '← Kembali',
    'footer.tagline': 'Dibuat di Saigon oleh Studio T. Ishi.',
    'footer.copyright': '2026 Studio T. Ishi',
    'home.titleSerif': 'Matematika hipotek,',
    'home.titleEm': 'di browser Anda.',
    'home.lede':
      'Enam kalkulator gratis untuk cicilan bulanan, refinancing, kemampuan bayar, dan jadwal amortisasi.',
    'home.learnCta': 'Tentang studio',
    'payment.title': 'Kalkulator Cicilan KPR',
    'payment.fieldPrincipal': 'Jumlah pinjaman',
    'payment.fieldRate': 'Suku bunga (tahunan, %)',
    'payment.fieldTerm': 'Jangka waktu (tahun)',
    'payment.fieldCurrency': 'Mata uang',
    'payment.calculate': 'Hitung',
    'payment.resultLabel': 'Cicilan bulanan',
    'payment.totalInterest': 'Total bunga',
    'payment.totalCost': 'Total pembayaran',
    'payment.payoffDate': 'Pelunasan (bulan)',
  },

  // ── Chinese (Simplified) ──
  zh: {
    'app.title': 'Mortgage Calc',
    'app.subtitle': '浏览器原生 · 无需注册 · 无需上传',
    'tabs.payment': '月供',
    'tabs.refinance': '再融资',
    'tabs.affordability': '可贷额度',
    'tabs.amortization': '还款计划',
    'tabs.extra': '提前还款',
    'tabs.biweekly': '半月还款',
    'nav.about': '关于',
    'nav.contact': '联系',
    'common.loading': '加载中…',
    'common.calculate': '计算',
    'common.useCasesEyebrow': 'I — 使用场景',
    'common.useCasesTitle': '何时使用',
    'common.faqsEyebrow': 'II — 问答',
    'common.faqsTitle': '常见问题',
    'footer.about': '关于',
    'footer.privacy': '隐私',
    'footer.terms': '条款',
    'footer.contact': '联系',
    'footer.backToTools': '← 返回',
    'footer.tagline': '由 Studio T. Ishi 在西贡构建。',
    'footer.copyright': '2026 Studio T. Ishi',
    'home.titleSerif': '抵押贷款计算，',
    'home.titleEm': '尽在浏览器。',
    'home.lede':
      '六个免费计算器，涵盖月供、再融资、可贷额度和还款计划。所有数据保留在您的设备上。',
    'home.learnCta': '关于工作室',
    'payment.title': '抵押贷款月供计算',
    'payment.fieldPrincipal': '贷款金额',
    'payment.fieldRate': '年利率 (%)',
    'payment.fieldTerm': '期限 (年)',
    'payment.fieldCurrency': '货币',
    'payment.calculate': '计算',
    'payment.resultLabel': '月供',
    'payment.totalInterest': '总利息',
    'payment.totalCost': '总还款额',
    'payment.payoffDate': '还清 (月)',
  },
};

export default translations;
