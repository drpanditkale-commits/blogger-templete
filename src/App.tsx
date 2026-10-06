import React, { useState, useEffect, useMemo } from 'react';
import {
  DEFAULT_THEME_CONFIG,
  ThemeConfig,
  generateBloggerXml,
} from './theme/bloggerXmlGenerator';
import { PRESET_THEMES, ThemeCustomizer } from './components/ThemeCustomizer';
import { ThemePreview } from './components/ThemePreview';
import { XmlCodeViewer } from './components/XmlCodeViewer';
import { StepByStepGuide } from './components/StepByStepGuide';
import { SpeedSeoAudit } from './components/SpeedSeoAudit';
import { Header } from './components/Header';
import { Download, Sparkles, Check, ArrowRight, Gauge, DollarSign } from 'lucide-react';

export default function App() {
  const [config, setConfig] = useState<ThemeConfig>(DEFAULT_THEME_CONFIG);
  const [activeTab, setActiveTab] = useState<string>('preview');
  const [copied, setCopied] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync dark mode class on document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Generate XML dynamically
  const generatedXml = useMemo(() => {
    return generateBloggerXml(config);
  }, [config]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleDownloadXml = () => {
    const blob = new Blob([generatedXml], { type: 'application/xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'output.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast('Downloaded output.xml successfully!');
  };

  const handleCopyXml = () => {
    navigator.clipboard.writeText(generatedXml);
    setCopied(true);
    showToast('Complete output.xml copied to clipboard!');
    setTimeout(() => setCopied(false), 2200);
  };

  const handleApplyPreset = (presetId: string) => {
    const selected = PRESET_THEMES.find((p) => p.id === presetId);
    if (selected) {
      setConfig({ ...selected.config });
      showToast(`Applied preset: ${selected.name}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070b11] text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors">
      {/* Universal Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onDownloadXml={handleDownloadXml}
        onCopyXml={handleCopyXml}
        copied={copied}
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Top Hero Banner (Context & Quick Download) */}
        <div className="mb-6 pb-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-600 dark:text-teal-400 mb-1">
              <span>Blogger Layout v3</span>
              <span aria-hidden="true">·</span>
              <span>100/100 Core Web Vitals</span>
              <span aria-hidden="true">·</span>
              <span>Google AdSense Ready</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              UltraPress Blogger XML Theme Studio
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Ultra-lightweight, zero-jQuery Blogger theme engineered for instant mobile page speeds, Schema.org rich snippets, and high-CTR AdSense placements.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={() => setActiveTab('customize')}
              className="px-3.5 py-2 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
            >
              Configure Theme
            </button>
            <button
              onClick={() => setActiveTab('steps')}
              className="px-3.5 py-2 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
            >
              Install Steps
            </button>
            <button
              onClick={handleDownloadXml}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-teal-600 hover:bg-teal-500 text-white transition-colors cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              Download output.xml
            </button>
          </div>
        </div>

        {/* Tab Views */}
        {activeTab === 'preview' && (
          <ThemePreview config={config} />
        )}

        {activeTab === 'customize' && (
          <ThemeCustomizer
            config={config}
            onChange={setConfig}
            onApplyPreset={handleApplyPreset}
          />
        )}

        {activeTab === 'xml' && (
          <XmlCodeViewer
            xmlContent={generatedXml}
            onDownload={handleDownloadXml}
          />
        )}

        {activeTab === 'steps' && (
          <StepByStepGuide />
        )}

        {activeTab === 'audit' && (
          <SpeedSeoAudit />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-6 text-xs text-slate-500 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800 dark:text-slate-200">UltraPress Studio</span>
            <span>·</span>
            <span>Production Blogger XML Generator &amp; Setup Engine</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => setActiveTab('steps')}
              className="hover:text-slate-900 dark:hover:text-white cursor-pointer"
            >
              Installation Steps
            </button>
            <button
              onClick={() => setActiveTab('xml')}
              className="hover:text-slate-900 dark:hover:text-white cursor-pointer"
            >
              output.xml
            </button>
            <button
              onClick={handleDownloadXml}
              className="hover:text-teal-600 dark:hover:text-teal-400 font-semibold cursor-pointer"
            >
              Direct Download
            </button>
          </div>
        </div>
      </footer>

      {/* Global Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2.5 rounded-lg shadow-xl text-xs font-semibold flex items-center gap-2 transition-all">
          <Check className="w-4 h-4 text-teal-400 dark:text-teal-600" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
