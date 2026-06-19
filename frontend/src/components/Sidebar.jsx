import { useState } from 'react'

const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December']
const dayNames = ['Su','Mo','Tu','We','Th','Fr','Sa']

export default function Sidebar({ selectedDate, setSelectedDate, showToast, setShowModal }) {
  const [qty, setQty] = useState(1)
  const [currentCalDate, setCurrentCalDate] = useState(new Date(2026, 6, 1))
  const pricePerSeat = 2999

  const eventStart = new Date(2026, 6, 15)
  const eventEnd = new Date(2026, 7, 12)
  const availableDates = [new Date(2026, 6, 15), new Date(2026, 6, 16), new Date(2026, 6, 22), new Date(2026, 6, 23), new Date(2026, 7, 2), new Date(2026, 7, 5)]

  const isSameDate = (d1, d2) => d1 && d2 && d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear()
  const isAvailable = (date) => availableDates.some(d => isSameDate(d, date))
  const isInEventRange = (date) => date >= eventStart && date <= eventEnd

  const changeMonth = (delta) => {
    const newDate = new Date(currentCalDate)
    newDate.setMonth(newDate.getMonth() + delta)
    setCurrentCalDate(newDate)
  }

  const selectDate = (year, month, day) => {
    const date = new Date(year, month, day)
    if (!isAvailable(date) && !isInEventRange(date)) {
      showToast('Please select an available event date')
      return
    }
    setSelectedDate(date)
    showToast('Date selected: ' + day + ' ' + monthNames[month] + ' ' + year)
  }

  const handleBook = () => {
    if (!selectedDate) { showToast('Please select a date from the calendar first!'); return }
    setShowModal(true)
  }

  const year = currentCalDate.getFullYear()
  const month = currentCalDate.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrevMonth = new Date(year, month, 0).getDate()

  const getDayClasses = (day) => {
    const date = new Date(year, month, day)
    let cls = 'calendar-day'
    if (isSameDate(date, selectedDate)) cls += ' selected'
    else if (isAvailable(date)) cls += ' available'
    else if (isInEventRange(date)) cls += ' selected'
    if (date < new Date().setHours(0,0,0,0)) cls += ' disabled'
    return cls
  }

  const prevDays = Array.from({length: firstDay}, (_, i) => daysInPrevMonth - firstDay + 1 + i)
  const nextDaysCount = 42 - (firstDay + daysInMonth)
  const nextDays = Array.from({length: nextDaysCount}, (_, i) => i + 1)

  return (
    <div className="lg:col-span-1">
      <div className="sticky-sidebar space-y-4">

        {/* Book Your Spot */}
        <div className="sidebar-card">
          <div className="flex items-center gap-2 mb-4">
            <i className="fas fa-ticket-alt text-kidrove-orange"></i>
            <h3 className="font-bold text-gray-900">Book Your Spot</h3>
          </div>

          <div className="flex justify-between items-end mb-2">
            <span className="text-sm text-gray-500">Starting from</span>
            <span className="text-3xl font-bold text-kidrove-green">₹2,999</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full mb-2 overflow-hidden">
            <div className="h-full bg-kidrove-green rounded-full" style={{width: '25%'}}></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mb-6">
            <span>18 seats left</span>
            <span>24 total seats</span>
          </div>

          {/* Calendar */}
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">Select Event Date</p>
            <p className="text-xs text-gray-500 mb-3">Event runs: 15 Jul – 12 Aug, 2026</p>

            <div className="calendar-container">
              <div className="calendar-header">
                <button className="calendar-nav" onClick={() => changeMonth(-1)}><i className="fas fa-chevron-left text-xs"></i></button>
                <span className="font-bold text-gray-800">{monthNames[month]} {year}</span>
                <button className="calendar-nav" onClick={() => changeMonth(1)}><i className="fas fa-chevron-right text-xs"></i></button>
              </div>
              <div className="calendar-grid">
                {dayNames.map((d, i) => <div key={i} className="calendar-day-header">{d}</div>)}
                {prevDays.map((d, i) => <div key={`p${i}`} className="calendar-day empty other-month">{d}</div>)}
                {Array.from({length: daysInMonth}, (_, i) => i + 1).map((day) => {
                  const cls = getDayClasses(day)
                  return (
                    <div key={`d${day}`} className={cls}
                      onClick={() => { if (!cls.includes('disabled')) selectDate(year, month, day) }}>
                      {day}
                    </div>
                  )
                })}
                {nextDays.map((d, i) => <div key={`n${i}`} className="calendar-day empty other-month">{d}</div>)}
              </div>
              <div className="calendar-legend">
                <div className="legend-item"><div className="legend-dot" style={{background: '#F5A623'}}></div><span>Event dates</span></div>
                <div className="legend-item"><div className="legend-dot" style={{background: '#FFF3E0', border: '1px solid #F5A623'}}></div><span>Available dates</span></div>
                <div className="legend-item"><div className="legend-dot" style={{background: 'white', border: '2px solid #F5A623'}}></div><span>Today</span></div>
                <div className="legend-item"><div className="legend-dot" style={{background: '#F0F0F0'}}></div><span>Unavailable</span></div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">2 dates available for booking</p>
            <p className="text-xs text-gray-400 mt-1">Select a highlighted date on the calendar to see available sessions.</p>
          </div>

          {/* Quantity */}
          <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-2">
              <i className="fas fa-ticket-alt text-kidrove-orange text-sm"></i>
              <span className="text-sm font-medium text-gray-700">Number of Tickets</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span className="font-bold text-lg w-6 text-center">{qty}</span>
              <button className="qty-btn" onClick={() => setQty(Math.min(5, qty + 1))}>+</button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4 py-3 border-t border-gray-100">
            <span className="font-bold text-gray-900">Total</span>
            <span className="text-2xl font-bold text-kidrove-green">₹{(qty * pricePerSeat).toLocaleString('en-IN')}</span>
          </div>

          <button onClick={handleBook} className={`select-session-btn ${selectedDate ? 'active' : ''}`}>
            <i className="far fa-calendar-check"></i>
            {selectedDate ? `Book Now for ${selectedDate.getDate()} ${monthNames[selectedDate.getMonth()]}` : 'Select a Session to Book'}
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-3">
            <i className="fas fa-lock"></i>
            <span>Secure booking • No charge until confirmed</span>
          </div>
        </div>

        {/* Event Details */}
        <div className="sidebar-card">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600"><i className="fas fa-file-alt text-sm"></i></div>
            <h3 className="font-bold text-gray-900">Event Details</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm"><span className="text-gray-500">Created</span><span className="font-medium text-gray-900">Jun 10, 2026</span></div>
            <div className="flex justify-between text-sm"><span className="text-gray-500">Last Updated</span><span className="font-medium text-gray-900">Jun 18, 2026</span></div>
            <div className="flex justify-between text-sm"><span className="text-gray-500">Event Type</span><span className="tag tag-blue text-xs">Workshop</span></div>
            <div className="flex justify-between text-sm"><span className="text-gray-500">Venue Type</span><span className="tag tag-green text-xs">Online</span></div>
            <div className="flex justify-between text-sm items-center">
              <span className="text-gray-500">Status</span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full">
                <i className="fas fa-check-circle text-xs"></i> published
              </span>
            </div>
          </div>
        </div>

        <div className="sidebar-card">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600"><i className="fas fa-building text-sm"></i></div>
            <h3 className="font-bold text-gray-900">Event Organizer</h3>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-kidrove-orange rounded-full flex items-center justify-center text-white font-bold text-lg">KR</div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">workshops@kidrove.com</p>
              <p className="text-xs text-gray-500">+91 98765 43210</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">Professional Event Organizer specializing in STEM workshops for children.</p>
          <div className="flex gap-2">
            <button className="flex-1 bg-kidrove-orange text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-kidrove-orangeDark transition">Contact</button>
            <button className="flex-1 border border-gray-300 text-gray-700 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-50 transition">View Profile</button>
          </div>
        </div>

      </div>
    </div>
  )
}
