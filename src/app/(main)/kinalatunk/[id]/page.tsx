import categories from '@/lib/categories'
import Product from './Product'

const ProductPage = ({ params }: { params: { id: string } }) => {
  const product = categories
    .flatMap((category) => category.products)
    .find((product) => product.id === Number(params.id))

  if (!product) {
    return <div>Termék nem található</div>
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-32 sm:px-6 sm:py-64 lg:max-w-8xl lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Termék
      </h1>
      <Product product={product} />
    </div>
  )
}

export default ProductPage
