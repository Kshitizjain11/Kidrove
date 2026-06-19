import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WorkshopDetails from './components/WorkshopDetails'
import FAQ from './components/FAQ'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import Toast from './components/Toast'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [toast, setToast] = useState({ show: false, msg: '' })
  const [selectedDate, setSelectedDate] = useState(null)

  const showToastMsg = (msg) => {
    setToast({ show: true, msg })
    setTimeout(() => setToast({ show: false, msg: '' }), 3000)
  }

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav')
      if (window.scrollY > 10) nav.classList.add('shadow-md')
      else nav.classList.remove('shadow-md')
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <a href="#" className="text-kidrove-orange text-sm font-medium hover:underline flex items-center gap-2">
          <i className="fas fa-chevron-left text-xs"></i> Back to Events
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <HeroSection />
            <WorkshopDetails />
            <FAQ />
          </div>
          <Sidebar 
            selectedDate={selectedDate} 
            setSelectedDate={setSelectedDate}
            showToast={showToastMsg}
            setShowModal={setShowModal}
          />
        </div>
      </div>

      <Footer />

      {showModal && (
        <BookingModal onClose={() => setShowModal(false)} showToast={showToastMsg} />
      )}

      <Toast toast={toast} />
    </div>
  )
}

export default App
