import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
      </main>
      <Footer />
    </div>
  )
}

export default App

