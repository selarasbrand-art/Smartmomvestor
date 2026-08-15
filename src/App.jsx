import React, { useState } from "react";

/* ============================================================
   DESIGN TOKENS — v3 "Warm Fintech"
   Aksen utama: Magenta #DD3D91
   Ungu gelap #3D2448 | Ungu utama #76508C | Lavender #D8C3E5
   Lavender muda #F3EAF7 | Krem #F8F2EA | Putih hangat #FFFDFB
   Emas lembut #C7A85B | Teks sekunder #786F7C
   Display: 'Fraunces' — Body/UI: 'Inter'
   ============================================================ */

const navLinks = [
  { href: "#isi-paket", label: "Isi Paket" },
  { href: "#fitur", label: "Fitur" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "#bonus", label: "Bonus" },
  { href: "#faq", label: "FAQ" },
];

const heroTags = ["Budgeting", "Dana Darurat", "Utang", "Investasi", "Tips Ahli"];

const featureCards = [
  {
    title: "Financial Dashboard",
    body: "Lacak cashflow, budget, utang, dana darurat, tujuan, dan investasi dalam satu tempat.",
    tile: "pink",
    ghost: "$",
  },
  {
    title: "Habit Tracker 30 Hari",
    body: "Review mingguan, recovery plan, dan rencana kebiasaan uang untuk 90 hari ke depan.",
    tile: "teal",
    ghost: "✓",
  },
  {
    title: "100 AI Prompts Keuangan",
    body: "Prompt siap pakai untuk budgeting, utang, tujuan, investasi, dan kebiasaan.",
    tile: "gold",
    ghost: "AI",
  },
];

const modules = [
  { num: "01", title: "Financial Health Check", body: "Kenali kondisi keuangan tanpa menghakimi diri sendiri.", tile: "gold" },
  { num: "02", title: "Money Leak Detector", body: "Temukan pengeluaran yang tidak lagi memberi nilai.", tile: "pink" },
  { num: "03", title: "Budget Reset", body: "Susun anggaran realistis yang tetap punya ruang bernapas.", tile: "teal" },
  { num: "04", title: "Debt Freedom Planner", body: "Pilih strategi pelunasan utang yang jelas dan aman.", tile: "sky" },
  { num: "05", title: "Emergency Fund Planner", body: "Bangun bantalan agar kejutan tidak berubah menjadi utang.", tile: "gold" },
  { num: "06", title: "Investment Readiness", body: "Pastikan fondasi siap sebelum mengejar imbal hasil.", tile: "pink" },
  { num: "07", title: "AI Financial Coach", body: "Gunakan AI untuk berpikir terstruktur, bukan menyerahkan keputusan.", tile: "teal" },
  { num: "08", title: "30-Day Reset Challenge", body: "Ubah insight menjadi kebiasaan yang dapat dipertahankan.", tile: "sky" },
];

const problemCards = [
  { title: "Uang terasa selalu habis", body: "Transaksi kecil menumpuk, tetapi sulit melihat pola dan kebocoran sebenarnya.", tile: "pink" },
  { title: "Budget cepat ditinggalkan", body: "Anggaran terlalu ideal, tidak menyesuaikan kehidupan nyata dan pendapatan yang berubah.", tile: "gold" },
  { title: "Bingung menentukan prioritas", body: "Utang, dana darurat, tujuan, dan investasi terasa harus dikerjakan sekaligus.", tile: "sky" },
];

const steps3 = [
  { icon: "◎", title: "Lihat kondisi keuanganmu", body: "Data, aset, arus kas, dan kebiasaan belanja — dipetakan tanpa menghakimi." },
  { icon: "▤", title: "Atur ulang sistemnya", body: "Budget, rekening, kalender pembayaran, dan prioritas utang tersusun rapi." },
  { icon: "↗", title: "Tumbuhkan secara konsisten", body: "Tujuan, investasi, dan review bulanan jadi kebiasaan yang bertahan." },
];

const roadmap = [
  { range: "Hari 01–05", verb: "Lihat", body: "Data, aset, dan arus kas" },
  { range: "Hari 06–10", verb: "Hentikan", body: "Kebocoran dan pengeluaran otomatis" },
  { range: "Hari 11–17", verb: "Atur", body: "Budget, rekening, dan kalender" },
  { range: "Hari 18–23", verb: "Lindungi", body: "Utang, dana darurat, dan proteksi" },
  { range: "Hari 24–30", verb: "Tumbuhkan", body: "Tujuan, investasi, dan sistem review" },
];

const outcomes = [
  "Tahu ke mana uang pergi setiap bulan",
  "Punya budget yang realistis dan mudah direview",
  "Memiliki prioritas utang, dana darurat, dan tujuan",
  "Lebih tenang saat mengambil keputusan finansial",
];

