// Per-tool deep content for SEO and AdSense.
// Each text entry is an object keyed by language code.
// pick(obj, lang) in ToolSeoExtras handles lookup with English fallback.

export const TOOL_SEO_DATA = {
  mortgage: {
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

  loan: {
    useCases: [
      {
        title: {
          en: 'Comparing financing offers from a dealer',
          ja: 'ディーラーの分割払いオファーを比較',
          vi: 'So sánh các đề xuất tài trợ từ đại lý',
          id: 'Membandingkan tawaran pembiayaan dari dealer',
          zh: '比较经销商的分期方案',
        },
        body: {
          en: 'A car or appliance dealer often quotes "low monthly payments" by stretching the term. Plug in the principal, rate, and each proposed term to see the true total cost of each option.',
          ja: '車や家電のディーラーは「月々の支払いが少ない」を期間を延ばすことで作ります。元金・金利・各提示期間を入れて、それぞれの総支払額を比較してください。',
          vi: 'Đại lý ô tô hoặc đồ gia dụng thường quảng cáo "trả góp thấp" bằng cách kéo dài thời hạn. Nhập số tiền vay, lãi suất và từng kỳ hạn đề xuất để xem chi phí thực sự.',
          id: 'Dealer mobil atau elektronik sering menawarkan "cicilan rendah" dengan memperpanjang tenor. Masukkan pokok, bunga, dan tenor untuk melihat total biaya sebenarnya.',
          zh: '车行或家电分期常用"月供低"作宣传，但其实是延长期限。输入本金、利率和不同期限来对比真实总成本。',
        },
      },
      {
        title: {
          en: 'Stress-testing a personal loan',
          ja: '個人ローンのストレステスト',
          vi: 'Kiểm tra rủi ro khoản vay cá nhân',
          id: 'Uji ketahanan pinjaman pribadi',
          zh: '个人贷款压力测试',
        },
        body: {
          en: 'A personal loan at 12% looks bearable monthly but the total interest can be eye-opening. Run the numbers before signing to see what the real cost of borrowing is.',
          ja: '12%の個人ローンは月々は耐えられても、総利息は目を見開く額になりがちです。サインする前に実際の借入コストを確認してください。',
          vi: 'Khoản vay cá nhân lãi suất 12% có vẻ chịu được hằng tháng, nhưng tổng lãi có thể gây sốc. Tính trước khi ký để biết chi phí thực.',
          id: 'Pinjaman pribadi 12% terasa bisa ditanggung bulanan, tapi total bunga bisa mengejutkan. Hitung sebelum tandatangan untuk tahu biaya nyata.',
          zh: '12% 利率的个人贷款月供看起来还行，但总利息往往令人咋舌。签约前先算清真实成本。',
        },
      },
      {
        title: {
          en: 'Comparing 3-year vs 5-year auto loans',
          ja: '自動車ローン3年と5年の比較',
          vi: 'So sánh vay xe 3 năm với 5 năm',
          id: 'Membandingkan kredit mobil 3 vs 5 tahun',
          zh: '比较汽车贷款 3 年与 5 年',
        },
        body: {
          en: 'Stretching from 36 to 60 months drops the monthly payment by ~30%, but adds significantly to lifetime interest. Use the calculator to quantify the tradeoff for your exact loan.',
          ja: '36ヶ月から60ヶ月に伸ばすと月額は約30%下がりますが、総利息は大きく増えます。あなたのローン条件で具体的にトレードオフを確認できます。',
          vi: 'Kéo dài từ 36 lên 60 tháng làm khoản trả hàng tháng giảm ~30%, nhưng tổng lãi tăng đáng kể. Dùng máy tính để đánh giá đánh đổi.',
          id: 'Memperpanjang dari 36 ke 60 bulan menurunkan cicilan ~30% tapi menambah total bunga secara signifikan. Gunakan kalkulator untuk mengukur trade-off.',
          zh: '从 36 个月延到 60 个月，月供下降约 30%，但总利息显著增加。用计算器量化你的具体方案。',
        },
      },
    ],
    faqs: [
      {
        q: {
          en: 'What kinds of loans does this work for?',
          ja: 'どんなローンに使えますか？',
          vi: 'Áp dụng cho những loại khoản vay nào?',
          id: 'Berlaku untuk pinjaman jenis apa?',
          zh: '适用于哪些类型的贷款？',
        },
        a: {
          en: 'Any fully-amortizing fixed-rate installment loan: personal loans, auto loans, student loans (federal fixed), small business term loans. Variable-rate loans, lines of credit, and bullet loans need different math.',
          ja: '完全償還型・固定金利の分割払いローン全般に使えます: 個人ローン、自動車ローン、固定金利学生ローン、事業ローン等。変動金利・与信枠・元本一括型は別の計算が必要です。',
          vi: 'Mọi khoản vay trả gốc đều với lãi suất cố định: vay cá nhân, vay xe, vay học, vay kinh doanh. Vay lãi suất thả nổi cần công thức khác.',
          id: 'Setiap pinjaman cicilan dengan suku bunga tetap: pinjaman pribadi, kredit mobil, pinjaman pelajar, pinjaman usaha. Suku bunga mengambang butuh rumus lain.',
          zh: '适用于完全摊还的固定利率分期贷款：个人贷款、汽车贷款、固定利率学生贷款、企业贷款等。浮动利率或循环授信需要其他公式。',
        },
      },
      {
        q: {
          en: 'Does this account for fees and prepayment penalties?',
          ja: '手数料や繰上返済違約金は含まれますか？',
          vi: 'Có tính phí và phí phạt trả sớm không?',
          id: 'Apakah biaya dan penalti pelunasan dini diperhitungkan?',
          zh: '是否包含手续费和提前还款罚金？',
        },
        a: {
          en: 'No. The calculator returns pure principal-and-interest payments. To compare APR (which includes fees), use the rate the lender quotes as APR rather than the nominal interest rate.',
          ja: 'いいえ。元金＋利息のみを返します。手数料込みの APR で比較したい場合は、貸し手提示の APR を金利欄に入力してください。',
          vi: 'Không. Máy tính chỉ trả lại gốc và lãi thuần. Để so sánh APR (bao gồm phí), nhập APR mà ngân hàng báo thay vì lãi suất danh nghĩa.',
          id: 'Tidak. Kalkulator menghasilkan pembayaran pokok dan bunga murni. Untuk membandingkan APR (yang mencakup biaya), masukkan APR yang dikutip pemberi pinjaman.',
          zh: '不包含。计算器只返回纯本息。如需对比含费 APR，请在利率字段输入贷方报价的 APR。',
        },
      },
      {
        q: {
          en: 'Why are my dealer\'s numbers different?',
          ja: 'なぜディーラーの提示金額と違うのですか？',
          vi: 'Tại sao con số của đại lý khác?',
          id: 'Mengapa angka dari dealer berbeda?',
          zh: '为什么经销商给的数字不一样？',
        },
        a: {
          en: 'Dealers often roll fees, taxes, GAP insurance, or extended warranties into the financed amount. Run the calculator with the bare loan amount, then compare with the dealer\'s monthly to see what was added.',
          ja: 'ディーラーは手数料・税・GAP 保険・延長保証等をローンに組み込みます。素のローン額で計算し、ディーラー月額と比較すれば何が追加されたか分かります。',
          vi: 'Đại lý thường gộp phí, thuế, bảo hiểm GAP và bảo hành mở rộng vào khoản vay. Chạy với số tiền vay gốc rồi so với báo giá đại lý để biết phần thêm vào.',
          id: 'Dealer sering menggabungkan biaya, pajak, asuransi GAP, dan garansi diperpanjang ke pinjaman. Hitung dengan jumlah pinjaman murni, lalu bandingkan dengan kuota dealer.',
          zh: '经销商常把费用、税、GAP 保险或延保打包进贷款。用净贷款额计算后再与经销商月供对比，能看出额外加了什么。',
        },
      },
    ],
  },

  compound: {
    useCases: [
      {
        title: {
          en: 'Visualizing a 30-year savings habit',
          ja: '30年の貯蓄習慣を可視化',
          vi: 'Hình dung thói quen tiết kiệm 30 năm',
          id: 'Memvisualkan kebiasaan menabung 30 tahun',
          zh: '可视化 30 年的储蓄习惯',
        },
        body: {
          en: 'Saving $500 a month at 7% return looks modest, but over 30 years it compounds to over $600,000. Adjust the contribution and rate to see how small habits become large outcomes.',
          ja: '月5万円を7%で運用するのは地味に見えますが、30年で6,000万円超に複利成長します。積立額・利回りを調整して小さな習慣の大きな成果を確認できます。',
          vi: 'Tiết kiệm 500$/tháng ở mức 7% có vẻ khiêm tốn, nhưng sau 30 năm thành hơn 600.000$. Điều chỉnh để thấy thói quen nhỏ tạo kết quả lớn.',
          id: 'Menabung $500/bulan dengan return 7% terlihat sederhana, tapi dalam 30 tahun jadi >$600.000. Sesuaikan untuk melihat kebiasaan kecil menjadi hasil besar.',
          zh: '每月存 $500、年化 7% 看似不多，但 30 年后能复利到 60 万美元以上。调整投入和利率，看小习惯如何积累成大结果。',
        },
      },
      {
        title: {
          en: 'Setting a retirement target',
          ja: '退職目標額の設定',
          vi: 'Đặt mục tiêu nghỉ hưu',
          id: 'Menetapkan target pensiun',
          zh: '设定退休目标',
        },
        body: {
          en: 'Work backward from a future value goal: how much do you need to set aside monthly to reach your target by retirement? Adjust years and rate to match a realistic plan.',
          ja: '将来価値目標から逆算: 退職時までに目標額に到達するには月いくら積み立てればよいか。期間・利回りを変えて現実的なプランを設計できます。',
          vi: 'Tính ngược từ mục tiêu giá trị tương lai: cần để dành mỗi tháng bao nhiêu để đạt mục tiêu khi nghỉ hưu? Điều chỉnh để khớp kế hoạch.',
          id: 'Hitung mundur dari target nilai masa depan: berapa setoran bulanan untuk mencapai tujuan pensiun? Sesuaikan untuk rencana realistis.',
          zh: '从未来价值目标倒推：每月需要存多少才能在退休时达到目标？调整年限和收益率匹配现实方案。',
        },
      },
      {
        title: {
          en: 'Comparing investing vs. paying down debt',
          ja: '投資 vs 借金返済の比較',
          vi: 'So sánh đầu tư với trả nợ',
          id: 'Membandingkan investasi vs lunasi utang',
          zh: '比较投资与还债',
        },
        body: {
          en: 'If your investment return exceeds your loan rate, investing wins on paper. Use the compound calculator to project the investment growth, then compare with interest saved by paying down debt.',
          ja: '投資利回りがローン金利を上回るなら、数字上は投資が勝ちます。複利計算で投資の成長を予測し、繰上返済での利息削減と比較してください。',
          vi: 'Nếu lợi suất đầu tư vượt lãi suất khoản vay, đầu tư thắng trên giấy. Dự phóng tăng trưởng đầu tư rồi so với lãi tiết kiệm khi trả nợ.',
          id: 'Jika return investasi > suku bunga pinjaman, investasi unggul di atas kertas. Proyeksikan pertumbuhan investasi, lalu bandingkan dengan bunga yang dihemat dari pelunasan utang.',
          zh: '若投资收益率高于贷款利率，纸面上投资胜出。用复利计算器预测投资增长，再与提前还款节省的利息对比。',
        },
      },
    ],
    faqs: [
      {
        q: {
          en: 'How realistic is a 7% annual return?',
          ja: '年7%リターンは現実的ですか？',
          vi: 'Lợi nhuận 7%/năm có thực tế không?',
          id: 'Apakah return 7% per tahun realistis?',
          zh: '年化 7% 的回报现实吗？',
        },
        a: {
          en: 'Roughly the long-term inflation-adjusted average for a diversified US stock index over 100+ years. Bond-heavy portfolios run 2–4%, all-stock can be higher but with much more volatility. Adjust to match your real allocation.',
          ja: '米国分散株指数の100年超の長期インフレ調整後平均が概ねその水準です。債券中心は 2-4%、全株式は高めですがボラも大きい。実際のポートフォリオに合わせて調整してください。',
          vi: 'Khoảng mức trung bình điều chỉnh lạm phát của chỉ số chứng khoán Mỹ đa dạng trong 100+ năm. Danh mục nhiều trái phiếu 2-4%, toàn cổ phiếu có thể cao hơn nhưng biến động lớn.',
          id: 'Kira-kira rata-rata jangka panjang setelah inflasi untuk indeks saham AS terdiversifikasi >100 tahun. Portfolio obligasi 2-4%, semua saham bisa lebih tinggi tapi volatil.',
          zh: '约等于美国分散股指 100 多年扣除通胀后的长期平均。债券为主组合在 2–4%，全股票更高但波动也大。请按你的实际配置调整。',
        },
      },
      {
        q: {
          en: 'Does the calculator account for inflation or taxes?',
          ja: 'インフレや税金は含まれていますか？',
          vi: 'Máy tính có tính lạm phát hoặc thuế không?',
          id: 'Apakah kalkulator memperhitungkan inflasi atau pajak?',
          zh: '计算器是否考虑通胀或税收？',
        },
        a: {
          en: 'No. The result is nominal future value before inflation, taxes, and fees. To approximate real (inflation-adjusted) growth, use a return rate that already subtracts your inflation estimate (e.g. 7% nominal − 3% inflation = 4% real).',
          ja: 'いいえ。結果はインフレ・税・手数料控除前の名目将来価値です。実質成長を近似するには、インフレ想定を引いた利回りを使ってください（例: 名目7% - インフレ3% = 実質4%）。',
          vi: 'Không. Kết quả là giá trị tương lai danh nghĩa, trước lạm phát, thuế và phí. Để xấp xỉ tăng trưởng thực, dùng lợi suất đã trừ lạm phát ước tính.',
          id: 'Tidak. Hasilnya adalah nilai masa depan nominal sebelum inflasi, pajak, dan biaya. Untuk perkiraan pertumbuhan riil, gunakan tingkat return setelah dikurangi inflasi.',
          zh: '不包含。结果为通胀前、税费前的名义未来价值。要近似实际增长，请使用扣除通胀预期的收益率（如名义 7% − 通胀 3% = 实质 4%）。',
        },
      },
      {
        q: {
          en: 'How often is interest compounded here?',
          ja: 'ここでの複利の頻度は？',
          vi: 'Lãi được cộng dồn bao thường?',
          id: 'Seberapa sering bunga dimajemukkan?',
          zh: '这里的复利频率是？',
        },
        a: {
          en: 'Monthly. The calculator assumes contributions made at the end of each month and interest compounded monthly. For a savings account that compounds daily, results will be slightly higher; for an annual-compounding instrument, slightly lower.',
          ja: '月次です。月末積立・月複利を前提としています。日次複利の口座だと結果はやや高く、年次複利だとやや低くなります。',
          vi: 'Hàng tháng. Mặc định đóng góp cuối tháng và lãi cộng dồn hàng tháng. Tài khoản cộng dồn hằng ngày sẽ cao hơn một chút.',
          id: 'Bulanan. Asumsi setoran di akhir bulan dan bunga majemuk bulanan. Tabungan dengan bunga harian akan sedikit lebih tinggi.',
          zh: '按月计息。假设每月末投入、按月复利。日复利账户结果略高，年复利账户结果略低。',
        },
      },
    ],
  },

  refinance: {
    useCases: [
      {
        title: {
          en: 'Comparing offers after rates drop',
          ja: '金利低下後のオファー比較',
          vi: 'So sánh ưu đãi sau khi lãi suất giảm',
          id: 'Membandingkan penawaran setelah suku bunga turun',
          zh: '利率下降后比较再融资方案',
        },
        body: {
          en: 'When market rates fall a percentage point or more, refinancing can save thousands. Plug in your current balance, current rate, and the offered new rate to see if break-even sits comfortably before you plan to move or refinance again.',
          ja: '市場金利が1%以上下がった時、借換で数十万〜数百万円節約できることがあります。現行残高・現行金利・新オファー金利を入れて、引っ越しや再借換予定より早く損益分岐するかを確認してください。',
          vi: 'Khi lãi suất thị trường giảm 1% trở lên, tái cấp vốn có thể tiết kiệm hàng nghìn. Nhập dư nợ, lãi suất hiện tại và lãi suất mới để xem điểm hòa vốn có sớm hơn kế hoạch chuyển nhà.',
          id: 'Ketika suku bunga pasar turun 1% atau lebih, refinancing bisa menghemat ribuan. Masukkan saldo, suku bunga saat ini, dan suku bunga baru untuk melihat titik impas.',
          zh: '当市场利率下降一个百分点以上时，再融资可省下数千元。输入余额、当前利率与新利率，看损益分歧点是否早于你计划搬家或再融资的时间。',
        },
      },
      {
        title: {
          en: 'Switching from 30-year to 15-year',
          ja: '30年から15年への借換',
          vi: 'Chuyển từ 30 năm sang 15 năm',
          id: 'Beralih dari 30 tahun ke 15 tahun',
          zh: '从 30 年换成 15 年',
        },
        body: {
          en: 'Shorter terms come with lower rates and dramatically less lifetime interest, but higher monthly payments. Run the calculator with your current loan against a 15-year refinance to see whether the new monthly fits your budget.',
          ja: '期間短縮型借換は金利も低く、生涯利息が劇的に減りますが、月額は上がります。現行ローンと15年借換を比較し、新月額が家計に収まるか確認してください。',
          vi: 'Thời hạn ngắn hơn đi kèm lãi suất thấp hơn và tổng lãi giảm đáng kể, nhưng khoản trả hàng tháng cao hơn. Tính toán để xem liệu khoản trả mới có phù hợp ngân sách.',
          id: 'Tenor lebih pendek datang dengan suku bunga lebih rendah dan total bunga jauh lebih sedikit, tapi cicilan bulanan lebih tinggi. Hitung untuk melihat apakah cicilan baru cocok dengan anggaran.',
          zh: '更短期限通常利率更低、总利息显著减少，但月供更高。把当前贷款与 15 年再融资对比，看新月供是否在预算内。',
        },
      },
      {
        title: {
          en: 'Cash-out refinance evaluation',
          ja: 'キャッシュアウト借換の評価',
          vi: 'Đánh giá tái cấp vốn rút tiền mặt',
          id: 'Mengevaluasi refinancing cash-out',
          zh: '评估套现再融资',
        },
        body: {
          en: 'Pulling equity for renovations or debt consolidation effectively rolls those costs into your mortgage at the new rate. Run the calculator on the higher new balance to see whether the spread between your old rate and new rate justifies the larger loan.',
          ja: 'リフォームや債務統合のために自宅エクイティを引き出す場合、それらが新金利でローンに組み込まれます。増額後の新残高で計算し、旧金利と新金利の差が拡大ローンを正当化できるか確認してください。',
          vi: 'Rút vốn cho cải tạo hoặc gộp nợ thực chất chuyển các chi phí đó vào khoản vay với lãi suất mới. Tính trên dư nợ mới cao hơn để xem chênh lệch lãi suất có biện minh cho khoản vay lớn hơn.',
          id: 'Mengambil ekuitas untuk renovasi atau konsolidasi utang menggulung biaya itu ke hipotek dengan suku bunga baru. Hitung pada saldo baru yang lebih tinggi untuk melihat apakah selisih suku bunga membenarkan pinjaman lebih besar.',
          zh: '为装修或债务整合套现，相当于把这些费用以新利率并入贷款。用增加后的新余额计算，看新旧利率差是否值得扩大贷款。',
        },
      },
    ],
    faqs: [
      {
        q: {
          en: 'When does refinancing actually pay off?',
          ja: '借換は実際いつ得するのですか？',
          vi: 'Khi nào tái cấp vốn thực sự có lời?',
          id: 'Kapan refinancing benar-benar menguntungkan?',
          zh: '什么时候再融资真的划算？',
        },
        a: {
          en: 'When the break-even month sits well before you plan to sell or refinance again. A common rule of thumb is "rate drop ≥ 0.75%" plus "remaining ownership ≥ break-even × 1.5", but the calculator gives you the exact numbers for your situation.',
          ja: '損益分岐月が、売却や再借換予定の時期より十分前に来る時です。「金利低下 ≥ 0.75%」「残居住期間 ≥ 損益分岐月 × 1.5」が経験則ですが、この計算機はあなたの状況の正確な数字を出します。',
          vi: 'Khi tháng hòa vốn nằm rõ trước khi bạn bán hoặc tái cấp vốn lại. Quy tắc kinh nghiệm: "lãi suất giảm ≥ 0,75%" và "thời gian còn lại ≥ hòa vốn × 1,5".',
          id: 'Ketika titik impas jatuh jauh sebelum Anda berencana menjual atau refinancing lagi. Aturan praktis: "penurunan suku bunga ≥ 0,75%" dan "kepemilikan tersisa ≥ titik impas × 1,5".',
          zh: '当损益分歧点远早于你打算卖房或再融资的时间。经验法则："利率下降 ≥ 0.75%" 且 "剩余持有时间 ≥ 损益分歧 × 1.5"。',
        },
      },
      {
        q: {
          en: 'Are closing costs always paid up-front?',
          ja: '諸費用は常に前払いですか？',
          vi: 'Phí đóng giao dịch có luôn trả trước không?',
          id: 'Apakah closing costs selalu dibayar di muka?',
          zh: '过户费用必须前期一次付清吗？',
        },
        a: {
          en: 'Often yes, but "no-cost" refinances roll fees into the principal at a slightly higher rate. The calculator assumes up-front payment; for rolled-in fees, add the fee amount to the new loan balance and use the higher offered rate.',
          ja: 'たいていは前払いですが、「諸費用ゼロ」借換は手数料を元金に組み込み、金利を少し上げます。この計算機は前払い前提なので、組み込み型は手数料を新残高に加え、提示された高い金利を使ってください。',
          vi: 'Thường có, nhưng tái cấp vốn "không phí" cuộn phí vào gốc với lãi suất hơi cao hơn. Máy tính giả định trả trước.',
          id: 'Sering, tapi refinancing "tanpa biaya" menggulung biaya ke pokok dengan suku bunga sedikit lebih tinggi. Kalkulator mengasumsikan pembayaran di muka.',
          zh: '通常是预付，但"零费用"再融资把费用并入本金并稍微提高利率。本计算器假设前期预付。',
        },
      },
      {
        q: {
          en: 'Does this account for tax-deductibility of mortgage interest?',
          ja: '住宅ローン利息の控除は考慮されますか？',
          vi: 'Có tính đến khả năng khấu trừ thuế của lãi vay không?',
          id: 'Apakah ini memperhitungkan pengurangan pajak bunga hipotek?',
          zh: '是否考虑房贷利息的税收抵扣？',
        },
        a: {
          en: 'No. Tax treatment varies by country (US itemized deduction, JP 住宅ローン控除, etc.) and by your individual situation. The lifetime savings figure is pre-tax — your after-tax savings will be smaller in jurisdictions where mortgage interest is deductible.',
          ja: 'いいえ。税制は国により異なり（米国の項目別控除、日本の住宅ローン控除等）、個人状況にも依存します。生涯削減は税引前なので、利息控除がある国では税引後削減はもっと小さくなります。',
          vi: 'Không. Xử lý thuế khác nhau theo quốc gia. Khoản tiết kiệm trọn đời là trước thuế — tiết kiệm sau thuế sẽ nhỏ hơn ở nơi lãi vay được khấu trừ.',
          id: 'Tidak. Perlakuan pajak bervariasi per negara. Penghematan seumur hidup adalah sebelum pajak — penghematan setelah pajak akan lebih kecil di yurisdiksi dengan pengurangan bunga hipotek.',
          zh: '不考虑。各国税制不同。终身节省是税前数字——在按揭利息可抵扣的地区，税后节省会更小。',
        },
      },
    ],
  },

  affordability: {
    useCases: [
      {
        title: {
          en: 'Setting a target before house hunting',
          ja: '物件探しの前に目標価格を決める',
          vi: 'Đặt mục tiêu trước khi đi xem nhà',
          id: 'Menetapkan target sebelum berburu rumah',
          zh: '看房前先定目标价位',
        },
        body: {
          en: 'Filtering listings is much faster when you know your ceiling. Enter your gross income, monthly debts, and expected down payment to get a defensible upper bound that lenders will broadly agree with.',
          ja: '上限が分かっていれば物件絞り込みが圧倒的に速くなります。年収・月次債務・想定頭金を入れて、銀行の同意も得やすい合理的な上限を出してください。',
          vi: 'Lọc tin rao bán nhanh hơn nhiều khi biết trần. Nhập thu nhập gộp, nợ hàng tháng và tiền đặt cọc dự kiến để có giới hạn trên được ngân hàng đồng ý rộng rãi.',
          id: 'Memfilter listing jauh lebih cepat ketika Anda tahu plafon. Masukkan pendapatan kotor, utang bulanan, dan uang muka yang diharapkan.',
          zh: '设定上限后筛选房源会快得多。输入税前收入、月负债和预期首付，得出银行普遍认可的合理上限。',
        },
      },
      {
        title: {
          en: 'Stress-testing for higher rates',
          ja: '金利上昇への耐性テスト',
          vi: 'Kiểm tra rủi ro với lãi suất cao hơn',
          id: 'Uji ketahanan terhadap suku bunga lebih tinggi',
          zh: '抗利率上升压力测试',
        },
        body: {
          en: 'A house you can "afford" at 6% may be uncomfortable at 7%. Run the calculator at today\'s rate and again 1% higher to make sure you have a real buffer if rates move before you close.',
          ja: '金利6%で「買える」家も7%だと家計が苦しくなり得ます。今日の金利と+1%の2パターンで計算し、契約前に金利が動いた場合の本当の余力を確認してください。',
          vi: 'Ngôi nhà bạn "có khả năng" mua ở 6% có thể không thoải mái ở 7%. Tính ở lãi suất hôm nay rồi cao hơn 1% để có khoảng đệm thật.',
          id: 'Rumah yang "mampu" Anda beli di 6% bisa jadi tidak nyaman di 7%. Hitung di suku bunga saat ini dan 1% lebih tinggi untuk memastikan Anda punya margin nyata.',
          zh: '在 6% 时"买得起"的房子，到 7% 可能就吃力了。用当前利率和高 1% 的利率分别算，确保有真正的缓冲。',
        },
      },
      {
        title: {
          en: 'Down payment vs price tradeoff',
          ja: '頭金と価格のトレードオフ',
          vi: 'Đánh đổi giữa đặt cọc và giá',
          id: 'Trade-off antara uang muka dan harga',
          zh: '首付与房价的权衡',
        },
        body: {
          en: 'Increasing your down payment by $20k might let you afford a $30k–$40k more expensive home (because both the loan and PMI shrink). Adjust the down payment slider to find the sweet spot.',
          ja: '頭金を200万円増やすと、PMI と借入額が両方下がり、300〜400万円高い物件が買えるようになることがあります。頭金を調整してスイートスポットを探してください。',
          vi: 'Tăng tiền đặt cọc 20k$ có thể giúp bạn mua được nhà đắt hơn 30-40k$ (vì cả khoản vay lẫn PMI giảm). Điều chỉnh để tìm điểm tối ưu.',
          id: 'Meningkatkan uang muka $20k mungkin memungkinkan Anda mampu rumah $30-40k lebih mahal (karena pinjaman dan PMI menyusut). Sesuaikan untuk menemukan titik manis.',
          zh: '增加 2 万元首付可能让你买得起贵 3-4 万元的房子（贷款和 PMI 都会减少）。调整首付找最佳平衡点。',
        },
      },
    ],
    faqs: [
      {
        q: {
          en: 'What are the 28/36 ratios?',
          ja: '28/36 ルールとは？',
          vi: 'Tỷ lệ 28/36 là gì?',
          id: 'Apa itu rasio 28/36?',
          zh: '28/36 是什么？',
        },
        a: {
          en: 'Front-end (28%): your monthly housing payment (PITI) shouldn\'t exceed 28% of gross monthly income. Back-end (36%): housing + all other monthly debt shouldn\'t exceed 36%. They\'re US conventional-loan guidelines and approximate well in many other markets.',
          ja: 'フロントエンド (28%): 月の住居費 (PITI) が月収（額面）の28%を超えないこと。バックエンド (36%): 住居費＋その他全ての月次債務が36%を超えないこと。米国の通常ローン基準ですが、多くの市場で近似的に有効です。',
          vi: 'Front-end (28%): khoản trả nhà hàng tháng (PITI) không vượt quá 28% thu nhập gộp. Back-end (36%): nhà + tất cả nợ hàng tháng không vượt 36%.',
          id: 'Front-end (28%): cicilan rumah bulanan (PITI) tidak boleh melebihi 28% pendapatan kotor. Back-end (36%): rumah + semua utang bulanan tidak melebihi 36%.',
          zh: '前端 (28%)：月供（PITI）不超过税前月收入的 28%。后端 (36%)：月供+所有月度债务不超过 36%。这是美国常规贷款标准，许多市场可类比使用。',
        },
      },
      {
        q: {
          en: 'Why "front-end" vs "back-end"?',
          ja: 'なぜ「フロント」と「バック」の2つなのですか？',
          vi: 'Tại sao có hai tỷ lệ riêng?',
          id: 'Mengapa ada dua rasio terpisah?',
          zh: '为什么前后端要分开？',
        },
        a: {
          en: 'Two thresholds catch two failure modes. A high housing-only ratio means a temporary income drop hits hard. A high total-debt ratio means car payments or student loans are crowding out housing. Lenders use the more constraining of the two.',
          ja: '2閾値で2種類の失敗を捕捉します。住居費比率だけが高いと一時的な収入減で苦しくなる。総債務比率が高いと自動車ローンや学費が住居費を圧迫している。銀行はより厳しい方を使います。',
          vi: 'Hai ngưỡng bắt hai chế độ thất bại. Tỷ lệ chỉ nhà cao có nghĩa là sốc thu nhập tạm thời rất đau. Tỷ lệ tổng nợ cao có nghĩa là xe hơi hoặc nợ học đang lấn át.',
          id: 'Dua ambang menangkap dua mode gagal. Rasio rumah saja yang tinggi berarti penurunan pendapatan sementara sangat memukul. Rasio total utang tinggi berarti utang lain mendesak rumah.',
          zh: '两个阈值各管一种风险。房贷占比过高 → 收入临时下滑会难承受。总债务占比过高 → 车贷或学贷正在挤压房贷空间。银行用更严的那一个。',
        },
      },
      {
        q: {
          en: 'Do real lenders actually use these limits?',
          ja: '実際の銀行はこの基準を使っていますか？',
          vi: 'Ngân hàng thực sự dùng các giới hạn này?',
          id: 'Apakah pemberi pinjaman nyata menggunakan batas ini?',
          zh: '实际银行真用这些限额吗？',
        },
        a: {
          en: 'Most US conventional loans use 28/36 as guidance. FHA, VA, and many international lenders allow stretching to 41-50% back-end with strong credit and reserves. The calculator gives a conservative target — your individual approval may be higher.',
          ja: '米国の通常ローンの大半は 28/36 を目安にします。FHA、VA、多くの海外銀行は信用力と預金次第で 41-50% まで認めます。この計算機は保守的な目標で、実際の承認はもっと高いかもしれません。',
          vi: 'Hầu hết khoản vay thông thường ở Mỹ dùng 28/36 làm hướng dẫn. FHA, VA và nhiều ngân hàng quốc tế cho phép kéo dài đến 41-50% back-end với tín dụng mạnh.',
          id: 'Sebagian besar pinjaman konvensional AS menggunakan 28/36 sebagai panduan. FHA, VA, dan banyak pemberi pinjaman internasional mengizinkan hingga 41-50% back-end dengan kredit kuat.',
          zh: '美国大多数常规贷款以 28/36 为参考。FHA、VA 以及许多国际贷方在信用良好时可放宽到后端 41-50%。本计算器给出保守目标。',
        },
      },
    ],
  },

  amortization: {
    useCases: [
      {
        title: {
          en: 'Tax preparation: total interest paid in a year',
          ja: '確定申告: 年間支払利息の集計',
          vi: 'Khai thuế: tổng lãi đã trả trong năm',
          id: 'Persiapan pajak: total bunga yang dibayar dalam setahun',
          zh: '报税：算出某年总利息',
        },
        body: {
          en: 'In countries where mortgage interest is deductible, you need the exact amount paid in a calendar year. Use the schedule to sum up monthly interest figures for any 12-month window — works as a sanity check against your lender\'s 1098 form.',
          ja: '住宅ローン控除のある国では、暦年の正確な利息支払額が必要です。償還表で任意12ヶ月分の利息を合計して、銀行の年末残高証明書のチェックに使えます。',
          vi: 'Ở các quốc gia mà lãi vay được khấu trừ, bạn cần số chính xác đã trả trong năm. Dùng lịch để tổng hợp lãi tháng cho bất kỳ cửa sổ 12 tháng nào.',
          id: 'Di negara dengan pengurangan bunga hipotek, Anda perlu jumlah yang tepat dibayar dalam tahun kalender. Gunakan jadwal untuk menjumlahkan bunga bulanan.',
          zh: '在按揭利息可抵扣的国家，需要某日历年准确金额。用还款表把任意 12 个月的利息相加——可与银行年终对账单互核。',
        },
      },
      {
        title: {
          en: 'Seeing where you stand in year 5',
          ja: '5年後の残高を可視化',
          vi: 'Xem tình hình ở năm thứ 5',
          id: 'Melihat posisi di tahun ke-5',
          zh: '查看第 5 年时的余额',
        },
        body: {
          en: 'Many people are shocked to see how little of the principal has been paid down by year 5 of a 30-year mortgage. Scroll the schedule to month 60 to see the remaining balance and recalibrate your refinance/sale timing accordingly.',
          ja: '30年ローンの5年後にどれほど元金が減っていないか見て、多くの人が驚きます。償還表を60ヶ月までスクロールして残高を確認し、借換・売却のタイミングを再考してください。',
          vi: 'Nhiều người sốc khi thấy bao nhiêu phần gốc đã được trả vào năm thứ 5 của khoản vay 30 năm. Cuộn đến tháng 60 để xem dư nợ.',
          id: 'Banyak orang terkejut melihat betapa sedikit pokok yang dilunasi di tahun ke-5 dari hipotek 30 tahun. Gulir ke bulan 60 untuk melihat saldo tersisa.',
          zh: '很多人惊讶地发现 30 年贷款到第 5 年本金还原得很少。把还款表滚动到第 60 个月，看看余额并据此重新规划再融资或卖房时机。',
        },
      },
      {
        title: {
          en: 'Understanding why early payments are mostly interest',
          ja: '初期返済が利息中心な理由を理解',
          vi: 'Hiểu tại sao kỳ đầu chủ yếu là lãi',
          id: 'Memahami mengapa pembayaran awal sebagian besar bunga',
          zh: '理解为什么前期还款大部分是利息',
        },
        body: {
          en: 'Looking at the schedule\'s first row makes the math intuitive: principal × rate = interest, and the rest is the principal payment. The interest column shrinks slowly month by month as the balance does. Seeing it in a table is more convincing than reading about it.',
          ja: '償還表の1行目を見れば直感的: 元金 × 金利 = 利息、残りが元金返済。残高が減るにつれて利息列が緩やかに減ります。文章で読むより表で見るほうが納得感があります。',
          vi: 'Nhìn dòng đầu tiên của lịch là trực quan: gốc × lãi suất = lãi, phần còn lại là trả gốc. Cột lãi giảm chậm khi dư nợ giảm.',
          id: 'Melihat baris pertama jadwal membuat matematika intuitif: pokok × suku bunga = bunga, sisanya pembayaran pokok. Kolom bunga menyusut perlahan saat saldo turun.',
          zh: '看还款表第一行就一目了然：本金 × 利率 = 利息，余下才是还本金。利息列随余额下降而缓慢缩小——比读文字更直观。',
        },
      },
    ],
    faqs: [
      {
        q: {
          en: 'Why does the last payment look slightly different?',
          ja: '最終返済額が少し違うのはなぜ？',
          vi: 'Tại sao kỳ trả cuối khác một chút?',
          id: 'Mengapa pembayaran terakhir terlihat sedikit berbeda?',
          zh: '为什么最后一期金额略有不同？',
        },
        a: {
          en: 'Rounding accumulates over hundreds of months. The schedule\'s final row balances the books exactly so the remaining balance is zero. Real lenders do the same — your last payment is usually a few cents (or yen) different from the standard PMT.',
          ja: '丸め誤差が数百ヶ月で累積するため、最終行は残高を正確にゼロにするよう調整します。実際の銀行も同じで、最終返済は標準PMT額と数円〜数十円違うのが普通です。',
          vi: 'Làm tròn tích lũy qua hàng trăm tháng. Hàng cuối cân bằng sổ sách chính xác để dư nợ về 0.',
          id: 'Pembulatan menumpuk selama ratusan bulan. Baris terakhir menyeimbangkan pembukuan secara tepat sehingga saldo tersisa nol.',
          zh: '上百个月的舍入累积，最后一行做精确平账让余额归零。实际银行也是这样——最后一期通常与标准 PMT 差几分钱。',
        },
      },
      {
        q: {
          en: 'Can I export this schedule to CSV or PDF?',
          ja: 'CSV や PDF でエクスポートできますか？',
          vi: 'Tôi có thể xuất ra CSV hoặc PDF không?',
          id: 'Bisakah saya mengekspor jadwal ini?',
          zh: '可以导出 CSV 或 PDF 吗？',
        },
        a: {
          en: 'Not yet. For now, you can copy the visible rows directly to a spreadsheet, or use your browser\'s print-to-PDF. Native export is on the roadmap.',
          ja: '現時点では未対応です。ブラウザから表をスプレッドシートに直接コピー、またはブラウザの「PDFに印刷」をご利用ください。エクスポート機能はロードマップに入っています。',
          vi: 'Chưa hỗ trợ. Hiện tại bạn có thể sao chép hàng hiển thị vào bảng tính, hoặc dùng "in sang PDF" của trình duyệt.',
          id: 'Belum. Untuk saat ini, Anda dapat menyalin baris yang terlihat ke spreadsheet, atau gunakan "cetak ke PDF" browser.',
          zh: '暂不支持。目前可直接把可见行复制到电子表格，或用浏览器"打印为 PDF"。导出功能在规划中。',
        },
      },
      {
        q: {
          en: 'Does extra principal automatically appear in the schedule?',
          ja: '繰上返済はこの表に自動反映されますか？',
          vi: 'Trả thêm gốc có tự động hiện trong lịch không?',
          id: 'Apakah pelunasan tambahan otomatis muncul?',
          zh: '提前还款会自动出现在表中吗？',
        },
        a: {
          en: 'No — this calculator shows the standard schedule for the original loan. To model extra payments, use the Extra Payment calculator instead, which shows months saved and interest saved.',
          ja: 'いいえ — これは元のローンの標準償還表です。繰上返済をモデル化するには「繰上返済」計算機を使ってください。短縮月数と利息削減が表示されます。',
          vi: 'Không — máy tính này hiển thị lịch chuẩn cho khoản vay gốc. Để mô hình hóa trả thêm, dùng máy tính "Trả thêm".',
          id: 'Tidak — kalkulator ini menampilkan jadwal standar pinjaman asli. Untuk memodelkan pelunasan tambahan, gunakan kalkulator Extra Payment.',
          zh: '不会——本计算器显示原贷款的标准还款表。要模拟提前还款，请使用"提前还款"计算器。',
        },
      },
    ],
  },

  extra: {
    useCases: [
      {
        title: {
          en: 'Deploying a year-end bonus',
          ja: '年末ボーナスの活用',
          vi: 'Sử dụng tiền thưởng cuối năm',
          id: 'Menggunakan bonus akhir tahun',
          zh: '年终奖怎么用',
        },
        body: {
          en: 'Splitting a $5,000 bonus into 12 extra monthly payments of ~$417 can shave years off a 30-year mortgage. Plug it in to see exactly how much faster you finish and how much interest you save.',
          ja: '50万円のボーナスを12ヶ月で割って毎月+約4万円を加えると、30年ローンが数年短縮されます。具体的な短縮月数と利息削減を確認できます。',
          vi: 'Chia tiền thưởng 5,000$ thành 12 lần trả thêm hàng tháng ~417$ có thể rút ngắn nhiều năm khỏi khoản vay 30 năm.',
          id: 'Membagi bonus $5,000 menjadi 12 pelunasan tambahan bulanan ~$417 bisa memotong tahun dari hipotek 30 tahun.',
          zh: '把 5,000 美元年终奖分摊成 12 次每月约 417 美元，可让 30 年贷款缩短数年。输入后能看到具体节省。',
        },
      },
      {
        title: {
          en: 'Round up to the nearest $100',
          ja: '月額を$100単位に切り上げ',
          vi: 'Làm tròn đến $100 gần nhất',
          id: 'Bulatkan ke $100 terdekat',
          zh: '把月供凑整到下一个 100 元',
        },
        body: {
          en: 'A simple, frictionless habit: round your monthly mortgage up to the next round number and treat the difference as extra principal. For most loans, this single trick saves a meaningful number of months.',
          ja: 'シンプルで摩擦の少ない習慣: 月額返済を次のキリのいい額まで切り上げ、差額を元金返済に充当します。多くのローンでこれだけで意味のある月数を削減できます。',
          vi: 'Thói quen đơn giản: làm tròn khoản trả hàng tháng lên số tròn gần nhất và coi chênh lệch là trả thêm gốc.',
          id: 'Kebiasaan sederhana: bulatkan cicilan bulanan ke angka bulat berikutnya dan perlakukan selisih sebagai pelunasan tambahan.',
          zh: '简单无痛的习惯：把月供向上凑整到下一个整数，差额作为额外本金。这一招就能省下不少月份。',
        },
      },
      {
        title: {
          en: 'Comparing extra principal vs. investing the difference',
          ja: '繰上返済 vs 差額投資の比較',
          vi: 'So sánh trả thêm gốc với đầu tư phần chênh lệch',
          id: 'Membandingkan pelunasan tambahan vs investasi',
          zh: '提前还款 vs 把差额拿去投资',
        },
        body: {
          en: 'Use this calculator to find your interest saved, then check the Compound Interest calculator with the same amount and your expected investment return. Whichever number is bigger wins on paper — but tax treatment and risk tolerance matter too.',
          ja: 'この計算機で利息削減額を出し、同額・想定利回りで複利計算機を使ってください。大きい方が紙の上では勝ちですが、税制とリスク許容度も考慮を。',
          vi: 'Dùng máy tính này để tìm lãi tiết kiệm, rồi dùng máy tính Lãi Kép với cùng số tiền và lợi suất kỳ vọng. Số lớn hơn thắng trên giấy.',
          id: 'Gunakan kalkulator ini untuk menemukan bunga yang dihemat, lalu gunakan kalkulator Bunga Majemuk dengan jumlah dan return yang sama.',
          zh: '用本计算器算出节省的利息，然后用复利计算器以同样金额和预期收益率计算。纸面上数字更大的赢——但税收与风险承受度也要考虑。',
        },
      },
    ],
    faqs: [
      {
        q: {
          en: 'Does my lender allow applying extra to principal?',
          ja: '銀行は元金返済に充当することを認めていますか？',
          vi: 'Ngân hàng có cho phép áp dụng vào gốc không?',
          id: 'Apakah pemberi pinjaman saya mengizinkan ini?',
          zh: '我的银行允许把多付的钱用于本金吗？',
        },
        a: {
          en: 'Most US, UK, Canadian, and Japanese lenders allow it for fixed-rate mortgages — and most have no prepayment penalty. Some loans (especially older auto and personal loans) compute interest using methods that make extra principal less effective. Check your loan terms.',
          ja: '米・英・加・日の銀行のほとんどは固定金利ローンで認めており、繰上返済違約金もないのが普通です。一部のローン（特に古い自動車・個人ローン）は計算方法によって繰上効果が弱まります。契約書を確認してください。',
          vi: 'Hầu hết ngân hàng ở Mỹ, Anh, Canada và Nhật cho phép với khoản vay lãi suất cố định — và hầu hết không có phí phạt trả sớm.',
          id: 'Sebagian besar pemberi pinjaman di AS, Inggris, Kanada, dan Jepang mengizinkan untuk hipotek suku bunga tetap — dan kebanyakan tanpa penalti.',
          zh: '美、英、加、日的大多数银行对固定利率贷款都允许，且通常无提前还款罚金。某些较旧的汽车或个人贷款的计息方式会削弱提前还款效果——请确认合同。',
        },
      },
      {
        q: {
          en: 'Should I really pay extra instead of investing?',
          ja: '投資より繰上返済を優先すべき？',
          vi: 'Có nên trả thêm thay vì đầu tư?',
          id: 'Haruskah saya benar-benar membayar lebih daripada berinvestasi?',
          zh: '真的该提前还款而不投资吗？',
        },
        a: {
          en: 'Mathematically, invest if expected return > mortgage rate; pay extra if not. Behaviorally, the guaranteed return of paying down debt is more valuable than its math suggests for many people. There is no universally right answer.',
          ja: '数学的には、期待利回り > ローン金利なら投資、そうでなければ繰上返済。行動経済学的には、債務削減の確実なリターンが多くの人にとって数字以上の価値を持ちます。万人に正しい答えはありません。',
          vi: 'Toán học: đầu tư nếu lợi suất kỳ vọng > lãi suất vay; trả thêm nếu không. Tâm lý: lợi suất đảm bảo của trả nợ có giá trị hơn con số.',
          id: 'Secara matematis: investasi jika return yang diharapkan > suku bunga hipotek; bayar lebih jika tidak. Secara perilaku, return terjamin dari pelunasan utang lebih berharga.',
          zh: '数学上：预期收益率 > 房贷利率就投资，否则提前还款。行为上：还债的"确定收益"对多数人来说价值高于纸面数字。没有放之四海皆准的答案。',
        },
      },
      {
        q: {
          en: 'What about a one-time lump sum instead of monthly extras?',
          ja: '毎月でなく一括の繰上返済はどうですか？',
          vi: 'Một lần trả thêm lớn thay vì hàng tháng?',
          id: 'Bagaimana dengan satu kali lump sum?',
          zh: '一次性大额提前还款而不是每月加？',
        },
        a: {
          en: 'A lump sum saves slightly more interest because the principal drops earlier. The exact amount depends on when you make it. As a rough rule, a one-time payment saves about 10-20% more interest than spreading the same amount monthly over the same year.',
          ja: '一括返済の方が元金が早く減るため、わずかに利息削減効果が高くなります。実施タイミングで変わります。経験則として、同額を同じ年に毎月分散するより一括の方が10-20%多く利息を削減できます。',
          vi: 'Một khoản lump sum tiết kiệm lãi nhiều hơn một chút vì gốc giảm sớm hơn. Quy tắc kinh nghiệm: tiết kiệm thêm 10-20% so với rải đều theo tháng.',
          id: 'Lump sum menghemat sedikit lebih banyak bunga karena pokok turun lebih awal. Aturan praktis: 10-20% lebih banyak daripada disebar bulanan.',
          zh: '一次性提前还款节省的利息略多，因为本金提前下降。经验法则：比同年分摊到每月多省 10-20% 利息。',
        },
      },
    ],
  },

  biweekly: {
    useCases: [
      {
        title: {
          en: 'Aligning with biweekly paychecks',
          ja: '隔週給料に合わせて返済',
          vi: 'Đồng bộ với lương hai tuần',
          id: 'Selaraskan dengan gaji dua mingguan',
          zh: '与双周工资同步',
        },
        body: {
          en: 'If you\'re paid every two weeks, splitting your mortgage in half and paying half each pay period feels natural and budget-aligned. The bonus is one extra full payment per year (26 half-payments = 13 full payments).',
          ja: '隔週給料の方は、住宅ローンを半額ずつ給料日に支払う方式が家計に馴染みます。年26回の半額返済は実質13回分のフル返済 = 年に1回分追加効果。',
          vi: 'Nếu bạn được trả lương hai tuần một lần, chia khoản vay làm đôi và trả nửa mỗi kỳ lương rất tự nhiên. Bonus: 26 nửa = 13 đầy đủ.',
          id: 'Jika Anda dibayar setiap dua minggu, membagi hipotek menjadi dua dan membayar setengah setiap periode terasa alami. Bonus: 26 setengah = 13 penuh.',
          zh: '若你每两周发一次工资，把月供拆半在每个发薪日支付很自然。好处：26 次半额=13 次全额，相当于每年多付 1 次。',
        },
      },
      {
        title: {
          en: 'Sneaking an extra payment without lifestyle change',
          ja: '生活習慣を変えずに追加返済',
          vi: 'Lén trả thêm mà không đổi lối sống',
          id: 'Menambah satu pelunasan tanpa mengubah gaya hidup',
          zh: '不改变生活习惯就能多付一次',
        },
        body: {
          en: 'Most months you make two biweekly payments. Twice a year you make three (because some months have three Fridays). That third payment in those months is the "13th payment" that shaves years off the loan.',
          ja: '大抵の月は隔週返済が2回ですが、年2回は3回（金曜日が3回ある月）。その3回目が「13回目の月次返済」となり、ローン期間を数年短縮します。',
          vi: 'Hầu hết tháng bạn trả 2 kỳ hai tuần. Hai lần một năm bạn trả 3 (vì một số tháng có 3 thứ Sáu). Kỳ thứ 3 đó là "kỳ trả thứ 13".',
          id: 'Sebagian besar bulan Anda membayar dua kali. Dua kali setahun tiga kali (karena beberapa bulan punya tiga Jumat). Itulah "pembayaran ke-13".',
          zh: '大多数月份你会还两次双周。一年里有两次会还三次（某些月份有三个周五）。那第三次就是"第 13 次"，正是让贷款缩短数年的关键。',
        },
      },
      {
        title: {
          en: 'Avoiding lender biweekly programs with fees',
          ja: '銀行有料の隔週プログラムを回避',
          vi: 'Tránh chương trình hai tuần có phí của ngân hàng',
          id: 'Menghindari program biweekly dengan biaya',
          zh: '避开银行收费的双周计划',
        },
        body: {
          en: 'Some lenders charge $300-$500 to "set up" biweekly payments. You can get the same effect for free by sending half your monthly payment every two weeks (if your lender accepts it) or by simply paying 1/12 extra principal each month.',
          ja: '一部の銀行は隔週返済「設定」に$300-500課金します。同じ効果は (1) 銀行が受付するなら自分で隔週半額送金、または (2) 月々 1/12 を元金繰上、で無料で得られます。',
          vi: 'Một số ngân hàng tính phí $300-500 để "thiết lập" thanh toán hai tuần. Bạn có thể nhận hiệu ứng tương tự miễn phí.',
          id: 'Beberapa pemberi pinjaman mengenakan $300-500 untuk "mengatur" pembayaran biweekly. Anda bisa mendapat efek yang sama gratis.',
          zh: '一些银行收 300-500 美元设置"双周"。你可以免费实现相同效果——只要银行接受，就自行每两周送半额，或每月多付 1/12 本金。',
        },
      },
    ],
    faqs: [
      {
        q: {
          en: 'Why does biweekly save money if I\'m paying the same?',
          ja: '同額返済なのに、なぜ隔週で節約できるのですか？',
          vi: 'Tại sao trả hai tuần tiết kiệm nếu tôi trả số tiền như nhau?',
          id: 'Mengapa biweekly menghemat jika saya membayar sama?',
          zh: '总额一样的话为什么双周还能省？',
        },
        a: {
          en: 'You\'re NOT paying the same — you\'re paying 13/12 = 8.33% more per year. There are 26 biweekly periods in a year (52 weeks ÷ 2), so 26 × half-payment = 13 full monthly payments. Compare to 12 monthly payments — you\'re paying one extra each year.',
          ja: '実は同額ではありません — 年で 13/12 = 8.33% 多く支払っています。年は52週÷2 = 26隔週、つまり 26 × 半額 = 13回分のフル返済。月次12回と比べて年1回多い計算です。',
          vi: 'Bạn KHÔNG trả số tiền như nhau — bạn trả 13/12 = 8,33% nhiều hơn mỗi năm. 26 kỳ hai tuần × nửa = 13 kỳ đầy đủ, so với 12 kỳ hàng tháng.',
          id: 'Anda TIDAK membayar sama — Anda membayar 13/12 = 8,33% lebih banyak per tahun. 26 periode biweekly × setengah = 13 pembayaran penuh.',
          zh: '其实你没付同样的总额——你每年多付 13/12 ≈ 8.33%。一年有 26 个双周（52÷2），26 × 半额 = 13 次全额。比月还款一年 12 次多 1 次。',
        },
      },
      {
        q: {
          en: 'Does my lender accept biweekly payments directly?',
          ja: '銀行は隔週返済を直接受け付けますか？',
          vi: 'Ngân hàng có chấp nhận trực tiếp không?',
          id: 'Apakah pemberi pinjaman menerima langsung?',
          zh: '银行直接接受双周还款吗？',
        },
        a: {
          en: 'Most US lenders only post payments monthly even if you send biweekly — meaning the half-payments sit until the full amount accumulates. That defeats the purpose. Either confirm your lender posts biweekly OR use the equivalent: pay 1/12 extra principal each month.',
          ja: '米国の多くの銀行は隔週送金しても月次計上のみで、半額入金が貯まるまで保留されます。これでは効果が消えます。銀行が隔週計上するか確認するか、同等効果として月次に 1/12 元金繰上を使ってください。',
          vi: 'Hầu hết ngân hàng Mỹ chỉ ghi nhận hàng tháng dù bạn gửi hai tuần. Hãy xác nhận ngân hàng ghi nhận hai tuần, HOẶC trả thêm 1/12 gốc mỗi tháng.',
          id: 'Sebagian besar pemberi pinjaman AS hanya mencatat bulanan meski Anda kirim biweekly. Konfirmasi atau gunakan ekuivalen: 1/12 pelunasan tambahan tiap bulan.',
          zh: '美国大多数银行即便你两周打款也按月入账，半额会被搁置到攒满月供——这样就失去意义。要么确认银行支持双周入账，要么改为每月多付 1/12 本金。',
        },
      },
      {
        q: {
          en: 'Should I just round up monthly instead?',
          ja: '月額を切り上げる方が簡単では？',
          vi: 'Vậy chỉ làm tròn hàng tháng có dễ hơn?',
          id: 'Apakah lebih mudah membulatkan bulanan saja?',
          zh: '直接每月凑整不是更简单？',
        },
        a: {
          en: 'Often yes. The biweekly trick is just "13 monthly payments per year" dressed up. If you just add 1/12 of your monthly payment as extra principal each month, you get nearly identical savings without any biweekly logistics — and your lender always accepts it.',
          ja: 'しばしばその通りです。隔週方式は「年13回月次返済」を別の形で実現したもの。毎月 1/12 を元金繰上として追加すれば、隔週の手間なくほぼ同じ削減効果が得られ、銀行も必ず受け付けます。',
          vi: 'Thường có. Mẹo hai tuần chỉ là "13 lần trả hàng tháng/năm" được ngụy trang. Cộng 1/12 hàng tháng làm gốc bổ sung — gần như tiết kiệm như nhau, ngân hàng luôn chấp nhận.',
          id: 'Sering iya. Trik biweekly hanyalah "13 pembayaran bulanan per tahun" yang dikemas. Tambahkan 1/12 setiap bulan sebagai pokok tambahan — tabungan hampir identik.',
          zh: '通常是的。"双周还款"本质就是把"每年还 13 次"换个说法。每月直接多付月供的 1/12 作为本金，效果几乎相同，且银行一定接受。',
        },
      },
    ],
  },

  cagr: {
    useCases: [
      {
        title: {
          en: 'Comparing two mutual funds or ETFs',
          ja: '投資信託・ETF の比較',
          vi: 'So sánh hai quỹ',
          id: 'Membandingkan dua reksa dana atau ETF',
          zh: '比较两只基金或 ETF',
        },
        body: {
          en: 'Two funds advertising "108% total return over 10 years" vs "75% over 5 years" can\'t be directly compared without converting to CAGR. Plug in begin/end values and years to put both on equal annualized footing.',
          ja: '「10年で総リターン108%」と「5年で75%」のファンドは、CAGR に変換しないと直接比較できません。開始額・終了額・年数を入れて、両者を年率ベースで揃えてください。',
          vi: 'Hai quỹ quảng cáo "108% trong 10 năm" với "75% trong 5 năm" không thể so trực tiếp nếu không quy về CAGR.',
          id: 'Dua reksa dana mengiklankan "108% selama 10 tahun" vs "75% selama 5 tahun" tidak bisa dibandingkan langsung tanpa konversi ke CAGR.',
          zh: '"10 年总回报 108%" 与 "5 年总回报 75%" 不换算成 CAGR 没法直接比。输入起止值和年数即可以年化基准对齐。',
        },
      },
      {
        title: {
          en: 'Comparing your portfolio to S&P 500',
          ja: 'ポートフォリオ vs S&P 500',
          vi: 'So sánh danh mục với S&P 500',
          id: 'Membandingkan portofolio dengan S&P 500',
          zh: '把你的组合与标普 500 对比',
        },
        body: {
          en: 'The S&P 500\'s historical CAGR is roughly 10% nominal / 7% real over the long run. Compute the CAGR of your own account from start balance to current balance over the same window to see whether you\'re beating or trailing the market.',
          ja: 'S&P 500 の歴史的 CAGR は名目で約10%、実質で約7%。同じ期間で自分の口座の開始額〜現残高で CAGR を計算し、市場を上回っているか下回っているか確認できます。',
          vi: 'CAGR lịch sử của S&P 500 khoảng 10% danh nghĩa / 7% thực dài hạn. Tính CAGR tài khoản của bạn để xem có vượt thị trường không.',
          id: 'CAGR historis S&P 500 sekitar 10% nominal / 7% riil dalam jangka panjang. Hitung CAGR akun Anda untuk melihat apakah mengalahkan pasar.',
          zh: '标普 500 长期历史 CAGR 约为名义 10% / 实质 7%。在相同时间窗内算出你账户起止值的 CAGR，看是跑赢还是跑输市场。',
        },
      },
      {
        title: {
          en: 'Quantifying business revenue growth',
          ja: '事業の売上成長率を定量化',
          vi: 'Định lượng tăng trưởng doanh thu',
          id: 'Mengukur pertumbuhan pendapatan bisnis',
          zh: '量化企业收入增长',
        },
        body: {
          en: 'For a small business or freelance income, CAGR turns "I earned $40k five years ago and $80k now" into a clean "≈14.9% annualized" — useful for pitching investors, comparing to industry benchmarks, or just gauging your own trajectory.',
          ja: '小規模事業やフリーランス収入なら、CAGRは「5年前40万・現在80万」を「年率約14.9%」というクリーンな指標に変換します。投資家への提案、業界比較、自分の軌道把握に有用。',
          vi: 'Với doanh nghiệp nhỏ hoặc thu nhập tự do, CAGR biến "5 năm trước 40k$, hiện 80k$" thành "khoảng 14,9% hàng năm" — hữu ích để pitch nhà đầu tư.',
          id: 'Untuk bisnis kecil atau pendapatan freelance, CAGR mengubah "5 tahun lalu $40k, sekarang $80k" menjadi "~14,9% per tahun" — berguna untuk presentasi investor.',
          zh: '对小企业或自由职业收入，CAGR 把"五年前 4 万、现在 8 万"换算成干净的"约 14.9% 年化"——对投资者路演、行业对标或自我评估都有用。',
        },
      },
    ],
    faqs: [
      {
        q: {
          en: 'CAGR vs. simple average annual return — what\'s the difference?',
          ja: 'CAGR と単純平均年リターンはどう違いますか？',
          vi: 'CAGR khác lợi nhuận trung bình đơn giản như thế nào?',
          id: 'CAGR vs return tahunan rata-rata — apa bedanya?',
          zh: 'CAGR 与简单年均回报有什么区别？',
        },
        a: {
          en: 'CAGR captures compounding; simple average doesn\'t. A portfolio that goes +50% then -50% has a simple average of 0% but its CAGR is −13.4% — because $100 → $150 → $75. Simple averages always overstate compound growth, especially with volatility.',
          ja: 'CAGR は複利を捕捉し、単純平均はしません。+50%・-50% のポートフォリオは単純平均0%ですが、CAGR は -13.4%（$100 → $150 → $75）。単純平均は常に複利成長を過大評価し、ボラが大きいほど顕著です。',
          vi: 'CAGR bắt được lãi kép; trung bình đơn giản thì không. Danh mục +50% rồi -50% có trung bình 0% nhưng CAGR -13,4%.',
          id: 'CAGR menangkap penggandaan; rata-rata sederhana tidak. Portofolio +50% lalu -50% punya rata-rata 0% tapi CAGR -13,4%.',
          zh: 'CAGR 体现复利，简单平均不会。一组先 +50%、再 -50% 的回报：简单平均是 0%，但 CAGR 是 -13.4%（100 → 150 → 75）。简单平均总会高估复合增长，波动越大差距越大。',
        },
      },
      {
        q: {
          en: 'What if there were deposits or withdrawals during the period?',
          ja: '期間中に入金・出金があった場合は？',
          vi: 'Nếu có nạp/rút trong giai đoạn?',
          id: 'Bagaimana jika ada setoran atau penarikan?',
          zh: '期间内有存取款怎么办？',
        },
        a: {
          en: 'CAGR doesn\'t account for cash flows — use IRR (internal rate of return) for that. CAGR is correct only if the same money sat from start to end with no in/outs. If you added or withdrew significantly, treat the CAGR result as approximate.',
          ja: 'CAGR はキャッシュフローを考慮しません — その場合は IRR（内部収益率）を使ってください。CAGR は開始時の資金が出入りなく終了時まで運用された場合のみ正確です。大きな入出金があった場合は近似値として扱ってください。',
          vi: 'CAGR không tính dòng tiền — dùng IRR cho việc đó. CAGR chỉ đúng nếu cùng số tiền nằm từ đầu đến cuối.',
          id: 'CAGR tidak memperhitungkan arus kas — gunakan IRR untuk itu. CAGR akurat hanya jika uang yang sama duduk dari awal hingga akhir.',
          zh: 'CAGR 不计现金流——这种情况要用 IRR（内部收益率）。只有期间内没有存取款时 CAGR 才准确，否则只能视为近似值。',
        },
      },
      {
        q: {
          en: 'Why use multiple years instead of just last year\'s return?',
          ja: 'なぜ複数年で見るのですか？',
          vi: 'Tại sao dùng nhiều năm thay vì chỉ năm gần nhất?',
          id: 'Mengapa gunakan beberapa tahun?',
          zh: '为什么要用多年而不是只看去年？',
        },
        a: {
          en: 'Single-year returns are noisy — equities easily swing 20% in either direction. CAGR over 5+ years smooths that noise and is the standard performance measure for funds and investments. Marketing materials often cherry-pick a good single year; a CAGR over a decade is harder to fake.',
          ja: '単年リターンはノイズが多く、株式は±20%動きます。5年以上の CAGR がノイズを平滑化し、ファンド・投資の標準的パフォーマンス指標です。マーケ資料は良い単年を切り取りがちですが、10年 CAGR はごまかしにくい。',
          vi: 'Lợi nhuận một năm rất nhiễu — cổ phiếu dễ biến động 20% theo bất kỳ hướng nào. CAGR 5+ năm làm mịn nhiễu.',
          id: 'Return satu tahun sangat berisik — saham mudah berfluktuasi 20% ke arah mana pun. CAGR selama 5+ tahun memuluskan kebisingan itu.',
          zh: '单年回报噪音大——股票一年涨跌 20% 很常见。5 年以上的 CAGR 能平滑噪声，是基金和投资的行业标准。营销材料常挑好年份；十年 CAGR 难以造假。',
        },
      },
    ],
  },

  savings: {
    useCases: [
      {
        title: {
          en: 'House down-payment timeline',
          ja: '住宅頭金の貯蓄期間',
          vi: 'Thời gian tiết kiệm tiền đặt cọc nhà',
          id: 'Garis waktu uang muka rumah',
          zh: '攒首付要多久',
        },
        body: {
          en: 'Set the target to your desired down payment (often 20% of the home price), enter your current savings and how much you can save monthly, and see exactly how many years until you can buy.',
          ja: '希望物件価格の20%（など）を目標額に設定し、現在の貯蓄額と月次積立可能額を入れて、何年後に買えるかを正確に把握できます。',
          vi: 'Đặt mục tiêu là tiền đặt cọc mong muốn (thường 20% giá nhà), nhập tiết kiệm hiện tại và mức có thể tiết kiệm hàng tháng để biết chính xác số năm đến khi mua được.',
          id: 'Tetapkan target ke uang muka yang diinginkan (biasanya 20% harga rumah), masukkan tabungan saat ini dan jumlah bulanan, lihat tahun untuk bisa beli.',
          zh: '把目标设为期望首付（通常房价 20%），输入现有储蓄和每月能存入的金额，立即看到几年后能买房。',
        },
      },
      {
        title: {
          en: 'FIRE / early retirement targeting',
          ja: 'FIRE / 早期退職の目標設定',
          vi: 'Mục tiêu FIRE / nghỉ hưu sớm',
          id: 'Target FIRE / pensiun dini',
          zh: 'FIRE / 提前退休目标',
        },
        body: {
          en: 'A common FIRE target is 25× annual expenses (the 4% rule). Plug in that target, your starting nest egg, and your monthly savings to see whether your timeline matches your "freedom date".',
          ja: '一般的な FIRE 目標は年間支出の25倍（4%ルール）。目標額・現在の運用元本・月次積立を入れて、自分の「解放の日」に間に合うか確認してください。',
          vi: 'Mục tiêu FIRE phổ biến là 25× chi phí năm (quy tắc 4%). Nhập để xem lộ trình có khớp "ngày tự do" không.',
          id: 'Target FIRE umum adalah 25× pengeluaran tahunan (aturan 4%). Masukkan untuk melihat apakah lini masa cocok dengan "tanggal kebebasan".',
          zh: 'FIRE 常见目标是年支出的 25 倍（4% 法则）。输入目标、现有本金和月存款，看时间线是否对得上你的"自由日"。',
        },
      },
      {
        title: {
          en: 'Emergency fund buildup',
          ja: '緊急予備資金の構築',
          vi: 'Xây dựng quỹ khẩn cấp',
          id: 'Membangun dana darurat',
          zh: '建立应急基金',
        },
        body: {
          en: 'Most planners suggest 3-6 months of expenses in a high-yield savings account. Use this calculator with target = 6 × monthly expenses, rate = your savings account APY, to see how long aggressive saving needs to last.',
          ja: 'ほとんどのプランナーが高利回り預金に支出の3-6ヶ月分を推奨します。目標 = 月支出×6、利率 = 預金口座 APY で、どれだけの期間集中的に貯める必要があるか把握できます。',
          vi: 'Các nhà hoạch định khuyến nghị 3-6 tháng chi tiêu trong tài khoản tiết kiệm lãi suất cao. Dùng máy tính với target = 6× chi tiêu tháng.',
          id: 'Sebagian besar perencana menyarankan 3-6 bulan pengeluaran di rekening tabungan hasil tinggi. Gunakan target = 6× pengeluaran bulanan.',
          zh: '理财师通常建议在高息账户存 3-6 个月支出。把目标设为月支出 × 6、利率设为账户 APY，看激进储蓄要持续多久。',
        },
      },
    ],
    faqs: [
      {
        q: {
          en: 'What rate should I assume?',
          ja: 'どの利回りを使えばいいですか？',
          vi: 'Tôi nên giả định lãi suất nào?',
          id: 'Berapa tingkat yang harus saya asumsikan?',
          zh: '该假设多少收益率？',
        },
        a: {
          en: 'For cash savings: your account\'s APY (typically 0.5-5%). For invested savings (index funds): use 5-7% as a conservative real return after inflation, or 7-10% nominal. Be honest with yourself — high assumptions feel good but don\'t change reality.',
          ja: '現金貯蓄: 預金口座の APY（通常 0.5-5%）。投資貯蓄（インデックスファンド）: インフレ後の実質で保守的に5-7%、名目で7-10%。高めに見積もると気分はいいですが現実は変わりません — 自分に正直に。',
          vi: 'Tiết kiệm tiền mặt: APY tài khoản (thường 0,5-5%). Tiết kiệm đầu tư (quỹ chỉ số): 5-7% bảo thủ sau lạm phát, 7-10% danh nghĩa.',
          id: 'Tabungan tunai: APY akun Anda (biasanya 0,5-5%). Tabungan diinvestasikan (reksa indeks): 5-7% konservatif setelah inflasi, 7-10% nominal.',
          zh: '现金储蓄：账户 APY（通常 0.5-5%）。投资储蓄（指数基金）：保守扣通胀后 5-7%，名义 7-10%。对自己诚实——高估只会让你感觉良好，不改变现实。',
        },
      },
      {
        q: {
          en: 'What if I can\'t make every monthly contribution?',
          ja: '毎月確実に積み立てられない場合は？',
          vi: 'Nếu tôi không thể đóng góp mỗi tháng?',
          id: 'Bagaimana jika saya tidak bisa setor tiap bulan?',
          zh: '如果我做不到每月按时存怎么办？',
        },
        a: {
          en: 'Use a realistic average — if you skip 2 months a year, your real monthly contribution is 10/12 of what you "intend." Run the calculator with the lower realistic number; you\'ll see the timeline stretch by months or years. Better to plan with reality than discover the gap later.',
          ja: '現実的な平均を使ってください — 年に2ヶ月スキップするなら、実質月次積立は意図額の 10/12。低めの現実値で計算すると、達成期間が数ヶ月〜数年延びます。後で気付くより、最初から現実に基づいて計画する方が良い。',
          vi: 'Dùng mức trung bình thực tế — nếu bỏ qua 2 tháng/năm, đóng góp thực tế là 10/12 dự định. Lập kế hoạch với thực tế.',
          id: 'Gunakan rata-rata realistis — jika lewatkan 2 bulan setahun, kontribusi nyata adalah 10/12 dari yang "dimaksudkan".',
          zh: '用现实平均值——如果一年漏存 2 个月，实际月存款是计划的 10/12。用偏低的现实数字算，时间线会延长几个月到几年。早面对比晚发现好。',
        },
      },
      {
        q: {
          en: 'Is the result before or after tax?',
          ja: '結果は税引前ですか税引後ですか？',
          vi: 'Kết quả là trước thuế hay sau thuế?',
          id: 'Apakah hasilnya sebelum atau sesudah pajak?',
          zh: '结果是税前还是税后？',
        },
        a: {
          en: 'Before tax. Capital gains, interest, and dividend taxes vary widely by country and account type (taxable vs. retirement). For taxable accounts, multiply your assumed rate by (1 − your tax rate) to get a tax-adjusted return — typically 70-85% of nominal in most jurisdictions.',
          ja: '税引前です。キャピタルゲイン、利息、配当の税率は国・口座タイプ（課税口座 vs 退職口座）で大きく異なります。課税口座の場合、想定利率に (1 − 税率) を掛けて税引後利回りに調整 — 多くの国で名目の70-85%程度。',
          vi: 'Trước thuế. Thuế lãi vốn, lãi suất và cổ tức khác nhau nhiều theo quốc gia và loại tài khoản. Với tài khoản chịu thuế, nhân lãi suất với (1 − thuế suất).',
          id: 'Sebelum pajak. Pajak capital gain, bunga, dan dividen sangat bervariasi per negara dan jenis akun. Untuk akun kena pajak, kalikan tingkat dengan (1 − tarif pajak).',
          zh: '税前。各国资本利得、利息和股息税率差异很大，账户类型也影响（普通 vs 退休账户）。普通账户请把假设利率乘以 (1 − 你的税率)——大多数地区约为名义值的 70-85%。',
        },
      },
    ],
  },
};
