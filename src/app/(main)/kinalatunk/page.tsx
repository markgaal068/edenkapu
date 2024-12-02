import Offers from './Offers'

const OffersPage = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-32 sm:px-6 sm:py-64 lg:max-w-8xl lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Kínálatunk
      </h1>
      <Offers />
    </div>
  )
}

export default OffersPage
