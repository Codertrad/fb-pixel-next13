'use client'
import * as fbq from '../../lib/fpixel.js'

export const ButtonPurchase = () => {
  fbq.event('Purchase', {currency: 'COP', value: 10000})
  console.log('Compra realizada, evento enviado')
}