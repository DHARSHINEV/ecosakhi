import React, { useState } from 'react';
import { 
  Play, 
  ArrowRight, 
  ArrowLeft, 
  X, 
  CheckCircle2, 
  Sparkles, 
  RotateCcw,
  Volume2
} from 'lucide-react';

export const TOUR_STEPS = [
  {
    step: 1,
    tab: 'landing',
    title: '1. Landing Page & Value Chain',
    actionDesc: 'Introduce the core positioning: Climate infrastructure for the underserved circular economy.',
    presenterNote: '“Every day recyclable waste moves through communities with economic value, but small collectors and women-led SHGs cannot capture or prove that value. EcoSakhi connects Households, Collectors, Recyclers, and Financial Institutions.”',
  },
  {
    step: 2,
    tab: 'dashboard',
    title: '2. Explore Live Dashboard',
    actionDesc: 'View aggregated community dry waste telemetry, monthly trends, and recycling yield.',
    presenterNote: '“Notice our live metrics: 1,248 kg collected, 1,012 kg recycled (81% yield), ₹48,600 community earnings, and 624 kg CO₂e avoided. Clearly labeled as prototype demo data.”',
  },
  {
    step: 3,
    tab: 'pickup',
    title: '3. Household Schedules Pickup',
    actionDesc: 'Citizen enters 12.5 kg PET plastic and books a collection slot.',
    presenterNote: '“A household in Chennai books a pickup in seconds. They select PET plastic, see an indicative payout of ₹200, and immediately receive a digital booking pass.”',
  },
  {
    step: 4,
    tab: 'collector',
    title: '4. Collector Mobile Dashboard',
    actionDesc: 'Switch to Lakshmi SHG’s mobile interface in Ward 14 Tambaram.',
    presenterNote: '“Now we step into Lakshmi’s shoes. As a women SHG leader, she sees 8 completed collections today, ₹1,850 earned today, and ₹28,450 monthly income. She accepts the new household pickup.”',
  },
  {
    step: 5,
    tab: 'record-modal',
    title: '5. Record & Weigh 12.5 kg Plastic',
    actionDesc: 'Digital scale record generated with Grade A quality inspection.',
    presenterNote: '“Lakshmi weighs the 12.5 kg PET plastic with her digital handheld scale. With transparent ₹16/kg pricing, she generates an instant digital collection receipt with a tamper-proof hash.”',
  },
  {
    step: 6,
    tab: 'ecovision',
    title: '6. EcoVision AI Scanner',
    actionDesc: 'On-device computer vision classification of PET bottle resin.',
    presenterNote: '“To prevent contaminated batches, Lakshmi runs EcoVision. The AI scans the material, detects PET Plastic with 94% confidence, and tags it for GreenCycle flake recycling. Crucially: labeled as prototype AI requiring human validation.”',
  },
  {
    step: 7,
    tab: 'wallet',
    title: '7. EcoSakhi Digital Wallet',
    actionDesc: 'Instant digital payout credited with itemized ledger.',
    presenterNote: '“Immediately, ₹200 is credited to Lakshmi’s wallet. She has ₹4,850 available and ₹28,450 lifetime earnings. No cash middlemen. Every rupee is digitally documented.”',
  },
  {
    step: 8,
    tab: 'calculator',
    title: '8. Circular Impact Engine',
    actionDesc: 'Simulate 1,000 households over 1 year with open CPCB/UNEP assumptions.',
    presenterNote: '“Judges often challenge impact numbers. In our Impact Calculator, we show that 1,000 households divert 120 tonnes, inject ₹18.5 Lakhs into women SHGs, and avoid 180 MT CO₂e based on transparent CPCB and UNEP emission factors.”',
  },
  {
    step: 9,
    tab: 'climate-score',
    title: '9. Climate Activity Profile (82/100)',
    actionDesc: 'Operational score synthesizing consistency, quality, and verified recycling.',
    presenterNote: '“Notice Lakshmi’s 82/100 score. It combines 91% collection consistency and 88% segregation quality. We explicitly clarify: this is NOT a credit score, but an operational activity index.”',
  },
  {
    step: 10,
    tab: 'finance',
    title: '10. Financial Readiness (Satin Finserv Fit)',
    actionDesc: 'The core USP: Transforming recycling activity into microfinance readiness.',
    presenterNote: '“This is our game changer. EcoSakhi is not a lender, but our 146 verified collection records enable partner institutions like Satin Finserv to responsibly underwrite green e-Rickshaw loans or baling machine credit for women micro-entrepreneurs.”',
  },
  {
    step: 11,
    tab: 'recycler',
    title: '11. Verified Recycler Network & Weighbridge',
    actionDesc: 'Secondary reconciliation at certified recycling plant gate.',
    presenterNote: '“To prevent fraud, recyclers like GreenCycle verify incoming batches on facility weighbridges before final escrow release. Pre-sorted feed saves recyclers 20% in sorting waste.”',
  },
  {
    step: 12,
    tab: 'traceability',
    title: '12. Circular Traceability Highway',
    actionDesc: 'Curb-to-pellet chain of custody with cryptographic audit hash.',
    presenterNote: '“Every kilogram is traceable through its 7 lifecycle stages: Household → Collection → Sorting → Weighing → Recycler → Processing → Recovered Material.”',
  },
  {
    step: 13,
    tab: 'admin',
    title: '13. Return to Regional Admin Impact',
    actionDesc: 'Municipal Ward Telemetry across Tamil Nadu districts.',
    presenterNote: '“And finally, municipal bodies track ward-level diversion and export ESG audit CSVs. When you turn waste into income, you turn communities into climate champions.”',
  }
];

