import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-[10px] tracking-[4px] text-emerald-400 mb-4">MOROCCO TRAVEL DATA</div>
      <h1 className="text-3xl font-semibold mb-2">Travel Inventory Audit</h1>
      <p className="text-zinc-500 text-sm mb-12">Forensic verification for World Cup 2030</p>
      
      <div className="flex gap-4">
        <Link href="/audit-travel" className="px-8 py-4 bg-emerald-600 text-white font-semibold tracking-wider hover:bg-emerald-500 transition-all">
          NEW AUDIT
        </Link>
        <Link href="/dashboard" className="px-8 py-4 border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white transition-all">
          DASHBOARD
        </Link>
      </div>
      
      <div className="mt-16 grid grid-cols-3 gap-px bg-zinc-800 max-w-md w-full">
        <Stat label="AUDITED" value="0" />
        <Stat label="F500 READY" value="0%" />
        <Stat label="AVG SCORE" value="--" />
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-6 bg-zinc-900 text-center">
      <div className="text-[9px] text-zinc-500 tracking-wider mb-2">{label}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  )
}
