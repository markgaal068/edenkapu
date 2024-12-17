import { useId } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { AppDemo } from '@/components/AppDemo'
import { AppStoreLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import logoBbc from '@/images/logos/bbc.svg'
import logoCbs from '@/images/logos/cbs.svg'
import logoCnn from '@/images/logos/cnn.svg'
import logoFastCompany from '@/images/logos/fast-company.svg'
import logoForbes from '@/images/logos/forbes.svg'
import logoHuffpost from '@/images/logos/huffpost.svg'
import logoTechcrunch from '@/images/logos/techcrunch.svg'
import logoWired from '@/images/logos/wired.svg'
import hero from '/public/assets/images/hero.webp'
import Link from 'next/link'

function BackgroundIllustration(props: React.ComponentPropsWithoutRef<'div'>) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function PlayIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
      <path
        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
        fill="#A3A3A3"
        stroke="#A3A3A3"
      />
    </svg>
  )
}

export function Hero() {
  return (
    // <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
    //   <Container>
    //     <div className="lg:grid lg:grid-cols-12 lg:gap-20">
    //       <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
    //         <h1 className="text-4xl font-medium tracking-tight text-gray-900">
    //           Édes élmények várnak nálunk!
    //         </h1>
    //         <p className="mt-6 text-lg text-gray-600">
    //           Fedezd fel cukrászdánk varázslatos világát, ahol minden falat
    //           különleges! Kézműves desszertek, színes macaronok, ropogós sós
    //           sütemények, hűsítő fagylaltkülönlegességek és télen a hagyományos
    //           bejgli ízei teszik felejthetetlenné a pillanatokat.
    //         </p>
    //         <p className="mt-6 text-lg text-gray-600">
    //           Rendezvényekhez is tökéletes választás vagyunk! Legyen szó céges
    //           eseményről vagy esküvőről, mi megvalósítjuk az álmaidat.
    //         </p>
    //         <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
    //           <Link
    //             className="hover:bg-brown-300 bg-brown-400 flex items-center rounded-lg px-4 text-white transition-colors"
    //             href="#kapcsolat"
    //           >
    //             Megkóstolom
    //           </Link>
    //           <Button
    //             href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    //             variant="outline"
    //           >
    //             <PlayIcon className="h-6 w-6 flex-none" />
    //             <span className="ml-2.5">Videó megtekintése</span>
    //           </Button>
    //         </div>
    //       </div>

    //       <Image
    //         className="relative mt-10 rounded-lg sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6"
    //         src={hero}
    //         alt="hero"
    //       />
    //     </div>
    //   </Container>
    // </div>
    <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-gray-50 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
      />
      <div className="mx-auto max-w-9xl px-6 py-32 sm:py-64 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-16">
          {/* <h1 class="max-w-2xl text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">We’re changing the way people connect</h1> */}
          <h1 className="max-w-2xl text-balance text-5xl font-medium tracking-tight text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
            Édes élmények várnak nálunk!
          </h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-pretty text-lg text-gray-600">
              Fedezd fel cukrászdánk varázslatos világát, ahol minden falat
              különleges! Kézműves desszertek, színes macaronok, ropogós sós
              sütemények, hűsítő fagylaltkülönlegességek és télen a hagyományos
              bejgli ízei teszik felejthetetlenné a pillanatokat.
            </p>
            <p className="mt-6 text-pretty text-lg text-gray-600">
              Rendezvényekhez is tökéletes választás vagyunk! Legyen szó céges
              eseményről vagy esküvőről, mi megvalósítjuk az álmaidat.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <Link
                className="flex items-center rounded-lg bg-brown-400 px-4 py-2 text-white transition-colors hover:bg-brown-300"
                href="#kinalatunk"
              >
                Rendelj most
              </Link>
              <Button
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                variant="outline"
              >
                <PlayIcon className="h-6 w-6 flex-none" />
                <span className="ml-2.5">Videó megtekintése</span>
              </Button>
            </div>
          </div>
          <Image
            alt="édenkapu épület"
            src={hero}
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-gray-50 sm:h-32" />
    </div>
  )
}
