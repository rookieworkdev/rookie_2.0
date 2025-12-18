import { ImageResponse } from 'next/og'

import { SITE_NAME } from '@/lib/seo'

export const alt = SITE_NAME

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0B0B0F',
        color: '#FFFFFF',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: 64,
          width: '100%',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: -2,
            lineHeight: 1.1,
          }}
        >
          {SITE_NAME}
        </div>
        <div style={{ height: 18 }} />
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            opacity: 0.9,
            lineHeight: 1.2,
            maxWidth: 900,
          }}
        >
          rookiework.se
        </div>
      </div>
    </div>,
    size
  )
}
