import os
from reportlab.lib.pagesizes import landscape
from reportlab.pdfgen import canvas
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

def generate_pdf():
    pdf_path = "submission/ecosakhi_sankalp_pitch.pdf"
    
    # 16:9 Widescreen dimensions: 960 x 540 points
    W = 960
    H = 540
    
    c = canvas.Canvas(pdf_path, pagesize=(W, H))
    
    # Colors
    c_bg = colors.HexColor('#F8FAFC')
    c_primary = colors.HexColor('#059669')
    c_dark = colors.HexColor('#0F172A')
    c_text = colors.HexColor('#1E293B')
    c_muted = colors.HexColor('#64748B')
    c_card_bg = colors.HexColor('#FFFFFF')
    c_card_border = colors.HexColor('#E2E8F0')
    c_amber = colors.HexColor('#D97706')
    c_amber_bg = colors.HexColor('#FEF3C7')
    c_purple = colors.HexColor('#7E22CE')

    def draw_bg():
        c.setFillColor(c_bg)
        c.rect(0, 0, W, H, fill=1, stroke=0)

    def draw_header(badge, title, subtitle=None):
        draw_bg()
        # Top primary line
        c.setFillColor(c_primary)
        c.rect(50, H - 35, W - 100, 4, fill=1, stroke=0)
        
        # Badge
        c.setFont("Helvetica-Bold", 10)
        c.setFillColor(c_primary)
        c.drawString(50, H - 55, badge.upper())
        
        # Title
        c.setFont("Helvetica-Bold", 20)
        c.setFillColor(c_dark)
        c.drawString(50, H - 80, title)
        
        # Subtitle
        if subtitle:
            c.setFont("Helvetica", 11)
            c.setFillColor(c_muted)
            c.drawString(50, H - 98, subtitle)

    def draw_card(x, y, w, h, title, items, title_color=c_dark, bg=c_card_bg, border=c_card_border):
        # Card Background
        c.setFillColor(bg)
        c.setStrokeColor(border)
        c.setLineWidth(1)
        c.roundRect(x, y, w, h, 8, fill=1, stroke=1)
        
        # Card Title
        c.setFont("Helvetica-Bold", 13)
        c.setFillColor(title_color)
        c.drawString(x + 16, y + h - 24, title)
        
        # Bullets
        c.setFont("Helvetica", 10)
        c.setFillColor(c_text)
        cur_y = y + h - 42
        for item in items:
            # Word wrap manually or single line
            words = item.split(" ")
            line = "• "
            for word in words:
                if c.stringWidth(line + word + " ", "Helvetica", 10) < w - 32:
                    line += word + " "
                else:
                    c.drawString(x + 16, cur_y, line.strip())
                    cur_y -= 14
                    line = "  " + word + " "
            if line.strip():
                c.drawString(x + 16, cur_y, line.strip())
                cur_y -= 16

    # -----------------------------------------------------------------
    # SLIDE 1: Title and Vision
    # -----------------------------------------------------------------
    draw_bg()
    c.setFillColor(c_card_bg)
    c.setStrokeColor(c_card_border)
    c.roundRect(50, 60, 520, 420, 12, fill=1, stroke=1)

    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(c_primary)
    c.drawString(80, 440, "SANKALP by Satin Finserv — The Climate Edition | Student Track")

    c.setFont("Helvetica-Bold", 36)
    c.setFillColor(c_dark)
    c.drawString(80, 385, "EcoSakhi")

    c.setFont("Helvetica-Bold", 15)
    c.setFillColor(c_primary)
    c.drawString(80, 350, "Turn Waste into Income. Turn Communities into Climate Champions.")

    c.setFont("Helvetica", 11)
    c.setFillColor(c_muted)
    intro_p1 = "Climate infrastructure for the underserved circular economy connecting"
    intro_p2 = "households, women-led community collectors, and verified recyclers"
    intro_p3 = "with transparent income, material traceability, and microfinance readiness."
    c.drawString(80, 310, intro_p1)
    c.drawString(80, 292, intro_p2)
    c.drawString(80, 274, intro_p3)

    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(c_dark)
    c.drawString(80, 220, "Target Themes: Waste Management • Circular Economy • Climate Tech • Financial Inclusion")
    c.drawString(80, 200, "Team: EcoSakhi Student Founders | Competition Date: October 2026")

    # Photo on right
    hero_path = "public/ecosakhi_hero.jpg"
    if os.path.exists(hero_path):
        c.drawImage(hero_path, 600, 60, width=310, height=420, preserveAspectRatio=True)

    c.showPage()

    # -----------------------------------------------------------------
    # SLIDE 2: The Problem
    # -----------------------------------------------------------------
    draw_header("The Market Failure", "Waste has economic value. Those handling it cannot capture or prove that value.",
                "Systemic breakdown across the 4 key circular economy stakeholders in Indian communities.")

    card_w = (W - 100 - 45) / 4
    draw_card(50, 140, card_w, 290, "Households", [
        "0% price transparency on recyclables",
        "No trusted way to sell dry scrap",
        "Unaware of actual recycling fate",
        "Dry waste ends up in mixed dump yards"
    ])
    draw_card(50 + card_w + 15, 140, card_w, 290, "Women SHGs & Collectors", [
        "Squeezed by middleman cuts",
        "Zero digital transaction proof",
        "Invisible informal cash earnings",
        "Excluded from formal banking & credit"
    ])
    draw_card(50 + 2 * (card_w + 15), 140, card_w, 290, "Certified Recyclers", [
        "Inconsistent, contaminated supply",
        "20–35% contamination yield loss",
        "Unreliable collection origin proof",
        "CPCB EPR compliance friction"
    ])
    draw_card(50 + 3 * (card_w + 15), 140, card_w, 290, "Financial Institutions", [
        "No verifiable cash-flow trail",
        "Cannot assess informal climate workers",
        "High customer acquisition cost (CAC)",
        "Zero climate-linked activity data"
    ])

    # Citation bar
    c.setFillColor(c_amber_bg)
    c.setStrokeColor(c_amber)
    c.roundRect(50, 45, W - 100, 70, 6, fill=1, stroke=1)
    c.setFont("Helvetica-Bold", 10)
    c.setFillColor(colors.HexColor('#78350F'))
    c.drawString(65, 95, "Verified Benchmark Authority Citation:")
    c.setFont("Helvetica", 9.5)
    c.drawString(65, 78, "According to CPCB Annual Report on Solid Waste (2020–21) & NITI Aayog (2021), India generates 62M+ tonnes MSW annually;")
    c.drawString(65, 62, "<20% of dry recyclables are formally recovered. Informal collectors capture under 15% of downstream value due to pricing opacity.")

    c.showPage()

    # -----------------------------------------------------------------
    # SLIDE 3: The EcoSakhi Solution
    # -----------------------------------------------------------------
    draw_header("Closed-Loop Architecture", "EcoSakhi: Closed-loop digital infrastructure for inclusive circularity.",
                "Uniting doorstep dry collection, material traceability, digital income, and financial readiness.")

    w3 = (W - 100 - 30) / 3
    draw_card(50, 90, w3, 340, "1. Community Dry Collection", [
        "Households book 1-hr pickup slots via mobile/web.",
        "Local Women SHG collectors arrive with digital scales.",
        "Transparent published benchmark rates (e.g. ₹16/kg PET).",
        "Eliminates informal middleman price exploitation.",
        "Generates instant digital collection receipts."
    ])

    draw_card(50 + w3 + 15, 90, w3, 340, "2. Verifiable Circular Traceability", [
        "On-device EcoVision AI assists polymer resin grading.",
        "Physical hand check confirms quality (Grade A dry).",
        "Curb-to-gate digital hash logged on circular ledger.",
        "Secondary weighbridge check at certified recycler.",
        "Audit-ready documentation for CPCB statutory compliance."
    ])

    draw_card(50 + 2 * (w3 + 15), 90, w3, 340, "3. Climate Microfinance Readiness", [
        "Every rupee logged into EcoSakhi Digital Wallet.",
        "Builds 82/100 composite Climate Activity Profile.",
        "Pre-qualifies SHGs for partner finance (e.g. Satin).",
        "Enables green asset loans (e-loaders, balers) safely.",
        "Transforms informal labour into bankable data trails."
    ])

    c.showPage()

    # -----------------------------------------------------------------
    # SLIDE 4: Product Demonstration
    # -----------------------------------------------------------------
    draw_header("Interactive Prototype Flow", "Tested, demo-ready web application running on local port 5174.",
                "13 modular portals providing a seamless continuous user journey.")

    w2 = (W - 100 - 20) / 2
    draw_card(50, 240, w2, 190, "Household Portal (Citizen)", [
        "Selects material (PET Plastic, Paper, Metal, Glass, E-waste).",
        "Inputs approx weight (12.5 kg) with live indicative payout.",
        "Instant booking pass with QR code dispatched to local SHG."
    ])

    draw_card(50 + w2 + 20, 240, w2, 190, "Collector App (Lakshmi SHG)", [
        "Live summary: 8 collections today, 74 kg weight, ₹1,850 earnings.",
        "One-tap pickup acceptance from community queue.",
        "Digital hand scale recording with cryptographic receipt hash."
    ])

    draw_card(50, 40, w2, 180, "EcoSakhi Digital Wallet", [
        "Real-time balance: ₹4,850 available, ₹1,200 pending, ₹28,450 lifetime.",
        "Aadhaar / Jan Dhan linked direct payout simulation.",
        "Every transaction generates bankable proof of income."
    ])

    draw_card(50 + w2 + 20, 40, w2, 180, "Climate Finance Readiness", [
        "Lakshmi SHG Profile: 146 verified collections, ₹62,400 documented flow.",
        "Status: High Financial Readiness match for partner institutions.",
        "Explicit DPDP Act consent workflow for credit evaluation."
    ])

    c.showPage()

    # -----------------------------------------------------------------
    # SLIDE 5: Technology & Innovation
    # -----------------------------------------------------------------
    draw_header("Technology & Trust by Design", "Lightweight, on-device AI combined with rigorous physical verification.",
                "Zero paid API dependencies. Built with React 19, Vite, Tailwind v4, and Recharts.")

    draw_card(50, 60, w2, 370, "EcoVision AI Assistant (Prototype)", [
        "On-device computer vision classification on test inputs.",
        "Distinguishes resin codes (#1 PET, #2 HDPE, aluminium, OCC).",
        "Sample test inference score: 94% on test dataset.",
        "Strict Prototype Disclaimer: Operates as human-in-the-loop decision-support tool. Does not claim production-grade test accuracy.",
        "Automated batch tagging routes sorted dry waste to certified recyclers.",
        "Lightweight browser model ensures field accessibility."
    ])

    draw_card(50 + w2 + 20, 60, w2, 370, "3-Tier Closed-Loop Anti-Fraud Choke Points", [
        "Tier 1 (Doorstep Co-location): Citizen and collector apps confirm GPS/Bluetooth proximity window at handover.",
        "Tier 2 (Density Anomaly Check): Algorithms flag anomalous weight-to-volume discrepancies (e.g. 50 kg PET in 20L bag).",
        "Tier 3 (Recycler Gate Weighbridge): Batch weighbridge scale reading matches declared weight within 2% tolerance.",
        "Zero Platform Arbitrage: Scores do not grant unbacked cash, removing incentive for phantom record logging.",
        "Consented DPDP-compliant data packaging for external lenders."
    ])

    c.showPage()

    # -----------------------------------------------------------------
    # SLIDE 6: Transparent Traceability
    # -----------------------------------------------------------------
    draw_header("Circular Traceability Ledger", "7-stage chain of custody from household curb to secondary pellets.",
                "Delivering tamper-proof audit trails for CPCB Extended Producer Responsibility (EPR) rules.")

    draw_card(50, 270, W - 100, 160, "7-Stage Custody Lifecycle", [
        "1. Household (Pickup Booked) ──> 2. Collector (Weighed on Handheld Scale) ──> 3. Sorting (EcoVision AI Assist)",
        "──> 4. Weighing (Receipt Issued) ──> 5. Recycler (Gate Weighbridge Received) ──> 6. Processing (Flaked/Extruded) ──> 7. Secondary Material.",
        "Closed-loop physical and digital verification eliminates greenwashing and phantom records."
    ])

    draw_card(50, 50, w2, 200, "Batch Inspector Telemetry", [
        "Active Batch: #PET-TN-2026-0941 (12.5 kg PET Clear)",
        "Origin: Ward 14 Tambaram Cluster (Lakshmi SHG)",
        "Destination: GreenCycle Recycling (Demonstration Partner)",
        "Audit Hash: 0x8f3c7e419b62a4d95e01fca3 (Immutable)",
        "Status: Recycler Received ✓ (Gate Scale: 12.48 kg)"
    ])

    draw_card(50 + w2 + 20, 50, w2, 200, "Recycler Reconciliation", [
        "Declared Dispatch: 74.0 kg | Facility Gate: 73.8 kg (99.7% match)",
        "Contamination: Under 4.5% vs informal scrap industry average 28%",
        "Recycler unlocks wallet escrow settlement immediately upon gate weighbridge confirmation.",
        "Provides statutory CPCB digital certificate data."
    ])

    c.showPage()

    # -----------------------------------------------------------------
    # SLIDE 7: Environmental and Economic Impact
    # -----------------------------------------------------------------
    draw_header("Quantified Impact Model", "Empirical baseline model for 1,000 households over 1 year.",
                "All metrics derived from published CPCB, UNEP, and US EPA WARM lifecycle factors.")

    draw_card(50, 250, card_w, 180, "120 Metric Tonnes", [
        "Dry scrap diverted annually",
        "10 kg/HH/month yield",
        "~360 m³ landfill void saved",
        "Prevents open dump fires"
    ], title_color=c_primary)

    draw_card(50 + card_w + 15, 250, card_w, 180, "₹18.5 Lakhs", [
        "Direct community income",
        "Weighted avg: ₹15.4/kg",
        "100% digital wallet payouts",
        "Eliminates middleman cuts"
    ], title_color=c_amber)

    draw_card(50 + 2 * (card_w + 15), 250, card_w, 180, "180 MT CO₂e", [
        "Net GHG emissions avoided",
        "Virgin polymer displacement",
        "~76,000 L diesel avoided",
        "~8,200 mature tree equiv"
    ], title_color=c_primary)

    draw_card(50 + 3 * (card_w + 15), 250, card_w, 180, "10–12 Women", [
        "Full-time livelihoods created",
        "~₹12,800/mo supplementary pay",
        "+50% household income lift",
        "Satin credit pre-readiness"
    ], title_color=c_purple)

    draw_card(50, 45, W - 100, 190, "Configurable Lifecycle Assumptions & Sources", [
        "Emission Factors: Plastics 1.6 kg CO₂e/kg (EPA WARM v15 / CPCB EPR 2022); Paper 1.2 kg CO₂e/kg (UNEP); Metals 3.8 kg CO₂e/kg (IAI).",
        "Household Waste Norm: 0.35–0.45 kg/person/day total MSW; ~25% dry recyclables (CPCB Solid Waste Rules 2016, NITI Aayog 2021).",
        "Scrap Benchmarks: PET ₹16/kg, OCC ₹10/kg, Metal ₹32/kg (Tamil Nadu wholesale dealer survey; indicative & configurable).",
        "Disclaimer: Model estimates are illustrative and subject to transport distance, moisture, and local processing technology."
    ])

    c.showPage()

    # -----------------------------------------------------------------
    # SLIDE 8: Business Model & Strategic Fit with Satin Finserv
    # -----------------------------------------------------------------
    draw_header("Ecosystem Synergy", "Multi-sided B2B monetization + responsible microfinance partnership.",
                "Core social principle: Household scheduling and collector app usage are 100% free.")

    draw_card(50, 50, w2, 380, "Sustainable B2B Revenue Streams", [
        "1. Recycler Quality Premium (3–5% platform fee): Recyclers pay for pre-sorted, clean feedstock, saving 20% in sorting and contamination loss.",
        "2. Corporate EPR Traceability SaaS: Consumer goods brands purchase audited digital plastic recycling credits for statutory CPCB compliance.",
        "3. Financial Partner API Licensing: Financial institutions license consented activity profiles to identify pre-screened borrowers.",
        "4. Municipal Ward Dashboards: Civic local bodies subscribe to ward-level waste segregation analytics for Swachh Survekshan.",
        "Asset-light architecture ensures zero high municipal capex."
    ])

    draw_card(50 + w2 + 20, 50, w2, 380, "Why Satin Finserv? Strategic Alignment", [
        "Satin's Mission: Empowering underserved women micro-entrepreneurs and green rural livelihoods.",
        "EcoSakhi Delivers: 146+ verified collection records, ₹62,400 documented flow, and an 82/100 Climate Score.",
        "Potential Satin Loan Products to Explore:",
        "  • Green Cargo e-Rickshaw Loan (₹65,000 to triple collection range).",
        "  • Community Hydraulic Baler Credit (₹42,000 group enterprise).",
        "  • Livelihood Buffer Line of Credit (₹15,000 seasonal buffer).",
        "Important Regulatory Boundary: EcoSakhi is NOT a lender. We provide the verified operational data rail for Satin's underwriting."
    ])

    c.showPage()

    # -----------------------------------------------------------------
    # SLIDE 9: Implementation, Scalability, and Risks
    # -----------------------------------------------------------------
    draw_header("Execution Feasibility", "Pragmatic 3-stage roadmap and proactive risk mitigation.",
                "Asset-light partnership model leveraging existing State Rural Livelihood Missions.")

    draw_card(50, 50, w3, 380, "Phase 1: Pilot (0–6 Mo)", [
        "Tamil Nadu community hub.",
        "1,000 Households onboarded.",
        "24 Women SHG collectors.",
        "3 Recycler demonstration MoUs.",
        "Validate scale weighbridge and wallet payout speeds.",
        "Zero paid API dependencies."
    ])

    draw_card(50 + w3 + 15, 50, w3, 380, "Phase 2: Scale (6–18 Mo)", [
        "5 Municipal districts in South India.",
        "25,000 Participating households.",
        "250+ SHG collection leaders.",
        "On-device EcoVision v1.0 deploy.",
        "Pilot Climate Activity Profile integration with Satin sandbox.",
        "Centralized sorting/baling hubs."
    ])

    draw_card(50 + 2 * (w3 + 15), 50, w3, 380, "Implementation Risks & Mitigation", [
        "Risk: Off-platform cash bypass.\nMitigation: Recyclers pay 15% bulk premium passed back to SHGs; credit readiness tied to app records.",
        "Risk: AI misclassification.\nMitigation: Human-in-the-loop manual override; physical weighbridge remains ground truth.",
        "Risk: Data privacy violations.\nMitigation: DPDP Act 2023 purpose-specific consent & data minimization."
    ])

    c.showPage()

    # -----------------------------------------------------------------
    # SLIDE 10: Vision, Team, and Closing
    # -----------------------------------------------------------------
    draw_header("Our Commitment", "“Every kilogram recycled should create both environmental value and economic opportunity.”",
                "Building India's trusted digital infrastructure for an inclusive circular economy.")

    draw_card(50, 50, w2, 380, "Why EcoSakhi Wins", [
        "Rooted in Ground Reality: Solves municipal solid waste at source while formalizing vulnerable women recyclers.",
        "Empirical Climate Science: Verified lifecycle avoided carbon accounting backed by CPCB & UNEP benchmarks.",
        "Direct Value for Satin Finserv: Not a theoretical project; creates the verifiable transaction trail for responsible climate microfinance.",
        "Execution-Ready: Live, fully working prototype running on local port 5174 with zero paid API dependencies.",
        "Scalable across India's urban and peri-urban centers."
    ])

    draw_card(50 + w2 + 20, 50, w2, 380, "The EcoSakhi North Star", [
        "Turn waste into income.",
        "Turn income into resilience.",
        "Turn communities into climate champions.",
        "--------------------------------------------------",
        "Project: EcoSakhi",
        "Competition: SANKALP by Satin Finserv — The Climate Edition",
        "Track: Student Track",
        "Contact: team@ecosakhi.in | Demo: http://127.0.0.1:5174/",
        "Thank you to the Esteemed Jury!"
    ], title_color=c_primary)

    c.showPage()
    c.save()
    print(f"Successfully generated 10-slide PDF presentation at: {pdf_path}")

if __name__ == "__main__":
    generate_pdf()
