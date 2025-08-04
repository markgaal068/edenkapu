'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckCircleIcon, TrashIcon } from '@heroicons/react/20/solid'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import DeleteFromCartButton from '../kosar/DeleteFromCartButton'
import SubmitButton from './SubmitButton'
import { submitOrder } from './actions'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'


const Order = () => {
  const { cart, removeFromCart, addToCart, clearCart } = useCart()
  const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0)
  const router = useRouter()

  const handleSubmit = async (formData: FormData) => {
    const orderData = {
      firstName: formData.get('first-name') as string,
      lastName: formData.get('last-name') as string,
      email: formData.get('email-address') as string,
      phone: formData.get('phone') as string,
      items: cart,
      totalPrice,
      pickupDate: formData.get('pickup-date') as string,
    }

    const result = await submitOrder(orderData)

    if (result.success) {
      clearCart()

      // Redirect to main page
      router.push('/')

      // Optional: Show success message
      toast.success(
        'Köszönjük a rendelését! Email-ben elküldtük a visszaigazolást.',
        { duration: 10000 },
      )
    } else {
      toast.error('A rendelés leadása sikertelen.', { duration: 10000 })
    }
  }

  if (cart.length === 0) {
    return <p className="mt-2 text-gray-500">A kosár üres</p>
  }

  // const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
  //   deliveryMethods[0],
  // )

  return (
    <div className="mx-auto max-w-2xl pb-24 pt-12 lg:max-w-9xl">
      <h2 className="sr-only">Rendelés leadása</h2>

      <form
        action={handleSubmit}
        className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16"
      >
        <div>
          <h2 className="text-lg font-medium text-gray-900">
            Kapcsolattartási adatok
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Keresztnév
                <span className="ml-1 text-brown-400">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-400 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="last-name"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Vezetéknév
                <span className="ml-1 text-brown-400">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-400 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email-address"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Email
                <span className="ml-1 text-brown-400">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-400 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="phone"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Telefonszám
                <span className="ml-1 text-brown-400">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="numeric"
                  required
                  onChange={(e) => {
                    e.target.value = e.target.value.replace(/[^\d]/g, '')
                  }}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-400 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="pickup-date"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Rendelés átvétele
                <span className="ml-1 text-brown-400">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="pickup-date"
                  name="pickup-date"
                  type="date"
                  required
                  min={new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
                    .toISOString()
                    .split('T')[0]}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-400 sm:text-sm/6"
                />
              </div>
            </div>
          </div>


        </div>

        {/* Order summary */}
        <div className="mt-10 lg:mt-0">
          <h2 className="text-lg font-medium text-gray-900">
            Rendelés összesítése
          </h2>

          <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
            <h3 className="sr-only">Items in your cart</h3>
            <ul role="list" className="divide-y divide-gray-200">
              {cart.map((product) => (
                <li key={product.id} className="flex px-4 py-6 sm:px-6">
                  <div className="shrink-0">
                    <Link
                      href={`/kinalatunk/${product.id}`}
                      className="transition-opacity hover:opacity-75"
                    >
                      <Image
                        alt={product.imageAlt}
                        src={product.image}
                        className="max-w-40 rounded-md object-cover"
                      />
                    </Link>
                  </div>

                  <div className="ml-6 flex flex-1 flex-col">
                    <div className="flex">
                      <div className="min-w-0 flex-1">
                        <Link
                          href={`/kinalatunk/${product.id}`}
                          className="block w-fit font-medium text-gray-900 transition-colors hover:text-brown-400"
                        >
                          <h4 className="text-sm">{product.name}</h4>
                        </Link>

                        {/* <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.size}
                        </p> */}
                      </div>

                      <div className="ml-4 flow-root shrink-0">
                        <DeleteFromCartButton product={product} />
                      </div>
                    </div>

                    <div className="flex flex-1 items-end justify-between pt-2">
                      <p className="mt-1 text-sm font-medium text-gray-900">
                        {product.basePrice} Ft
                      </p>

                      <div className="ml-4">
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
                              totalPrice: product.basePrice * quantity, // Calculate new total using basePrice
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
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <dl className="border-t border-gray-200 px-4 py-6 sm:px-6">
              {/* <div className="flex items-center justify-between">
                <dt className="text-sm">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">$64.00</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm">Shipping</dt>
                <dd className="text-sm font-medium text-gray-900">$5.00</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm">Taxes</dt>
                <dd className="text-sm font-medium text-gray-900">$5.52</dd>
              </div> */}
              <div className="flex items-center justify-between">
                <dt className="text-base font-medium text-gray-900">
                  Végösszeg
                </dt>
                <dd className="text-base font-medium text-gray-900">
                  {totalPrice} Ft
                </dd>
              </div>
            </dl>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <SubmitButton />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Order
