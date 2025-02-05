'use client'

import { Button } from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from 'react-multi-carousel'
import CustomDot from './CustomDot'
import CustomLeftArrow from './CustomLeftArrow'
import CustomRightArrow from './CustomRightArrow'
import asztalok1 from '/public/assets/images/hero/asztalok_1.jpg'
import asztalok2 from '/public/assets/images/hero/asztalok_2.jpg'
import desszertek2 from '/public/assets/images/hero/desszertek_2.jpg'
import fagylaltok2 from '/public/assets/images/hero/fagylaltok_2.jpg'
import fagylaltok3 from '/public/assets/images/hero/fagylaltok_3.jpg'
import kave from '/public/assets/images/hero/kave.jpg'
import uzlet from '/public/assets/images/hero/uzlet.jpg'

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

const heroImages = [
  {
    id: 1,
    src: asztalok1,
    alt: 'kávézó belső tér boltíves fallal',
  },

  {
    id: 2,
    src: asztalok2,
    alt: 'kávézó belső tér ablakkal és dekorációval',
  },
  {
    id: 3,
    src: desszertek2,
    alt: 'desszertek becsomagolva',
  },
  {
    id: 4,
    src: fagylaltok2,
    alt: 'csokis fagylalt tölcsérben',
  },
  {
    id: 5,
    src: fagylaltok3,
    alt: 'gyümölcsös fagylalt tölcsérben',
  },
  { id: 6, src: kave, alt: 'premium kávé' },
  { id: 7, src: uzlet, alt: 'édenkapu üzlet kívülről' },
]

export function Hero() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
  }

  return (
    <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-gray-50 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
      />
      <div className="mx-auto max-w-9xl px-6 py-32 sm:py-64 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-16">
          <h1 className="max-w-2xl text-balance text-5xl font-medium tracking-tight text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
            Édes élmények várnak nálunk!
          </h1>
          <div className="mt-6 max-w-xl space-y-6 lg:mt-0 xl:col-end-1 xl:row-start-1">
            {/* <p className="text-pretty text-lg text-gray-600">
              Fedezd fel cukrászdánk varázslatos világát, ahol minden falat
              különleges! Kézműves desszertek, színes macaronok, ropogós sós
              sütemények, hűsítő fagylaltkülönlegességek és télen a hagyományos
              bejgli ízei teszik felejthetetlenné a pillanatokat.
            </p> */}
            <p className="text-pretty text-lg text-gray-600">
              Az Édenkapu fagyizó és kávézó kiváló választás a családias légkör
              kedvelőinek. Kézműves fagylaltjaink és süteményeink friss,
              természetes alapanyagokból készülnek, így mindenki megtalálhatja a
              kedvére való ízt, beleértve a paleo, cukor-, glutén- és
              tejfehérje-mentes lehetőségeket is.
            </p>
            <p className="text-pretty text-lg text-gray-600">
              A saját pörkölésű kávéink remek lehetőséget nyújtanak baráti
              találkozókhoz vagy csak egy kis pihenéshez. Az Édenkapu célja,
              hogy minden látogató egyedi élményekkel és finom ízekkel
              gazdagodjon.
            </p>
            <p className="text-pretty text-lg text-gray-600">
              <Link
                href="/rendezvenyek"
                className="font-semibold text-brown-400 underline hover:text-brown-300"
              >
                Rendezvényekhez
              </Link>{' '}
              is tökéletes választás vagyunk! Legyen szó céges eseményről vagy
              esküvőről, mi megvalósítjuk az álmaidat.
            </p>
            {/* <Link
              className="mt-2 block w-fit rounded-lg bg-brown-400 px-4 py-2 text-white transition-colors hover:bg-brown-300"
              href="/rendezvenyek"
            >
              Részletek itt
            </Link> */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <Link
                className="rounded-lg bg-brown-400 px-4 py-2 text-white transition-colors hover:bg-brown-300"
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
          {/* <Image
            alt="édenkapu épület"
            src={hero}
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          /> */}
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            customDot={<CustomDot />}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            itemClass="pb-14 rounded-2xl"
            dotListClass="space-x-2"
            className="mt-10 w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          >
            {heroImages.map((image) => (
              <div key={image.id} className="flex flex-col items-center">
                <div className="relative aspect-[4/3] w-full max-w-2xl lg:max-w-none">
                  <Image
                    alt={image.alt}
                    src={image.src}
                    fill
                    className="overflow-clip rounded-2xl object-cover"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-gray-50 sm:h-32" />
    </div>
  )
}
