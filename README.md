# Morocco Travel Data

Travel Inventory Audit Platform for World Cup 2030 preparation.

## Features

- **Travel Alpha Calculator** - Yield gap analysis between public OTA rates and forensic negotiated rates
- **Corporate Readiness Scoring** - Fortune 500 compliance tiers (PLATINUM/GOLD/SILVER/BRONZE)
- **Mobile Audit Form** - Field verification with GPS, Wi-Fi speed test, safety checklist
- **Google Sheets Integration** - Audit data synced to Travel_Audits sheet

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/audit-travel` | Mobile audit form |
| `/dashboard` | Inventory dashboard with asset cards |
| `/api/audit` | POST endpoint for audit submissions |

## Key Functions

### `calculateTravelAlpha(asset)`
Compares Public Rate (Booking.com/Airbnb) vs Forensic Negotiated Rate.

### `calculateCorporateReadiness(asset)`
Scores assets on:
- Connectivity (Wi-Fi speed)
- Safety (grade + checklist)
- Accessibility
- Owner Reliability
- Standardization

### `calculateManagementFee(assets, nights)`
Calculates the 15% certainty premium for consolidated corporate bookings.

## Setup

```bash
npm install
npm run dev
```

## Environment Variables

```
GOOGLE_SHEET_ID=1iJ2YgDgdrTlzok02MulD9Tb7mmefBdMSa7bR0PDheuo
NEXT_PUBLIC_MAPBOX_TOKEN=pk.eyJ1IjoiaW5kaWdvYW5kbGF2ZW5kZXIiLCJhIjoiY21kN3B0OTZvMGllNjJpcXY0MnZlZHVlciJ9.1-jV-Pze3d7HZseOAhmkCg
```

## The Architect Move

> You aren't selling tours to individuals. You are building a Verified Inventory Feed for the big players.

**The Problem:** A corporate group wants 30 rooms in the Medina. They see 30 different owners, 30 different Wi-Fi speeds, 30 different safety risks.

**Your Move:** Audit 10 Riads. Produce a "Consolidated Forensic Report" proving these meet a single high-tech standard.

**The Profit:** 15% Management/Certainty Fee. You never made a coffee; you sold Infrastructure.
