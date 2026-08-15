import React, { useState, useRef } from "react";

/* ============================================================
   DESIGN TOKENS — v2 "Playful Editorial"
   Ungu gelap #3D2448 | Ungu utama #76508C | Lavender #D8C3E5
   Lavender muda #F3EAF7 | Krem #F8F2EA | Putih hangat #FFFDFB
   Emas lembut #C7A85B | Teks sekunder #786F7C
   Aksen tile: Rose #E8B4C0 | Teal #A9C9C4 | Sky #C7D6EA
   Display: 'Fraunces' — Body/UI: 'Inter'
   ============================================================ */

const navLinks = [
  { href: "#isi-paket", label: "Isi Paket" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "#bonus", label: "Bonus" },
  { href: "#faq", label: "FAQ" },
];

const quickCategories = [
  { label: "Health Check", tile: "gold" },
  { label: "Leak Detector", tile: "rose" },
  { label: "Budget Reset", tile: "teal" },
  { label: "Debt Planner", tile: "sky" },
  { label: "Emergency Fund", tile: "gold" },
  { label: "Investasi", tile: "rose" },
];

const modules = [
  { num: "01", title: "Financial Health Check", body: "Kenali kondisi keuangan tanpa menghakimi diri sendiri.", tile: "gold" },
  { num: "02", title: "Money Leak Detector", body: "Temukan pengeluaran yang tidak lagi memberi nilai.", tile: "rose" },
  { num: "03", title: "Budget Reset", body: "Susun anggaran realistis yang tetap punya ruang bernapas.", tile: "teal" },
  { num: "04", title: "Debt Freedom Planner", body: "Pilih strategi pelunasan utang yang jelas dan aman.", tile: "sky" },
  { num: "05", title: "Emergency Fund Planner", body: "Bangun bantalan agar kejutan tidak berubah menjadi utang.", tile: "gold" },
  { num: "06", title: "Investment Readiness", body: "Pastikan fondasi siap sebelum mengejar imbal hasil.", tile: "rose" },
  { num: "07", title: "AI Financial Coach", body: "Gunakan AI untuk berpikir terstruktur, bukan menyerahkan keputusan.", tile: "teal" },
  { num: "08", title: "30-Day Reset Challenge", body: "Ubah insight menjadi kebiasaan yang dapat dipertahankan.", tile: "sky" },
];

