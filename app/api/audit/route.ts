import { NextRequest, NextResponse } from 'next/server'

const SHEET_ID = '1iJ2YgDgdrTlzok02MulD9Tb7mmefBdMSa7bR0PDheuo'

export async function POST(request: NextRequest) {
  try {
    const audit = await request.json()

    if (!audit.assetName?.trim()) {
      return NextResponse.json({ success: false, error: 'Asset name required' }, { status: 400 })
    }

    // Calculate audit score
    let score = 0
    score += Math.min((audit.safetyAuditChecklist?.length || 0) * 3, 30)
    const speed = audit.internetSpeedTest || 0
    score += speed >= 100 ? 25 : speed >= 50 ? 20 : speed >= 25 ? 15 : speed >= 10 ? 10 : 5
    score += (audit.ownerReliability || 3) * 5
    if (audit.gpsVerify?.lat && audit.gpsVerify?.lng) score += 10
    if (audit.notes?.length > 20) score += 10

    // Log audit (Google Sheets integration requires service account setup)
    console.log('[AUDIT]', JSON.stringify({ ...audit, score }, null, 2))

    return NextResponse.json({
      success: true,
      auditId: audit.auditorId,
      score: Math.min(score, 100),
      sheetId: SHEET_ID,
    })
  } catch (error) {
    console.error('[AUDIT ERROR]', error)
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 })
  }
}
