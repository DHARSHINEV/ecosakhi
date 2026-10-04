import React, { useState } from 'react';
import { 
  MapPin, 
  Download, 
  Building, 
  Scale, 
  Users, 
  Coins, 
  Leaf, 
  Layers, 
  AlertCircle,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { DISTRICT_MAP_DATA, INITIAL_DASHBOARD_METRICS } from '../data/mockData';

export default function AdminMapView() {
  const [selectedDistrict, setSelectedDistrict] = useState(DISTRICT_MAP_DATA[0]);

  const handleExportCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "District,Active Clusters,Households,Collectors,Waste Diverted (Tonnes),Community Payouts (Lakhs),CO2e Avoided (Tonnes)\n"
      + DISTRICT_MAP_DATA.map(d => `${d.name},${d.activeClusters},${d.households},${d.collectors},${d.wasteTons},${d.earningsLakhs},${d.co2Tons}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "EcoSakhi_TamilNadu_Impact_Audit.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Regional Admin & Impact Telemetry
            </h1>
            <span className="text-[10px] bg-slate-900 text-white font-bold px-2 py-0.5 rounded-full">
              Municipal Portal
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Ward-level dry waste segregation, community payouts, and environmental audit trail across Tamil Nadu clusters.
          </p>
        </div>

        <button
          onClick={handleExportCSV}
          className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs flex items-center gap-2 cursor-pointer transition-smooth shadow-xs"
        >
          <Download className="w-3.5 h-3.5 text-emerald-400" />
          <span>Export ESG Audit CSV</span>
        </button>
      </div>

      {/* Aggregate Header Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-[10px] uppercase font-bold text-slate-400">Total Households</div>
          <div className="text-xl font-bold text-slate-900">{INITIAL_DASHBOARD_METRICS.householdsServed}</div>
        </div>
        <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-[10px] uppercase font-bold text-slate-400">SHG Collectors</div>
          <div className="text-xl font-bold text-slate-900">{INITIAL_DASHBOARD_METRICS.activeCollectors}</div>
        </div>
        <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-[10px] uppercase font-bold text-slate-400">Waste Collected</div>
          <div className="text-xl font-bold text-slate-900">{INITIAL_DASHBOARD_METRICS.wasteCollectedKg} kg</div>
        </div>
        <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-[10px] uppercase font-bold text-slate-400">Recycling Yield</div>
          <div className="text-xl font-bold text-emerald-700">{INITIAL_DASHBOARD_METRICS.recyclingRatePct}%</div>
        </div>
        <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-[10px] uppercase font-bold text-slate-400">Community Income</div>
          <div className="text-xl font-bold text-amber-600">₹{INITIAL_DASHBOARD_METRICS.communityEarningsInr.toLocaleString()}</div>
        </div>
        <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-[10px] uppercase font-bold text-slate-400">CO₂e Displaced</div>
          <div className="text-xl font-bold text-green-700">{INITIAL_DASHBOARD_METRICS.co2eAvoidedKg} kg</div>
        </div>
      </div>

      {/* Regional Visual Stage (Tamil Nadu Stylized Map Representation) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Left: Stylized District Map / Cluster Cards */}
        <div className="md:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <h2 className="text-sm font-bold text-slate-900">
                Tamil Nadu Operational Districts
              </h2>
              <p className="text-xs text-slate-500">
                Representative municipal clusters in pilot deployment
              </p>
            </div>
            <span className="text-[10px] font-mono text-slate-400">
              Generic City-Level Visual
            </span>
          </div>

          {/* District Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {DISTRICT_MAP_DATA.map((dist) => (
              <div
                key={dist.id}
                onClick={() => setSelectedDistrict(dist)}
                className={`p-4 rounded-2xl border transition-smooth cursor-pointer space-y-2 ${
                  selectedDistrict.id === dist.id
                    ? 'border-emerald-600 bg-emerald-50/70 shadow-xs ring-2 ring-emerald-500/20'
                    : 'border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-bold text-sm text-slate-900">
                    <MapPin className={`w-4 h-4 ${selectedDistrict.id === dist.id ? 'text-emerald-700' : 'text-slate-400'}`} />
                    <span>{dist.name}</span>
                  </div>
                  <span className="text-[10px] bg-white px-2 py-0.5 rounded font-mono font-semibold text-slate-600 border border-slate-200">
                    {dist.activeClusters} Clusters
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-600 pt-1">
                  <div>Households: <strong className="text-slate-900">{dist.households}</strong></div>
                  <div>Collectors: <strong className="text-slate-900">{dist.collectors}</strong></div>
                  <div>Diverted: <strong className="text-emerald-700">{dist.wasteTons} MT</strong></div>
                  <div>Income: <strong className="text-amber-700">₹{dist.earningsLakhs}L</strong></div>
                </div>
              </div>
            ))}
          </div>

          {/* Regional Map Diagram Graphic */}
          <div className="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center font-bold">
                TN
              </div>
              <div>
                <div className="font-bold">South India Circular Network Core</div>
                <div className="text-[10px] text-slate-400">Chennai • Coimbatore • Madurai Hubs</div>
              </div>
            </div>
            <div className="text-emerald-400 font-bold font-mono">
              86.4 MT Total Diverted
            </div>
          </div>
        </div>

        {/* Right: Selected District Deep Dive */}
        <div className="md:col-span-5 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="pb-3 border-b border-slate-100">
            <span className="text-[10px] uppercase font-bold text-slate-400">District Telemetry Focus</span>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-1.5 mt-0.5">
              <MapPin className="w-4 h-4 text-emerald-700" />
              <span>{selectedDistrict.name}</span>
            </h3>
          </div>

          <div className="space-y-3 text-xs text-slate-600">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center">
              <span>Active Ward Clusters:</span>
              <span className="font-bold text-slate-900">{selectedDistrict.activeClusters} SHG Hubs</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center">
              <span>Participating Citizens:</span>
              <span className="font-bold text-slate-900">{selectedDistrict.households} Households</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center">
              <span>Dedicated Collectors:</span>
              <span className="font-bold text-slate-900">{selectedDistrict.collectors} Women Leaders</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center">
              <span>Waste Diverted to Date:</span>
              <span className="font-bold text-emerald-700">{selectedDistrict.wasteTons} Metric Tonnes</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center">
              <span>Direct Community Payouts:</span>
              <span className="font-bold text-amber-700">₹{selectedDistrict.earningsLakhs} Lakhs</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center">
              <span>Avoided Carbon Baseline:</span>
              <span className="font-bold text-green-700">{selectedDistrict.co2Tons} MT CO₂e</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={handleExportCSV}
              className="w-full py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 border border-emerald-200 cursor-pointer transition-smooth"
            >
              <Download className="w-3.5 h-3.5 text-emerald-700" />
              <span>Download {selectedDistrict.name} Ward Report</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
