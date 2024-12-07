import { Cart } from './Cart'

export default function CartPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-32 sm:px-6 sm:py-64 lg:max-w-9xl lg:px-8">
      <h1 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
        Kosár
      </h1>
      <Cart />
    </div>
  )
}
