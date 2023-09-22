import Image from 'next/image'
import Hero from './modules/home/hero'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
    </main>
  )
}
