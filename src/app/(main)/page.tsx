import Head from 'next/head'
import { CallToAction } from '@/components/CallToAction'
import { Contact } from '@/components/Contact'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Offers } from '@/components/Offers'
import { Reviews } from '@/components/Reviews'

export default function Home() {
  return (
    <>
      <Head>
        <title>Édenkapu Fagyizó Győr – Kézműves fagylalt és sütemények</title>
        <meta
          name="description"
          content="Édenkapu Fagyizó Győr – kézműves fagylaltok, sütemények és kávékülönlegességek a belváros szívében. Látogass el hozzánk!"
        />
        <meta property="og:title" content="Édenkapu Fagyizó Győr" />
        <meta
          property="og:description"
          content="Kézműves fagylaltok és sütemények Győr szívében."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://edenkapu.hu" />
        <meta property="og:image" content="/images/fagyizo.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "IceCreamShop",
              "name": "Édenkapu Fagyizó",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Belváros",
                "addressLocality": "Győr",
                "addressCountry": "HU"
              },
              "image": "https://edenkapu.hu/images/fagyizo.jpg",
              "url": "https://edenkapu.hu",
              "servesCuisine": "Ice Cream",
              "priceRange": "€"
            }),
          }}
        />
      </Head>

      <Hero />
      <Offers />
      <CallToAction />
      <Reviews />
      <Faqs />
      <Contact />
    </>
  )
}
