/* eslint-disable import/no-default-export */

import { Section } from '@/components/layout/section'
import { PartnersSection } from '@/components/sections/partners'
import { TeamSection } from '@/components/sections/team'

const Page = () => {
  return (
    <>
      <TeamSection />
      <PartnersSection />
      <Section useViewport>HI</Section>
    </>
  )
}

export default Page
