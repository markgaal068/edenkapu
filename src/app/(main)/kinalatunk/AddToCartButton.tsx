'use client'

import { useCart } from '@/context/CartContext'
import { CartItem } from '@/lib/types'
import { StaticImageData } from 'next/image'

export default function AddToCartButton({ product }: { product: CartItem }) {
  const { addToCart, removeFromCart } = useCart()

  return (
    <button
      onClick={() => {
        // Remove any existing instance of this product
        removeFromCart(product.id)
        // Add the product with the new quantity
        addToCart(product)
        // Optional: Add some feedback
        // alert('Termék hozzáadva a kosárhoz!')

        // Save quantity to localStorage
        localStorage.setItem(
          `quantity-${product.id}`,
          product.quantity.toString(),
        )
      }}
      className="block rounded-md bg-brown-400 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brown-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-400"
    >
      Kosárbaa
    </button>
  )
}
