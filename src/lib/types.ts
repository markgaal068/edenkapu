import { StaticImageData } from 'next/image'

export type CartItem = {
  id: number
  name: string
  basePrice: number
  totalPrice: number
  image: StaticImageData
  imageAlt: string
  href: string
  quantity: number
}
