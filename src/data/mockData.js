// EcoSakhi Mock Data & Initial State

export const INITIAL_DASHBOARD_METRICS = {
  wasteCollectedKg: 1248,
  recycledKg: 1012,
  communityEarningsInr: 48600,
  co2eAvoidedKg: 624,
  householdsServed: 186,
  activeCollectors: 24,
  recyclingRatePct: 81.1,
};

export const MATERIAL_PRICES = {
  plastic: { name: 'PET & HDPE Plastic', pricePerKg: 16, unit: '₹/kg', co2Factor: 1.60 },
  paper: { name: 'Paper & Cardboard', pricePerKg: 10, unit: '₹/kg', co2Factor: 1.20 },
  metal: { name: 'Aluminium & Tin Metal', pricePerKg: 32, unit: '₹/kg', co2Factor: 3.80 },
  glass: { name: 'Glass Bottles', pricePerKg: 2.5, unit: '₹/kg', co2Factor: 0.30 },
  ewaste: { name: 'E-Waste & Small Electronics', pricePerKg: 25, unit: '₹/kg', co2Factor: 2.20 },
  mixed: { name: 'Mixed Dry Recyclables', pricePerKg: 12, unit: '₹/kg', co2Factor: 1.35 },
};

export const MONTHLY_COLLECTION_DATA = [
  { month: 'May', collected: 420, recycled: 350, earnings: 16800, co2e: 210 },
  { month: 'Jun', collected: 580, recycled: 490, earnings: 23200, co2e: 290 },
  { month: 'Jul', collected: 790, recycled: 660, earnings: 31600, co2e: 395 },
  { month: 'Aug', collected: 960, recycled: 810, earnings: 38400, co2e: 480 },
  { month: 'Sep', collected: 1120, recycled: 940, earnings: 44800, co2e: 560 },
  { month: 'Oct (MTD)', collected: 1248, recycled: 1012, earnings: 48600, co2e: 624 },
];

export const MATERIAL_PIE_DATA = [
  { name: 'Plastic (PET/HDPE)', value: 524, color: '#059669', pct: '42%' },
  { name: 'Paper & Boxboard', value: 412, color: '#3b82f6', pct: '33%' },
  { name: 'Metals (Al/Tin)', value: 150, color: '#f59e0b', pct: '12%' },
  { name: 'E-Waste / Circuitry', value: 87, color: '#8b5cf6', pct: '7%' },
  { name: 'Glass Containers', value: 75, color: '#10b981', pct: '6%' },
];

export const INITIAL_COLLECTOR = {
  id: 'SHG-TN-04',
  name: 'Lakshmi V.',
  groupName: 'Malar Magalir SHG (Cluster 4)',
  location: 'Ward 14, Tambaram, Chennai',
  todayCollections: 8,
  todayWeightKg: 74,
  todayEarningsInr: 1850,
  monthlyEarningsInr: 28450,
  co2eAvoidedKg: 112,
  consistencyPct: 91,
  recyclingVerificationPct: 87,
  totalVerifiedBatches: 146,
  totalMaterialTonnageKg: 1842,
  climateScore: 82,
};

export const INITIAL_TRANSACTIONS = [
  {
    id: 'TXN-9021',
    date: 'Today, 11:20 AM',
    type: 'Plastic Collection',
    household: 'R. Soundararajan (Flat 3B)',
    material: 'PET Plastic',
    weight: '12.5 kg',
    amount: 200,
    status: 'Settled',
    badge: 'success'
  },
  {
    id: 'TXN-9018',
    date: 'Today, 09:45 AM',
    type: 'Metal Collection',
    household: 'Ananya Swaminathan',
    material: 'Aluminium Cans',
    weight: '6.2 kg',
    amount: 198,
    status: 'Settled',
    badge: 'success'
  },
  {
    id: 'TXN-8994',
    date: 'Yesterday, 04:15 PM',
    type: 'Paper Collection',
    household: 'Vignesh K. (Old Washermanpet)',
    material: 'Corrugated Boxes',
    weight: '23.0 kg',
    amount: 230,
    status: 'Settled',
    badge: 'success'
  },
  {
    id: 'TXN-8982',
    date: '02 Oct 2026',
    type: 'Recycler Settlement',
    household: 'GreenCycle Recycling Chennai',
    material: 'Batch #4092 Bulk Clearance',
    weight: '78.5 kg',
    amount: 1250,
    status: 'Settled',
    badge: 'success'
  },
  {
    id: 'TXN-8950',
    date: '01 Oct 2026',
    type: 'Plastic Collection',
    household: 'Priya Rajendran',
    material: 'HDPE Containers',
    weight: '30.0 kg',
    amount: 480,
    status: 'Settled',
    badge: 'success'
  },
  {
    id: 'TXN-8910',
    date: '30 Sep 2026',
    type: 'Metal Collection',
    household: 'Karthik Narayanan',
    material: 'Iron & Mixed Metal',
    weight: '21.0 kg',
    amount: 672,
    status: 'Settled',
    badge: 'success'
  }
];

