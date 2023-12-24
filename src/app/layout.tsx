import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const popins = Poppins({
  weight: '400',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Personal Finance',
  description: 'take control of your personal finances and get out of the red',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={popins.className}>{children}</body>
    </html>
  )
}
