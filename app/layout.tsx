import './globals.css'
import { Navbar, Footer } from '@/components'

export const metadata = {
  title: 'CarHub - JSM',
  description: 'Cars showcase website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
