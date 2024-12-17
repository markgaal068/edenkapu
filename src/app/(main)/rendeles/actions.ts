'use server'

import { CartItem } from '@/lib/types'
import { Resend } from 'resend'
import OrderEmail from './OrderEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

interface OrderEmailProps {
  firstName: string
  lastName: string
  email: string
  phone: string
  items: CartItem[]
  totalPrice: number
}

export async function submitOrder(data: OrderEmailProps) {
  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: data.email,
      subject: 'Édenkapu - Rendelés visszaigazolás',
      react: OrderEmail({
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone,
        items: data.items,
        totalPrice: data.totalPrice,
      }),
    })

    return { success: true }
  } catch (error) {
    return { success: false }
  }
}
