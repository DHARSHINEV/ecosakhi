import React, { useState } from 'react';
import { 
  FileText, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  Download,
  ExternalLink
} from 'lucide-react';

export const PITCH_SLIDES = [
  {
    num: 1,
    title: 'Title & Positioning',
    headline: 'EcoSakhi: Turn Waste into Income. Turn Communities into Climate Champions.',
    category: 'SANKALP by Satin Finserv — The Climate Edition (Student Track)',
    bullets: [
      'Category: Climate Infrastructure for the Underserved Circular Economy',
      'Target Themes: Waste Management • Circular Economy • Climate Tech • Financial Inclusion',
      'Focus: Grassroots formalization of women-led Self-Help Groups (SHGs) and informal waste workers'
    ],
    visualNote: 'Cover Slide with empowered woman SHG collector holding digital handheld scale and sorted PET bottles.'
  },
  {
    num: 2,
    title: 'The Core Problem',
    headline: '“Waste has value. But the people handling it often cannot capture that value.”',
    category: 'Systemic Circular Economy Breakdown',
    bullets: [
      'Households: 0% price transparency; dry waste dumped mixed into open landfills',
      'Collectors: Squeezed by informal scrap middlemen; zero verifiable digital records',
      'Recyclers: Inconsistent raw feed; 20–35% contamination rate; EPR reporting pain',
      'Financial Institutions: Unable to underwrite informal climate livelihoods due to lack of bankable data',
      'Anchor Benchmark: CPCB & NITI Aayog (2021) report India generates 62M tonnes MSW annually, yet <20% of dry recyclables are formally recovered.'
    ],
    visualNote: '4-Way Value Chain Breakdown showing friction points across all stakeholders.'
  },
  {
    num: 3,
    title: 'The Solution: EcoSakhi',
    headline: 'Climate infrastructure bridging community collection, material traceability, and financial readiness.',
    category: 'Closed-Loop Architecture',
    bullets: [
      '1. Verifiable Community Collection: Households schedule pickups; women SHGs collect, sort, and log verified dry recyclables with transparent indicative pricing.',
      '2. End-to-End Circular Traceability: On-device EcoVision AI assists grading; batches tracked from curb to certified recycling partner.',
      '3. Data-Driven Financial Readiness: Transforming daily recycling into audited digital records, building verified Climate Activity Profiles for partner institutions.'
    ],
    visualNote: 'Visual flow: Household → Collector → EcoVision AI → Recycler → Wallet → Climate Score → Microfinance.'
  },
  {
    num: 4,
    title: 'How It Works (6-Step Lifecycle)',
    headline: 'A seamless, friction-free operational highway from doorstep to secondary pellets.',
    category: 'Operational Mechanics',
    bullets: [
      'Step 1: Request Pickup (Household App / Web)',
      'Step 2: Collect & Weigh (Collector App with Digital Handheld Scale)',
      'Step 3: EcoVision AI Assistance (Polymer resin grading & contamination risk detection)',
      'Step 4: Recycler Batch Dispatch (Cryptographic Manifest & Gate Weighbridge Check)',
      'Step 5: Instant Digital Wallet Payout (Direct to SHG account without middlemen markups)',
      'Step 6: Audited Climate & Impact Scoring (LCA avoided-burden CO₂e and Landfill accounting)'
    ],
    visualNote: '6-Step Operational Grid with clean iconography and verification badges.'
  },
  {
    num: 5,
    title: 'Why EcoSakhi is Different',
    headline: 'USP: “Not just a recycling app. Infrastructure for the underserved circular economy.”',
    category: 'Competitive Advantage & Moat',
    bullets: [
      'Unites 4 Pillars: Waste Collection + Material Traceability + Income Tracking + Financial Readiness',
      'SHG-First Empowerment: Organizes existing community collectives rather than replacing them with corporate gig fleets',
      'Empirical Traceability: Curb-to-pellet digital hash satisfying CPCB statutory EPR rules',
      'Financial On-Ramp: Bridges the informal economy to formal microfinance with Satin Finserv'
    ],
    visualNote: 'Competitive comparison matrix against scrap apps, kabadiwalas, and B2B ESG software.'
  },
  {
    num: 6,
    title: 'Product Prototype Demo',
    headline: 'Working, demo-ready MVP built for zero-barrier field execution.',
    category: 'Technology & UX Showcase',
    bullets: [
      'Citizen Portal: 30-second waste pickup booking with instant price discovery',
      'Collector Mobile App: Today’s collections (8), weight (74 kg), and monthly earnings (₹28,450)',
      'EcoVision AI Scanner: On-device classification of PET, HDPE, aluminium, and e-waste',
      'Digital Wallet: Transparent ledger with same-day UPI/Aadhaar withdrawal',
      'Climate Score (82/100): Multidimensional index combining consistency, purity, and volume'
    ],
    visualNote: 'High-fidelity mobile simulator and responsive desktop views.'
  },
  {
    num: 7,
    title: 'Measurable Impact Model',
    headline: 'Empirical model for 1,000 households over 1 year based on CPCB & UNEP benchmarks.',
    category: 'Environmental & Social Return',
    bullets: [
      '120 Metric Tonnes of recyclable dry waste diverted from landfills annually',
      '₹18.5 Lakhs in direct, transparent income injected into women SHG collectives',
      '10–12 Dedicated women collectors supported with formal ~₹12,800/month livelihoods',
      '180 Metric Tonnes net CO₂e avoided vs virgin extraction (~76,000 litres diesel avoided)',
      'Transparent Assumptions: Fully configurable emission factors and open methodology citations'
    ],
    visualNote: 'Metric cards displaying Tonnes Diverted, Community Earnings, and Net CO₂e avoided.'
  },
  {
    num: 8,
    title: 'Business Model & Satin Strategic Fit',
    headline: 'Sustainable multi-sided B2B monetization + responsible microfinance partnership.',
    category: 'Unit Economics & Ecosystem Alignment',
    bullets: [
      'Monetization: 3–5% Recycler platform fee on high-purity supply; corporate EPR compliance SaaS; municipal analytics licensing',
      'Core Social Rule: Basic citizen scheduling and SHG collector tools are 100% free',
      'Satin Finserv Synergy: 146+ verified collection records and 91% consistency enable Satin to underwrite green e-Rickshaw loans and SHG baling equipment loans with reduced risk',
      'Regulatory Boundary: EcoSakhi is NOT a lender. We provide the verified data layer.'
    ],
    visualNote: 'Dual ecosystem architecture diagram: EcoSakhi Data Highway ──> Satin Finserv Products.'
  },
  {
    num: 9,
    title: '3-Stage Scalability Roadmap',
    headline: 'Asset-light rollout leveraging existing women SHG networks and certified recyclers.',
    category: 'Execution Feasibility',
    bullets: [
      'Phase 1 (Months 0–6): Pilot in Tamil Nadu cluster; 1,000 households; 24 SHG collectors; 3 Recycler MoUs',
      'Phase 2 (Months 6–18): Regional expansion to 5 South Indian municipal districts; 25,000 households; on-device EcoVision v1.0; Satin sandbox pilot',
      'Phase 3 (Months 18–36): Pan-India network with State Livelihood Missions; 250,000+ households; 2,500+ women leaders; 30,000+ MT CO₂e avoided annually'
    ],
    visualNote: 'Timeline roadmap showing Pilot → Scale → National Network with clear milestone KPIs.'
  },
  {
    num: 10,
    title: 'Vision & Commitment',
    headline: '“Every kilogram recycled should create both environmental value and economic opportunity.”',
    category: 'The Long-Term North Star',
    bullets: [
      'Building India’s trusted digital highway for inclusive circular economies',
      'Unlocking dignity, financial identity, and institutional credit for informal women recyclers',
      'Turn waste into income. Turn income into resilience. Turn communities into climate champions.',
      'SANKALP by Satin Finserv — The Climate Edition | Student Track'
    ],
    visualNote: 'Closing slide with brand motto, jury thank you, and contact credentials.'
  }
];

