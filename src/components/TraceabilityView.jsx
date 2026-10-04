import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Home, 
  Users, 
  Sparkles, 
  Scale, 
  Factory, 
  Recycle, 
  Boxes,
  QrCode,
  ShieldCheck,
  Search
} from 'lucide-react';
import { SAMPLE_TRACEABILITY_BATCH } from '../data/mockData';

export default function TraceabilityView() {
  const [activeBatch, setActiveBatch] = useState(SAMPLE_TRACEABILITY_BATCH);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
          <FileText className="w-3.5 h-3.5" />
          <span>Circular Economy Verification Highway</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Material Traceability Ledger
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
          End-to-end chain of custody tracking every kilogram from citizen curb to pelletized secondary raw material.
        </p>
      </div>

      {/* Interactive Batch Search / Lookup */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
        <Search className="w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Lookup Batch ID (e.g. PET-TN-2026-0941)"
          className="w-full text-xs font-mono focus:outline-none text-slate-800"
        />
        <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200 font-bold shrink-0">
          Immutable Hash Verified
        </span>
      </div>

      {/* Required Circular Material Journey Strip */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400">Circular Lifecycle Journey</span>
            <h2 className="text-base font-bold text-slate-900">
              Chain of Custody Stages
            </h2>
          </div>
          <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full border border-emerald-200">
            Active Batch
          </span>
        </div>

        {/* 7-Step Visual Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-center">
          {[
            { label: 'Household', icon: Home, status: 'Completed ✓' },
            { label: 'Collection', icon: Users, status: 'Completed ✓' },
            { label: 'Sorting', icon: Sparkles, status: 'Completed ✓' },
            { label: 'Weighing', icon: Scale, status: 'Completed ✓' },
            { label: 'Recycler', icon: Factory, status: 'Received ✓' },
            { label: 'Processing', icon: Recycle, status: 'In Progress' },
            { label: 'Recovered', icon: Boxes, status: 'Upcoming' },
          ].map((step, idx) => {
            const Icon = step.icon;
            const isDone = step.status.includes('✓');
            const isCurrent = step.status === 'In Progress';
            return (
              <div 
                key={idx} 
                className={`p-3 rounded-xl border text-center transition-smooth ${
                  isDone 
                    ? 'border-emerald-300 bg-emerald-50/60' 
                    : isCurrent 
                    ? 'border-blue-400 bg-blue-50/50 ring-2 ring-blue-500/20' 
                    : 'border-slate-200 bg-slate-50 opacity-70'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg mx-auto flex items-center justify-center mb-1.5 ${
                  isDone ? 'bg-emerald-600 text-white' : isCurrent ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-slate-900 leading-tight">{step.label}</div>
                <div className={`text-[10px] font-semibold mt-0.5 ${
                  isDone ? 'text-emerald-700' : isCurrent ? 'text-blue-700' : 'text-slate-400'
                }`}>
                  {step.status}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Batch Specification Card (Prompt Specified) */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="text-xs font-mono font-bold text-slate-400">
              BATCH #{activeBatch.batchId}
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              {activeBatch.material}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Origin: {activeBatch.origin} • Collector: {activeBatch.collector}
            </p>
          </div>

          <div className="w-12 h-12 bg-white p-1 rounded-xl border border-slate-200 shadow-xs flex items-center justify-center">
            <QrCode className="w-10 h-10 text-slate-800" />
          </div>
        </div>

        {/* 4 Status Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
            <span className="text-[10px] uppercase font-bold text-emerald-800">Curb Collection</span>
            <div className="text-sm font-bold text-emerald-900">Collected ✓</div>
          </div>
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
            <span className="text-[10px] uppercase font-bold text-emerald-800">Grade Inspection</span>
            <div className="text-sm font-bold text-emerald-900">Sorted ✓</div>
          </div>
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
            <span className="text-[10px] uppercase font-bold text-emerald-800">Scale Reading</span>
            <div className="text-sm font-bold text-emerald-900">Verified ✓ (12.5 kg)</div>
          </div>
          <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 text-center">
            <span className="text-[10px] uppercase font-bold text-blue-800">Weighbridge</span>
            <div className="text-sm font-bold text-blue-900">Recycler Received ✓</div>
          </div>
        </div>

        {/* Audit Hash & Compliance */}
        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
            <span className="text-slate-600">Tamper-Proof Audit Hash:</span>
            <code className="text-slate-900 font-mono font-bold bg-white px-2 py-0.5 rounded border border-slate-200">
              {activeBatch.hash}
            </code>
          </div>
          <span className="text-emerald-700 font-bold text-[11px]">
            CPCB EPR Compliant
          </span>
        </div>

        {/* Chronological Event Timeline */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Audit Trail Events
          </h4>
          <div className="space-y-2.5">
            {activeBatch.timeline.map((event, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">{event.step}</span>
                    <span className="text-[11px] text-slate-400 font-mono">{event.time}</span>
                  </div>
                  <p className="text-slate-500 text-[11px] mt-0.5">{event.by}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
