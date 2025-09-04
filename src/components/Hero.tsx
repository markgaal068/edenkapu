'use client'

import { Button } from '@/components/Button'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import asztalok1 from '/public/assets/images/hero/asztalok_1.jpg'
import desszertek2 from '/public/assets/images/hero/desszertek_2.jpg'
import uzlet_2 from '/public/assets/images/hero/uzlet_2.jpg'
import kave from '/public/assets/images/hero/kave.jpg'
import fagylaltok_2 from '/public/assets/images/hero/fagylaltok_2.jpg'

const heroContent = {
  title: "Édenkapu Fagyizó Győr – kézműves fagylalt és sütemények",
  subtitle: "Édes élmények várnak nálunk!",
  description:
    "Az Édenkapu Fagyizó Győr belvárosában várja vendégeit kézműves fagylaltokkal, friss süteményekkel és prémium kávékülönlegességekkel.",
  ctas: [
    { text: "Fagyizó kínálat megtekintése", href: "#kinalatunk" },
    { text: "Édenkapu Fagyizó elérhetősége", href: "#kapcsolat" },
  ],
}

const heroImages = [
  {
    id: 1,
    image: asztalok1,
    alt: "Édenkapu Fagyizó Győr – modern kávézó belső tér elegáns berendezéssel",
  },
  {
    id: 5,
    image: uzlet_2,
    alt: "Édenkapu Fagyizó Győr a belváros szívében",
  },
  {
    id: 2,
    image: desszertek2,
    alt: "Kézműves desszert válogatás Győrben friss gyümölcsökkel",
  },
  {
    id: 3,
    image: fagylaltok_2,
    alt: "Édenkapu Fagyizó Győr – prémium fagylaltkülönlegességek",
  },
  // { id: 4, image: kave, alt: "Specialty kávé készítés Győrben" },
]

export function Hero() {
  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  }

  return (
    <section className="relative h-screen w-full">
      {/* Carousel for Background Images */}
      <div className="absolute inset-0">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={5000}
          transitionDuration={800}
          showDots={false}
          arrows={false}
          swipeable={false}
          draggable={false}
          containerClass="h-full"
          itemClass="h-full"
        >
          {heroImages.map((slide, index) => (
            <div key={slide.id} className="relative h-screen w-full">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 75vw"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/50 via-brown-900/30 to-transparent" />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Hero Text & Call to Action */}
      <div className="relative flex h-full items-center justify-center text-center px-6 sm:px-16 opacity-90">
        <div className="mx-auto max-w-2xl p-10 bg-[#c0946c] border rounded-lg sm:rounded-[50px] ">
          {/* Kulcsszavas H1 */}
          <h1 className="text-4xl font-medium text-white drop-shadow-lg sm:text-5xl md:text-6xl">
            {heroContent.title}
          </h1>

          {/* Alcím */}
          <h2 className="mt-4 block text-xl text-brown-100 sm:text-2xl">
            {heroContent.subtitle}
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg text-brown-50 sm:text-xl">
            {heroContent.description}
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:gap-8 sm:justify-center">
            {heroContent.ctas.map((cta) => (
              <Button
                key={cta.text}
                href={cta.href}
                className="bg-brown-400 hover:bg-brown-300 px-8 py-3 text-lg font-medium rounded-lg"
              >
                {cta.text}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* SEO-rich content for crawlers */}
      <div className="sr-only">
        <h2>Édenkapu Fagyizó Győr – kézműves fagylalt a belvárosban</h2>
        <p>
          Látogass el győri fagyizónkba, ahol prémium fagylaltokat, friss
          süteményeket és specialty kávét kínálunk. Gluténmentes és vegán
          lehetőségek is elérhetők.
        </p>
      </div>
    </section>
  )
}
