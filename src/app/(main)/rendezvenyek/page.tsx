import Image from 'next/image'
import rendezvenyek from '/public/assets/images/rendezvenyek.png'
import Link from 'next/link'

const listItems = [
  'Fagylaltjaink friss, természetes alapanyagokból készülnek',
  'Klasszikus fagylaltok',
  'Cukor-, glutén- és tejfehérjementes lehetőségek',
  'Gyermek fagylaltok',
]

const EventsPage = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-40 sm:px-6 sm:py-64 lg:max-w-9xl lg:px-8">
      <h1 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
        Rendezvények
      </h1>
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <p className="text-pretty text-lg text-gray-600">
            Éden Kapu Fagylaltozó és Kávézó – Fagylalt Kitelepülések, amelyek
            feledhetetlenné teszik a pillanatokat!
          </p>
          <p className="text-pretty text-lg text-gray-600">
            Az Éden Kapu Fagylaltozó és Kávézó ami, garantáltan emlékezetessé
            teszi a pillanatot! Legyen szó esküvőről, céges rendezvényekről,
            születésnapokról vagy bármilyen más eseményről, mi gondoskodunk
            arról, hogy a legfinomabb kézműves fagylaltjaink legyenek a
            középpontban!
          </p>
          <p className="text-pretty text-lg text-gray-600">
            Miért válassz minket?
          </p>
          <ul className="list-inside list-disc space-y-2">
            {listItems.map((item) => (
              <li className="text-pretty text-lg text-gray-600" key={item}>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-pretty text-lg text-gray-600">
            Válaszd az Éden Kapu Fagylaltozót, és fedezd fel, hogyan válhat az
            eseményed egyedülálló, ínycsiklandó élménnyé!
          </p>
          <div>
            <p className="text-pretty text-lg text-gray-600">
              Lépj kapcsolatba velünk:
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
        </div>
        <Image
          src={rendezvenyek}
          alt="rendezvény illusztráció"
          width={1200}
          height={800}
          className="rounded-2xl"
        />
      </div>
    </div>
  )
}

export default EventsPage