const bonuses = [
  { num: "01", title: "Financial Dashboard", body: "Versi DEMO dan KOSONG untuk melacak cashflow, budget, utang, dana darurat, tujuan, dan investasi.", format: "Google Sheets & XLSX", tile: "pink" },
  { num: "02", title: "Financial Habit Tracker", body: "Tracker 30 hari, review mingguan, recovery plan, dan rencana kebiasaan 90 hari.", format: "PDF, DOCX & XLSX", tile: "gold" },
  { num: "03", title: "Crypto Readiness Checklist", body: "Uji fondasi, legalitas, keamanan, alokasi, dan batas risiko sebelum mengambil keputusan.", format: "PDF & DOCX", tile: "teal" },
  { num: "04", title: "100 AI Prompts Keuangan", body: "Prompt siap pakai untuk budgeting, cashflow, utang, tujuan, investasi, kebiasaan, dan bisnis.", format: "PDF & DOCX", tile: "sky" },
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

const offerBenefits = ["Materi berbahasa Indonesia", "Bisa dicetak atau diisi digital", "Cocok untuk pemula"];

const faqs = [
  { q: "Apakah paket ini cocok untuk pemula?", a: "Ya. Materi dimulai dari mengenali kondisi saat ini, kemudian bergerak menuju budget, utang, dana darurat, tujuan, dan kesiapan investasi." },
  { q: "Apakah harus menyelesaikan semuanya dalam 30 hari?", a: "Tidak. Challenge 30 hari adalah struktur pendamping. Kamu boleh memperlambat ritmenya sesuai kondisi keluarga dan waktu yang tersedia." },
  { q: "Apakah dashboard bisa digunakan di Google Sheets?", a: "Bisa. Paket menyediakan versi Google Sheets native serta file XLSX versi DEMO dan KOSONG." },
  { q: "Apakah ini termasuk konsultasi keuangan pribadi?", a: "Tidak. Paket ini adalah alat edukasi dan pencatatan. Keputusan investasi, kredit, pajak, hukum, dan asuransi personal tetap perlu diverifikasi pada profesional atau sumber resmi." },
  { q: "Apakah saya harus memasukkan data pribadi ke AI?", a: "Tidak. Gunakan data anonim, hapus identitas sensitif, minta asumsi ditampilkan, dan verifikasi jawaban penting sebelum mengambil keputusan." },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button className="faq-question" onClick={onToggle} aria-expanded={isOpen}>
        <span>{item.q}</span>
        <span className="faq-icon" aria-hidden="true">{isOpen ? "–" : "+"}</span>
      </button>
      <div className="faq-answer-wrap" style={{ maxHeight: isOpen ? "300px" : "0px" }}>
        <p className="faq-answer">{item.a}</p>
      </div>
    </div>
  );
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function App() {
  const [openFaq, setOpenFaq] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modPage, setModPage] = useState(0);
  const modPages = chunk(modules, 3);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="smv-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600;700;800&display=swap');

        :root{
          --ink:#241820;
          --lavender:#F6CFE3;
          --lavender-light:#FDEEF6;
          --cream:#F8F2EA;
          --white:#FFFDFB;
          --gold:#C7A85B;
          --text-secondary:#7A6E76;
          --accent:#DD3D91;
          --accent-dark:#A32D6C;
          --accent-light:#FBE3F0;
          --tile-pink:#F6C9E1;
          --tile-teal:#A9C9C4;
          --tile-sky:#C7D6EA;
          --tile-gold:#F0D48A;
          --r-lg: 32px;
          --r-md: 22px;
          --r-sm: 14px;
        }

        .smv-root *{ box-sizing:border-box; }
        .smv-root{
          font-family:'Inter', sans-serif;
          color: var(--ink);
          background: var(--white);
          overflow-x: hidden;
          scroll-behavior: smooth;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }
        .smv-root h1, .smv-root h2, .smv-root h3, .smv-root .serif{
          font-family:'Fraunces', serif;
          font-weight: 600;
          letter-spacing: -0.01em;
          margin: 0;
        }
        .smv-root p { margin: 0; }
        .smv-root a { color: inherit; text-decoration: none; }
        .smv-root button { font-family: inherit; cursor: pointer; }
        .smv-root img { max-width: 100%; display:block; }
        .smv-root :focus-visible{ outline: 2px solid var(--accent); outline-offset: 3px; }

        .wrap{ max-width: 1180px; margin: 0 auto; padding: 0 24px; }

        .announce{
          background: var(--ink); color: var(--white); text-align: center;
          font-size: 13px; letter-spacing: 0.03em; padding: 10px 16px;
        }

        /* ---------- Navbar ---------- */
        .navbar{ padding: 24px 24px 12px; position: sticky; top: 0; z-index: 50; background: var(--white); }
        .navbar-inner{
          max-width: 1180px; margin: 0 auto;
          display:flex; align-items:center; justify-content:space-between; gap: 16px;
        }
        .nav-links{ display:flex; align-items:center; gap: 30px; }
        .nav-links a{ font-size: 14px; font-weight: 600; color: var(--ink); transition: color 0.2s ease; }
        .nav-links a:hover{ color: var(--accent); }
        .brand-block{ display:flex; align-items:center; gap: 10px; }
        .brand-mark{
          width: 38px; height: 38px; border-radius: 11px;
          background: linear-gradient(155deg, var(--accent), var(--ink));
          display:flex; align-items:center; justify-content:center;
          color: var(--white); font-family:'Fraunces', serif; font-size: 19px; font-style: italic;
          flex-shrink: 0;
        }
        .brand-name{ font-family:'Fraunces', serif; font-size: 17px; font-weight: 700; color: var(--ink); }
        .nav-actions{ display:flex; align-items:center; gap: 10px; }

        .btn{
          display:inline-flex; align-items:center; justify-content:center; gap: 8px;
          padding: 13px 24px; border-radius: 999px; font-size: 14px; font-weight: 700;
          border: 1.5px solid transparent; transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease;
          white-space: nowrap;
        }
        .btn-primary{ background: var(--accent); color: var(--white); }
        .btn-primary:hover{ background: var(--accent-dark); transform: translateY(-1px); box-shadow: 0 12px 24px rgba(221,61,145,0.3); }
        .btn-secondary{ background: transparent; color: var(--ink); border-color: rgba(61,36,72,0.18); }
        .btn-secondary:hover{ border-color: var(--accent); color: var(--accent); }
        .btn-outline-pill{ background: var(--white); color: var(--ink); border-color: rgba(61,36,72,0.15); }
        .btn-outline-pill:hover{ border-color: var(--accent); }
        .btn-small{ padding: 10px 20px; font-size: 13px; }
        .arrow-btn{
          width: 44px; height: 44px; border-radius: 50%; border: 1.5px solid rgba(61,36,72,0.15);
          background: var(--white); display:flex; align-items:center; justify-content:center;
          font-size: 16px; color: var(--ink); flex-shrink: 0; transition: background 0.2s ease, border-color 0.2s ease;
        }
        .arrow-btn:hover{ background: var(--accent-light); border-color: var(--accent); }
        .menu-toggle{ display:none; background:none; border:none; font-size: 20px; color: var(--ink); padding: 8px; }
        .nav-mobile{ display:none; }

        /* ---------- Hero (split) ---------- */
        .hero{ padding: 48px 0 80px; }
        .hero-grid{
          display:grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items:center;
        }
        .hero-eyebrow{ font-size: 12.5px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--accent); margin-bottom: 18px; display:block; }
        .hero-copy h1{
          font-size: clamp(32px, 4.6vw, 54px); line-height: 1.14; color: var(--ink);
        }
        .hero-copy h1 .accent-word{ color: var(--accent); font-style: italic; }
        .hero-desc{ margin-top: 22px; font-size: 16.5px; line-height: 1.7; color: var(--text-secondary); max-width: 460px; }
        .hero-ctas{ margin-top: 32px; display:flex; align-items:center; gap: 16px; flex-wrap: wrap; }
        .hero-note{ margin-top: 12px; font-size: 12.5px; color: var(--text-secondary); }
        .hero-divider{ margin: 34px 0 20px; border: none; border-top: 1px solid rgba(61,36,72,0.12); max-width: 420px; }
        .hero-tags{ display:flex; flex-wrap: wrap; gap: 10px; }
        .hero-tag{
          font-size: 12.5px; font-weight: 600; color: var(--ink);
          border: 1.5px solid rgba(61,36,72,0.14); border-radius: 999px; padding: 7px 16px;
        }

        /* Hero visual */
        .hero-visual{ position: relative; height: 420px; display:flex; align-items:center; justify-content:center; }
        .hero-ring{
          position:absolute; border-radius: 50%; border: 1px solid rgba(221,61,145,0.18);
        }
        .hero-ring.r1{ width: 380px; height: 380px; }
        .hero-ring.r2{ width: 300px; height: 300px; }
        .hero-card{
          position:absolute; border-radius: 24px; padding: 22px;
          box-shadow: 0 30px 60px rgba(61,36,72,0.18);
        }
        .hero-card-back{
          width: 230px; height: 140px; top: 48%; left: 8%;
          background: linear-gradient(150deg, var(--ink), var(--accent-dark));
          color: var(--white);
        }
        .hero-card-front{
          width: 250px; height: 155px; top: 30%; left: 30%;
          background: linear-gradient(135deg, var(--accent), var(--accent-dark));
          color: var(--white);
        }
        .hero-card span{ font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; opacity: 0.75; }
        .hero-card .hc-title{ font-family:'Fraunces', serif; font-size: 16px; margin-top: 8px; line-height: 1.25; }
        .hero-card .hc-bottom{ position:absolute; bottom: 18px; left: 22px; right: 22px; display:flex; justify-content:space-between; align-items:flex-end; font-size: 11px; }
        .hero-stat-card{
          position:absolute; top: 6%; right: 4%; width: 132px;
          background: var(--white); border-radius: 18px; padding: 14px;
          box-shadow: 0 16px 32px rgba(61,36,72,0.12);
        }
        .hero-stat-card .label{ font-size: 10px; color: var(--text-secondary); margin-bottom: 8px; }
        .hero-stat-bars{ display:flex; align-items:flex-end; gap: 4px; height: 32px; }
        .hero-stat-bars span{ flex:1; background: var(--accent); border-radius: 3px; opacity: 0.75; }
        .hero-badge-float{
          position:absolute; bottom: 6%; right: 14%; width: 46px; height: 46px; border-radius: 50%;
          background: var(--gold); display:flex; align-items:center; justify-content:center;
          color: var(--white); font-size: 18px; box-shadow: 0 12px 24px rgba(199,168,91,0.4);
        }

        /* Format strip */
        .format-strip{ text-align:center; padding: 0 0 8px; }
        .format-strip p{ font-size: 12.5px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: var(--text-secondary); margin-bottom: 18px; }
        .format-row{ display:flex; justify-content:center; align-items:center; gap: 34px; flex-wrap: wrap; }
        .format-chip{ font-size: 15px; font-weight: 700; color: var(--ink); opacity: 0.55; }

        /* ---------- Section shared ---------- */
        section{ padding: 96px 0; }
        .section-head{ max-width: 640px; margin: 0 auto 48px; text-align:center; }
        .section-head.left{ text-align:left; margin: 0 0 48px; }
        .kicker{
          font-size: 12.5px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--white); margin-bottom: 16px; display:inline-block;
          background: var(--accent); padding: 7px 16px; border-radius: 999px;
        }
        .kicker.soft{ background: var(--accent-light); color: var(--accent-dark); }
        .section-head h2{ font-size: clamp(26px, 3.4vw, 40px); color: var(--ink); line-height: 1.25; }
        .section-desc{ margin-top: 18px; font-size: 15.5px; line-height: 1.7; color: var(--text-secondary); }

        /* ---------- Features (varied card grid) ---------- */
        .features-head{ display:grid; grid-template-columns: 1.3fr 1fr; gap: 40px; align-items:end; margin-bottom: 44px; }
        .features-head h2{ font-size: clamp(24px, 3vw, 36px); line-height: 1.35; }
        .features-head h2 .accent-word{ color: var(--accent); }
        .features-head .side-note{ font-size: 14.5px; color: var(--text-secondary); text-align: right; }
        .features-grid{ display:grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 20px; }
        .feature-illustration{
          grid-column: span 1; border-radius: var(--r-md); overflow:hidden; position:relative;
          background: linear-gradient(160deg, var(--lavender-light), var(--lavender));
          min-height: 300px; display:flex; align-items:center; justify-content:center;
        }
        .feature-illustration .ghost-mark{ font-family:'Fraunces', serif; font-style: italic; font-size: 90px; color: rgba(61,36,72,0.1); }
        .feature-card{
          border-radius: var(--r-md); padding: 26px; min-height: 300px; position: relative; overflow: hidden;
          display:flex; flex-direction:column; justify-content:flex-end;
        }
        .feature-card .ghost{
          position:absolute; top: 16px; right: 16px; font-family:'Fraunces', serif; font-style: italic;
          font-size: 56px; opacity: 0.18;
        }
        .feature-card h3{ font-size: 17px; color: var(--ink); margin-bottom: 8px; position: relative; z-index: 1; }
        .feature-card p{ font-size: 13.5px; color: var(--text-secondary); position: relative; z-index: 1; }
        .fc-pink{ background: var(--tile-pink); }
        .fc-teal{ background: var(--tile-teal); }
        .fc-gold{ background: var(--tile-gold); }

        /* ---------- Problem section ---------- */
        .problem-grid{ display:grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .problem-card{ border-radius: var(--r-md); padding: 30px 26px; border: 1px solid rgba(61,36,72,0.06); }
        .problem-card h3{ font-size: 18px; color: var(--ink); margin-bottom: 10px; }
        .problem-card p{ font-size: 14px; color: var(--text-secondary); }

        /* ---------- Isi Paket: carousel ---------- */
        .paket-card{ background: var(--lavender-light); border-radius: 40px; padding: 52px 44px; }
        .paket-head{ display:flex; justify-content:space-between; align-items:flex-start; gap: 24px; flex-wrap: wrap; margin-bottom: 40px; }
        .paket-head h2{ font-size: clamp(24px, 3vw, 32px); }
        .paket-head p{ max-width: 340px; font-size: 14.5px; color: var(--text-secondary); text-align: right; }
        .module-grid{ display:grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .module-card{ background: var(--white); border-radius: var(--r-md); padding: 26px; display:flex; flex-direction:column; gap: 16px; min-height: 260px; border: 1px solid rgba(61,36,72,0.05); }
        .module-card.featured{ background: var(--accent); color: var(--white); }
        .module-top{ display:flex; align-items:center; justify-content:space-between; }
        .module-icon-badge{ width: 42px; height: 42px; border-radius: 14px; display:flex; align-items:center; justify-content:center; font-size: 14px; font-weight: 800; color: var(--ink); }
        .module-arrow{ width: 30px; height: 30px; border-radius: 50%; display:flex; align-items:center; justify-content:center; background: rgba(61,36,72,0.06); font-size: 13px; }
        .module-card.featured .module-arrow{ background: rgba(255,255,255,0.2); color: var(--white); }
        .module-card h3{ font-size: 18px; line-height: 1.3; }
        .module-card p{ font-size: 13.5px; color: var(--text-secondary); }
        .module-card.featured p{ color: rgba(255,253,251,0.85); }
        .module-visual{ margin-top: auto; height: 86px; border-radius: var(--r-sm); display:flex; align-items:center; justify-content:center; font-family:'Fraunces', serif; font-style: italic; font-size: 26px; color: var(--ink); }
        .paket-footer{ display:flex; align-items:center; justify-content:center; gap: 20px; margin-top: 36px; }
        .dots{ display:flex; gap: 8px; }
        .dot{ width: 8px; height: 8px; border-radius: 50%; background: rgba(61,36,72,0.2); border:none; padding:0; cursor:pointer; }
        .dot.active{ background: var(--accent); width: 24px; border-radius: 999px; transition: width 0.2s ease; }

        /* ---------- Cara kerja (roadmap) ---------- */
        .cara-kerja-grid{ display:grid; grid-template-columns: 0.9fr 1.1fr; gap: 60px; align-items:start; }
        .outcome-list{ margin-top: 28px; display:flex; flex-direction:column; gap: 15px; }
        .outcome-item{ display:flex; align-items:flex-start; gap: 12px; font-size: 14.5px; color: var(--ink); }
        .outcome-check{ width: 23px; height: 23px; border-radius: 50%; background: var(--accent-light); color: var(--accent-dark); display:flex; align-items:center; justify-content:center; font-size: 12px; flex-shrink: 0; margin-top: 1px; font-weight:700; }
        .roadmap{ position: relative; padding-left: 28px; }
        .roadmap::before{ content:""; position:absolute; left: 5px; top: 6px; bottom: 6px; width: 1.5px; background: var(--lavender); }
        .roadmap-item{ position: relative; padding-bottom: 32px; }
        .roadmap-item:last-child{ padding-bottom: 0; }
        .roadmap-item::before{ content:""; position:absolute; left: -28px; top: 4px; width: 13px; height: 13px; border-radius: 50%; background: var(--white); border: 2.5px solid var(--accent); }
        .roadmap-range{ font-size: 11.5px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--gold); }
        .roadmap-verb{ font-family:'Fraunces', serif; font-size: 20px; color: var(--ink); margin: 5px 0; }
        .roadmap-body{ font-size: 14px; color: var(--text-secondary); }

        /* ---------- Dark CTA banner (3 steps) ---------- */
        .steps-banner{ background: linear-gradient(135deg, var(--ink) 0%, var(--accent-dark) 130%); border-radius: 40px; padding: 56px 40px; color: var(--white); }
        .steps-grid{ display:grid; grid-template-columns: 0.85fr 1.15fr; gap: 56px; align-items:center; }
        .balance-card{ background: rgba(0,0,0,0.28); border: 1px solid rgba(255,255,255,0.12); border-radius: 28px; padding: 30px; }
        .balance-top{ display:flex; justify-content:space-between; align-items:center; margin-bottom: 40px; }
        .balance-pill{ font-size: 11.5px; font-weight: 700; background: rgba(255,255,255,0.12); padding: 6px 14px; border-radius: 999px; }
        .balance-label{ font-size: 12.5px; color: rgba(255,253,251,0.6); margin-bottom: 8px; }
        .balance-value{ font-family:'Fraunces', serif; font-size: 30px; }
        .balance-actions{ margin-top: 28px; display:flex; gap: 10px; }
        .balance-btn{ flex:1; text-align:center; padding: 11px; border-radius: 999px; background: rgba(255,255,255,0.1); font-size: 12.5px; font-weight: 600; }
        .balance-btn.accent{ background: var(--accent); }
        .steps-copy h2{ color: var(--white); font-size: clamp(24px, 3vw, 34px); }
        .steps-list{ margin-top: 30px; display:flex; flex-direction:column; gap: 22px; }
        .step-row{ display:flex; gap: 16px; align-items:flex-start; }
        .step-icon{ width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.12); display:flex; align-items:center; justify-content:center; font-size: 15px; flex-shrink: 0; }
        .step-row h4{ font-family:'Fraunces', serif; font-size: 16px; font-weight: 600; margin-bottom: 4px; }
        .step-row p{ font-size: 13.5px; color: rgba(255,253,251,0.68); }

        /* ---------- Bonus ---------- */
        .bonus-grid{ display:grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .bonus-card{ border-radius: var(--r-md); padding: 28px; background: var(--white); border: 1px solid rgba(61,36,72,0.08); }
        .bonus-top{ display:flex; align-items:center; justify-content:space-between; margin-bottom: 14px; }
        .bonus-icon{ width: 44px; height: 44px; border-radius: 14px; display:flex; align-items:center; justify-content:center; font-family:'Fraunces', serif; font-style: italic; font-size: 17px; color: var(--ink); }
        .bonus-format{ font-size: 11px; font-weight: 700; color: var(--accent-dark); background: var(--accent-light); padding: 5px 12px; border-radius: 999px; }
        .bonus-card h3{ font-size: 18px; color: var(--ink); margin-bottom: 8px; }
        .bonus-card p{ font-size: 13.5px; color: var(--text-secondary); }

        /* ---------- Package details ---------- */
        .package-section{ background: var(--ink); color: var(--white); border-radius: var(--r-lg); padding: 64px 44px; max-width: 1180px; margin: 0 auto; }
        .package-grid{ display:grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items:center; }
        .package-list li{ list-style:none; display:flex; align-items:center; gap: 12px; padding: 14px 0; border-bottom: 1px solid rgba(255,253,251,0.1); font-size: 14.5px; color: rgba(255,253,251,0.92); }
        .package-list li:last-child{ border-bottom: none; }
        .package-bullet{ width: 7px; height: 7px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }
        .package-note{ margin-top: 18px; font-size: 12.5px; color: rgba(255,253,251,0.55); }
        .package-visual{ display:grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .pv-tile{ border-radius: var(--r-sm); padding: 20px; height: 130px; display:flex; flex-direction:column; justify-content:space-between; }
        .pv-tile span{ font-size: 10px; letter-spacing: 0.06em; text-transform:uppercase; opacity: 0.8; }
        .pv-tile b{ font-family:'Fraunces', serif; font-size: 15px; font-weight: 600; }

        /* ---------- Editorial photo ---------- */
        .editorial-section{ background: var(--cream); }
        .editorial-grid{ display:grid; grid-template-columns: 0.85fr 1.15fr; gap: 56px; align-items:center; }
        .photo-frame{ position: relative; border-radius: var(--r-lg); box-shadow: 0 24px 48px rgba(61,36,72,0.14); aspect-ratio: 3 / 4; overflow: hidden; background: linear-gradient(155deg, var(--lavender-light), var(--lavender)); }
        .photo-frame .placeholder-note{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center; flex-direction:column; gap: 10px; padding: 32px; text-align:center; color: var(--accent-dark); }
        .placeholder-note span{ font-size: 12.5px; color: var(--text-secondary); max-width: 220px; }
        .editorial-quote{ margin-top: 26px; font-family:'Fraunces', serif; font-style: italic; font-size: 18px; color: var(--accent-dark); border-left: 3px solid var(--accent); padding-left: 18px; }

        /* ---------- Offer / Pricing ---------- */
        .offer-section{ background: var(--lavender-light); }
        .offer-layout{ display:grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items:center; }
        .offer-benefits{ margin-top: 24px; display:flex; flex-direction:column; gap: 12px; }
        .offer-card{ background: var(--white); border-radius: var(--r-lg); padding: 42px; box-shadow: 0 24px 56px rgba(61,36,72,0.14); text-align:center; }
        .offer-card h3{ font-size: 25px; color: var(--ink); }
        .offer-card .offer-sub{ margin-top: 8px; font-size: 13.5px; color: var(--text-secondary); }
        .offer-price-row{ margin: 26px 0 8px; padding: 18px 0; border-top: 1px dashed rgba(61,36,72,0.15); border-bottom: 1px dashed rgba(61,36,72,0.15); }
        .offer-price-label{ font-size: 11.5px; letter-spacing: 0.05em; text-transform: uppercase; color: var(--accent); font-weight: 700; }
        .offer-price-value{ font-family:'Fraunces', serif; font-size: 22px; color: var(--ink); margin-top: 6px; }
        .offer-card .btn{ width: 100%; margin-top: 18px; }
        .offer-footnote{ margin-top: 14px; font-size: 11.5px; color: var(--text-secondary); }

        /* ---------- FAQ ---------- */
        .faq-list{ max-width: 720px; margin: 0 auto; }
        .faq-item{ border-bottom: 1px solid rgba(61,36,72,0.12); }
        .faq-question{ width: 100%; display:flex; align-items:center; justify-content:space-between; gap: 20px; background: none; border: none; padding: 24px 4px; text-align:left; font-size: 15.5px; font-weight: 700; color: var(--ink); }
        .faq-icon{ font-family:'Fraunces', serif; font-size: 20px; color: var(--accent); flex-shrink:0; width: 22px; text-align:center; }
        .faq-answer-wrap{ overflow:hidden; transition: max-height 0.35s ease; }
        .faq-answer{ font-size: 14px; color: var(--text-secondary); padding: 0 4px 24px; max-width: 620px; }
        .faq-item.open .faq-question{ color: var(--accent-dark); }

        footer{ padding: 40px 0 44px; border-top: 1px solid rgba(61,36,72,0.08); margin-top: 20px; }
        .footer-bottom{ display:flex; justify-content:space-between; flex-wrap: wrap; gap: 10px; font-size: 12.5px; color: var(--text-secondary); }

        /* ---------- Responsive ---------- */
        @media (max-width: 960px){
          .hero-grid, .cara-kerja-grid, .package-grid, .editorial-grid, .offer-layout, .steps-grid, .features-head{ grid-template-columns: 1fr; }
          .features-head .side-note{ text-align:left; }
          .features-grid{ grid-template-columns: 1fr 1fr; }
          .feature-illustration{ grid-column: span 2; min-height: 220px; }
          .module-grid{ grid-template-columns: 1fr; }
          .problem-grid{ grid-template-columns: 1fr; }
          .bonus-grid{ grid-template-columns: 1fr; }
          .nav-links{ display:none; }
          .menu-toggle{ display:block; }
          section{ padding: 64px 0; }
          .hero{ padding: 28px 0 56px; }
          .hero-visual{ height: 320px; order: -1; }
          .paket-card{ padding: 34px 22px; border-radius: 28px; }
          .paket-head p{ text-align:left; }
          .package-section{ padding: 44px 22px; border-radius: 28px; }
          .package-visual{ grid-template-columns: 1fr; }
          .steps-banner{ padding: 40px 22px; border-radius: 28px; }
        }
        @media (max-width: 960px){
          .navbar{ padding: 18px 16px 8px; }
          .nav-mobile{ display:flex; flex-direction:column; gap: 2px; margin-top: 14px; background: var(--lavender-light); border-radius: 20px; padding: 8px; }
          .nav-mobile a{ padding: 12px 14px; font-size: 14.5px; font-weight: 600; border-radius: 12px; }
          .nav-mobile a:active{ background: var(--white); }
        }
        @media (max-width: 560px){
          .brand-name{ font-size: 15px; }
          .hero-desc{ max-width: 100%; }
          .format-row{ gap: 20px; }
        }
      `}</style>

      <div className="announce">30-Day Financial Reset • Dibuat untuk keluarga dan perempuan Indonesia</div>

      <header className="navbar">
        <div className="navbar-inner">
          <div className="brand-block">
            <div className="brand-mark" aria-hidden="true">S</div>
            <span className="brand-name">SmartMomVestor</span>
          </div>
          <nav className="nav-links" aria-label="Navigasi utama">
            {navLinks.map((n) => (
              <a key={n.href} href={n.href} onClick={(e) => handleNavClick(e, n.href)}>{n.label}</a>
            ))}
          </nav>
          <div className="nav-actions">
            <a href="#faq" className="btn btn-secondary btn-small" onClick={(e) => handleNavClick(e, "#faq")}>FAQ</a>
            <a href="#penawaran" className="btn btn-primary btn-small" onClick={(e) => handleNavClick(e, "#penawaran")}>Dapatkan Paket</a>
            <button className="menu-toggle" aria-label="Buka menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="wrap">
            <div className="nav-mobile">
              {navLinks.map((n) => (
                <a key={n.href} href={n.href} onClick={(e) => handleNavClick(e, n.href)}>{n.label}</a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="hero-eyebrow">Smart Financial Reset Kit™</span>
              <h1>
                Teman lebih <span className="accent-word">cerdas</span> untuk<br />
                mengambil keputusan finansial.
              </h1>
              <p className="hero-desc">
                Sistem langkah demi langkah untuk menghentikan kebocoran, menata budget,
                membangun dana darurat, dan reset keuanganmu dalam 30 hari — meski
                penghasilan belum bertambah.
              </p>
              <div className="hero-ctas">
                <a href="#penawaran" className="btn btn-primary" onClick={(e) => handleNavClick(e, "#penawaran")}>
                  Dapatkan Info Harga →
                </a>
                <a href="#cara-kerja" className="btn btn-secondary" onClick={(e) => handleNavClick(e, "#cara-kerja")}>
                  Lihat Cara Kerja
                </a>
              </div>
              <p className="hero-note">Notifikasi harga &amp; jadwal peluncuran dikirim saat pendaftaran dibuka.</p>
              <hr className="hero-divider" />
              <div className="hero-tags">
                {heroTags.map((t) => <span className="hero-tag" key={t}>{t}</span>)}
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="hero-ring r1" />
              <div className="hero-ring r2" />
              <div className="hero-card hero-card-back">
                <span>Dashboard</span>
                <div className="hc-title">Budget &amp; Cashflow</div>
                <div className="hc-bottom"><span>DEMO</span><span>2026</span></div>
              </div>
              <div className="hero-card hero-card-front">
                <span>Workbook</span>
                <div className="hc-title">Smart Financial<br />Reset Kit</div>
                <div className="hc-bottom"><span>90+ hal.</span><span>A4</span></div>
              </div>
              <div className="hero-stat-card">
                <div className="label">Progress modul</div>
                <div className="hero-stat-bars">
                  <span style={{ height: "40%" }} /><span style={{ height: "70%" }} />
                  <span style={{ height: "55%" }} /><span style={{ height: "90%" }} />
                  <span style={{ height: "65%" }} />
                </div>
              </div>
              <div className="hero-badge-float">✓</div>
            </div>
          </div>

          <div className="format-strip wrap" style={{ marginTop: 64 }}>
            <p>Tersedia dalam format</p>
            <div className="format-row">
              {["PDF", "DOCX", "XLSX", "Google Sheets"].map((f) => (
                <span className="format-chip" key={f}>{f}</span>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="fitur">
          <div className="wrap">
            <span className="kicker soft">Fitur</span>
            <div className="features-head">
              <h2>
                Capai <span className="accent-word">kejelasan finansial</span> dan kendalikan
                masa depanmu dengan alat yang dirancang untuk menyederhanakan pengelolaan uang.
              </h2>
              <p className="side-note">Semua yang kamu butuhkan, tanpa yang berlebihan.</p>
            </div>
            <div className="features-grid">
              <div className="feature-illustration">
                <span className="ghost-mark">S</span>
              </div>
              {featureCards.map((f) => (
                <div className={`feature-card fc-${f.tile}`} key={f.title}>
                  <span className="ghost">{f.ghost}</span>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section id="masalah" style={{ background: "var(--cream)" }}>
          <div className="wrap">
            <div className="section-head">
              <span className="kicker soft">Bukan soal kurang disiplin</span>
              <h2>Kamu mungkin hanya belum punya sistem yang jelas.</h2>
              <p className="section-desc">
                Informasi finansial ada di mana-mana. Yang sering hilang adalah urutan: mulai
                dari mana, kerjakan apa, dan bagaimana tahu bahwa kita bergerak maju.
              </p>
            </div>
            <div className="problem-grid">
              {problemCards.map((c) => (
                <div className="problem-card" key={c.title} style={{ background: `var(--tile-${c.tile})` }}>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ISI PAKET — carousel */}
        <section id="isi-paket">
          <div className="wrap">
            <div className="paket-card">
              <div className="paket-head">
                <div>
                  <span className="kicker soft">Delapan modul utama</span>
                  <h2>Satu perjalanan utuh dari<br />bingung menjadi lebih terarah.</h2>
                </div>
                <p>
                  Setiap modul punya tujuan, worksheet, pertanyaan refleksi, dan tindakan nyata
                  yang akan diajarkan dalam Smart Financial Reset Kit.
                </p>
              </div>
              <div className="module-grid">
                {modPages[modPage].map((m, i) => (
                  <div className={`module-card ${i === 1 ? "featured" : ""}`} key={m.num}>
                    <div className="module-top">
                      <div className="module-icon-badge" style={{ background: i === 1 ? "rgba(255,255,255,0.18)" : `var(--tile-${m.tile})`, color: i === 1 ? "#fff" : "var(--ink)" }}>
                        {m.num}
                      </div>
                      <div className="module-arrow">↗</div>
                    </div>
                    <h3>{m.title}</h3>
                    <p>{m.body}</p>
                    <div className="module-visual" style={{ background: i === 1 ? "rgba(255,255,255,0.12)" : `var(--tile-${m.tile})`, color: i === 1 ? "#fff" : "var(--ink)" }}>
                      {m.num}
                    </div>
                  </div>
                ))}
              </div>
              <div className="paket-footer">
                <button className="arrow-btn" aria-label="Modul sebelumnya" onClick={() => setModPage((p) => Math.max(0, p - 1))}>←</button>
                <div className="dots">
                  {modPages.map((_, i) => (
                    <button key={i} className={`dot ${i === modPage ? "active" : ""}`} aria-label={`Halaman modul ${i + 1}`} onClick={() => setModPage(i)} />
                  ))}
                </div>
                <button className="arrow-btn" aria-label="Modul berikutnya" onClick={() => setModPage((p) => Math.min(modPages.length - 1, p + 1))}>→</button>
              </div>
            </div>
          </div>
        </section>

        {/* CARA KERJA & HASIL */}
        <section id="cara-kerja">
          <div className="wrap cara-kerja-grid">
            <div>
              <span className="kicker soft">Cara kerja &amp; hasil</span>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)" }}>Bukan sekadar selesai mengisi workbook.</h2>
              <p className="section-desc" style={{ marginTop: 14 }}>
                Target akhirnya adalah sistem keuangan yang bisa kamu ulang setiap
                bulan—bahkan setelah challenge 30 hari berakhir.
              </p>
              <div className="outcome-list">
                {outcomes.map((o) => (
                  <div className="outcome-item" key={o}><span className="outcome-check">✓</span><span>{o}</span></div>
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

        {/* DARK STEPS BANNER */}
        <section style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="steps-banner">
              <div className="steps-grid">
                <div className="balance-card">
                  <div className="balance-top">
                    <span className="balance-pill">Reset Progress</span>
                    <span aria-hidden="true">◐</span>
                  </div>
                  <div className="balance-label">Modul terselesaikan</div>
                  <div className="balance-value">5 / 8 modul</div>
                  <div className="balance-actions">
                    <div className="balance-btn">Lihat detail</div>
                    <div className="balance-btn accent">Lanjutkan →</div>
                  </div>
                </div>
                <div className="steps-copy">
                  <span className="kicker" style={{ background: "rgba(255,255,255,0.14)", color: "var(--white)" }}>3 langkah mudah</span>
                  <h2>Mulai Reset Keuanganmu dalam 3 Langkah</h2>
                  <div className="steps-list">
                    {steps3.map((s) => (
                      <div className="step-row" key={s.title}>
                        <div className="step-icon">{s.icon}</div>
                        <div>
                          <h4>{s.title}</h4>
                          <p>{s.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BONUS */}
        <section id="bonus">
          <div className="wrap">
            <div className="section-head">
              <span className="kicker soft">Bonus eksklusif</span>
              <h2>Semua alat yang kamu perlukan ada dalam satu paket.</h2>
            </div>
            <div className="bonus-grid">
              {bonuses.map((b) => (
                <div className="bonus-card" key={b.num}>
                  <div className="bonus-top">
                    <div className="bonus-icon" style={{ background: `var(--tile-${b.tile})` }}>{b.num}</div>
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
        <section id="rincian-paket" style={{ background: "var(--cream)" }}>
          <div className="package-section">
            <div className="package-grid">
              <div>
                <span className="kicker" style={{ background: "rgba(255,255,255,0.1)", color: "var(--accent)" }}>Rincian paket</span>
                <h2 style={{ color: "var(--white)", fontSize: "clamp(24px, 3vw, 34px)" }}>23 file siap pakai, tersusun rapi.</h2>
                <ul className="package-list" style={{ marginTop: 24 }}>
                  {packageContents.map((p) => (<li key={p}><span className="package-bullet" />{p}</li>))}
                </ul>
                <p className="package-note">Format: PDF, DOCX, XLSX, dan Google Sheets native • Ukuran A4</p>
              </div>
              <div className="package-visual" aria-hidden="true">
                <div className="pv-tile" style={{ background: "var(--tile-pink)" }}><span>Workbook · PDF</span><b>Smart Financial Reset Kit</b></div>
                <div className="pv-tile" style={{ background: "var(--tile-gold)" }}><span>Dashboard · XLSX</span><b>Cashflow &amp; Budget</b></div>
                <div className="pv-tile" style={{ background: "var(--tile-teal)" }}><span>Tracker · DOCX</span><b>Habit Tracker 30 Hari</b></div>
                <div className="pv-tile" style={{ background: "var(--tile-sky)" }}><span>Prompts · PDF</span><b>100 AI Prompts</b></div>
              </div>
            </div>
          </div>
        </section>

        {/* EDITORIAL PHOTO */}
        <section className="editorial-section" id="tentang">
          <div className="wrap editorial-grid">
            <div className="photo-frame">
              <img
                src="/perempuan-profesional.png"
                alt="Perempuan profesional dalam suasana hangat"
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <span className="kicker soft">Keuangan yang terasa manusiawi</span>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)" }}>
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
              <a href="#penawaran" className="btn btn-primary" style={{ marginTop: 26 }} onClick={(e) => handleNavClick(e, "#penawaran")}>
                Mulai perjalanan 30 harimu →
              </a>
            </div>
          </div>
        </section>

        {/* OFFER / PRICING */}
        <section className="offer-section" id="penawaran">
          <div className="wrap offer-layout">
            <div>
              <span className="kicker soft">Harga</span>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)" }}>Mulai dari satu langkah kecil hari ini.</h2>
              <p className="section-desc">
                Tidak perlu menunggu gaji naik, kondisi sempurna, atau merasa benar-benar
                siap. Mulai dengan melihat kondisi apa adanya dan bangun sistemmu perlahan.
              </p>
              <div className="offer-benefits">
                {offerBenefits.map((b) => (
                  <div className="outcome-item" key={b}><span className="outcome-check">✓</span><span>{b}</span></div>
                ))}
              </div>
            </div>
            <div className="offer-card">
              <span className="kicker soft">PAKET LENGKAP</span>
              <h3>Smart Financial Reset Kit</h3>
              <p className="offer-sub">Workbook + Dashboard + AI Toolkit + Bonus Eksklusif</p>
              <div className="offer-price-row">
                <div className="offer-price-label">Harga peluncuran</div>
                <div className="offer-price-value">Segera diumumkan</div>
              </div>
              <a href="#faq" className="btn btn-primary" onClick={(e) => handleNavClick(e, "#faq")}>Lihat Informasi Paket →</a>
              <p className="offer-footnote">Link checkout akan diaktifkan saat penjualan dibuka.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <div className="wrap">
            <div className="section-head">
              <span className="kicker soft">FAQ</span>
              <h2>Pertanyaan yang sering diajukan</h2>
            </div>
            <div className="faq-list">
              {faqs.map((f, i) => (
                <FaqItem key={f.q} item={f} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-bottom">
          <span>SmartMomVestor — Smart Mom, Smart Money, Better Future</span>
          <span>© 2026 • Materi edukasi • Keputusan tetap milik Anda</span>
        </div>
      </footer>
    </div>
  );
}
