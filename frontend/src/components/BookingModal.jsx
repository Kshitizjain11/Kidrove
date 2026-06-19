import { useState } from 'react'

export default function BookingModal({ onClose, showToast }) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      showToast('Enrollment successful! Check your email.')
    }, 1500)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => { setSubmitted(false); setLoading(false) }, 300)
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose}></div>
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-900">Enroll Now</h3>
            <button onClick={handleClose} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="p-6">
            <div className="bg-orange-50 rounded-xl p-4 mb-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-kidrove-orange rounded-xl flex items-center justify-center text-white text-xl">
                <i className="fas fa-robot"></i>
              </div>
              <div>
                <p className="font-bold text-gray-900">AI & Robotics Summer Workshop</p>
                <p className="text-sm text-gray-500">15 Jul – 12 Aug, 2026 • Online</p>
              </div>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input type="text" name="name" required className="form-input" placeholder="Enter your full name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input type="email" name="email" required className="form-input" placeholder="you@example.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input type="tel" name="phone" required pattern="[0-9]{10}" className="form-input" placeholder="10-digit mobile number" />
                </div>
                <div className="form-group">
                  <label className="form-label">Child's Age *</label>
                  <select name="age" required className="form-input bg-white">
                    <option value="">Select age</option>
                    <option value="8">8 Years</option>
                    <option value="9">9 Years</option>
                    <option value="10">10 Years</option>
                    <option value="11">11 Years</option>
                    <option value="12">12 Years</option>
                    <option value="13">13 Years</option>
                    <option value="14">14 Years</option>
                  </select>
                </div>


                <div className="flex items-center justify-between py-4 border-t border-gray-100 mb-4">
                  <span className="font-bold text-gray-900">Total Amount</span>
                  <span className="text-2xl font-bold text-kidrove-green">₹2,999</span>
                </div>

                <button type="submit" className="enroll-btn" disabled={loading}>
                  {loading ? <span><i className="fas fa-spinner fa-spin mr-2"></i> Processing...</span> : <span>Complete Enrollment</span>}
                </button>
                <p className="text-xs text-gray-400 text-center mt-3">By enrolling, you agree to our Terms & Conditions</p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-3xl mx-auto mb-4 animate-bounce">
                  <i className="fas fa-check"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enrollment Successful!</h3>
                <p className="text-gray-600 mb-6">Thank you for enrolling. We have sent a confirmation email with next steps.</p>
                <button onClick={handleClose} className="bg-gray-100 text-gray-700 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-200 transition">Close</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
