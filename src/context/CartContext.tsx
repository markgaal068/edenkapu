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
  removeFromCart: (itemId: string) => void
  clearCart: () => void
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
      const existingItem = prev.find((cartItem) => cartItem.type === item.type)
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.type === item.type
            ? {
                ...cartItem,
                quantity: cartItem.quantity + item.quantity,
                totalPrice:
                  (cartItem.quantity + item.quantity) *
                  item.basePrice *
                  item.type,
              }
            : cartItem,
        )
      }
      return [
        ...prev,
        {
          ...item,
          totalPrice: item.quantity * item.basePrice * item.type,
        },
      ]
    })
  }

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
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
