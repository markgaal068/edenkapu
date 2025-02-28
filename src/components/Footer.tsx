import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import qrCode from '@/images/qr-code.svg'
import logo from '/public/assets/images/logos/logo2.png'
import { FaFacebookSquare } from 'react-icons/fa'
import facebook from '/public/assets/images/svgs/facebook.svg'
import instagram from '/public/assets/images/svgs/instagram.svg'
import tiktok from '/public/assets/images/svgs/tiktok.svg'

function QrCodeBorder(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          <Image
            src={logo}
            className="h-20 w-auto rounded-lg bg-brown-400 p-4"
            alt="édenkapu logo"
          />

          <div className="flex gap-6">
            <Link
              href="https://www.facebook.com/Edenkapu"
              target="_blank"
              className="transition-opacity hover:opacity-70"
            >
              <Image src={facebook} alt="facebook ikon" className="h-10 w-10" />
            </Link>

            <Link
              href="https://www.instagram.com/edenkapufagyizo?igsh=cXExMmZjd3MwY2Jx"
              target="_blank"
              className="transition-opacity hover:opacity-70"
            >
              <Image
                src={instagram}
                alt="instagram ikon"
                className="h-10 w-10"
              />
            </Link>

            <Link
              href="https://www.tiktok.com/@edenkapu_gyor?_t=ZN-8s1PNiqv1mw&_r=1"
              target="_blank"
              className="transition-opacity hover:opacity-70"
            >
              <Image src={tiktok} alt="tiktok ikon" className="h-10 w-10" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 border-t border-gray-200 pb-12 pt-8 lg:flex-row-reverse lg:justify-between lg:pt-6">
          {/* <form className="flex w-full justify-center md:w-auto">
            <TextField
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              autoComplete="email"
              required
              className="w-60 min-w-0 shrink"
            />
            <Button type="submit" color="cyan" className="ml-4 flex-none">
              <span className="hidden lg:inline">Join our newsletter</span>
              <span className="lg:hidden">Join newsletter</span>
            </Button>
          </form> */}
          <div className="flex gap-6">
            {/* <Link href="tel:+XXX" target="_blank">
              XXX
            </Link> */}
            <Link
              href="mailto:info@edenkapu.hu"
              target="_blank"
              className="text-sm text-gray-500 transition-opacity hover:opacity-70"
            >
              info@edenkapu.hu
            </Link>
          </div>
          <div className="flex gap-6">
            <Link
              href="/assets/docs/aszf.docx"
              target="_blank"
              className="text-sm text-gray-500 transition-opacity hover:opacity-70"
            >
              ÁSZF
            </Link>
            <Link
              href="/assets/docs/adatvedelmi.docx"
              target="_blank"
              className="text-sm text-gray-500 transition-opacity hover:opacity-70"
            >
              Adatvédelmi tájékoztató
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            &copy; Édenkapu {new Date().getFullYear()}. Minden jog fenntartva.
          </p>
        </div>
      </Container>
    </footer>
  )
}
