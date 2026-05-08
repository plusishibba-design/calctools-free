// Calc Tools — flat dot-key i18n
// Keys missing in a language fall back to English via LanguageContext.t()

const translations = {
  // ── English (primary, source of truth) ──
  en: {
    'app.title': 'Calc Tools',
    'app.subtitle': 'BROWSER-NATIVE · NO SIGNUP · NO UPLOAD',

    'tabs.mortgage': 'Mortgage',
    'tabs.loan': 'Loan',
    'tabs.compound': 'Compound Interest',

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

    'home.eyebrow': 'I — Studio T. Ishi · Calc Tools',
    'home.titleSerif': 'Numbers,',
    'home.titleEm': 'computed locally.',
    'home.lede':
      'A small set of in-browser calculators for finance, savings, and everyday math. Nothing leaves your device.',
    'home.startCta': 'Start with mortgage →',
    'home.learnCta': 'About the studio',
    'home.categoryFinance': 'I — Finance',
    'home.categoryFinanceBody': 'Mortgage, loan, and compound interest. Standard formulas, stated assumptions.',
    'home.strength1Title': 'Browser-native',
    'home.strength1Body':
      'Every figure is computed locally. Your numbers never reach a server.',
    'home.strength2Title': 'No signup, ever',
    'home.strength2Body':
      'No accounts, no email gates, no upsell to a paid tier. Free is the whole product.',
    'home.strength3Title': 'Editorial precision',
    'home.strength3Body':
      'Tabular numerals, sensible defaults, and assumptions stated where they matter.',

    'about.eyebrow': 'I — About Calc Tools',
    'about.titleSerif': 'A small set of',
    'about.titleEm': 'honest calculators.',
    'about.lede':
      'Calc Tools is part of Studio T. Ishi — a small Saigon-based studio building editorial websites and useful tools for the open web.',
    'about.whyTitle': 'Why we built this',
    'about.whyP1':
      'Most online calculators are buried under affiliate offers or quietly route your inputs to a lead-generation pipeline. We wanted something different: a small, well-typed set of calculators that compute everything locally and explain their assumptions in plain language.',
    'about.whyP2':
      'No signup. No upload. No "get pre-approved" CTA inserted between you and a number. Just the math, the formula, and the boundaries of what the formula does and does not say.',
    'about.principlesEyebrow': 'II — Principles',
    'about.principlesTitle': 'Four rules we follow',
    'about.principle1Title': 'Privacy by design',
    'about.principle1Body':
      'Every calculation runs inside your browser. The numbers you type never leave your device.',
    'about.principle2Title': 'State the assumptions',
    'about.principle2Body':
      'Finance formulas have hidden assumptions (compounding, fee handling, tax treatment). We surface them on every result.',
    'about.principle3Title': 'Tabular and typed',
    'about.principle3Body':
      'Numbers line up. Currency formats follow your locale. Editorial typography that respects what financial data actually looks like.',
    'about.principle4Title': 'No upsell',
    'about.principle4Body':
      'No premium tier, no email capture, no quote forms. The product is the whole product.',
    'about.toolsTitle': 'What you can calculate',
    'about.toolsIntro': 'The current set focuses on personal finance:',
    'about.toolMortgage': 'estimate the monthly payment on a fixed-rate home loan, with principal and interest split.',
    'about.toolLoan': 'estimate monthly payments on personal, auto, or any fixed-rate installment loan.',
    'about.toolCompound': 'see how savings grow with monthly contributions and compound interest over time.',
    'about.techTitle': 'How it works under the hood',
    'about.techP1':
      'Calc Tools is built on the same stack we use for our editorial client work — but stripped down to a single-page calculator engine:',
    'about.tech1': 'React 19 with a small custom router (no framework lock-in).',
    'about.tech2': 'All math runs locally in pure JavaScript using standard finance formulas.',
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
      "Not financial advice. Not a substitute for a mortgage broker, a tax professional, or your bank's actual quote. Calc Tools gives you the math; the decision is yours.",

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
    'contact.cat1Body': 'A general question about Calc Tools, the studio, or a calculator output you want to discuss.',
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

    // Mortgage Calculator
    'mortgage.title': 'Mortgage Payment Calculator',
    'mortgage.seoDesc':
      'Estimate the monthly payment on a fixed-rate home loan. Enter loan amount, term, and interest rate to see principal & interest, total interest, and total cost.',
    'mortgage.fieldPrincipal': 'Loan amount',
    'mortgage.fieldRate': 'Interest rate (annual, %)',
    'mortgage.fieldTerm': 'Term (years)',
    'mortgage.fieldCurrency': 'Currency',
    'mortgage.resultLabel': 'Monthly payment',
    'mortgage.totalInterest': 'Total interest',
    'mortgage.totalCost': 'Total of payments',
    'mortgage.payoffDate': 'Payoff (months)',
    'mortgage.assumptions':
      'Fixed rate, monthly compounding. Property tax, insurance, HOA, and PMI are not included.',

    // Loan Calculator
    'loan.title': 'Personal & Auto Loan Calculator',
    'loan.seoDesc':
      'Calculate monthly payments on personal loans, auto loans, or any fixed-rate installment loan. Compare different terms and rates side by side.',
    'loan.fieldPrincipal': 'Loan amount',
    'loan.fieldRate': 'Interest rate (annual, %)',
    'loan.fieldTerm': 'Term (years)',
    'loan.fieldCurrency': 'Currency',
    'loan.resultLabel': 'Monthly payment',
    'loan.totalInterest': 'Total interest',
    'loan.totalCost': 'Total of payments',
    'loan.payoffDate': 'Payoff (months)',
    'loan.assumptions':
      'Fixed rate, monthly compounding, fully amortizing. Origination fees and prepayment penalties are not included.',

    // Compound Interest Calculator
    'compound.title': 'Compound Interest Calculator',
    'compound.seoDesc':
      'See how your savings grow over time with compound interest. Combine a starting principal with monthly contributions to project future value, total contributions, and earned interest.',
    'compound.fieldPrincipal': 'Initial deposit',
    'compound.fieldContribution': 'Monthly contribution',
    'compound.fieldRate': 'Annual return (%)',
    'compound.fieldYears': 'Years',
    'compound.fieldCurrency': 'Currency',
    'compound.resultLabel': 'Future value',
    'compound.totalContrib': 'Total contributions',
    'compound.totalInterest': 'Earned interest',
    'compound.years': 'Years',
    'compound.assumptions':
      'Monthly compounding, contributions made at end of month. Inflation, taxes, and fees are not included — actual results vary.',
  },

  // ── Japanese ──
  ja: {
    'app.title': 'Calc Tools',
    'app.subtitle': 'ブラウザ完結 · 登録不要 · アップロード不要',

    'tabs.mortgage': '住宅ローン',
    'tabs.loan': 'ローン',
    'tabs.compound': '複利計算',

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

    'home.eyebrow': 'I — Studio T. Ishi · Calc Tools',
    'home.titleSerif': '数字を、',
    'home.titleEm': 'ローカルで計算する。',
    'home.lede':
      '金融・貯蓄・日常の計算をブラウザだけで完結する小さな計算機セット。数字はあなたのデバイスから出ません。',
    'home.startCta': '住宅ローンから →',
    'home.learnCta': '制作者について',
    'home.categoryFinance': 'I — Finance',
    'home.categoryFinanceBody': '住宅ローン・各種ローン・複利。標準的な数式と、明示された前提条件。',
    'home.strength1Title': 'ブラウザ完結',
    'home.strength1Body':
      'すべての計算はあなたのデバイス内で実行。サーバーに数字が送られることはありません。',
    'home.strength2Title': '登録不要',
    'home.strength2Body':
      'アカウント不要・メールアドレス入力不要・有料プラン提案なし。無料がすべてです。',
    'home.strength3Title': 'エディトリアル精度',
    'home.strength3Body':
      '数字が桁揃えで読みやすく、前提条件は結果ごとに明記。金融数字に値する設計。',

    'about.eyebrow': 'I — About Calc Tools',
    'about.titleSerif': '正直で小さな',
    'about.titleEm': '計算機セット。',
    'about.lede':
      'Calc Tools は Studio T. Ishi の一部です。Saigon を拠点にエディトリアルなWebサイトと公開ツールを作っています。',
    'about.whyTitle': '作った理由',
    'about.whyP1':
      'オンラインの計算機の多くは、アフィリエイト広告に埋もれていたり、入力した情報が静かに営業リストに渡されたりします。私たちはそれと違うものを作りたかった。',
    'about.whyP2':
      '登録なし、アップロードなし、「事前審査を申し込む」CTAなし。あるのは数式と、その数式が示す境界だけ。',
    'about.principlesEyebrow': 'II — 原則',
    'about.principlesTitle': '私たちが守る4つのルール',
    'about.principle1Title': 'プライバシー設計',
    'about.principle1Body':
      'すべての計算はブラウザ内で実行。入力した数字はあなたのデバイスから出ません。',
    'about.principle2Title': '前提を明示',
    'about.principle2Body':
      '金融計算式には隠れた前提（複利・手数料・税）があります。結果ごとに明示します。',
    'about.principle3Title': '桁揃え・タイポ',
    'about.principle3Body':
      '数字は桁が揃い、通貨表記はロケール準拠。金融データにふさわしいエディトリアル・タイポグラフィ。',
    'about.principle4Title': '営業しない',
    'about.principle4Body':
      'プレミアムプランも、メール収集も、見積フォームもなし。製品が製品の全部です。',
    'about.toolsTitle': '計算できること',
    'about.toolsIntro': '現在のセットはパーソナルファイナンスに焦点を当てています:',
    'about.toolMortgage': '固定金利住宅ローンの月額返済を、元金・利息内訳付きで算出。',
    'about.toolLoan': '個人ローン・自動車ローン・各種固定金利分割払いの月額を算出。',
    'about.toolCompound': '初期元本＋月次積立を複利で運用したときの将来価値・総積立額・利息を算出。',
    'about.techTitle': '裏側の仕組み',
    'about.techP1':
      'Calc Tools はクライアント案件と同じスタックで作られていますが、計算機エンジンに削ぎ落としています:',
    'about.tech1': 'React 19 + 自前ルーター（フレームワーク依存なし）',
    'about.tech2': 'すべての計算式は純粋な JavaScript でローカル実行',
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
      'これは金融アドバイスではありません。住宅ローンブローカー、税理士、銀行の実際の見積もりに代わるものでもありません。Calc Tools が提供するのは数学だけ。判断はあなたのものです。',

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
    'contact.cat1Body': 'Calc Tools やスタジオ、計算結果について話したいこと。',
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

    // Mortgage
    'mortgage.title': '住宅ローン月額返済計算',
    'mortgage.seoDesc':
      '固定金利住宅ローンの月額返済額を計算します。借入額・期間・金利を入力すると、元金・利息内訳・総利息・総支払額が表示されます。',
    'mortgage.fieldPrincipal': '借入額',
    'mortgage.fieldRate': '年利 (%)',
    'mortgage.fieldTerm': '期間 (年)',
    'mortgage.fieldCurrency': '通貨',
    'mortgage.resultLabel': '月額返済額',
    'mortgage.totalInterest': '総利息',
    'mortgage.totalCost': '総支払額',
    'mortgage.payoffDate': '完済まで（月数）',
    'mortgage.assumptions':
      '固定金利・月複利。固定資産税、火災保険、HOA、PMI は含みません。',

    // Loan
    'loan.title': 'ローン計算機（個人・自動車）',
    'loan.seoDesc':
      '個人ローン・自動車ローン・各種固定金利分割払いの月額返済額を計算します。期間・金利を変えて比較できます。',
    'loan.fieldPrincipal': '借入額',
    'loan.fieldRate': '年利 (%)',
    'loan.fieldTerm': '期間 (年)',
    'loan.fieldCurrency': '通貨',
    'loan.resultLabel': '月額返済額',
    'loan.totalInterest': '総利息',
    'loan.totalCost': '総支払額',
    'loan.payoffDate': '完済まで（月数）',
    'loan.assumptions':
      '固定金利・月複利・元利均等返済。手数料・繰上返済違約金は含みません。',

    // Compound
    'compound.title': '複利計算機',
    'compound.seoDesc':
      '複利運用したときの貯蓄の成長を計算します。初期元本＋月次積立を組み合わせて、将来価値・総積立額・利息を算出。',
    'compound.fieldPrincipal': '初期預金額',
    'compound.fieldContribution': '月次積立額',
    'compound.fieldRate': '年利回り (%)',
    'compound.fieldYears': '期間 (年)',
    'compound.fieldCurrency': '通貨',
    'compound.resultLabel': '将来価値',
    'compound.totalContrib': '総積立額',
    'compound.totalInterest': '運用益',
    'compound.years': '期間（年）',
    'compound.assumptions':
      '月次複利、月末積立。インフレ・税・手数料は含みません — 実績は変動します。',
  },

  // ── Vietnamese ──
  vi: {
    'app.title': 'Calc Tools',
    'app.subtitle': 'CHẠY TRÊN TRÌNH DUYỆT · KHÔNG ĐĂNG KÝ · KHÔNG TẢI LÊN',
    'tabs.mortgage': 'Vay mua nhà',
    'tabs.loan': 'Khoản vay',
    'tabs.compound': 'Lãi kép',
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
    'home.titleSerif': 'Tính toán,',
    'home.titleEm': 'ngay trên trình duyệt.',
    'home.lede':
      'Bộ máy tính nhỏ cho tài chính, tiết kiệm và toán hằng ngày. Không có gì rời khỏi thiết bị của bạn.',
    'home.learnCta': 'Về studio',
    'mortgage.title': 'Tính khoản trả vay mua nhà',
    'mortgage.fieldPrincipal': 'Số tiền vay',
    'mortgage.fieldRate': 'Lãi suất (năm, %)',
    'mortgage.fieldTerm': 'Thời hạn (năm)',
    'mortgage.fieldCurrency': 'Tiền tệ',
    'mortgage.resultLabel': 'Khoản trả hàng tháng',
    'mortgage.totalInterest': 'Tổng lãi',
    'mortgage.totalCost': 'Tổng thanh toán',
    'mortgage.payoffDate': 'Đáo hạn (tháng)',
    'loan.title': 'Tính khoản trả khoản vay',
    'loan.fieldPrincipal': 'Số tiền vay',
    'loan.fieldRate': 'Lãi suất (năm, %)',
    'loan.fieldTerm': 'Thời hạn (năm)',
    'loan.fieldCurrency': 'Tiền tệ',
    'loan.resultLabel': 'Khoản trả hàng tháng',
    'loan.totalInterest': 'Tổng lãi',
    'loan.totalCost': 'Tổng thanh toán',
    'loan.payoffDate': 'Đáo hạn (tháng)',
    'compound.title': 'Tính lãi kép',
    'compound.fieldPrincipal': 'Tiền gửi ban đầu',
    'compound.fieldContribution': 'Đóng góp hàng tháng',
    'compound.fieldRate': 'Lợi nhuận năm (%)',
    'compound.fieldYears': 'Số năm',
    'compound.fieldCurrency': 'Tiền tệ',
    'compound.resultLabel': 'Giá trị tương lai',
    'compound.totalContrib': 'Tổng đóng góp',
    'compound.totalInterest': 'Lãi kiếm được',
    'compound.years': 'Năm',
  },

  // ── Indonesian ──
  id: {
    'app.title': 'Calc Tools',
    'app.subtitle': 'BERJALAN DI BROWSER · TANPA DAFTAR · TANPA UNGGAH',
    'tabs.mortgage': 'KPR',
    'tabs.loan': 'Pinjaman',
    'tabs.compound': 'Bunga Majemuk',
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
    'home.titleSerif': 'Angka,',
    'home.titleEm': 'dihitung lokal.',
    'home.lede':
      'Sekumpulan kecil kalkulator untuk keuangan, tabungan, dan matematika sehari-hari. Tanpa upload.',
    'home.learnCta': 'Tentang studio',
    'mortgage.title': 'Kalkulator Cicilan KPR',
    'mortgage.fieldPrincipal': 'Jumlah pinjaman',
    'mortgage.fieldRate': 'Suku bunga (tahunan, %)',
    'mortgage.fieldTerm': 'Jangka waktu (tahun)',
    'mortgage.fieldCurrency': 'Mata uang',
    'mortgage.resultLabel': 'Cicilan bulanan',
    'mortgage.totalInterest': 'Total bunga',
    'mortgage.totalCost': 'Total pembayaran',
    'mortgage.payoffDate': 'Pelunasan (bulan)',
    'loan.title': 'Kalkulator Pinjaman',
    'loan.fieldPrincipal': 'Jumlah pinjaman',
    'loan.fieldRate': 'Suku bunga (tahunan, %)',
    'loan.fieldTerm': 'Jangka waktu (tahun)',
    'loan.fieldCurrency': 'Mata uang',
    'loan.resultLabel': 'Cicilan bulanan',
    'loan.totalInterest': 'Total bunga',
    'loan.totalCost': 'Total pembayaran',
    'loan.payoffDate': 'Pelunasan (bulan)',
    'compound.title': 'Kalkulator Bunga Majemuk',
    'compound.fieldPrincipal': 'Setoran awal',
    'compound.fieldContribution': 'Kontribusi bulanan',
    'compound.fieldRate': 'Imbal hasil tahunan (%)',
    'compound.fieldYears': 'Tahun',
    'compound.fieldCurrency': 'Mata uang',
    'compound.resultLabel': 'Nilai masa depan',
    'compound.totalContrib': 'Total kontribusi',
    'compound.totalInterest': 'Bunga didapat',
    'compound.years': 'Tahun',
  },

  // ── Chinese (Simplified) ──
  zh: {
    'app.title': 'Calc Tools',
    'app.subtitle': '浏览器原生 · 无需注册 · 无需上传',
    'tabs.mortgage': '房贷',
    'tabs.loan': '贷款',
    'tabs.compound': '复利',
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
    'home.titleSerif': '本地计算，',
    'home.titleEm': '尽在浏览器。',
    'home.lede':
      '一组浏览器内运行的小型计算器：金融、储蓄、日常数学。所有数据保留在您的设备上。',
    'home.learnCta': '关于工作室',
    'mortgage.title': '房贷月供计算',
    'mortgage.fieldPrincipal': '贷款金额',
    'mortgage.fieldRate': '年利率 (%)',
    'mortgage.fieldTerm': '期限 (年)',
    'mortgage.fieldCurrency': '货币',
    'mortgage.resultLabel': '月供',
    'mortgage.totalInterest': '总利息',
    'mortgage.totalCost': '总还款额',
    'mortgage.payoffDate': '还清 (月)',
    'loan.title': '贷款计算器',
    'loan.fieldPrincipal': '贷款金额',
    'loan.fieldRate': '年利率 (%)',
    'loan.fieldTerm': '期限 (年)',
    'loan.fieldCurrency': '货币',
    'loan.resultLabel': '月供',
    'loan.totalInterest': '总利息',
    'loan.totalCost': '总还款额',
    'loan.payoffDate': '还清 (月)',
    'compound.title': '复利计算器',
    'compound.fieldPrincipal': '初始存款',
    'compound.fieldContribution': '每月投入',
    'compound.fieldRate': '年化收益率 (%)',
    'compound.fieldYears': '年',
    'compound.fieldCurrency': '货币',
    'compound.resultLabel': '未来价值',
    'compound.totalContrib': '总投入',
    'compound.totalInterest': '所得利息',
    'compound.years': '年',
  },
};

export default translations;
