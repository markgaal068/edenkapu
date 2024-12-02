'use client'

import { useCart } from '@/context/CartContext'
import { CartItem } from '@/lib/types'
import { XMarkIcon } from '@heroicons/react/20/solid'

export default function DeleteFromCartButton({
  product,
}: {
  product: CartItem
}) {
  const { removeFromCart } = useCart()

  return (
    <button
      type="button"
      onClick={() => {
        removeFromCart(product.id)
        // Optional: Add some feedback
        // alert('Termék eltávolítva a kosárból!')
      }}
      // className="block rounded-md bg-brown-400 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brown-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-400"
      className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
    >
      <span className="sr-only">Eltávolítás</span>
      <XMarkIcon aria-hidden="true" className="size-5" />
    </button>
  )
}
