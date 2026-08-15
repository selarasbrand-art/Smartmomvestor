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
        .module-card.featured .module-arrow{ background: rgba(255,255,255,0.2); 
