import { Container } from '@/components/Container'
import bejgli from '@/images/bejgli.jpeg'
import desszert from '@/images/desszert.jpg'
import macaron from '@/images/macaron.jpg'
import sos_sutemenyek from '@/images/sos_sutemenyek.jpeg'
import fagylaltok from '@/images/fagylaltok.jpg'
import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    id: 1,
    title: 'Desszertek',
    description:
      'Kézműves sütemények és torták széles választéka, minden alkalomra tökéletes édességek.',
    products: 5,
    imageSrc: desszert,
    href: '/kinalatunk/#desszertek',
  },
  {
    id: 2,
    title: 'Macaronok',
    description:
      'Francia stílusú macaronok különleges ízekben, tökéletes textúrával és színekkel.',
    products: 4,
    imageSrc: macaron,
    href: '/kinalatunk/#macaronok',
  },
  {
    id: 3,
    title: 'Sós sütemények',
    description:
      'Ropogós pogácsák és sós aprósütemények, tökéletes választás partikra és rendezvényekre.',
    products: 5,
    imageSrc: sos_sutemenyek,
    href: '/kinalatunk/#sossutemenyek',
  },
  {
    id: 4,
    title: 'Fagylaltok',
    description:
      'Kézműves fagylaltkülönlegességek természetes alapanyagokból, szezonális ízekben.',
    products: 5,
    imageSrc: fagylaltok,
    href: '/kinalatunk/#fagylaltok',
  },
  {
    id: 5,
    title: 'Bejglik',
    description:
      'Hagyományos diós és mákos bejgli, az ünnepek elengedhetetlen édessége.',
    products: 2,
    imageSrc: bejgli,
    href: '/kinalatunk/#bejglik',
  },
]

export function SecondaryFeatures() {
  return (
    <section
      id="kinalatunk"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Mit kínálunk?
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            A cukrászdánkban kézműves desszertek, színes macaronok, ropogós sós
            sütemények, hűsítő fagylaltkülönlegességek és télen a hagyományos
            bejgli ízei teszik felejthetetlenné a pillanatokat.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200"
            >
              <Image
                alt={category.title}
                src={category.imageSrc}
                className="aspect-[3/4] w-full object-cover transition-opacity group-hover:opacity-75 sm:aspect-auto sm:h-96"
              />
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <Link href={category.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {category.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500">{category.description}</p>
                <p className="text-base font-medium text-gray-900">
                  {category.products} termék
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
