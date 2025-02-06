import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Mzeke Aluminium';
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#004aad',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 24,
          }}
        >
          <img
            src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mezke%20logo-RfqmyJmEnVfKsT3egHx4MtRc8TCKzy.png'
            alt='Mzeke Aluminium Logo'
            width={200}
            height={200}
            style={{
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              fontSize: 64,
              background: 'white',
              padding: '12px 24px',
              borderRadius: 12,
              color: '#004aad',
              fontWeight: 'bold',
            }}
          >
            Mzeke Aluminium
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
