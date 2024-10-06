import { CTAcard } from './sections/CTAcard'
import { FAQ } from './sections/FAQ'
import { Form } from './sections/form'
import { Hero } from './sections/hero'
import { HowItWorks } from './sections/howitworks'
import { Pricing } from './sections/pricing'
import { Services } from './sections/services'
import { Client } from './sections/client'

export default function LandingPage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Client />
      {/* <Testimonials /> */}
      <Services />
      <Pricing />
      <CTAcard />
      <FAQ />
      <Form />
    </>
  )
}
