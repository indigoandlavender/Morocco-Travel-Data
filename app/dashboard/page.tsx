'use client'
import { TravelAssetCard } from '@/components/travel/TravelAssetCard'
import { analyzePortfolio, type TravelAsset } from '@/lib/calculateTravelAlpha'

const DEMO_ASSETS: TravelAsset[] = [
  {
    id: 'RIA-001-MRK',
    assetName: 'Riad Al-Firdaus',
    location: { district: 'Medina', city: 'Marrakech' },
    operationalHealth: { wifiSpeed: 120, safetyGrade: 'A', accessibilityScore: 85 },
    pricing: { publicRateBooking: 280, publicRateAirbnb: 295, forensicNegotiatedRate: 180, currency: 'USD' },
    capacity: { rooms: 6, maxGuests: 12, bathrooms: 6 },
    occupancy: { currentRate: 72, averageMonthly: 68, gapDays: 8 },
    auditData: { ownerReliability: 5, safetyChecklist: Array(10).fill({ id: 'x', checked: true }), lastAuditDate: new Date().toISOString() },
  },
  {
    id: 'RIA-002-MRK',
    assetName: 'Dar Zellij',
    location: { district: 'Mellah', city: 'Marrakech' },
    operationalHealth: { wifiSpeed: 65, safetyGrade: 'A', accessibilityScore: 78 },
    pricing: { publicRateBooking: 220, publicRateAirbnb: 235, forensicNegotiatedRate: 155, currency: 'USD' },
    capacity: { rooms: 4, maxGuests: 8, bathrooms: 4 },
    occupancy: { currentRate: 58, averageMonthly: 55, gapDays: 12 },
    auditData: { ownerReliability: 4, safetyChecklist: Array(8).fill({ id: 'x', checked: true }), lastAuditDate: new Date().toISOString() },
  },
]

export default function Dashboard() {
  const portfolio = analyzePortfolio(DEMO_ASSETS)

  return (
    <div className="min-h-screen p-6">
      <header className="mb-8">
        <div className="text-[10px] tracking-[4px] text-emerald-400 mb-2">MOROCCO TRAVEL DATA</div>
        <h1 className="text-2xl font-semibold">Inventory Dashboard</h1>
      </header>

      <div className="grid grid-cols-5 gap-px bg-zinc-800 mb-8">
        <Stat label="ASSETS" value={portfolio.summary.totalAssets} />
        <Stat label="F500 READY" value={`${portfolio.summary.fortune500ReadyPercent}%`} highlight />
        <Stat label="AVG READINESS" value={portfolio.summary.avgReadinessScore} />
        <Stat label="AVG GAP" value={`${portfolio.summary.avgPercentageGap}%`} />
        <Stat label="ANNUAL ALPHA" value={`$${(portfolio.summary.totalAnnualAlpha/1000).toFixed(0)}K`} highlight />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {DEMO_ASSETS.map(asset => (
          <TravelAssetCard key={asset.id} asset={asset} onAudit={(id) => alert(`Audit: ${id}`)} />
        ))}
      </div>
    </div>
  )
}

function Stat({ label, value, highlight }: { label: string; value: string | number; highlight?: boolean }) {
  return (
    <div className={`p-4 ${highlight ? 'bg-emerald-500/5' : 'bg-zinc-900'}`}>
      <div className="text-[9px] text-zinc-500 tracking-wider mb-1">{label}</div>
      <div className={`text-xl font-semibold ${highlight ? 'text-emerald-400' : ''}`}>{value}</div>
    </div>
  )
}
