import { Search } from 'lucide-react'
import { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState('')

  function submit(e) {
    e.preventDefault()
    onSearch?.(value)
  }

  return (
    <form onSubmit={submit} className="px-5 pb-2">
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-800/70">
          <Search className="h-5 w-5" />
        </div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm text-emerald-900 placeholder-emerald-800/50 shadow-[0_3px_12px_rgba(16,94,70,0.15)] ring-1 ring-emerald-900/10 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60"
          placeholder="ابحث عن أنماط وزخارف… Search prompts"
        />
      </div>
    </form>
  )
}
