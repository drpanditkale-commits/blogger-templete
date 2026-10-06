import React from 'react';
import { ThemeConfig, DEFAULT_THEME_CONFIG } from '../theme/bloggerXmlGenerator';
import { Sparkles, DollarSign, Search, Palette, Sliders, RotateCcw } from 'lucide-react';

interface ThemeCustomizerProps {
  config: ThemeConfig;
  onChange: (newConfig: ThemeConfig) => void;
  onApplyPreset: (presetName: string) => void;
}

export const PRESET_THEMES = [
  {
    id: 'tech',
    name: 'Tech & Gadgets',
    description: 'Crisp teal palette, Plus Jakarta Sans, optimal for developer & technology niches.',
    config: {
      ...DEFAULT_THEME_CONFIG,
      blogName: 'TechVanguard | Modern Software & AI',
      primaryColor: '#0f766e',
      accentColor: '#2563eb',
      fontFamily: 'Plus Jakarta Sans' as const,
      primaryCategory: 'Technology',
    }
  },
  {
    id: 'niche',
    name: 'Affiliate & Monetization',
    description: 'High-CTR layout, aggressive ad placement slots with emerald accents.',
    config: {
      ...DEFAULT_THEME_CONFIG,
      blogName: 'SmartRevenue Hub',
      primaryColor: '#059669',
      accentColor: '#d97706',
      fontFamily: 'Plus Jakarta Sans' as const,
      enableInArticleAd: true,
      enableBelowPostAd: true,
      enableSidebarStickyAd: true,
      primaryCategory: 'Monetization',
    }
  },
  {
    id: 'editorial',
    name: 'Editorial & Longform',
    description: 'Serif typography (Lora), warm dark slate tones, generous line heights for reading.',
    config: {
      ...DEFAULT_THEME_CONFIG,
      blogName: 'The Modern Chronicler',
      primaryColor: '#334155',
      accentColor: '#9333ea',
      fontFamily: 'Lora' as const,
      primaryCategory: 'Culture & Insights',
    }
  },
  {
    id: 'minimal',
    name: 'Minimal Clean',
    description: 'Ultra-fast system fonts, pure black & slate accents, zero distractions.',
    config: {
      ...DEFAULT_THEME_CONFIG,
      blogName: 'Minimalist Notes',
      primaryColor: '#18181b',
      accentColor: '#4f46e5',
      fontFamily: 'System Sans' as const,
      primaryCategory: 'Personal',
    }
  }
];

