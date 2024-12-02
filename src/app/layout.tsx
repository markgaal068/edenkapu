import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { CartProvider } from '@/context/CartContext'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: {
    template: '%s - Édenkapu',
    default: 'Édenkapu - Kézműves desszertek és édes élmények.',
  },
  description:
    'Fedezd fel a kézműves desszertek, színes macaronok, és hűsítő fagylaltok világát az Édenkapunál. Tökéletes választás vagyunk rendezvényekhez, különleges pillanatokhoz, és édes élményekhez.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
