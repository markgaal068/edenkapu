import Image from 'next/image'
import viszonteladoknak from '/public/assets/images/viszonteladok/viszonteladoknak.webp'
import eletizek from '/public/assets/images/viszonteladok/eletizek.webp'
import lajta_fagyi from '/public/assets/images/viszonteladok/lajta_fagyi.webp'
import Link from 'next/link'

const ResellersPage = () => {
  return (
    <div className="mx-auto max-w-2xl space-y-12 px-4 py-40 sm:px-6 sm:py-64 lg:max-w-9xl lg:px-8">
      <div className="space-y-6">
        <h1 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
          Viszonteladóknak
        </h1>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <div className="space-y-6">
            <p className="text-pretty text-lg text-gray-600">
              Prémium minőségű fagylalt viszonteladóknak!
            </p>
            <p className="text-pretty text-lg text-gray-600">
              Szeretnéd bővíteni kínálatodat prémium minőségű fagylaltokkal?
              Olyan termékeket keresel, amelyek garantáltan elnyerik vásárlóid
              tetszését? Nálunk megtalálod a tökéletes megoldást!
            </p>
            <p className="text-pretty text-lg text-gray-600">
              Miért válassz minket?
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li className="text-pretty text-lg text-gray-600">
                <span className="font-semibold text-gray-900">
                  Széles ízválaszték
                </span>{' '}
                – Klasszikus, Gyümölcs, Cukor-, glutén- és tejfehérje-mentes
                lehetőségek
              </li>
              <li className="text-pretty text-lg text-gray-600">
                <span className="font-semibold text-gray-900">
                  Kiváló minőség
                </span>{' '}
                – Gondosan válogatott alapanyagokból
              </li>
              <li className="text-pretty text-lg text-gray-600">
                <span className="font-semibold text-gray-900">
                  Versenyképes árak
                </span>{' '}
                – Rugalmas árazás és mennyiségi kedvezmények
              </li>
              <li className="text-pretty text-lg text-gray-600">
                <span className="font-semibold text-gray-900">
                  Megbízható szállítás
                </span>{' '}
                – Gyors és rugalmas kiszállítás, hogy mindig friss termékkel
                szolgálhasd ki vendégeidet
              </li>
            </ul>
            <p className="text-pretty text-lg text-gray-600">
              Válaszd az Éden Kapu Fagylaltozót, és fedezd fel, hogyan válhat az
              eseményed egyedülálló, ínycsiklandó élménnyé!
            </p>
            <div>
              <p className="text-pretty text-lg text-gray-600">
                Lépjen kapcsolatba velünk:
              </p>
              <div className="flex items-center gap-2">
                <Link
                  href="tel:+36703117202"
                  className="font-semibold text-brown-400 underline hover:text-brown-300"
                >
                  📞 06-70-311-7202
                </Link>
                <Link
                  href="mailto:info@edenkapu.hu"
                  className="font-semibold text-brown-400 underline hover:text-brown-300"
                >
                  📧 info@edenkapu.hu
                </Link>
              </div>
            </div>
            <Link
              className="block w-fit rounded-lg bg-brown-400 px-4 py-2 text-white transition-colors hover:bg-brown-300"
              href="/fagylaltok"
            >
              Tekintse meg kínálatunkat
            </Link>
          </div>
          <Image
            src={viszonteladoknak}
            alt="viszonteladó illusztráció"
            className="rounded-2xl"
          />
        </div>
      </div>
      <div className="space-y-6">
        <h2 className="text-2xl font-medium tracking-tight text-gray-900">
          Partnereink
        </h2>
        <div className="grid w-fit grid-cols-2 items-center gap-6">
          <Image
            src={eletizek}
            alt="viszonteladó illusztráció"
            className="w-40 rounded-2xl"
          />
          <Image
            src={lajta_fagyi}
            alt="viszonteladó illusztráció"
            className="w-40 rounded-2xl"
          />
        </div>
      </div>
    </div>
  )
}

export default ResellersPage
