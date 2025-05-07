'use client'

import { Container } from '@/components/Container'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/outline'

const faqs = [
  [
    {
      question: 'Milyen típusú desszerteket kínálnak?',
      answer:
        'Széles választékban kínálunk különböző desszerteket, többek között fagylaltokat, süteményeket, macaronokat és szezonálisan bejglit. Minden termékünk gondosan válogatott alapanyagokból készül a vendégek ízlésére szabva.',
    },
    {
      question: 'Vállalnak-e rendezvényekre catering szolgáltatást?',
      answer:
        'Igen, specializálódtunk mind céges rendezvényekre, mind esküvőkre. Személyre szabott ajánlatot készítünk az Ön igényei szerint, legyen szó akár egy kisebb céges összejövetelről vagy egy nagyobb esküvői rendezvényről.',
    },
    {
      question: 'Hogyan lehet rendelést leadni?',
      answer:
        'Rendelését leadhatja személyesen üzletünkben, telefonon, vagy weboldalunkon keresztül.',
    },
  ],
  [
    {
      question: 'Mikor érhető el a bejgli?',
      answer:
        'A bejgli szezonális termékünk, amely a téli időszakban, jellemzően november közepétől december végéig érhető el. Előrendelést már október közepétől felveszünk.',
    },
    {
      question: 'Van-e lehetőség egyedi desszertek készítésére?',
      answer:
        'Természetesen! Vállaljuk egyedi desszertek készítését különleges alkalmakra. Legyen szó születésnapi tortáról, esküvői édességekről vagy céges logóval ellátott süteményekről, állunk rendelkezésére.',
    },
    {
      question: 'Vannak-e glutén- vagy tejmentes opciók?',
      answer:
        'Igen! Az Édenkapu fagyizó és kávézóban ezt is megtalálod legyen szó süteményről, fagyiról vagy a kedvenc kávédról!',
    },
  ],
  [
    {
      question: 'Hol találhatók meg a social media oldalaink?',
      answer:
        'Kövess minket Instagramon és Facebookon, ahol naponta frissülő tartalommal, aktuális ajánlatokkal és új termékeinkkel jelentkezünk. Az oldalak linkjeit megtalálod weboldalunk alján.',
    },
    {
      question: 'Mennyi idővel előbb kell rendelni esküvőre?',
      answer:
        'Esküvői rendelések esetén minimum 1-2 hónappal az esemény előtt érdemes egyeztetni. Így tudjuk garantálni a tökéletes kivitelezést és időben való szállítást.',
    },
    {
      question: 'Születésnapokra vállalunk-e kitelepülést fagyival?',
      answer:
        'Természetesen! Dobd fel születésnapod egy finom fagyival kortól függetlenül. Részletek a rendezvények menüpontba!',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="gyakori-kerdesek"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 bg-gray-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="faqs-title"
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Gyakori kérdések
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Ha nem találod a választ,{' '}
            <Link
              href="#kapcsolat"
              className="underline text-brown-400 hover:text-brown-300 transition-colors"
            >
              vedd fel velünk a kapcsolatot
            </Link>
            !
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-6">
              {column.map((faq, faqIndex) => (
                <Disclosure key={faqIndex}>
                  {({ open }) => (
                    <div className="rounded-2xl bg-white shadow-sm p-6">
                      <Disclosure.Button className="flex w-full justify-between items-center text-left text-lg font-medium text-gray-900">
                        {faq.question}
                        <ChevronUpIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-6 w-6 text-brown-400 transition-transform`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-4 text-gray-600 leading-7 text-base">
                        {faq.answer}
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
