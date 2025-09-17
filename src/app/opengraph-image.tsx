import { ImageResponse } from 'next/og'
export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{
        height: '100%', width: '100%', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(135deg,#0ea5e9,#34d399)',
        color: '#fff', fontSize: 64, fontWeight: 700, padding: 40
      }}>
        Hydervali Yalamkur — Portfolio
      </div>
    ),
    size
  )
}
