import React from 'react';
import { 
  ArrowRight, 
  Recycle, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Coins, 
  Scale, 
  Factory, 
  Landmark, 
  Users, 
  Home, 
  BarChart3, 
  Leaf, 
  AlertTriangle,
  Play,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function LandingPage({ onExploreDemo, onSeeImpact, onCollectorView, onStartTour }) {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-emerald-50/60 via-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-semibold shadow-xs">
                <Leaf className="w-3.5 h-3.5 text-emerald-700" />
                <span>SANKALP by Satin Finserv — The Climate Edition</span>
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                  Turn Waste into <span className="text-emerald-700 underline decoration-emerald-300 underline-offset-4">Income</span>.<br />
                  Turn Communities into <span className="text-slate-900">Climate Champions</span>.
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
                  A climate-tech platform connecting households, women-led community collectors and recyclers — creating measurable environmental impact and verified economic activity.
                </p>
              </div>

              {/* Core Positioning Callout */}
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Core Product Positioning
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Not simply a recycling pickup app. <span className="font-semibold text-slate-800">Climate infrastructure for the underserved circular economy</span> — uniting Waste Collection, Material Traceability, Income Tracking, and Financial Readiness.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onExploreDemo}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md shadow-emerald-700/20 flex items-center gap-2 transition-smooth hover:scale-[1.02] cursor-pointer text-sm"
                >
                  <span>Explore Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onSeeImpact}
                  className="bg-white hover:bg-slate-50 text-slate-800 font-semibold px-5 py-3.5 rounded-xl border border-slate-300 shadow-xs flex items-center gap-2 transition-smooth cursor-pointer text-sm"
                >
                  <BarChart3 className="w-4 h-4 text-emerald-700" />
                  <span>See Impact</span>
                </button>

                <button
                  onClick={onCollectorView}
                  className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold px-5 py-3.5 rounded-xl border border-emerald-200 transition-smooth cursor-pointer text-sm flex items-center gap-2"
                >
                  <Users className="w-4 h-4 text-emerald-700" />
                  <span>Join as Collector</span>
                </button>

                <button
                  onClick={onStartTour}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-4 py-3.5 rounded-xl shadow-xs transition-smooth cursor-pointer text-sm flex items-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-emerald-400" />
                  <span>2-Min Flow</span>
                </button>
              </div>

              {/* Sub-notice */}
              <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Live Hackathon Prototype • Tamil Nadu Pilot Cluster • Local Zero-Cost Execution</span>
              </p>
            </div>

            {/* Right Visual Column (Empowered SHG Leader Photo + Live Metrics Overlay) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <img 
                  src="/ecosakhi_hero.jpg" 
                  alt="Empowered Indian woman community collector with digital scale" 
                  className="w-full h-[400px] object-cover object-center filter saturate-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-black/20 pointer-events-none" />

                {/* Overlaid Floating Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 shadow-md">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Target Persona</div>
                  <div className="text-xs font-bold text-slate-900">Lakshmi (Malar Magalir SHG, TN)</div>
                </div>

                {/* Overlaid Bottom Stat Card */}
                <div className="absolute bottom-4 inset-x-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 p-3.5 rounded-xl text-white">
                  <div className="flex items-center justify-between text-xs pb-1 border-b border-slate-700/60 mb-2">
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified Collector Activity
                    </span>
                    <span className="text-slate-400 text-[10px]">Demo Data</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase">Monthly Earned</div>
                      <div className="text-sm font-bold text-emerald-400">₹28,450</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase">Consistency</div>
                      <div className="text-sm font-bold text-white">91%</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase">Climate Score</div>
                      <div className="text-sm font-bold text-amber-400">82/100</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* VISUAL VALUE CHAIN STRIP */}
          <div className="mt-14 pt-8 border-t border-slate-200">
            <div className="text-center mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                The Verified Circular Highway
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 text-center">
              {[
                { title: '1. Household', desc: 'Schedules pickup via web app', icon: Home, color: 'text-blue-600' },
                { title: '2. Collector', desc: 'SHG weighs & sorts at curb', icon: Users, color: 'text-emerald-600' },
                { title: '3. Recycler', desc: 'Verified batch weighbridge', icon: Factory, color: 'text-amber-600' },
                { title: '4. Income', desc: 'Instant digital wallet payout', icon: Coins, color: 'text-teal-600' },
                { title: '5. Impact', desc: 'Avoided CO₂e & landfill data', icon: Leaf, color: 'text-green-600' },
                { title: '6. Finance', desc: 'Partner microfinance readiness', icon: Landmark, color: 'text-purple-600' },
              ].map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs relative group hover:border-emerald-300 transition-smooth">
                    <div className={`w-8 h-8 rounded-lg bg-slate-50 mx-auto flex items-center justify-center mb-2 ${step.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-slate-800">{step.title}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">{step.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE PROBLEM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold tracking-wider text-emerald-800 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            The Core Challenge
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Waste has value. But the people handling it often cannot capture or prove that value.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            In many communities, the circular economy is broken by lack of price transparency, zero verifiable digital records, and institutional exclusion.
          </p>
        </div>

        {/* 4-Stakeholder Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Households */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 hover:shadow-md transition-smooth">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Home className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Households</h3>
            <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside">
              <li>Do not know which waste is truly recyclable</li>
              <li>No transparent idea of what material is worth</li>
              <li>Uncertain where dry scrap actually ends up</li>
              <li>Waste ends up in mixed municipal dump yards</li>
            </ul>
          </div>

          {/* Card 2: Women SHGs & Collectors */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 hover:shadow-md transition-smooth">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Small Collectors & SHGs</h3>
            <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside">
              <li>Vulnerable to volatile scrap middleman rates</li>
              <li>Zero digital transaction records or receipts</li>
              <li>Invisible informal cash-only earnings</li>
              <li>Cannot prove income to access formal finance</li>
            </ul>
          </div>

          {/* Card 3: Recyclers */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 hover:shadow-md transition-smooth">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Factory className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Certified Recyclers</h3>
            <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside">
              <li>Inconsistent and volatile daily raw feed</li>
              <li>High contamination rates (20–35% unrecyclable debris)</li>
              <li>Unreliable collection data and origin proofs</li>
              <li>Struggle to meet statutory CPCB EPR compliance</li>
            </ul>
          </div>

          {/* Card 4: Financial Institutions */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 hover:shadow-md transition-smooth">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Landmark className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Financial Institutions</h3>
            <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside">
              <li>Difficulty assessing informal climate livelihoods</li>
              <li>No reliable transaction or repayment history</li>
              <li>High field customer acquisition cost (CAC)</li>
              <li>Lack of structured climate micro-lending data</li>
            </ul>
          </div>
        </div>

        {/* CPCB Verified Anchor Citation Box */}
        <div className="mt-8 p-4 bg-amber-50/80 rounded-xl border border-amber-200 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-950 leading-relaxed">
            <span className="font-bold">Verified Benchmark:</span> According to the{' '}
            <span className="font-semibold underline">Central Pollution Control Board (CPCB)</span> and{' '}
            <span className="font-semibold underline">NITI Aayog (2021)</span>, India generates over 62 million tonnes of municipal solid waste annually, yet less than 20% of dry recyclables are channelled into formal, traceable recovery streams. Informal collectors recover up to 80% of plastics, yet capture under 15% of downstream value due to price opacity and lack of financial identity.
          </div>
        </div>
      </section>

      {/* 3. HOW ECOSAKHI WORKS */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold tracking-wider text-emerald-800 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Closed-Loop Operational Model
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              How EcoSakhi Operates
            </h2>
            <p className="text-slate-600 text-sm">
              From citizen doorstep to verified recycling pellets — each transaction creates transparent income, audited emissions data, and financial readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Schedule Pickup',
                desc: 'Households specify dry recyclable type (Plastic, Paper, Metal, Glass, E-waste) and select a convenient collection window.',
                icon: Home
              },
              {
                step: '02',
                title: 'Weigh & Categorize',
                desc: 'Trained SHG partners arrive with digital scales, verify sorting quality, and weigh material at the doorstep.',
                icon: Scale
              },
              {
                step: '03',
                title: 'EcoVision AI Assistant',
                desc: 'Collectors use on-device computer vision to grade polymer resin codes and check contamination risks before bagging.',
                icon: Sparkles
              },
              {
                step: '04',
                title: 'Recycler Verification',
                desc: 'Aggregated community batches are received at certified recycling facilities with weighbridge confirmation.',
                icon: Factory
              },
              {
                step: '05',
                title: 'Instant Wallet Payout',
                desc: 'Indicative market rates are credited instantly to the collector’s digital wallet with itemized digital receipts.',
                icon: Coins
              },
              {
                step: '06',
                title: 'Financial Readiness',
                desc: 'Consistent collection history builds an audited Climate Activity Profile that partner lenders like Satin Finserv can evaluate.',
                icon: Landmark
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-black text-slate-200">{item.step}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. COMPETITIVE DIFFERENTIATION (USP MATRIX) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-bold tracking-wider text-emerald-800 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Market Differentiation
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Why EcoSakhi is Distinct
          </h2>
          <p className="text-slate-600 text-sm">
            We do not compete as a consumer scrap app. EcoSakhi builds the underlying social-climate rails uniting Collection, Traceability, Income, and Financial Readiness.
          </p>
        </div>

        {/* Table comparison */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-slate-800 uppercase tracking-wider font-semibold border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Capability Dimension</th>
                <th className="px-4 py-4">Informal Scrap</th>
                <th className="px-4 py-4">Scrap Aggregator Apps</th>
                <th className="px-4 py-4">B2B ESG Portals</th>
                <th className="px-6 py-4 bg-emerald-50 text-emerald-900 font-bold border-l border-emerald-200">EcoSakhi Platform</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-6 py-3.5 font-bold text-slate-900">Doorstep Dry Collection</td>
                <td className="px-4 py-3.5">Irregular / Call</td>
                <td className="px-4 py-3.5">Yes</td>
                <td className="px-4 py-3.5">No (Industrial only)</td>
                <td className="px-6 py-3.5 bg-emerald-50/40 text-emerald-900 font-semibold border-l border-emerald-200">✓ On-Demand Citizen App</td>
              </tr>
              <tr>
                <td className="px-6 py-3.5 font-bold text-slate-900">Women SHG Livelihood Focus</td>
                <td className="px-4 py-3.5">Exploitative</td>
                <td className="px-4 py-3.5">Low (Gig model)</td>
                <td className="px-4 py-3.5">Not Applicable</td>
                <td className="px-6 py-3.5 bg-emerald-50/40 text-emerald-900 font-semibold border-l border-emerald-200">✓ SHG-First Empowerment</td>
              </tr>
              <tr>
                <td className="px-6 py-3.5 font-bold text-slate-900">Price Transparency</td>
                <td className="px-4 py-3.5">Opaque / Middlemen</td>
                <td className="px-4 py-3.5">Variable Markup</td>
                <td className="px-4 py-3.5">N/A</td>
                <td className="px-6 py-3.5 bg-emerald-50/40 text-emerald-900 font-semibold border-l border-emerald-200">✓ Published Indicative Benchmarks</td>
              </tr>
              <tr>
                <td className="px-6 py-3.5 font-bold text-slate-900">Material Traceability</td>
                <td className="px-4 py-3.5">Zero Records</td>
                <td className="px-4 py-3.5">Drop-off point only</td>
                <td className="px-4 py-3.5">Paper certificates</td>
                <td className="px-6 py-3.5 bg-emerald-50/40 text-emerald-900 font-semibold border-l border-emerald-200">✓ Curb-to-Pellet Digital Hash</td>
              </tr>
              <tr>
                <td className="px-6 py-3.5 font-bold text-slate-900">AI Material Classification</td>
                <td className="px-4 py-3.5">None</td>
                <td className="px-4 py-3.5">None</td>
                <td className="px-4 py-3.5">None</td>
                <td className="px-6 py-3.5 bg-emerald-50/40 text-emerald-900 font-semibold border-l border-emerald-200">✓ EcoVision Computer Vision</td>
              </tr>
              <tr>
                <td className="px-6 py-3.5 font-bold text-slate-900">Climate Impact Accounting</td>
                <td className="px-4 py-3.5">None</td>
                <td className="px-4 py-3.5">Simple kg counts</td>
                <td className="px-4 py-3.5">Aggregated Scope 3</td>
                <td className="px-6 py-3.5 bg-emerald-50/40 text-emerald-900 font-semibold border-l border-emerald-200">✓ Verified CO₂e & Landfill Metrics</td>
              </tr>
              <tr className="bg-emerald-50/60 font-bold">
                <td className="px-6 py-4 text-emerald-950">Financial Readiness for Lenders</td>
                <td className="px-4 py-4 text-slate-400">Zero</td>
                <td className="px-4 py-4 text-slate-400">Zero</td>
                <td className="px-4 py-4 text-slate-400">Zero</td>
                <td className="px-6 py-4 bg-emerald-100 text-emerald-900 border-l border-emerald-200">★ Audited Climate Activity Profile</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. STRATEGIC FIT WITH SATIN FINSERV */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white p-8 sm:p-12 rounded-3xl shadow-xl border border-emerald-900/60 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
              <Landmark className="w-3.5 h-3.5" />
              <span>SANKALP Competition Alignment</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Why Satin Finserv? A Natural Strategic Fit
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Satin Finserv’s mission is empowering underserved micro-entrepreneurs and women in semi-urban India. Informal waste collectors run daily, revenue-generating micro-enterprises, but lack formal proof of income.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-xs">
                <div className="text-emerald-400 font-bold text-sm mb-1">EcoSakhi Provides:</div>
                <ul className="text-xs text-slate-300 space-y-1">
                  <li>• 146+ Verified collection events</li>
                  <li>• Documented monthly cash flow (₹28,450)</li>
                  <li>• High collection consistency (91%)</li>
                  <li>• Climate Activity Profile (82/100)</li>
                </ul>
              </div>

              <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-xs">
                <div className="text-emerald-400 font-bold text-sm mb-1">Satin Could Explore:</div>
                <ul className="text-xs text-slate-300 space-y-1">
                  <li>• Green e-Rickshaw & cargo loader loans</li>
                  <li>• Hydraulic baling machine asset finance</li>
                  <li>• Women SHG working capital credit lines</li>
                  <li>• Low customer acquisition cost (CAC)</li>
                </ul>
              </div>
            </div>

            {/* Regulatory Safeguard Notice */}
            <div className="p-3.5 bg-black/40 rounded-xl border border-emerald-500/30 text-xs text-slate-300">
              <span className="font-bold text-emerald-400">Important Governance Note:</span> EcoSakhi creates verified economic and environmental activity data that can support responsible climate-linked financial products offered by partner financial institutions. EcoSakhi is not a bank or lender, and does not make autonomous lending decisions.
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRUST BY DESIGN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-bold tracking-wider text-emerald-800 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Governance & Integrity
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Trust by Design
          </h2>
          <p className="text-slate-600 text-sm">
            Ethical, transparent architecture that eliminates greenwashing and respects user privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: 'Human Verification',
              desc: 'AI provides classification support, but physical hand inspection and digital scale weighbridge confirm final batch numbers.',
              icon: Users
            },
            {
              title: 'Transparent Calculations',
              desc: 'Every gram of diverted waste and kilogram of avoided CO₂e is calculated using open CPCB and UNEP emission factors.',
              icon: Scale
            },
            {
              title: 'Tamper-Proof Audit Trail',
              desc: 'Each batch is assigned a unique cryptographic Batch ID linking the household pickup, collector scale, and recycler weighbridge.',
              icon: ShieldCheck
            },
            {
              title: 'Data Privacy & Consent',
              desc: 'Strict DPDP Act 2023 compliance. Activity profiles are anonymized and shared with lenders only upon explicit borrower consent.',
              icon: CheckCircle2
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. SCALABILITY ROADMAP */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold tracking-wider text-emerald-800 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Execution Feasibility
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              3-Stage Scalability Roadmap
            </h2>
            <p className="text-slate-600 text-sm">
              Pragmatic rollout leveraging existing women SHG networks and certified recycling mills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  Phase 1: Pilot
                </span>
                <span className="text-xs text-slate-400 font-mono">0 – 6 Months</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Tamil Nadu Community Hub</h3>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• 500 – 1,000 Participating households</li>
                <li>• 24 Women SHG collectors onboarded</li>
                <li>• 3 Certified Recycler MoUs (Plastic, Metal, E-Waste)</li>
                <li>• Validate manual verification and wallet payouts</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                  Phase 2: Scale
                </span>
                <span className="text-xs text-slate-400 font-mono">6 – 18 Months</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Regional Urban Expansion</h3>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• Expand to 5 municipal districts in South India</li>
                <li>• 25,000 households and 250+ SHG members</li>
                <li>• On-device EcoVision model v1.0 deployment</li>
                <li>• Pilot Climate Activity Profile integration with Satin</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
                  Phase 3: Network
                </span>
                <span className="text-xs text-slate-400 font-mono">18 – 36 Months</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Pan-India Circular Highway</h3>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• Multi-state expansion via State Livelihood Missions</li>
                <li>• 250,000+ households; 2,500+ women micro-entrepreneurs</li>
                <li>• Institutional EPR and Municipal analytics licensing</li>
                <li>• Full API integration for climate-linked microfinance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. VISION & CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            “Every kilogram recycled should create both environmental value and economic opportunity.”
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Join us in building India’s trusted digital infrastructure for inclusive circular economies.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={onExploreDemo}
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md flex items-center gap-2 cursor-pointer text-sm"
            >
              <span>Launch Live Prototype</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onStartTour}
              className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-5 py-3.5 rounded-xl flex items-center gap-2 cursor-pointer text-sm"
            >
              <Play className="w-3.5 h-3.5 fill-current text-emerald-400" />
              <span>Watch 2-Min Live Walkthrough</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
