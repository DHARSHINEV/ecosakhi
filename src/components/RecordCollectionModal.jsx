import React, { useState } from 'react';
import { 
  X, 
  Scale, 
  CheckCircle2, 
  Coins, 
  QrCode, 
  AlertCircle, 
  Sparkles,
  Receipt,
  FileCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MATERIAL_PRICES } from '../data/mockData';

export default function RecordCollectionModal({ 
  isOpen, 
  onClose, 
  onCollectionRecorded,
  initialMaterial = 'plastic'
}) {
  const [household, setHousehold] = useState('R. Soundararajan (Flat 3B, Chromepet)');
  const [material, setMaterial] = useState(initialMaterial || 'plastic');
  const [weightKg, setWeightKg] = useState(12.5);
  const [quality, setQuality] = useState('Sorted Grade A (Dry & Clean)');
  const [verifiedReceipt, setVerifiedReceipt] = useState(null);

  React.useEffect(() => {
    if (initialMaterial) {
      setMaterial(initialMaterial);
    }
  }, [initialMaterial, isOpen]);

  if (!isOpen) return null;

  const currentPrice = MATERIAL_PRICES[material] || MATERIAL_PRICES.plastic;
  const totalPayout = Math.round(weightKg * currentPrice.pricePerKg);

  const handleRecord = (e) => {
    e.preventDefault();

    const receipt = {
      receiptId: `REC-${Math.floor(100000 + Math.random() * 900000)}`,
      batchId: `BATCH-TN-${Math.floor(1000 + Math.random() * 9000)}`,
      household,
      materialName: currentPrice.name,
      materialKey: material,
      weightKg: parseFloat(weightKg),
      ratePerKg: currentPrice.pricePerKg,
      totalPayout,
      quality,
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
      co2eAvoided: (parseFloat(weightKg) * currentPrice.co2Factor).toFixed(1),
      collector: 'Lakshmi V. (Malar Magalir SHG)',
      verifierHash: `0x${Math.random().toString(16).substr(2, 8)}...${Math.random().toString(16).substr(2, 6)}`
    };

    try {
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.5 }
      });
    } catch {
      // fallback
    }

    setVerifiedReceipt(receipt);
    if (onCollectionRecorded) {
      onCollectionRecorded(receipt);
    }
  };

  const handleDone = () => {
    setVerifiedReceipt(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900">Record Verified Collection</h2>
              <span className="text-[10px] text-slate-400">Digital Handheld Scale Sync</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-smooth"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!verifiedReceipt ? (
          /* Input Form */
          <form onSubmit={handleRecord} className="p-6 space-y-4">
            
            {/* Household Field */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Citizen / Household Name
              </label>
              <input
                type="text"
                required
                value={household}
                onChange={(e) => setHousehold(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 focus:outline-none"
              />
            </div>

            {/* Material Field */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Recyclable Material
                </label>
                <select
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 focus:outline-none"
                >
                  <option value="plastic">PET Plastic (Bottles)</option>
                  <option value="paper">Paper & Cardboard</option>
                  <option value="metal">Metal (Aluminium / Tin)</option>
                  <option value="glass">Glass Bottles</option>
                  <option value="ewaste">E-Waste / Circuitry</option>
                  <option value="mixed">Mixed Dry Recyclables</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Quality & Segregation
                </label>
                <select
                  value={quality}
                  onChange={(e) => setQuality(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 focus:outline-none"
                >
                  <option value="Sorted Grade A (Dry & Clean)">Sorted Grade A (Clean & Dry)</option>
                  <option value="Sorted Grade B (Dry Mixed)">Sorted Grade B (Dry Mixed)</option>
                  <option value="Unsorted (Requires sorting)">Grade C (Light contamination)</option>
                </select>
              </div>
            </div>

            {/* Weight Input (Default 12.5 kg) */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">Digital Scale Reading:</span>
                <span className="text-lg font-black text-slate-900">
                  {weightKg} <span className="text-xs font-medium text-slate-500">kg</span>
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="50"
                step="0.5"
                value={weightKg}
                onChange={(e) => setWeightKg(parseFloat(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <div className="flex gap-1.5 justify-end">
                {[5, 12.5, 20, 35].map((preset) => (
                  <button
                    type="button"
                    key={preset}
                    onClick={() => setWeightKg(preset)}
                    className="text-[10px] px-2 py-0.5 bg-white border border-slate-300 rounded font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    {preset} kg
                  </button>
                ))}
              </div>
            </div>

            {/* Price Banner */}
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider">
                  Indicative Demo Price
                </span>
                <div className="text-xs text-slate-600">
                  ₹{currentPrice.pricePerKg} / kg benchmark
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-500">Calculated Payout</div>
                <div className="text-base font-bold text-emerald-700">₹{totalPayout}</div>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 italic">
              *Indicative demo price — subject to recycler batch weighment.
            </p>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-sm transition-smooth"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Verify & Generate Digital Receipt</span>
            </button>
          </form>
        ) : (
          /* Receipt View */
          <div className="p-6 space-y-4 animate-in fade-in duration-150">
            <div className="text-center space-y-1">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Collection Verified</h3>
              <p className="text-xs text-slate-500">
                Digital receipt generated & credited to Lakshmi’s wallet.
              </p>
            </div>

            {/* The Receipt Ticket */}
            <div className="bg-slate-50 p-4 rounded-xl border border-dashed border-slate-300 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="font-bold text-slate-900">{verifiedReceipt.receiptId}</span>
                <span className="text-[10px] text-slate-400">{verifiedReceipt.date}</span>
              </div>

              <div className="space-y-1 text-slate-600">
                <div className="flex justify-between">
                  <span>Household:</span>
                  <span className="text-slate-900 font-semibold">{verifiedReceipt.household}</span>
                </div>
                <div className="flex justify-between">
                  <span>Material:</span>
                  <span className="text-slate-900 font-semibold">{verifiedReceipt.materialName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Net Weight:</span>
                  <span className="text-slate-900 font-bold">{verifiedReceipt.weightKg} kg</span>
                </div>
                <div className="flex justify-between">
                  <span>Indicative Rate:</span>
                  <span>₹{verifiedReceipt.ratePerKg} / kg</span>
                </div>
                <div className="flex justify-between">
                  <span>Quality Grade:</span>
                  <span className="text-emerald-700 font-semibold">{verifiedReceipt.quality}</span>
                </div>
                <div className="flex justify-between">
                  <span>Est. CO₂e Avoided:</span>
                  <span className="text-green-700 font-bold">{verifiedReceipt.co2eAvoided} kg</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-sm">
                <span className="font-bold text-slate-900">Credited Payout:</span>
                <span className="font-black text-emerald-700 text-base">₹{verifiedReceipt.totalPayout}</span>
              </div>

              <div className="text-[9px] text-slate-400 break-all pt-1">
                Audit Hash: {verifiedReceipt.verifierHash}
              </div>
            </div>

            <button
              onClick={handleDone}
              className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs cursor-pointer transition-smooth"
            >
              Done & Return to Dashboard
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
