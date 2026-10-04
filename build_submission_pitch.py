import os
import sys
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

def create_presentation():
    prs = Presentation()
    # 16:9 aspect ratio
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)
    blank_layout = prs.slide_layouts[6]

    # Theme colors
    C_BG = RGBColor(248, 250, 252)        # Slate 50
    C_DARK = RGBColor(15, 23, 42)          # Slate 900
    C_TEXT = RGBColor(30, 41, 59)          # Slate 800
    C_MUTED = RGBColor(100, 116, 139)      # Slate 500
    C_PRIMARY = RGBColor(5, 150, 105)      # Emerald 600
    C_ACCENT = RGBColor(16, 185, 129)      # Emerald 500
    C_LIGHT_CARD = RGBColor(255, 255, 255) # White
    C_CARD_BORDER = RGBColor(226, 232, 240)# Slate 200
    C_AMBER = RGBColor(217, 119, 6)        # Amber 600
    C_PURPLE = RGBColor(126, 34, 206)      # Purple 700

    def add_bg(slide):
        bg = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, prs.slide_width, prs.slide_height)
        bg.fill.solid()
        bg.fill.fore_color.rgb = C_BG
        bg.line.fill.background()

    def add_header(slide, badge_text, title_text, subtitle_text=None):
        add_bg(slide)
        top_bar = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(0.5), Inches(11.733), Inches(0.06))
        top_bar.fill.solid()
        top_bar.fill.fore_color.rgb = C_PRIMARY
        top_bar.line.fill.background()

        tb = slide.shapes.add_textbox(Inches(0.8), Inches(0.65), Inches(11.733), Inches(0.4))
        p = tb.text_frame.paragraphs[0]
        p.text = badge_text.upper()
        p.font.size = Pt(10)
        p.font.bold = True
        p.font.color.rgb = C_PRIMARY

        tb2 = slide.shapes.add_textbox(Inches(0.8), Inches(0.95), Inches(11.733), Inches(0.8))
        p2 = tb2.text_frame.paragraphs[0]
        p2.text = title_text
        p2.font.size = Pt(24)
        p2.font.bold = True
        p2.font.color.rgb = C_DARK

        if subtitle_text:
            p3 = tb2.text_frame.add_paragraph()
            p3.text = subtitle_text
            p3.font.size = Pt(12)
            p3.font.color.rgb = C_MUTED
            p3.space_before = Pt(4)

    def add_card(slide, left, top, width, height, title, items, border_color=C_CARD_BORDER, bg_color=C_LIGHT_CARD, title_color=C_DARK):
        card = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height)
        card.fill.solid()
        card.fill.fore_color.rgb = bg_color
        card.line.color.rgb = border_color
        card.line.width = Pt(1.5)

        tf = card.text_frame
        tf.word_wrap = True
        tf.margin_left = Inches(0.25)
        tf.margin_right = Inches(0.25)
        tf.margin_top = Inches(0.2)
        tf.margin_bottom = Inches(0.2)

        p = tf.paragraphs[0]
        p.text = title
        p.font.size = Pt(14)
        p.font.bold = True
        p.font.color.rgb = title_color
        p.space_after = Pt(8)

        for item in items:
            p2 = tf.add_paragraph()
            p2.text = f"• {item}"
            p2.font.size = Pt(10.5)
            p2.font.color.rgb = C_TEXT
            p2.space_after = Pt(4)

    # -------------------------------------------------------------
    # SLIDE 1: Title and Vision
    # -------------------------------------------------------------
    s1 = prs.slides.add_slide(blank_layout)
    add_bg(s1)

    # Banner Card
    hero_card = s1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.0), Inches(7.5), Inches(5.5))
    hero_card.fill.solid()
    hero_card.fill.fore_color.rgb = C_LIGHT_CARD
    hero_card.line.color.rgb = C_CARD_BORDER

    tf1 = hero_card.text_frame
    tf1.word_wrap = True
    tf1.margin_left = Inches(0.5)
    tf1.margin_top = Inches(0.5)

    p = tf1.paragraphs[0]
    p.text = "SANKALP by Satin Finserv — The Climate Edition | Student Track"
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = C_PRIMARY

    p2 = tf1.add_paragraph()
    p2.text = "EcoSakhi"
    p2.font.size = Pt(44)
    p2.font.bold = True
    p2.font.color.rgb = C_DARK
    p2.space_before = Pt(12)

    p3 = tf1.add_paragraph()
    p3.text = "Turn Waste into Income. Turn Communities into Climate Champions."
    p3.font.size = Pt(18)
    p3.font.bold = True
    p3.font.color.rgb = C_PRIMARY
    p3.space_before = Pt(4)

    p4 = tf1.add_paragraph()
    p4.text = "Climate infrastructure for the underserved circular economy connecting households, women-led community collectors, and verified recyclers with transparent income and microfinance readiness."
    p4.font.size = Pt(12)
    p4.font.color.rgb = C_MUTED
    p4.space_before = Pt(12)

    p5 = tf1.add_paragraph()
    p5.text = "Themes: Waste Management • Circular Economy • Climate Tech • Financial Inclusion\nTeam: EcoSakhi Student Founders | Competition Date: October 2026"
    p5.font.size = Pt(11)
    p5.font.color.rgb = C_DARK
    p5.space_before = Pt(20)

    # Embed hero photo on the right if it exists
    hero_img_path = os.path.abspath("public/ecosakhi_hero.jpg")
    if os.path.exists(hero_img_path):
        s1.shapes.add_picture(hero_img_path, Inches(8.6), Inches(1.0), Inches(3.9), Inches(5.5))

    # -------------------------------------------------------------
    # SLIDE 2: The Problem
    # -------------------------------------------------------------
    s2 = prs.slides.add_slide(blank_layout)
    add_header(s2, "The Market Failure", "Waste has economic value. Those handling it cannot capture or prove that value.", 
               "Systemic fragmentation across the 4 primary stakeholders in semi-urban India.")

    add_card(s2, Inches(0.8), Inches(2.0), Inches(2.7), Inches(3.8), "Households", [
        "0% price transparency on dry waste",
        "No trusted way to sell recyclables",
        "Unaware of actual recycling fate",
        "Dry waste ends up in mixed dumping"
    ])

    add_card(s2, Inches(3.8), Inches(2.0), Inches(2.7), Inches(3.8), "Women Collectors / SHGs", [
        "Vulnerable to middleman rate cuts",
        "Zero digital transaction proof",
        "Invisible informal cash earnings",
        "Excluded from formal micro-credit"
    ])

    add_card(s2, Inches(6.8), Inches(2.0), Inches(2.7), Inches(3.8), "Certified Recyclers", [
        "Volatile and contaminated supply",
        "20–35% contamination loss",
        "Unverifiable material origin",
        "CPCB EPR compliance friction"
    ])

    add_card(s2, Inches(9.8), Inches(2.0), Inches(2.7), Inches(3.8), "Financial Institutions", [
        "No verifiable cash-flow trail",
        "Cannot assess informal climate workers",
        "High borrower acquisition costs",
        "Zero climate-linked activity data"
    ])

    # Citation box at bottom
    cite_card = s2.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(6.0), Inches(11.733), Inches(0.9))
    cite_card.fill.solid()
    cite_card.fill.fore_color.rgb = RGBColor(254, 243, 199)
    cite_card.line.color.rgb = C_AMBER
    tf_cite = cite_card.text_frame
    tf_cite.margin_left = Inches(0.2)
    tf_cite.margin_top = Inches(0.12)
    p_c = tf_cite.paragraphs[0]
    p_c.text = "Verified Benchmark Citation: According to CPCB Annual Report on Solid Waste (2020–21) & NITI Aayog (2021), India generates 62M+ tonnes MSW annually; <20% of dry recyclables are formally recovered. Informal collectors capture under 15% of downstream value due to pricing opacity."
    p_c.font.size = Pt(9.5)
    p_c.font.color.rgb = RGBColor(120, 53, 15)

    # -------------------------------------------------------------
    # SLIDE 3: The EcoSakhi Solution
    # -------------------------------------------------------------
    s3 = prs.slides.add_slide(blank_layout)
    add_header(s3, "Comprehensive Architecture", "EcoSakhi: Closed-loop digital infrastructure for inclusive circularity.",
               "Uniting doorstep dry collection, material traceability, digital income, and financial readiness.")

    add_card(s3, Inches(0.8), Inches(2.0), Inches(3.7), Inches(4.8), "1. Community Dry Collection", [
        "Households book 1-hr pickup slots via mobile/web.",
        "Local Women SHG collectors arrive with digital scales.",
        "Transparent published benchmark rates (e.g. ₹16/kg PET).",
        "Eliminates informal middleman price exploitation."
    ])

    add_card(s3, Inches(4.8), Inches(2.0), Inches(3.7), Inches(4.8), "2. Verifiable Circular Traceability", [
        "On-device EcoVision AI assists polymer resin grading.",
        "Physical hand check confirms quality (Grade A dry).",
        "Curb-to-gate digital hash logged on circular ledger.",
        "Secondary weighbridge check at certified recycler."
    ])

    add_card(s3, Inches(8.8), Inches(2.0), Inches(3.7), Inches(4.8), "3. Climate Microfinance Readiness", [
        "Every rupee logged into EcoSakhi Digital Wallet.",
        "Builds 82/100 composite Climate Activity Profile.",
        "Pre-qualifies SHGs for partner finance (e.g. Satin).",
        "Enables green asset loans (e-loaders, balers) safely."
    ])

    # -------------------------------------------------------------
    # SLIDE 4: End-to-End Product Demonstration
    # -------------------------------------------------------------
    s4 = prs.slides.add_slide(blank_layout)
    add_header(s4, "Interactive Prototype Flow", "Tested, demo-ready web application running on local port 5174.",
               "13 modular portals providing a seamless continuous user journey.")

    add_card(s4, Inches(0.8), Inches(2.0), Inches(5.6), Inches(2.3), "Household Portal (Citizen)", [
        "Selects material (PET Plastic, Paper, Metal, Glass, E-waste).",
        "Inputs approx weight (12.5 kg) with live indicative payout.",
        "Instant booking pass with QR code dispatched to local SHG."
    ])

    add_card(s4, Inches(6.9), Inches(2.0), Inches(5.6), Inches(2.3), "Collector App (Lakshmi SHG)", [
        "Live summary: 8 collections today, 74 kg weight, ₹1,850 earnings.",
        "One-tap pickup acceptance from community queue.",
        "Digital hand scale recording with cryptographic receipt hash."
    ])

    add_card(s4, Inches(0.8), Inches(4.6), Inches(5.6), Inches(2.3), "EcoSakhi Digital Wallet", [
        "Real-time balance: ₹4,850 available, ₹1,200 pending, ₹28,450 lifetime.",
        "Aadhaar / Jan Dhan linked direct payout simulation.",
        "Every transaction generates bankable proof of income."
    ])

    add_card(s4, Inches(6.9), Inches(4.6), Inches(5.6), Inches(2.3), "Climate Finance Readiness", [
        "Lakshmi SHG Profile: 146 verified collections, ₹62,400 documented flow.",
        "Status: High Financial Readiness match for partner institutions.",
        "Explicit DPDP Act consent workflow for credit evaluation."
    ])

    # -------------------------------------------------------------
    # SLIDE 5: Technology and Innovation
    # -------------------------------------------------------------
    s5 = prs.slides.add_slide(blank_layout)
    add_header(s5, "Technology & Trust by Design", "Lightweight, on-device AI combined with rigorous physical verification.",
               "Zero paid API dependencies. Built with React 19, Vite, Tailwind v4, and Recharts.")

    add_card(s5, Inches(0.8), Inches(2.0), Inches(5.6), Inches(4.8), "EcoVision AI Assistant (Prototype)", [
        "On-device computer vision classification on test inputs.",
        "Distinguishes resin codes (#1 PET, #2 HDPE, aluminium, OCC).",
        "Sample test inference score: 94% on test dataset.",
        "Strict Prototype Disclaimer: Operates as human-in-the-loop decision-support tool. Does not claim production-grade test accuracy.",
        "Automated batch tagging routes sorted dry waste to certified recyclers."
    ])

    add_card(s5, Inches(6.9), Inches(2.0), Inches(5.6), Inches(4.8), "3-Tier Closed-Loop Anti-Fraud Choke Points", [
        "Tier 1 (Doorstep Co-location): Citizen and collector apps confirm GPS/Bluetooth proximity window at handover.",
        "Tier 2 (Density Anomaly Check): Algorithms flag anomalous weight-to-volume discrepancies (e.g. 50 kg PET in 20L bag).",
        "Tier 3 (Recycler Gate Weighbridge): Batch weighbridge scale reading matches declared weight within 2% tolerance.",
        "Zero Platform Arbitrage: Scores do not grant unbacked cash, removing incentive for phantom record logging."
    ])

    # -------------------------------------------------------------
    # SLIDE 6: Transparent Collection and Traceability
    # -------------------------------------------------------------
    s6 = prs.slides.add_slide(blank_layout)
    add_header(s6, "Circular Traceability Ledger", "7-stage chain of custody from household curb to secondary pellets.",
               "Delivering tamper-proof audit trails for CPCB Extended Producer Responsibility (EPR) rules.")

    add_card(s6, Inches(0.8), Inches(2.0), Inches(11.733), Inches(2.0), "7-Stage Custody Lifecycle", [
        "1. Household (Pickup Booked) ──> 2. Collector (Weighed on Handheld Scale) ──> 3. Sorting (EcoVision AI Assist)",
        "──> 4. Weighing (Receipt Issued) ──> 5. Recycler (Gate Weighbridge Received) ──> 6. Processing (Flaked/Extruded) ──> 7. Secondary Material."
    ])

    add_card(s6, Inches(0.8), Inches(4.3), Inches(5.6), Inches(2.7), "Batch Inspector Telemetry", [
        "Active Batch: #PET-TN-2026-0941 (12.5 kg PET Clear)",
        "Origin: Ward 14 Tambaram Cluster (Lakshmi SHG)",
        "Destination: GreenCycle Recycling (Demonstration Partner)",
        "Audit Hash: 0x8f3c7e419b62a4d95e01fca3 (Immutable)"
    ])

    add_card(s6, Inches(6.9), Inches(4.3), Inches(5.6), Inches(2.7), "Recycler Reconciliation", [
        "Declared Dispatch: 74.0 kg | Facility Gate: 73.8 kg (99.7% match)",
        "Contamination: Under 4.5% vs informal scrap industry average 28%",
        "Recycler unlocks wallet escrow settlement immediately upon gate weighbridge confirmation."
    ])

    # -------------------------------------------------------------
    # SLIDE 7: Environmental and Economic Impact
    # -------------------------------------------------------------
    s7 = prs.slides.add_slide(blank_layout)
    add_header(s7, "Quantified Impact Model", "Empirical baseline model for 1,000 households over 1 year.",
               "All metrics derived from published CPCB, UNEP, and US EPA WARM lifecycle factors.")

    # 4 Metric Cards
    add_card(s7, Inches(0.8), Inches(2.0), Inches(2.7), Inches(2.2), "120 Metric Tonnes", [
        "Recyclables diverted annually",
        "10 kg/HH/month yield",
        "~360 m³ landfill void saved",
        "Prevents open dump fires"
    ], title_color=C_PRIMARY)

    add_card(s7, Inches(3.8), Inches(2.0), Inches(2.7), Inches(2.2), "₹18.5 Lakhs", [
        "Direct community income",
        "Weighted avg: ₹15.4/kg",
        "100% digital wallet payouts",
        "Eliminates middleman cuts"
    ], title_color=C_AMBER)

    add_card(s7, Inches(6.8), Inches(2.0), Inches(2.7), Inches(2.2), "180 MT CO₂e", [
        "Net GHG emissions avoided",
        "Virgin polymer displacement",
        "~76,000 L diesel avoided",
        "~8,200 mature tree equiv"
    ], title_color=C_PRIMARY)

    add_card(s7, Inches(9.8), Inches(2.0), Inches(2.7), Inches(2.2), "10–12 Women", [
        "Full-time livelihoods created",
        "~₹12,800/mo supplementary pay",
        "+50% household income lift",
        "Satin credit pre-readiness"
    ], title_color=C_PURPLE)

    # Assumptions table box
    add_card(s7, Inches(0.8), Inches(4.5), Inches(11.733), Inches(2.5), "Configurable Lifecycle Assumptions & Sources", [
        "Emission Factors: Plastics 1.6 kg CO₂e/kg (EPA WARM v15 / CPCB EPR 2022); Paper 1.2 kg CO₂e/kg (UNEP); Metals 3.8 kg CO₂e/kg (IAI).",
        "Household Waste Norm: 0.35–0.45 kg/person/day total MSW; ~25% dry recyclables (CPCB Solid Waste Rules 2016, NITI Aayog 2021).",
        "Scrap Benchmarks: PET ₹16/kg, OCC ₹10/kg, Metal ₹32/kg (Tamil Nadu wholesale dealer survey; indicative & configurable).",
        "Disclaimer: Model estimates are illustrative and subject to transport distance, moisture, and local processing technology."
    ])

    # -------------------------------------------------------------
    # SLIDE 8: Business Model & Strategic Fit with Satin Finserv
    # -------------------------------------------------------------
    s8 = prs.slides.add_slide(blank_layout)
    add_header(s8, "Ecosystem Synergy", "Multi-sided B2B monetization + responsible microfinance partnership.",
               "Core social principle: Household scheduling and collector app usage are 100% free.")

    add_card(s8, Inches(0.8), Inches(2.0), Inches(5.6), Inches(4.8), "Sustainable B2B Revenue Streams", [
        "1. Recycler Quality Premium (3–5% platform fee): Recyclers pay for pre-sorted, clean feedstock, saving 20% in sorting and contamination loss.",
        "2. Corporate EPR Traceability SaaS: Consumer goods brands purchase audited digital plastic recycling credits for statutory CPCB compliance.",
        "3. Financial Partner API Licensing: Financial institutions license consented activity profiles to identify pre-screened borrowers.",
        "4. Municipal Ward Dashboards: Civic local bodies subscribe to ward-level waste segregation analytics for Swachh Survekshan."
    ])

    add_card(s8, Inches(6.9), Inches(2.0), Inches(5.6), Inches(4.8), "Why Satin Finserv? Strategic Alignment", [
        "Satin's Mission: Empowering underserved women micro-entrepreneurs and green rural livelihoods.",
        "EcoSakhi Delivers: 146+ verified collection records, ₹62,400 documented flow, and an 82/100 Climate Score.",
        "Potential Satin Loan Products to Explore:",
        "  • Green Cargo e-Rickshaw Loan (₹65,000 to triple collection range).",
        "  • Community Hydraulic Baler Credit (₹42,000 group enterprise).",
        "  • Livelihood Buffer Line of Credit (₹15,000 seasonal buffer).",
        "Important Regulatory Boundary: EcoSakhi is NOT a lender. We provide the verified operational data rail for Satin's underwriting."
    ])

    # -------------------------------------------------------------
    # SLIDE 9: Implementation, Scalability, and Risks
    # -------------------------------------------------------------
    s9 = prs.slides.add_slide(blank_layout)
    add_header(s9, "Execution Feasibility", "Pragmatic 3-stage roadmap and proactive risk mitigation.",
               "Asset-light partnership model leveraging existing State Rural Livelihood Missions.")

    add_card(s9, Inches(0.8), Inches(2.0), Inches(3.7), Inches(4.8), "Phase 1: Pilot (0–6 Mo)", [
        "Tamil Nadu community hub.",
        "1,000 Households onboarded.",
        "24 Women SHG collectors.",
        "3 Recycler demonstration MoUs.",
        "Validate scale weighbridge and wallet payout speeds."
    ])

    add_card(s9, Inches(4.8), Inches(2.0), Inches(3.7), Inches(4.8), "Phase 2: Scale (6–18 Mo)", [
        "5 Municipal districts in South India.",
        "25,000 Participating households.",
        "250+ SHG collection leaders.",
        "On-device EcoVision v1.0 deploy.",
        "Pilot Climate Activity Profile integration with Satin sandbox."
    ])

    add_card(s9, Inches(8.8), Inches(2.0), Inches(3.7), Inches(4.8), "Implementation Risks & Mitigation", [
        "Risk: Off-platform cash bypass.\nMitigation: Recyclers pay 15% bulk premium passed back to SHGs; credit readiness tied to app records.",
        "Risk: AI misclassification.\nMitigation: Human-in-the-loop manual override; physical weighbridge remains ground truth.",
        "Risk: Data privacy violations.\nMitigation: DPDP Act 2023 purpose-specific consent & data minimization."
    ])

    # -------------------------------------------------------------
    # SLIDE 10: Vision, Team, and Closing
    # -------------------------------------------------------------
    s10 = prs.slides.add_slide(blank_layout)
    add_header(s10, "Our Commitment", "“Every kilogram recycled should create both environmental value and economic opportunity.”",
               "Building India's trusted digital infrastructure for an inclusive circular economy.")

    add_card(s10, Inches(0.8), Inches(2.0), Inches(5.6), Inches(4.8), "Why EcoSakhi Wins", [
        "Rooted in Ground Reality: Solves municipal solid waste at source while formalizing vulnerable women recyclers.",
        "Empirical Climate Science: Verified lifecycle avoided carbon accounting backed by CPCB & UNEP benchmarks.",
        "Direct Value for Satin Finserv: Not a theoretical project; creates the verifiable transaction trail for responsible climate microfinance.",
        "Execution-Ready: Live, fully working prototype running on local port 5174 with zero paid API dependencies."
    ])

    add_card(s10, Inches(6.9), Inches(2.0), Inches(5.6), Inches(4.8), "The EcoSakhi North Star", [
        "Turn waste into income.",
        "Turn income into resilience.",
        "Turn communities into climate champions.",
        "--------------------------------------------------",
        "Project: EcoSakhi",
        "Competition: SANKALP by Satin Finserv — The Climate Edition",
        "Track: Student Track",
        "Contact: team@ecosakhi.in | Demo: http://127.0.0.1:5174/"
    ], title_color=C_PRIMARY)

    os.makedirs("submission", exist_ok=True)
    pptx_path = "submission/ecosakhi_sankalp_pitch.pptx"
    prs.save(pptx_path)
    print(f"Successfully generated 10-slide PowerPoint presentation at: {pptx_path}")

if __name__ == "__main__":
    create_presentation()
