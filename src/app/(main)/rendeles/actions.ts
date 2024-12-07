'use server'

import { CartItem } from '@/lib/types'
import { Resend } from 'resend'
import OrderConfirmationEmail from './OrderConfirmationEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

interface OrderData {
  firstName: string
  lastName: string
  email: string
  phone: string
  items: CartItem[]
  totalPrice: number
}

export async function submitOrder(data: OrderData) {
  try {
    // Send confirmation email
    await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: data.email,
      subject: 'Édenkapu - Rendelés visszaigazolás',
      react: OrderConfirmationEmail({
        customerName: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone,
        items: data.items,
        totalPrice: data.totalPrice,
      }),
    })

    // Here you could also save the order to your database

    return { success: true }
  } catch (error) {
    return { success: false }
  }
}
