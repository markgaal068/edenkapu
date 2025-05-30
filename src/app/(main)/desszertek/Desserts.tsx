'use client'

import AddToCartButton from '@/components/AddToCartButton'
import categories from '@/lib/categories'
import { ProductType } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Desserts = () => {
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1)
  const [selectedType, setSelectedType] = useState<number>(10)
  const category = categories.find((category) => category.id === 'desszertek')

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
                  href={`/desszertek/${product.id}`}
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
                    href={`/desszertek/${product.id}`}
                    className="w-fit font-medium text-gray-900 transition-colors hover:text-brown-400"
                  >
                    <h3 className="text-sm">{product.name}</h3>
                  </Link>
                  {product.description && (
                    <p className="text-sm text-gray-500">
                      {product.description}
                    </p>
                  )}
                  <div className="flex flex-1 flex-col justify-end gap-2">
                    {product.options && (
                      <p className="text-sm italic text-gray-500">
                        {product.options}
                      </p>
                    )}
                    <div className="space-y-6">
                      <p className="text-base font-medium text-gray-900">
                        {product.price} Ft / szelet
                      </p>
                      <div className="space-y-2">
                        <p className="text-base font-medium text-gray-900">
                          {product.price * selectedType * selectedQuantity} Ft
                        </p>

                        <div className="flex flex-wrap gap-3">
                          <select
                            className="select select-bordered h-10 min-h-10 border-none bg-transparent leading-none text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-brown-400"
                            name={`type-${product.id}`}
                            aria-label={`Type, ${product.name}`}
                            value={selectedType}
                            onChange={(e) => {
                              setSelectedType(parseInt(e.target.value))
                            }}
                          >
                            <option value="10">10 szeletes</option>
                            <option value="14">14 szeletes</option>
                            <option value="18">18 szeletes</option>
                          </select>

                          <select
                            className="select select-bordered h-10 min-h-10 border-none bg-transparent leading-none text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-brown-400"
                            name={`quantity-${product.id}`}
                            aria-label={`Quantity, ${product.name}`}
                            value={selectedQuantity}
                            onChange={(e) => {
                              setSelectedQuantity(parseInt(e.target.value))
                            }}
                          >
                            {[...Array(99)].map((_, i) => (
                              <option key={i + 1} value={i + 1}>
                                {i + 1} db
                              </option>
                            ))}
                          </select>

                          <AddToCartButton
                            product={{
                              id: product.id,
                              name: product.name,
                              basePrice: product.price,
                              totalPrice: product.price * selectedType,
                              image: product.image,
                              imageAlt: product.imageAlt,
                              type: selectedType,
                              quantity: selectedQuantity,
                              breadcrumb: product.breadcrumb,
                            }}
                          />
                        </div>
                      </div>
                    </div>
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

export default Desserts
