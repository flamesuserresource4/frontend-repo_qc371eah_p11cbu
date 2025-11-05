import { Moon, BookOpen } from 'lucide-react'

function MosqueIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff4cf" />
          <stop offset="1" stopColor="#f0d88f" />
        </linearGradient>
      </defs>
      <path d="M14 52V36c0-6 10-10 18-10s18 4 18 10v16" stroke="url(#g)" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 10c4 2 8 7 8 12 0 5-3 8-8 8s-8-3-8-8c0-5 4-10 8-12Z" stroke="url(#g)" strokeWidth="3" />
      <path d="M8 28c2-2 4-3 6-4M56 28c-2-2-4-3-6-4" stroke="url(#g)" strokeWidth="3" strokeLinecap="round" />
      <path d="M26 52v-8a6 6 0 0 1 12 0v8" stroke="url(#g)" strokeWidth="3" />
    </svg>
  )
}

export default function ArtisanIcons() {
  const circle = 'rounded-full ring-1 ring-black/10 shadow-[inset_0_2px_6px_rgba(0,0,0,0.15),0_6px_18px_rgba(16,94,70,0.15)] bg-white/80 backdrop-blur-sm'
  return (
    <div className="px-5 pt-1 pb-5">
      <div className="flex items-center justify-between">
        <div className={`h-16 w-16 ${circle} flex items-center justify-center rotate-[-2deg]`}>
          <div className="h-12 w-12 rounded-full bg-emerald-600/15 ring-1 ring-emerald-900/20 flex items-center justify-center">
            <Moon className="h-7 w-7 text-emerald-800" />
          </div>
        </div>
        <div className={`h-16 w-16 ${circle} flex items-center justify-center rotate-[1.5deg]`}>
          <div className="h-12 w-12 rounded-full bg-[#d4af37]/15 ring-1 ring-[#a88b2c]/30 flex items-center justify-center">
            <MosqueIcon className="h-8 w-8" />
          </div>
        </div>
        <div className={`h-16 w-16 ${circle} flex items-center justify-center rotate-[3deg]`}>
          <div className="h-12 w-12 rounded-full bg-emerald-600/15 ring-1 ring-emerald-900/20 flex items-center justify-center">
            <BookOpen className="h-7 w-7 text-emerald-800" />
          </div>
        </div>
      </div>
    </div>
  )
}
