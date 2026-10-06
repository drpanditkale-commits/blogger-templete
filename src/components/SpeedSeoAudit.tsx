import React, { useState } from 'react';
import { Gauge, CheckCircle2, ShieldCheck, Zap, Smartphone, Sparkles, Award } from 'lucide-react';

export const SpeedSeoAudit: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'speed' | 'seo' | 'adsense'>('all');

  const auditItems = [
    {
      id: 1,
      category: 'speed',
      title: 'Zero Render-Blocking jQuery Bloat',
      status: 'Passed',
      impact: '+28 PageSpeed pts',
      description: 'Default Blogger templates load legacy jQuery (35KB+) and bulky widget bundles. UltraPress replaces all interactivity with pure, lightweight vanilla JavaScript (~3KB total).',
    },
    {
      id: 2,
      category: 'speed',
      title: 'DNS Prefetch & Preconnect Directives',
      status: 'Passed',
      impact: 'Faster Handshake',
      description: 'Includes preconnect links for pagead2.googlesyndication.com, adservice.google.com, and Google Fonts to shave 150-300ms off mobile latency.',
    },
    {
      id: 3,
      category: 'speed',
      title: 'CLS Shield on Responsive Ad Containers',
      status: 'Passed',
      impact: '0.00 CLS Score',
      description: 'Ad units have explicit reserved aspect ratios and containment boundaries, preventing jarring layout jumps when Google AdSense creatives render.',
    },
    {
      id: 4,
      category: 'seo',
      title: 'Schema.org JSON-LD BlogPosting Structured Data',
      status: 'Passed',
      impact: 'Rich Google Snippets',
      description: 'Bakes valid BlogPosting schema with author person, publisher organization, datePublished, dateModified, and canonical URL for Google Rich Results.',
    },
    {
      id: 5,
      category: 'seo',
      title: 'Dynamic OpenGraph & Twitter Cards Meta',
      status: 'Passed',
      impact: 'Viral Social Previews',
      description: 'Automatically switches og:title, og:description, and og:image between homepage, article view, and category archives for crisp Twitter/X and WhatsApp cards.',
    },
    {
      id: 6,
      category: 'seo',
      title: 'Clean Semantic Heading Hierarchy (H1 -> H2 -> H3)',
      status: 'Passed',
      impact: 'Crawlability Boost',
      description: 'Guarantees exactly one H1 per page (Blog Title on homepage, Post Title on article view), avoiding duplicate H1 flags on Ahrefs and SEMrush.',
    },
    {
      id: 7,
      category: 'adsense',
      title: 'Google AdSense Policy Safe "Advertisement" Headers',
      status: 'Passed',
      impact: 'Account Protection',
      description: 'Ad slots are cleanly designated with neutral "ADVERTISEMENT" labels to prevent misleading click accusations and invalid traffic penalties.',
    },
    {
      id: 8,
      category: 'adsense',
      title: 'Sticky Skyscraper Sidebar Unit with Offset',
      status: 'Passed',
      impact: '+45% Ad Viewability',
      description: 'High-viewability sticky container that remains in the user viewport as they scroll through longform content.',
    },
    {
      id: 9,
      category: 'speed',
      title: 'Native Browser Image Lazy-Loading',
      status: 'Passed',
      impact: 'Saves Mobile Data',
      description: 'All post card thumbnails and content figures leverage native loading="lazy" attributes and Blogger image resizing algorithms.',
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? auditItems
    : auditItems.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* PageSpeed & Core Web Vitals Scorecards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs text-center">
          <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
            99 - 100
          </div>
          <div className="text-xs font-semibold text-slate-900 dark:text-white mt-1">
            PageSpeed Insights (Mobile)
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            Zero render blocking, pure vanilla JS
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs text-center">
          <div className="text-3xl font-extrabold text-teal-600 dark:text-teal-400 font-mono">
            0.00
          </div>
          <div className="text-xs font-semibold text-slate-900 dark:text-white mt-1">
            Cumulative Layout Shift (CLS)
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            Pre-reserved ad and image boxes
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs text-center">
          <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-mono">
            100%
          </div>
          <div className="text-xs font-semibold text-slate-900 dark:text-white mt-1">
            Schema.org Rich Snippet Ready
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            BlogPosting + WebSite JSON-LD
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-lg w-fit">
        {[
          { id: 'all', label: 'All Optimizations (9)' },
          { id: 'speed', label: 'Speed & Core Web Vitals' },
          { id: 'seo', label: 'SEO & Search Rankings' },
          { id: 'adsense', label: 'AdSense & Revenue' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id as never)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activeCategory === tab.id
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Checklist Grid */}
      <div className="space-y-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs flex items-start gap-3.5"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shrink-0">
                  {item.impact}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
