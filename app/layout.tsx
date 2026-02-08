import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: '인하벤처클럽 IVC | 인하대학교 중앙 창업동아리',
  description: '인하대학교 No.1 중앙 창업동아리 인하벤처클럽(IVC) 공식 웹사이트입니다. 창업에 열정이 있는 인하대 학우들을 기다립니다.',
  keywords: ['인하벤처클럽', 'IVC', '인하대 창업', '인하대학교 동아리', '인하벤처', '인하대학교', '창업동아리', '인하대 중앙동아리'],
  generator: 'Next.js',
  openGraph: {
    title: '인하벤처클럽 IVC | 인하대학교 중앙 창업동아리',
    description: '인하대학교 No.1 중앙 창업동아리 인하벤처클럽(IVC) 공식 웹사이트입니다. 창업에 열정이 있는 인하대 학우들을 기다립니다.',
    type: 'website',
    locale: 'ko_KR',
    siteName: '인하벤처클럽 IVC',
  },
  twitter: {
    card: 'summary_large_image',
    title: '인하벤처클럽 IVC | 인하대학교 중앙 창업동아리',
    description: '인하대학교 No.1 중앙 창업동아리 인하벤처클럽(IVC) 공식 웹사이트입니다.',
  },
  icons: {
    icon: [
      {
        url: '/images/ivc-logo.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/images/ivc-logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
