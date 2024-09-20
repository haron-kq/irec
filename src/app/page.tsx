import Navbar from '@/components/LandingPage/Navbar'
import Footer from '@/components/LandingPage/Footer'
import Counter from '@/components/counter/counter'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Navbar />
      <main className="flex flex-grow items-center justify-center p-5">
        <Counter />
      </main>
      <Footer />
    </div>
  )
}
