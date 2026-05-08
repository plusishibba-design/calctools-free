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
};
