export default function Navbar() {
  return (
    <nav className="bg-kidrove-orange sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <a href="#" className="kidrove-logo text-white">
              <span className="k">K</span><span className="i">i</span><span className="d">d</span>
              <span className="r">r</span><span className="o">o</span><span className="v">v</span><span className="e">e</span>
            </a>
            <div className="hidden md:flex items-center space-x-6 text-white/90 text-sm font-medium">
              <a href="#" className="hover:text-white transition">Find Activities</a>
              <a href="#" className="hover:text-white transition">Blog</a>
              <a href="#" className="hover:text-white transition">Kidrove Go</a>
              <a href="#" className="hover:text-white transition">FAQ</a>
              <a href="#" className="hover:text-white transition">Get In Touch</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition">
              <i className="fas fa-search text-sm"></i>
            </button>
            <button className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition">
              <i className="fas fa-heart text-sm"></i>
            </button>
            <button className="bg-white text-kidrove-orange px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition flex items-center gap-2">
              <i className="fas fa-user text-xs"></i> Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
