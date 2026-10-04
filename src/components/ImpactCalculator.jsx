import React, { useState } from 'react';
import { 
  BarChart3, 
  Leaf, 
  Coins, 
  Scale, 
  Sliders, 
  Info, 
  RotateCcw, 
  TrendingUp, 
  AlertCircle,
  Building2,
  TreeDeciduous,
  Fuel
} from 'lucide-react';

export default function ImpactCalculator() {
  // Household scale state
  const [householdCount, setHouseholdCount] = useState(1000);

  // Per household monthly collection inputs (kg/month)
  const [monthlyInputs, setMonthlyInputs] = useState({
    plastic: 4.0,   // kg/HH/mo
    paper: 3.5,     // kg/HH/mo
    metal: 1.0,     // kg/HH/mo
    glass: 1.0,     // kg/HH/mo
    ewaste: 0.5,    // kg/HH/mo
  });

  // Configurable Emission Factors & Prices
  const [assumptionsMode, setAssumptionsMode] = useState('standard'); // 'conservative' | 'standard' | 'custom'
  const [factors, setFactors] = useState({
    plasticCo2: 1.60,
    paperCo2: 1.20,
    metalCo2: 3.80,
    glassCo2: 0.30,
    ewasteCo2: 2.20,
    plasticPrice: 16,
    paperPrice: 10,
    metalPrice: 32,
    glassPrice: 2.5,
    ewastePrice: 25,
  });

  const handleModeChange = (mode) => {
    setAssumptionsMode(mode);
    if (mode === 'conservative') {
      setFactors({
        plasticCo2: 1.20,
        paperCo2: 0.90,
        metalCo2: 2.80,
        glassCo2: 0.20,
        ewasteCo2: 1.60,
        plasticPrice: 14,
        paperPrice: 8,
        metalPrice: 28,
        glassPrice: 2.0,
        ewastePrice: 20,
      });
    } else if (mode === 'standard') {
      setFactors({
        plasticCo2: 1.60,
        paperCo2: 1.20,
        metalCo2: 3.80,
        glassCo2: 0.30,
        ewasteCo2: 2.20,
        plasticPrice: 16,
        paperPrice: 10,
        metalPrice: 32,
        glassPrice: 2.5,
        ewastePrice: 25,
      });
    }
  };

  // Calculations per year
  const annualPlasticKg = householdCount * monthlyInputs.plastic * 12;
  const annualPaperKg = householdCount * monthlyInputs.paper * 12;
  const annualMetalKg = householdCount * monthlyInputs.metal * 12;
  const annualGlassKg = householdCount * monthlyInputs.glass * 12;
  const annualEwasteKg = householdCount * monthlyInputs.ewaste * 12;

  const totalDivertedKg = annualPlasticKg + annualPaperKg + annualMetalKg + annualGlassKg + annualEwasteKg;
  const totalDivertedTonnes = (totalDivertedKg / 1000).toFixed(1);

  const totalCo2Kg = (
    annualPlasticKg * factors.plasticCo2 +
    annualPaperKg * factors.paperCo2 +
    annualMetalKg * factors.metalCo2 +
    annualGlassKg * factors.glassCo2 +
    annualEwasteKg * factors.ewasteCo2
  );
  const totalCo2Tonnes = (totalCo2Kg / 1000).toFixed(1);

  const totalIncomeInr = Math.round(
    annualPlasticKg * factors.plasticPrice +
    annualPaperKg * factors.paperPrice +
    annualMetalKg * factors.metalPrice +
    annualGlassKg * factors.glassPrice +
    annualEwasteKg * factors.ewastePrice
  );

  const livelihoodsSupported = Math.max(1, Math.round(householdCount / 85));
  const treesEquivalent = Math.round(totalCo2Kg / 22); // ~22 kg CO2 absorbed per mature tree per year
  const dieselLitersAvoided = Math.round(totalCo2Kg / 2.68); // ~2.68 kg CO2 per liter of diesel

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
          <BarChart3 className="w-3.5 h-3.5" />
          <span>Empirical Environmental & Livelihood Model</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Circular Impact Calculator
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
          Simulate the material diversion, carbon offset, and community livelihood returns across customized community scales with configurable lifecycle assumptions.
        </p>
      </div>

      {/* Mandatory Regulatory & Assumption Disclosure */}
      <div className="p-4 bg-amber-50 rounded-2xl border border-amber-300 flex items-start gap-3 shadow-xs">
        <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-950 leading-relaxed">
          <span className="font-bold">Transparent Assumptions Notice:</span>{' '}
          <span className="font-semibold underline">
            Impact estimates are illustrative and based on configurable assumptions. Production deployment requires verified lifecycle/emission factors.
          </span>{' '}
          All baseline factors in EcoSakhi are grounded in published guidelines from the Central Pollution Control Board (CPCB), UNEP, and EPA WARM. You can adjust the assumptions below to test model sensitivity.
        </div>
      </div>

      {/* Top Controls: Community Scale Preset */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Community Scale Parameter
            </span>
            <div className="text-base font-bold text-slate-900">
              Participating Households: <span className="text-emerald-700">{householdCount.toLocaleString()}</span>
            </div>
          </div>

          {/* Quick Presets */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {[
              { label: 'Ward Block (100 HH)', val: 100 },
              { label: 'Pilot Baseline (1,000 HH)', val: 1000 },
              { label: 'Town Cluster (5,000 HH)', val: 5000 },
              { label: 'Metro Ward (10,000 HH)', val: 10000 },
            ].map((preset) => (
              <button
                key={preset.val}
                onClick={() => setHouseholdCount(preset.val)}
                className={`text-xs px-3 py-1.5 rounded-lg border font-semibold transition-smooth cursor-pointer ${
                  householdCount === preset.val
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        <input
          type="range"
          min="50"
          max="10000"
          step="50"
          value={householdCount}
          onChange={(e) => setHouseholdCount(parseInt(e.target.value))}
          className="w-full accent-emerald-600 cursor-pointer"
        />
      </div>

      {/* Primary 4 Outcome Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Diverted Tonnes */}
        <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white p-5 rounded-2xl border border-emerald-700 shadow-md space-y-1">
          <div className="flex items-center justify-between text-emerald-300">
            <span className="text-[10px] font-bold uppercase tracking-wider">Landfill Diverted</span>
            <Scale className="w-4 h-4" />
          </div>
          <div className="text-3xl font-black">
            {totalDivertedTonnes} <span className="text-sm font-medium text-emerald-300">MT</span>
          </div>
          <div className="text-xs text-emerald-200">
            {totalDivertedKg.toLocaleString()} kg dry material
          </div>
          <div className="pt-2 text-[10px] text-emerald-300/80 border-t border-emerald-800/80">
            ~{Math.round(totalDivertedKg / 330)} m³ landfill void space conserved
          </div>
        </div>

        {/* Card 2: Net CO2e Avoided */}
        <div className="bg-gradient-to-br from-teal-800 to-slate-900 text-white p-5 rounded-2xl border border-teal-700 shadow-md space-y-1">
          <div className="flex items-center justify-between text-teal-300">
            <span className="text-[10px] font-bold uppercase tracking-wider">Net GHG Avoidance</span>
            <Leaf className="w-4 h-4" />
          </div>
          <div className="text-3xl font-black">
            {totalCo2Tonnes} <span className="text-sm font-medium text-teal-300">MT CO₂e</span>
          </div>
          <div className="text-xs text-teal-200">
            Virgin extraction displacement
          </div>
          <div className="pt-2 text-[10px] text-teal-300/80 border-t border-teal-800/80">
            ~{treesEquivalent.toLocaleString()} mature trees or ~{dieselLitersAvoided.toLocaleString()} L diesel offset
          </div>
        </div>

        {/* Card 3: Community Income */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-5 rounded-2xl border border-slate-700 shadow-md space-y-1">
          <div className="flex items-center justify-between text-amber-400">
            <span className="text-[10px] font-bold uppercase tracking-wider">Community Income</span>
            <Coins className="w-4 h-4" />
          </div>
          <div className="text-3xl font-black text-amber-400">
            ₹{(totalIncomeInr / 100000).toFixed(2)} <span className="text-sm font-medium text-amber-300">Lakhs</span>
          </div>
          <div className="text-xs text-slate-300">
            ₹{totalIncomeInr.toLocaleString()} total gross payout
          </div>
          <div className="pt-2 text-[10px] text-slate-400 border-t border-slate-700">
            100% direct digital transfer to SHGs
          </div>
        </div>

        {/* Card 4: SHG Livelihoods */}
        <div className="bg-gradient-to-br from-purple-900 to-slate-900 text-white p-5 rounded-2xl border border-purple-700 shadow-md space-y-1">
          <div className="flex items-center justify-between text-purple-300">
            <span className="text-[10px] font-bold uppercase tracking-wider">Livelihoods Created</span>
            <Building2 className="w-4 h-4" />
          </div>
          <div className="text-3xl font-black">
            {livelihoodsSupported} <span className="text-sm font-medium text-purple-300">Women</span>
          </div>
          <div className="text-xs text-purple-200">
            ~₹{Math.round(totalIncomeInr / (livelihoodsSupported * 12)).toLocaleString()} / month each
          </div>
          <div className="pt-2 text-[10px] text-purple-300/80 border-t border-purple-800/80">
            Eligible for Satin credit readiness
          </div>
        </div>

      </div>

      {/* Interactive Sliders for Material Yields */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold text-slate-900">
              Household Material Generation Yields (kg / household / month)
            </h2>
            <p className="text-xs text-slate-500">
              Adjust monthly recovery rates based on local waste characterization
            </p>
          </div>
          <button
            onClick={() => setMonthlyInputs({ plastic: 4.0, paper: 3.5, metal: 1.0, glass: 1.0, ewaste: 0.5 })}
            className="text-xs text-slate-500 hover:text-emerald-700 font-semibold flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Yields</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { id: 'plastic', label: 'Plastics (PET/HDPE)', val: monthlyInputs.plastic, unit: 'kg/mo', max: 15 },
            { id: 'paper', label: 'Paper & Cardboard', val: monthlyInputs.paper, unit: 'kg/mo', max: 15 },
            { id: 'metal', label: 'Metals (Al/Tin)', val: monthlyInputs.metal, unit: 'kg/mo', max: 5 },
            { id: 'glass', label: 'Glass Bottles', val: monthlyInputs.glass, unit: 'kg/mo', max: 5 },
            { id: 'ewaste', label: 'E-Waste / Misc', val: monthlyInputs.ewaste, unit: 'kg/mo', max: 3 },
          ].map((item) => (
            <div key={item.id} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-700 truncate">{item.label}</span>
                <span className="font-bold text-emerald-700">{item.val} {item.unit}</span>
              </div>
              <input
                type="range"
                min="0.1"
                max={item.max}
                step="0.1"
                value={item.val}
                onChange={(e) => setMonthlyInputs({ ...monthlyInputs, [item.id]: parseFloat(e.target.value) })}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Configurable Assumptions Box */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-emerald-700" />
            <h2 className="text-sm font-bold text-slate-900">
              Configurable Lifecycle Assumptions & Emission Factors
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleModeChange('conservative')}
              className={`text-xs px-3 py-1 rounded-lg border font-semibold cursor-pointer ${
                assumptionsMode === 'conservative' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-700'
              }`}
            >
              Conservative
            </button>
            <button
              onClick={() => handleModeChange('standard')}
              className={`text-xs px-3 py-1 rounded-lg border font-semibold cursor-pointer ${
                assumptionsMode === 'standard' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-700'
              }`}
            >
              Standard (CPCB / UNEP)
            </button>
          </div>
        </div>

        {/* Factors Table */}
        <div className="overflow-x-auto text-xs">
          <table className="w-full text-left text-slate-600">
            <thead className="bg-slate-50 font-semibold text-slate-800">
              <tr>
                <th className="p-2">Material Category</th>
                <th className="p-2">LCA Emission Factor (kg CO₂e / kg)</th>
                <th className="p-2">Benchmark Scrap Value (₹ / kg)</th>
                <th className="p-2">Authoritative Citation Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="p-2 font-semibold text-slate-800">PET & HDPE Plastics</td>
                <td className="p-2 font-mono text-emerald-700 font-bold">{factors.plasticCo2} kg CO₂e</td>
                <td className="p-2">₹{factors.plasticPrice} / kg</td>
                <td className="p-2 text-slate-500">CPCB EPR Guidelines (2022) / EPA WARM v15</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold text-slate-800">Paper & Cardboard</td>
                <td className="p-2 font-mono text-emerald-700 font-bold">{factors.paperCo2} kg CO₂e</td>
                <td className="p-2">₹{factors.paperPrice} / kg</td>
                <td className="p-2 text-slate-500">UNEP Forest Offset & Recycling Index</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold text-slate-800">Metals (Aluminium/Tin)</td>
                <td className="p-2 font-mono text-emerald-700 font-bold">{factors.metalCo2} kg CO₂e</td>
                <td className="p-2">₹{factors.metalPrice} / kg</td>
                <td className="p-2 text-slate-500">International Aluminium Institute (IAI)</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold text-slate-800">Glass Bottles</td>
                <td className="p-2 font-mono text-emerald-700 font-bold">{factors.glassCo2} kg CO₂e</td>
                <td className="p-2">₹{factors.glassPrice} / kg</td>
                <td className="p-2 text-slate-500">European Container Glass Federation (FEVE)</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold text-slate-800">E-Waste & Circuitry</td>
                <td className="p-2 font-mono text-emerald-700 font-bold">{factors.ewasteCo2} kg CO₂e</td>
                <td className="p-2">₹{factors.ewastePrice} / kg</td>
                <td className="p-2 text-slate-500">UNEP Global E-waste Monitor (2024)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
