import React, { useState } from 'react';
import { ThemeConfig } from '../theme/bloggerXmlGenerator';
import { Monitor, Tablet, Smartphone, Sun, Moon, ArrowRight, Share2, Check, Copy } from 'lucide-react';

interface ThemePreviewProps {
  config: ThemeConfig;
}

export const ThemePreview: React.FC<ThemePreviewProps> = ({ config }) => {
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [pageType, setPageType] = useState<'home' | 'post'>('post');
  const [previewDark, setPreviewDark] = useState<boolean>(config.defaultDarkMode);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showToc, setShowToc] = useState(true);

  const containerMaxWidth =
    viewport === 'desktop' ? '100%' : viewport === 'tablet' ? '768px' : '375px';

  const fontStyle = config.fontFamily === 'Lora'
    ? 'font-serif'
    : 'font-sans';

  const sampleArticles = [
    {
      id: 1,
      title: 'How to Maximize Google AdSense Revenue with Fast Core Web Vitals',
      category: 'Monetization',
      date: 'Oct 04, 2026',
      readTime: '5 min read',
      snippet: 'Discover strategic ad placement techniques, lazy loading ad slots, and reducing layout shifts for improved CPM and RPM metrics.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=338&fit=crop&q=80',
    },
    {
      id: 2,
      title: 'Complete Guide to Blogger Schema.org JSON-LD Structured Data',
      category: 'SEO',
      date: 'Oct 02, 2026',
      readTime: '6 min read',
      snippet: 'Implement rich snippet markup for BlogPosting, Article, and BreadcrumbList without relying on third-party plugins.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=338&fit=crop&q=80',
    },
    {
      id: 3,
      title: 'Building a 100/100 PageSpeed Responsive Blogger Layout in 2026',
      category: 'Web Dev',
      date: 'Sep 29, 2026',
      readTime: '4 min read',
      snippet: 'Remove jQuery bloat, optimize critical CSS path, and use modern CSS container queries for instantaneous load times.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=338&fit=crop&q=80',
    },
    {
      id: 4,
      title: 'Next-Generation Content Monetization: AdSense Auto Ads vs Manual Units',
      category: 'AdSense',
      date: 'Sep 25, 2026',
      readTime: '7 min read',
      snippet: 'Comparing machine learning auto placement against targeted responsive leaderboards and sticky skyscrapers.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=338&fit=crop&q=80',
    },
  ];

  return (
    <div className="space-y-4">
      {/* Top Preview Controls Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 flex flex-wrap items-center justify-between gap-3 shadow-xs">
        {/* Device Switcher */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
          <button
            onClick={() => setViewport('desktop')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
              viewport === 'desktop'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            Desktop
          </button>
          <button
            onClick={() => setViewport('tablet')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
              viewport === 'tablet'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
            Tablet (768px)
          </button>
          <button
            onClick={() => setViewport('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
              viewport === 'mobile'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            Mobile (375px)
          </button>
        </div>

        {/* Page Switcher */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium hidden sm:inline">Preview Page:</span>
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
            <button
              onClick={() => setPageType('post')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                pageType === 'post'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Single Article (High CTR)
            </button>
            <button
              onClick={() => setPageType('home')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                pageType === 'home'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Homepage Grid
            </button>
          </div>
        </div>

        {/* Mode Toggle */}
        <button
          onClick={() => setPreviewDark(!previewDark)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
        >
          {previewDark ? <Sun className="w-3.5 h-3.5 text-amber-500" /> : <Moon className="w-3.5 h-3.5 text-slate-600" />}
          {previewDark ? 'Light Theme' : 'Dark Theme'}
        </button>
      </div>

      {/* Frame Container */}
      <div className="bg-slate-100 dark:bg-slate-950/70 p-2 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex justify-center overflow-x-auto min-h-[700px]">
        <div
          style={{ width: containerMaxWidth }}
          className={`transition-all duration-300 rounded-xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col ${
            previewDark ? 'bg-[#0b0f17] text-slate-100' : 'bg-slate-50 text-slate-900'
          } ${fontStyle}`}
        >
          {/* Simulated Reading Progress */}
          {config.enableReadingProgress && (
            <div
              className="h-1 w-2/5 transition-all duration-300"
              style={{ backgroundColor: config.primaryColor }}
            />
          )}

          {/* Theme Header */}
          <header className={`px-4 sm:px-6 py-3.5 border-b flex items-center justify-between transition-colors ${
            previewDark ? 'bg-[#111827] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base sm:text-lg tracking-tight">
                {config.blogName}
              </span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: config.primaryColor }} />
            </div>

            {/* Desktop Navigation */}
            {viewport === 'desktop' && (
              <nav className="flex items-center gap-5 text-xs font-medium text-slate-500 dark:text-slate-400">
                <a href="#home" className="hover:text-slate-900 dark:hover:text-white">Home</a>
                <a href="#tech" className="hover:text-slate-900 dark:hover:text-white">Technology</a>
                <a href="#tutorials" className="hover:text-slate-900 dark:hover:text-white">Tutorials</a>
                <a href="#seo" className="hover:text-slate-900 dark:hover:text-white">SEO &amp; Growth</a>
                <a href="#about" className="hover:text-slate-900 dark:hover:text-white">About</a>
              </nav>
            )}

            {/* Header Right Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPreviewDark(!previewDark)}
                className="w-8 h-8 rounded border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 cursor-pointer"
              >
                {previewDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              </button>
            </div>
          </header>

          {/* Leaderboard Header Ad Unit (Desktop 728x90 / Mobile 320x100) */}
          {config.enableHeaderAd && (
            <div className="mx-4 sm:mx-6 mt-4 text-center">
              <div className={`p-2.5 rounded-lg border border-dashed transition-colors flex flex-col items-center justify-center ${
                previewDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-300'
              }`}>
                <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider mb-1">
                  Advertisement · Leaderboard Ad (728×90 / 320×100)
                </span>
                <div className="h-14 sm:h-16 w-full max-w-[728px] bg-slate-100 dark:bg-slate-800/80 rounded flex items-center justify-center text-xs text-slate-400 font-mono">
                  AdSense Banner Slot: {config.headerAdSlot || '1122334455'}
                </div>
              </div>
            </div>
          )}

          {/* Main Layout Area */}
          <div className="p-4 sm:p-6 flex-1">
            <div className={`grid gap-6 ${
              viewport === 'mobile' ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-[1fr_300px]'
            }`}>
              {/* Primary Column */}
              <main className="space-y-6 min-w-0">
                {pageType === 'home' ? (
                  /* Homepage View */
                  <div className="space-y-6">
                    <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between">
                      <h1 className="text-xl font-bold tracking-tight">Latest Articles</h1>
                      <span className="text-xs text-slate-400">4 Featured Posts</span>
                    </div>

                    <div className={`grid gap-5 ${
                      viewport === 'mobile' ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'
                    }`}>
                      {sampleArticles.map((article) => (
                        <div
                          key={article.id}
                          className={`rounded-xl border overflow-hidden flex flex-col transition-all hover:shadow-md ${
                            previewDark ? 'bg-[#111827] border-slate-800' : 'bg-white border-slate-200'
                          }`}
                        >
                          <div className="aspect-[16/9] bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                          <div className="p-4 flex flex-col flex-1">
                            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                              <span className="font-semibold" style={{ color: config.primaryColor }}>
                                {article.category}
                              </span>
                              <span>·</span>
                              <span>{article.date}</span>
                              <span>·</span>
                              <span>{article.readTime}</span>
                            </div>
                            <h2 className="text-sm sm:text-base font-bold leading-snug line-clamp-2 mb-2 text-slate-900 dark:text-white">
                              {article.title}
                            </h2>
                            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                              {article.snippet}
                            </p>
                            <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                              <span className="text-slate-400">{config.authorName}</span>
                              <span className="font-semibold flex items-center gap-1" style={{ color: config.primaryColor }}>
                                Read <ArrowRight className="w-3 h-3" />
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Single Article View */
                  <article className={`p-4 sm:p-7 rounded-xl border space-y-5 ${
                    previewDark ? 'bg-[#111827] border-slate-800' : 'bg-white border-slate-200'
                  }`}>
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <span>Home</span>
                      <span>/</span>
                      <span style={{ color: config.primaryColor }}>Technology</span>
                      <span>/</span>
                      <span className="text-slate-400 truncate">Core Web Vitals Guide</span>
                    </div>

                    {/* Article Title */}
                    <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
                      How to Maximize Google AdSense Revenue with Fast Core Web Vitals
                    </h1>

                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 pb-3 border-b border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-1.5 font-medium text-slate-900 dark:text-white">
                        <img
                          src={config.authorAvatarUrl}
                          alt={config.authorName}
                          className="w-5 h-5 rounded-full object-cover"
                        />
                        <span>{config.authorName}</span>
                      </div>
                      <span>·</span>
                      <time>October 04, 2026</time>
                      <span>·</span>
                      <span>5 min read</span>
                    </div>

                    {/* In-Article Top Ad Slot (High CTR placement) */}
                    {config.enableInArticleAd && (
                      <div className={`p-3 rounded-lg border border-dashed text-center ${
                        previewDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-300'
                      }`}>
                        <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider mb-1 block">
                          Sponsored · In-Article Native Placement (Highest CTR)
                        </span>
                        <div className="h-20 bg-slate-200/60 dark:bg-slate-800/80 rounded flex items-center justify-center text-xs text-slate-400 font-mono">
                          Native Fluid Unit (Slot: {config.inArticleAdSlot || '2233445566'})
                        </div>
                      </div>
                    )}

                    {/* Featured Image */}
                    <div className="aspect-[16/9] rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800">
                      <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=506&fit=crop&q=80"
                        alt="Core Web Vitals and AdSense Monetization"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Auto Table of Contents */}
                    {config.enableTableOfContents && (
                      <div className={`p-4 rounded-lg border text-xs space-y-2 ${
                        previewDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                      }`}>
                        <div
                          onClick={() => setShowToc(!showToc)}
                          className="flex items-center justify-between font-bold cursor-pointer text-slate-900 dark:text-white"
                        >
                          <span>Table of Contents</span>
                          <span className="text-teal-600 dark:text-teal-400">
                            {showToc ? '[Hide]' : '[Show]'}
                          </span>
                        </div>
                        {showToc && (
                          <ol className="list-decimal pl-4 space-y-1 text-slate-600 dark:text-slate-400">
                            <li><a href="#section-1" className="hover:underline">1. The Direct Link Between PageSpeed and Ad RPM</a></li>
                            <li><a href="#section-2" className="hover:underline">2. Eliminating Cumulative Layout Shift (CLS) on Ads</a></li>
                            <li><a href="#section-3" className="hover:underline">3. High-CTR Placements: Above the Fold vs Sticky Sidebar</a></li>
                            <li><a href="#section-4" className="hover:underline">4. Implementing Schema.org BlogPosting JSON-LD</a></li>
                          </ol>
                        )}
                      </div>
                    )}

                    {/* Article Body Content */}
                    <div className="space-y-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      <p>
                        Publishers operating on Blogger often face a common monetization dilemma: aggressively loading advertising scripts frequently harms Google Core Web Vitals, causing lower organic search rankings and higher bounce rates.
                      </p>

                      <h2 id="section-1" className="text-lg font-bold text-slate-900 dark:text-white pt-2 border-b border-slate-100 dark:border-slate-800 pb-1">
                        1. The Direct Link Between PageSpeed and Ad RPM
                      </h2>
                      <p>
                        When pages load under 1.8 seconds, viewability scores increase by over 35%. Modern advertisers bid on Google Ad Manager through header bidding and open auctions that prioritize verified high-viewability ad inventory.
                      </p>

                      <blockquote>
                        <div className={`border-l-3 pl-3.5 py-1 text-xs italic ${
                          previewDark ? 'border-teal-500 text-slate-400 bg-slate-900/60' : 'border-teal-600 text-slate-600 bg-slate-50'
                        }`}>
                          "A 0.1-second improvement in mobile site speed drove an 8.4% increase in conversions and a 9.2% increase in average order value for top digital publishers."
                        </div>
                      </blockquote>

                      <h2 id="section-2" className="text-lg font-bold text-slate-900 dark:text-white pt-2 border-b border-slate-100 dark:border-slate-800 pb-1">
                        2. Eliminating Cumulative Layout Shift (CLS) on Ads
                      </h2>
                      <p>
                        By enforcing strict minimum height wrappers on ad containers (e.g., min-height: 250px or min-height: 90px), the theme reserves DOM layout space before Google ad creatives finish rendering, ensuring a 0.00 CLS score.
                      </p>

                      {/* Code Block with Copy Button */}
                      {config.enableCodeCopyButton && (
                        <div className="relative my-3 rounded-lg overflow-hidden bg-slate-950 text-slate-200 p-3.5 font-mono text-xs">
                          <button
                            onClick={() => {
                              setCopiedCode(true);
                              setTimeout(() => setCopiedCode(false), 2000);
                            }}
                            className="absolute top-2 right-2 px-2 py-0.5 rounded bg-slate-800 text-slate-300 hover:text-white text-[10px] flex items-center gap-1 cursor-pointer"
                          >
                            {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                            {copiedCode ? 'Copied' : 'Copy CSS'}
                          </button>
                          <pre className="text-[11px] leading-relaxed overflow-x-auto">
{`.ad-slot-wrapper {
  min-height: 280px; /* Reserves layout space */
  display: flex;
  align-items: center;
  justify-content: center;
  contain: layout;
}`}
                          </pre>
                        </div>
                      )}
                    </div>

                    {/* Social Share Buttons */}
                    {config.enableShareButtons && (
                      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold text-slate-500 mr-1">Share:</span>
                        <span className="px-2.5 py-1 rounded bg-black text-white text-[11px] font-semibold">X / Twitter</span>
                        <span className="px-2.5 py-1 rounded bg-[#1877f2] text-white text-[11px] font-semibold">Facebook</span>
                        <span className="px-2.5 py-1 rounded bg-[#25d366] text-white text-[11px] font-semibold">WhatsApp</span>
                        <button
                          onClick={() => {
                            setCopiedLink(true);
                            setTimeout(() => setCopiedLink(false), 2000);
                          }}
                          className="px-2.5 py-1 rounded bg-slate-600 text-white text-[11px] font-semibold flex items-center gap-1 cursor-pointer"
                        >
                          {copiedLink ? <Check className="w-3 h-3" /> : <Share2 className="w-3 h-3" />}
                          {copiedLink ? 'Copied URL!' : 'Copy Link'}
                        </button>
                      </div>
                    )}

                    {/* Below Post Ad Unit */}
                    {config.enableBelowPostAd && (
                      <div className={`p-3 rounded-lg border border-dashed text-center ${
                        previewDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-300'
                      }`}>
                        <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider mb-1 block">
                          Advertisement · High-Engagement Bottom Unit
                        </span>
                        <div className="h-20 bg-slate-200/60 dark:bg-slate-800/80 rounded flex items-center justify-center text-xs text-slate-400 font-mono">
                          Responsive In-Feed Banner (Slot: {config.belowPostAdSlot || '3344556677'})
                        </div>
                      </div>
                    )}

                    {/* Author Box */}
                    {config.enableAuthorBox && (
                      <div className={`p-4 rounded-xl border flex items-center gap-3.5 ${
                        previewDark ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                      }`}>
                        <img
                          src={config.authorAvatarUrl}
                          alt={config.authorName}
                          className="w-12 h-12 rounded-full object-cover shrink-0"
                        />
                        <div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white">
                            Written by {config.authorName}
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                            {config.authorBio}
                          </p>
                        </div>
                      </div>
                    )}
                  </article>
                )}
              </main>

              {/* Sidebar (Desktop and Tablet) */}
              {viewport !== 'mobile' && (
                <aside className="space-y-5">
                  {/* Sticky Ad Unit */}
                  {config.enableSidebarStickyAd && (
                    <div className={`p-3.5 rounded-xl border sticky top-4 ${
                      previewDark ? 'bg-[#111827] border-slate-800' : 'bg-white border-slate-200'
                    }`}>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 pb-1 border-b border-slate-100 dark:border-slate-800">
                        Sponsored
                      </div>
                      <div className="h-[250px] bg-slate-100 dark:bg-slate-800/60 rounded flex flex-col items-center justify-center p-3 text-center">
                        <span className="text-[10px] uppercase font-mono text-slate-400 mb-1">
                          Sticky Sidebar Ad (300×250 / 300×600)
                        </span>
                        <span className="text-xs text-slate-500 font-mono">
                          Slot ID: {config.sidebarAdSlot || '4455667788'}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Trending Topics */}
                  <div className={`p-4 rounded-xl border space-y-3 ${
                    previewDark ? 'bg-[#111827] border-slate-800' : 'bg-white border-slate-200'
                  }`}>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                      Popular Categories
                    </div>
                    <div className="space-y-2 text-xs">
                      {['Technology', 'SEO & Growth', 'Web Tutorials', 'AdSense Monetization'].map((cat, i) => (
                        <div key={cat} className="flex items-center justify-between text-slate-600 dark:text-slate-400 hover:text-slate-900 cursor-pointer">
                          <span>{cat}</span>
                          <span className="text-[11px] font-mono text-slate-400">{(24 - i * 4)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter Widget */}
                  <div className={`p-4 rounded-xl border space-y-3 ${
                    previewDark ? 'bg-[#111827] border-slate-800' : 'bg-white border-slate-200'
                  }`}>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      Stay Ahead in Tech
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Get tested web performance and monetization tactics delivered bi-weekly.
                    </p>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full text-xs px-2.5 py-1.5 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950"
                    />
                    <button
                      type="button"
                      style={{ backgroundColor: config.primaryColor }}
                      className="w-full text-xs font-semibold py-1.5 rounded text-white cursor-pointer"
                    >
                      Subscribe
                    </button>
                  </div>
                </aside>
              )}
            </div>
          </div>

          {/* Footer */}
          <footer className={`px-6 py-6 border-t mt-auto text-xs transition-colors ${
            previewDark ? 'bg-[#111827] border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-500'
          }`}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>&copy; 2026 {config.blogName}. All rights reserved.</div>
              <div className="flex items-center gap-4 text-xs">
                <a href="#privacy" className="hover:underline">Privacy Policy</a>
                <a href="#terms" className="hover:underline">Terms of Service</a>
                <a href="#sitemap" className="hover:underline">Sitemap</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
