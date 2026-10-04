import React, { useState } from 'react';
import { 
  Factory, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  MapPin, 
  Scale, 
  Truck, 
  FileCheck, 
  ChevronRight,
  ExternalLink,
  Coins
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { VERIFIED_RECYCLERS } from '../data/mockData';

export default function RecyclerPortal() {
  const [inboundBatches, setInboundBatches] = useState([
    {
      id: 'BATCH-TN-4092',
      origin: 'Lakshmi V. (Malar Magalir SHG, Tambaram)',
      material: 'PET Plastic (Grade A Flakes)',
      declaredWeightKg: 74.0,
      actualWeightKg: 73.8,
      destination: 'GreenCycle Recycling Chennai',
      status: 'Awaiting Gate Weighbridge',
      manifestId: 'MF-88210',
      payoutAmount: 1180
    },
    {
      id: 'BATCH-TN-4089',
      origin: 'Kavitha R. (Annai Teresa SHG, Coimbatore)',
      material: 'Crushed Aluminium Cans',
      declaredWeightKg: 45.0,
      actualWeightKg: 45.0,
      destination: 'EcoMetal Circulars Ltd.',
      status: 'Weighed & Payment Released',
      manifestId: 'MF-88195',
      payoutAmount: 4275
    }
  ]);

  const handleVerifyBatch = (batchId) => {
    setInboundBatches(inboundBatches.map(b => {
      if (b.id === batchId) {
        return { ...b, status: 'Weighed & Payment Released' };
      }
      return b;
    }));
    try {
      confetti({ particleCount: 40, spread: 50, origin: { y: 0.6 } });
    } catch {
      // fallback
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-semibold border border-amber-200">
          <Factory className="w-3.5 h-3.5 text-amber-700" />
          <span>Industrial Sourcing & Traceability</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Verified Recycler Network
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
          Connecting primary recycling plants with pre-segregated community collections to guarantee feedstock purity, traceability, and statutory CPCB EPR compliance.
        </p>
      </div>

      {/* Mandatory Prototype Partner Label */}
      <div className="p-4 bg-amber-50 rounded-2xl border border-amber-300 flex items-start gap-3 shadow-xs">
        <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-950 leading-relaxed">
          <span className="font-bold">Competition Notice:</span>{' '}
          <span className="font-semibold underline">
            Prototype partner examples.
          </span>{' '}
          All facility names, locations, and capacity ratings represent representative pilot partner archetypes in Tamil Nadu for testing the closed-loop circular economy workflow.
        </div>
      </div>

      {/* Inbound Weighbridge Batch Gate (Interactive Choke Point) */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Scale className="w-4 h-4 text-emerald-600" />
              <span>Weighbridge Gate Inspector</span>
            </h2>
            <p className="text-xs text-slate-500">
              Secondary reconciliation: Recycler confirms incoming batch weight to unlock digital wallet settlement
            </p>
          </div>
          <span className="text-[10px] font-mono bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-full font-bold border border-emerald-200">
            Anti-Fraud Physical Choke Point
          </span>
        </div>

        <div className="space-y-3">
          {inboundBatches.map((batch) => (
            <div 
              key={batch.id} 
              className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-slate-900">{batch.id}</span>
                  <span className="text-xs bg-slate-200 text-slate-800 font-semibold px-2 py-0.5 rounded">
                    Manifest #{batch.manifestId}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    batch.status === 'Weighed & Payment Released' 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-amber-100 text-amber-800 animate-pulse'
                  }`}>
                    {batch.status}
                  </span>
                </div>
                <div className="text-xs text-slate-700 font-medium">
                  {batch.material} • Destination: <strong className="text-slate-900">{batch.destination}</strong>
                </div>
                <div className="text-[11px] text-slate-500">
                  Origin: {batch.origin}
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Scale Reading</div>
                  <div className="text-sm font-black text-slate-900">
                    {batch.actualWeightKg} kg <span className="text-xs text-slate-400 font-normal">({(batch.actualWeightKg / batch.declaredWeightKg * 100).toFixed(1)}% match)</span>
                  </div>
                  <div className="text-xs font-bold text-emerald-700">₹{batch.payoutAmount} Settled</div>
                </div>

                {batch.status !== 'Weighed & Payment Released' ? (
                  <button
                    onClick={() => handleVerifyBatch(batch.id)}
                    className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer transition-smooth shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verify Weighbridge</span>
                  </button>
                ) : (
                  <div className="px-3 py-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-xs font-semibold flex items-center gap-1">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Gate Receipt Issued</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verified Partner Cards */}
      <div className="space-y-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Certified Recycler Directory (Tamil Nadu)
          </h3>
          <p className="text-xs text-slate-500">
            Registered industrial processing facilities with verified pollution control compliance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VERIFIED_RECYCLERS.map((recycler) => (
            <div 
              key={recycler.id} 
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-300 transition-smooth"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                  <Factory className="w-5 h-5" />
                </div>
                <span className="text-[10px] bg-amber-50 text-amber-900 font-semibold px-2 py-0.5 rounded-full border border-amber-300">
                  Demonstration Archetype
                </span>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base leading-snug">{recycler.name}</h4>
                <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {recycler.city}
                </p>
                <p className="text-[10px] text-slate-400 italic mt-0.5">
                  Illustrative regional processing partner entry
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span className="text-slate-400">Accepted Streams:</span>
                  <span className="font-semibold text-slate-800">{recycler.categories.join(', ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Monthly Capacity:</span>
                  <span className="font-semibold text-slate-800">{recycler.monthlyCapacity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">SPCB License:</span>
                  <span className="font-mono text-emerald-700 font-semibold">{recycler.registrationNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Audit Trust Rating:</span>
                  <span className="font-bold text-slate-900">{recycler.trustScore}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">{recycler.activeBatchesReceived} batches received</span>
                <span className="text-emerald-700 font-semibold">{recycler.compliance}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
