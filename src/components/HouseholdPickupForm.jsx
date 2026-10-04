import React, { useState } from 'react';
import { 
  Home, 
  MapPin, 
  Calendar, 
  Clock, 
  Scale, 
  CheckCircle2, 
  Coins, 
  AlertCircle, 
  ArrowRight,
  Sparkles,
  QrCode
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MATERIAL_PRICES } from '../data/mockData';

export default function HouseholdPickupForm({ onPickupCreated, onGoToCollector }) {
  const [formData, setFormData] = useState({
    name: 'Priya Sundaram',
    phone: '+91 98401 23456',
    address: 'Flat 4B, Shanthi Apts, 2nd Main Rd, Adyar, Chennai',
    wasteType: 'plastic',
    approxKg: 12.5,
    pickupDate: 'Today (Immediate)',
    timeSlot: '2:00 PM – 4:00 PM',
    notes: 'Segregated clear PET water bottles and clean grocery milk pouches.'
  });

  const [submitted, setSubmitted] = useState(false);
  const [createdBooking, setCreatedBooking] = useState(null);

  const selectedPriceInfo = MATERIAL_PRICES[formData.wasteType] || MATERIAL_PRICES.plastic;
  const estimatedMin = Math.round(formData.approxKg * (selectedPriceInfo.pricePerKg * 0.9));
  const estimatedMax = Math.round(formData.approxKg * (selectedPriceInfo.pricePerKg * 1.15));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      id: `REQ-${Math.floor(1000 + Math.random() * 9000)}`,
      name: formData.name,
      address: formData.address,
      wasteType: selectedPriceInfo.name,
      estWeightKg: parseFloat(formData.approxKg),
      timeSlot: `${formData.pickupDate}, ${formData.timeSlot}`,
      status: 'Assigned to Lakshmi SHG',
      indicativeValue: `₹${estimatedMin} – ₹${estimatedMax}`,
      notes: formData.notes
    };

    // Confetti effect
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }

    setCreatedBooking(newBooking);
    setSubmitted(true);
    if (onPickupCreated) {
      onPickupCreated(newBooking);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
          <Home className="w-3.5 h-3.5" />
          <span>Citizen Recycling Portal</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Request Waste Pickup
        </h1>
        <p className="text-slate-600 text-sm max-w-lg mx-auto">
          Schedule doorstep collection of clean dry recyclables. Support local women-led self-help groups while earning transparent rewards.
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          
          {/* Section: Citizen Info */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              1. Household Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-smooth"
                  placeholder="e.g. Meenakshi Sundaram"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Contact Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-smooth"
                  placeholder="+91 98401 23456"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Pickup Address & Ward Location (Tamil Nadu)
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-smooth"
                  placeholder="Street address, Flat number, Locality"
                />
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              </div>
            </div>
          </div>

          {/* Section: Material Category */}
          <div className="space-y-4 pt-2 border-t border-slate-100">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              2. Waste Category & Approximate Quantity
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { id: 'plastic', label: 'Plastic (PET/HDPE)', rate: '₹16/kg', icon: '🧴' },
                { id: 'paper', label: 'Paper & Boxes', rate: '₹10/kg', icon: '📦' },
                { id: 'metal', label: 'Metal (Aluminium/Tin)', rate: '₹32/kg', icon: '🥫' },
                { id: 'glass', label: 'Glass Bottles', rate: '₹2.5/kg', icon: '🍾' },
                { id: 'ewaste', label: 'E-Waste / Electronics', rate: '₹25/kg', icon: '🔌' },
                { id: 'mixed', label: 'Mixed Dry Recyclables', rate: '₹12/kg', icon: '♻️' },
              ].map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setFormData({ ...formData, wasteType: item.id })}
                  className={`p-3 rounded-xl border text-left transition-smooth cursor-pointer ${
                    formData.wasteType === item.id
                      ? 'border-emerald-600 bg-emerald-50/60 ring-2 ring-emerald-500/20'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="text-xl mb-1">{item.icon}</div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">{item.label}</div>
                  <div className="text-[10px] text-emerald-700 font-semibold mt-0.5">{item.rate}</div>
                </button>
              ))}
            </div>

            {/* Approximate Weight Slider & Number Input */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-slate-400" />
                  Estimated Weight:
                </span>
                <span className="text-base font-black text-slate-900">
                  {formData.approxKg} <span className="text-xs font-medium text-slate-500">kg</span>
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="50"
                step="0.5"
                value={formData.approxKg}
                onChange={(e) => setFormData({ ...formData, approxKg: parseFloat(e.target.value) })}
                className="w-full accent-emerald-600 cursor-pointer"
              />

              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>Small bag (2–5 kg)</span>
                <span>Standard bin (10–15 kg)</span>
                <span>Bulk clear-out (30–50 kg)</span>
              </div>

              {/* Indicative Value Banner */}
              <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                  <Coins className="w-4 h-4 text-amber-600" />
                  <span>Estimated Indicative Payout:</span>
                </div>
                <div className="text-sm font-bold text-emerald-700">
                  ₹{estimatedMin} – ₹{estimatedMax}
                </div>
              </div>
              <p className="text-[10px] text-slate-400 italic">
                *Indicative demo price benchmark. Official payout is finalized upon digital scale weighment at doorstep.
              </p>
            </div>
          </div>

          {/* Section: Time Slot */}
          <div className="space-y-4 pt-2 border-t border-slate-100">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              3. Preferred Pickup Slot
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Collection Day
                </label>
                <select
                  value={formData.pickupDate}
                  onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-smooth"
                >
                  <option value="Today (Immediate)">Today (04 Oct 2026)</option>
                  <option value="Tomorrow Morning">Tomorrow (05 Oct 2026)</option>
                  <option value="Weekend Special">Coming Saturday</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Time Window
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-smooth"
                >
                  <option value="9:00 AM – 11:00 AM">Morning: 9:00 AM – 11:00 AM</option>
                  <option value="2:00 PM – 4:00 PM">Afternoon: 2:00 PM – 4:00 PM</option>
                  <option value="4:30 PM – 6:30 PM">Evening: 4:30 PM – 6:30 PM</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl shadow-md shadow-emerald-700/20 flex items-center justify-center gap-2 transition-smooth hover:scale-[1.01] cursor-pointer text-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Schedule Pickup</span>
          </button>
        </form>
      ) : (
        /* Confirmation Screen */
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Pickup Scheduled Successfully!
            </h2>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Your pickup has been dispatched to your neighborhood collector. Lakshmi V. from Malar Magalir SHG has received your request.
            </p>
          </div>

          {/* Digital Booking Pass */}
          <div className="p-5 bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-2xl border border-emerald-800 shadow-md space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-700">
              <div>
                <span className="text-[10px] text-emerald-400 font-mono uppercase tracking-wider">
                  Pickup Pass
                </span>
                <div className="text-sm font-bold">{createdBooking.id}</div>
              </div>
              <div className="w-10 h-10 bg-white p-1 rounded-lg flex items-center justify-center">
                <QrCode className="w-8 h-8 text-slate-900" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-slate-400 text-[10px]">Citizen</div>
                <div className="font-semibold text-white">{createdBooking.name}</div>
              </div>
              <div>
                <div className="text-slate-400 text-[10px]">Assigned Partner</div>
                <div className="font-semibold text-emerald-300">Lakshmi (Cluster 4 SHG)</div>
              </div>
              <div>
                <div className="text-slate-400 text-[10px]">Material & Est. Weight</div>
                <div className="font-semibold text-white">{createdBooking.wasteType} • {createdBooking.estWeightKg} kg</div>
              </div>
              <div>
                <div className="text-slate-400 text-[10px]">Indicative Payout</div>
                <div className="font-semibold text-amber-400">{createdBooking.indicativeValue}</div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-700/80 text-[11px] text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                {createdBooking.timeSlot}
              </span>
              <span className="text-emerald-400 font-medium">Ready for Handover</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={onGoToCollector}
              className="flex-1 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer transition-smooth"
            >
              <span>Switch to Collector View & Accept</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setSubmitted(false)}
              className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs cursor-pointer transition-smooth"
            >
              Book Another Pickup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
