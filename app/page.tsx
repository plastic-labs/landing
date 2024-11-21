/* eslint-disable import/no-default-export */

import { GetInTouchSection } from '@/components/sections/get-in-touch'
import { PartnersSection } from '@/components/sections/partners'
import { ProductsSection } from '@/components/sections/products'
import { TeamSection } from '@/components/sections/team'

const Page = () => {
  return (
    <>
      <ProductsSection />
      <TeamSection />
      <PartnersSection />
      <GetInTouchSection />
    </>
  )
}

export default Page
