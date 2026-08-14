import React, { useState } from "react";

/* ============================================================
   DESIGN TOKENS
   Ungu gelap #3D2448 | Ungu utama #76508C | Lavender #D8C3E5
   Lavender muda #F3EAF7 | Krem #F8F2EA | Putih hangat #FFFDFB
   Emas lembut #C7A85B | Teks sekunder #786F7C
   Display: 'Fraunces' (serif editorial) — Body/UI: 'Inter'
   ============================================================ */

const problemCards = [
  {
    title: "Uang terasa selalu habis",
    body: "Transaksi kecil menumpuk, tetapi sulit melihat pola dan kebocoran sebenarnya.",
  },
  {
    title: "Budget cepat ditinggalkan",
    body: "Anggaran terlalu ideal, tidak menyesuaikan kehidupan nyata dan pendapatan yang berubah.",
  },
  {
    title: "Bingung menentukan prioritas",
    body: "Utang, dana darurat, tujuan, dan investasi terasa harus dikerjakan sekaligus.",
  },
];

const modules = [
  { num: "01", title: "Financial Health Check", body: "Kenali kondisi keuangan tanpa menghakimi diri sendiri." },
  { num: "02", title: "Money Leak Detector", body: "Temukan pengeluaran yang tidak lagi memberi nilai." },
  { num: "03", title: "Budget Reset", body: "Susun anggaran realistis yang tetap punya ruang bernapas." },
  { num: "04", title: "Debt Freedom Planner", body: "Pilih strategi pelunasan utang yang jelas dan aman." },
  { num: "05", title: "Emergency Fund Planner", body: "Bangun bantalan agar kejutan tidak berubah menjadi utang." },
  { num: "06", title: "Investment Readiness", body: "Pastikan fondasi siap sebelum mengejar imbal hasil." },
  { num: "07", title: "AI Financial Coach", body: "Gunakan AI untuk berpikir terstruktur, bukan menyerahkan keputusan." },
  { num: "08", title: "30-Day Reset Challenge", body: "Ubah insight menjadi kebiasaan yang dapat dipertahankan." },
];

const outcomes = [
  "Tahu ke mana uang pergi setiap bulan",
  "Punya budget yang realistis dan mudah direview",
  "Memiliki prioritas utang, dana darurat, dan tujuan",
  "Lebih tenang saat mengambil keputusan finansial",
];

const roadmap = [
  { range: "Hari 01–05", verb: "Lihat", body: "Data, aset, dan arus kas" },
  { range: "Hari 06–10", verb: "Hentikan", body: "Kebocoran dan pengeluaran otomatis" },
  { range: "Hari 11–17", verb: "Atur", body: "Budget, rekening, dan kalender" },
  { range: "Hari 18–23", verb: "Lindungi", body: "Utang, dana darurat, dan proteksi" },
  { range: "Hari 24–30", verb: "Tumbuhkan", body: "Tujuan, investasi, dan sistem review" },
];

const bonuses = [
  {
    num: "01",
    title: "Financial Dashboard",
    body: "Versi DEMO dan KOSONG untuk melacak cashflow, budget, utang, dana darurat, tujuan, dan investasi.",
    format: "Google Sheets & XLSX",
  },
  {
    num: "02",
    title: "Financial Habit Tracker",
    body: "Tracker 30 hari, review mingguan, recovery plan, dan rencana kebiasaan 90 hari.",
    format: "PDF, DOCX & XLSX",
  },
  {
    num: "03",
    title: "Crypto Readiness Checklist",
    body: "Uji fondasi, legalitas, keamanan, alokasi, dan batas risiko sebelum mengambil keputusan.",
    format: "PDF & DOCX",
  },
  {
    num: "04",
    title: "100 AI Prompts Keuangan",
    body: "Prompt siap pakai untuk budgeting, cashflow, utang, tujuan, investasi, kebiasaan, dan bisnis.",
    format: "PDF & DOCX",
  },
];

const packageContents = [
  "Workbook master 90 halaman",
  "8 booklet modul mandiri",
  "Dashboard versi DEMO dan KOSONG",
  "Financial Habit Tracker",
  "Crypto Readiness Checklist",
  "100 AI Prompts Keuangan",
  "Panduan produksi video tutorial",
];

const offerBenefits = [
  "Materi berbahasa Indonesia",
  "Bisa dicetak atau diisi digital",
  "Cocok untuk pemula",
];

const proofStats = [
  { value: "90+", label: "halaman workbook" },
  { value: "8", label: "modul utama" },
  { value: "100", label: "AI prompt keuangan" },
  { value: "30", label: "hari membangun sistem" },
];

