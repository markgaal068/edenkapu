'use client'

import { ChevronDownIcon } from '@heroicons/react/16/solid'
import {
  CheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
  TrashIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import makos_bejgli from '@/images/makos_bejgli.jpg'
import dios_bejgli from '@/images/dios_bejgli.jpg'
import vanilias_fagylalt from '@/images/vanilias_fagylalt.jpg'
import { useCart } from '@/context/CartContext'
import DeleteFromCartButton from './DeleteFromCartButton'

export function Cart() {
  const { cart, removeFromCart, addToCart } = useCart()
  const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0)

  if (cart.length === 0) {
    return <p className="mt-2 text-gray-600">A kosár üres</p>
  }

  return (
    <form className="mt-12 xl:grid xl:grid-cols-12 xl:items-start xl:gap-x-16">
      <section aria-labelledby="cart-heading" className="xl:col-span-7">
        <h2 id="cart-heading" className="sr-only">
          A kosarad tartalma
        </h2>

        <ul
          role="list"
          className="divide-y divide-gray-200 border-b border-t border-gray-200"
        >
          {cart.map((product) => (
            <li key={product.id} className="flex py-6 sm:py-10">
              <div className="shrink-0">
                <Link
                  href={`/kinalatunk/${product.id}`}
                  className="transition-opacity hover:opacity-75"
                >
                  <Image
                    alt={product.imageAlt}
                    src={product.image}
                    className="size-24 rounded-md object-cover sm:size-48"
                  />
                </Link>
              </div>

              <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                  <div>
                    <Link
                      href={`/kinalatunk/${product.id}`}
                      className="block w-fit font-medium text-gray-900 transition-colors hover:text-brown-400"
                    >
                      <h3 className="text-sm">{product.name}</h3>
                    </Link>

                    {/* <div className="mt-1 flex text-sm">
                      <p className="text-gray-500">{product.color}</p>
                      {product.size ? (
                        <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                          {product.size}
                        </p>
                      ) : null}
                    </div> */}
                    <p className="mt-1 text-sm font-medium text-gray-900">
                      {product.basePrice} Ft
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 sm:mt-0 sm:pr-9">
                    <select
                      className="select select-bordered h-10 min-h-10 border-none bg-transparent leading-none text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-brown-400"
                      name={`type-${product.id}`}
                      aria-label={`Type, ${product.name}`}
                      onChange={(e) => {
                        const type = parseInt(e.target.value)
                        console.log(type)

                        const updatedProduct = {
                          ...product,
                          type: type,
                          totalPrice:
                            product.quantity * product.basePrice * type,
                        }

                        console.log(updatedProduct)

                        // Remove the old item and add the updated one
                        removeFromCart(product.id)
                        addToCart(updatedProduct)
                      }}
                    >
                      <option value="10">10 szeletes</option>
                      <option value="14">14 szeletes</option>
                      <option value="18">18 szeletes</option>
                    </select>

                    <select
                      className="select select-bordered h-10 min-h-10 w-[75px] border-none bg-transparent leading-none text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-brown-400"
                      name={`quantity-${product.id}`}
                      aria-label={`Quantity, ${product.name}`}
                      defaultValue={product.quantity}
                      onChange={(e) => {
                        const quantity = parseInt(e.target.value)
                        console.log(quantity)

                        // Update the cart item with the new quantity
                        const updatedProduct = {
                          ...product,
                          quantity: quantity,
                          totalPrice:
                            quantity * product.basePrice * product.type, // Calculate new total using basePrice
                        }

                        console.log(updatedProduct)

                        // Remove the old item and add the updated one
                        removeFromCart(product.id)
                        addToCart(updatedProduct)
                      }}
                    >
                      {[...Array(99)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>

                    <div className="absolute right-0 top-0">
                      <DeleteFromCartButton product={product} />
                    </div>

                    {/* <div className="ml-4 flow-root shrink-0">
                      
                    </div> */}
                  </div>
                </div>

                {/* <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                    {product.inStock ? (
                      <CheckIcon
                        aria-hidden="true"
                        className="size-5 shrink-0 text-green-500"
                      />
                    ) : (
                      <ClockIcon
                        aria-hidden="true"
                        className="size-5 shrink-0 text-gray-300"
                      />
                    )}

                    <span>
                      {product.inStock
                        ? 'In stock'
                        : `Ships in ${product.leadTime}`}
                    </span>
                  </p> */}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Order summary */}
      <section
        aria-labelledby="summary-heading"
        className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 xl:col-span-5 xl:mt-0 xl:p-8"
      >
        <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
          Rendelés összesítése
        </h2>

        <dl className="mt-6">
          <div className="flex items-center justify-between border-t border-gray-200 pt-6">
            <dt className="text-base font-medium text-gray-900">Végösszeg</dt>
            <dd className="text-base font-medium text-gray-900">
              {totalPrice} Ft
            </dd>
          </div>
        </dl>

        <div className="mt-6">
          <Link
            href="/rendeles"
            className="block w-full rounded-md bg-brown-400 px-4 py-3 text-center font-medium text-white shadow-sm transition-colors hover:bg-brown-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-400"
          >
            Tovább a rendeléshez
          </Link>
        </div>
      </section>
    </form>
  )
}
