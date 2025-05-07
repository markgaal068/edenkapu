import Image from 'next/image'
import viszonteladoknak from '/public/assets/images/viszonteladok/viszonteladoknak.webp'
import eletizek from '/public/assets/images/viszonteladok/eletizek.webp'
import lajta_fagyi from '/public/assets/images/viszonteladok/lajta_fagyi.webp'
import Link from 'next/link'

const ResellersPage = () => {
  return (
    <section className="text-gray-800">
      {/* HERO SECTION */}
      <div className="relative isolate bg-[#f9f4ef] py-28 sm:pt-60">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Fagylalt viszonteladóknak – prémium minőség
          </h1>
          <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
            Emeld vállalkozásod szintjét <strong>kézműves fagylaltjainkkal</strong>, amelyek a természetes alapanyagoknak és a gondos odafigyelésnek köszönhetően kiemelkednek a piacon.
          </p>
        </div>
      </div>

      {/* INFO SECTION */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Miért érdemes minket választani?
          </h2>
          <p className="text-lg text-gray-700">
            Ha olyan fagylaltkínálatot keresel, amely nemcsak minőségével, de változatosságával is meggyőzi vásárlóidat, jó helyen jársz.
          </p>
          <ul className="grid gap-4 text-lg text-gray-700">
            {[
              ['Széles ízválaszték', 'Klasszikus és gyümölcsös, valamint mentes opciók.'],
              ['Kiváló minőség', 'Gondosan válogatott, természetes alapanyagok.'],
              ['Versenyképes árak', 'Rugalmas mennyiségi kedvezmények.'],
              ['Megbízható szállítás', 'Gyors és pontos kiszolgálás, hogy mindig időben érkezzen a fagylalt.'],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-3 items-start">
                <span className="text-[#c0946c] text-2xl">🍨</span>
                <div>
                  <strong className="text-gray-900">{title}</strong> – {desc}
                </div>
              </li>
            ))}
          </ul>
          <p className="text-lg text-gray-700">
            Legyen szó kávézóról, étteremről vagy szezonális büféről – nálunk megtalálod a megfelelő termékeket.
          </p>

          {/* CONTACT + CTA */}
          <div className="mt-6 space-y-4">
            <p className="text-lg font-medium text-gray-800">📩 Kapcsolatfelvétel:</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <Link
                href="tel:+36703117202"
                className="rounded-full bg-[#c0946c] px-6 py-3 text-white font-semibold hover:bg-[#a3784f] transition-colors"
              >
                📞 +36 70 311 7202
              </Link>
              <Link
                href="mailto:info@edenkapu.hu"
                className="rounded-full border border-[#c0946c] px-6 py-3 text-[#c0946c] font-semibold hover:bg-[#f3ebe4] transition-colors"
              >
                📧 info@edenkapu.hu
              </Link>
            </div>
            <Link
              className="inline-block mt-4 rounded-lg bg-[#c0946c] px-5 py-2.5 text-white font-medium hover:bg-[#a3784f] transition"
              href="/fagylaltok"
            >
              Tekintse meg kínálatunkat
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-xl transform transition-transform duration-500 hover:scale-105">
          <Image
            src={viszonteladoknak}
            alt="Fagylalt viszonteladóknak – Édenkapu"
            className="rounded-3xl object-cover"
            width={1200}
            height={800}
            priority
          />
        </div>
      </div>

      {/* PARTNEREK */}
      <div className="bg-[#f9f4ef] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-10">
            Büszkén dolgozunk együtt partnereinkkel
          </h3>
          <div className="flex justify-center gap-10 flex-wrap items-center">
            <Image
              src={eletizek}
              alt="Életízek partner"
              className="w-40 grayscale hover:grayscale-0 transition duration-300"
            />
            <Image
              src={lajta_fagyi}
              alt="Lajta Fagyi partner"
              className="w-40 grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResellersPage
