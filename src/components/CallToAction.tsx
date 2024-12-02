import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import Link from 'next/link'

export function CallToAction() {
  return (
    <section className="py-20 sm:py-32">
      <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Látogass el hozzánk az édes élményekért!
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-gray-300">
            Merülj el a kézműves desszertek, színes macaronok és hűsítő
            fagylaltok varázslatos világában. Legyen szó baráti találkozóról,
            családi programról vagy a következő nagy eseményedről, mi
            különlegessé tesszük a pillanatot!
          </p>
          <Link
            className="mx-auto mt-6 flex w-fit items-center rounded-lg bg-brown-400 px-4 py-2 text-white transition-colors hover:bg-brown-300"
            href="#kapcsolat"
          >
            Rendelj most
          </Link>
          <div
            aria-hidden="true"
            className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
              className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-brown-400 to-brown-300 opacity-20"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
