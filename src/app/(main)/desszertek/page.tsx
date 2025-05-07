'use client'

import Link from 'next/link'
import Desserts from './Desserts'
import { motion } from 'framer-motion'

const DessertsPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-32 sm:px-6 sm:py-40 lg:px-8 text-gray-800">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mt-16">
          Desszertjeink
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Kóstolj bele természetes alapanyagokból készült, ínycsiklandó desszertjeink világába!
        </p>
      </motion.div>

      {/* ICE CREAM LIST */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <Desserts />
      </motion.div>


      {/* CONTACT BOX */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-16 rounded-2xl border border-[#e7d6c1] bg-[#fdf8f2] p-6 text-center shadow-md"
      >
        <p className="text-base text-gray-700 mb-3">
          A teljes kínálatról érdeklődjön telefonon:
        </p>
        <Link
          href="tel:+36703117202"
          className="inline-block rounded-full bg-[#c0946c] px-6 py-3 font-semibold text-white transition hover:bg-[#a3784f]"
        >
          📞 06-70-311-7202
        </Link>
      </motion.div>
    </div>
  )
}

export default DessertsPage
