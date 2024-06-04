import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://polkadot.com.br'),
  title: 'Polkadot Brasil - Connect Week Curitiba 2024',
  description: 'Polkadot Brasil na Connect Week Curitiba 2024',

    openGraph: {
        title: 'Polkadot Brasil - Connect Week Curitiba 2024',
        description: 'Polkadot Brasil na Connect Week Curitiba 2024',
        url: 'https://polkadot.com.br',
        siteName: 'Polkadot Brasil',
      images: [
          {
              url: 'https://polkadot.com.br/twitter-image.png',
              width: 800,
              height: 600,
          },
          {
                url: 'https://polkadot.com.br/opengraph-image.png',
              width: 1800,
              height: 1200,
          }

          ],
        locale: 'pt_BR',
        type: 'website',

    },
    twitter: {
        card: 'summary_large_image',
        title: 'Polkadot Brasil - Connect Week Curitiba 2024',
        description: 'Polkadot Brasil na Connect Week Curitiba 20244',
        images: ['https://polkadot.com.br/twitter-image.png'],
    } ,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="pt-BR" className="dark">
      <body className={`${inter.className} bg-gradient-to-r from-black via-zinc-800 to-black`}>
      {children}
      </body>
      </html>
  );

}
