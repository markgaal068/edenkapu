'use client'

import { useCart } from '@/context/CartContext'
import { CartItem } from '@/lib/types'
import { StaticImageData } from 'next/image'
import classNames from 'classnames'
import toast from 'react-hot-toast'

export default function AddToCartButton({
  product,
  productPage,
}: {
  product: CartItem
  productPage?: boolean
}) {
  const { addToCart } = useCart()

  return (
    <button
      onClick={() => {
        addToCart(product)
        toast.success('A terméket sikeresen hozzáadta a kosárhoz!')
      }}
      className={classNames(
        'block rounded-md bg-brown-400 px-4 text-center font-semibold text-white shadow-sm transition-colors hover:bg-brown-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-400',
        productPage ? 'w-full py-3' : 'py-2 text-sm',
      )}
    >
      Kosárba
    </button>
  )
}
