import Product from '@/components/Product'
import categories from '@/lib/categories'

const MacaronPage = ({ params }: { params: { id: string } }) => {
  const product = categories
    .flatMap((category) => category.products)
    .find((product) => product.id === params.id)

  return (
    <div className="mx-auto max-w-2xl px-4 py-32 sm:px-6 sm:py-64 lg:max-w-9xl lg:px-8">
      {!product ? (
        <h1 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
          A termék nem található
        </h1>
      ) : (
        <>
          <h1 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
            Termék
          </h1>
          <Product product={product} />
        </>
      )}
    </div>
  )
}

export default MacaronPage
