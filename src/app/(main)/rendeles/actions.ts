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
    // Email a vásárlónak
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
    });

    // Email az adminnak / cégnek
    await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: 'rendelesek@edenkapu.hu', 
      subject: 'Új rendelés érkezett',
      html: `
        <h2>Új rendelés érkezett</h2>
        <p><strong>Név:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        <p><strong>Rendelt tételek:</strong></p>
        <ul>
          ${data.items.map(item => `<li>${item.name} (${item.quantity} db)</li>`).join('')}
        </ul>
        <p><strong>Végösszeg:</strong> ${data.totalPrice} Ft</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Emailküldési hiba:', error);
    return { success: false };
  }
}
