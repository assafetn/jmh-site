import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import MarketShift from './sections/MarketShift'
import Product from './sections/Product'
import Moat from './sections/Moat'

export default function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[60px]">
        <Hero />
        <Problem />
        <MarketShift />
        <Product />
        <Moat />
      </main>
      <Footer />
    </>
  )
}
