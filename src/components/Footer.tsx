import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import qrCode from '@/images/qr-code.svg'
import logo from '@/images/logo.png'
import { FaFacebookSquare } from 'react-icons/fa'

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
          <div>
            {/* <div className="flex items-center text-gray-900">
              <Logomark className="h-10 w-10 flex-none fill-cyan-500" />
              <div className="ml-4">
                <p className="text-base font-semibold">Pocket</p>
                <p className="mt-1 text-sm">Invest at the perfect time.</p>
              </div>
            </div> */}
            <Image
              src={logo}
              className="h-20 w-auto rounded-lg bg-brown-400 p-2"
              alt="édenkapu logo"
            />
            <nav className="mt-11 flex flex-wrap gap-8">
              <NavLinks />
            </nav>
          </div>
          <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              {/* <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500" />
              <Image src={qrCode} alt="" unoptimized /> */}
              <FaFacebookSquare className="h-24 w-24 text-[#1778F2]" />
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <Link href="#">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Facebook oldalunk
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Látogasd meg Facebook oldalunkat is!
              </p>
            </div>
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
              href="mailto:edenkapukavezoesfagyizo@gmail.com"
              target="_blank"
              className="text-sm text-gray-500 transition-opacity hover:opacity-70"
            >
              edenkapukavezoesfagyizo@gmail.com
            </Link>
          </div>
          <div className="flex gap-6">
            <Link
              href="/docs/aszf.docx"
              target="_blank"
              className="text-sm text-gray-500 transition-opacity hover:opacity-70"
            >
              ÁSZF
            </Link>
            <Link
              href="/docs/adatvedelmi.docx"
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
