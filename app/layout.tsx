import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import type React from 'react'; // Import React

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://mzeke-aluminium.co.za'),
  title: 'Mzeke Aluminium | Premium Aluminium & Glass Solutions in Cape Town',
  description:
    "Cape Town's trusted experts in custom aluminium doors, windows, and frameless glass installations. Quality craftsmanship and professional service guaranteed.",
  keywords:
    'aluminium doors, windows, frameless glass, Cape Town, shower doors, balustrades, wine cellar doors, custom installations',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://mzeke-aluminium.co.za',
    siteName: 'Mzeke Aluminium',
    title: 'Mzeke Aluminium | Premium Aluminium & Glass Solutions in Cape Town',
    description:
      "Cape Town's trusted experts in custom aluminium doors, windows, and frameless glass installations. Quality craftsmanship and professional service guaranteed.",
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mezke%20logo-RfqmyJmEnVfKsT3egHx4MtRc8TCKzy.png',
        width: 1200,
        height: 630,
        alt: 'Mzeke Aluminium Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mzeke Aluminium | Premium Aluminium & Glass Solutions in Cape Town',
    description:
      "Cape Town's trusted experts in custom aluminium doors, windows, and frameless glass installations. Quality craftsmanship and professional service guaranteed.",
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mezke%20logo-RfqmyJmEnVfKsT3egHx4MtRc8TCKzy.png',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='canonical' href='https://mzeke-aluminium.co.za' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
