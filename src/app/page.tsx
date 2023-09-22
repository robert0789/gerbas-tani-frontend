import Image from 'next/image'
import Hero from './modules/home/hero'
import About from './modules/home/about'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <About />
    </main>
  )
}
