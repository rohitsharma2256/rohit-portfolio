import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rohit Sharma — Java Backend Developer',
  description:
    'Java Backend Developer specialising in Spring Boot, REST APIs, PostgreSQL, and AI-integrated systems. Open to Software Engineer roles at product-based companies.',
  keywords: [
    'Rohit Sharma',
    'Java Backend Developer',
    'Spring Boot',
    'REST API',
    'PostgreSQL',
    'Software Engineer',
    'Backend Engineer India',
  ],
  authors: [{ name: 'Rohit Rajendra Sharma' }],
  openGraph: {
    title: 'Rohit Sharma — Java Backend Developer',
    description:
      'Backend engineer building scalable APIs, AI-integrated systems, and production-ready Java applications.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohit Sharma — Java Backend Developer',
    description: 'Spring Boot · REST APIs · PostgreSQL · AI-integrated backends',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="dark">{children}</body>
    </html>
  )
}
