import React, { useState } from 'react';
import { 
  Recycle, 
  Scale, 
  Coins, 
  Leaf, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Sparkles, 
  PlusCircle, 
  ArrowRight, 
  Wallet, 
  ShieldCheck,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { INITIAL_COLLECTOR } from '../data/mockData';

export default function CollectorDashboard({ 
  collector = INITIAL_COLLECTOR, 
  pickupRequests = [], 
  onAcceptPickup, 
  onOpenRecordModal,
  onViewWallet,
  onViewImpact,
  onOpenEcoVision 
}) {
  const [activeTab, setActiveTab] = useState('tasks');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* Collector Profile Header */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-white font-bold text-xl flex items-center justify-center shadow-md shadow-emerald-700/20 shrink-0">
            LV
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-slate-900">{collector.name}</h1>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                Verified SHG Leader
              </span>
            </div>
            <p className="text-xs text-slate-500">{collector.groupName} • {collector.location}</p>
            <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-1">
              <span>Aadhaar Verified ✓</span>
              <span>•</span>
              <span>146 Lifetime Collections</span>
              <span>•</span>
              <span className="text-emerald-700 font-medium">EcoSakhi Card #TN-4091</span>
            </div>
          </div>
        </div>

        {/* Climate Activity Score Mini Gauge */}
        <div className="bg-emerald-50/80 p-3 rounded-xl border border-emerald-200 flex items-center gap-3 self-start sm:self-auto">
          <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white font-black text-sm flex items-center justify-center">
            {collector.climateScore}
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-emerald-800">Climate Activity</div>
            <div className="text-xs font-semibold text-slate-700">Gold Tier Pioneer</div>
          </div>
        </div>
      </div>

      {/* 5 Core Required Collector Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {/* Today's Collections */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Today's Collections</div>
          <div className="text-2xl font-black text-slate-900">{collector.todayCollections}</div>
          <div className="text-[10px] text-emerald-600 font-semibold">Trips completed</div>
        </div>

        {/* Today's Weight */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Today's Weight</div>
          <div className="text-2xl font-black text-slate-900">
            {collector.todayWeightKg} <span className="text-xs font-normal text-slate-400">kg</span>
          </div>
          <div className="text-[10px] text-blue-600 font-semibold">Dry segregated</div>
        </div>

        {/* Today's Earnings */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Today's Earnings</div>
          <div className="text-2xl font-black text-emerald-700">₹{collector.todayEarningsInr}</div>
          <div className="text-[10px] text-emerald-600 font-semibold">Direct to wallet</div>
        </div>

        {/* Monthly Earnings */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Monthly Earnings</div>
          <div className="text-2xl font-black text-slate-900">₹{collector.monthlyEarningsInr.toLocaleString()}</div>
          <div className="text-[10px] text-slate-500 font-semibold">MTD verified</div>
        </div>

        {/* Environmental Impact */}
        <div className="col-span-2 sm:col-span-1 bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Est. CO₂e Avoided</div>
          <div className="text-2xl font-black text-slate-900">
            {collector.co2eAvoidedKg} <span className="text-xs font-normal text-slate-400">kg</span>
          </div>
          <div className="text-[10px] text-green-600 font-semibold">LCA avoidance</div>
        </div>
      </div>

      {/* 4 Required Action Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <button
          onClick={onOpenRecordModal}
          className="p-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl shadow-xs flex items-center justify-center gap-2 cursor-pointer transition-smooth text-xs"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Record Collection</span>
        </button>

        <button
          onClick={onOpenEcoVision}
          className="p-3.5 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl shadow-xs flex items-center justify-center gap-2 cursor-pointer transition-smooth text-xs"
        >
          <Sparkles className="w-4 h-4" />
          <span>EcoVision Scanner</span>
        </button>

        <button
          onClick={onViewWallet}
          className="p-3.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl border border-slate-300 shadow-xs flex items-center justify-center gap-2 cursor-pointer transition-smooth text-xs"
        >
          <Wallet className="w-4 h-4 text-emerald-700" />
          <span>View Earnings</span>
        </button>

        <button
          onClick={onViewImpact}
          className="p-3.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl border border-slate-300 shadow-xs flex items-center justify-center gap-2 cursor-pointer transition-smooth text-xs"
        >
          <Leaf className="w-4 h-4 text-green-700" />
          <span>Impact History</span>
        </button>
      </div>

      {/* Incoming Pickup Queue (Task List) */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Community Pickup Queue
            </h2>
            <p className="text-xs text-slate-500">
              Assigned collection jobs in Ward 14 Tambaram cluster
            </p>
          </div>
          <span className="text-xs bg-emerald-50 text-emerald-800 font-bold px-2.5 py-1 rounded-full border border-emerald-200">
            {pickupRequests.length} Active Requests
          </span>
        </div>

        <div className="space-y-3">
          {pickupRequests.map((req) => (
            <div 
              key={req.id} 
              className="p-4 rounded-xl border border-slate-200 hover:border-emerald-300 bg-slate-50/50 hover:bg-white transition-smooth space-y-2.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-slate-500">{req.id}</span>
                  <span className="text-sm font-bold text-slate-900">{req.name}</span>
                  <span className="text-[10px] bg-blue-100 text-blue-800 font-semibold px-2 py-0.5 rounded">
                    {req.wasteType}
                  </span>
                </div>
                <div className="text-xs font-bold text-emerald-700">
                  Est. Payout: {req.indicativeValue}
                </div>
              </div>

              <div className="text-xs text-slate-600 flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="flex items-center gap-1 text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" /> {req.address}
                </span>
                <span className="flex items-center gap-1 text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400" /> {req.timeSlot}
                </span>
                <span className="flex items-center gap-1 font-semibold text-slate-700">
                  <Scale className="w-3.5 h-3.5 text-slate-400" /> ~{req.estWeightKg} kg
                </span>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <span className="text-[11px] text-slate-400 italic">
                  Status: <span className="text-slate-700 font-medium">{req.status}</span>
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onAcceptPickup(req.id)}
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg text-xs cursor-pointer transition-smooth flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Accept Job</span>
                  </button>

                  <button
                    onClick={onOpenRecordModal}
                    className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg text-xs cursor-pointer transition-smooth flex items-center gap-1"
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                    <span>Record & Weigh</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