const faqs = [
  {
    q: "Apakah paket ini cocok untuk pemula?",
    a: "Ya. Materi dimulai dari mengenali kondisi saat ini, kemudian bergerak menuju budget, utang, dana darurat, tujuan, dan kesiapan investasi.",
  },
  {
    q: "Apakah harus menyelesaikan semuanya dalam 30 hari?",
    a: "Tidak. Challenge 30 hari adalah struktur pendamping. Kamu boleh memperlambat ritmenya sesuai kondisi keluarga dan waktu yang tersedia.",
  },
  {
    q: "Apakah dashboard bisa digunakan di Google Sheets?",
    a: "Bisa. Paket menyediakan versi Google Sheets native serta file XLSX versi DEMO dan KOSONG.",
  },
  {
    q: "Apakah ini termasuk konsultasi keuangan pribadi?",
    a: "Tidak. Paket ini adalah alat edukasi dan pencatatan. Keputusan investasi, kredit, pajak, hukum, dan asuransi personal tetap perlu diverifikasi pada profesional atau sumber resmi.",
  },
  {
    q: "Apakah saya harus memasukkan data pribadi ke AI?",
    a: "Tidak. Gunakan data anonim, hapus identitas sensitif, minta asumsi ditampilkan, dan verifikasi jawaban penting sebelum mengambil keputusan.",
  },
];

