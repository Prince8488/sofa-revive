'use client'

import React from 'react'

interface PolicyProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export default function PolicyLayout({
  title,
  lastUpdated,
  children,
}: PolicyProps) {
  return (
    <article className="mx-auto max-w-4xl px-6 py-24 md:py-32">
      {/* 1. ACCESSIBILITY: Explicit Header for Screen Readers */}
      <header className="mb-16 border-b border-slate-100 pb-10">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="space-y-4">
            <h1
              className="text-4xl font-black uppercase italic leading-[0.9] tracking-tighter text-slate-900 md:text-6xl"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              {title}
            </h1>
            <div className="flex items-center gap-4">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                Effective: {lastUpdated}
              </p>
              {/* Decorative separator ignored by screen readers */}
              <span
                className="h-1 w-1 rounded-full bg-slate-200"
                aria-hidden="true"
              />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-800">
                DreamDecore Legal
              </p>
            </div>
          </div>

          {/* 2. UTILITY: Print Button (Common for Legal Docs) */}
          <button
            onClick={() => window.print()}
            className="hidden rounded-lg border border-slate-200 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-600 transition-colors hover:text-slate-900 active:scale-95 md:block"
          >
            Print PDF
          </button>
        </div>
      </header>

      {/* 3. PERFORMANCE: Tailored Typography Scale */}
      <div
        className="
          print:prose-black prose prose-sm prose-slate max-w-none 
          md:prose-base 
          prose-headings:font-black 
          prose-headings:uppercase 
          prose-headings:italic 
          prose-headings:tracking-tight
          prose-headings:text-slate-900 
          prose-p:leading-relaxed
          prose-p:text-slate-600 
          prose-a:font-bold
          prose-a:text-gray-800 
          prose-a:no-underline
          hover:prose-a:underline 
          prose-strong:font-black
          prose-strong:text-gray-800
          prose-li:marker:text-gray-800
        "
      >
        {children}
      </div>

      <footer className="mt-20 border-t border-slate-100 pt-10">
        <p className="text-xs italic text-slate-600">
          Questions regarding these terms? Contact our team at{' '}
          <a
            href="mailto:legal@dreamdecore.com"
            className="font-bold not-italic text-gray-800"
          >
            legal@dreamdecore.com
          </a>
        </p>
      </footer>
    </article>
  )
}
