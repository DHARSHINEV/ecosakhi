import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import DashboardView from './components/DashboardView';
import HouseholdPickupForm from './components/HouseholdPickupForm';
import CollectorDashboard from './components/CollectorDashboard';
import RecordCollectionModal from './components/RecordCollectionModal';
import EcoVisionScanner from './components/EcoVisionScanner';
import ImpactCalculator from './components/ImpactCalculator';
import WalletView from './components/WalletView';
import ClimateScoreView from './components/ClimateScoreView';
import FinancialReadinessView from './components/FinancialReadinessView';
import RecyclerPortal from './components/RecyclerPortal';
import TraceabilityView from './components/TraceabilityView';
import AdminMapView from './components/AdminMapView';
import GuidedTourModal, { TOUR_STEPS } from './components/GuidedTourModal';
import PitchDeckModal from './components/PitchDeckModal';
import JudgeFaqModal from './components/JudgeFaqModal';

import { 
  INITIAL_COLLECTOR, 
  INITIAL_PICKUP_REQUESTS, 
  INITIAL_TRANSACTIONS,
  INITIAL_DASHBOARD_METRICS 
} from './data/mockData';

export default function App() {
  const getInitialTab = () => {
    const hash = window.location.hash.replace('#', '');
    const valid = ['landing', 'dashboard', 'pickup', 'collector', 'ecovision', 'calculator', 'wallet', 'climate-score', 'finance', 'recycler', 'traceability', 'admin'];
    return valid.includes(hash) ? hash : 'landing';
  };

  const [currentTab, setTabState] = useState(getInitialTab);

  const setCurrentTab = (tab) => {
    setTabState(tab);
    window.location.hash = tab;
  };

  React.useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) setTabState(hash);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const [collector, setCollector] = useState(INITIAL_COLLECTOR);
  const [pickupRequests, setPickupRequests] = useState(INITIAL_PICKUP_REQUESTS);
  const [transactions, setTransactions] = useState(INITIAL_TRANSACTIONS);
  const [availableBalance, setAvailableBalance] = useState(4850);
  const [pendingBalance, setPendingBalance] = useState(1200);
  const [lifetimeEarnings, setLifetimeEarnings] = useState(28450);
  const [preselectedMaterial, setPreselectedMaterial] = useState('plastic');
  
  // Modals state
  const [recordModalOpen, setRecordModalOpen] = useState(false);
  const [pitchDeckOpen, setPitchDeckOpen] = useState(false);
  const [judgeFaqOpen, setJudgeFaqOpen] = useState(false);

  // Guided 2-Min Demo Tour State
  const [guidedTourOpen, setGuidedTourOpen] = useState(false);
  const [tourStepIndex, setTourStepIndex] = useState(0);

  // Citizen schedules a pickup
  const handlePickupCreated = (newPickup) => {
    setPickupRequests([newPickup, ...pickupRequests]);
  };

  // Collector accepts a pickup
  const handleAcceptPickup = (pickupId) => {
    setPickupRequests(pickupRequests.map(p => {
      if (p.id === pickupId) {
        return { ...p, status: 'In Progress by Lakshmi SHG' };
      }
      return p;
    }));
  };

  // Collection is recorded & verified
  const handleCollectionRecorded = (receipt) => {
    // 1. Update Collector Today Metrics
    setCollector(prev => ({
      ...prev,
      todayCollections: prev.todayCollections + 1,
      todayWeightKg: Math.round(prev.todayWeightKg + receipt.weightKg),
      todayEarningsInr: prev.todayEarningsInr + receipt.totalPayout,
      monthlyEarningsInr: prev.monthlyEarningsInr + receipt.totalPayout,
      co2eAvoidedKg: Math.round(prev.co2eAvoidedKg + parseFloat(receipt.co2eAvoided)),
      totalVerifiedBatches: prev.totalVerifiedBatches + 1,
      totalMaterialTonnageKg: Math.round(prev.totalMaterialTonnageKg + receipt.weightKg)
    }));

    // 2. Append to Digital Wallet Transactions
    const newTxn = {
      id: `TXN-${Math.floor(9000 + Math.random() * 900)}`,
      date: 'Just now',
      type: `${receipt.materialName} Collection`,
      household: receipt.household,
      material: receipt.materialName,
      weight: `${receipt.weightKg} kg`,
      amount: receipt.totalPayout,
      status: 'Settled',
      badge: 'success'
    };
    setTransactions([newTxn, ...transactions]);
    setAvailableBalance(prev => prev + receipt.totalPayout);
    setLifetimeEarnings(prev => prev + receipt.totalPayout);

    // 3. Update Dashboard aggregate metrics
    INITIAL_DASHBOARD_METRICS.wasteCollectedKg += Math.round(receipt.weightKg);
    INITIAL_DASHBOARD_METRICS.recycledKg += Math.round(receipt.weightKg * 0.95);
    INITIAL_DASHBOARD_METRICS.communityEarningsInr += receipt.totalPayout;
    INITIAL_DASHBOARD_METRICS.co2eAvoidedKg += Math.round(parseFloat(receipt.co2eAvoided));
  };

  // Guided Tour Step Change
  const handleTourStepChange = (nextIndex, stepData) => {
    setTourStepIndex(nextIndex);
    if (stepData.tab === 'record-modal') {
      setCurrentTab('collector');
      setRecordModalOpen(true);
    } else {
      setCurrentTab(stepData.tab);
    }
  };

  const startTour = () => {
    setTourStepIndex(0);
    setCurrentTab(TOUR_STEPS[0].tab);
    setGuidedTourOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Global Navigation */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onStartTour={startTour}
        onOpenPitchDeck={() => setPitchDeckOpen(true)}
        onOpenFaq={() => setJudgeFaqOpen(true)}
      />

      {/* Main View Portals */}
      <main className="flex-1">
        {currentTab === 'landing' && (
          <LandingPage
            onExploreDemo={() => setCurrentTab('dashboard')}
            onSeeImpact={() => setCurrentTab('calculator')}
            onCollectorView={() => setCurrentTab('collector')}
            onStartTour={startTour}
          />
        )}

        {currentTab === 'dashboard' && (
          <DashboardView
            onSchedulePickup={() => setCurrentTab('pickup')}
            onCollectorApp={() => setCurrentTab('collector')}
            onOpenEcoVision={() => setCurrentTab('ecovision')}
          />
        )}

        {currentTab === 'pickup' && (
          <HouseholdPickupForm
            onPickupCreated={handlePickupCreated}
            onGoToCollector={() => setCurrentTab('collector')}
          />
        )}

        {currentTab === 'collector' && (
          <CollectorDashboard
            collector={collector}
            pickupRequests={pickupRequests}
            onAcceptPickup={handleAcceptPickup}
            onOpenRecordModal={() => setRecordModalOpen(true)}
            onViewWallet={() => setCurrentTab('wallet')}
            onViewImpact={() => setCurrentTab('calculator')}
            onOpenEcoVision={() => setCurrentTab('ecovision')}
          />
        )}

        {currentTab === 'ecovision' && (
          <EcoVisionScanner
            onRecordCollectionWithMaterial={(scanResult) => {
              const resCode = scanResult.resinCode || '';
              if (resCode.includes('#1')) setPreselectedMaterial('plastic');
              else if (resCode.includes('Aluminium')) setPreselectedMaterial('metal');
              else if (resCode.includes('PAP')) setPreselectedMaterial('paper');
              else if (resCode.includes('WEEE')) setPreselectedMaterial('ewaste');
              else setPreselectedMaterial('plastic');
              setCurrentTab('collector');
              setRecordModalOpen(true);
            }}
          />
        )}

        {currentTab === 'calculator' && (
          <ImpactCalculator />
        )}

        {currentTab === 'wallet' && (
          <WalletView 
            transactions={transactions} 
            availableBalance={availableBalance}
            pendingBalance={pendingBalance}
            lifetimeEarnings={lifetimeEarnings}
            onWithdraw={(amt) => setAvailableBalance(prev => prev - amt)}
          />
        )}

        {currentTab === 'climate-score' && (
          <ClimateScoreView 
            onExploreFinance={() => setCurrentTab('finance')}
          />
        )}

        {currentTab === 'finance' && (
          <FinancialReadinessView />
        )}

        {currentTab === 'recycler' && (
          <RecyclerPortal />
        )}

        {currentTab === 'traceability' && (
          <TraceabilityView />
        )}

        {currentTab === 'admin' && (
          <AdminMapView />
        )}
      </main>

      {/* Global Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900">EcoSakhi</span>
            <span>—</span>
            <span>Turn Waste into Income. Turn Communities into Climate Champions.</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <button 
              onClick={() => setPitchDeckOpen(true)}
              className="hover:text-emerald-700 underline cursor-pointer"
            >
              10-Slide Deck
            </button>
            <button 
              onClick={() => setJudgeFaqOpen(true)}
              className="hover:text-emerald-700 underline cursor-pointer"
            >
              25 Judge FAQs
            </button>
            <span className="text-slate-400">SANKALP by Satin Finserv (Student Track)</span>
          </div>
        </div>
      </footer>

      {/* Record Collection Modal */}
      <RecordCollectionModal
        isOpen={recordModalOpen}
        onClose={() => setRecordModalOpen(false)}
        onCollectionRecorded={handleCollectionRecorded}
        initialMaterial={preselectedMaterial}
      />

      {/* 2-Minute Judge Guided Demo Modal */}
      <GuidedTourModal
        isOpen={guidedTourOpen}
        onClose={() => setGuidedTourOpen(false)}
        currentStepIndex={tourStepIndex}
        onStepChange={handleTourStepChange}
        onOpenRecordModal={() => setRecordModalOpen(true)}
      />

      {/* Pitch Deck Viewer Modal */}
      <PitchDeckModal
        isOpen={pitchDeckOpen}
        onClose={() => setPitchDeckOpen(false)}
      />

      {/* Judge Q&A FAQ Modal */}
      <JudgeFaqModal
        isOpen={judgeFaqOpen}
        onClose={() => setJudgeFaqOpen(false)}
      />

    </div>
  );
}
