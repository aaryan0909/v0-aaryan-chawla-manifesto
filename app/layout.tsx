import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Aaryan Chawla — Data Orchestration Specialist',
  description:
    'Aaryan Chawla, Data Orchestration Specialist at Manulife in Toronto. I build the pipelines the numbers depend on.',
  openGraph: {
    title: 'Aaryan Chawla — Data Orchestration Specialist',
    description: 'I build the pipelines the numbers depend on.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf6ed' },
    { media: '(prefers-color-scheme: dark)', color: '#171310' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="paper"
          enableSystem={false}
          themes={['paper', 'ink', 'blueprint']}
          value={{ paper: 'paper', ink: 'ink', blueprint: 'blueprint' }}
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
