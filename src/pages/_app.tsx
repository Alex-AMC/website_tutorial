import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Headland_One } from '@next/font/google'

const headland_one = Headland_One({
  subsets: ['latin'],
  weight:'400',
  variable: "--font-headland-one"
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${headland_one.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}
