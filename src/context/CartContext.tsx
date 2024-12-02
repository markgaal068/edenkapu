'use client'

import { CartItem } from '@/lib/types'
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (itemId: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedCart = localStorage.getItem('cart')
        return savedCart ? JSON.parse(savedCart) : []
      } catch (error) {
        console.error('Error loading cart:', error)
        return []
      }
    }
    return []
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        console.log('Saving cart to localStorage:', cart) // Debug log
        localStorage.setItem('cart', JSON.stringify(cart))
      } catch (error) {
        console.error('Error saving cart:', error)
      }
    }
  }, [cart])

  const addToCart = (item: CartItem) => {
    console.log('Adding item:', item) // Debug log

    setCart((prev) => {
      // const basePrice = item.basePrice
      // const totalPrice = item.basePrice * item.quantity // Use basePrice for calculation

      // const itemWithTotalPrice = {
      //   ...item,
      //   basePrice, // Store the original price
      //   totalPrice,
      // }
      const newCart = [...prev, item]
      console.log('New cart state:', newCart) // Debug log
      return newCart
    })
  }

  const removeFromCart = (itemId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
