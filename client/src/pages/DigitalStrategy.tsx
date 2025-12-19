import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArrowRight, Target, Users, BarChart3, Shield, Zap, Brain, Crosshair, TrendingUp, Lock, Eye, X, Maximize2, Minimize2, Layers, Smartphone, Server, AlertTriangle, ChevronDown, ChevronUp, Download, Calculator, Mail, DollarSign, PieChart, FileText, Video, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function DigitalStrategy() {
  const [location] = useLocation();
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);
  const [immersiveMode, setImmersiveMode] = useState(false);
  const [expandedMonth, setExpandedMonth] = useState<number | null>(1); // Default open first month
  const [activeSection, setActiveSection] = useState(0);
  const [simBudget, setSimBudget] = useState(5000);
  const [simCPC, setSimCPC] = useState(1.50);
  const [simCR, setSimCR] = useState(3.5);
  const [simAOV, setSimAOV] = useState(65);

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
        }
      ]
    }
  ];

  const handlePrint = () => {
    setExpandedMonth(null);
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
          .roadmap-details { display: block !important; }
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
          <div className="bg-zinc-900 border border-zinc-800 w-full max-w-lg rounded-xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="bg-zinc-800/50 p-4 flex items-center justify-between border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <div className="w-3 h-3 rounded-full bg-accent"></div>
              </div>
              <button onClick={() => setSelectedEmail(null)} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-8 space-y-6">
              <div className="space-y-2 border-b border-zinc-800 pb-6">
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-gray-500 w-16">From:</span>
                  <span className="text-white font-medium">Applecore &lt;hq@applecore.com&gt;</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-gray-500 w-16">Subject:</span>
                  <span className="text-white font-medium">{emailTemplates[selectedEmail as keyof typeof emailTemplates].subject}</span>
                </div>
              </div>
              <div className="text-gray-300 whitespace-pre-line leading-relaxed font-mono text-sm">
                {emailTemplates[selectedEmail as keyof typeof emailTemplates].body}
              </div>
              <div className="pt-4">
                <Button className="w-full bg-primary text-black hover:bg-primary/90">
                  {emailTemplates[selectedEmail as keyof typeof emailTemplates].cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-primary selection:text-black">
        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md transition-transform duration-500 ${immersiveMode ? '-translate-y-full' : 'translate-y-0'}`}>
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/">
                <div className="flex items-center gap-2 cursor-pointer group">
                  <img src="/logo.png" alt="Applecore" className="h-6 w-auto brightness-0 invert transition-transform group-hover:scale-105" />
                </div>
              </Link>
              <div className="hidden md:flex items-center gap-1">
                <Link href="/">
                  <span className="px-4 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer">
                    1. Brand Guide
                  </span>
                </Link>
                <Link href="/mindset-revolution">
                  <span className="px-4 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer">
                    2. Ad Concept
                  </span>
                </Link>
                <Link href="/digital-strategy">
                  <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 transition-colors cursor-pointer">
                    3. Digital Strategy
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded bg-zinc-800 text-zinc-400 text-xs font-mono uppercase tracking-wider border border-zinc-700">
                Confidential
              </span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="pt-40 pb-32 border-b border-white/5 relative overflow-hidden snap-start bg-zinc-950">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <h4 className="text-primary font-mono mb-6 tracking-widest uppercase text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Q1 2026 Strategy
              </h4>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-white leading-[0.9]">
                Digital<br/>
                <span className="text-zinc-700">Dominance.</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-2xl border-l-2 border-primary/50 pl-6">
                A comprehensive roadmap to capture, convert, and retain the next generation of traders through psychological mastery and precision targeting.
              </p>
            </div>
          </div>
        </section>

        {/* 1. Strategic Objectives */}
        <section id="objectives" className="py-32 border-b border-white/5 bg-zinc-900/30 snap-start">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <Target className="text-primary w-8 h-8" /> Strategic Objectives
              </h2>
              <p className="text-zinc-400 max-w-2xl text-lg">
                Our primary goals for the Q1 launch phase. These metrics define success.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-10 rounded-3xl bg-zinc-900 border border-white/5 hover:border-primary/20 transition-all hover:-translate-y-1 duration-300">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Acquisition</h3>
                <div className="text-5xl font-bold text-white mb-2 tracking-tight">1,000+</div>
                <p className="text-base text-zinc-500">New Active Users</p>
                <div className="mt-6 pt-6 border-t border-white/5 text-sm text-zinc-500 font-mono">
                  Target CPA: &lt; £25
                </div>
              </div>
              <div className="p-10 rounded-3xl bg-zinc-900 border border-white/5 hover:border-secondary/20 transition-all hover:-translate-y-1 duration-300">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8">
                  <DollarSign className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Revenue</h3>
                <div className="text-5xl font-bold text-white mb-2 tracking-tight">£50k+</div>
                <p className="text-base text-zinc-500">Monthly Recurring Revenue</p>
                <div className="mt-6 pt-6 border-t border-white/5 text-sm text-zinc-500 font-mono">
                  Target ROAS: 3.5x
                </div>
              </div>
              <div className="p-10 rounded-3xl bg-zinc-900 border border-white/5 hover:border-accent/20 transition-all hover:-translate-y-1 duration-300">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8">
                  <Lock className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Retention</h3>
                <div className="text-5xl font-bold text-white mb-2 tracking-tight">85%</div>
                <p className="text-base text-zinc-500">Month 1 Retention Rate</p>
                <div className="mt-6 pt-6 border-t border-white/5 text-sm text-zinc-500 font-mono">
                  Churn Goal: &lt; 5%
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Media Buying Plan */}
        <section id="media-plan" className="py-32 border-b border-white/5 snap-start bg-zinc-950">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <PieChart className="text-secondary w-8 h-8" /> Media Buying Plan
              </h2>
              <p className="text-zinc-400 max-w-2xl text-lg">
                Allocation of the £5,000 monthly ad budget. We are cutting Facebook to focus purely on high-engagement video platforms.
              </p>
            </div>
            
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-4 space-y-8">
                <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5">
                  <h3 className="text-xl font-bold text-white mb-6">Budget Allocation</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm mb-3">
                        <span className="text-zinc-300">Instagram Reels</span>
                        <span className="text-primary font-mono font-bold">50%</span>
                      </div>
                      <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden">
                        <div className="bg-primary w-[50%] h-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-3">
                        <span className="text-zinc-300">TikTok Ads</span>
                        <span className="text-secondary font-mono font-bold">30%</span>
                      </div>
                      <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden">
                        <div className="bg-secondary w-[30%] h-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-3">
                        <span className="text-zinc-300">YouTube Shorts</span>
                        <span className="text-accent font-mono font-bold">20%</span>
                      </div>
                      <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden">
                        <div className="bg-accent w-[20%] h-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
                  <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                    <X className="w-4 h-4" /> Channel Excluded
                  </h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    <strong>Facebook Feed:</strong> Removed due to high CPM and older demographic mismatch. We need speed and aggression.
                  </p>
                </div>
              </div>

              <div className="md:col-span-8 grid sm:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-900 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">Instagram Reels</h4>
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    Primary acquisition channel. High quality traffic, good retention. Best for educational content.
                  </p>
                  <ul className="space-y-3 text-sm text-zinc-500">
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>Target: Trading, Finance, Luxury</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>Format: 9:16 High Contrast Video</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>Goal: Direct Sign-up</li>
                  </ul>
                </div>

                <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-900 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">TikTok Ads</h4>
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    Volume play. Cheaper clicks, younger demographic, viral potential. Best for "Shock" content.
                  </p>
                  <ul className="space-y-3 text-sm text-zinc-500">
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>Target: Broad, "Make Money Online"</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>Format: UGC Style, Fast Paced</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>Goal: Lead Gen (Email Capture)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 90-Day Roadmap (RESTRUCTURED) */}
        <section id="roadmap" className="py-32 border-b border-white/5 snap-start bg-zinc-900/30">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <Layers className="text-white w-8 h-8" /> 90-Day Attack Plan
              </h2>
              <p className="text-zinc-400 max-w-2xl text-lg">
                Phased execution to minimize risk and maximize learning. Click on a month to see the weekly breakdown.
              </p>
            </div>

            <div className="space-y-8">
              {roadmap.map((phase) => (
                <div key={phase.month} className={`border rounded-3xl overflow-hidden transition-all duration-500 ${expandedMonth === phase.month ? 'bg-zinc-900 border-primary/20 shadow-2xl shadow-black/50' : 'bg-zinc-900/50 border-white/5 hover:bg-zinc-900'}`}>
                  <div 
                    className="p-8 flex items-center justify-between cursor-pointer"
                    onClick={() => setExpandedMonth(expandedMonth === phase.month ? null : phase.month)}
                  >
                    <div className="flex items-center gap-8">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold font-mono border transition-colors ${expandedMonth === phase.month ? 'bg-primary text-black border-primary' : 'bg-zinc-800 text-zinc-500 border-white/5'}`}>
                        M{phase.month}
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold mb-2 ${expandedMonth === phase.month ? 'text-white' : 'text-zinc-400'}`}>{phase.title}</h3>
                        <p className="text-zinc-500">{phase.goal}</p>
                      </div>
                    </div>
                    <div className={`p-3 rounded-full border transition-all ${expandedMonth === phase.month ? 'bg-primary/10 text-primary border-primary/20 rotate-180' : 'bg-zinc-800 text-zinc-500 border-white/5'}`}>
                      <ChevronDown />
                    </div>
                  </div>
                  
                  {(expandedMonth === phase.month) && (
                    <div className="p-8 pt-0 border-t border-white/5">
                      <div className="mt-8 mb-8 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                        <p className="text-zinc-300 leading-relaxed">
                          <span className="text-primary font-bold uppercase text-xs tracking-wider block mb-2">Strategy Context</span>
                          {phase.description}
                        </p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        {phase.weeks.map((week) => (
                          <div key={week.week} className="p-6 rounded-2xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-colors">
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/10">Week {week.week}</span>
                              <div className="text-zinc-500">{week.icon}</div>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">{week.title}</h4>
                            <p className="text-sm text-zinc-300 font-medium mb-3">{week.task}</p>
                            <p className="text-sm text-zinc-500 leading-relaxed border-t border-white/5 pt-3">
                              {week.context}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blue Ocean Strategy */}
        <section id="blue-ocean" className="py-32 border-b border-white/5 bg-zinc-950 snap-start">
          <div className="container">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-4">
                <div className="sticky top-32">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8">
                    <Crosshair className="h-7 w-7" />
                  </div>
                  <h2 className="text-4xl font-bold mb-6 text-white">Blue Ocean Strategy</h2>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    Escaping the "Red Ocean" of generic indicators and signal groups. We don't compete on price or promises; we compete on <span className="text-white font-bold">Truth</span>.
                  </p>
                </div>
              </div>
              <div className="md:col-span-8">
                <div className="overflow-hidden rounded-3xl border border-white/5 bg-zinc-900">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/5 bg-zinc-950">
                        <th className="py-6 px-8 text-zinc-500 font-medium uppercase text-xs tracking-wider">Feature</th>
                        <th className="py-6 px-8 text-red-400 font-bold uppercase text-xs tracking-wider bg-red-500/5">Competitors (Red Ocean)</th>
                        <th className="py-6 px-8 text-primary font-bold uppercase text-xs tracking-wider bg-primary/5 border-l border-primary/10">Applecore (Blue Ocean)</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-6 px-8 text-white font-medium">Core Promise</td>
                        <td className="py-6 px-8 text-zinc-400">"Get Rich Quick"</td>
                        <td className="py-6 px-8 text-white font-bold border-l border-white/5">"Master Your Mind"</td>
                      </tr>
                      <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-6 px-8 text-white font-medium">Visual Style</td>
                        <td className="py-6 px-8 text-zinc-400">Lamborghinis, Cash, Beaches</td>
                        <td className="py-6 px-8 text-white font-bold border-l border-white/5">Dark, Industrial, Data-Driven</td>
                      </tr>
                      <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-6 px-8 text-white font-medium">Product Focus</td>
                        <td className="py-6 px-8 text-zinc-400">Magic Indicators (Black Box)</td>
                        <td className="py-6 px-8 text-white font-bold border-l border-white/5">Education & Tools (Glass Box)</td>
                      </tr>
                      <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-6 px-8 text-white font-medium">Community</td>
                        <td className="py-6 px-8 text-zinc-400">Signal Following (Sheep)</td>
                        <td className="py-6 px-8 text-white font-bold border-l border-white/5">Skill Building (Wolves)</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="py-6 px-8 text-white font-medium">Retention</td>
                        <td className="py-6 px-8 text-zinc-400">Low (Churn after loss)</td>
                        <td className="py-6 px-8 text-white font-bold border-l border-white/5">High (Loyalty to process)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personas */}
        <section id="personas" className="py-32 border-b border-white/5 snap-start bg-zinc-900/30">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Target Personas</h2>
              <p className="text-zinc-400 max-w-2xl text-lg">Who we are talking to, and more importantly, who we are ignoring.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-10 rounded-3xl bg-zinc-900 border border-primary/20 relative overflow-hidden group hover:bg-zinc-800 transition-all duration-500">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Target className="w-32 h-32 text-primary" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block py-2 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20">Primary Target</span>
                  <h3 className="text-3xl font-bold text-white mb-4">The "Frustrated Seeker"</h3>
                  <p className="text-zinc-400 mb-8 leading-relaxed text-lg">Male, 25-35. Has blown at least one trading account. Knows the basics but lacks consistency. Blames "manipulation" but secretly knows it's his discipline.</p>
                  
                  <div className="space-y-6">
                    <div className="bg-black/20 p-6 rounded-2xl">
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-primary" /> Pain Points
                      </h4>
                      <ul className="text-zinc-400 space-y-2">
                        <li>• "I make money all week and lose it on Friday."</li>
                        <li>• "I hesitate and miss the move."</li>
                        <li>• "I revenge trade to make back losses."</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">The Hook</h4>
                      <p className="text-lg text-primary font-medium">"It's not the market. It's you. Here is how to fix you."</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 rounded-3xl bg-zinc-950 border border-white/5 relative overflow-hidden opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <X className="w-32 h-32 text-zinc-500" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block py-2 px-4 rounded-full bg-white/5 text-zinc-400 text-xs font-bold uppercase tracking-wider mb-6 border border-white/10">Anti-Persona</span>
                  <h3 className="text-3xl font-bold text-white mb-4">The "Lottery Player"</h3>
                  <p className="text-zinc-500 mb-8 leading-relaxed text-lg">Male, 18-24. Wants to turn $100 into $10k in a week. Looking for "signals" so he doesn't have to think. Will churn immediately.</p>
                  
                  <div className="space-y-6">
                    <div className="bg-white/5 p-6 rounded-2xl">
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Red Flags</h4>
                      <ul className="text-zinc-500 space-y-2">
                        <li>• "Is this 100% win rate?"</li>
                        <li>• "Can I start with $50?"</li>
                        <li>• "Just tell me what to buy."</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Repel Strategy</h4>
                      <p className="text-lg text-zinc-300 font-medium">Use difficult terminology and emphasize "Hard Work" to filter them out early.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Journey Funnel */}
        <section id="funnel" className="py-32 border-b border-white/5 bg-zinc-950 snap-start">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">The User Journey</h2>
              <p className="text-zinc-400 max-w-2xl text-lg">From stranger to evangelist. A structured path to LTV.</p>
            </div>
            
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block opacity-30"></div>

              <div className="space-y-16 relative z-10">
                {/* Stage 1: Awareness */}
                <div className="flex flex-col md:flex-row gap-10 items-start group">
                  <div className="w-20 h-20 rounded-full bg-zinc-950 border-4 border-primary flex items-center justify-center shrink-0 z-10 shadow-[0_0_30px_rgba(224,255,152,0.2)] group-hover:scale-110 transition-transform">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1 p-8 rounded-3xl bg-zinc-900 border border-primary/20 hover:bg-zinc-800 transition-colors">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-white">1. Discovery (The Pattern Interrupt)</h3>
                      <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/10">Ads / Organic</span>
                    </div>
                    <p className="text-zinc-400 mb-8 text-lg">User sees a "Mindset Revolution" ad. It attacks their insecurity (gambling mentality) rather than promising riches.</p>
                    <div className="grid grid-cols-2 gap-6 text-sm">
                      <div className="bg-black/20 p-4 rounded-xl">
                        <span className="block text-zinc-500 text-xs uppercase mb-1">Asset</span>
                        <span className="text-white font-medium">"Stop Acting Like An Amateur" Video</span>
                      </div>
                      <div className="bg-black/20 p-4 rounded-xl">
                        <span className="block text-zinc-500 text-xs uppercase mb-1">KPI</span>
                        <span className="text-white font-medium">CTR &gt; 1.5%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stage 2: Consideration */}
                <div className="flex flex-col md:flex-row gap-10 items-start group">
                  <div className="w-20 h-20 rounded-full bg-zinc-950 border-4 border-white flex items-center justify-center shrink-0 z-10 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 p-8 rounded-3xl bg-zinc-900 border border-white/20 hover:bg-zinc-800 transition-colors">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-white">2. Indoctrination (The Value Hook)</h3>
                      <span className="text-xs font-mono text-white bg-white/10 px-3 py-1 rounded-full border border-white/10">Landing Page</span>
                    </div>
                    <p className="text-zinc-400 mb-8 text-lg">User lands on a VSL (Video Sales Letter) that explains the "Psychological Edge". They opt-in for a free "Trader Personality Test".</p>
                    <div className="grid grid-cols-2 gap-6 text-sm">
                      <div className="bg-black/20 p-4 rounded-xl">
                        <span className="block text-zinc-500 text-xs uppercase mb-1">Asset</span>
                        <span className="text-white font-medium">Personality Quiz / Lead Magnet</span>
                      </div>
                      <div className="bg-black/20 p-4 rounded-xl">
                        <span className="block text-zinc-500 text-xs uppercase mb-1">KPI</span>
                        <span className="text-white font-medium">Opt-in Rate &gt; 25%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stage 3: Conversion */}
                <div className="flex flex-col md:flex-row gap-10 items-start group">
                  <div className="w-20 h-20 rounded-full bg-zinc-950 border-4 border-secondary flex items-center justify-center shrink-0 z-10 shadow-[0_0_30px_rgba(167,139,250,0.2)] group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="flex-1 p-8 rounded-3xl bg-zinc-900 border border-secondary/20 hover:bg-zinc-800 transition-colors">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-white">3. Conversion (The Tripwire)</h3>
                      <span className="text-xs font-mono text-secondary bg-secondary/10 px-3 py-1 rounded-full border border-secondary/10">Checkout</span>
                    </div>
                    <p className="text-zinc-400 mb-8 text-lg">Immediately after opt-in, user is offered a low-ticket product (£4.99 "Trading Journal Template") to break the wallet barrier.</p>
                    <div className="grid grid-cols-2 gap-6 text-sm">
                      <div className="bg-black/20 p-4 rounded-xl">
                        <span className="block text-zinc-500 text-xs uppercase mb-1">Offer</span>
                        <span className="text-white font-medium">£4.99 No-Brainer</span>
                      </div>
                      <div className="bg-black/20 p-4 rounded-xl">
                        <span className="block text-zinc-500 text-xs uppercase mb-1">KPI</span>
                        <span className="text-white font-medium">Purchase Rate &gt; 5%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stage 4: Ascension */}
                <div className="flex flex-col md:flex-row gap-10 items-start group">
                  <div className="w-20 h-20 rounded-full bg-zinc-950 border-4 border-accent flex items-center justify-center shrink-0 z-10 shadow-[0_0_30px_rgba(244,114,182,0.2)] group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1 p-8 rounded-3xl bg-zinc-900 border border-accent/20 hover:bg-zinc-800 transition-colors">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-white">4. Ascension (The Core Offer)</h3>
                      <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/10">Upsell</span>
                    </div>
                    <p className="text-zinc-400 mb-8 text-lg">Buyers are nurtured via email to join the "Applecore Academy" (Monthly Subscription). Non-buyers get the "7-Day Mindset Reset" sequence.</p>
                    <div className="grid grid-cols-2 gap-6 text-sm">
                      <div className="bg-black/20 p-4 rounded-xl">
                        <span className="block text-zinc-500 text-xs uppercase mb-1">Product</span>
                        <span className="text-white font-medium">£49/mo Membership</span>
                      </div>
                      <div className="bg-black/20 p-4 rounded-xl">
                        <span className="block text-zinc-500 text-xs uppercase mb-1">KPI</span>
                        <span className="text-white font-medium">LTV &gt; £250</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Email Automation Hub */}
        <section id="automation" className="py-32 border-b border-white/5 bg-zinc-900/30 snap-start">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <Mail className="text-primary w-8 h-8" /> Email Automation Hub
              </h2>
              <p className="text-zinc-400 max-w-2xl text-lg">
                The engine room of retention. Automated sequences that run 24/7.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Nurturing Card */}
              <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1 duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Acquisition</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">The "Mindset Reset"</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  5-day sequence for new leads. Delivers value first, pitches product last.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-white/10 hover:bg-primary hover:text-black hover:border-primary transition-all py-6"
                  onClick={() => setSelectedEmail('nurturing')}
                >
                  Preview Email 1
                </Button>
              </div>

              {/* Welcome Card */}
              <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-secondary/50 transition-all hover:-translate-y-1 duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                    <Zap className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Activation</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">The "First Win"</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  Onboarding sequence designed to get them to their first profitable trade in 7 days.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-white/10 hover:bg-secondary hover:text-black hover:border-secondary transition-all py-6"
                  onClick={() => setSelectedEmail('welcome')}
                >
                  Preview Email 1
                </Button>
              </div>

              {/* Win-Back Card */}
              <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-accent/50 transition-all hover:-translate-y-1 duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-accent/10 rounded-xl text-accent">
                    <Shield className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Retention</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">The "Lazarus"</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  Re-engagement sequence for churned users. Acknowledges failure, offers new hope.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-white/10 hover:bg-accent hover:text-black hover:border-accent transition-all py-6"
                  onClick={() => setSelectedEmail('winback')}
                >
                  Preview Email 1
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* KPI Dashboard & Simulator */}
        <section id="kpi" className="py-32 border-b border-white/5 snap-start bg-zinc-950">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <Calculator className="text-accent w-8 h-8" /> ROAS Simulator
              </h2>
              <p className="text-zinc-400 max-w-2xl text-lg">
                Project your profitability based on key metrics.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium text-zinc-300">Monthly Ad Budget</label>
                    <span className="text-sm font-bold text-primary">£{simBudget}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="20000" 
                    step="500" 
                    value={simBudget} 
                    onChange={(e) => setSimBudget(parseInt(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium text-zinc-300">CPC (Cost Per Click)</label>
                    <span className="text-sm font-bold text-white">£{simCPC.toFixed(2)}</span>
                  </div>
                  <input 
                    type="range" 
                    min="0.50" 
                    max="5.00" 
                    step="0.10" 
                    value={simCPC} 
                    onChange={(e) => setSimCPC(parseFloat(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium text-zinc-300">Conversion Rate</label>
                    <span className="text-sm font-bold text-secondary">{simCR}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0.5" 
                    max="10.0" 
                    step="0.1" 
                    value={simCR} 
                    onChange={(e) => setSimCR(parseFloat(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-secondary"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium text-zinc-300">AOV (Average Order Value)</label>
                    <span className="text-sm font-bold text-accent">£{simAOV}</span>
                  </div>
                  <input 
                    type="range" 
                    min="20" 
                    max="200" 
                    step="5" 
                    value={simAOV} 
                    onChange={(e) => setSimAOV(parseInt(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/5 rounded-3xl p-10 flex flex-col justify-center shadow-2xl">
                <div className="grid grid-cols-2 gap-10 mb-10">
                  <div>
                    <div className="text-sm text-zinc-500 mb-2 uppercase tracking-wider">Traffic</div>
                    <div className="text-3xl font-bold text-white">{Math.round(simBudget / simCPC).toLocaleString()} <span className="text-sm font-normal text-zinc-500">Clicks</span></div>
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 mb-2 uppercase tracking-wider">Sales</div>
                    <div className="text-3xl font-bold text-white">{Math.round((simBudget / simCPC) * (simCR / 100)).toLocaleString()} <span className="text-sm font-normal text-zinc-500">Orders</span></div>
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 mb-2 uppercase tracking-wider">Revenue</div>
                    <div className="text-3xl font-bold text-primary">£{Math.round((simBudget / simCPC) * (simCR / 100) * simAOV).toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 mb-2 uppercase tracking-wider">ROAS</div>
                    <div className={`text-3xl font-bold ${((simBudget / simCPC) * (simCR / 100) * simAOV) / simBudget >= 2 ? 'text-green-500' : 'text-red-500'}`}>
                      {(((simBudget / simCPC) * (simCR / 100) * simAOV) / simBudget).toFixed(2)}x
                    </div>
                  </div>
                </div>
                
                <div className="pt-10 border-t border-white/5">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-white">Net Profit</span>
                    <span className={`text-4xl font-black ${((simBudget / simCPC) * (simCR / 100) * simAOV) - simBudget > 0 ? 'text-primary' : 'text-red-500'}`}>
                      £{Math.round(((simBudget / simCPC) * (simCR / 100) * simAOV) - simBudget).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