export default function PitchDeckModal({ isOpen, onClose }) {
  const [slideIndex, setSlideIndex] = useState(0);

  if (!isOpen) return null;

  const slide = PITCH_SLIDES[slideIndex];
  const isFirst = slideIndex === 0;
  const isLast = slideIndex === PITCH_SLIDES.length - 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-slate-950 text-white rounded-3xl max-w-4xl w-full border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-400" />
            <div>
              <h3 className="text-sm font-bold text-white">EcoSakhi Pitch Deck (10 Slides)</h3>
              <span className="text-[10px] text-slate-400">SANKALP by Satin Finserv — The Climate Edition</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-emerald-400 font-bold">
              Slide {slide.num} of 10
            </span>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Canvas Body */}
        <div className="p-6 sm:p-10 flex-1 overflow-y-auto space-y-6 bg-gradient-to-b from-slate-900 to-slate-950">
          
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
              {slide.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {slide.headline}
            </h2>
          </div>

          {/* Slide Bullet Content */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-3">
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
              Key Presentation Points:
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
              {slide.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Layout Description */}
          <div className="p-4 bg-emerald-950/40 rounded-xl border border-emerald-900/60 text-xs text-emerald-300">
            <span className="font-bold text-emerald-400">Slide Visual Layout:</span> {slide.visualNote}
          </div>

        </div>

        {/* Footer Navigation */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900 flex items-center justify-between">
          <button
            onClick={() => !isFirst && setSlideIndex(slideIndex - 1)}
            disabled={isFirst}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white rounded-xl text-xs font-semibold flex items-center gap-1 cursor-pointer transition-smooth"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Slide</span>
          </button>

          {/* Dots */}
          <div className="flex gap-1.5">
            {PITCH_SLIDES.map((s, idx) => (
              <button
                key={s.num}
                onClick={() => setSlideIndex(idx)}
                className={`w-2 h-2 rounded-full transition-smooth ${
                  idx === slideIndex ? 'bg-emerald-400 w-5' : 'bg-slate-700 hover:bg-slate-600'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => !isLast && setSlideIndex(slideIndex + 1)}
            disabled={isLast}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-30 text-white rounded-xl text-xs font-bold flex items-center gap-1 cursor-pointer transition-smooth shadow-sm"
          >
            <span>Next Slide</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
