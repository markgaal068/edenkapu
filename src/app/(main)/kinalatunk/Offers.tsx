'use client'

import Image from 'next/image'
import AddToCartButton from './AddToCartButton'
import categories from './categories'
import { useState } from 'react'

const Offers = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(1)

  return (
    <>
      {categories.map((category) => (
        <section key={category.id} id={category.id} className="pt-16">
          <h2 className="mb-8 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            {category.title}
          </h2>
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {category.products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col rounded-2xl border border-gray-200"
              >
                <Image
                  alt={product.imageAlt}
                  src={product.image}
                  className="aspect-[3/4] w-full object-cover transition-opacity sm:aspect-auto sm:h-96"
                />
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <div className="flex flex-1 flex-col justify-end">
                    <p className="text-sm italic text-gray-500">
                      {product.options}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-base font-medium text-gray-900">
                        {product.price} Ft
                      </p>

                      <div className="flex gap-3">
                        <select
                          className="select select-bordered h-10 min-h-10 max-w-xs border-none bg-transparent leading-none text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-brown-400"
                          name={`quantity-${product.id}`}
                          aria-label={`Quantity, ${product.name}`}
                          onChange={(e) => {
                            setSelectedQuantity(parseInt(e.target.value))
                          }}
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                        </select>

                        <AddToCartButton
                          product={{
                            id: product.id,
                            name: product.name,
                            basePrice: product.price,
                            totalPrice: product.price * selectedQuantity,
                            image: product.image,
                            imageAlt: product.imageAlt,
                            href: product.href,
                            quantity: selectedQuantity,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  )
}

export default Offers
