import { Image as ImageIcon, Video, ChevronRight } from 'lucide-react'

export default function ActionPanel({ onImage, onVideo }) {
  return (
    <div className="px-5 py-3 grid grid-cols-2 gap-3">
      <button
        onClick={onImage}
        className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-[#fbf3d0] shadow-[0_10px_30px_rgba(16,94,70,0.35)] ring-1 ring-emerald-900/20 active:scale-[0.99] transition"
      >
        <div className="absolute inset-0 opacity-30" style={{backgroundImage:'radial-gradient(120px 60px at 20% 10%, rgba(255,255,255,0.35), transparent), radial-gradient(180px 100px at 80% 0%, rgba(255,255,255,0.2), transparent)'}} />
        <div className="flex items-center justify-between p-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/15 flex items-center justify-center ring-1 ring-white/30">
              <ImageIcon className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold">Generate Image</div>
              <div className="text-xs text-emerald-50/80">Calligraphy, patterns, motifs</div>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-[#f7e6b5] opacity-80 group-hover:translate-x-0.5 transition" />
        </div>
      </button>

      <button
        onClick={onVideo}
        className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#f1d58a] to-[#d4af37] text-emerald-900 shadow-[0_10px_30px_rgba(212,175,55,0.35)] ring-1 ring-[#a88b2c]/30 active:scale-[0.99] transition"
      >
        <div className="absolute inset-0 opacity-30" style={{backgroundImage:'radial-gradient(120px 60px at 20% 10%, rgba(255,255,255,0.35), transparent), radial-gradient(180px 100px at 80% 0%, rgba(255,255,255,0.2), transparent)'}} />
        <div className="flex items-center justify-between p-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-900/10 flex items-center justify-center ring-1 ring-emerald-900/20">
              <Video className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold">Generate Video</div>
              <div className="text-xs text-emerald-900/70">Motion, scenes, storytelling</div>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-emerald-900/70 opacity-80 group-hover:translate-x-0.5 transition" />
        </div>
      </button>
    </div>
  )
}
