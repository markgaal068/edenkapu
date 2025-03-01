import { StaticImageData } from 'next/image'

export type CartItem = {
  id: string
  name: string
  basePrice: number
  totalPrice: number
  image: StaticImageData
  imageAlt: string
  quantity: number
}

export type ProductType = {
  id: string
  name: string
  price: number
  description?: string
  options?: string
  image: StaticImageData
  imageAlt: string
  breadcrumb: {
    name: string
    href: string
  }
}
