// Per-tool deep content for SEO and AdSense.
// Each text entry is an object keyed by language code.
// pick(obj, lang) in ToolSeoExtras handles lookup with English fallback.

export const TOOL_SEO_DATA = {
  payment: {
    useCases: [
      {
        title: {
          en: 'Comparing two listings during a house hunt',
          ja: '物件比較の即席シミュレーション',
          vi: 'So sánh hai căn hộ khi tìm nhà',
          id: 'Membandingkan dua listing saat mencari rumah',
          zh: '看房时比较两套房产',
        },
        body: {
          en: 'Open the calculator side-by-side with two listings. Plug in the asking prices, your assumed down payment, and a current rate to see which monthly payment fits your budget — before you ever talk to a lender.',
          ja: '2件の物件を並べて、希望価格・頭金・想定金利を入れるだけで、それぞれの月額返済が即座に出ます。銀行に相談する前に、どちらが家計に収まるか自分で確認できます。',
          vi: 'Mở máy tính song song với hai bản tin bất động sản. Nhập giá chào bán, tiền đặt cọc dự kiến và lãi suất hiện tại để xem khoản trả hàng tháng nào phù hợp với ngân sách — trước khi gặp ngân hàng.',
          id: 'Buka kalkulator bersamaan dengan dua listing. Masukkan harga, uang muka asumsi, dan suku bunga saat ini untuk melihat cicilan mana yang cocok dengan anggaran — sebelum bicara dengan bank.',
          zh: '看房时同时打开两套房源。输入挂牌价、预估首付和当前利率，立即看到哪个月供更适合你的预算——根本不必先咨询贷款机构。',
        },
      },
      {
        title: {
          en: 'Stress-testing a rate change',
          ja: '金利変動のストレステスト',
          vi: 'Kiểm tra rủi ro khi lãi suất thay đổi',
          id: 'Uji ketahanan terhadap perubahan suku bunga',
          zh: '压力测试利率变化',
        },
        body: {
          en: 'A rate change of even half a percent can move a payment by hundreds. Run the calculator at today\'s rate and again at "today + 1%" to see whether your buffer is real.',
          ja: '金利が0.5%動くだけで月額返済は数万円変わります。今日の金利と「今日+1%」の2パターンで計算し、家計の余力が実際に十分かを確認できます。',
          vi: 'Lãi suất thay đổi nửa phần trăm có thể làm khoản trả tăng hàng triệu đồng. Chạy ở lãi suất hôm nay rồi "hôm nay + 1%" để xem khoảng đệm của bạn có đủ không.',
          id: 'Perubahan suku bunga 0,5% saja bisa menggeser cicilan ratusan ribu. Hitung pada suku bunga hari ini, lalu pada "hari ini + 1%" untuk melihat apakah margin keamanan Anda nyata.',
          zh: '利率哪怕变动 0.5% 也会让月供差出几百元。用今天的利率和"今天+1%"分别计算，看你的预算缓冲是否真的够用。',
        },
      },
      {
        title: {
          en: 'Validating a lender quote',
          ja: '金融機関の試算を検算',
          vi: 'Xác minh báo giá từ ngân hàng',
          id: 'Memverifikasi penawaran dari bank',
          zh: '核对银行报价',
        },
        body: {
          en: 'A pre-approval letter or rate sheet should match the standard PMT formula to the cent. Use this calculator to confirm the lender\'s quote agrees with the math — discrepancies usually mean fees rolled into the loan.',
          ja: '事前審査の月額提示と PMT 公式の計算結果は1円単位で一致するはず。差額が出た場合は、ローン手数料が組み込まれている可能性があります。',
          vi: 'Một bảng báo lãi suất chuẩn phải khớp với công thức PMT đến từng đồng. Dùng máy tính này để kiểm tra báo giá ngân hàng — chênh lệch thường có nghĩa là phí được gộp vào khoản vay.',
          id: 'Surat pra-persetujuan atau lembar penawaran harus cocok dengan rumus PMT standar persis. Gunakan kalkulator ini untuk memastikan kuota pemberi pinjaman cocok — selisih biasanya berarti biaya dimasukkan ke pinjaman.',
          zh: '银行的预批月供应当与标准 PMT 公式分毫不差。用此计算器核对，差额通常意味着费用被并入贷款。',
        },
      },
    ],
    faqs: [
      {
        q: {
          en: 'What does this calculator include in the monthly payment?',
          ja: 'この計算機は月額に何を含めていますか？',
          vi: 'Khoản trả hàng tháng bao gồm những gì?',
          id: 'Apa yang termasuk dalam cicilan bulanan?',
          zh: '月供计算包括哪些项目？',
        },
        a: {
          en: 'Only principal and interest (P&I) on a fixed-rate loan. Property tax, homeowner\'s insurance, HOA dues, and mortgage insurance (PMI) are not included. The PITI calculator (coming soon) will add those.',
          ja: '元金と利息のみです（P&I）。固定資産税・火災保険・HOA・住宅ローン保険は含みません。PITI 計算機（準備中）でそれらを含めて計算できます。',
          vi: 'Chỉ gốc và lãi (P&I) trên khoản vay lãi suất cố định. Thuế bất động sản, bảo hiểm nhà, phí HOA và bảo hiểm thế chấp không được tính.',
          id: 'Hanya pokok dan bunga (P&I) atas pinjaman dengan suku bunga tetap. Pajak properti, asuransi rumah, iuran HOA, dan asuransi hipotek tidak termasuk.',
          zh: '仅包含本金和利息（P&I），针对固定利率贷款。房产税、家庭保险、物业费和按揭保险不包括在内。',
        },
      },
      {
        q: {
          en: 'Why does the total interest seem so high?',
          ja: 'なぜ総利息が思ったより高く出ますか？',
          vi: 'Tại sao tổng lãi có vẻ cao như vậy?',
          id: 'Mengapa total bunga terlihat sangat tinggi?',
          zh: '为什么总利息看起来这么高？',
        },
        a: {
          en: 'On a 30-year loan at typical rates, you can pay nearly as much in interest as the original loan amount. This is because early payments are mostly interest — the amortization shifts to principal over the years.',
          ja: '30年ローンの場合、典型的な金利では総利息が借入額とほぼ同額になることがあります。初期の返済は利息中心で、年が経つにつれて元金に振り向けられる構造のためです。',
          vi: 'Với khoản vay 30 năm ở lãi suất phổ biến, bạn có thể trả lãi gần bằng khoản vay gốc. Vì các kỳ đầu chủ yếu là lãi — cấu trúc trả gốc tăng dần theo năm.',
          id: 'Pada pinjaman 30 tahun dengan suku bunga umum, Anda bisa membayar bunga hampir sebanyak pokoknya. Pembayaran awal sebagian besar adalah bunga — struktur amortisasi bergeser ke pokok seiring waktu.',
          zh: '在 30 年期典型利率下，你支付的总利息可能接近本金。这是因为前几年的还款大部分是利息，随后才逐步转向本金。',
        },
      },
      {
        q: {
          en: 'Does this work for any country or only US mortgages?',
          ja: '米国以外のローンでも使えますか？',
          vi: 'Công cụ này dùng cho mọi quốc gia hay chỉ Mỹ?',
          id: 'Apakah ini berlaku untuk negara lain selain AS?',
          zh: '这个计算器适用于美国以外的房贷吗？',
        },
        a: {
          en: 'The standard PMT formula applies to any fixed-rate, fully-amortizing mortgage with monthly compounding — common in the US, UK, Canada, Japan, Australia, and most of Europe. Variable-rate (ARM) and bullet/interest-only loans need different math.',
          ja: 'PMT 公式は、月複利の固定金利・完全償還ローンに普遍的に適用されます（米・英・加・日・豪・欧州の大半）。変動金利型や元本一括返済型は別の計算式が必要です。',
          vi: 'Công thức PMT chuẩn áp dụng cho mọi khoản vay lãi suất cố định, trả gốc đều, lãi cộng dồn theo tháng — phổ biến ở Mỹ, Anh, Canada, Nhật, Úc và phần lớn châu Âu.',
          id: 'Rumus PMT standar berlaku untuk semua pinjaman lunas-amortisasi dengan suku bunga tetap dan bunga majemuk bulanan — umum di AS, Inggris, Kanada, Jepang, Australia, dan sebagian besar Eropa.',
          zh: '标准 PMT 公式适用于按月复利、完全摊还的固定利率贷款——美国、英国、加拿大、日本、澳大利亚和欧洲大部分国家通用。',
        },
      },
    ],
  },
};
