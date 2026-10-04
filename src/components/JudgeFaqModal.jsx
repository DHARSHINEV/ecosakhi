import React, { useState } from 'react';
import { 
  HelpCircle, 
  X, 
  Search, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Tag,
  ShieldCheck
} from 'lucide-react';

export const JUDGE_QUESTIONS = [
  {
    id: 1,
    category: 'Adoption & Value',
    q: 'Why will people use EcoSakhi instead of municipal bins or local kabadiwalas?',
    a: 'Households face two extremes: throwing unsegregated waste into municipal bins where recyclable value is completely lost, or waiting for unstandardized scrap buyers with opaque pricing. EcoSakhi provides 3 core benefits: 1) On-demand doorstep scheduling; 2) Transparent published indicative pricing; 3) Verified circular receipts proving their waste reached certified recycling plants instead of open landfills.'
  },
  {
    id: 2,
    category: 'Competition',
    q: 'Why is this better than existing waste collection apps (e.g. Recykal, Kabadiwala apps)?',
    a: 'Existing apps either operate as consumer scrap aggregators (maximizing trading margins) or enterprise ERPs (for FMCG plastic credits). EcoSakhi focuses on the missing link: Community-led informal workforce formalization and climate-linked financial readiness. Instead of replacing women SHGs with gig fleets, EcoSakhi equips local SHGs with digital tools, verifiable activity ledgers, and direct links to certified recyclers.'
  },
  {
    id: 3,
    category: 'Business Model',
    q: 'How do you make money? What is your business model?',
    a: 'We operate a multi-sided B2B model: 1) Recycler Platform Fee (3–5% on high-grade, pre-segregated bulk material delivered, saving recyclers 20% in sorting waste); 2) Corporate EPR & ESG Traceability SaaS (selling audited digital traceability certificates); 3) Consented Climate Activity Profile API for Financial Partners; 4) Municipal Ward Segregation Dashboards. Crucially, citizen pickup scheduling and SHG collector tools are 100% free.'
  },
  {
    id: 4,
    category: 'Unit Economics',
    q: 'Who pays? Won’t recyclers resist paying fees when they operate on thin margins?',
    a: 'Recyclers operate on thin margins because 20–35% of incoming informal scrap is unusable contamination (dirt, moisture, non-recyclables). By delivering pre-sorted, AI-assisted, and verified purity batches from trained SHGs, EcoSakhi saves recyclers far more in processing downtime and sorting yield than our 3–5% platform fee.'
  },
  {
    id: 5,
    category: 'Compliance',
    q: 'How do you verify recyclers?',
    a: 'Recyclers must provide: 1) Valid State Pollution Control Board (SPCB) Consent to Operate (CTO) under Plastic/Solid Waste Rules; 2) GST registration and physical facility geo-tagging; 3) Verified processing capacity audits; 4) Digital weighbridge gate integration for incoming batches.'
  },
  {
    id: 6,
    category: 'Integrity & Fraud',
    q: 'How do you prevent fake collection records (phantom weights)?',
    a: 'Through bilateral reconciliation and physical choke points: 1) Doorstep collection does not count as "verified" until received at the recycler weighbridge; 2) GPS and time co-location at collection; 3) Statistical anomaly algorithms flagging unrealistic volumes; 4) No financial platform arbitrage (scores do not yield unbacked cash grants, eliminating fraud incentives).'
  },
  {
    id: 7,
    category: 'Technology & AI',
    q: 'How is AI actually used in the platform?',
    a: 'AI is applied strictly to high-friction manual bottlenecks: 1) EcoVision on-device computer vision assisting field collectors in identifying polymer resin codes (PET vs HDPE vs multilayered) and contamination; 2) Unsupervised anomaly detection on weights; 3) Route optimization clustering daily pickups.'
  },
  {
    id: 8,
    category: 'Technology & AI',
    q: 'What happens if the AI misclassifies waste?',
    a: 'EcoVision is explicitly architected as a human-in-the-loop decision-support tool, not an autonomous gatekeeper. If confidence is below 85%, the system prompts for manual inspection. The physical hand-sort and recycler gate weighbridge remain the authoritative ground truth.'
  },
  {
    id: 9,
    category: 'Climate Impact',
    q: 'How do you calculate CO₂e impact?',
    a: 'We use the Avoided Burden Lifecycle Assessment (LCA) methodology: Net CO₂e Avoided = (Emissions from Virgin Material Production + Landfill Methane Baseline) - (Collection Transport + Mechanical Recycling Processing). Mechanically recycling 1 kg of PET avoids ~1.6 kg CO₂e compared to virgin fossil resin.'
  },
  {
    id: 10,
    category: 'Climate Impact',
    q: 'Where do your emission factors come from?',
    a: 'Our emission factors come directly from authoritative, published sources: CPCB EPR Guidelines (2022), US EPA WARM v15, and UNEP/NITI Aayog (2021) Urban Waste assessments. Our Impact Calculator exposes all assumptions and allows configurable toggling.'
  },
  {
    id: 11,
    category: 'Trust & ESG',
    q: 'How do you prevent greenwashing?',
    a: 'Greenwashing is eliminated through unique cryptographic Batch IDs and physical closed-loop confirmation: every gram requires matching curb pickup records, transit manifests, and receiving recycler weighbridge certificates.'
  },
  {
    id: 12,
    category: 'Satin Finserv Fit',
    q: 'Why does Satin Finserv fit this idea so naturally?',
    a: 'Satin Finserv empowers underserved micro-entrepreneurs and women in semi-urban India. Informal waste collectors run active, revenue-generating micro-enterprises but lack bankable paperwork. EcoSakhi transforms their daily physical labour into an audited, verifiable economic and climate activity ledger—allowing Satin to underwrite livelihood credit, green asset finance (e-loaders, balers), and working capital with reduced risk.'
  },
  {
    id: 13,
    category: 'Social Impact',
    q: 'How does this specifically help women?',
    a: 'Women informal collectors in India face extreme price exploitation and health risks. EcoSakhi formalizes them as recognized community green champions, provides transparent published scrap pricing on their mobile devices, and creates an independent digital earnings ledger for financial autonomy.'
  },
  {
    id: 14,
    category: 'Financial Inclusion',
    q: 'How does this improve financial inclusion?',
    a: 'Financial inclusion requires access to productive credit. Because informal workers deal in cash, their credit bureau score is zero. EcoSakhi builds a surrogate behavioural track record (collection consistency, verified throughput, low contamination) that partner lenders can evaluate responsibly.'
  },
  {
    id: 15,
    category: 'Regulatory',
    q: 'Are you providing loans directly?',
    a: 'No. EcoSakhi is neither a bank nor an NBFC. We do not originate balance-sheet risk or make automated lending decisions. We act purely as a verified technology and data infrastructure platform, providing consented operational records to licensed partners like Satin Finserv.'
  },
  {
    id: 16,
    category: 'Regulatory',
    q: 'Are you a credit scoring company?',
    a: 'No. The EcoSakhi Climate Activity Profile is NOT a credit score. It is an operational and circular activity index. Licensed credit bureaus (CIBIL, Equifax) remain the statutory credit authorities.'
  },
  {
    id: 17,
    category: 'Data Privacy',
    q: 'What happens to user data? How do you handle privacy?',
    a: 'We adhere strictly to India’s Digital Personal Data Protection (DPDP) Act 2023. User data is never shared without explicit, purpose-specific opt-in consent. Financial readiness profiles are anonymized until a user requests partner product evaluation.'
  },
  {
    id: 18,
    category: 'Scalability',
    q: 'How will you scale outside Tamil Nadu?',
    a: 'Via an asset-light model: partnering with existing State Rural Livelihood Missions (TNSRLM, Kudumbashree, JEEViKA) which already have structured women SHG federations, and standardizing our digital recycler onboarding API across states.'
  },
  {
    id: 19,
    category: 'Risk Mitigation',
    q: 'What is the biggest implementation risk, and how do you mitigate it?',
    a: 'The biggest risk is off-platform bypass (collectors and households trading cash directly). We mitigate this by passing on primary recycler bulk premiums (15–20% higher than local scrap shops) and tying formal microfinance readiness exclusively to app-verified transactions.'
  },
  {
    id: 20,
    category: 'Roadmap & Funding',
    q: 'What would you build or do next if you win this competition and receive pilot funding?',
    a: 'Execute our 100-Day Action Plan: 1) Deploy across 2 municipal wards in Tamil Nadu with 25 women collectors and 2 certified recyclers; 2) Introduce low-cost Bluetooth digital scales; 3) Test our consented data API with Satin Finserv’s underwriting sandbox.'
  },
  {
    id: 21,
    category: 'Roadmap',
    q: 'What is your 100-day execution roadmap?',
    a: 'Days 1–30: Finalize SHG MoUs, onboard 2 recyclers. Days 31–60: Launch closed beta across 500 households, run digital literacy sessions. Days 61–85: Reach 10 tonnes of verified material, validate same-day wallet payouts. Days 86–100: Publish pilot circularity audit and test Satin sandbox integration.'
  },
  {
    id: 22,
    category: 'Defensibility',
    q: 'Who are your competitors and what is your moat?',
    a: 'Scrap aggregators (Recykal, Kabadiwala) treat collectors as low-cost gig workers without financial mobility. Fintechs have zero ground-level material traceability. EcoSakhi’s moat is the defensible intersection: community SHG trust + physical circular traceability + financial inclusion data.'
  },
  {
    id: 23,
    category: 'Operations',
    q: 'What happens if recyclers delay payments to collectors?',
    a: 'To protect daily-wage collectors, EcoSakhi provides instant platform pre-settlement to the collector wallet upon verified handover at the aggregation hub, settling with certified recyclers on standard 7-day terms backed by working capital.'
  },
  {
    id: 24,
    category: 'Municipal Relations',
    q: 'What happens if local municipal bodies view you as competition?',
    a: 'We are collaborative infrastructure, not competitors. Municipalities struggle with Swachh Bharat segregation targets. EcoSakhi increases ward segregation at zero municipal capital expenditure and provides them with compliance dashboards.'
  },
  {
    id: 25,
    category: 'Jury Summary',
    q: 'Why should the judges choose EcoSakhi as the winner of SANKALP?',
    a: 'Because EcoSakhi embodies the core purpose of SANKALP by Satin Finserv: It tackles municipal waste at source, creates quantifiable climate impact, empowers vulnerable women collectors with dignified livelihoods, and builds the verifiable data highway for next-generation climate microfinance.'
  }
];