export const INITIAL_PICKUP_REQUESTS = [
  {
    id: 'REQ-1049',
    name: 'Meenakshi Sundaram',
    address: 'Plot 42, 3rd Cross, Chromepet, Chennai',
    wasteType: 'Plastic',
    materialDesc: 'PET bottles & clean milk pouches',
    estWeightKg: 12.5,
    timeSlot: 'Today, 2:00 PM – 4:00 PM',
    status: 'Pending Assignment',
    indicativeValue: '₹200 – ₹225'
  },
  {
    id: 'REQ-1050',
    name: 'Dr. S. Ranganathan',
    address: '12 Temple View Lane, Mylapore, Chennai',
    wasteType: 'Paper & Boxes',
    materialDesc: 'Old journals, newspaper, carton boxes',
    estWeightKg: 18.0,
    timeSlot: 'Today, 4:30 PM – 6:00 PM',
    status: 'Assigned to Lakshmi SHG',
    indicativeValue: '₹180 – ₹200'
  },
  {
    id: 'REQ-1051',
    name: 'K. Balaji (Tech park cafeteria)',
    address: 'Ascendas IT Park block 2, Taramani',
    wasteType: 'Metal',
    materialDesc: 'Crushed beverage cans and tin foil',
    estWeightKg: 15.0,
    timeSlot: 'Tomorrow, 10:00 AM – 12:00 PM',
    status: 'Pending Assignment',
    indicativeValue: '₹450 – ₹500'
  }
];

export const VERIFIED_RECYCLERS = [
  {
    id: 'REC-01',
    name: 'GreenCycle Recycling Solutions',
    city: 'Chennai, Tamil Nadu',
    address: 'SIPCOT Industrial Park, Gummidipoondi',
    categories: ['Plastic (PET/HDPE)', 'Paper & Pulp'],
    status: 'Verified Partner',
    registrationNumber: 'SPCB-TN-CTO-8821/2023',
    monthlyCapacity: '150 Metric Tonnes / Month',
    contactPerson: 'K. Murugan, Plant Director',
    trustScore: '98%',
    compliance: 'CPCB & TNPCB Certified',
    activeBatchesReceived: 34
  },
  {
    id: 'REC-02',
    name: 'EcoMetal Circulars Ltd.',
    city: 'Coimbatore, Tamil Nadu',
    address: 'Kurichi Industrial Estate, Coimbatore',
    categories: ['Aluminium', 'Tin', 'Copper & Brass'],
    status: 'Verified Partner',
    registrationNumber: 'SPCB-TN-CTO-4190/2022',
    monthlyCapacity: '80 Metric Tonnes / Month',
    contactPerson: 'S. Selvaraj, Head of Procurement',
    trustScore: '96%',
    compliance: 'CPCB & TNPCB Certified',
    activeBatchesReceived: 21
  },
  {
    id: 'REC-03',
    name: 'Urban E-Waste Circular Recovery',
    city: 'Madurai, Tamil Nadu',
    address: 'Kappalur SIDCO Industrial Area, Madurai',
    categories: ['E-Waste', 'Batteries', 'Circuit Boards'],
    status: 'Verified Partner',
    registrationNumber: 'CPCB-EW-REG-993/2024',
    monthlyCapacity: '25 Metric Tonnes / Month',
    contactPerson: 'R. Deepa, Circularity Officer',
    trustScore: '99%',
    compliance: 'Ministry of Electronics & CPCB Authorised',
    activeBatchesReceived: 14
  }
];

