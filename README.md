# 🌿 EcoSakhi (इको सखी)
### *Turning Waste into Women's Economic Opportunity*

**Competition:** SANKALP by Satin Finserv — The Climate Edition (Student Track)  
**Themes:** Waste Management • Circular Economy • Climate Tech • Livelihood & Financial Inclusion  
**Status:** Working MVP Prototype (React 19 + Vite 8 + Recharts)  

---

## 🌟 The Big Idea

**EcoSakhi** is an innovative circular-economy platform that bridges urban households, women-led Self-Help Groups (SHGs), certified industrial recyclers, and climate microfinance institutions like Satin Finserv.

In India, **over 62 million tonnes of municipal solid waste** are generated annually (CPCB 2020–21), yet less than 20% of dry recyclable waste enters formal, traceable recovery streams (NITI Aayog 2021). Informal women waste collectors recover up to 80% of plastics, yet capture **less than 15% of the material value** due to steep middleman markups and unrecorded cash transactions.

EcoSakhi transforms this broken value chain into **traceable community value**, giving women collectors fair income today and the verified operational data needed to unlock **productive green microfinance** tomorrow.

---

## 🚀 Core Innovation Pillars

```
[ Urban Household ] ──> [ Women SHG Collector ] ──> [ Industrial Recycler ] ──> [ Financial Institution ]
 Schedules pickup       Calibrated digital weighment     Gate weighbridge audit         Consent-gated data rail
 Instant price quote    Direct wallet payout             Escrow fund release            Green asset micro-loans
 Avoided CO2e metrics   Tamper-evident audit hash        Purity & EPR provenance        (e.g., e-Cargo Loaders)
```

1. **Verifiable Community Collection:** Households schedule dry waste pickups with instant price transparency; women SHGs collect, sort, and digitally log verified dry recyclables.
2. **AI-Assisted Material Classification (EcoVision):** Edge computer vision model architecture assisting collectors in identifying recyclable scrap (PET, HDPE, Cardboard, Metals, E-Waste) and flagging contamination.
3. **Closed-Loop Chain of Custody:** Curb collection weights reconciled against industrial recycler gate weighbridges (±2% tolerance) with tamper-evident SHA-256 database audit hashes.
4. **Data-Driven Financial Readiness:** Daily digital weighments and consistent cash flows build an **82/100 Climate Activity Profile**, enabling partner financial institutions to underwrite productive green assets (such as e-cargo rickshaws) under the **DPDP Act 2023** purpose-specific consent framework.

---

## 📁 Repository Structure

```
ecosakhi/
├── submission/
│   ├── ecosakhi_sankalp_pitch.pptx   # Official 10-slide editable 16:9 PowerPoint pitch (< 1 MB)
│   ├── ecosakhi_sankalp_pitch.pdf    # Matching 10-page 16:9 presentation PDF
│   ├── ecosakhi_pitch_sources.md     # Comprehensive slide-by-slide citation & formula audit
│   ├── ecosakhi_video_script.md      # Timed 2m 45s voiceover script for video submission
│   └── final_readiness_report.md     # Independent technical audit & QA evaluation
├── screenshots/                      # 12 High-resolution genuine prototype UI screenshots
├── public/                           # Static assets, hero images, sample scrap imagery
├── src/
│   ├── components/
│   │   ├── LandingPage.jsx           # Value chain overview & CPCB benchmark strip
│   │   ├── DashboardView.jsx         # Executive telemetry, Recharts area & donut charts
│   │   ├── HouseholdPickupForm.jsx   # Citizen scheduling & QR pass generation
│   │   ├── CollectorDashboard.jsx    # SHG trip queue & calibrated weighment modal
│   │   ├── EcoVisionScanner.jsx      # Prototype edge AI camera classifier
│   │   ├── ImpactCalculator.jsx      # Interactive avoided carbon LCA engine
│   │   ├── WalletView.jsx            # Instant earnings ledger & simulated Jan Dhan payout
│   │   ├── ClimateScoreView.jsx      # 5-factor operational activity gauge
│   │   ├── FinancialReadinessView.jsx# Satin Finserv green asset loan readiness & DPDP consent
│   │   ├── RecyclerPortal.jsx        # Gate weighbridge reconciliation & escrow release
│   │   ├── TraceabilityView.jsx      # 7-stage chain of custody batch inspector
│   │   ├── AdminMapView.jsx          # Regional district analytics & CSV audit export
│   │   ├── GuidedTourModal.jsx       # 2-minute automated presenter demo dock
│   │   └── JudgeFaqModal.jsx         # 25-question searchable jury Q&A database
│   ├── App.jsx                       # Master reactive routing and synchronized state
│   └── index.css                     # Tailwind CSS & design tokens
├── generate_final_pitch_pptx.py      # PowerPoint automation script (python-pptx)
├── generate_final_pitch_pdf.py       # Presentation PDF generator (ReportLab)
├── package.json
└── vite.config.js
```

---

## 🔬 Scientific Methodology & Verified Citations

- **Municipal Solid Waste Baseline:** Assumed at $0.35 - 0.45\text{ kg/capita/day}$ with ~25% dry recyclable fraction (*CPCB Solid Waste Management Rules 2016; NITI Aayog 2021*).
- **Participating Recovery Yield:** $10.0\text{ kg/household/month}$ (~70% capture efficiency of dry recyclables).
- **Avoided Carbon LCA Factors:**
  - Rigid Plastics (PET): **1.60 kg CO₂e / kg** recycled vs virgin fossil resin.
  - Cardboard & Paper: **1.20 kg CO₂e / kg** recycled vs virgin kraft pulp.
  - Aluminium Cans: **3.80 kg CO₂e / kg** recycled vs virgin bauxite smelting.
  - *Sources:* **US EPA Waste Reduction Model (WARM v15)**; **CPCB Plastic Waste EPR Guidelines (2022)**.
- **Data Privacy & Governance:** Purpose-specific consent and data minimization aligned with the **Digital Personal Data Protection (DPDP) Act 2023** (Act No. 22 of 2023).

---

## 🛠️ Getting Started Locally

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation & Launch
```bash
# Clone the repository
git clone https://github.com/DHARSHINEV/ecosakhi.git
cd ecosakhi

# Install dependencies
npm install

# Start Vite development server
npm run dev
```

Open `http://localhost:5173/` in your browser to experience the full 13-module platform.

---

## ⚖️ Competition Disclosures

1. **Prototype Status:** Software features (household scheduling, digital scale math, receipt hashing, wallet ledger, CSV audit export) are fully implemented. Banking gateway settlement and SMS gateways are simulated locally.
2. **AI Assistance:** EcoVision displays sample prototype inference scores on test images. Ground-truth scrap verification in the field relies on calibrated physical scales.
3. **Financial Institution Demarcation:** Mention of Satin Finserv represents a proposed strategic alignment for SANKALP by Satin Finserv — The Climate Edition. EcoSakhi provides an operational data rail; it is not a direct lender.

---

**Team EcoSakhi (Student Innovators)**  
*SANKALP by Satin Finserv — The Climate Edition (Student Track)*  
*Contact: team@ecosakhi.in*
