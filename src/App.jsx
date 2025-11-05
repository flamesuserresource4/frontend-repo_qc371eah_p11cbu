import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ActionPanel from './components/ActionPanel'
import ArtisanIcons from './components/ArtisanIcons'

function App() {
  const handleSearch = (q) => {
    if (!q) return
    alert(`Searching inspirations for: ${q}`)
  }
  const handleImage = () => alert('Generate Image: Coming soon in this demo')
  const handleVideo = () => alert('Generate Video: Coming soon in this demo')

  const paperTexture = {
    backgroundImage: [
      'radial-gradient(1200px 600px at 10% -10%, rgba(255,255,255,0.7), rgba(255,255,255,0))',
      'radial-gradient(1200px 600px at 110% 0%, rgba(255,255,255,0.5), rgba(255,255,255,0))',
      'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,0.03) 100%)',
    ].join(','),
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-200 flex items-center justify-center p-4">
      <div className="relative w-full max-w-sm rounded-[32px] shadow-[0_20px_60px_rgba(16,94,70,0.25)] ring-1 ring-emerald-900/10 overflow-hidden" style={{background: 'linear-gradient(180deg, #fbf7ea 0%, #f6f0df 100%)'}}>
        <div className="absolute inset-0 pointer-events-none" style={paperTexture} />
        {/* Golden shine */}
        <div className="absolute -top-20 -left-16 h-64 w-64 rounded-full bg-[#d4af37]/30 blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-emerald-600/30 blur-3xl opacity-30 pointer-events-none" />

        {/* Elegant calligraphy pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg viewBox="0 0 600 1200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="calli" width="120" height="120" patternUnits="userSpaceOnUse" patternTransform="rotate(-12)">
                <path d="M20 80c24-18 52-18 80 2M10 40c16-16 36-20 60-8M70 100c10-14 28-18 40-6" fill="none" stroke="#916f1f" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M30 30c10 6 16 12 14 24" fill="none" stroke="#0f5132" strokeOpacity="0.8" strokeWidth="1" strokeLinecap="round" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#calli)" />
          </svg>
        </div>

        <Header />
        <SearchBar onSearch={handleSearch} />
        <ActionPanel onImage={handleImage} onVideo={handleVideo} />
        <ArtisanIcons />

        <div className="px-5 pb-6 pt-1">
          <div className="rounded-2xl p-4 bg-white/70 backdrop-blur-sm ring-1 ring-emerald-900/10 shadow-[0_6px_20px_rgba(16,94,70,0.12)]">
            <p className="text-sm text-emerald-900/80 leading-relaxed">
              The interface embraces handcrafted aesthetics — soft shadows, natural gradients, and paper-like texture. Golden accents and emerald tones echo traditional artistry while supporting modern creative workflows.
            </p>
          </div>
          <div className="text-[11px] text-emerald-900/50 text-center mt-3">Noor AI • Crafted for artists and video makers</div>
        </div>
      </div>
    </div>
  )
}

export default App
