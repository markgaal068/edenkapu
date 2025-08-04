'use client'

import AddToCartButton from '@/components/AddToCartButton'
import categories from '@/lib/categories'
import { ProductType } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const IceCreams = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(1)
  const category = categories.find((category) => category.id === 'fagylaltok')

  return (
    <>
      {category && (
        <section key={category.id} id={category.id} className="pt-10">
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {category.products.map((product: ProductType) => (
              <div
                key={product.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-gray-200"
              >
                <Link
                  href={`/fagylaltok/${product.id}`}
                  className="transition-opacity hover:opacity-75"
                >
                  <Image
                    alt={product.imageAlt}
                    src={product.image}
                    className="aspect-[3/4] w-full object-cover sm:aspect-auto sm:h-96"
                  />
                </Link>
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <Link
                    href={`/fagylaltok/${product.id}`}
                    className="w-fit font-medium text-gray-900 transition-colors hover:text-brown-400"
                  >
                    <h3 className="text-sm">{product.name}</h3>
                  </Link>
                  {product.description && (
                    <p className="text-sm text-gray-500">
                      {product.description}
                    </p>
                  )}
                  <div className="flex flex-1 flex-col justify-end">
                    {product.options && (
                      <p className="text-sm italic text-gray-500">
                        {product.options}
                      </p>
                    )}

                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  )
}

export default IceCreams
