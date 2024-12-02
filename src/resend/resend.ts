import Email from './Email'
import { Resend } from 'resend'
const resend = new Resend('re_123456789')

export async function sendVerificationRequest() {
  const url = 'https://example.com'
  const identifier = 'user@gmail.com'

  await resend.emails.send({
    from: process.env.AUTH_RESEND_FROM!,
    to: identifier,
    replyTo: process.env.AUTH_RESEND_FROM!,
    subject: 'Édenkapu megrendelés visszaigazolás',
    react: Email({ url }),
    text: text({ url }),
  })
}

// Email Text body (fallback for email clients that don't render HTML, e.g. feature phones)
function text({ url }: { url: string }) {
  return `Édenkapu megrendelés visszaigazolás\n${url}`
}