const problemCards = [
  { title: "Uang terasa selalu habis", body: "Transaksi kecil menumpuk, tetapi sulit melihat pola dan kebocoran sebenarnya.", tile: "rose" },
  { title: "Budget cepat ditinggalkan", body: "Anggaran terlalu ideal, tidak menyesuaikan kehidupan nyata dan pendapatan yang berubah.", tile: "gold" },
  { title: "Bingung menentukan prioritas", body: "Utang, dana darurat, tujuan, dan investasi terasa harus dikerjakan sekaligus.", tile: "sky" },
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
  { num: "01", title: "Financial Dashboard", body: "Versi DEMO dan KOSONG untuk melacak cashflow, budget, utang, dana darurat, tujuan, dan investasi.", format: "Google Sheets & XLSX", tile: "gold" },
  { num: "02", title: "Financial Habit Tracker", body: "Tracker 30 hari, review mingguan, recovery plan, dan rencana kebiasaan 90 hari.", format: "PDF, DOCX & XLSX", tile: "rose" },
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

const proofStats = [
  { value: "90+", label: "halaman workbook" },
  { value: "8", label: "modul utama" },
  { value: "100", label: "AI prompt keuangan" },
  { value: "30", label: "hari membangun sistem" },
];

const faqs = [
  { q: "Apakah paket ini cocok untuk pemula?", a: "Ya. Materi dimulai dari mengenali kondisi saat ini, kemudian bergerak menuju budget, utang, dana darurat, tujuan, dan kesiapan investasi." },
  { q: "Apakah harus menyelesaikan semuanya dalam 30 hari?", a: "Tidak. Challenge 30 hari adalah struktur pendamping. Kamu boleh memperlambat ritmenya sesuai kondisi keluarga dan waktu yang tersedia." },
  { q: "Apakah dashboard bisa digunakan di Google Sheets?", a: "Bisa. Paket menyediakan versi Google Sheets native serta file XLSX versi DEMO dan KOSONG." },
  { q: "Apakah ini termasuk konsultasi keuangan pribadi?", a: "Tidak. Paket ini adalah alat edukasi dan pencatatan. Keputusan investasi, kredit, pajak, hukum, dan asuransi personal tetap perlu diverifikasi pada profesional atau sumber resmi." },
  { q: "Apakah saya harus memasukkan data pribadi ke AI?", a: "Tidak. Gunakan data anonim, hapus identitas sensitif, minta asumsi ditampilkan, dan verifikasi jawaban penting sebelum mengambil keputusan." },
];

function Sparkle({ className, size = 18 }) {
  return (
    <svg className={`sparkle ${className || ""}`} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" fill="currentColor" />
    </svg>
  );
}

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
  const catRowRef = useRef(null);

  const modPages = chunk(modules, 3);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollCats = (dir) => {
    if (catRowRef.current) {
      catRowRef.current.scrollBy({ left: dir * 180, behavior: "smooth" });
    }
  };

  return (
    <div className="smv-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600;700;800&display=swap');

        :root{
          --ink:#3D2448;
          --purple:#76508C;
          --lavender:#D8C3E5;
          --lavender-light:#F3EAF7;
          --cream:#F8F2EA;
          --white:#FFFDFB;
          --gold:#C7A85B;
          --text-secondary:#786F7C;
          --tile-rose:#E8B4C0;
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
          line-height: 1.55;
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
        .smv-root :focus-visible{ outline: 2px solid var(--gold); outline-offset: 3px; }
        .sparkle{ color: var(--purple); position:absolute; opacity: 0.8; }

        .wrap{ max-width: 1180px; margin: 0 auto; padding: 0 24px; }

        .announce{
          background: var(--ink); color: var(--white); text-align: center;
          font-size: 13px; letter-spacing: 0.03em; padding: 10px 16px;
        }

        /* ---------- Navbar (logo left / links center / buttons right) ---------- */
        .navbar{ padding: 22px 24px 10px; position: sticky; top: 0; z-index: 50; background: var(--white); }
        .navbar-pill{
          max-width: 1180px; margin: 0 auto;
          display:grid; grid-template-columns: 1fr auto 1fr; align-items:center; gap: 16px;
        }
        .nav-links{ display:flex; align-items:center; justify-content:center; gap: 30px; }
        .nav-links a{ font-size: 14px; font-weight: 600; color: var(--ink); transition: color 0.2s ease; }
        .nav-links a:hover{ color: var(--purple); }
        .brand-block{ display:flex; align-items:center; gap: 10px; }
        .brand-mark{
          width: 36px; height: 36px; border-radius: 10px;
          background: linear-gradient(155deg, var(--purple), var(--ink));
          display:flex; align-items:center; justify-content:center;
          color: var(--white); font-family:'Fraunces', serif; font-size: 18px; font-style: italic;
          flex-shrink: 0;
        }
        .brand-name{ font-family:'Fraunces', serif; font-size: 16px; font-weight: 700; color: var(--ink); }
        .btn{
          display:inline-flex; align-items:center; justify-content:center; gap: 8px;
          padding: 12px 22px; border-radius: 999px; font-size: 14px; font-weight: 700;
          border: 1px solid transparent; transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease;
          white-space: nowrap;
        }
        .btn-primary{ background: var(--gold); color: var(--ink); }
        .btn-primary:hover{ background:#B4924A; color: var(--white); transform: translateY(-1px); box-shadow: 0 10px 22px rgba(199,168,91,0.35); }
        .btn-secondary{ background: var(--lavender-light); color: var(--ink); }
        .btn-secondary:hover{ background: var(--lavender); }
        .btn-dark{ background: var(--ink); color: var(--white); }
        .btn-dark:hover{ background: var(--purple); transform: translateY(-1px); box-shadow: 0 10px 22px rgba(61,36,72,0.3); }
        .btn-small{ padding: 9px 18px; font-size: 13px; }
        .arrow-btn{
          width: 42px; height: 42px; border-radius: 50%; border: 1px solid rgba(61,36,72,0.15);
          background: var(--white); display:flex; align-items:center; justify-content:center;
          font-size: 16px; color: var(--ink); flex-shrink: 0; transition: background 0.2s ease, border-color 0.2s ease;
        }
        .arrow-btn:hover{ background: var(--lavender-light); border-color: var(--purple); }
        .menu-toggle{ display:none; background:none; border:none; font-size: 20px; color: var(--ink); padding: 8px; }
        .nav-mobile{ display:none; }

        /* ---------- Hero ---------- */
        .hero{ padding: 48px 0 0; position: relative; }
        .pill-tag{
          font-size: 11.5px; font-weight: 700; letter-spacing: 0.03em;
          background: var(--lavender-light); color: var(--purple);
          padding: 7px 16px; border-radius: 999px;
        }
        .pill-tag.dark{ background: var(--ink); color: var(--white); }
        .hero-badge{
          display:flex; justify-content:center; margin-bottom: 26px;
        }
        .hero-badge-pill{
          display:inline-flex; align-items:center; gap: 10px;
          background: var(--lavender-light); border-radius: 999px; padding: 6px 8px 6px 6px;
          font-size: 12.5px; font-weight: 600; color: var(--ink);
        }
        .hero-badge-pill .chip{
          background: var(--gold); color: var(--white); font-weight: 700; font-size: 11px;
          padding: 5px 12px; border-radius: 999px;
        }
        .hero-headline{
          text-align:center; max-width: 780px; margin: 0 auto; position: relative;
        }
        .hero-headline h1{
          font-size: clamp(34px, 6vw, 58px); line-height: 1.1; color: var(--ink); font-weight: 700;
        }
        .hero-highlight{
          display:inline-flex; align-items:center; justify-content:center;
          background: var(--gold); color: var(--white);
          border-radius: 999px; padding: 2px 24px; margin: 0 2px;
          font-style: italic;
        }
        .hero-desc{
          margin: 22px auto 0; font-size: 16px; color: var(--text-secondary); max-width: 500px; text-align:center;
        }
        .hero-cta-row{
          margin-top: 30px; display:flex; justify-content:center; gap: 10px; flex-wrap: wrap;
        }
        .hero-note{
          margin-top: 14px; text-align:center; font-size: 12px; color: var(--text-secondary);
        }
        .hero-trust-row{
          margin-top: 18px; display:flex; justify-content:center; align-items:center; gap: 10px;
          font-size: 12.5px; color: var(--ink); font-weight: 600;
        }
        .trust-dots{ display:flex; }
        .trust-dots span{
          width: 26px; height: 26px; border-radius: 50%; background: var(--lavender);
          border: 2px solid var(--white); margin-left: -8px; display:inline-block;
        }
        .trust-dots span:first-child{ margin-left: 0; }
        .hero-deco-1{ top: 6px; left: 4%; }
        .hero-deco-2{ top: 40px; right: 6%; }
        .hero-deco-3{ bottom: 20px; left: 10%; }

        /* Hero visual on gradient panel */
        .hero-visual-wrap{ margin-top: 52px; position: relative; }
        .hero-gradient-panel{
          background: linear-gradient(180deg, var(--lavender-light) 0%, var(--lavender) 55%, var(--gold) 150%);
          border-radius: 36px;
          height: 200px;
          margin: 0 -4px;
        }
        .hero-mock-stack{
          position: absolute; left: 50%; top: -80px; transform: translateX(-50%);
          width: min(340px, 82vw);
        }
        .hero-mock-card{
          background: var(--white); border-radius: 26px; padding: 22px;
          box-shadow: 0 30px 60px rgba(61,36,72,0.2); border: 1px solid rgba(61,36,72,0.06);
        }
        .hero-mock-cover{
          height: 200px; border-radius: 18px; background: linear-gradient(150deg, var(--ink), var(--purple));
          display:flex; flex-direction:column; justify-content:space-between; padding: 20px; color: var(--white);
        }
        .hero-mock-cover span{ font-size: 10.5px; letter-spacing: 0.08em; text-transform: uppercase; opacity: 0.75; }
        .hero-mock-cover .title{ font-family:'Fraunces', serif; font-size: 22px; line-height: 1.2; }
        .hero-mock-meta{ margin-top: 14px; display:flex; justify-content:space-between; font-size: 11.5px; color: var(--text-secondary); }
        .hero-mock-badge{
          position:absolute; top: -14px; right: -14px; background: var(--gold); color: var(--white);
          font-size: 11px; font-weight: 800; padding: 8px 14px; border-radius: 999px;
          box-shadow: 0 10px 20px rgba(199,168,91,0.4);
        }

        /* Format strip below hero */
        .format-strip{
          padding: 40px 0 0; text-align:center;
        }
        .format-strip p{ font-size: 13px; color: var(--text-secondary); margin-bottom: 20px; }
        .format-row{ display:flex; justify-content:center; gap: 14px; flex-wrap: wrap; }
        .format-chip{
          font-size: 13px; font-weight: 700; color: var(--ink);
          border: 1px solid rgba(61,36,72,0.12); border-radius: 999px; padding: 9px 20px;
        }

        /* ---------- Section shared ---------- */
        section{ padding: 88px 0; }
        .section-head{ max-width: 640px; margin: 0 auto 44px; text-align:center; }
        .kicker{
          font-size: 12.5px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--purple); margin-bottom: 12px; display:inline-block;
          background: var(--lavender-light); padding: 6px 14px; border-radius: 999px;
        }
        .section-head h2{ font-size: clamp(26px, 3.4vw, 40px); color: var(--ink); line-height: 1.2; }
        .section-desc{ margin-top: 16px; font-size: 15.5px; color: var(--text-secondary); }

        /* ---------- Problem section ---------- */
        .problem-grid{ display:grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .problem-card{
          border-radius: var(--r-md); padding: 30px 26px;
          border: 1px solid rgba(61,36,72,0.06);
        }
        .problem-card h3{ font-size: 18px; color: var(--ink); margin-bottom: 10px; }
        .problem-card p{ font-size: 14px; color: var(--text-secondary); }

        /* ---------- Isi Paket: big rounded card w/ carousel ---------- */
        .paket-card{
          background: var(--lavender-light);
          border-radius: 40px;
          padding: 48px 40px;
          position: relative;
        }
        .paket-head{
          display:flex; justify-content:space-between; align-items:flex-start; gap: 24px; flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .paket-head h2{ font-size: clamp(24px, 3vw, 32px); }
        .paket-head p{ max-width: 340px; font-size: 14.5px; color: var(--text-secondary); text-align: right; }
        .module-grid{ display:grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .module-card{
          background: var(--white); border-radius: var(--r-md);
          padding: 24px; display:flex; flex-direction:column; gap: 14px;
          min-height: 260px;
          border: 1px solid rgba(61,36,72,0.05);
        }
        .module-card.featured{ background: var(--purple); color: var(--white); }
        .module-top{ display:flex; align-items:center; justify-content:space-between; }
        .module-icon-badge{
          width: 42px; height: 42px; border-radius: 14px;
          display:flex; align-items:center; justify-content:center;
          font-size: 14px; font-weight: 800; color: var(--ink);
        }
        .module-arrow{
          width: 30px; height: 30px; border-radius: 50%;
          display:flex; align-items:center; justify-content:center;
          background: rgba(61,36,72,0.06); font-size: 13px;
        }
        .module-card.featured .module-arrow{ background: rgba(255,255,255,0.18); color: var(--white); }
        .module-card h3{ font-size: 18px; line-height: 1.25; }
        .module-card p{ font-size: 13.5px; color: var(--text-secondary); }
        .module-card.featured p{ color: rgba(255,253,251,0.75); }
        .module-visual{
          margin-top: auto; height: 84px; border-radius: var(--r-sm);
          display:flex; align-items:center; justify-content:center;
          font-family:'Fraunces', serif; font-style: italic; font-size: 26px; color: var(--ink);
        }
        .paket-footer{
          display:flex; align-items:center; justify-content:center; gap: 18px; margin-top: 32px;
        }
        .dots{ display:flex; gap: 8px; }
        .dot{ width: 8px; height: 8px; border-radius: 50%; background: rgba(61,36,72,0.2); border:none; padding:0; cursor:pointer; }
        .dot.active{ background: var(--purple); width: 22px; border-radius: 999px; transition: width 0.2s ease; }

        /* ---------- Cara kerja ---------- */
        .cara-kerja-grid{ display:grid; grid-template-columns: 0.9fr 1.1fr; gap: 60px; align-items:start; }
        .outcome-list{ margin-top: 26px; display:flex; flex-direction:column; gap: 14px; }
        .outcome-item{ display:flex; align-items:flex-start; gap: 12px; font-size: 14.5px; color: var(--ink); }
        .outcome-check{
          width: 22px; height: 22px; border-radius: 50%; background: var(--tile-gold);
          color: var(--ink); display:flex; align-items:center; justify-content:center;
          font-size: 12px; flex-shrink: 0; margin-top: 1px; font-weight:700;
        }
        .roadmap{ position: relative; padding-left: 26px; }
        .roadmap::before{ content:""; position:absolute; left: 5px; top: 6px; bottom: 6px; width: 1.5px; background: var(--lavender); }
        .roadmap-item{ position: relative; padding-bottom: 30px; }
        .roadmap-item:last-child{ padding-bottom: 0; }
        .roadmap-item::before{
          content:""; position:absolute; left: -26px; top: 4px; width: 12px; height: 12px;
          border-radius: 50%; background: var(--white); border: 2.5px solid var(--purple);
        }
        .roadmap-range{ font-size: 11.5px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: var(--gold); }
        .roadmap-verb{ font-family:'Fraunces', serif; font-size: 19px; color: var(--ink); margin: 4px 0; }
        .roadmap-body{ font-size: 13.5px; color: var(--text-secondary); }

        /* ---------- Bonus ---------- */
        .bonus-grid{ display:grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .bonus-card{ border-radius: var(--r-md); padding: 28px; background: var(--white); border: 1px solid rgba(61,36,72,0.08); }
        .bonus-top{ display:flex; align-items:center; justify-content:space-between; margin-bottom: 14px; }
        .bonus-icon{ width: 44px; height: 44px; border-radius: 14px; display:flex; align-items:center; justify-content:center; font-family:'Fraunces', serif; font-style: italic; font-size: 17px; color: var(--ink); }
        .bonus-format{ font-size: 11px; font-weight: 700; color: var(--purple); background: var(--lavender-light); padding: 5px 12px; border-radius: 999px; }
        .bonus-card h3{ font-size: 18px; color: var(--ink); margin-bottom: 8px; }
        .bonus-card p{ font-size: 13.5px; color: var(--text-secondary); }

        /* ---------- Package details ---------- */
        .package-section{ background: var(--ink); color: var(--white); border-radius: var(--r-lg); margin: 0 24px; padding: 64px 40px; max-width: 1180px; margin-left:auto; margin-right:auto; }
        .package-grid{ display:grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items:center; }
        .package-list li{
          list-style:none; display:flex; align-items:center; gap: 12px; padding: 14px 0;
          border-bottom: 1px solid rgba(255,253,251,0.1); font-size: 14.5px; color: rgba(255,253,251,0.92);
        }
        .package-list li:last-child{ border-bottom: none; }
        .package-bullet{ width: 7px; height: 7px; border-radius: 50%; background: var(--gold); flex-shrink: 0; }
        .package-note{ margin-top: 18px; font-size: 12.5px; color: rgba(255,253,251,0.55); }
        .package-visual{ display:grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .pv-tile{ border-radius: var(--r-sm); padding: 20px; height: 130px; display:flex; flex-direction:column; justify-content:space-between; }
        .pv-tile span{ font-size: 10px; letter-spacing: 0.06em; text-transform:uppercase; opacity: 0.8; }
        .pv-tile b{ font-family:'Fraunces', serif; font-size: 15px; font-weight: 600; }

        /* ---------- Editorial photo ---------- */
        .editorial-section{ background: var(--cream); }
        .editorial-grid{ display:grid; grid-template-columns: 0.85fr 1.15fr; gap: 56px; align-items:center; }
        .photo-frame{
          position: relative; border-radius: var(--r-lg); box-shadow: 0 24px 48px rgba(61,36,72,0.14);
          aspect-ratio: 3 / 4; overflow: hidden; background: linear-gradient(155deg, var(--lavender-light), var(--lavender));
        }
        .photo-frame .placeholder-note{
          position:absolute; inset:0; display:flex; align-items:center; justify-content:center; flex-direction:column;
          gap: 10px; padding: 32px; text-align:center; color: var(--purple);
        }
        .placeholder-note span{ font-size: 12.5px; color: var(--text-secondary); max-width: 220px; }
        .editorial-quote{
          margin-top: 26px; font-family:'Fraunces', serif; font-style: italic; font-size: 18px; color: var(--purple);
          border-left: 3px solid var(--gold); padding-left: 18px;
        }

        /* ---------- Offer ---------- */
        .offer-section{ background: var(--lavender-light); }
        .offer-layout{ display:grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items:center; }
        .offer-benefits{ margin-top: 24px; display:flex; flex-direction:column; gap: 12px; }
        .offer-card{
          background: var(--white); border-radius: var(--r-lg); padding: 40px;
          box-shadow: 0 24px 56px rgba(61,36,72,0.14); text-align:center;
        }
        .offer-card h3{ font-size: 25px; color: var(--ink); }
        .offer-card .offer-sub{ margin-top: 8px; font-size: 13.5px; color: var(--text-secondary); }
        .offer-price-row{ margin: 26px 0 8px; padding: 18px 0; border-top: 1px dashed rgba(61,36,72,0.15); border-bottom: 1px dashed rgba(61,36,72,0.15); }
        .offer-price-label{ font-size: 11.5px; letter-spacing: 0.05em; text-transform: uppercase; color: var(--gold); font-weight: 700; }
        .offer-price-value{ font-family:'Fraunces', serif; font-size: 22px; color: var(--ink); margin-top: 6px; }
        .offer-card .btn{ width: 100%; margin-top: 18px; }
        .offer-footnote{ margin-top: 14px; font-size: 11.5px; color: var(--text-secondary); }

        /* ---------- FAQ ---------- */
        .faq-list{ max-width: 720px; margin: 0 auto; }
        .faq-item{ border-bottom: 1px solid rgba(61,36,72,0.12); }
        .faq-question{
          width: 100%; display:flex; align-items:center; justify-content:space-between; gap: 20px;
          background: none; border: none; padding: 22px 4px; text-align:left; font-size: 15.5px; font-weight: 700; color: var(--ink);
        }
        .faq-icon{ font-family:'Fraunces', serif; font-size: 20px; color: var(--gold); flex-shrink:0; width: 22px; text-align:center; }
        .faq-answer-wrap{ overflow:hidden; transition: max-height 0.35s ease; }
        .faq-answer{ font-size: 14px; color: var(--text-secondary); padding: 0 4px 22px; max-width: 620px; }
        .faq-item.open .faq-question{ color: var(--purple); }

        /* ---------- Bottom CTA card ---------- */
        .cta-card{
          background: var(--white); border: 1.5px solid rgba(61,36,72,0.08); border-radius: 40px;
          padding: 64px 40px 32px; text-align:center; position: relative;
        }
        .cta-card .kicker{ margin-bottom: 18px; }
        .cta-card h2{ font-size: clamp(24px, 3.4vw, 36px); max-width: 640px; margin: 0 auto; line-height: 1.3; }
        .cta-card .highlight-word{
          background: var(--gold); color: var(--white); border-radius: 999px; padding: 2px 16px; font-style: italic;
        }
        .cta-card .cta-sub{ margin: 20px auto 0; max-width: 460px; font-size: 14.5px; color: var(--text-secondary); }
        .cta-footer{
          margin-top: 48px; padding-top: 24px; border-top: 1px solid rgba(61,36,72,0.08);
          display:flex; justify-content:space-between; align-items:center; flex-wrap: wrap; gap: 12px;
          font-size: 12.5px; color: var(--text-secondary);
        }
        .social-row{ display:flex; gap: 14px; }
        .social-dot{
          width: 34px; height: 34px; border-radius: 50%; background: var(--lavender-light);
          display:flex; align-items:center; justify-content:center; font-size: 14px; color: var(--purple);
        }

        footer{ padding: 32px 0 40px; }
        .footer-bottom{ display:flex; justify-content:space-between; flex-wrap: wrap; gap: 8px; font-size: 12px; color: var(--text-secondary); }

        /* ---------- Responsive ---------- */
        @media (max-width: 900px){
          .hero-inner, .cara-kerja-grid, .package-grid, .editorial-grid, .offer-layout{ grid-template-columns: 1fr; }
          .module-grid{ grid-template-columns: 1fr; }
          .problem-grid{ grid-template-columns: 1fr; }
          .bonus-grid{ grid-template-columns: 1fr; }
          .nav-links{ display:none; }
          .menu-toggle{ display:block; }
          section{ padding: 60px 0; }
          .hero{ padding: 36px 0 24px; }
          .paket-card{ padding: 32px 20px; border-radius: 28px; }
          .paket-head p{ text-align:left; }
          .package-section{ padding: 44px 22px; border-radius: 28px; margin: 0 12px; }
          .package-visual{ grid-template-columns: 1fr; }
          .cta-card{ padding: 44px 22px 26px; border-radius: 28px; }
        }
        @media (max-width: 900px){
          .navbar{ padding: 14px 16px; }
          .navbar-pill{ padding: 8px 8px 8px 16px; }
          .nav-mobile{
            display:flex; flex-direction:column; gap: 2px; margin-top: 10px;
            background: var(--white); border-radius: 20px; padding: 8px;
            border: 1px solid rgba(61,36,72,0.08);
          }
          .nav-mobile a{ padding: 12px 14px; font-size: 14.5px; font-weight: 600; border-radius: 12px; }
          .nav-mobile a:active{ background: var(--lavender-light); }
        }
        @media (max-width: 560px){
          .brand-name{ font-size: 14px; }
          .hero-top-badges{ display:none; }
          .cat-tile{ width: 96px; height: 96px; font-size: 11px; }
        }
      `}</style>

      <div className="announce">30-Day Financial Reset • Dibuat untuk keluarga dan perempuan Indonesia</div>

      <header className="navbar">
        <div className="navbar-pill">
          <div className="brand-block">
            <div className="brand-mark" aria-hidden="true">S</div>
            <span className="brand-name">SmartMomVestor</span>
          </div>
          <nav className="nav-links" aria-label="Navigasi utama">
            {navLinks.map((n) => (
              <a key={n.href} href={n.href} onClick={(e) => handleNavClick(e, n.href)}>{n.label}</a>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <a href="#penawaran" className="btn btn-primary btn-small" onClick={(e) => handleNavClick(e, "#penawaran")}>
              Dapatkan Paket ↗
            </a>
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
          <div className="wrap">
            <div className="hero-badge">
              <span className="hero-badge-pill">
                <span className="chip">Baru</span>
                Smart Financial Reset Kit™ →
              </span>
            </div>

            <div className="hero-headline">
              <Sparkle className="hero-deco-1" size={22} />
              <Sparkle className="hero-deco-2" size={16} />
              <h1>
                Reset Keuanganmu<br />
                dalam <span className="hero-highlight">30 Hari</span>
              </h1>
              <p className="hero-desc">
                Sistem langkah demi langkah untuk menghentikan kebocoran, menata budget,
                membangun dana darurat, dan membuat keputusan keuangan dengan lebih tenang —
                meski penghasilan belum bertambah.
              </p>
            </div>

            <div className="hero-cta-row">
              <a href="#penawaran" className="btn btn-primary" onClick={(e) => handleNavClick(e, "#penawaran")}>
                Dapatkan Info Harga →
              </a>
              <a href="#isi-paket" className="btn btn-secondary" onClick={(e) => handleNavClick(e, "#isi-paket")}>
                Lihat Isi Paket
              </a>
            </div>
            <p className="hero-note">Notifikasi harga &amp; jadwal peluncuran dikirim saat pendaftaran dibuka.</p>

            <div className="hero-trust-row">
              <span className="trust-dots" aria-hidden="true">
                <span style={{ background: "var(--tile-gold)" }} />
                <span style={{ background: "var(--tile-rose)" }} />
                <span style={{ background: "var(--tile-teal)" }} />
              </span>
              Dibuat khusus untuk perempuan &amp; keluarga Indonesia.
            </div>

            <div className="hero-visual-wrap">
              <div className="hero-gradient-panel" aria-hidden="true" />
              <div className="hero-mock-stack" aria-hidden="true">
                <div className="hero-mock-badge">90+ hal.</div>
                <div className="hero-mock-card">
                  <div className="hero-mock-cover">
                    <span>Workbook</span>
                    <div className="title">Smart Financial<br />Reset Kit</div>
                  </div>
                  <div className="hero-mock-meta">
                    <span>A4 · Bahasa Indonesia</span>
                    <span>8 modul</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="format-strip wrap">
            <p>Tersedia dalam format</p>
            <div className="format-row">
              {["PDF", "DOCX", "XLSX", "Google Sheets"].map((f) => (
                <span className="format-chip" key={f}>{f}</span>
              ))}
            </div>
          </div>
        </section>

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
                <div className={`problem-card tile-${c.tile}`} key={c.title} style={{ background: `var(--tile-${c.tile})` }}>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ISI PAKET — big rounded card w/ carousel */}
        <section id="isi-paket">
          <div className="wrap">
            <div className="paket-card">
              <div className="paket-head">
                <div>
                  <span className="kicker">Delapan modul utama</span>
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
                      <div className="module-icon-badge" style={{ background: i === 1 ? "rgba(255,255,255,0.16)" : `var(--tile-${m.tile})`, color: i === 1 ? "#fff" : "var(--ink)" }}>
                        {m.num}
                      </div>
                      <div className="module-arrow">↗</div>
                    </div>
                    <h3>{m.title}</h3>
                    <p>{m.body}</p>
                    <div className="module-visual" style={{ background: i === 1 ? "rgba(255,255,255,0.1)" : `var(--tile-${m.tile})`, color: i === 1 ? "#fff" : "var(--ink)" }}>
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
              <span className="kicker">Cara kerja &amp; hasil</span>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)" }}>Bukan sekadar selesai mengisi workbook.</h2>
              <p className="section-desc" style={{ marginTop: 14 }}>
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
        <section id="rincian-paket" style={{ paddingTop: 0 }}>
          <div className="package-section">
            <div className="package-grid">
              <div>
                <span className="kicker" style={{ background: "rgba(255,253,251,0.1)", color: "var(--gold)" }}>Rincian paket</span>
                <h2 style={{ color: "var(--white)", fontSize: "clamp(24px, 3vw, 34px)" }}>23 file siap pakai, tersusun rapi.</h2>
                <ul className="package-list" style={{ marginTop: 24 }}>
                  {packageContents.map((p) => (
                    <li key={p}><span className="package-bullet" />{p}</li>
                  ))}
                </ul>
                <p className="package-note">Format: PDF, DOCX, XLSX, dan Google Sheets native • Ukuran A4</p>
              </div>
              <div className="package-visual" aria-hidden="true">
                <div className="pv-tile" style={{ background: "var(--tile-gold)" }}>
                  <span>Workbook · PDF</span>
                  <b>Smart Financial Reset Kit</b>
                </div>
                <div className="pv-tile" style={{ background: "var(--tile-rose)" }}>
                  <span>Dashboard · XLSX</span>
                  <b>Cashflow &amp; Budget</b>
                </div>
                <div className="pv-tile" style={{ background: "var(--tile-teal)" }}>
                  <span>Tracker · DOCX</span>
                  <b>Habit Tracker 30 Hari</b>
                </div>
                <div className="pv-tile" style={{ background: "var(--tile-sky)" }}>
                  <span>Prompts · PDF</span>
                  <b>100 AI Prompts</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDITORIAL PHOTO */}
        <section className="editorial-section" id="tentang">
          <div className="wrap editorial-grid">
            <div className="photo-frame">
              <img src="" alt="Perempuan profesional dalam suasana hangat" loading="lazy" style={{ display: "none" }} />
              <div className="placeholder-note">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <circle cx="9" cy="10" r="2" />
                  <path d="M21 16l-5-5-4 4-3-3-5 5" />
                </svg>
                <span>Ruang untuk foto perempuan (portrait 3:4) — belum dilampirkan pada permintaan ini.</span>
              </div>
            </div>
            <div>
              <span className="kicker">Keuangan yang terasa manusiawi</span>
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
              <a href="#penawaran" className="btn btn-dark" style={{ marginTop: 26 }} onClick={(e) => handleNavClick(e, "#penawaran")}>
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
              <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)" }}>Mulai dari satu langkah kecil hari ini.</h2>
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
              <span className="kicker">PAKET LENGKAP</span>
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
              <span className="kicker">FAQ</span>
              <h2>Pertanyaan yang sering diajukan</h2>
            </div>
            <div className="faq-list">
              {faqs.map((f, i) => (
                <FaqItem key={f.q} item={f} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA CARD */}
        <section style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="cta-card">
              <Sparkle className="hero-deco-1" size={20} />
              <Sparkle className="hero-deco-3" size={16} />
              <span className="kicker">— SmartMomVestor —</span>
              <h2>
                Bangun kebiasaan uang yang lebih tenang bersama<br />
                komunitas <span className="highlight-word">SmartMomVestor</span>
              </h2>
              <p className="cta-sub">
                Yuk mulai langkah kecilmu hari ini — bukan hanya untuk dirimu,
                tapi juga untuk keluarga yang kamu jaga.
              </p>
              <div className="cta-footer">
                <span>Bagian dari SmartMomVestor</span>
                <div className="social-row" aria-hidden="true">
                  <span className="social-dot">✉</span>
                  <span className="social-dot">☏</span>
                  <span className="social-dot">◎</span>
                </div>
                <span>© 2026 SmartMomVestor</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-bottom">
          <span>Smart Mom, Smart Money, Better Future</span>
          <span>Materi edukasi • Keputusan tetap milik Anda</span>
        </div>
      </footer>
    </div>
  );
}
