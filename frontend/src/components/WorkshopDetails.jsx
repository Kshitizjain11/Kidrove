import { useState } from 'react'

import {buildItems,features,outcomes,learnItems,ratings} from "../data/WorkshopDetails.js"

export default function WorkshopDetails() {
  
  const [activeTab, setActiveTab] = useState('about')

  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="flex border-b border-gray-200 px-6">
          <button className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>About</button>
          <button className={`tab-btn ${activeTab === 'location' ? 'active' : ''}`} onClick={() => setActiveTab('location')}>Location</button>
        </div>

        {activeTab === 'about' ? (
          <div className="p-6">
            <h3 className="text-xl font-bold text-kidrove-orange mb-4">About This Event</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Step into the exciting world of artificial intelligence and robotics! In this interactive workshop, students will design, build, and program their very own intelligent robots while learning the fundamentals of AI and machine learning.
            </p>

            <div className="relative rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-blue-600 to-purple-700">
              <div className="absolute inset-0 opacity-20"></div>
              <div className="relative p-8 text-center text-white">
                <p className="text-sm font-semibold tracking-widest uppercase mb-2 opacity-80">Workshop</p>
                <h4 className="text-2xl font-bold mb-3">🤖 AI & Robotics Summer Workshop</h4>
                <p className="text-white/90 max-w-lg mx-auto">Learn coding by building intelligent robots and training AI models. Become a young tech innovator!</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              No prior coding experience is required. Our expert instructors guide every child through the journey from beginner to creator. By the end of 4 weeks, students will have built multiple AI-powered projects they can proudly showcase.
            </p>

            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <i className="fas fa-robot text-gray-700"></i> What Students Will Build
            </h4>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {buildItems.map((item, i) => (
                <div key={i} className={`flex gap-3 p-4 bg-gray-50 rounded-xl border-l-4 ${item.border}`}>
                  <span className="text-xl">{item.emoji}</span>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6 flex gap-3">
              <span className="text-xl">✨</span>
              <p className="text-sm text-gray-700 italic">By the end of the workshop, students will have a fully functional AI project and robot that they can customize and continue improving on their own.</p>
            </div>

            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <i className="fas fa-rocket text-gray-700"></i> What Students Will Learn
            </h4>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {learnItems.map((item, i) => (
                <div key={i} className="learn-card">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{item.emoji}</span>
                    <h5 className="font-bold text-gray-900">{item.title}</h5>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-6 border-l-4 border-kidrove-orange">
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-xl">🎯</span> Learning Outcomes
              </h4>
              <p className="text-sm text-gray-600 mb-4">After completing this workshop, students will be able to:</p>
              <div className="space-y-1">
                {outcomes.map((outcome, i) => (
                  <div key={i} className="outcome-item">{outcome}</div>
                ))}
              </div>
            </div>

            <div className="border-2 border-dashed border-kidrove-orange rounded-xl p-6 flex items-start gap-4 mb-6 bg-orange-50/30">
              <div className="text-4xl">🏅</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Participation Certificate</h4>
                <p className="text-sm text-gray-600">Every participant receives an official <strong>AI & Robotics Summer Workshop Participation Certificate</strong> upon successful completion of the live track.</p>
              </div>
            </div>

            <div className="gradient-cta">
              <h3 className="text-2xl font-bold mb-2">Ready to Become a Tech Innovator?</h3>
              <p className="text-white/90 mb-4">Join us and discover how coding, creativity, and imagination can come together to build amazing AI projects!</p>
              <p className="text-lg font-bold tracking-wider">🚀 IMAGINE. CODE. BUILD. CREATE.</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <h4 className="text-kidrove-orange font-bold mb-3 flex items-center gap-2">
                <i className="fas fa-calendar"></i> Event Schedule
              </h4>
              <div className="flex items-center gap-3 mb-2">
                <i className="far fa-calendar text-gray-400"></i>
                <span className="font-semibold text-gray-900">15 Jul – 12 Aug, 2026</span>
              </div>
              <p className="text-sm text-gray-500 ml-7">Classes run Monday–Friday, 10:00 AM – 12:00 PM IST.</p>
            </div>

            <div className="mb-6">
              <h4 className="text-kidrove-orange font-bold mb-3 flex items-center gap-2">
                <i className="fas fa-star"></i> Event Features
              </h4>
              <div className="grid md:grid-cols-2 gap-2">
                {features.map((feature, i) => (
                  <div key={i} className="feature-check">
                    <i className="fas fa-check-circle"></i>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-kidrove-orange font-bold mb-4 flex items-center gap-2">
                <i className="fas fa-info-circle"></i> Additional Information
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Age Range</p>
                  <p className="font-semibold text-gray-900">8–14 years</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Capacity</p>
                  <p className="font-semibold text-gray-900">24 students per batch</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Duration</p>
                  <p className="font-semibold text-gray-900">4 Weeks</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Mode</p>
                  <p className="font-semibold text-gray-900">Online Live Classes</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <h3 className="text-xl font-bold text-kidrove-orange mb-4">Location</h3>
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <i className="fas fa-map-marker-alt text-4xl mb-2"></i>
                <p>This is an online workshop.</p>
                <p className="text-sm">Join from anywhere with a stable internet connection!</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-2xl p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">What People Are Saying</h3>
        <div className="flex items-center gap-3 mb-4">
          <i className="fas fa-star text-yellow-400 text-2xl"></i>
          <span className="text-3xl font-bold text-gray-900">4.8</span>
          <span className="text-gray-500 text-sm">(24 reviews)</span>
        </div>
        <div className="space-y-2 mb-6">
          {ratings.map((r, i) => (
            <div key={i} className="flex items-center text-sm">
              <span className="w-12 text-gray-600">{r.stars}</span>
              <div className="review-bar"><div className="review-fill" style={{width: r.width}}></div></div>
              <span className="w-12 text-right text-gray-500">{r.pct}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 pt-4">
          <p className="font-semibold text-gray-900 mb-3">Share your experience in one line</p>
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <p className="text-gray-600 text-sm mb-3">Please login to submit a review</p>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition">
              Login to Review
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
