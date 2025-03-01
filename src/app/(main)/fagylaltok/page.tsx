import Link from 'next/link'
import IceCreams from './IceCreams'

const IceCreamsPage = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-32 sm:px-6 sm:py-64 lg:max-w-9xl lg:px-8">
      <h1 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
        Fagylaltok
      </h1>
      <div className="mt-2 space-y-2">
        <p className="text-sm text-gray-500">
          (a teljes kínálatért érdeklődjön telefonon)
        </p>
        <Link
          href="tel:+36703117202"
          className="font-semibold text-brown-400 underline hover:text-brown-300"
        >
          📞 06-70-311-7202
        </Link>
      </div>
      <IceCreams />
    </div>
  )
}

export default IceCreamsPage
