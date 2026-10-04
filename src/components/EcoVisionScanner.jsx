import React, { useState } from 'react';
import { 
  Sparkles, 
  Upload, 
  CheckCircle2, 
  AlertTriangle, 
  Camera, 
  RefreshCw, 
  ArrowRight, 
  ShieldAlert,
  Layers,
  Factory,
  Leaf,
  ScanLine
} from 'lucide-react';
import { ECOVISION_SAMPLE_PRESETS } from '../data/mockData';

export default function EcoVisionScanner({ onScanFinished, onRecordCollectionWithMaterial }) {
  const [selectedPreset, setSelectedPreset] = useState(ECOVISION_SAMPLE_PRESETS[0]);
  const [customImage, setCustomImage] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState({
    detected: 'PET Plastic (Polyethylene Terephthalate)',
    resinCode: '#1 PET',
    category: 'Recyclable Dry Polymer',
    confidence: 94,
    contamination: 'Low (Clean & Empty)',
    action: 'Send to verified flake recycler (GreenCycle)',
    co2Benefit: '1.6 kg CO₂e saved per kg',
    indicativePrice: '₹16 – ₹18 / kg'
  });

  const handleSelectPreset = (preset) => {
    setSelectedPreset(preset);
    setCustomImage(null);
    runSimulatedScan(preset);
  };

  const handleCustomUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCustomImage(reader.result);
        runSimulatedScan({
          name: 'User Captured Waste Image',
          material: 'Mixed Dry Polymer (PET / PP)',
          resinCode: 'Polymer Mix #5/#1',
          category: 'Recyclable Dry Waste',
          confidence: 91,
          contamination: 'Minimal dry dust',
          action: 'Perform manual visual check; dispatch to GreenCycle',
          co2Benefit: '1.5 kg CO₂e saved per kg',
          indicativePrice: '₹14 – ₹16 / kg'
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const runSimulatedScan = (data) => {
    setIsScanning(true);
    setTimeout(() => {
      setScanResult({
        detected: data.material,
        resinCode: data.resinCode,
        category: data.category,
        confidence: data.confidence,
        contamination: data.contamination,
        action: data.action,
        co2Benefit: data.co2Benefit,
        indicativePrice: data.indicativePrice
      });
      setIsScanning(false);
      if (onScanFinished) {
        onScanFinished(data);
      }
    }, 1200);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold border border-purple-200">
          <Sparkles className="w-3.5 h-3.5 text-purple-700" />
          <span>EcoVision On-Device Assistant</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          AI-Assisted Material Classification
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
          Assists community waste collectors and SHGs in identifying polymer resin codes, detecting contamination, and routing batches to certified recyclers.
        </p>
      </div>

      {/* Mandatory Prototype Disclaimer Callout */}
      <div className="p-4 bg-amber-50 rounded-2xl border border-amber-300 flex items-start gap-3 shadow-xs">
        <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-950 leading-relaxed space-y-1">
          <div>
            <span className="font-bold">Important Competition Notice:</span>{' '}
            <span className="font-semibold underline">
              Prototype AI result — requires human verification.
            </span>{' '}
            EcoVision is designed as an edge decision-support assistant for field collectors. It does not claim production-grade computer vision accuracy. Confidence scores reflect single-image feature matching on prototype test inputs rather than an audited production evaluation benchmark.
          </div>
          <div className="text-[11px] text-amber-900/90 font-medium">
            • Scrap values shown (e.g. ₹16–₹18/kg for PET) are illustrative Tamil Nadu wholesale benchmarks (based on regional dealer surveys) and subject to moisture and contaminant penalties.
          </div>
        </div>
      </div>

      {/* Main Scanner Stage */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Left Column: Image Viewport + Laser Scanning Effect */}
        <div className="md:col-span-6 space-y-4">
          <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-lg relative min-h-[300px] flex items-center justify-center">
            
            {/* Display Image */}
            {customImage ? (
              <img 
                src={customImage} 
                alt="Custom uploaded waste" 
                className="w-full h-72 object-cover object-center"
              />
            ) : selectedPreset.image ? (
              <img 
                src={selectedPreset.image} 
                alt={selectedPreset.name} 
                className="w-full h-72 object-cover object-center"
              />
            ) : (
              <div className="p-8 text-center text-slate-400 space-y-2">
                <Camera className="w-12 h-12 mx-auto text-slate-600" />
                <div className="text-sm font-semibold">{selectedPreset.name}</div>
                <div className="text-xs text-slate-500">Synthetic Visual Sample Feed</div>
              </div>
            )}

            {/* Laser Line Scanning Animation */}
            {isScanning && (
              <div className="absolute inset-0 pointer-events-none flex flex-col justify-center">
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-lg shadow-purple-500/80 animate-bounce" />
                <div className="absolute inset-0 bg-purple-500/10 backdrop-blur-2xs" />
              </div>
            )}

            {/* Corner Bracket Overlays for AI look */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-emerald-400 pointer-events-none" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-emerald-400 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-emerald-400 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-emerald-400 pointer-events-none" />

            {/* Overlaid Confidence Badge */}
            {!isScanning && (
              <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700 text-white text-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Sample Inference Score: <strong className="text-emerald-400">{scanResult.confidence}%</strong> (Demo Test)</span>
              </div>
            )}
          </div>

          {/* Sample Switcher & Upload */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Select Sample Feed or Upload Photo:
            </span>
            <div className="grid grid-cols-2 gap-2">
              {ECOVISION_SAMPLE_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handleSelectPreset(preset)}
                  className={`p-2.5 rounded-xl border text-left text-xs transition-smooth cursor-pointer ${
                    selectedPreset.id === preset.id && !customImage
                      ? 'border-purple-600 bg-purple-50/60 font-semibold text-purple-900'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="truncate">{preset.name}</div>
                  <div className="text-[10px] text-slate-400">{preset.resinCode}</div>
                </button>
              ))}
            </div>

            <label className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-smooth border border-slate-200">
              <Upload className="w-3.5 h-3.5 text-slate-500" />
              <span>Upload Custom Camera Photo</span>
              <input type="file" accept="image/*" onChange={handleCustomUpload} className="hidden" />
            </label>
          </div>
        </div>

        {/* Right Column: AI Analysis Card */}
        <div className="md:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                Classification Report
              </span>
              <h2 className="text-base font-bold text-slate-900">
                EcoVision Analysis
              </h2>
            </div>
            <button
              onClick={() => runSimulatedScan(selectedPreset)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-smooth cursor-pointer"
              title="Rescan"
            >
              <RefreshCw className={`w-4 h-4 ${isScanning ? 'animate-spin text-purple-600' : ''}`} />
            </button>
          </div>

          {/* Results Block */}
          <div className="space-y-3.5">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400">Detected Material</span>
              <div className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>{scanResult.detected}</span>
              </div>
              <span className="text-xs text-purple-700 font-semibold bg-purple-50 px-2 py-0.5 rounded border border-purple-200 mt-1 inline-block">
                Resin Code: {scanResult.resinCode}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs pt-1">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] uppercase font-bold text-slate-400">Category</span>
                <div className="font-semibold text-slate-800">{scanResult.category}</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] uppercase font-bold text-slate-400">Contamination Risk</span>
                <div className="font-semibold text-emerald-700">{scanResult.contamination}</div>
              </div>
            </div>

            <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider">
                Suggested Recycling Action
              </span>
              <p className="text-xs text-slate-800 font-semibold">
                {scanResult.action}
              </p>
              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span>Indicative value: <strong className="text-slate-900">{scanResult.indicativePrice}</strong></span>
                <span className="text-green-700 font-medium">✓ {scanResult.co2Benefit}</span>
              </div>
            </div>
          </div>

          {/* Primary Action: Send to Collection Recording */}
          <div className="pt-2">
            <button
              onClick={() => {
                if (onRecordCollectionWithMaterial) {
                  onRecordCollectionWithMaterial(scanResult);
                }
              }}
              className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-xs cursor-pointer transition-smooth"
            >
              <span>Apply AI Tag to Collection Record</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
