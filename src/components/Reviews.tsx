'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/components/Container'

interface Review {
  body: string
  author: string
}

const reviews: Array<Review> = [
  {
    body: 'Kellemes hangulatú hely, kedves kiszolgálás! A pohárkrém isteni, de minden mást érdemes megkóstolni! Nagyon ajánlom!',
    author: 'Betti',
  },
  {
    body: 'Remek hely! A személyzet rendkívül kedves és a sütemények elképesztőek! Ajánlom mindenkinek!',
    author: 'Csaba',
  },
  {
    body: 'Kedves kiszolgálás, finom fagyi. A belső tér dekorációja pedig gyönyörű.',
    author: 'Kriszti',
  },
  {
    body: 'Magas minőségű nagyon finom fagyi, szuper kedves kiszolgálással. Ha fagyit ennél Győrben, mindenképp ide térj be! Különleges ízek és van tejmentes is.',
    author: 'Szabina',
  },
  {
    body: 'Udvarias, mosolygós kiszolgálás. Finom, különleges és hagyományos ízvilágú (mentes is) sütemények, fagyik. A kávé finom, változatos tea kínálat. Ízléses, szép környezet. Tiszta mosdó.',
    author: 'Zsuzsanna',
  },
  {
    body: 'Nagyon finomak a fagylaltok és végre egy fagyizó, ahol nem csak egyfajta mentes fagyit kapni! Picit drága ugyan, de aki ételérzékeny, annak megéri az árát.',
    author: 'Anett',
  },
  {
    body: 'Mennyei sütemények és finomabbnál finomabb fagylaltok várják a vendégeket!',
    author: 'Eszter',
  },
  {
    body: 'Nagyon finom mentes fagylaltjaik vannak, cukorral vagy édesítővel, lehet választani. Ráadásul a mentes fagyik között is akadt különleges ízvilág. Sőt kutyusoknak is van fagyi, ilyet még nem láttam azelőtt.',
    author: 'Ágnes',
  },
  {
    body: 'Finom volt a fagyi, nagyon jól esett, frissítő volt. A gyümölcs fagylatnak gyümölcs íze is volt, nem volt túl édes, kellemes volt. Érdemes ide beugrani, főleg akkor, amikor tikkasztó hőség van az utcán.',
    author: 'Zoltán',
  },
  {
    body: 'Igen fiatalok! Szuper vedéglátás, így kell ezt csinálni! A minőség, a figyelmesség, és a vendég az első. Köszönjük szépen a szombat esti kellemes perceket!',
    author: 'Gyöngyvér',
  },
  {
    body: 'Itt ettem eddigi életem legfinomabb sóskaramellás sajttortáját. A hely nagyon hangulatos, a kiszolgálás hibátlan, mindenki nagyon kedves és segítőkész. Plusz pont a gyereksarok miatt.',
    author: 'Dóra',
  },
  {
    body: 'Nagyon finom süteményeket és kávékat ittunk. Mosolygós, kedves kiszolgálás. Bátran ajánlom mindenkinek.',
    author: 'Előd',
  },
  {
    body: 'Nagyon barátságos kis hely, a fagyik és a sütik finomak, a kiszolgálás pedig nagyon kedves. Mindenkinek ajánlom.',
    author: 'Réka',
  },
  {
    body: 'Finom sütemények, minőségi kávék, és kifogásolhatatlan kiszolgálás! Egy felejthetetlen élmény! Köszönjük szépen!',
    author: 'Máté',
  },
]

function StarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}


function StarRating() {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // Weighted random selection for star rating (more likely to get 5 stars)
    const randomRating = getRandomRating();
    setRating(randomRating);
  }, []);

  const getRandomRating = () => {
    // Weighted distribution: 5 stars is most likely, 4 stars next, 3 stars least likely
    const rand = Math.random();
    if (rand < 0.1) {
      return 3; // 10% chance of 3 stars
    } else if (rand < 0.4) {
      return 4; // 30% chance of 4 stars
    } else {
      return 5; // 60% chance of 5 stars
    }
  };

  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={`h-5 w-5 ${index < rating ? 'fill-brown-400' : 'fill-gray-300'}`}
        />
      ))}
    </div>
  );
}

function Review({
  title,
  body,
  author,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'figure'>, keyof Review> & Review) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating />
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray<T>(array: Array<T>, numParts: number) {
  let result: Array<Array<T>> = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: Array<Review>
  className?: string
  reviewClassName?: (reviewIndex: number) => string
  msPerPixel?: number
}) {
  let columnRef = useRef<React.ElementRef<'div'>>(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef<React.ElementRef<'div'>>(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-100" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-100" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="velemenyek"
      aria-labelledby="reviews-title"
      className="border-t border-gray-200 bg-gray-100 pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Édes pillanatok, amikért mindenki visszatér
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Vendégeink nap mint nap visszatérnek, hogy újra átéljék a kézműves
          desszertek páratlan ízvilágát.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
