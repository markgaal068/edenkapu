'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { NavLinks } from '@/components/NavLinks'
import logo from '@/images/logo2.png'
import Image from 'next/image'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '@/context/CartContext'

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof PopoverButton<typeof Link>>,
    'as' | 'className'
  >,
) {
  return (
    <PopoverButton
      as={Link}
      className="block text-base font-medium leading-7 tracking-tight text-gray-900"
      {...props}
    />
  )
}

export function Header() {
  const { cart } = useCart()
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav>
        <Container className="z-50 mt-8">
          <div className="grid grid-cols-2 rounded-xl bg-brown-400 px-4 py-4 sm:px-6 sm:py-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8 lg:py-8">
            <div className="hidden items-center lg:flex lg:gap-10">
              <NavLinks
                links={[
                  ['Desszertek', '/desszertek'],
                  ['Macaronok', '/macaronok'],
                  ['Sós sütemények', '/sos-sutemenyek'],
                  ['Fagylaltok', '/fagylaltok'],
                  ['Bejglik', '/bejglik'],
                ]}
              />
            </div>

            <div className="hidden lg:flex lg:justify-center">
              <Link href="/" aria-label="Home">
                <Image
                  src={logo}
                  className="h-12 w-auto rounded-lg max-lg:bg-brown-400"
                  alt="édenkapu logo"
                />
              </Link>
            </div>

            <div className="z-10 flex lg:hidden">
              <Link href="/" aria-label="Home" className="shrink-0">
                <Image
                  src={logo}
                  className="h-16 w-auto rounded-lg px-4 py-2 max-lg:bg-brown-400 max-[350px]:h-14"
                  alt="édenkapu logo"
                />
              </Link>
            </div>

            <div className="flex items-center justify-end gap-10">
              <Popover className="lg:hidden">
                {({ open }) => (
                  <>
                    <PopoverButton
                      className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 ui-not-focus-visible:outline-none"
                      aria-label="Toggle site navigation"
                    >
                      {({ open }) =>
                        open ? (
                          <ChevronUpIcon className="h-6 w-6" />
                        ) : (
                          <MenuIcon className="h-6 w-6" />
                        )
                      }
                    </PopoverButton>
                    <AnimatePresence initial={false}>
                      {open && (
                        <>
                          <PopoverBackdrop
                            static
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                          />
                          <PopoverPanel
                            static
                            as={motion.div}
                            initial={{ opacity: 0, y: -32 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{
                              opacity: 0,
                              y: -32,
                              transition: { duration: 0.2 },
                            }}
                            className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-8 pb-6 pt-40 shadow-2xl shadow-gray-900/20 sm:px-12"
                          >
                            <div className="space-y-4">
                              <MobileNavLink href="/desszertek">
                                Desszertek
                              </MobileNavLink>
                              <MobileNavLink href="/macaronok">
                                Macaronok
                              </MobileNavLink>
                              <MobileNavLink href="/sos-sutemenyek">
                                Sós sütemények
                              </MobileNavLink>
                              <MobileNavLink href="/fagylaltok">
                                Fagylaltok
                              </MobileNavLink>
                              <MobileNavLink href="/bejglik">
                                Bejglik
                              </MobileNavLink>
                              <MobileNavLink href="/rendezvenyek">
                                Rendezvények
                              </MobileNavLink>
                              <MobileNavLink href="/eskuvo">
                                Esküvő
                              </MobileNavLink>
                            </div>
                            <div className="mt-8 flex flex-col gap-4">
                              <PopoverButton
                                as={Link}
                                href="/kosar"
                                className="relative flex justify-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-900"
                              >
                                <span>Kosár</span>
                                <span className="absolute -right-[10px] -top-[10px] flex size-6 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                  {totalItems}
                                </span>
                                <FaShoppingCart />
                              </PopoverButton>
                            </div>
                          </PopoverPanel>
                        </>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Popover>

              <div className="hidden items-center lg:flex lg:justify-end lg:gap-10">
                <NavLinks
                  links={[
                    ['Rendezvények', '/rendezvenyek'],
                    ['Esküvő', '/eskuvo'],
                  ]}
                />
              </div>

              <Link
                href="/kosar"
                className="relative hidden justify-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-900 lg:flex"
              >
                <span>Kosár</span>
                <span className="absolute -right-[10px] -top-[10px] flex size-6 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {totalItems}
                </span>
                <FaShoppingCart />
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}
