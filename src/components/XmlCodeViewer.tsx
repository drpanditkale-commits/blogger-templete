import React, { useState, useMemo } from 'react';
import { Download, Copy, Check, Search, FileCode, Sparkles } from 'lucide-react';

interface XmlCodeViewerProps {
  xmlContent: string;
  onDownload: () => void;
}

export const XmlCodeViewer: React.FC<XmlCodeViewerProps> = ({ xmlContent, onDownload }) => {
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const lines = useMemo(() => xmlContent.split('\n'), [xmlContent]);
  const fileSizeKb = useMemo(() => (new Blob([xmlContent]).size / 1024).toFixed(1), [xmlContent]);

  const handleCopy = () => {
    navigator.clipboard.writeText(xmlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const jumpToText = (term: string) => {
    setSearchQuery(term);
    const element = document.getElementById(`xml-line-${term}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="space-y-4 max-w-5xl mx-auto">
      {/* Top Action Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <FileCode className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              output.xml - Blogger Template Source
            </h2>
            <span className="text-[11px] font-mono bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 px-2 py-0.5 rounded border border-teal-200 dark:border-teal-800">
              {lines.length} Lines · {fileSizeKb} KB
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Complete, valid Blogger Layout v3 XML file ready to upload directly into Blogger.
          </p>
        </div>

        <div className="flex items-center gap-2.5 w-full md:w-auto">
          <button
            onClick={handleCopy}
            className="flex-1 md:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied XML!' : 'Copy to Clipboard'}
          </button>

          <button
            onClick={onDownload}
            className="flex-1 md:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-teal-600 hover:bg-teal-500 text-white transition-colors cursor-pointer shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            Download output.xml
          </button>
        </div>
      </div>

      {/* Quick Jump Anchors */}
      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
        <span className="font-semibold text-slate-700 dark:text-slate-300">Quick Jumps:</span>
        {[
          { label: 'AdSense Slots', term: 'adsbygoogle' },
          { label: 'Schema.org JSON-LD', term: 'application/ld+json' },
          { label: 'CSS Variables', term: ':root {' },
          { label: 'Header Ad', term: 'header-ad' },
          { label: 'Table of Contents', term: 'toc-container' },
          { label: 'Vanilla JS Core', term: 'themeToggleBtn' },
        ].map((item) => (
          <button
            key={item.label}
            onClick={() => jumpToText(item.term)}
            className="px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800 hover:border-teal-500 bg-white dark:bg-slate-900 text-[11px] font-mono cursor-pointer transition-colors"
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Search Filter Input */}
      <div className="relative">
        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Filter or search lines in XML (e.g. pub-, schema, b:skin, adsbygoogle)..."
          className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
          >
            Clear
          </button>
        )}
      </div>

      {/* Code Container */}
      <div className="rounded-xl border border-slate-800 bg-[#0b0f17] overflow-hidden shadow-md">
        <div className="px-4 py-2 bg-slate-900/90 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
          <span>output.xml (Blogger Theme Definition)</span>
          <span>UTF-8 · XML / HTML5</span>
        </div>

        <div className="max-h-[650px] overflow-auto p-4 font-mono text-xs leading-relaxed text-slate-300">
          <pre className="relative">
            {lines.map((line, idx) => {
              const lineNum = idx + 1;
              const matchesSearch = searchQuery && line.toLowerCase().includes(searchQuery.toLowerCase());
              return (
                <div
                  key={lineNum}
                  id={matchesSearch ? `xml-line-${searchQuery}` : undefined}
                  className={`flex items-start hover:bg-slate-800/40 py-0.5 px-1 rounded ${
                    matchesSearch ? 'bg-amber-950/60 text-amber-200 font-bold' : ''
                  }`}
                >
                  <span className="w-12 text-slate-600 select-none text-right pr-4 text-[11px] shrink-0 font-mono">
                    {lineNum}
                  </span>
                  <span className="break-all whitespace-pre-wrap flex-1">
                    {line}
                  </span>
                </div>
              );
            })}
          </pre>
        </div>
      </div>
    </div>
  );
};