const navLinks = [
  { href: "#isi-paket", label: "Isi Paket" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "#faq", label: "FAQ" },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button
        className="faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{item.q}</span>
        <span className="faq-icon" aria-hidden="true">
          {isOpen ? "–" : "+"}
        </span>
      </button>
      <div
        className="faq-answer-wrap"
        style={{ maxHeight: isOpen ? "300px" : "0px" }}
      >
        <p className="faq-answer">{item.a}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [openFaq, setOpenFaq] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="smv-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap');

        :root{
          --ink:#3D2448;
          --purple:#76508C;
          --lavender:#D8C3E5;
          --lavender-light:#F3EAF7;
          --cream:#F8F2EA;
          --white:#FFFDFB;
          --gold:#C7A85B;
          --text-secondary:#786F7C;
        }

        .smv-root *{ box-sizing:border-box; }
        .smv-root{
          font-family:'Inter', sans-serif;
          color: var(--ink);
          background: var(--white);
          overflow-x: hidden;
          scroll-behavior: smooth;
          line-height: 1.55;
        }
        .smv-root h1, .smv-root h2, .smv-root h3, .smv-root .serif{
          font-family:'Fraunces', serif;
          font-weight: 500;
          letter-spacing: -0.01em;
          margin: 0;
        }
        .smv-root p { margin: 0; }
        .smv-root a { color: inherit; text-decoration: none; }
        .smv-root button { font-family: inherit; cursor: pointer; }
        .smv-root img { max-width: 100%; display:block; }
        .smv-root :focus-visible{
          outline: 2px solid var(--gold);
          outline-offset: 3px;
        }

        .wrap{
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ---------- Announcement bar ---------- */
        .announce{
          background: var(--ink);
          color: var(--white);
          text-align: center;
          font-size: 13px;
          letter-spacing: 0.03em;
          padding: 10px 16px;
        }

        /* ---------- Navbar ---------- */
        .navbar{
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255,253,251,0.92);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(61,36,72,0.08);
        }
        .navbar-inner{
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding: 16px 24px;
          max-width: 1160px;
          margin: 0 auto;
        }
        .brand-block{ display:flex; align-items:center; gap: 12px; }
        .brand-mark{
          width: 40px; height: 40px;
          border-radius: 12px;
          background: linear-gradient(155deg, var(--purple), var(--ink));
          display:flex; align-items:center; justify-content:center;
          color: var(--white);
          font-family:'Fraunces', serif;
          font-size: 20px;
          font-style: italic;
          flex-shrink: 0;
        }
        .brand-name{
          font-family:'Fraunces', serif;
          font-size: 17px;
          font-weight: 600;
          color: var(--ink);
          line-height: 1.1;
        }
        .brand-tagline{
          font-size: 11px;
          color: var(--text-secondary);
          letter-spacing: 0.02em;
        }
        .nav-links{
          display:flex;
          align-items:center;
          gap: 32px;
        }
        .nav-links a{
          font-size: 14px;
          font-weight: 500;
          color: var(--ink);
          padding: 6px 2px;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .nav-links a:hover{ border-color: var(--gold); color: var(--purple); }
        .nav-cta-wrap{ display:flex; align-items:center; gap: 16px; }
        .btn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          border: 1px solid transparent;
          transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease;
          white-space: nowrap;
        }
        .btn-primary{
          background: var(--ink);
          color: var(--white);
        }
        .btn-primary:hover{ background: var(--purple); transform: translateY(-1px); box-shadow: 0 8px 20px rgba(61,36,72,0.25); }
        .btn-secondary{
          background: transparent;
          color: var(--ink);
          border-color: rgba(61,36,72,0.25);
        }
        .btn-secondary:hover{ border-color: var(--purple); color: var(--purple); }
        .btn-gold{
          background: var(--gold);
          color: var(--white);
        }
        .btn-gold:hover{ background:#B4924A; transform: translateY(-1px); box-shadow: 0 8px 20px rgba(199,168,91,0.35); }
        .btn-small{ padding: 9px 18px; font-size: 13px; }

        .menu-toggle{
          display:none;
          background:none;
          border:none;
          font-size: 22px;
          color: var(--ink);
        }

        /* ---------- Hero ---------- */
        .hero{
          padding: 88px 0 72px;
          position: relative;
        }
        .hero-inner{
          display:grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items:center;
        }
        .eyebrow{
          display:inline-flex;
          align-items:center;
          gap: 8px;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--purple);
          background: var(--lavender-light);
          padding: 7px 14px;
          border-radius: 999px;
          margin-bottom: 22px;
        }
        .hero h1{
          font-size: clamp(34px, 4.4vw, 52px);
          line-height: 1.12;
          color: var(--ink);
        }
        .hero h1 em{
          font-style: italic;
          color: var(--purple);
        }
        .hero-desc{
          margin-top: 22px;
          font-size: 17px;
          color: var(--text-secondary);
          max-width: 480px;
        }
        .hero-ctas{
          margin-top: 32px;
          display:flex;
          flex-wrap: wrap;
          gap: 14px;
        }
        .trust-points{
          margin-top: 34px;
          display:flex;
          flex-wrap: wrap;
          gap: 20px 28px;
        }
        .trust-point{
          display:flex;
          align-items:center;
          gap: 8px;
          font-size: 13.5px;
          color: var(--ink);
          font-weight: 500;
        }
        .trust-dot{
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
        }

        /* Hero mockup */
        .hero-visual{
          position: relative;
          height: 460px;
        }
        .hero-visual::before{
          content:"";
          position:absolute;
          inset: -40px -20px auto auto;
          width: 280px; height: 280px;
          background: var(--lavender-light);
          border-radius: 50%;
          z-index: 0;
        }
        .mock-card{
          position:absolute;
          background: var(--white);
          border-radius: 20px;
          box-shadow: 0 24px 48px rgba(61,36,72,0.14);
          border: 1px solid rgba(61,36,72,0.06);
          padding: 20px;
        }
        .mock-workbook{
          width: 240px;
          top: 10px; left: 10px;
          z-index: 3;
        }
        .mock-workbook .cover{
          height: 150px;
          border-radius: 12px;
          background: linear-gradient(150deg, var(--ink), var(--purple));
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          padding: 16px;
          color: var(--white);
        }
        .mock-workbook .cover span:first-child{
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          opacity: 0.75;
        }
        .mock-workbook .cover .title{
          font-family:'Fraunces', serif;
          font-size: 18px;
          line-height: 1.2;
        }
        .mock-workbook .meta{
          margin-top: 12px;
          font-size: 11.5px;
          color: var(--text-secondary);
        }
        .mock-dashboard{
          width: 200px;
          top: 190px; left: 90px;
          z-index: 2;
        }
        .mock-dashboard .bar{
          height: 8px;
          border-radius: 4px;
          background: var(--lavender);
          margin-bottom: 8px;
        }
        .mock-dashboard .bar.b1{ width: 100%; background: var(--purple); }
        .mock-dashboard .bar.b2{ width: 70%; }
        .mock-dashboard .bar.b3{ width: 85%; background: var(--gold); }
        .mock-dashboard .label{
          font-size: 11px;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 10px;
        }
        .mock-prompts{
          width: 168px;
          top: 300px; left: -6px;
          z-index: 4;
          padding: 16px;
        }
        .mock-prompts .badge{
          display:inline-block;
          background: var(--gold);
          color: var(--white);
          font-size: 10px;
          font-weight: 700;
          padding: 3px 9px;
          border-radius: 999px;
          margin-bottom: 8px;
        }
        .mock-prompts .title{
          font-family:'Fraunces', serif;
          font-size: 14.5px;
          line-height: 1.25;
        }
        .deco-line{
          position:absolute;
          border-top: 1.5px solid var(--gold);
          width: 60px;
          top: 60px; right: 24px;
          transform: rotate(-8deg);
        }

        /* ---------- Proof strip ---------- */
        .proof-strip{
          border-top: 1px solid rgba(61,36,72,0.08);
          border-bottom: 1px solid rgba(61,36,72,0.08);
          background: var(--cream);
        }
        .proof-grid{
          display:grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 36px 0;
        }
        .proof-item{
          text-align:center;
          padding: 0 16px;
          border-left: 1px solid rgba(61,36,72,0.1);
        }
        .proof-item:first-child{ border-left: none; }
        .proof-value{
          font-family:'Fraunces', serif;
          font-size: 30px;
          color: var(--purple);
        }
        .proof-label{
          font-size: 12.5px;
          color: var(--text-secondary);
          margin-top: 4px;
        }

        /* ---------- Section shared ---------- */
        section{ padding: 96px 0; }
        .section-head{
          max-width: 640px;
          margin: 0 auto 52px;
          text-align:center;
        }
        .section-head.left{ text-align:left; margin-left:0; }
        .kicker{
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 14px;
          display:block;
        }
        .section-head h2{
          font-size: clamp(26px, 3.2vw, 38px);
          color: var(--ink);
          line-height: 1.2;
        }
        .section-desc{
          margin-top: 18px;
          font-size: 16px;
          color: var(--text-secondary);
        }

        /* ---------- Problem section ---------- */
        .problem-grid{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .problem-card{
          background: var(--lavender-light);
          border-radius: 20px;
          padding: 32px 28px;
          border: 1px solid rgba(61,36,72,0.06);
        }
        .problem-card h3{
          font-size: 19px;
          color: var(--ink);
          margin-bottom: 12px;
        }
        .problem-card p{
          font-size: 14.5px;
          color: var(--text-secondary);
        }

        /* ---------- Modules (dark) ---------- */
        .modules-section{
          background: var(--ink);
          color: var(--white);
        }
        .modules-section .kicker{ color: var(--gold); }
        .modules-section h2{ color: var(--white); }
        .modules-section .section-desc{ color: rgba(255,253,251,0.65); }
        .modules-grid{
          display:grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .module-card{
          background: rgba(255,253,251,0.05);
          border: 1px solid rgba(255,253,251,0.12);
          border-radius: 18px;
          padding: 26px 22px;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .module-card:hover{
          background: rgba(255,253,251,0.09);
          transform: translateY(-3px);
        }
        .module-num{
          font-family:'Fraunces', serif;
          font-style: italic;
          font-size: 15px;
          color: var(--gold);
          margin-bottom: 14px;
          display:block;
        }
        .module-card h3{
          font-size: 17px;
          color: var(--white);
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .module-card p{
          font-size: 13.5px;
          color: rgba(255,253,251,0.6);
        }

        /* ---------- Cara kerja / outcomes + roadmap ---------- */
        .cara-kerja-grid{
          display:grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 64px;
          align-items:start;
        }
        .outcome-list{
          margin-top: 28px;
          display:flex;
          flex-direction:column;
          gap: 16px;
        }
        .outcome-item{
          display:flex;
          align-items:flex-start;
          gap: 12px;
          font-size: 15px;
          color: var(--ink);
        }
        .outcome-check{
          width: 22px; height: 22px;
          border-radius: 50%;
          background: var(--lavender-light);
          color: var(--purple);
          display:flex; align-items:center; justify-content:center;
          font-size: 12px;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .roadmap{
          position: relative;
          padding-left: 28px;
        }
        .roadmap::before{
          content:"";
          position:absolute;
          left: 6px; top: 6px; bottom: 6px;
          width: 1.5px;
          background: var(--lavender);
        }
        .roadmap-item{
          position: relative;
          padding-bottom: 32px;
        }
        .roadmap-item:last-child{ padding-bottom: 0; }
        .roadmap-item::before{
          content:"";
          position:absolute;
          left: -28px; top: 4px;
          width: 13px; height: 13px;
          border-radius: 50%;
          background: var(--white);
          border: 2.5px solid var(--purple);
        }
        .roadmap-range{
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--gold);
        }
        .roadmap-verb{
          font-family:'Fraunces', serif;
          font-size: 20px;
          color: var(--ink);
          margin: 4px 0 4px;
        }
        .roadmap-body{
          font-size: 14px;
          color: var(--text-secondary);
        }

        /* ---------- Bonus section ---------- */
        .bonus-grid{
          display:grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
        }
        .bonus-card{
          border: 1px solid rgba(61,36,72,0.1);
          border-radius: 20px;
          padding: 30px;
          background: var(--white);
          box-shadow: 0 4px 16px rgba(61,36,72,0.04);
        }
        .bonus-top{
          display:flex;
          align-items:center;
          justify-content:space-between;
          margin-bottom: 14px;
        }
        .bonus-num{
          font-family:'Fraunces', serif;
          font-style: italic;
          color: var(--lavender);
          font-size: 26px;
        }
        .bonus-format{
          font-size: 11px;
          font-weight: 600;
          color: var(--purple);
          background: var(--lavender-light);
          padding: 5px 12px;
          border-radius: 999px;
        }
        .bonus-card h3{
          font-size: 19px;
          color: var(--ink);
          margin-bottom: 10px;
        }
        .bonus-card p{
          font-size: 14px;
          color: var(--text-secondary);
        }

        /* ---------- Package details (dark) ---------- */
        .package-section{
          background: var(--ink);
          color: var(--white);
        }
        .package-grid{
          display:grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items:center;
        }
        .package-list{
          display:flex;
          flex-direction: column;
          gap: 0;
        }
        .package-list li{
          list-style:none;
          display:flex;
          align-items:center;
          gap: 14px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(255,253,251,0.1);
          font-size: 15px;
          color: rgba(255,253,251,0.92);
        }
        .package-list li:last-child{ border-bottom: none; }
        .package-bullet{
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
        }
        .package-note{
          margin-top: 20px;
          font-size: 13px;
          color: rgba(255,253,251,0.55);
        }
        .package-visual{
          position:relative;
          height: 340px;
        }
        .file-stack{
          position:absolute;
          border-radius: 16px;
          box-shadow: 0 20px 44px rgba(0,0,0,0.35);
        }
        .file-stack.f1{
          width: 220px; height: 280px;
          background: linear-gradient(160deg, var(--purple), var(--ink));
          top: 10px; left: 30px;
          z-index: 1;
          padding: 22px;
          color: var(--white);
        }
        .file-stack.f1 .ftype{ font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; opacity: 0.7; }
        .file-stack.f1 .ftitle{ font-family:'Fraunces', serif; font-size: 22px; margin-top: 40px; line-height:1.25; }
        .file-stack.f2{
          width: 180px; height: 230px;
          background: var(--lavender-light);
          top: 70px; left: 130px;
          z-index: 2;
          padding: 20px;
        }
        .file-stack.f2 .ftype{ font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--purple); font-weight: 700; }
        .file-stack.f2 .ftitle{ font-family:'Fraunces', serif; font-size: 17px; margin-top: 34px; color: var(--ink); line-height:1.25; }

        /* ---------- Editorial photo ---------- */
        .editorial-section{
          background: var(--cream);
        }
        .editorial-grid{
          display:grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 60px;
          align-items:center;
        }
        .photo-frame{
          position: relative;
          border: 10px solid var(--white);
          border-radius: 18px;
          box-shadow: 0 24px 48px rgba(61,36,72,0.14);
          aspect-ratio: 3 / 4;
          overflow: hidden;
          background: linear-gradient(155deg, var(--lavender-light), var(--lavender));
        }
        .photo-frame .placeholder-note{
          position:absolute;
          inset:0;
          display:flex;
          align-items:center;
          justify-content:center;
          flex-direction:column;
          gap: 10px;
          padding: 32px;
          text-align:center;
          color: var(--purple);
        }
        .photo-frame .placeholder-note svg{ opacity: 0.5; }
        .placeholder-note span{
          font-size: 12.5px;
          color: var(--text-secondary);
          max-width: 220px;
        }
        .photo-frame .gold-accent{
          position:absolute;
          left: -10px; bottom: 28px;
          width: 46px;
          height: 3px;
          background: var(--gold);
        }
        .editorial-quote{
          margin-top: 28px;
          font-family:'Fraunces', serif;
          font-style: italic;
          font-size: 18px;
          color: var(--purple);
          border-left: 2px solid var(--gold);
          padding-left: 18px;
        }

        /* ---------- Offer ---------- */
        .offer-section{
          background: var(--lavender-light);
        }
        .offer-layout{
          display:grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items:center;
        }
        .offer-benefits{
          margin-top: 26px;
          display:flex;
          flex-direction:column;
          gap: 14px;
        }
        .offer-card{
          background: var(--white);
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 24px 56px rgba(61,36,72,0.14);
          border: 1px solid rgba(61,36,72,0.06);
          text-align:center;
        }
        .offer-tag{
          display:inline-block;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--purple);
          background: var(--lavender-light);
          padding: 6px 14px;
          border-radius: 999px;
          margin-bottom: 18px;
        }
        .offer-card h3{
          font-size: 26px;
          color: var(--ink);
        }
        .offer-card .offer-sub{
          margin-top: 10px;
          font-size: 14px;
          color: var(--text-secondary);
        }
        .offer-price-row{
          margin: 28px 0 8px;
          padding: 20px 0;
          border-top: 1px dashed rgba(61,36,72,0.15);
          border-bottom: 1px dashed rgba(61,36,72,0.15);
        }
        .offer-price-label{
          font-size: 12px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 700;
        }
        .offer-price-value{
          font-family:'Fraunces', serif;
          font-size: 24px;
          color: var(--ink);
          margin-top: 6px;
        }
        .offer-card .btn{ width: 100%; margin-top: 20px; }
        .offer-footnote{
          margin-top: 14px;
          font-size: 12px;
          color: var(--text-secondary);
        }

        /* ---------- FAQ ---------- */
        .faq-list{
          max-width: 720px;
          margin: 0 auto;
        }
        .faq-item{
          border-bottom: 1px solid rgba(61,36,72,0.12);
        }
        .faq-question{
          width: 100%;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 20px;
          background: none;
          border: none;
          padding: 24px 4px;
          text-align:left;
          font-size: 16px;
          font-weight: 600;
          color: var(--ink);
        }
        .faq-icon{
          font-family:'Fraunces', serif;
          font-size: 22px;
          color: var(--gold);
          flex-shrink:0;
          width: 24px;
          text-align:center;
        }
        .faq-answer-wrap{
          overflow:hidden;
          transition: max-height 0.35s ease;
        }
        .faq-answer{
          font-size: 14.5px;
          color: var(--text-secondary);
          padding: 0 4px 24px;
          max-width: 620px;
        }
        .faq-item.open .faq-question{ color: var(--purple); }

        /* ---------- Footer ---------- */
        footer{
          background: var(--ink);
          color: rgba(255,253,251,0.7);
          padding: 64px 0 32px;
        }
        .footer-top{
          display:flex;
          justify-content:space-between;
          gap: 40px;
          flex-wrap: wrap;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255,253,251,0.12);
        }
        .footer-brand .brand-name{ color: var(--white); }
        .footer-desc{
          margin-top: 14px;
          font-size: 14px;
          max-width: 320px;
          line-height: 1.6;
        }
        .footer-links{
          display:flex;
          gap: 32px;
        }
        .footer-links a{
          font-size: 14px;
          transition: color 0.2s ease;
        }
        .footer-links a:hover{ color: var(--gold); }
        .footer-bottom{
          padding-top: 28px;
          display:flex;
          justify-content:space-between;
          flex-wrap: wrap;
          gap: 10px;
          font-size: 12.5px;
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 900px){
          .hero-inner, .cara-kerja-grid, .package-grid, .editorial-grid, .offer-layout{
            grid-template-columns: 1fr;
          }
          .hero-visual{ height: 380px; order: -1; margin-bottom: 8px; }
          .modules-grid{ grid-template-columns: repeat(2, 1fr); }
          .problem-grid{ grid-template-columns: 1fr; }
          .bonus-grid{ grid-template-columns: 1fr; }
          .proof-grid{ grid-template-columns: repeat(2, 1fr); row-gap: 24px; }
          .proof-item:nth-child(3){ border-left: none; }
          .nav-links{ display:none; }
          .menu-toggle{ display:block; }
          section{ padding: 64px 0; }
          .hero{ padding: 48px 0 56px; }
        }
        @media (max-width: 900px){
          .nav-mobile{
            display:flex;
            flex-direction:column;
            gap: 4px;
            padding: 8px 24px 18px;
            border-top: 1px solid rgba(61,36,72,0.08);
          }
          .nav-mobile a{
            padding: 12px 4px;
            font-size: 15px;
            font-weight: 500;
            border-bottom: 1px solid rgba(61,36,72,0.06);
          }
        }
        @media (min-width: 901px){
          .nav-mobile{ display:none; }
        }
        @media (max-width: 560px){
          .modules-grid{ grid-template-columns: 1fr; }
          .brand-tagline{ display:none; }
          .nav-cta-wrap .btn-secondary{ display:none; }
        }
      `}</style>

      {/* ANNOUNCEMENT BAR */}
      <div className="announce">
        30-Day Financial Reset • Dibuat untuk keluarga dan perempuan Indonesia
      </div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-inner">
          <div className="brand-block">
            <div className="brand-mark" aria-hidden="true">S</div>
            <div>
              <div className="brand-name">SmartMomVestor</div>
              <div className="brand-tagline">Smart Mom, Smart Money, Better Future</div>
            </div>
          </div>
          <nav className="nav-links" aria-label="Navigasi utama">
            {navLinks.map((n) => (
              <a key={n.href} href={n.href} onClick={(e) => handleNavClick(e, n.href)}>
                {n.label}
              </a>
            ))}
          </nav>
          <div className="nav-cta-wrap">
            <a
              href="#penawaran"
              className="btn btn-primary btn-small"
              onClick={(e) => handleNavClick(e, "#penawaran")}
            >
              Dapatkan Paket
            </a>
            <button
              className="menu-toggle"
              aria-label="Buka menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="nav-mobile">
            {navLinks.map((n) => (
              <a key={n.href} href={n.href} onClick={(e) => handleNavClick(e, n.href)}>
                {n.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="hero">
          <div className="wrap hero-inner">
            <div>
              <span className="eyebrow">Smart Financial Reset Kit™</span>
              <h1>
                Reset keuanganmu dalam <em>30 hari</em>—meski penghasilan belum bertambah.
              </h1>
              <p className="hero-desc">
                Sistem langkah demi langkah untuk menghentikan kebocoran, menata budget,
                membangun dana darurat, dan membuat keputusan keuangan dengan lebih tenang.
              </p>
              <div className="hero-ctas">
                <a
                  href="#isi-paket"
                  className="btn btn-primary"
                  onClick={(e) => handleNavClick(e, "#isi-paket")}
                >
                  Lihat Paket Lengkap →
                </a>
                <a
                  href="#cara-kerja"
                  className="btn btn-secondary"
                  onClick={(e) => handleNavClick(e, "#cara-kerja")}
                >
                  Pelajari isinya ↓
                </a>
              </div>
              <div className="trust-points">
                <span className="trust-point"><span className="trust-dot" />Bahasa Indonesia</span>
                <span className="trust-point"><span className="trust-dot" />Format A4 siap pakai</span>
                <span className="trust-point"><span className="trust-dot" />Bisa digunakan tanpa aplikasi mahal</span>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="deco-line" />
              <div className="mock-card mock-workbook">
                <div className="cover">
                  <span>Workbook</span>
                  <div className="title">Smart Financial Reset Kit</div>
                </div>
                <div className="meta">90+ halaman • A4 • Bahasa Indonesia</div>
              </div>
              <div className="mock-card mock-dashboard">
                <div className="label">Financial Dashboard</div>
                <div className="bar b1" />
                <div className="bar b2" />
                <div className="bar b3" />
              </div>
              <div className="mock-card mock-prompts">
                <span className="badge">100+</span>
                <div className="title">AI Prompts Keuangan</div>
              </div>
            </div>
          </div>
        </section>

        {/* PROOF STRIP */}
        <div className="proof-strip">
          <div className="wrap proof-grid">
            {proofStats.map((s) => (
              <div className="proof-item" key={s.label}>
                <div className="proof-value">{s.value}</div>
                <div className="proof-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PROBLEM SECTION */}
        <section id="masalah">
          <div className="wrap">
            <div className="section-head">
              <span className="kicker">Bukan soal kurang disiplin</span>
              <h2>Kamu mungkin hanya belum punya sistem yang jelas.</h2>
              <p className="section-desc">
                Informasi finansial ada di mana-mana. Yang sering hilang adalah urutan: mulai
                dari mana, kerjakan apa, dan bagaimana tahu bahwa kita bergerak maju.
              </p>
            </div>
            <div className="problem-grid">
              {problemCards.map((c) => (
                <div className="problem-card" key={c.title}>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8 MODULES */}
        <section className="modules-section" id="isi-paket">
          <div className="wrap">
            <div className="section-head">
              <span className="kicker">Delapan modul utama</span>
              <h2>Satu perjalanan utuh dari bingung menjadi lebih terarah.</h2>
              <p className="section-desc">
                Setiap modul punya tujuan, worksheet, pertanyaan refleksi, dan tindakan nyata.
                Bisa dikerjakan berurutan atau dipilih sesuai kebutuhan.
              </p>
            </div>
            <div className="modules-grid">
              {modules.map((m) => (
                <div className="module-card" key={m.num}>
                  <span className="module-num">{m.num}</span>
                  <h3>{m.title}</h3>
                  <p>{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CARA KERJA & HASIL */}
        <section id="cara-kerja">
          <div className="wrap cara-kerja-grid">
            <div>
              <span className="kicker">Cara kerja &amp; hasil</span>
              <h2 style={{ fontSize: "clamp(26px, 3.2vw, 36px)" }}>
                Bukan sekadar selesai mengisi workbook.
              </h2>
              <p className="section-desc" style={{ marginTop: 16 }}>
                Target akhirnya adalah sistem keuangan yang bisa kamu ulang setiap
                bulan—bahkan setelah challenge 30 hari berakhir.
              </p>
              <div className="outcome-list">
                {outcomes.map((o) => (
                  <div className="outcome-item" key={o}>
                    <span className="outcome-check">✓</span>
                    <span>{o}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="roadmap">
              {roadmap.map((r) => (
                <div className="roadmap-item" key={r.range}>
                  <div className="roadmap-range">{r.range}</div>
                  <div className="roadmap-verb">{r.verb}</div>
                  <div className="roadmap-body">{r.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BONUS */}
        <section id="bonus" style={{ background: "var(--cream)" }}>
          <div className="wrap">
            <div className="section-head">
              <span className="kicker">Bonus eksklusif</span>
              <h2>Semua alat yang kamu perlukan ada dalam satu paket.</h2>
            </div>
            <div className="bonus-grid">
              {bonuses.map((b) => (
                <div className="bonus-card" key={b.num}>
                  <div className="bonus-top">
                    <span className="bonus-num">{b.num}</span>
                    <span className="bonus-format">{b.format}</span>
                  </div>
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PACKAGE DETAILS */}
        <section className="package-section" id="rincian-paket">
          <div className="wrap package-grid">
            <div>
              <span className="kicker">Rincian paket</span>
              <h2 style={{ color: "var(--white)", fontSize: "clamp(26px, 3.2vw, 36px)" }}>
                23 file siap pakai, tersusun rapi.
              </h2>
              <ul className="package-list" style={{ marginTop: 28 }}>
                {packageContents.map((p) => (
                  <li key={p}>
                    <span className="package-bullet" />
                    {p}
                  </li>
                ))}
              </ul>
              <p className="package-note">
                Format: PDF, DOCX, XLSX, dan Google Sheets native • Ukuran A4
              </p>
            </div>
            <div className="package-visual" aria-hidden="true">
              <div className="file-stack f1">
                <div className="ftype">Workbook · PDF</div>
                <div className="ftitle">Smart Financial Reset Kit</div>
              </div>
              <div className="file-stack f2">
                <div className="ftype">Dashboard · XLSX</div>
                <div className="ftitle">Cashflow &amp; Budget Tracker</div>
              </div>
            </div>
          </div>
        </section>

        {/* EDITORIAL PHOTO */}
        <section className="editorial-section" id="tentang">
          <div className="wrap editorial-grid">
            <div className="photo-frame">
              <img
                src=""
                alt="Perempuan profesional dalam suasana hangat"
                loading="lazy"
                style={{ display: "none" }}
              />
              <div className="placeholder-note">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <circle cx="9" cy="10" r="2" />
                  <path d="M21 16l-5-5-4 4-3-3-5 5" />
                </svg>
                <span>Ruang untuk foto perempuan (portrait 3:4) — belum dilampirkan pada permintaan ini.</span>
              </div>
              <div className="gold-accent" />
            </div>
            <div>
              <span className="kicker">Keuangan yang terasa manusiawi</span>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)" }}>
                Dibuat untuk perempuan yang ingin lebih tenang saat bicara soal uang.
              </h2>
              <p className="section-desc">
                Smart Financial Reset Kit membantu kamu melihat kondisi keuangan dengan
                jujur, tanpa rasa malu dan tanpa harus menjadi ahli finansial terlebih dahulu.
              </p>
              <p className="editorial-quote">
                "Kejelasan finansial tidak dibangun dalam satu keputusan besar, tetapi
                melalui langkah kecil yang terus diulang."
              </p>
              <a
                href="#penawaran"
                className="btn btn-primary"
                style={{ marginTop: 28 }}
                onClick={(e) => handleNavClick(e, "#penawaran")}
              >
                Mulai perjalanan 30 harimu →
              </a>
            </div>
          </div>
        </section>

        {/* OFFER */}
        <section className="offer-section" id="penawaran">
          <div className="wrap offer-layout">
            <div>
              <span className="kicker">Penawaran</span>
              <h2 style={{ fontSize: "clamp(26px, 3.2vw, 36px)" }}>
                Mulai dari satu langkah kecil hari ini.
              </h2>
              <p className="section-desc">
                Tidak perlu menunggu gaji naik, kondisi sempurna, atau merasa benar-benar
                siap. Mulai dengan melihat kondisi apa adanya dan bangun sistemmu perlahan.
              </p>
              <div className="offer-benefits">
                {offerBenefits.map((b) => (
                  <div className="outcome-item" key={b}>
                    <span className="outcome-check">✓</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="offer-card">
              <span className="offer-tag">PAKET LENGKAP</span>
              <h3>Smart Financial Reset Kit</h3>
              <p className="offer-sub">Workbook + Dashboard + AI Toolkit + Bonus Eksklusif</p>
              <div className="offer-price-row">
                <div className="offer-price-label">Harga peluncuran</div>
                <div className="offer-price-value">Segera diumumkan</div>
              </div>
              <a href="#faq" className="btn btn-gold" onClick={(e) => handleNavClick(e, "#faq")}>
                Lihat Informasi Paket →
              </a>
              <p className="offer-footnote">
                Link checkout akan diaktifkan saat penjualan dibuka.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <div className="wrap">
            <div className="section-head">
              <span className="kicker">FAQ</span>
              <h2>Pertanyaan yang sering diajukan</h2>
            </div>
            <div className="faq-list">
              {faqs.map((f, i) => (
                <FaqItem
                  key={f.q}
                  item={f}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="brand-name">SmartMomVestor</div>
              <div className="brand-tagline" style={{ color: "var(--gold)", marginTop: 4 }}>
                Smart Mom, Smart Money, Better Future
              </div>
              <p className="footer-desc">
                Teman belajar untuk membangun kebiasaan uang yang lebih jelas, tenang, dan
                dapat dipertahankan.
              </p>
            </div>
            <nav className="footer-links" aria-label="Navigasi footer">
              {navLinks.map((n) => (
                <a key={n.href} href={n.href} onClick={(e) => handleNavClick(e, n.href)}>
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="footer-bottom">
            <span>© 2026 SmartMomVestor</span>
            <span>Materi edukasi • Keputusan tetap milik Anda</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
