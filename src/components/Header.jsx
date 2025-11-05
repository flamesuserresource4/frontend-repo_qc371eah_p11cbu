import { Sparkles } from 'lucide-react'

export default function Header() {
  return (
    <div className="w-full pt-6 pb-4 px-5">
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 rounded-2xl bg-emerald-600/90 shadow-[inset_0_2px_8px_rgba(0,0,0,0.25)] ring-2 ring-[#d4af37]/80">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/40 to-emerald-900/20" />
          <div className="absolute inset-0 flex items-center justify-center text-[#f7e6b5] font-semibold text-xl tracking-wide" style={{fontFamily:'"IBM Plex Sans", system-ui'}}>نور</div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold text-emerald-900">Noor AI</h1>
            <Sparkles className="h-4 w-4 text-[#d4af37]" />
          </div>
          <p className="text-sm text-emerald-800/70">Islamic image & video generator</p>
        </div>
      </div>
    </div>
  )
}
