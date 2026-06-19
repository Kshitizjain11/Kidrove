import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    { q: 'What equipment does my child need for this online workshop?', a: 'All you need is a laptop/desktop with a stable internet connection. We provide a robotics kit that will be shipped to your address before the workshop begins. No prior coding experience is required!' },
    { q: 'How are the online classes conducted?', a: 'Classes are held live via Zoom with small batch sizes (max 12 students) to ensure personalized attention. Each session includes interactive demos, hands-on building time, and Q&A. Recordings are available for missed classes.' },
    { q: 'Is there a refund policy?', a: 'Yes! We offer a full refund if you cancel within 7 days of the start date. After the workshop begins, we offer prorated refunds based on attendance. Your satisfaction and your child`;s learning experience are our top priorities.' },
    { q: 'Will my child receive a certificate?', a: 'Absolutely! Every child who completes the workshop receives a verified digital certificate of completion. Outstanding projects may also receive a "Young Innovator" badge.' },
    { q: 'What is the class schedule?', a: 'Classes run Monday to Friday, 10:00 AM – 12:00 PM IST.' },
  ]

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <div className="section-title">
        <i className="fas fa-question-circle text-kidrove-orange"></i> Frequently Asked Questions
      </div>
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item ${i === faqs.length - 1 ? 'border-b-0' : ''}`}>
          <div className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
            <span>{faq.q}</span>
            <i className={`fas fa-chevron-down faq-icon ${openIndex === i ? 'rotated' : ''}`}></i>
          </div>
          <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
            <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
