"use client"
import { useState } from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import Image from 'next/image'
import founder from '/public/assets/images/founder.jpeg'
import { motion, AnimatePresence } from 'framer-motion'

export function Contact() {
  const [showMap, setShowMap] = useState(false)

  return (
    <section
      id="kapcsolat"
      className="relative border-t border-gray-200 bg-white py-24 sm:py-32 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Fejléc */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Kapcsolat
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            <i>Édességparadicsom Győr szívében..</i>
          </p>
        </div>

        {/* Fő tartalom blokk */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Elérhetőség */}
          <div className="flex flex-col items-center text-center space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Elérhetőség</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-2 justify-center">
                <FaPhoneAlt className="text-brown-400 w-5 h-5" />
                +36 30 123 4567
              </li>
              <li className="flex items-center gap-2 justify-center">
                <FaEnvelope className="text-brown-400 w-5 h-5" />
                info@edekapu.hu
              </li>
              <li className="flex items-center gap-2 justify-center">
                <FaMapMarkerAlt className="text-brown-400 w-5 h-5" />
                Győr, Dunakapu tér 4, 9022
              </li>
            </ul>
          </div>

          {/* Közösségi média */}
          <div className="flex flex-col items-center text-center space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Közösségi média</h3>
            <ul className="space-y-4 text-gray-600">
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="flex items-center justify-center gap-2 hover:text-brown-400 transition-colors"
                >
                  <FaFacebookF className="w-5 h-5" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="flex items-center justify-center gap-2 hover:text-brown-400 transition-colors"
                >
                  <FaInstagram className="w-5 h-5" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="flex items-center justify-center gap-2 hover:text-brown-400 transition-colors"
                >
                  <FaTiktok className="w-5 h-5" />
                  TikTok
                </a>
              </li>
            </ul>
          </div>

          {/* Alapító blokk */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-4"
          >
            {/* <Image
              src={founder}
              alt="Gál Szabolcs - alapító"
              width={96}
              height={96}
              className="rounded-full object-cover"
            /> */}
            <div className="text-2xl font-semibold text-gray-900">Gál Szabolcs</div>
            <div className="text-gray-600 text-sm">Alapító & Főpékségmester</div>
            <blockquote className="mt-4 text-gray-700 italic text-base max-w-xs">
              „A szenvedélyünk a minőségi alapanyagokból készült különleges édességek.”
            </blockquote>
          </motion.div>
        </div>

        {/* Gomb és Térkép */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowMap(!showMap)}
            className="inline-flex items-center justify-center rounded-full bg-brown-400 px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-brown-300 transition-all mb-8"
          >
            {showMap ? 'Térkép elrejtése' : 'Térkép megjelenítése'}
          </motion.button>

          <AnimatePresence>
            {showMap && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-3xl shadow-lg aspect-video"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2717.196443751514!2d17.630095176530814!3d47.687920279089096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476bfc6296b48509%3A0x38ccbe179e5acc2f!2sGy%C5%91r%2C%20Dunakapu%20t%C3%A9r%204%2C%209022%20Magyarorsz%C3%A1g!5e0!3m2!1shu!2shu!4v1714221123456!5m2!1shu!2shu"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  className="w-full h-full"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