export const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({
  config,
  onChange,
  onApplyPreset,
}) => {
  const updateField = <K extends keyof ThemeConfig>(field: K, value: ThemeConfig[K]) => {
    onChange({
      ...config,
      [field]: value,
    });
  };

  const handleReset = () => {
    onChange(DEFAULT_THEME_CONFIG);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Presets Bar */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              Niche Presets
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Select an optimized baseline preset for your blog niche.
            </p>
          </div>
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer px-2.5 py-1 rounded border border-slate-200 dark:border-slate-800"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset Defaults
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {PRESET_THEMES.map((preset) => (
            <button
              key={preset.id}
              onClick={() => onApplyPreset(preset.id)}
              className="text-left p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all cursor-pointer group"
            >
              <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">
                {preset.name}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                {preset.description}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Basic Blog Info */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-4">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
          <h2 className="text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2">
            <Sliders className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            Blog Identity & Branding
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Configure your publication name, meta description, and author credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Blog Title
            </label>
            <input
              type="text"
              value={config.blogName}
              onChange={(e) => updateField('blogName', e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
              placeholder="e.g. UltraPress Insights"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Author Display Name
            </label>
            <input
              type="text"
              value={config.authorName}
              onChange={(e) => updateField('authorName', e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
              placeholder="e.g. Alex Mercer"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Blog Meta Description (Crucial for Google SEO ranking)
            </label>
            <textarea
              rows={2}
              value={config.blogDescription}
              onChange={(e) => updateField('blogDescription', e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
              placeholder="A high-ranking publication focused on..."
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Author Bio Summary
            </label>
            <input
              type="text"
              value={config.authorBio}
              onChange={(e) => updateField('authorBio', e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
              placeholder="Software engineer and tech publisher..."
            />
          </div>
        </div>
      </section>

      {/* AdSense & Monetization Hub */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-4">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex items-start justify-between">
          <div>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Google AdSense &amp; High-CTR Monetization Units
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Pre-engineered responsive ad spots that maximize revenue while complying with AdSense policies.
            </p>
          </div>
          <span className="text-[11px] font-mono bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
            Policy Compliant
          </span>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Google AdSense Publisher ID (Client ID)
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={config.adSensePublisherId}
                onChange={(e) => updateField('adSensePublisherId', e.target.value)}
                className="flex-1 font-mono text-sm px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                placeholder="ca-pub-XXXXXXXXXXXXXXXX"
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Found in your Google AdSense dashboard under Account &gt; Settings &gt; Publisher ID.
            </p>
          </div>

          <div className="pt-2">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={config.enableAutoAds}
                onChange={(e) => updateField('enableAutoAds', e.target.checked)}
                className="w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500"
              />
              <div>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  Enable Google Auto Ads Script Tag in Head
                </span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Allows Google AI to automatically test and place responsive vignette and anchor ads.
                </p>
              </div>
            </label>
          </div>

          {/* Individual Ad Slots */}
          <div className="border-t border-slate-100 dark:border-slate-800 pt-3 space-y-3">
            <div className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
              Strategic Ad Placements (Manual Responsive Units)
            </div>

            {/* Header Leaderboard */}
            <div className="p-3 rounded-lg border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.enableHeaderAd}
                  onChange={(e) => updateField('enableHeaderAd', e.target.checked)}
                  className="w-4 h-4 text-teal-600 rounded"
                />
                <div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    Header Leaderboard Ad (728x90 / 320x100)
                  </div>
                  <div className="text-[11px] text-slate-500">Above main content fold, visible on all pages</div>
                </div>
              </label>
              {config.enableHeaderAd && (
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-500 font-mono">Slot ID:</span>
                  <input
                    type="text"
                    value={config.headerAdSlot}
                    onChange={(e) => updateField('headerAdSlot', e.target.value)}
                    className="w-32 font-mono text-xs px-2 py-1 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                    placeholder="1234567890"
                  />
                </div>
              )}
            </div>

            {/* In-Article Ad */}
            <div className="p-3 rounded-lg border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.enableInArticleAd}
                  onChange={(e) => updateField('enableInArticleAd', e.target.checked)}
                  className="w-4 h-4 text-teal-600 rounded"
                />
                <div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    In-Article Native Ad (Fluid / Above TOC)
                  </div>
                  <div className="text-[11px] text-slate-500">Highest CTR placement directly inside article body</div>
                </div>
              </label>
              {config.enableInArticleAd && (
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-500 font-mono">Slot ID:</span>
                  <input
                    type="text"
                    value={config.inArticleAdSlot}
                    onChange={(e) => updateField('inArticleAdSlot', e.target.value)}
                    className="w-32 font-mono text-xs px-2 py-1 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                    placeholder="1234567890"
                  />
                </div>
              )}
            </div>

            {/* Below Post Ad */}
            <div className="p-3 rounded-lg border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.enableBelowPostAd}
                  onChange={(e) => updateField('enableBelowPostAd', e.target.checked)}
                  className="w-4 h-4 text-teal-600 rounded"
                />
                <div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    Below Article / Above Comments Ad
                  </div>
                  <div className="text-[11px] text-slate-500">Engages readers when finished reading the article</div>
                </div>
              </label>
              {config.enableBelowPostAd && (
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-500 font-mono">Slot ID:</span>
                  <input
                    type="text"
                    value={config.belowPostAdSlot}
                    onChange={(e) => updateField('belowPostAdSlot', e.target.value)}
                    className="w-32 font-mono text-xs px-2 py-1 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                    placeholder="1234567890"
                  />
                </div>
              )}
            </div>

            {/* Sticky Sidebar Ad */}
            <div className="p-3 rounded-lg border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.enableSidebarStickyAd}
                  onChange={(e) => updateField('enableSidebarStickyAd', e.target.checked)}
                  className="w-4 h-4 text-teal-600 rounded"
                />
                <div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    Sticky Sidebar Unit (300x250 or 300x600 Skyscraper)
                  </div>
                  <div className="text-[11px] text-slate-500">Stays pinned in view while user scrolls down the page</div>
                </div>
              </label>
              {config.enableSidebarStickyAd && (
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-500 font-mono">Slot ID:</span>
                  <input
                    type="text"
                    value={config.sidebarAdSlot}
                    onChange={(e) => updateField('sidebarAdSlot', e.target.value)}
                    className="w-32 font-mono text-xs px-2 py-1 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                    placeholder="1234567890"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SEO & Search Rankings */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-4">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
          <h2 className="text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2">
            <Search className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            SEO &amp; Search Console Verification
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Rich Schema.org structured data (JSON-LD), OpenGraph tags, and Google Search Console tags.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Google Search Console Verification Token (Optional)
            </label>
            <input
              type="text"
              value={config.googleSiteVerification}
              onChange={(e) => updateField('googleSiteVerification', e.target.value)}
              className="w-full font-mono text-xs px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
              placeholder="e.g. AbC123dEf-456..."
            />
            <p className="text-[11px] text-slate-400 mt-1">
              Generates &lt;meta name="google-site-verification" content="..."&gt;
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Google Analytics 4 (GA4) Measurement ID (Optional)
            </label>
            <input
              type="text"
              value={config.googleAnalyticsId}
              onChange={(e) => updateField('googleAnalyticsId', e.target.value)}
              className="w-full font-mono text-xs px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
              placeholder="G-XXXXXXXXXX"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Twitter / X Handle
            </label>
            <input
              type="text"
              value={config.twitterHandle}
              onChange={(e) => updateField('twitterHandle', e.target.value)}
              className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
              placeholder="@handle"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Primary Topic / Category
            </label>
            <input
              type="text"
              value={config.primaryCategory}
              onChange={(e) => updateField('primaryCategory', e.target.value)}
              className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
              placeholder="Technology, Finance, Health..."
            />
          </div>
        </div>
      </section>

      {/* Visual Design & Appearance */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-4">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
          <h2 className="text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2">
            <Palette className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            Theme Appearance &amp; Fast Typography
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Select color accents and ultra-crisp typography optimized for fast rendering and zero CLS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Brand Accent Color
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={config.primaryColor}
                onChange={(e) => updateField('primaryColor', e.target.value)}
                className="w-10 h-10 rounded border border-slate-200 cursor-pointer p-0.5"
              />
              <input
                type="text"
                value={config.primaryColor}
                onChange={(e) => updateField('primaryColor', e.target.value)}
                className="font-mono text-xs px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white w-28 uppercase"
              />
              <div className="flex items-center gap-1.5">
                {['#0f766e', '#2563eb', '#059669', '#7c3aed', '#dc2626', '#1e293b'].map((hex) => (
                  <button
                    key={hex}
                    type="button"
                    onClick={() => updateField('primaryColor', hex)}
                    className="w-5 h-5 rounded-full border border-slate-300 dark:border-slate-700 transition-transform hover:scale-110"
                    style={{ backgroundColor: hex }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Typography Family
            </label>
            <select
              value={config.fontFamily}
              onChange={(e) => updateField('fontFamily', e.target.value as ThemeConfig['fontFamily'])}
              className="w-full text-sm px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
            >
              <option value="Plus Jakarta Sans">Plus Jakarta Sans (Crisp Modern Sans - Recommended)</option>
              <option value="Lora">Lora (Editorial Serif &amp; Longform Reading)</option>
              <option value="System Sans">System Sans (Zero Network Weight, Instant Load)</option>
            </select>
          </div>
        </div>

        {/* Feature Switches */}
        <div className="border-t border-slate-100 dark:border-slate-800 pt-3">
          <div className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-3">
            Interactive User Experience Features
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { id: 'enableReadingProgress', label: 'Top Reading Progress Bar' },
              { id: 'enableTableOfContents', label: 'Auto Table of Contents (TOC)' },
              { id: 'enableShareButtons', label: '1-Click Social Share Buttons' },
              { id: 'enableAuthorBox', label: 'Author Profile Bio Box' },
              { id: 'enableCodeCopyButton', label: 'Code Snippet Copy Buttons' },
              { id: 'enableStickyHeader', label: 'Sticky Header on Scroll' },
              { id: 'enableBackToTop', label: 'Back to Top Floating Button' },
              { id: 'defaultDarkMode', label: 'Default to Dark Mode' },
            ].map((feature) => (
              <label
                key={feature.id}
                className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={config[feature.id as keyof ThemeConfig] as boolean}
                  onChange={(e) => updateField(feature.id as keyof ThemeConfig, e.target.checked as never)}
                  className="w-4 h-4 text-teal-600 rounded border-slate-300"
                />
                <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                  {feature.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
