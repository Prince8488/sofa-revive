// components/layout/legal/TermOfUseLayout.tsx
import React from 'react'

interface TermOfUseLayoutProps {
  title: string
  children: React.ReactNode
}

export default function TermOfUseLayout({
  title,
  children,
}: TermOfUseLayoutProps) {
  return (
    <div className="min-h-screen bg-white px-6 pb-20 pt-32">
      <div className="mx-auto max-w-4xl">
        <header className="mb-16 border-b border-slate-100 pb-10">
          <h1 className="text-4xl font-black uppercase italic leading-[0.9] tracking-tighter text-slate-900 md:text-6xl">
            {title}
          </h1>
          <div className="mt-6 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-gray-800" aria-hidden="true" />
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-800">
              DreamDecore Privacy Standards • 2026
            </p>
          </div>
        </header>

        <div
          className="print:prose-black prose prose-slate 
          max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:italic prose-headings:tracking-tight
          prose-headings:text-slate-900 prose-p:mb-8 prose-p:leading-relaxed
          prose-p:text-slate-600 prose-a:font-bold
          prose-a:text-gray-800 prose-a:no-underline hover:prose-a:underline prose-strong:font-black
          prose-strong:text-slate-950 prose-li:text-slate-600
          prose-li:marker:text-gray-800
          prose-hr:border-slate-100"
        >
          {children}
        </div>
      </div>
    </div>
  )
}
