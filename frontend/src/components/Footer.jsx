export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="kidrove-logo mb-4">
              <span className="k">K</span><span className="i">i</span><span className="d">d</span>
              <span className="r">r</span><span className="o">o</span><span className="v">v</span><span className="e">e</span>
            </div>
            <p className="text-gray-500 text-sm mb-4">Discover and book the best activities for your kids.</p>
            <div className="flex gap-2">
              {['facebook-f','instagram','twitter','youtube','linkedin-in'].map(icon => (
                <a key={icon} href="#" className="w-9 h-9 bg-kidrove-orange rounded-full flex items-center justify-center text-white hover:opacity-90 transition">
                  <i className={`fab fa-${icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {['About Us','Blog','Contact Us','Careers'].map(link => (
                <li key={link}><a href="#" className="hover:text-kidrove-orange transition">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {['Afterschool Activities','Arts and Crafts','Baby & Toddler','STEM Workshops'].map(link => (
                <li key={link}><a href="#" className="hover:text-kidrove-orange transition">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Newsletter</h4>
            <p className="text-sm text-gray-500 mb-3">Subscribe for updates on new activities and promotions.</p>
            <div className="flex">
              <input type="email" placeholder="Enter your email" className="form-input rounded-r-none border-r-0 flex-1" />
              <button className="bg-kidrove-orange text-white px-4 rounded-r-lg hover:bg-kidrove-orangeDark transition">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 text-center text-sm text-gray-500">
          © 2026 Kidrove. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
