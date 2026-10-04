import React, { useState } from 'react';
import { 
  Wallet, 
  Coins, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2, 
  Download, 
  Building, 
  Smartphone, 
  ShieldCheck,
  CreditCard,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { INITIAL_TRANSACTIONS } from '../data/mockData';

export default function WalletView({ 
  transactions = INITIAL_TRANSACTIONS,
  availableBalance = 4850,
  pendingBalance = 1200,
  lifetimeEarnings = 28450,
  onWithdraw
}) {
  const [internalBalance, setInternalBalance] = useState(availableBalance);
  const [showPayoutModal, setShowPayoutModal] = useState(false);
  const [payoutSuccess, setPayoutSuccess] = useState(false);
  const [payoutAmount, setPayoutAmount] = useState('2500');

  const currentAvailable = onWithdraw ? availableBalance : internalBalance;

  const handlePayoutSubmit = (e) => {
    e.preventDefault();
    const amount = parseInt(payoutAmount) || 0;
    if (amount <= currentAvailable) {
      if (onWithdraw) {
        onWithdraw(amount);
      } else {
        setInternalBalance(prev => prev - amount);
      }
      setPayoutSuccess(true);

      try {
        confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
      } catch {
        // fallback
      }
      setTimeout(() => {
        setPayoutSuccess(false);
        setShowPayoutModal(false);
      }, 2000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              EcoSakhi Wallet
            </h1>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full border border-emerald-200">
              SHG Account
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Lakshmi V. • Malar Magalir SHG (Cluster 4) • UPI: lakshmi.shg@okhdfcbank
          </p>
        </div>

        <button
          onClick={() => setShowPayoutModal(true)}
          className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-xl text-xs shadow-sm flex items-center gap-2 cursor-pointer transition-smooth"
        >
          <ArrowUpRight className="w-4 h-4" />
          <span>Withdraw to Bank / UPI</span>
        </button>
      </div>

      {/* 3 Core Wallet Balance Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        {/* Available Earnings */}
        <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white p-5 rounded-2xl border border-emerald-700 shadow-md space-y-2">
          <div className="flex items-center justify-between text-emerald-300">
            <span className="text-[10px] font-bold uppercase tracking-wider">Available Earnings</span>
            <Wallet className="w-4 h-4" />
          </div>
          <div className="text-3xl font-black">
            ₹{currentAvailable.toLocaleString()}
          </div>
          <div className="text-[10px] text-emerald-300 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Ready for instant transfer
          </div>
        </div>

        {/* Pending Settlement */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-[10px] font-bold uppercase tracking-wider">Pending Clearance</span>
            <Clock className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-3xl font-black text-slate-900">
            ₹{pendingBalance.toLocaleString()}
          </div>
          <div className="text-[10px] text-amber-600 font-medium">
            Recycler weighbridge verification in progress
          </div>
        </div>

        {/* Lifetime Earnings */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-[10px] font-bold uppercase tracking-wider">Total Lifetime Earnings</span>
            <Coins className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-3xl font-black text-slate-900">
            ₹{lifetimeEarnings.toLocaleString()}
          </div>
          <div className="text-[10px] text-slate-500 font-medium">
            146 verified collections logged
          </div>
        </div>

      </div>

      {/* Financial Identity Notice */}
      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
        <div className="text-xs text-slate-700 leading-relaxed">
          <span className="font-bold text-slate-900">Digital Audit Trail:</span> Every transaction in this wallet generates a timestamped, verifiable digital record. This transaction history serves as documented proof of informal livelihood income when evaluating financial products with partners like <span className="font-semibold text-slate-900">Satin Finserv</span>.
        </div>
      </div>

      {/* Digital Transaction History Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h2 className="text-sm font-bold text-slate-900">
              Digital Transaction History
            </h2>
            <p className="text-xs text-slate-500">
              Itemized credits from doorstep collections and bulk recycler settlements
            </p>
          </div>
          <button 
            onClick={() => alert('Exporting signed PDF/CSV statement for Satin Finserv underwriter...')}
            className="text-xs text-slate-600 hover:text-emerald-700 font-semibold flex items-center gap-1 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Statement</span>
          </button>
        </div>

        <div className="divide-y divide-slate-100">
          {transactions.map((txn) => (
            <div key={txn.id} className="py-3.5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Coins className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{txn.type}</div>
                  <div className="text-[11px] text-slate-500">
                    {txn.household} • {txn.material} ({txn.weight})
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                    {txn.id} • {txn.date}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm font-bold text-emerald-700">
                  +₹{txn.amount}
                </div>
                <span className="text-[9px] bg-emerald-100 text-emerald-800 font-semibold px-1.5 py-0.2 rounded">
                  {txn.status} ✓
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payout Modal */}
      {showPayoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full border border-slate-200 shadow-2xl p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Withdraw Available Earnings
            </h3>
            <p className="text-xs text-slate-500">
              Transfer funds to your linked Jan Dhan bank account or Aadhaar-enabled UPI ID.
            </p>

            {payoutSuccess ? (
              <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl text-center font-bold text-sm">
                ✓ Payout of ₹{payoutAmount} initiated successfully!
              </div>
            ) : (
              <form onSubmit={handlePayoutSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Withdrawal Amount (₹)
                  </label>
                  <input
                    type="number"
                    max={currentAvailable}
                    value={payoutAmount}
                    onChange={(e) => setPayoutAmount(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                  <span className="text-[10px] text-slate-400">Available: ₹{currentAvailable}</span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Payout Destination</div>
                  <div className="font-semibold text-slate-800">State Bank of India • A/c ending 8812</div>
                  <div className="text-[11px] text-slate-500">Aadhaar / Jan Dhan linked • Zero transfer fee</div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs cursor-pointer"
                  >
                    Confirm Payout
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPayoutModal(false)}
                    className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