export const SAMPLE_TRACEABILITY_BATCH = {
  batchId: 'PET-TN-2026-0941',
  material: 'PET Plastic (Grade A Clear)',
  origin: 'Ward 14, Tambaram Community Cluster',
  collector: 'Lakshmi V. (Malar Magalir SHG)',
  weightKg: 12.5,
  indicativeValue: 200,
  recyclerDestination: 'GreenCycle Recycling Chennai',
  hash: '0x8f3c7e419b62a4d95e01fca3',
  timeline: [
    { step: 'Pickup Scheduled', time: '04 Oct 2026, 09:15 AM', status: 'completed', by: 'Household: R. Soundararajan' },
    { step: 'Collected & Weighed', time: '04 Oct 2026, 11:20 AM', status: 'completed', by: 'Collector: Lakshmi V. (12.5 kg on Digital Scale)' },
    { step: 'EcoVision AI Classification', time: '04 Oct 2026, 11:22 AM', status: 'completed', by: 'AI Confidence 94% — PET Plastic Recyclable' },
    { step: 'Quality Grading & Sorting', time: '04 Oct 2026, 11:30 AM', status: 'completed', by: 'Grade A Sorted (Clean & Dry)' },
    { step: 'Aggregation Hub Dispatch', time: '04 Oct 2026, 01:15 PM', status: 'completed', by: 'Manifest #MF-4481' },
    { step: 'Recycler Weighbridge Received', time: '04 Oct 2026, 02:40 PM', status: 'completed', by: 'GreenCycle Gate Scale #2: 12.48 kg verified' },
    { step: 'Flaking & Secondary Pelletizing', time: 'Scheduled 05 Oct', status: 'in-progress', by: 'Circular Polymer Line 3' }
  ]
};

export const ECOVISION_SAMPLE_PRESETS = [
  {
    id: 'pet-bottles',
    name: 'Clear PET Water Bottles',
    image: '/pet_sample.jpg',
    material: 'PET Plastic (Polyethylene Terephthalate)',
    resinCode: '#1 PET',
    category: 'Recyclable Dry Polymer',
    confidence: 94,
    indicativePrice: '₹16 – ₹18 / kg',
    contamination: 'Low (Clean & Empty)',
    action: 'Send to verified flake recycler (GreenCycle)',
    co2Benefit: '1.6 kg CO₂e saved per kg'
  },
  {
    id: 'metal-cans',
    name: 'Crushed Aluminium Soda Cans',
    image: '/metal_sample.jpg',
    material: 'Aluminium Metal (UBC - Used Beverage Cans)',
    resinCode: 'Aluminium #41',
    category: 'High-Value Metal',
    confidence: 97,
    indicativePrice: '₹95 – ₹110 / kg',
    contamination: 'Zero (Non-ferrous)',
    action: 'Send to EcoMetal Circulars for ingot casting',
    co2Benefit: '3.8 kg CO₂e saved per kg'
  },
  {
    id: 'cardboard-box',
    name: 'Corrugated Cardboard (OCC)',
    image: null,
    material: 'Corrugated Paperboard (Kraft Fibre)',
    resinCode: 'PAP #20',
    category: 'Recyclable Fibre',
    confidence: 92,
    indicativePrice: '₹10 – ₹12 / kg',
    contamination: 'Dry & Unsoiled',
    action: 'Bale and dispatch to Paper Mill partner',
    co2Benefit: '1.2 kg CO₂e saved per kg'
  },
  {
    id: 'e-waste-circuit',
    name: 'Computer Motherboard / RAM',
    image: null,
    material: 'E-Waste Printed Circuit Board (PCB)',
    resinCode: 'E-Waste WEEE',
    category: 'Hazardous / Precious Metal Recovery',
    confidence: 95,
    indicativePrice: '₹140 – ₹180 / kg',
    contamination: 'Components intact',
    action: 'Transfer to Urban E-Waste for hydrometallurgical recovery',
    co2Benefit: '2.2 kg CO₂e saved per kg'
  }
];

export const DISTRICT_MAP_DATA = [
  { id: 'chennai', name: 'Chennai Metro', activeClusters: 6, households: 104, collectors: 14, wasteTons: 48.2, earningsLakhs: 7.4, co2Tons: 24.1, lat: '13.0827', lng: '80.2707' },
  { id: 'coimbatore', name: 'Coimbatore District', activeClusters: 4, households: 42, collectors: 6, wasteTons: 22.8, earningsLakhs: 3.5, co2Tons: 11.4, lat: '11.0168', lng: '76.9558' },
  { id: 'madurai', name: 'Madurai Region', activeClusters: 2, households: 24, collectors: 3, wasteTons: 9.6, earningsLakhs: 1.5, co2Tons: 4.8, lat: '9.9252', lng: '78.1198' },
  { id: 'salem', name: 'Salem & Erode', activeClusters: 2, households: 16, collectors: 2, wasteTons: 5.8, earningsLakhs: 0.9, co2Tons: 2.9, lat: '11.6643', lng: '78.1460' }
];
