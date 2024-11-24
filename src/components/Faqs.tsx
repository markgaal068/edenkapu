import { Container } from '@/components/Container'
import Link from 'next/link'

const faqs = [
  [
    {
      question: 'Milyen típusú desszerteket kínálnak?',
      answer:
        'Széles választékban kínálunk különböző desszerteket, többek között macaronokat, sós süteményeket, fagylaltokat, és szezonálisan bejglit. Minden termékünk gondosan válogatott alapanyagokból készül.',
    },
    {
      question: 'Vállalnak-e rendezvényekre catering szolgáltatást?',
      answer:
        'Igen, specializálódtunk mind céges rendezvényekre, mind esküvőkre. Személyre szabott ajánlatot készítünk az Ön igényei szerint, legyen szó akár egy kisebb céges összejövetelről vagy egy nagyobb esküvői rendezvényről.',
    },
    {
      question: 'Hogyan lehet rendelést leadni?',
      answer:
        'Rendelését leadhatja személyesen üzletünkben, telefonon, vagy weboldalunkon keresztül. Nagyobb rendezvények esetén javasoljuk, hogy időben, legalább 2-3 héttel előre jelezze igényét.',
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
      question: 'Vannak-e glutén- vagy laktózmentes opciók?',
      answer:
        'Igen, kínálatunkban megtalálhatók glutén- és laktózmentes alternatívák is. Kérjük, rendeléskor jelezze speciális étkezési igényeit, hogy a megfelelő opciókat tudjuk ajánlani.',
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
      question: 'Van-e házhozszállítás?',
      answer:
        'Igen, vállalunk házhozszállítást a környező területekre. Nagyobb rendezvények esetén a szállítási feltételekről és díjakról személyes egyeztetés során adunk tájékoztatást.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="gyakori-kerdesek"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Gyakori kérdések
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Ha bármi más kérdésed van,{' '}
            <Link
              href="mailto:info@example.com"
              className="text-gray-900 underline transition-opacity hover:opacity-70"
            >
              keress meg minket bátran
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
