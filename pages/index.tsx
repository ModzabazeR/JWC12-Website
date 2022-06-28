import type { NextPage } from 'next'
import CTA from '../components/CTA'
import Reviews from '../components/Reviews'
import Bio from '../components/Bio'
import Contact from '../components/Contact'

const Home: NextPage = () => {
  return (
    <>
      <CTA />
      <Bio />
      <Reviews />
      <Contact />
    </>
  )
}

export default Home
