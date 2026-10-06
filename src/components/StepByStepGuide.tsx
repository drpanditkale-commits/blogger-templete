import React, { useState } from 'react';
import { CheckCircle2, Copy, Check, ExternalLink, HelpCircle, ShieldAlert, Zap, FileText } from 'lucide-react';

export const StepByStepGuide: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copySnippet = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const steps = [
    {
      stepNumber: 1,
      title: 'Backup Your Current Blogger Theme',
      tag: 'Critical Safeguard',
      description: 'Always save a snapshot of your existing template and widget configurations before switching.',
      instructions: [
        'Log in to your Google Blogger dashboard (blogger.com).',
        'In the left sidebar menu, click on "Theme".',
        'Next to the orange "CUSTOMIZE" button, click the downward arrow icon (▼).',
        'Click "Backup" and select "DOWNLOAD". Save this .xml backup file securely on your computer.',
      ],
      tip: 'If you ever want to revert, simply use the "Restore" button with this backup file.',
    },
    {
      stepNumber: 2,
      title: 'Install and Upload "output.xml"',
      tag: 'Installation',
      description: 'Upload your generated UltraPress XML theme file directly to Blogger.',
      instructions: [
        'Download your customized "output.xml" from the "output.xml Viewer" tab or click the download button in the header.',
        'In Blogger, navigate to "Theme" > click the downward arrow next to "CUSTOMIZE".',
        'Choose "Restore" > click "UPLOAD".',
        'Select the "output.xml" file you downloaded.',
        'Wait 5-10 seconds for Blogger to report "Theme restored successfully".',
      ],
      alternative: {
        title: 'Alternative (Edit HTML Method):',
        text: 'If the upload dialog times out: Click "Edit HTML" instead, select all existing code (Ctrl+A), delete it, paste the entire contents of output.xml, and click the orange "Save" floppy disk icon at the top right.',
      },
    },
    {
      stepNumber: 3,
      title: 'Configure Google AdSense for High Monetization',
      tag: 'Monetization',
      description: 'Connect your AdSense Publisher ID and verify high-CTR ad container placements.',
      instructions: [
        'Open your Google AdSense console (adsense.google.com).',
        'Copy your Publisher ID (format: ca-pub-XXXXXXXXXXXXXXXX).',
        'If you customized your publisher ID in this generator, it is already baked into the head tag of output.xml.',
        'To verify in Blogger: Go to "Earnings" > connect your AdSense account if not already linked.',
        'In Blogger "Layout", you will see dedicated Ad sections (Header Leaderboard Ad, In-Article Ad, and Sidebar Sticky Ad). Click the pencil icon on any HTML/JavaScript widget to adjust slot codes or sizes.',
      ],
      codeSnippet: {
        title: 'AdSense Responsive Ad Unit Template (HTML/JavaScript Widget in Layout):',
        code: `<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
     data-ad-slot="1234567890"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>`,
      },
    },
    {
      stepNumber: 4,
      title: 'Setup Custom Robots.txt & Google Search Console Sitemap',
      tag: 'Search Engine Optimization',
      description: 'Instruct Googlebot and Bingbot to crawl your articles without indexing low-quality search query strings.',
      instructions: [
        'In Blogger, click "Settings" on the left menu.',
        'Scroll down to the "Crawlers and indexing" section.',
        'Enable "Enable custom robots.txt" and paste the recommended robots configuration below.',
        'Enable "Enable custom robots header tags" and set: Home page tags (all, noodp), Archive & search page tags (noindex, noodp), Post and page tags (all, noodp).',
        'Go to Google Search Console (search.google.com/search-console) > select your blog property > "Sitemaps" > submit: sitemap.xml',
      ],
      codeSnippet: {
        title: 'Recommended High-Ranking Custom robots.txt:',
        code: `User-agent: *
Disallow: /search
Allow: /
Sitemap: https://YOURBLOGNAME.blogspot.com/sitemap.xml`,
      },
    },
    {
      stepNumber: 5,
      title: 'Customize Navigation Links & Menu in Layout',
      tag: 'User Navigation',
      description: 'Organize your top menu categories so readers and search spiders can discover your best content.',
      instructions: [
        'Go to "Layout" in your Blogger dashboard.',
        'Locate the "Header" or "Menu" widget.',
        'Add links to your primary categories (e.g. /search/label/Technology, /search/label/SEO, /search/label/Tutorials).',
        'Ensure you have dedicated static pages created for: About Us (/p/about.html), Contact Us (/p/contact.html), and Privacy Policy (/p/privacy-policy.html).',
      ],
    },
    {
      stepNumber: 6,
      title: 'Core Web Vitals & 100/100 PageSpeed Verification',
      tag: 'Speed Validation',
      description: 'Verify lightning-fast load times and zero layout shifts on Google PageSpeed Insights.',
      instructions: [
        'Visit Google PageSpeed Insights (pagespeed.web.dev).',
        'Enter your Blogger domain URL and click "Analyze".',
        'Check mobile and desktop performance: First Contentful Paint (FCP) should be under 1.2s, and Cumulative Layout Shift (CLS) should be under 0.05.',
        'UltraPress is engineered with inline critical CSS, preconnect links, lazy loading, and modern typography to achieve top scores out of the box.',
      ],
    },
    {
      stepNumber: 7,
      title: 'AdSense Approval Checklist (Before Applying)',
      tag: 'Policy Compliance',
      description: 'Ensure your site fulfills all Google AdSense Publisher Program requirements.',
      instructions: [
        'Publish at least 15-20 comprehensive, original, high-value articles (minimum 800+ words each).',
        'Have 4 mandatory static pages in your top/footer menu: Privacy Policy, Terms of Service, Disclaimer, and About/Contact.',
        'Verify your domain ownership in Google Search Console.',
        'Ensure all images have proper attribution or are royalty-free.',
        'Avoid copyrighted downloads, scraped content, or misleading clickbait.',
      ],
    },
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Intro Banner */}
      <div className="bg-gradient-to-r from-teal-900/40 to-slate-900/60 border border-teal-500/30 rounded-xl p-5 text-slate-100 flex items-start gap-4">
        <Zap className="w-6 h-6 text-teal-400 shrink-0 mt-0.5" />
        <div>
          <h2 className="text-base font-bold text-white">
            Blogger Installation &amp; Monetization Blueprint
          </h2>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            Follow these 7 sequential steps to successfully replace your default Blogger template with <code className="font-mono text-teal-300">output.xml</code>, connect Google AdSense, configure search engine indexing, and reach 100/100 Core Web Vitals.
          </p>
        </div>
      </div>

      {/* Steps List */}
      <div className="space-y-5">
        {steps.map((item, idx) => (
          <div
            key={item.stepNumber}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs transition-all hover:border-slate-300 dark:hover:border-slate-700"
          >
            {/* Step Header */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-teal-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  {item.stepNumber}
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0">
                {item.tag}
              </span>
            </div>

            {/* Instruction Points */}
            <div className="pl-9 space-y-2 mt-3">
              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 list-disc pl-4">
                {item.instructions.map((inst, i) => (
                  <li key={i} className="leading-relaxed">
                    {inst}
                  </li>
                ))}
              </ul>

              {/* Optional Tip */}
              {item.tip && (
                <div className="mt-3 p-3 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200/60 dark:border-teal-900 text-xs text-teal-800 dark:text-teal-300">
                  <span className="font-bold">Pro Tip: </span>
                  {item.tip}
                </div>
              )}

              {/* Optional Alternative */}
              {item.alternative && (
                <div className="mt-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
                  <span className="font-bold text-slate-900 dark:text-white">
                    {item.alternative.title}{' '}
                  </span>
                  {item.alternative.text}
                </div>
              )}

              {/* Optional Code Snippet */}
              {item.codeSnippet && (
                <div className="mt-3 rounded-lg overflow-hidden border border-slate-800 bg-[#0b0f17]">
                  <div className="px-3 py-1.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>{item.codeSnippet.title}</span>
                    <button
                      onClick={() => copySnippet(item.codeSnippet!.code, idx)}
                      className="flex items-center gap-1 text-slate-300 hover:text-white text-xs cursor-pointer"
                    >
                      {copiedIndex === idx ? (
                        <Check className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                      {copiedIndex === idx ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <pre className="p-3 text-[11px] font-mono text-slate-300 overflow-x-auto leading-relaxed">
                    {item.codeSnippet.code}
                  </pre>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
