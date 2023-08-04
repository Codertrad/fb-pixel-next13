import Link from 'next/link'
import * as fbq from '../lib/fpixel.js'
import { ButtonPurchase } from './components/ButtonPurchase.js'

export default function Home() {

  return (
    <>
      <h2>
        Go to `app/layout.js` to see how to implement Facebook Pixel in Next.js
        13 with the App Router
      </h2>
      <button onClick={ButtonPurchase}>Comprar</button>
      <h2>If you want to see old implementation, go to `_pages/index.js`</h2>
      <Link href="/about">About page</Link>
    </>
  )
}
