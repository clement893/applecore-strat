import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArrowRight, Target, Users, BarChart3, Shield, Zap, Brain, Crosshair, TrendingUp, Lock, Eye, X, Maximize2, Minimize2, Layers, Smartphone, Server, AlertTriangle, ChevronDown, ChevronUp, Download, Calculator, Mail, DollarSign, PieChart, FileText, Video, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function DigitalStrategy() {
  const [location] = useLocation();
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);
  const [immersiveMode, setImmersiveMode] = useState(false);
  const [activeMonthTab, setActiveMonthTab] = useState(1);
  const [activeSection, setActiveSection] = useState(0);
  const [simBudget, setSimBudget] = useState(5000);
  const [simCPC, setSimCPC] = useState(1.50);
  const [simCR, setSimCR] = useState(3.5);
  const [simAOV, setSimAOV] = useState(65);

  // Helper component for Search icon since it was missing in imports
  const Search = ({ className }: { className?: string }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );

  const sections = [
    { id: "objectives", label: "Objectives" },
    { id: "media-plan", label: "Media Plan" },
    { id: "roadmap", label: "90-Day Plan" },
    { id: "blue-ocean", label: "Blue Ocean" },
    { id: "personas", label: "Personas" },
    { id: "funnel", label: "User Journey" },
    { id: "automation", label: "Automation" },
    { id: "kpi", label: "KPI Dashboard" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex((s) => s.id === entry.target.id);
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const emailTemplates = {
    nurturing: {
      subject: "Stop Trading Like a Gambler (Read This)",
      body: "Most traders fail because they treat the market like a casino. They chase green candles and panic sell red ones.\n\nHere is the hard truth: The market doesn't care about your feelings. It only respects execution.\n\nIn the next 5 days, I'm going to show you how the 1% actually trade. No indicators. No noise. Just price.\n\nAre you ready to stop gambling?",
      cta: "Start The Shift"
    },
    welcome: {
      subject: "You're In. Now What?",
      body: "Welcome to the inner circle. You've taken the first step with the Mindset Reset.\n\nBut let's be honest: Mindset is only 10% of the game. The other 90% is having an Edge.\n\nRight now, you're trading with a dull knife. You need a scalpel.\n\nI've unlocked a hidden bonus video in your dashboard: 'The Institutional Order Flow'. Watch it before it expires.\n\n(Includes Day 14, 21, 28, 35 retention emails)",
      cta: "Watch Bonus Video"
    },
    winback: {
      subject: "Did We Fail You?",
      body: "I noticed you cancelled your subscription. I'm not here to beg you to come back.\n\nI just want to know: Did we fail to deliver on our promise?\n\nSince you left, we've added the new 'Liquidity Hunter' module. It's exactly what you were looking for.\n\nIf you're ready to give it another shot, here is a one-time link to rejoin at your old rate.",
      cta: "Reclaim My Seat"
    }
  };

  const roadmap = [
    {
      month: 1,
      title: "Infiltration",
      goal: "Establish Authority & Seed the Market",
      description: "Month 1 is about disrupting the feed. We don't sell; we expose the pain.",
      weeks: [
        { 
          week: 1, 
          title: "The 'Amateur' Campaign",
          task: "Launch 'Stop Acting Like An Amateur' video campaign",
          context: "High-contrast videos attacking common retail habits (revenge trading, FOMO).",
          icon: <Video className="w-4 h-4" />
        },
        { 
          week: 2, 
          title: "The Lead Magnet",
          task: "Release free 'Psychology Audit' tool",
          context: "Interactive quiz categorizing traders (e.g., 'The Gambler'). Captures email for results.",
          icon: <FileText className="w-4 h-4" />
        },
        { 
          week: 3, 
          title: "Retargeting Layer",
          task: "Retarget video viewers with 'Deep Dive' content",
          context: "Users who watched >50% get served educational content explaining the 'Science' behind the psychology.",
          icon: <Target className="w-4 h-4" />
        },
        {
          week: 4,
          title: "Data Review & Optimization",
          task: "Analyze campaign performance and optimize creatives",
          context: "Review CTR, CPC, and Lead Quality. Kill underperforming ads and scale winners.",
          icon: <BarChart3 className="w-4 h-4" />
        }
      ]
    },
    {
      month: 2,
      title: "Indoctrination",
      goal: "Deepen Trust & Filter for Quality",
      description: "We shift to education. Proving 'Mindset First' is the only way.",
      weeks: [
        { 
          week: 5, 
          title: "The Nurture Sequence",
          task: "Activate 'The 7-Day Mindset Reset' Email Sequence",
          context: "Automated daily emails. Each fixes ONE psychological leak. Builds massive trust.",
          icon: <Mail className="w-4 h-4" />
        },
        { 
          week: 6, 
          title: "Authority Event",
          task: "First 'Live Trading Psychology' session",
          context: "Live webinar reviewing RECORDED trades. Proving execution is harder than technicals.",
          icon: <Users className="w-4 h-4" />
        },
        { 
          week: 7, 
          title: "Scarcity Launch",
          task: "Open applications for 'Alpha Cohort'",
          context: "Application-only access. Reverses the dynamic—they try to impress us.",
          icon: <Lock className="w-4 h-4" />
        },
        {
          week: 8,
          title: "Mid-Term Review",
          task: "Evaluate cohort application quality and funnel drop-off",
          context: "Identify bottlenecks in the application process. Optimize email open rates.",
          icon: <Search className="w-4 h-4" />
        }
      ]
    },
    {
      month: 3,
      title: "Monetization",
      goal: "Scale Revenue & Lock-in Retention",
      description: "Scale the offer and focus on LTV.",
      weeks: [
        { 
          week: 9, 
          title: "The Close",
          task: "Close 'Alpha Cohort' and launch paid membership",
          context: "High-ticket closes. Downsell remaining leads to £49/mo membership.",
          icon: <DollarSign className="w-4 h-4" />
        },
        { 
          week: 10, 
          title: "Scale Ad Spend",
          task: "Scale ad spend on winning creative variants",
          context: "Triple budget on best performers. Kill losers aggressively.",
          icon: <BarChart3 className="w-4 h-4" />
        },
        { 
          week: 11, 
          title: "High-Ticket Upsell",
          task: "Introduce 'Inner Circle' High-Ticket upsell",
          context: "1-on-1 mentoring backend offer to maximize LTV.",
          icon: <TrendingUp className="w-4 h-4" />
        },
        {
          week: 12,
          title: "Quarterly Review",
          task: "Full quarterly performance review and strategy adjustment",
          context: "Analyze total ROAS, LTV, and Churn. Plan next 90-day cycle.",
          icon: <PieChart className="w-4 h-4" />
        }
      ]
    }
  ];

  const handlePrint = () => {
    // For print, we might want to show all months or handle it differently
    // Currently just printing current view
    setTimeout(() => {
      window.print();
    }, 100);
  };

  return (
    <>
      <style>{`
        @media print {
          @page { margin: 0; size: auto; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; background-color: #fff !important; color: black !important; }
          .no-print { display: none !important; }
          .snap-y { scroll-snap-type: none !important; height: auto !important; overflow: visible !important; }
          .snap-start { scroll-snap-align: none !important; min-height: auto !important; height: auto !important; page-break-inside: avoid; padding-top: 2rem !important; padding-bottom: 2rem !important; border-bottom: 1px solid #ddd !important; }
          nav { display: none !important; }
          .bg-background { background-color: #fff !important; }
          .text-foreground { color: #000 !important; }
          .text-muted-foreground { color: #555 !important; }
          .border-white\\/10 { border-color: #ddd !important; }
          .bg-card { background-color: #f9f9f9 !important; border: 1px solid #ddd !important; }
          .roadmap-details { display: block !important; opacity: 1 !important; position: relative !important; transform: none !important; margin-bottom: 2rem !important; }
        }
      `}</style>

      {/* Side Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 no-print hidden lg:flex">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center gap-4 justify-end"
          >
            <span className={`text-xs font-mono uppercase tracking-wider transition-all duration-300 ${activeSection === index ? 'text-primary opacity-100 translate-x-0' : 'text-gray-500 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`}>
              {section.label}
            </span>
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === index ? 'bg-primary scale-150 shadow-[0_0_10px_rgba(224,255,152,0.5)]' : 'bg-zinc-700 group-hover:bg-zinc-500'}`} />
          </button>
        ))}
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4 no-print">
        <Button 
          onClick={handlePrint}
          className="rounded-full w-12 h-12 p-0 bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700 shadow-lg backdrop-blur-sm"
          title="Download PDF Strategy"
        >
          <Download className="h-5 w-5" />
        </Button>
        
        <Button 
          onClick={() => setImmersiveMode(!immersiveMode)}
          className="rounded-full w-12 h-12 p-0 bg-primary text-black hover:bg-primary/90 shadow-lg shadow-primary/20"
          title={immersiveMode ? "Exit Immersive Mode" : "Enter Immersive Mode"}
        >
          {immersiveMode ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
        </Button>
      </div>

      {selectedEmail && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 no-print" onClick={() => setSelectedEmail(null)}>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-2xl w-full p-8 relative shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedEmail(null)} className="absolute top-4 right-4 text-zinc-500 hover:text-white">
              <X className="w-6 h-6" />
            </button>
            <div className="mb-6 border-b border-zinc-800 pb-6">
              <div className="text-xs font-mono text-zinc-500 uppercase mb-2">Subject Line</div>
              <h3 className="text-2xl font-bold text-white">{emailTemplates[selectedEmail as keyof typeof emailTemplates].subject}</h3>
            </div>
            <div className="prose prose-invert max-w-none mb-8">
              <p className="whitespace-pre-line text-zinc-300 leading-relaxed text-lg">
                {emailTemplates[selectedEmail as keyof typeof emailTemplates].body}
              </p>
            </div>
            <Button className="w-full bg-primary text-black hover:bg-primary/90 font-bold py-6 text-lg">
              {emailTemplates[selectedEmail as keyof typeof emailTemplates].cta}
            </Button>
          </div>
        </div>
      )}

      <div className={`bg-black min-h-screen ${immersiveMode ? 'snap-y snap-mandatory h-screen overflow-y-scroll' : ''}`}>
        
        {/* 1. Strategic Objectives */}
        <section id="objectives" className="py-32 border-b border-white/5 snap-start bg-zinc-950 flex items-center min-h-screen">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Confidential Strategy Document
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                Operation <span className="text-primary">Mindset Shift</span>
              </h1>
              <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                A 90-day tactical roadmap to dominate the trading education market by owning the "Psychology" niche.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-primary/20 transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-white mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Dominate Niche</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Establish Applecore as the #1 authority in Trading Psychology, making competitors look like "amateur signal sellers".
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-primary/20 transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-white mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Build Tribe</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Convert 1,000 "Frustrated Gamblers" into "Disciplined Risk Managers" through our indoctrination funnel.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-primary/20 transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-white mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Scale Revenue</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Achieve £50k MRR by Month 3 through a high-ticket backend offer and recurring membership downsell.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Media Plan */}
        <section id="media-plan" className="py-32 border-b border-white/5 snap-start bg-zinc-900/30">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <Layers className="text-white w-8 h-8" /> Media Buying Plan
              </h2>
              <p className="text-zinc-400 max-w-2xl text-lg">
                We don't spray and pray. We snipe. High intent platforms only.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-primary/20 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-[#FF0050] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">TikTok Ads</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 rounded bg-zinc-800 text-xs text-zinc-400">Top of Funnel</span>
                  <span className="px-2 py-1 rounded bg-primary/10 text-xs text-primary">Awareness</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  The "Pattern Interrupt". We use raw, UGC-style content to call out bad habits.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Broad Targeting (Let algo work)
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Spark Ads on Viral Organic
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-purple-500/20 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Instagram</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 rounded bg-zinc-800 text-xs text-zinc-400">Full Funnel</span>
                  <span className="px-2 py-1 rounded bg-purple-500/10 text-purple-400">Visuals</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  High-polish visuals for branding (Feed) and raw BTS for trust (Stories/Reels).
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                    Reels for Reach (Cold)
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                    Stories for Retargeting (Warm)
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-blue-500/20 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-[#0077B5] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">LinkedIn Ads</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 rounded bg-zinc-800 text-xs text-zinc-400">Mid Funnel</span>
                  <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-400">Authority</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Targeting professionals with disposable income who treat trading as a serious side-business.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    Job Titles: Finance, Tech, Eng
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    Text Ads & Thought Leadership
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-red-500/20 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-[#FF0000] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">YouTube Ads</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 rounded bg-zinc-800 text-xs text-zinc-400">Bottom Funnel</span>
                  <span className="px-2 py-1 rounded bg-red-500/10 text-red-400">Conversion</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Long-form VSLs placed on competitor channels. Stealing their traffic with better logic.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    Placement: Competitor Channels
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    Keyword: "Trading Strategy"
                  </li>
                </ul>
              </div>
            </div>

            {/* Budget Allocation Table */}
            <div className="p-8 rounded-3xl bg-zinc-950 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6">Monthly Budget Allocation</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-4 px-4 text-zinc-500 font-mono text-xs uppercase tracking-wider">Channel</th>
                      <th className="py-4 px-4 text-zinc-500 font-mono text-xs uppercase tracking-wider">Role</th>
                      <th className="py-4 px-4 text-zinc-500 font-mono text-xs uppercase tracking-wider">Budget %</th>
                      <th className="py-4 px-4 text-zinc-500 font-mono text-xs uppercase tracking-wider">Est. Spend</th>
                      <th className="py-4 px-4 text-zinc-500 font-mono text-xs uppercase tracking-wider">Target CPA</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 text-white font-medium">TikTok Ads</td>
                      <td className="py-4 px-4 text-zinc-400">Cold Traffic / Viral</td>
                      <td className="py-4 px-4 text-zinc-400">30%</td>
                      <td className="py-4 px-4 text-zinc-400">£1,500</td>
                      <td className="py-4 px-4 text-primary">£1.50 (Lead)</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 text-white font-medium">Instagram Ads</td>
                      <td className="py-4 px-4 text-zinc-400">Visuals / Retargeting</td>
                      <td className="py-4 px-4 text-zinc-400">25%</td>
                      <td className="py-4 px-4 text-zinc-400">£1,250</td>
                      <td className="py-4 px-4 text-primary">£2.00 (Lead)</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 text-white font-medium">YouTube Ads</td>
                      <td className="py-4 px-4 text-zinc-400">Education / VSL</td>
                      <td className="py-4 px-4 text-zinc-400">25%</td>
                      <td className="py-4 px-4 text-zinc-400">£1,250</td>
                      <td className="py-4 px-4 text-zinc-400">£3.00 (Lead)</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 text-white font-medium">LinkedIn Ads</td>
                      <td className="py-4 px-4 text-zinc-400">High Net Worth</td>
                      <td className="py-4 px-4 text-zinc-400">10%</td>
                      <td className="py-4 px-4 text-zinc-400">£500</td>
                      <td className="py-4 px-4 text-primary">£8.00 (Lead)</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 text-white font-medium">Retargeting</td>
                      <td className="py-4 px-4 text-zinc-400">Conversion</td>
                      <td className="py-4 px-4 text-zinc-400">10%</td>
                      <td className="py-4 px-4 text-zinc-400">£500</td>
                      <td className="py-4 px-4 text-primary">£45.00 (Sale)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 3. 90-Day Attack Plan (Interactive) */}
        <section id="roadmap" className="py-32 border-b border-white/5 snap-start bg-zinc-950">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <Crosshair className="text-primary w-8 h-8" /> 90-Day Attack Plan
              </h2>
              <p className="text-zinc-400 max-w-2xl text-lg">
                Execution is everything. A week-by-week breakdown of the campaign rollout.
              </p>
            </div>

            {/* Month Tabs */}
            <div className="flex gap-2 mb-12 border-b border-zinc-800">
              {[1, 2, 3].map((month) => (
                <button
                  key={month}
                  onClick={() => setActiveMonthTab(month)}
                  className={`px-8 py-4 text-sm font-mono uppercase tracking-wider border-b-2 transition-all ${
                    activeMonthTab === month 
                      ? 'border-primary text-primary bg-primary/5' 
                      : 'border-transparent text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900'
                  }`}
                >
                  Month {month}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="min-h-[500px]">
              {roadmap.map((phase) => (
                <div 
                  key={phase.month} 
                  className={`transition-all duration-500 ${
                    activeMonthTab === phase.month 
                      ? 'opacity-100 translate-y-0 relative z-10' 
                      : 'opacity-0 translate-y-4 absolute top-0 left-0 -z-10 hidden'
                  }`}
                >
                  <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/5 pb-8">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{phase.title}</h3>
                        <p className="text-primary font-mono uppercase tracking-wider text-sm">{phase.goal}</p>
                      </div>
                      <p className="text-zinc-400 max-w-md text-sm leading-relaxed border-l-2 border-zinc-800 pl-4">
                        {phase.description}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {phase.weeks.map((week, i) => (
                        <div key={i} className="group relative bg-black/40 border border-zinc-800 hover:border-primary/50 rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(224,255,152,0.8)] animate-pulse"></div>
                          </div>
                          
                          <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-primary group-hover:border-primary/30 transition-colors mb-6">
                            {week.icon}
                          </div>
                          
                          <div className="mb-4">
                            <span className="inline-block px-2 py-1 rounded bg-zinc-900 text-zinc-500 text-xs font-mono mb-2 border border-zinc-800">
                              WEEK {week.week}
                            </span>
                            <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                              {week.title}
                            </h4>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="p-3 rounded bg-zinc-900/50 border border-zinc-800/50">
                              <p className="text-sm font-medium text-zinc-200 mb-1">Action:</p>
                              <p className="text-sm text-zinc-400">{week.task}</p>
                            </div>
                            <p className="text-xs text-zinc-500 leading-relaxed pl-1 border-l border-zinc-800">
                              {week.context}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Blue Ocean Strategy */}
        <section id="blue-ocean" className="py-32 border-b border-white/5 snap-start bg-zinc-950">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <Brain className="text-accent w-8 h-8" /> Blue Ocean Strategy
              </h2>
              <p className="text-zinc-400 max-w-2xl text-lg">
                Why we win. The market is crowded with "Technical Analysis" noise. We own the "Psychology" lane.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="p-8 rounded-3xl bg-zinc-900/30 border border-white/5 opacity-50 hover:opacity-100 transition-opacity">
                  <h3 className="text-xl font-bold text-zinc-500 mb-4 line-through decoration-red-500/50">The Red Ocean (Competitors)</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-zinc-600">
                      <X className="w-5 h-5 text-red-900" />
                      Selling "Magic Indicators" & Signals
                    </li>
                    <li className="flex items-center gap-4 text-zinc-600">
                      <X className="w-5 h-5 text-red-900" />
                      Promoting "Get Rich Quick" Lifestyle
                    </li>
                    <li className="flex items-center gap-4 text-zinc-600">
                      <X className="w-5 h-5 text-red-900" />
                      Focus on Technicals (Support/Resistance)
                    </li>
                  </ul>
                </div>

                <div className="p-8 rounded-3xl bg-zinc-900 border border-primary/20 shadow-[0_0_50px_rgba(224,255,152,0.05)]">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    The Blue Ocean (Applecore)
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-zinc-300">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">✓</div>
                      Selling Identity Shift & Professionalism
                    </li>
                    <li className="flex items-center gap-4 text-zinc-300">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">✓</div>
                      Promoting Discipline & Risk Management
                    </li>
                    <li className="flex items-center gap-4 text-zinc-300">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">✓</div>
                      Focus on Psychology (The Inner Game)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-[100px] rounded-full opacity-30"></div>
                <div className="relative z-10 p-8 border border-white/10 rounded-3xl bg-black/50 backdrop-blur-xl">
                  <h4 className="text-sm font-mono text-zinc-500 uppercase mb-6">Market Positioning Map</h4>
                  <div className="aspect-square border-l border-b border-zinc-700 relative">
                    <div className="absolute bottom-0 left-0 w-full h-px bg-zinc-700"></div>
                    <div className="absolute bottom-0 left-0 w-px h-full bg-zinc-700"></div>
                    
                    {/* Labels */}
                    <div className="absolute -left-8 top-1/2 -rotate-90 text-xs text-zinc-500 font-mono">Psychological Focus</div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-zinc-500 font-mono">Price Point</div>

                    {/* Competitors */}
                    <div className="absolute bottom-10 left-10 w-4 h-4 rounded-full bg-red-500/50 blur-sm" title="Cheap Signals"></div>
                    <div className="absolute bottom-20 left-20 w-6 h-6 rounded-full bg-red-500/50 blur-sm" title="Course Sellers"></div>
                    <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-red-500/50 blur-sm" title="Expensive Mentorships"></div>

                    {/* Us */}
                    <div className="absolute top-10 right-10 w-8 h-8 rounded-full bg-primary shadow-[0_0_20px_rgba(224,255,152,0.5)] flex items-center justify-center text-black font-bold text-xs z-20">
                      AC
                    </div>
                    <div className="absolute top-10 right-10 text-right mt-10 mr-2">
                      <div className="text-white font-bold text-sm">Applecore</div>
                      <div className="text-primary text-xs">Premium & Psych-First</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Personas */}
        <section id="personas" className="py-32 border-b border-white/5 snap-start bg-zinc-900/30">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <Users className="text-white w-8 h-8" /> Target Personas
              </h2>
              <p className="text-zinc-400 max-w-2xl text-lg">
                We don't target everyone. We target the frustrated trader who knows the problem is them.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-primary/20 transition-colors group">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">The "Cycle Breaker"</h3>
                    <p className="text-zinc-500 font-mono text-sm">Primary Avatar (70%)</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-2xl">🔄</div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-wider mb-2">Pain Points</h4>
                    <p className="text-zinc-400 leading-relaxed">
                      Has a strategy but can't stick to it. Blows up accounts after a winning streak. Knows technicals but fails at execution.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-wider mb-2">The Hook</h4>
                    <p className="text-primary leading-relaxed">
                      "It's not your strategy. It's your mind. Stop looking for a new indicator and start fixing your brain."
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-secondary/20 transition-colors group">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">The "System Seeker"</h3>
                    <p className="text-zinc-500 font-mono text-sm">Secondary Avatar (30%)</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-2xl">⚙️</div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-wider mb-2">Pain Points</h4>
                    <p className="text-zinc-400 leading-relaxed">
                      Overwhelmed by information. Jumping from strategy to strategy. Needs structure and a clear, step-by-step process.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-wider mb-2">The Hook</h4>
                    <p className="text-secondary leading-relaxed">
                      "Chaos is the enemy. We provide the framework to turn trading into a boring, profitable business."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. User Journey Funnel */}
        <section id="funnel" className="py-32 border-b border-white/5 snap-start bg-zinc-950">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <TrendingUp className="text-primary w-8 h-8" /> User Journey
              </h2>
              <p className="text-zinc-400 max-w-2xl text-lg">
                From stranger to loyalist. The path is designed to filter out the weak and elevate the serious.
              </p>
            </div>

            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent hidden md:block"></div>

              <div className="space-y-12">
                <div className="relative pl-0 md:pl-24">
                  <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-full bg-zinc-900 border border-primary/50 items-center justify-center text-primary font-bold z-10">1</div>
                  <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-2">Awareness (Top of Funnel)</h3>
                    <p className="text-zinc-400 mb-4">Social Media Content & Ads</p>
                    <div className="flex gap-3 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-zinc-300 border border-zinc-700">Reels</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-zinc-300 border border-zinc-700">TikToks</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-zinc-300 border border-zinc-700">YouTube Shorts</span>
                    </div>
                  </div>
                </div>

                <div className="relative pl-0 md:pl-24">
                  <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-full bg-zinc-900 border border-secondary/50 items-center justify-center text-secondary font-bold z-10">2</div>
                  <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-2">Consideration (Middle of Funnel)</h3>
                    <p className="text-zinc-400 mb-4">Lead Magnet & Email Nurture</p>
                    <div className="flex gap-3 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-zinc-300 border border-zinc-700">Psychology Audit</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-zinc-300 border border-zinc-700">7-Day Reset</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-zinc-300 border border-zinc-700">Webinars</span>
                    </div>
                  </div>
                </div>

                <div className="relative pl-0 md:pl-24">
                  <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-full bg-zinc-900 border border-accent/50 items-center justify-center text-accent font-bold z-10">3</div>
                  <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-2">Conversion (Bottom of Funnel)</h3>
                    <p className="text-zinc-400 mb-4">Paid Offers</p>
                    <div className="flex gap-3 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-xs text-primary border border-primary/20">Alpha Cohort (£497)</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-zinc-300 border border-zinc-700">Membership (£49/mo)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Automation & Email */}
        <section id="automation" className="py-32 border-b border-white/5 snap-start bg-zinc-900/30">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <Mail className="text-white w-8 h-8" /> Automation & Email
              </h2>
              <p className="text-zinc-400 max-w-2xl text-lg">
                The engine that runs while we sleep. High-value touchpoints delivered automatically.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(emailTemplates).map(([key, template]) => (
                <div 
                  key={key}
                  onClick={() => setSelectedEmail(key)}
                  className="group cursor-pointer p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-zinc-500 uppercase">{key} Flow</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">{template.subject}</h3>
                  <p className="text-zinc-500 text-sm line-clamp-3 mb-4">
                    {template.body}
                  </p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    Preview Email <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. KPI Dashboard Simulator */}
        <section id="kpi" className="py-32 snap-start bg-zinc-950">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <Calculator className="text-primary w-8 h-8" /> KPI Simulator
              </h2>
              <p className="text-zinc-400 max-w-2xl text-lg">
                Project your revenue based on ad spend and conversion metrics.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-12">
              {/* Controls */}
              <div className="lg:col-span-4 space-y-8 p-8 rounded-3xl bg-zinc-900 border border-white/5">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Monthly Ad Budget (£)</label>
                  <input 
                    type="range" 
                    min="1000" 
                    max="50000" 
                    step="1000" 
                    value={simBudget}
                    onChange={(e) => setSimBudget(parseInt(e.target.value))}
                    className="w-full accent-primary mb-2"
                  />
                  <div className="text-2xl font-bold text-white">£{simBudget.toLocaleString()}</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Cost Per Click (CPC)</label>
                  <input 
                    type="range" 
                    min="0.5" 
                    max="5" 
                    step="0.1" 
                    value={simCPC}
                    onChange={(e) => setSimCPC(parseFloat(e.target.value))}
                    className="w-full accent-primary mb-2"
                  />
                  <div className="text-2xl font-bold text-white">£{simCPC.toFixed(2)}</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Conversion Rate (%)</label>
                  <input 
                    type="range" 
                    min="0.5" 
                    max="10" 
                    step="0.1" 
                    value={simCR}
                    onChange={(e) => setSimCR(parseFloat(e.target.value))}
                    className="w-full accent-primary mb-2"
                  />
                  <div className="text-2xl font-bold text-white">{simCR}%</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Avg Order Value (£)</label>
                  <input 
                    type="range" 
                    min="20" 
                    max="200" 
                    step="5" 
                    value={simAOV}
                    onChange={(e) => setSimAOV(parseInt(e.target.value))}
                    className="w-full accent-primary mb-2"
                  />
                  <div className="text-2xl font-bold text-white">£{simAOV}</div>
                </div>
              </div>

              {/* Results */}
              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
                <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 flex flex-col justify-center">
                  <div className="text-zinc-500 text-sm uppercase tracking-wider mb-2">Traffic</div>
                  <div className="text-4xl font-bold text-white mb-1">
                    {Math.floor(simBudget / simCPC).toLocaleString()}
                  </div>
                  <div className="text-zinc-600 text-sm">Clicks / Visitors</div>
                </div>

                <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 flex flex-col justify-center">
                  <div className="text-zinc-500 text-sm uppercase tracking-wider mb-2">Conversions</div>
                  <div className="text-4xl font-bold text-white mb-1">
                    {Math.floor((simBudget / simCPC) * (simCR / 100)).toLocaleString()}
                  </div>
                  <div className="text-zinc-600 text-sm">New Customers</div>
                </div>

                <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 flex flex-col justify-center">
                  <div className="text-zinc-500 text-sm uppercase tracking-wider mb-2">Revenue</div>
                  <div className="text-4xl font-bold text-primary mb-1">
                    £{Math.floor((simBudget / simCPC) * (simCR / 100) * simAOV).toLocaleString()}
                  </div>
                  <div className="text-zinc-600 text-sm">Gross Revenue</div>
                </div>

                <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 flex flex-col justify-center">
                  <div className="text-zinc-500 text-sm uppercase tracking-wider mb-2">ROAS</div>
                  <div className={`text-4xl font-bold mb-1 ${((simBudget / simCPC) * (simCR / 100) * simAOV) / simBudget >= 2 ? 'text-emerald-500' : 'text-red-500'}`}>
                    {(((simBudget / simCPC) * (simCR / 100) * simAOV) / simBudget).toFixed(2)}x
                  </div>
                  <div className="text-zinc-600 text-sm">Return on Ad Spend</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