export default function GuidedTourModal({ 
  isOpen, 
  onClose, 
  currentStepIndex, 
  onStepChange,
  onOpenRecordModal
}) {
  if (!isOpen) return null;

  const currentStep = TOUR_STEPS[currentStepIndex] || TOUR_STEPS[0];
  const isFirst = currentStepIndex === 0;
  const isLast = currentStepIndex === TOUR_STEPS.length - 1;

  const handleNext = () => {
    if (!isLast) {
      const nextIndex = currentStepIndex + 1;
      onStepChange(nextIndex, TOUR_STEPS[nextIndex]);
      if (TOUR_STEPS[nextIndex].tab === 'record-modal') {
        onOpenRecordModal();
      }
    }
  };

  const handlePrev = () => {
    if (!isFirst) {
      const prevIndex = currentStepIndex - 1;
      onStepChange(prevIndex, TOUR_STEPS[prevIndex]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-lg w-full px-4 animate-in slide-in-from-bottom-5 duration-200">
      <div className="bg-slate-900/95 text-white backdrop-blur-md rounded-2xl border border-slate-700 shadow-2xl p-5 space-y-4">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              2-Minute Live Judge Demo Flow
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400 font-semibold">
              Step {currentStep.step} of 13
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer transition-smooth"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Step Content */}
        <div className="space-y-2">
          <h3 className="text-base font-bold text-white leading-tight">
            {currentStep.title}
          </h3>
          <p className="text-xs text-emerald-300 font-medium">
            {currentStep.actionDesc}
          </p>
          
          <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/80 text-xs text-slate-300 flex items-start gap-2">
            <Volume2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div className="italic leading-relaxed">
              {currentStep.presenterNote}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between pt-1">
          <button
            onClick={handlePrev}
            disabled={isFirst}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer transition-smooth"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous</span>
          </button>

          <div className="flex gap-1">
            {TOUR_STEPS.map((s, idx) => (
              <span 
                key={s.step}
                className={`w-1.5 h-1.5 rounded-full transition-smooth ${
                  idx === currentStepIndex ? 'bg-emerald-400 w-3' : 'bg-slate-700'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-smooth shadow-md shadow-emerald-600/30"
          >
            <span>{isLast ? 'Complete Tour' : 'Next Step'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
