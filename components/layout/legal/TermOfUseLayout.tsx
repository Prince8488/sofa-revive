// components/layout/legal/TermOfUseLayout.tsx
import React from "react";

export default function TermOfUseLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 border-b border-slate-100 pb-10">
          <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-slate-900 leading-[0.9]">
            {title}
          </h1>
          <div className="mt-6 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-blue-600" aria-hidden="true" />
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
              DreamDecore Privacy Standards • 2026
            </p>
          </div>
        </header>

        <div
          className="prose prose-slate max-w-none 
          prose-headings:text-slate-900 prose-headings:uppercase prose-headings:italic prose-headings:font-black prose-headings:tracking-tight
          prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-8
          prose-strong:text-slate-950 prose-strong:font-black
          prose-a:text-blue-600 prose-a:font-bold prose-a:no-underline hover:prose-a:underline
          prose-li:marker:text-blue-600 prose-li:text-slate-600
          prose-hr:border-slate-100
          print:prose-black"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
