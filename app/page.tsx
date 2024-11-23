/* eslint-disable import/no-default-export */

import { Main } from '@/components/layout/main'
import { GetInTouchSection } from '@/components/sections/get-in-touch'
import { HeroSection } from '@/components/sections/hero'
import { PartnersSection } from '@/components/sections/partners'
import { ProductsSection } from '@/components/sections/products'
import { TeamSection } from '@/components/sections/team'

const Page = () => {
  return (
    <Main>
      <HeroSection />
      <ProductsSection />
      <TeamSection />
      <PartnersSection />
      <GetInTouchSection />
    </Main>
  )
}

export default Page
