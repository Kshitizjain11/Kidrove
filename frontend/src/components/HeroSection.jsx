export default function HeroSection() {
  const infoCards = [
    { icon: 'fas fa-calendar-alt', color: 'bg-orange-100 text-orange-600', title: '15 Jul – 12 Aug, 2026', label: 'Date Range' },
    { icon: 'fas fa-video', color: 'bg-blue-100 text-blue-600', title: 'Online', label: 'Teaching Mode' },
    { icon: 'fas fa-child', color: 'bg-green-100 text-green-600', title: '8–14 years', label: 'Age Group' },
    { icon: 'fas fa-robot', color: 'bg-purple-100 text-purple-600', title: 'AI & Robotics', label: 'Subject' },
  ]

  const topicTags = ['#ai','#robotics','#workshop','#coding','#machinelearning','#stem','#fun','#learning','#kids','#python','#scratch','#innovation']
  const topicColors = ['tag-orange','tag-blue','tag-green','tag-purple','tag-pink','tag-gray','tag-orange','tag-blue','tag-green','tag-purple','tag-pink','tag-gray']

  const insights = [
    { label: 'Views', value: '128', icon: 'fas fa-eye', color: 'bg-orange-100 text-orange-600' },
    { label: 'Seats', value: '24', icon: 'fas fa-users', color: 'bg-blue-100 text-blue-600' },
    { label: 'Available', value: '18', icon: 'fas fa-check-circle', color: 'bg-green-100 text-green-600' },
  ]

  return (
    <>
      <div className="flex flex-wrap">
        <span className="tag tag-orange"><i className="fas fa-campground mr-1.5 text-xs"></i>courses-camps-workshops</span>
        <span className="tag tag-green"><i className="fas fa-wifi mr-1.5 text-xs"></i>Online</span>
        <span className="tag tag-pink"><i className="fas fa-star mr-1.5 text-xs"></i>Featured</span>
        <span className="tag tag-blue">Workshop</span>
        <span className="tag tag-gray"><i className="fas fa-check-circle mr-1.5 text-xs"></i>Published</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
        AI & Robotics Summer Workshop
      </h1>

      <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm group">
        <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop" alt="AI & Robotics Workshop" className="w-full h-80 object-cover" />
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-gray-600 hover:text-kidrove-orange transition shadow-sm">
            <i className="fas fa-share-alt"></i>
          </button>
          <button className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 transition shadow-sm">
            <i className="fas fa-heart"></i>
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
          <p className="text-white font-semibold text-lg">Build robots, train AI models, and create the future!</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {infoCards.map((card, i) => (
          <div key={i} className="info-card">
            <div className={`info-icon ${card.color}`}><i className={card.icon}></i></div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{card.title}</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">{card.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-6 border border-gray-200">
        <div className="section-title"><div className="section-title-bar"></div>What you'll learn</div>
        <p className="text-gray-600 leading-relaxed">
          Step into the exciting world of artificial intelligence and robotics! In this hands-on workshop, students will build real robots, train AI models, and create intelligent machines from scratch.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-gray-200">
        <div className="section-title"><i className="fas fa-tag text-kidrove-orange"></i> Topics</div>
        <div className="flex flex-wrap">
          {topicTags.map((tag, i) => (
            <span key={i} className={`tag ${topicColors[i]}`}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-gray-200">
        <div className="section-title"><i className="fas fa-chart-bar text-kidrove-orange"></i> Class Insights</div>
        <div className="grid grid-cols-3 gap-6">
          {insights.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{stat.label}</p>
              <div className="flex items-center justify-center gap-3">
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <i className={stat.icon}></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
