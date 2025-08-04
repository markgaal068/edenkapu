'use client'

import { ProductType } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'

const Product = ({
  product,
  iceCreams,
}: {
  product: ProductType
  iceCreams?: boolean
}) => {
  return (
    <div className="pb-16 pt-6 sm:pb-24">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ol role="list" className="flex items-center space-x-4 text-sm text-gray-500">
          <li>
            <div className="flex items-center">
              <Link href={product.breadcrumb.href} className="text-gray-900 font-medium hover:underline">
                {product.breadcrumb.name}
              </Link>
              <svg className="mx-3 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7.05 4.05a1 1 0 011.414 0L13 8.586a1 1 0 010 1.414L8.464 14.95a1 1 0 01-1.414-1.414L10.586 10 7.05 6.464a1 1 0 010-1.414z" />
              </svg>
            </div>
          </li>
          <li>{product.name}</li>
        </ol>
      </nav>

      {/* Main section */}
      <div className="mx-auto mt-10 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8">
        {/* Image */}
        <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-200">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">{product.name}</h1>

            {product.description && (
              <div className="mt-6">
                <h2 className="text-sm font-semibold text-gray-900">Leírás</h2>
                <p className="mt-2 text-sm text-gray-500 whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            )}

            {product.options && (
              <div className="mt-6 border-t border-gray-200 pt-6">
                <h2 className="text-sm font-semibold text-gray-900">Jellemzők</h2>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-500 marker:text-gray-300">
                  <li>{product.options}</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
