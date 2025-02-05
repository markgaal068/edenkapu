import Image from 'next/image'
import Link from 'next/link'
import founder from '/public/assets/images/founder.jpeg'

export function Contact() {
  return (
    <section
      id="kapcsolat"
      className="border-t border-gray-200 bg-gray-100 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-9xl lg:px-8">
        <h2 className="text-3xl font-medium tracking-tight text-gray-900">
          Kapcsolatfelvétel
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Ha bármilyen kérdésed van, fordulj hozzánk bizalommal.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-16 sm:gap-y-20 lg:grid-cols-5">
          <form action="#" method="POST" className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="keresztnev"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Keresztnév
                </label>
                <div className="mt-2.5">
                  <input
                    id="keresztnev"
                    name="keresztnev"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-400 sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="vezeteknev"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Vezetéknév
                </label>
                <div className="mt-2.5">
                  <input
                    id="vezeteknev"
                    name="vezeteknev"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-400 sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-400 sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="telefonszam"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Telefonszám
                </label>
                <div className="mt-2.5">
                  <input
                    id="telefonszam"
                    name="telefonszam"
                    type="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-400 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="uzenet"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Üzenet
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="uzenet"
                    name="uzenet"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-400 sm:text-sm/6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-brown-400 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brown-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-400"
              >
                Küldés
              </button>
            </div>
            <p className="mt-4 text-sm/6 text-gray-500">
              Az űrlap elküldésével elfogadom az{' '}
              <Link
                href="/docs/adatvedelmi.docx"
                target="_blank"
                className="font-semibold text-brown-400 transition-colors hover:text-brown-300"
              >
                adatvédelmi tájékoztatót
              </Link>
              .
            </p>
          </form>
          <div className="lg:col-span-2 lg:my-auto">
            <figure>
              <blockquote className="text-lg/8 font-semibold text-gray-900">
                <p>
                  Fedezd fel édességeink világát, ahol minden falat egy új
                  élmény!
                </p>
              </blockquote>
              <figcaption className="mt-10 flex gap-x-6">
                <Image
                  alt="alapító kép"
                  src={founder}
                  width={96}
                  height={96}
                  className="size-12 flex-none rounded-full bg-gray-50 object-cover object-right"
                />
                <div>
                  <div className="text-base font-semibold text-gray-900">
                    Gál Szabolcs
                  </div>
                  <div className="text-sm/6 text-gray-600">
                    Az Édenkapu alapítója
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