export default function JudgeFaqModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedId, setExpandedId] = useState(1);

  if (!isOpen) return null;

  const categories = ['All', ...new Set(JUDGE_QUESTIONS.map(q => q.category))];

  const filteredQuestions = JUDGE_QUESTIONS.filter(q => {
    const matchesSearch = q.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          q.a.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'All' || q.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-4xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">25 Judge Defense Questions & Answers</h3>
              <span className="text-xs text-slate-500">Comprehensive FAQ for SANKALP by Satin Finserv Jury</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="p-4 border-b border-slate-100 bg-white space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions or answers (e.g. AI, credit score, revenue, Satin, fraud)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg whitespace-nowrap font-medium transition-smooth cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Questions Accordion List */}
        <div className="p-6 flex-1 overflow-y-auto space-y-3">
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-xs">
              No matching questions found. Try searching for "Satin", "AI", or "model".
            </div>
          ) : (
            filteredQuestions.map((q) => {
              const isExpanded = expandedId === q.id;
              return (
                <div 
                  key={q.id} 
                  className={`rounded-2xl border transition-smooth ${
                    isExpanded 
                      ? 'border-emerald-300 bg-emerald-50/20 shadow-xs' 
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : q.id)}
                    className="w-full p-4 text-left flex items-start justify-between gap-3 cursor-pointer"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          Q{q.id}
                        </span>
                        <span className="text-[10px] text-slate-400 uppercase font-semibold">
                          {q.category}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        {q.q}
                      </h4>
                    </div>

                    <div className="p-1 rounded-md text-slate-400 hover:text-slate-600">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-4 pb-4 pt-1 border-t border-slate-100 text-xs text-slate-700 leading-relaxed space-y-2">
                      <p>{q.a}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Showing {filteredQuestions.length} of 25 jury defense questions</span>
          <span className="font-medium text-emerald-800">SANKALP by Satin Finserv Edition</span>
        </div>

      </div>
    </div>
  );
}
