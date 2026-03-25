"use client";

import React from "react";

interface PolicyProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function PolicyLayout({
  title,
  lastUpdated,
  children,
}: PolicyProps) {
  return (
    <article className="max-w-4xl mx-auto px-6 py-24 md:py-32">
      {/* 1. ACCESSIBILITY: Explicit Header for Screen Readers */}
      <header className="mb-16 border-b border-slate-100 pb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-slate-900 leading-[0.9]">
              {title}
            </h1>
            <div className="flex items-center gap-4">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                Effective: {lastUpdated}
              </p>
              {/* Decorative separator ignored by screen readers */}
              <span
                className="w-1 h-1 bg-slate-200 rounded-full"
                aria-hidden="true"
              />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">
                DreamDecore Legal
              </p>
            </div>
          </div>

          {/* 2. UTILITY: Print Button (Common for Legal Docs) */}
          <button
            onClick={() => window.print()}
            className="hidden md:block text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-slate-900 transition-colors border border-slate-200 px-4 py-2 rounded-lg active:scale-95"
          >
            Print PDF
          </button>
        </div>
      </header>

      {/* 3. PERFORMANCE: Tailored Typography Scale */}
      <div
        className="
          prose prose-slate prose-sm md:prose-base max-w-none 
          prose-headings:text-slate-900 
          prose-headings:uppercase 
          prose-headings:italic 
          prose-headings:font-black 
          prose-headings:tracking-tight
          prose-p:text-slate-600 
          prose-p:leading-relaxed
          prose-strong:text-blue-600 
          prose-strong:font-black
          prose-a:text-blue-600 
          prose-a:font-bold
          prose-a:no-underline 
          hover:prose-a:underline
          prose-li:marker:text-blue-500
          print:prose-black
        "
      >
        {children}
      </div>

      <footer className="mt-20 pt-10 border-t border-slate-100">
        <p className="text-xs text-slate-600 italic">
          Questions regarding these terms? Contact our team at{" "}
          <a
            href="mailto:legal@dreamdecore.com"
            className="text-blue-600 font-bold not-italic"
          >
            legal@dreamdecore.com
          </a>
        </p>
      </footer>
    </article>
  );
}
