import React, { useState } from 'react';
import { 
  Landmark, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Truck, 
  Coins, 
  ArrowRight, 
  Award, 
  FileText,
  Lock,
  ExternalLink,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FinancialReadinessView() {
  const [showPartnerModal, setShowPartnerModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [consentGiven, setConsentGiven] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const potentialProducts = [
    {
      id: 'prod-1',
      title: 'Green Cargo e-Rickshaw Loan',
      institution: 'Potential Satin Finserv Offering',
      amount: '₹65,000',
      tenure: '18 Months',
      emi: '₹4,150 / month',
      purpose: 'Upgrade from manual cart to electric 3-wheeler loader to 3x collection radius & volume.',
      eligibilityMatch: '96% Match (High Consistency)',
      tag: 'Asset Finance'
    },
    {
      id: 'prod-2',
      title: 'Community Hydraulic Baler Credit',
      institution: 'Potential Satin Finserv Offering',
      amount: '₹42,000',
      tenure: '12 Months',
      emi: '₹3,800 / month',
      purpose: 'Group baling machine to compress PET bottles into dense bales, unlocking 20% higher recycler pricing.',
      eligibilityMatch: '91% Match (Verified Volume)',
      tag: 'Group Enterprise'
    },
    {
      id: 'prod-3',
      title: 'SHG Climate Livelihood Buffer',
      institution: 'Potential Satin Finserv Offering',
      amount: '₹15,000',
      tenure: '6 Months',
      emi: '₹2,650 / month',
      purpose: 'Working capital to provide immediate spot-cash payouts to households during monsoon peak.',
      eligibilityMatch: '98% Match (Clean Wallet Ledger)',
      tag: 'Micro-Credit'
    }
  ];

  const handleApply = (product) => {
    setSelectedProduct(product);
    setShowPartnerModal(true);
  };

  const handleConfirmApplication = (e) => {
    e.preventDefault();
    if (!consentGiven) return;
    setApplicationSubmitted(true);
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } catch {
      // safe fallback
    }
    setTimeout(() => {
      setApplicationSubmitted(false);
      setShowPartnerModal(false);
    }, 2500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold border border-emerald-200">
          <Landmark className="w-3.5 h-3.5 text-emerald-700" />
          <span>Core Strategic Differentiator</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Climate Finance Readiness
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
          Transforming daily physical recycling and material segregation records into verified economic data to help partner lenders like Satin Finserv evaluate responsible microfinance.
        </p>
      </div>

      {/* Mandatory Regulatory Safeguard Box */}
      <div className="p-4 bg-amber-50 rounded-2xl border border-amber-300 flex items-start gap-3 shadow-xs">
        <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-950 leading-relaxed">
          <span className="font-bold">Important Statutory Boundary:</span>{' '}
          <span className="font-semibold underline">
            EcoSakhi does not make lending decisions.
          </span>{' '}
          Verified activity data can help partner financial institutions evaluate appropriate climate-linked financial products responsibly. EcoSakhi is neither a bank nor an NBFC.
        </div>
      </div>

      {/* Collector Readiness Summary Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Evaluated Borrower Entity
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              Lakshmi V. (Malar Magalir SHG)
            </h2>
            <p className="text-xs text-slate-500">
              Tamil Nadu Cluster 4 • Ward 14 Tambaram • EcoSakhi Member since May 2026
            </p>
          </div>

          <div className="text-left sm:text-right">
            <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">
              Readiness Status
            </span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              Building Financial Readiness
            </div>
          </div>
        </div>

        {/* 6 Key Activity Underwriting Indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400">Verified Collections</span>
            <div className="text-2xl font-black text-slate-900">146</div>
            <div className="text-[10px] text-slate-500">Logged on digital scale</div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400">Total Material Tonnage</span>
            <div className="text-2xl font-black text-slate-900">1,842 <span className="text-xs font-normal">kg</span></div>
            <div className="text-[10px] text-blue-600 font-semibold">1.84 MT dry scrap</div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400">Community Earnings</span>
            <div className="text-2xl font-black text-emerald-700">₹62,400</div>
            <div className="text-[10px] text-emerald-600 font-semibold">Documented cash flow</div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400">Collection Consistency</span>
            <div className="text-2xl font-black text-slate-900">91%</div>
            <div className="text-[10px] text-slate-500">High operational discipline</div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400">Recycling Verification</span>
            <div className="text-2xl font-black text-slate-900">87%</div>
            <div className="text-[10px] text-teal-600 font-semibold">Certified weighbridge</div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400">Impact Activity Rating</span>
            <div className="text-2xl font-black text-purple-700">High</div>
            <div className="text-[10px] text-purple-600 font-semibold">Gold Tier Pioneer (82/100)</div>
          </div>
        </div>

        {/* Informational Callout */}
        <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-200 text-xs text-slate-700 space-y-1">
          <div className="font-bold text-emerald-950 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            Why this solves the Informal Economy Lending Dilemma:
          </div>
          <p className="text-slate-600 leading-relaxed">
            Traditionally, Lakshmi is unbankable because her scrap trade was settled in informal cash. Through EcoSakhi, her 146 verified collections and ₹62,400 in documented transactions provide partner lenders with an audited behavioral track record—lowering underwriting risk and eliminating manual field verification costs.
          </p>
        </div>
      </div>

      {/* Partner Products Opportunity Grid (Satin Finserv Context) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Potential Climate-Linked Financial Products
            </h3>
            <p className="text-xs text-slate-500">
              Illustrative products partner institutions like Satin Finserv could offer based on verified activity data
            </p>
          </div>
          <span className="text-[10px] font-mono bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-bold">
            Satin Ecosystem Fit
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {potentialProducts.map((prod) => (
            <div key={prod.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between hover:border-emerald-300 transition-smooth">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                    {prod.tag}
                  </span>
                  <span className="text-xs font-bold text-emerald-700">{prod.eligibilityMatch}</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{prod.title}</h4>
                <div className="text-2xl font-black text-slate-900">{prod.amount}</div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {prod.tenure} • Est. EMI: {prod.emi}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {prod.purpose}
                </p>
              </div>

              <button
                onClick={() => handleApply(prod)}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-smooth mt-2"
              >
                <span>Explore Partner Finance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Consented Partner Finance Modal */}
      {showPartnerModal && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-lg w-full border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-5">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Landmark className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Partner Financing Evaluation</h3>
                  <span className="text-[10px] text-purple-700 font-semibold">{selectedProduct.institution}</span>
                </div>
              </div>
              <button
                onClick={() => setShowPartnerModal(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            {applicationSubmitted ? (
              <div className="p-6 bg-emerald-50 rounded-2xl text-center space-y-2 animate-in zoom-in-95">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-slate-900">Readiness Packet Dispatched!</h4>
                <p className="text-xs text-slate-600">
                  Consented Climate Activity Profile sent to partner underwriter sandbox for evaluation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleConfirmApplication} className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1.5">
                  <div className="font-bold text-slate-900">{selectedProduct.title} ({selectedProduct.amount})</div>
                  <div className="text-slate-600">{selectedProduct.purpose}</div>
                  <div className="text-emerald-700 font-semibold pt-1">
                    Indicative Terms: {selectedProduct.tenure} at {selectedProduct.emi}
                  </div>
                </div>

                {/* Consented Data Sharing Elements */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                    Verified Records Included in Sandbox Packet:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>146 Scale Records</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>₹62,400 Wallet Flow</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>91% Work Consistency</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>82/100 Climate Score</span>
                    </div>
                  </div>
                </div>

                {/* Consent Checkbox */}
                <label className="flex items-start gap-2.5 p-3 bg-slate-100 rounded-xl text-xs text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consentGiven}
                    onChange={(e) => setConsentGiven(e.target.checked)}
                    className="mt-0.5 rounded accent-emerald-600"
                    required
                  />
                  <span>
                    I explicitly give purpose-specific consent (in alignment with Digital Personal Data Protection Act 2023 principles: purpose limitation, data minimization, and right to withdraw) to share my anonymized operational activity profile with partner financial institutions strictly for credit evaluation.
                  </span>
                </label>

                <div className="flex gap-2 pt-2">
                  <button
                    type="submit"
                    disabled={!consentGiven}
                    className="flex-1 py-3 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white font-bold rounded-xl text-xs cursor-pointer transition-smooth shadow-sm"
                  >
                    Submit Consented Packet
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPartnerModal(false)}
                    className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
