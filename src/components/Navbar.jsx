import React, { useState } from 'react';
import { 
  Recycle, 
  Sparkles, 
  UserCheck, 
  Wallet, 
  Activity, 
  Landmark, 
  Factory, 
  MapPin, 
  FileText, 
  HelpCircle, 
  Play, 
  Menu, 
  X,
  ChevronDown
} from 'lucide-react';

export default function Navbar({ 
  currentTab, 
  setCurrentTab, 
  onStartTour, 
  onOpenPitchDeck, 
  onOpenFaq 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portalDropdownOpen, setPortalDropdownOpen] = useState(false);

  const mainNavItems = [
    { id: 'landing', label: 'Overview', icon: Recycle },
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
    { id: 'pickup', label: 'Request Pickup', icon: UserCheck },
    { id: 'collector', label: 'Collector App', icon: Recycle, badge: 'Active' },
    { id: 'ecovision', label: 'EcoVision AI', icon: Sparkles, highlight: true },
    { id: 'calculator', label: 'Impact Engine', icon: Activity },
    { id: 'wallet', label: 'Wallet', icon: Wallet },
    { id: 'climate-score', label: 'Climate Score', icon: Activity },
    { id: 'finance', label: 'Satin Readiness', icon: Landmark, badge: 'USP' },
    { id: 'traceability', label: 'Traceability', icon: FileText },
    { id: 'recycler', label: 'Recycler Hub', icon: Factory },
    { id: 'admin', label: 'Regional Map', icon: MapPin },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Banner Notice */}
      <div className="bg-emerald-800 text-emerald-50 px-4 py-1 text-xs font-medium flex items-center justify-between">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-emerald-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wide uppercase">
              Competition Prototype
            </span>
            <span className="hidden sm:inline">
              SANKALP by Satin Finserv — The Climate Edition (Student Track)
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-emerald-200 text-[11px] hidden md:inline">
              Demo Data Mode • Verified Environmental & Livelihood Traceability
            </span>
            <button 
              onClick={onOpenPitchDeck}
              className="text-white hover:text-emerald-300 font-semibold underline flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-3 h-3" /> 10-Slide Deck
            </button>
            <button 
              onClick={onOpenFaq}
              className="text-white hover:text-emerald-300 font-semibold underline flex items-center gap-1 cursor-pointer"
            >
              <HelpCircle className="w-3 h-3" /> 25 Judge Q&A
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={() => setCurrentTab('landing')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-700 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-smooth">
              <Recycle className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-slate-900">EcoSakhi</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-1.5 py-0.5 rounded-full border border-emerald-200">
                  MVP
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block leading-none">
                Climate Infrastructure for the Circular Economy
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNavItems.slice(0, 7).map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-smooth flex items-center gap-1.5 cursor-pointer ${
                    isActive 
                      ? 'bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200 shadow-xs' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-700' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] bg-amber-100 text-amber-800 px-1 py-0.2 rounded font-bold">
                      {item.badge}
                    </span>
                  )}
                  {item.highlight && (
                    <span className="text-[9px] bg-purple-100 text-purple-700 px-1 py-0.2 rounded font-bold">
                      AI
                    </span>
                  )}
                </button>
              );
            })}

            {/* More Ecosystem Portals Dropdown */}
            <div className="relative">
              <button
                onClick={() => setPortalDropdownOpen(!portalDropdownOpen)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-smooth flex items-center gap-1 cursor-pointer ${
                  ['climate-score', 'finance', 'traceability', 'recycler', 'admin'].includes(currentTab)
                    ? 'bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>Ecosystem</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {portalDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseLeave={() => setPortalDropdownOpen(false)}
                >
                  <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Infrastructure & Finance
                  </div>
                  {mainNavItems.slice(7).map((item) => {
                    const Icon = item.icon;
                    const isActive = currentTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setCurrentTab(item.id);
                          setPortalDropdownOpen(false);
                        }}
                        className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between hover:bg-slate-50 cursor-pointer ${
                          isActive ? 'text-emerald-700 font-semibold bg-emerald-50/50' : 'text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="w-3.5 h-3.5 text-slate-400" />
                          <span>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action: Guided 2-Min Demo Button */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={onStartTour}
              className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-sm shadow-emerald-700/20 flex items-center gap-1.5 transition-smooth hover:scale-[1.02] cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>2-Min Judge Demo</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onStartTour}
              className="bg-emerald-700 text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg flex items-center gap-1"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Demo</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-1 pb-2 border-b border-slate-100">
            <button
              onClick={() => { onOpenPitchDeck(); setMobileMenuOpen(false); }}
              className="px-3 py-2 text-xs font-medium bg-slate-100 text-slate-700 rounded-lg flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-600" />
              <span>10-Slide Pitch</span>
            </button>
            <button
              onClick={() => { onOpenFaq(); setMobileMenuOpen(false); }}
              className="px-3 py-2 text-xs font-medium bg-slate-100 text-slate-700 rounded-lg flex items-center gap-1.5"
            >
              <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>25 Judge FAQs</span>
            </button>
          </div>

          <div className="pt-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2">
            All Prototype Modules
          </div>

          {mainNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between ${
                  isActive 
                    ? 'bg-emerald-50 text-emerald-800 font-semibold' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-emerald-600" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
