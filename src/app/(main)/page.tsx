import { CallToAction } from '@/components/CallToAction'
import { Contact } from '@/components/Contact'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Offers } from '@/components/Offers'
import { Reviews } from '@/components/Reviews'

export default function Home() {
  return (
    <>
      <Hero />
      <Offers />
      <CallToAction />
      <Reviews />
      <Faqs />
      <Contact />
    </>
  )
}
