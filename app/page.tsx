/* eslint-disable import/no-default-export */

import { GetInTouchSection } from '@/components/sections/get-in-touch'
import { HeroSection } from '@/components/sections/hero'
import { PartnersSection } from '@/components/sections/partners'
import { ProductsSection } from '@/components/sections/products'
import { TeamSection } from '@/components/sections/team'

const Page = () => {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <TeamSection />
      <PartnersSection />
      <GetInTouchSection />
    </>
  )
}

export default Page
