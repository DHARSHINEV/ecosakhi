import React from 'react';
import { 
  Activity, 
  Award, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  TrendingUp, 
  Calendar, 
  Leaf, 
  Scale, 
  Users,
  ChevronRight,
  Landmark
} from 'lucide-react';
import { INITIAL_COLLECTOR } from '../data/mockData';

export default function ClimateScoreView({ onExploreFinance }) {
  const metrics = [
    {
      label: 'Collection Consistency',
      score: 91,
      weight: '25%',
      desc: 'Active on 146 out of 160 operational days. Demonstrates high work regularity.',
      icon: Calendar,
      color: 'bg-emerald-600'
    },
    {
      label: 'Segregation Quality Grade',
      score: 88,
      weight: '25%',
      desc: 'Contamination rate below 4.5% across PET, cardboard, and metal consignments.',
      icon: Scale,
      color: 'bg-blue-600'
    },
    {
      label: 'Verified Recycling Rate',
      score: 87,
      weight: '20%',
      desc: '100% of dispatched batches confirmed by certified recycler weighbridge receipts.',
      icon: ShieldCheck,
      color: 'bg-teal-600'
    },
    {
      label: 'Community Participation',
      score: 84,
      weight: '15%',
      desc: 'Serves 186 active households in Ward 14 Tambaram cluster with zero disputes.',
      icon: Users,
      color: 'bg-purple-600'
    },
    {
      label: 'Environmental Impact Output',
      score: 78,
      weight: '15%',
      desc: 'Over 624 kg CO₂e verified avoidance and 1,248 kg dry waste diverted.',
      icon: Leaf,
      color: 'bg-amber-600'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
          <Activity className="w-3.5 h-3.5" />
          <span>Operational & Circular Index</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          EcoSakhi Climate Score
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
          A multidimensional activity profile synthesizing collection consistency, material segregation purity, and verified downstream recycling.
        </p>
      </div>

      {/* Mandatory Disclaimer Box */}
      <div className="p-4 bg-amber-50 rounded-2xl border border-amber-300 flex items-start gap-3 shadow-xs">
        <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-950 leading-relaxed">
          <span className="font-bold">Important Competition Notice:</span>{' '}
          <span className="font-semibold underline">
            Climate activity profile — prototype concept.
          </span>{' '}
          This is an operational and environmental activity index. It is <strong>NOT a credit score</strong> and does not replace statutory credit bureaus (CIBIL/CRIF). It provides contextual operational data that partner institutions like Satin Finserv can evaluate alongside standard underwriting.
        </div>
      </div>

      {/* Primary Score Hero Card */}
      <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-emerald-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Score Gauge Visual */}
        <div className="flex items-center gap-6">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-800"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-emerald-400 stroke-current transition-smooth"
                strokeWidth="3.5"
                strokeDasharray="82, 100"
                strokeLinecap="round"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-3xl font-black text-white">82</span>
              <span className="text-[10px] text-emerald-400 font-semibold tracking-wider uppercase">Out of 100</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
              Climate Activity Profile
            </span>
            <h2 className="text-xl font-bold text-white">
              Gold Tier Climate Pioneer
            </h2>
            <p className="text-xs text-slate-300">
              Lakshmi V. • Malar Magalir SHG (Tamil Nadu Cluster 4)
            </p>
            <div className="flex items-center gap-2 pt-1 text-[11px] text-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5" /> Top 5% in Southern Region
            </div>
          </div>
        </div>

        {/* Right CTA to Financial Readiness */}
        <div className="text-center md:text-right space-y-2">
          <div className="text-xs text-slate-300">
            Partner Microfinance Match:
          </div>
          <div className="text-sm font-bold text-emerald-400">
            High Financial Readiness Rating
          </div>
          <button
            onClick={onExploreFinance}
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer transition-smooth shadow-md"
          >
            <span>Explore Partner Finance</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* 5 Component Breakdown Cards */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Explainable Component Scoring
            </h3>
            <p className="text-xs text-slate-500">
              How the 82/100 composite index is mathematically determined
            </p>
          </div>
          <span className="text-xs font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-semibold">
            Formula v1.2
          </span>
        </div>

        <div className="space-y-4">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <div className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-700">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span>{item.label}</span>
                    <span className="text-[10px] text-slate-400 font-normal">({item.weight} weight)</span>
                  </div>
                  <span className="text-sm font-black text-slate-900">{item.score}%</span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${item.color} transition-all duration-500`}
                    style={{ width: `${item.score}%` }}
                  />
                </div>

                <p className="text-[11px] text-slate-500">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
