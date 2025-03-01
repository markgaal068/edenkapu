'use client'

import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import {
  CurrencyDollarIcon,
  GlobeAmericasIcon,
} from '@heroicons/react/24/outline'
import { ProductType } from '@/lib/types'
import Link from 'next/dist/client/link'
import Image from 'next/image'
import AddToCartButton from '@/components/AddToCartButton'

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const Product = ({
  product,
  iceCreams,
}: {
  product: ProductType
  iceCreams?: boolean
}) => {
  // const [selectedColor, setSelectedColor] = useState(product.colors[0])
  // const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  const [selectedQuantity, setSelectedQuantity] = useState(1)

  return (
    <div className="pb-16 pt-6 sm:pb-24">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-9xl">
        <ol role="list" className="flex items-center space-x-4">
          <li>
            <div className="flex items-center">
              <Link
                href={product.breadcrumb.href}
                className="mr-4 text-sm font-medium text-gray-900"
              >
                {product.breadcrumb.name}
              </Link>
              <svg
                viewBox="0 0 6 20"
                aria-hidden="true"
                className="h-5 w-auto text-gray-300"
              >
                <path
                  d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </li>

          <li className="text-sm font-medium text-gray-500 hover:text-gray-600">
            {product.name}
          </li>
        </ol>
      </nav>
      <div className="mx-auto mt-8 max-w-2xl lg:max-w-9xl">
        <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="flex justify-between">
              <h1 className="text-xl font-medium text-gray-900">
                {product.name}
              </h1>
              {iceCreams && (
                <p className="text-xl font-medium text-gray-900">
                  {product.price} Ft
                </p>
              )}
            </div>
            {/* Reviews */}
            {/* <div className="mt-4">
              <h2 className="sr-only">Reviews</h2>
              <div className="flex items-center">
                <p className="text-sm text-gray-700">
                  {product.rating}
                  <span className="sr-only"> out of 5 stars</span>
                </p>
                <div className="ml-1 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        product.rating > rating
                          ? 'text-yellow-400'
                          : 'text-gray-200',
                        'size-5 shrink-0',
                      )}
                    />
                  ))}
                </div>
                <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
                  ·
                </div>
                <div className="ml-4 flex">
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    See all {product.reviewCount} reviews
                  </a>
                </div>
              </div>
            </div> */}
          </div>

          {/* Image gallery */}
          <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
            <h2 className="sr-only">Kép</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
              {/* {product.images.map((image) => (
                <Image
                  key={image.id}
                  alt={image.imageAlt}
                  src={image.imageSrc}
                  className={classNames(
                    image.primary
                      ? 'lg:col-span-2 lg:row-span-2'
                      : 'hidden lg:block',
                    'rounded-lg',
                  )}
                />
              ))} */}
              <Image
                className="rounded-lg lg:col-span-2 lg:row-span-2"
                src={product.image}
                alt={product.imageAlt}
              />
              {/* <Image
                className="hidden rounded-lg lg:block"
                src={product.image}
                alt={product.imageAlt}
              />
              <Image
                className="hidden rounded-lg lg:block"
                src={product.image}
                alt={product.imageAlt} 
              /> */}
            </div>
          </div>

          {iceCreams && (
            <div className="mt-8 lg:col-span-5">
              <div className="flex gap-3">
                {/* Color picker */}
                {/* <div>
                <h2 className="text-sm font-medium text-gray-900">Color</h2>

                <fieldset aria-label="Choose a color" className="mt-2">
                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="flex items-center space-x-3"
                  >
                    {product.colors.map((color) => (
                      <Radio
                        key={color.name}
                        value={color}
                        aria-label={color.name}
                        className={classNames(
                          color.selectedColor,
                          'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1',
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.bgColor,
                            'size-8 rounded-full border border-black/10',
                          )}
                        />
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div> */}

                {/* Size picker */}
                {/* <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-900">Size</h2>
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    See sizing chart
                  </a>
                </div>

                <fieldset aria-label="Choose a size" className="mt-2">
                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="grid grid-cols-3 gap-3 sm:grid-cols-6"
                  >
                    {product.sizes.map((size) => (
                      <Radio
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={classNames(
                          size.inStock
                            ? 'cursor-pointer focus:outline-none'
                            : 'cursor-not-allowed opacity-25',
                          'flex items-center justify-center rounded-md border border-gray-200 bg-white px-3 py-3 text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 data-[checked]:border-transparent data-[checked]:bg-indigo-600 data-[checked]:text-white data-[focus]:ring-2 data-[focus]:ring-indigo-500 data-[focus]:ring-offset-2 data-[checked]:hover:bg-indigo-700 sm:flex-1',
                        )}
                      >
                        {size.name}
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div> */}
                <select
                  className="select select-bordered h-12 min-h-12 w-[75px] border-none bg-transparent leading-none text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-brown-400"
                  name={`quantity-${product.id}`}
                  aria-label={`Quantity, ${product.name}`}
                  onChange={(e) => {
                    setSelectedQuantity(parseInt(e.target.value))
                  }}
                >
                  {[...Array(99)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>

                <AddToCartButton
                  product={{
                    id: product.id,
                    name: product.name,
                    basePrice: product.price,
                    totalPrice: product.price * selectedQuantity,
                    image: product.image,
                    imageAlt: product.imageAlt,
                    quantity: selectedQuantity,
                  }}
                  productPage
                />
              </div>

              {/* Product details */}
              {product.description && (
                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">Leírás</h2>
                  <p className="mt-4 space-y-4 text-sm/6 text-gray-500">
                    {product.description}
                  </p>
                </div>
              )}

              {product.options && (
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <h2 className="text-sm font-medium text-gray-900">
                    Jellemzők
                  </h2>

                  <div className="mt-4">
                    <ul
                      role="list"
                      className="list-disc space-y-1 pl-5 text-sm/6 text-gray-500 marker:text-gray-300"
                    >
                      <li className="pl-2">{product.options}</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Policies */}
              {/* <section aria-labelledby="policies-heading" className="mt-10">
              <h2 id="policies-heading" className="sr-only">
                Our Policies
              </h2>

              <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {policies.map((policy) => (
                  <div
                    key={policy.name}
                    className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
                  >
                    <dt>
                      <policy.icon
                        aria-hidden="true"
                        className="mx-auto size-6 shrink-0 text-gray-400"
                      />
                      <span className="mt-4 text-sm font-medium text-gray-900">
                        {policy.name}
                      </span>
                    </dt>
                    <dd className="mt-1 text-sm text-gray-500">
                      {policy.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </section> */}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Product
