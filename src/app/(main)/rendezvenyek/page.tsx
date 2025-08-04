import Image from 'next/image'
import Link from 'next/link'
import rendezvenyek from '/public/assets/images/rendezvenyek.png'

const EventsPage = () => {
  return (
    <section className="text-gray-800">
      {/* HERO SECTION */}
      <div className="relative isolate overflow-hidden bg-[#f9f4ef] py-32 sm:py-40 sm:mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl drop-shadow-sm">
            Fagylalt, ami élménnyé varázsolja a rendezvényed
          </h1>
          <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
            Az Éden Kapu Fagylaltozó elhozza a <strong>kézműves fagylalt</strong> világát a rendezvényed helyszínére – személyre szabva, stílusosan, felejthetetlenül.
          </p>
        </div>
      </div>

      {/* STORY SECTION */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Minden pillanat különleges lehet
          </h2>
          <p className="text-lg text-gray-700">
            Legyen szó <strong>esküvőről</strong>, vagy nyári fesztiválról – fagylaltpultunk exkluzív megjelenése és ízei garantáltan mosolyt csalnak minden vendég arcára.
          </p>
          <p className="text-lg text-gray-700">
            Mobil kitelepülésünk rugalmasan alkalmazkodik az eseményhez – mi visszük a hűsítő varázslatot, te élvezheted a gondtalan élményt.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-xl transform transition-transform duration-500 hover:scale-105">
          <Image
            src={rendezvenyek}
            alt="Kézműves fagylalt rendezvényeken – Édenkapu"
            width={1200}
            height={800}
            className="rounded-3xl object-cover"
            priority
          />
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="bg-[#f9f4ef] py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Miért válaszd az Édenkaput rendezvényedre?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg text-gray-700 text-left max-w-3xl mx-auto">
            {[
              'Természetes alapanyagokból készült kézműves fagylalt',
              'Cukor-, glutén- és tejfehérjementes opciók',
              'Prémium tálalás és látványos pultdesign',
              'Gyermekbarát és felnőtteknek szóló ízvilág',
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 hover:text-[#a3784f] transition-colors"
              >
                <span className="text-[#c0946c] text-xl">🍦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="bg-[#f9f4ef] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Készen állsz egy édes élményre?
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            Vedd fel velünk a kapcsolatot, és teremtsünk együtt egy felejthetetlen rendezvényt!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-lg font-semibold">
            <Link
              href="tel:+36703117202"
              className="rounded-full bg-[#c0946c] px-6 py-3 text-white hover:bg-[#a3784f] transition-colors"
            >
              📞 +36 70 311 7202
            </Link>
            <Link
              href="mailto:info@edenkapu.hu"
              className="rounded-full border border-[#c0946c] px-6 py-3 text-[#c0946c] hover:bg-[#f3ebe4] transition-colors"
            >
              📧 info@edenkapu.hu
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsPage
