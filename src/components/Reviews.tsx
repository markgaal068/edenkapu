'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/components/Container'

interface Review {
  title: string
  body: string
  author: string
  rating: 1 | 2 | 3 | 4 | 5
}

const reviews: Array<Review> = [
  {
    title: 'Mennyei élmény!',
    body: 'A macaronok egyszerűen fantasztikusak, minden alkalommal tökéletesek. A kedvencem az málnás-csokis változat!',
    author: 'Kovács Anna',
    rating: 5,
  },
  {
    title: 'Tökéletes esküvői torta',
    body: 'Az esküvői tortánk minden várakozásunkat felülmúlta. Gyönyörű volt és az íze is csodálatos. Vendégeink még hetekig emlegették!',
    author: 'Nagy Eszter',
    rating: 5,
  },
  {
    title: 'A város legjobb bejglije',
    body: 'Minden karácsonykor innen rendeljük a bejglit. A diós töltelék olyan bőséges, ahogy kell, a tésztája pedig pont olyan, mint a nagymamámé volt.',
    author: 'Szabó János',
    rating: 5,
  },
  {
    title: 'Profi kiszolgálás',
    body: 'A céges rendezvényünkre rendeltünk süteményeket. Időben, profin szállították, és minden vendégünk el volt ragadtatva a minőségtől.',
    author: 'Tóth Péter',
    rating: 5,
  },
  {
    title: 'Imádom a fagylaltjaikat!',
    body: 'A kézműves fagylaltok választéka lenyűgöző. A pisztáciás-meggyes kombináció a kedvencem, de minden íz különleges.',
    author: 'Kiss Márta',
    rating: 5,
  },
  {
    title: 'Végre gluténmentes finomságok!',
    body: 'Cöliákiásként ritkán találok olyan cukrászdát, ahol ilyen széles választék van gluténmentes süteményekből. A csokis brownie-juk verhetetlen!',
    author: 'Varga Zsófia',
    rating: 5,
  },
  {
    title: 'Csodás születésnapi torta',
    body: 'A kislányom unikornisos tortája olyan lett, mintha egy mesekönyvből lépett volna ki. Az íze pedig még a kinézeténél is jobb volt!',
    author: 'Molnár Erika',
    rating: 5,
  },
  {
    title: 'Hangulatos hely',
    body: 'A kedvenc helyünk lett a barátnőimmel. A vintage berendezés, a kellemes zene és persze az isteni sütemények miatt minden héten betérünk.',
    author: 'Németh Kata',
    rating: 5,
  },
  {
    title: 'Laktózmentes kávé és süti',
    body: 'Végre egy hely, ahol nem kell lemondanom a tejhabos kávéról! A laktózmentes választék kifogástalan, a barista pedig mindig kedves.',
    author: 'Horváth Dóra',
    rating: 5,
  },
  {
    title: 'Sós finomságok',
    body: 'Nem csak az édességek fantasztikusak! A sajtos pogácsa és a sós stangli miatt gyakran beugrok munka után. Mindig friss és ropogós!',
    author: 'Fekete Gábor',
    rating: 5,
  },
  {
    title: 'Gyönyörű díszdobozok',
    body: 'Anyák napjára rendeltem egy válogatást a kézműves bonbonokból. A díszdoboz olyan szép volt, hogy anyu először ki sem akarta bontani!',
    author: 'Balogh Réka',
    rating: 5,
  },
  {
    title: 'Francia hangulat',
    body: 'A croissant-jaik olyanok, mint amiket Párizsban ettem! Hétvégente mindig ide jövünk reggelizni a családdal.',
    author: 'Szilágyi Tamás',
    rating: 5,
  },
  {
    title: 'Rugalmas és megbízható',
    body: 'Az utolsó pillanatban kellett egy szülinapi torta, és ők megmentették a napot! Két óra alatt elkészítették, ráadásul gyönyörű lett.',
    author: 'Takács Andrea',
    rating: 5,
  },
  {
    title: 'Szezonális különlegességek',
    body: 'Imádom, hogy mindig van valami új! A szezonális gyümölcsökből készült desszertek a kedvenceim, most épp az epres-rebarbarás pite.',
    author: 'Pintér Júlia',
    rating: 5,
  },
]

function StarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }: { rating: Review['rating'] }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-brown-400' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  )
}

function Review({
  title,
  body,
  author,
  rating,
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
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
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
