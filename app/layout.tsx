import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Morocco Travel Data | Inventory Audit Platform',
  description: 'Forensic travel verification for World Cup 2030',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0A0A0A] text-zinc-100 antialiased font-mono">
        {children}
      </body>
    </html>
  )
}
