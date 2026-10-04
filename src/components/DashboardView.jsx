import React, { useState } from 'react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend 
} from 'recharts';
import { 
  Recycle, 
  Leaf, 
  Coins, 
  Users, 
  Home, 
  ShieldCheck, 
  TrendingUp, 
  Scale, 
  AlertCircle,
  Clock,
  ArrowUpRight,
  Filter
} from 'lucide-react';
import { 
  INITIAL_DASHBOARD_METRICS, 
  MONTHLY_COLLECTION_DATA, 
  MATERIAL_PIE_DATA,
  INITIAL_TRANSACTIONS
} from '../data/mockData';

export default function DashboardView({ onSchedulePickup, onCollectorApp, onOpenEcoVision }) {
  const [timeframe, setTimeframe] = useState('6M');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Header with Prototype Notice */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              EcoSakhi Dashboard
            </h1>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2.5 py-1 rounded-full border border-amber-300 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
              Demo / Prototype Data
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Real-time telemetry from community collections, verified recycling partners, and SHG digital ledgers.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onSchedulePickup}
            className="px-3.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg shadow-xs flex items-center gap-1.5 transition-smooth cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Schedule Pickup</span>
          </button>
          <button
            onClick={onOpenEcoVision}
            className="px-3.5 py-2 bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold rounded-lg shadow-xs flex items-center gap-1.5 transition-smooth cursor-pointer"
          >
            <Recycle className="w-3.5 h-3.5" />
            <span>Scan with EcoVision</span>
          </button>
          <button
            onClick={onCollectorApp}
            className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-xs flex items-center gap-1.5 transition-smooth cursor-pointer"
          >
            <Users className="w-3.5 h-3.5" />
            <span>Collector View</span>
          </button>
        </div>
      </div>

      {/* 6 Core Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Metric 1 */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1 relative overflow-hidden">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-[11px] font-bold uppercase tracking-wider">Waste Collected</span>
            <Scale className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">
            {INITIAL_DASHBOARD_METRICS.wasteCollectedKg.toLocaleString()} <span className="text-xs font-medium text-slate-400">kg</span>
          </div>
          <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-0.5">
            <TrendingUp className="w-3 h-3" /> +18.4% vs last mo
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-[11px] font-bold uppercase tracking-wider">Recycled</span>
            <Recycle className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">
            {INITIAL_DASHBOARD_METRICS.recycledKg.toLocaleString()} <span className="text-xs font-medium text-slate-400">kg</span>
          </div>
          <div className="text-[10px] text-blue-600 font-semibold">
            {INITIAL_DASHBOARD_METRICS.recyclingRatePct}% verified yield
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-[11px] font-bold uppercase tracking-wider">Community Earnings</span>
            <Coins className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">
            ₹{INITIAL_DASHBOARD_METRICS.communityEarningsInr.toLocaleString()}
          </div>
          <div className="text-[10px] text-amber-600 font-semibold">
            100% direct digital payout
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-[11px] font-bold uppercase tracking-wider">CO₂e Avoided</span>
            <Leaf className="w-4 h-4 text-green-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">
            {INITIAL_DASHBOARD_METRICS.co2eAvoidedKg} <span className="text-xs font-medium text-slate-400">kg</span>
          </div>
          <div className="text-[10px] text-green-600 font-semibold">
            LCA Avoided Burden
          </div>
        </div>

        {/* Metric 5 */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-[11px] font-bold uppercase tracking-wider">Households Served</span>
            <Home className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">
            {INITIAL_DASHBOARD_METRICS.householdsServed}
          </div>
          <div className="text-[10px] text-purple-600 font-semibold">
            Tamil Nadu clusters
          </div>
        </div>

        {/* Metric 6 */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-[11px] font-bold uppercase tracking-wider">Active Collectors</span>
            <Users className="w-4 h-4 text-teal-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">
            {INITIAL_DASHBOARD_METRICS.activeCollectors}
          </div>
          <div className="text-[10px] text-teal-600 font-semibold">
            Women SHG leaders
          </div>
        </div>
      </div>

      {/* Primary Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Chart 1: Monthly Waste Collection & Recycled Trend (Area Chart) */}
        <div className="lg:col-span-8 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-sm font-bold text-slate-900">
                Monthly Waste Collection & Recycling Trajectory (kg)
              </h2>
              <p className="text-xs text-slate-500">
                Tracking municipal dry waste diverted from landfills over the last 6 months.
              </p>
            </div>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs">
              <span className="px-2 py-0.5 rounded bg-white text-slate-800 font-semibold shadow-2xs">6M Trajectory</span>
              <span className="px-2 py-0.5 text-slate-500">Tamil Nadu Pilot</span>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MONTHLY_COLLECTION_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCollected" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#059669" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorRecycled" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                <Area type="monotone" dataKey="collected" name="Dry Waste Collected (kg)" stroke="#059669" strokeWidth={2} fillOpacity={1} fill="url(#colorCollected)" />
                <Area type="monotone" dataKey="recycled" name="Verified Recycled (kg)" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorRecycled)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Material Breakdown (Donut Chart) */}
        <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div>
            <h2 className="text-sm font-bold text-slate-900">
              Material Segregation Breakdown
            </h2>
            <p className="text-xs text-slate-500">
              Composition of 1,248 kg collected recyclables.
            </p>
          </div>

          <div className="h-44 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={MATERIAL_PIE_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={65}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {MATERIAL_PIE_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            {MATERIAL_PIE_DATA.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-slate-700">{item.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900">{item.value} kg</span>
                  <span className="text-slate-400 font-mono text-[10px]">{item.pct}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Secondary Row: Community Earnings Growth & Environmental Displacement */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Community Earnings Bar Chart */}
        <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold text-slate-900">
                Community Direct Earnings Growth (₹ INR)
              </h2>
              <p className="text-xs text-slate-500">
                Direct bank & wallet transfers credited to participating women SHGs.
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400">Total YTD</span>
              <div className="text-sm font-bold text-emerald-700">₹2,03,000</div>
            </div>
          </div>

          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MONTHLY_COLLECTION_DATA} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} tickFormatter={(val) => `₹${val/1000}k`} />
                <Tooltip 
                  formatter={(val) => [`₹${val.toLocaleString()}`, 'Community Earnings']}
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                />
                <Bar dataKey="earnings" name="Community Income (₹)" fill="#059669" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity Ledger Feed */}
        <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <h2 className="text-sm font-bold text-slate-900">Recent Verified Collections</h2>
              <p className="text-xs text-slate-500">Directly feeding the circular ledger</p>
            </div>
            <span className="text-[10px] font-mono bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">
              Live Stream
            </span>
          </div>

          <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
            {INITIAL_TRANSACTIONS.slice(0, 4).map((txn) => (
              <div key={txn.id} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">{txn.household}</div>
                  <div className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                    <span>{txn.material}</span>
                    <span>•</span>
                    <span className="font-semibold text-slate-700">{txn.weight}</span>
                    <span>•</span>
                    <span className="text-slate-400">{txn.date}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-emerald-700">+₹{txn.amount}</div>
                  <span className="text-[9px] bg-emerald-100 text-emerald-800 font-semibold px-1.5 py-0.2 rounded">
                    Verified ✓
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
