'use client'

import { Container } from '@/components/Container'
import categories from '@/lib/categories'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import CustomLeftArrow from './CustomLeftArrow'
import CustomRightArrow from './CustomRightArrow'
import CustomDot from './CustomDot'

export function Offers() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
  }

  return (
    <section
      id="kinalatunk"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Mit kínálunk?
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            A cukrászdánkban kézműves desszertek, színes macaronok, hűsítő
            fagylaltkülönlegességek és télen a hagyományos bejgli ízei teszik
            felejthetetlenné a pillanatokat..
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-2xl sm:mt-20">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            customDot={<CustomDot />}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            itemClass="pb-14 rounded-2xl"
            dotListClass="space-x-2"
            className="rounded-2xl"
          >
            {categories.map((category) => (
              <div key={category.id} className="flex flex-col items-center">
                <Link
                  href={category.href}
                  className="relative aspect-[16/9] w-full max-w-2xl lg:max-w-none"
                >
                  <Image
                    alt={category.title.toLowerCase()}
                    src={category.image}
                    fill
                    className="rounded-2xl object-cover"
                  />
                </Link>

                <Link href={category.href} className="w-full">
                  <h3 className="mt-6 text-center text-2xl font-medium tracking-tight text-gray-900 sm:text-3xl">
                    {category.title}
                  </h3>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>

    // <section
    //   id="kinalatunk"
    //   aria-label="Features for building a portfolio"
    //   className="py-20 sm:py-32"
    // >
    //   <Container>
    //     <div className="mx-auto max-w-2xl sm:text-center">
    //       <h2 className="text-3xl font-medium tracking-tight text-gray-900">
    //         Mit kínálunk?
    //       </h2>
    //       <p className="mt-2 text-lg text-gray-600">
    //         A cukrászdánkban kézműves desszertek, színes macaronok, ropogós sós
    //         sütemények, hűsítő fagylaltkülönlegességek és télen a hagyományos
    //         bejgli ízei teszik felejthetetlenné a pillanatokat.
    //       </p>
    //     </div>
    //     <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3">
    //       {categories.map((category) => (
    //         <div
    //           key={category.id}
    //           className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200"
    //         >
    //           <Image
    //             alt={category.title.toLowerCase()}
    //             src={category.image}
    //             className="aspect-[3/4] w-full object-cover transition-opacity group-hover:opacity-75 sm:aspect-auto sm:h-96"
    //           />
    //           <div className="flex flex-1 flex-col space-y-2 p-4">
    //             <h3 className="text-sm font-medium text-gray-900">
    //               <Link href={category.href}>
    //                 <span aria-hidden="true" className="absolute inset-0" />
    //                 {category.title}
    //               </Link>
    //             </h3>
    //             <p className="text-sm text-gray-500">{category.description}</p>
    //             {/* <p className="text-base font-medium text-gray-900">
    //               {category.products} termék
    //             </p> */}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </Container>
    // </section>
  )
}
