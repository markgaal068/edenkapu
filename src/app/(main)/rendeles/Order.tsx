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

// const deliveryMethods = [
//   {
//     id: 1,
//     title: 'Standard',
//     turnaround: '4–10 business days',
//     price: '$5.00',
//   },
//   { id: 2, title: 'Express', turnaround: '2–5 business days', price: '$16.00' },
// ]
// const paymentMethods = [
//   { id: 'credit-card', title: 'Credit card' },
//   { id: 'paypal', title: 'PayPal' },
//   { id: 'etransfer', title: 'eTransfer' },
// ]

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
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
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
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
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
              </label>
              <div className="mt-2">
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
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
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-400 sm:text-sm/6"
                />
              </div>
            </div>
          </div>

          {/* <div className="mt-10 border-t border-gray-200 pt-10">
            <h2 className="text-lg font-medium text-gray-900">
              Shipping information
            </h2>

            <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-medium text-gray-700"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-400 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm/6 font-medium text-gray-700"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-400 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm/6 font-medium text-gray-700"
                >
                  Company
                </label>
                <div className="mt-2">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="address"
                  className="block text-sm/6 font-medium text-gray-700"
                >
                  Address
                </label>
                <div className="mt-2">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    autoComplete="street-address"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="apartment"
                  className="block text-sm/6 font-medium text-gray-700"
                >
                  Apartment, suite, etc.
                </label>
                <div className="mt-2">
                  <input
                    id="apartment"
                    name="apartment"
                    type="text"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm/6 font-medium text-gray-700"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block text-sm/6 font-medium text-gray-700"
                >
                  Country
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="region"
                  className="block text-sm/6 font-medium text-gray-700"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    id="region"
                    name="region"
                    type="text"
                    autoComplete="address-level1"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="postal-code"
                  className="block text-sm/6 font-medium text-gray-700"
                >
                  Postal code
                </label>
                <div className="mt-2">
                  <input
                    id="postal-code"
                    name="postal-code"
                    type="text"
                    autoComplete="postal-code"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="block text-sm/6 font-medium text-gray-700"
                >
                  Phone
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    autoComplete="tel"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="mt-10 border-t border-gray-200 pt-10">
            <fieldset>
              <legend className="text-lg font-medium text-gray-900">
                Delivery method
              </legend>
              <RadioGroup
                value={selectedDeliveryMethod}
                onChange={setSelectedDeliveryMethod}
                className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
              >
                {deliveryMethods.map((deliveryMethod) => (
                  <Radio
                    key={deliveryMethod.id}
                    value={deliveryMethod}
                    aria-label={deliveryMethod.title}
                    aria-description={`${deliveryMethod.turnaround} for ${deliveryMethod.price}`}
                    className="group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[checked]:border-transparent data-[focus]:ring-2 data-[focus]:ring-indigo-500"
                  >
                    <span className="flex flex-1">
                      <span className="flex flex-col">
                        <span className="block text-sm font-medium text-gray-900">
                          {deliveryMethod.title}
                        </span>
                        <span className="mt-1 flex items-center text-sm text-gray-500">
                          {deliveryMethod.turnaround}
                        </span>
                        <span className="mt-6 text-sm font-medium text-gray-900">
                          {deliveryMethod.price}
                        </span>
                      </span>
                    </span>
                    <CheckCircleIcon
                      aria-hidden="true"
                      className="size-5 text-indigo-600 [.group:not([data-checked])_&]:hidden"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                    />
                  </Radio>
                ))}
              </RadioGroup>
            </fieldset>
          </div> */}

          {/* Payment */}
          {/* <div className="mt-10 border-t border-gray-200 pt-10">
            <h2 className="text-lg font-medium text-gray-900">Payment</h2>

            <fieldset className="mt-4">
              <legend className="sr-only">Payment type</legend>
              <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
                  <div key={paymentMethod.id} className="flex items-center">
                    <input
                      defaultChecked={paymentMethodIdx === 0}
                      id={paymentMethod.id}
                      name="payment-type"
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                    />
                    <label
                      htmlFor={paymentMethod.id}
                      className="ml-3 block text-sm/6 font-medium text-gray-700"
                    >
                      {paymentMethod.title}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>

            <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
              <div className="col-span-4">
                <label
                  htmlFor="card-number"
                  className="block text-sm/6 font-medium text-gray-700"
                >
                  Card number
                </label>
                <div className="mt-2">
                  <input
                    id="card-number"
                    name="card-number"
                    type="text"
                    autoComplete="cc-number"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="col-span-4">
                <label
                  htmlFor="name-on-card"
                  className="block text-sm/6 font-medium text-gray-700"
                >
                  Name on card
                </label>
                <div className="mt-2">
                  <input
                    id="name-on-card"
                    name="name-on-card"
                    type="text"
                    autoComplete="cc-name"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="col-span-3">
                <label
                  htmlFor="expiration-date"
                  className="block text-sm/6 font-medium text-gray-700"
                >
                  Expiration date (MM/YY)
                </label>
                <div className="mt-2">
                  <input
                    id="expiration-date"
                    name="expiration-date"
                    type="text"
                    autoComplete="cc-exp"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="cvc"
                  className="block text-sm/6 font-medium text-gray-700"
                >
                  CVC
                </label>
                <div className="mt-2">
                  <input
                    id="cvc"
                    name="cvc"
                    type="text"
                    autoComplete="csc"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
          </div> */}
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
