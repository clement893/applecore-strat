import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArrowRight, Target, Users, BarChart3, Shield, Zap, Brain, Crosshair, TrendingUp, Lock, Eye, X, Maximize2, Minimize2, Layers, Smartphone, Server, AlertTriangle, ChevronDown, ChevronUp, Download, Calculator, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function DigitalStrategy() {
  const [location] = useLocation();
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);
  const [immersiveMode, setImmersiveMode] = useState(false);
  const [expandedMonth, setExpandedMonth] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [simBudget, setSimBudget] = useState(5000);
  const [simCPC, setSimCPC] = useState(1.50);
  const [simCR, setSimCR] = useState(3.5);
  const [simAOV, setSimAOV] = useState(65);

  const sections = [
    { id: "hero", label: "Overview" },
    { id: "blue-ocean", label: "Blue Ocean" },
    { id: "personas", label: "Personas" },
    { id: "funnel", label: "User Journey" },
    { id: "ascension", label: "Ascension" },
    { id: "roadmap", label: "90-Day Plan" },
    { id: "organic", label: "Organic Content" },
    { id: "automation", label: "Automation" },
    { id: "retention", label: "Retention" },
    { id: "tech-stack", label: "Tech Stack" },
            { id: "risk", label: "Risk Mitigation" },
    { id: "budget", label: "Budget" },
    { id: "checklist", label: "Launch Checklist" },
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
        rootMargin: "-50% 0px -50% 0px", // Trigger when section is in the middle of the viewport
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
      weeks: [
        { week: 1, task: "Launch 'Stop Acting Like An Amateur' video campaign (TikTok/Reels)" },
        { week: 2, task: "Seed 'Horror Stories' content in Reddit/Discord communities" },
        { week: 3, task: "Release free 'Psychology Audit' tool to capture leads" },
        { week: 4, task: "First 'Live Trading Psychology' session (No charts, just mindset)" }
      ]
    },
    {
      month: 2,
      title: "Indoctrination",
      goal: "Deepen Trust & Filter for Quality",
      weeks: [
        { week: 5, task: "Activate 'The 7-Day Mindset Reset' Email Sequence" },
        { week: 6, task: "Retarget video viewers with 'Deep Dive' educational content" },
        { week: 7, task: "Open applications for 'Alpha Cohort' (Scarcity play)" },
        { week: 8, task: "Launch 'The Institutional Edge' webinar series" }
      ]
    },
    {
      month: 3,
      title: "Monetization",
      goal: "Scale Revenue & Lock-in Retention",
      weeks: [
        { week: 9, task: "Close 'Alpha Cohort' and launch paid membership" },
        { week: 10, task: "Activate affiliate program for successful students only" },
        { week: 11, task: "Scale ad spend on winning creative variants" },
        { week: 12, task: "Introduce 'Inner Circle' High-Ticket upsell" }
      ]
    }
  ];

  const handlePrint = () => {
    // Expand all months for printing
    setExpandedMonth(null); // Reset first
    setTimeout(() => {
      window.print();
    }, 100);
  };

  return (
    <>
      <style>{`
        @media print {
          @page { margin: 0; size: auto; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; background-color: #000 !important; color: white !important; }
          .no-print { display: none !important; }
          .snap-y { scroll-snap-type: none !important; height: auto !important; overflow: visible !important; }
          .snap-start { scroll-snap-align: none !important; min-height: auto !important; height: auto !important; page-break-inside: avoid; padding-top: 2rem !important; padding-bottom: 2rem !important; border-bottom: 1px solid #333 !important; }
          nav { display: none !important; }
          /* Force dark mode colors for print */
          .bg-background { background-color: #000 !important; }
          .text-foreground { color: #fff !important; }
          .text-muted-foreground { color: #aaa !important; }
          .border-white\\/10 { border-color: #333 !important; }
          .bg-card { background-color: #111 !important; border: 1px solid #333 !important; }
          /* Ensure roadmap is expanded */
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
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === index ? 'bg-primary scale-150 shadow-[0_0_10px_rgba(224,255,152,0.5)]' : 'bg-white/20 group-hover:bg-white/50'}`} />
          </button>
        ))}
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4 no-print">
        <Button 
          onClick={handlePrint}
          className="rounded-full w-12 h-12 p-0 bg-white/10 text-white hover:bg-white/20 border border-white/20 shadow-lg backdrop-blur-sm"
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
          <div className="bg-card border border-white/10 w-full max-w-lg rounded-xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="bg-white/5 p-4 flex items-center justify-between border-b border-white/10">
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
              <div className="space-y-2 border-b border-white/10 pb-6">
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
                <Button className="w-full bg-primary text-black hover:bg-primary/90 font-bold">
                  {emailTemplates[selectedEmail as keyof typeof emailTemplates].cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black overflow-x-hidden scroll-smooth">
      {/* Global Navigation - Hidden in Immersive Mode */}
      <nav className={`fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md transition-transform duration-500 ${immersiveMode ? '-translate-y-full' : 'translate-y-0'} no-print`}>
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer group">
                <img src="/logo.png" alt="Applecore" className="h-6 w-auto brightness-0 invert transition-transform group-hover:scale-105" />
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-1">
              <Link href="/">
                <span className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${location === '/' ? 'bg-white/10 text-white' : 'text-muted-foreground hover:text-white'}`}>
                  1. Brand Guide
                </span>
              </Link>
              <Link href="/mindset-revolution">
                <span className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${location === '/mindset-revolution' ? 'bg-white/10 text-white' : 'text-muted-foreground hover:text-white'}`}>
                  2. Ad Concept
                </span>
              </Link>
              <Link href="/digital-strategy">
                <span className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${location === '/digital-strategy' ? 'bg-primary/20 text-primary border border-primary/20' : 'text-muted-foreground hover:text-white'}`}>
                  3. Digital Strategy
                </span>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 rounded bg-secondary/20 text-accent text-xs font-mono uppercase tracking-wider border border-accent/30">
              Market Analysis
            </span>
          </div>
        </div>
      </nav>

      {/* 1. HERO (CONTEXTE) */}
      <section id="hero" className="pt-32 pb-20 border-b border-white/10 relative overflow-hidden min-h-screen flex items-center print:min-h-0 print:py-12">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 print:hidden"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <h4 className="text-primary font-mono mb-4 tracking-widest uppercase text-sm">Go-To-Market Strategy</h4>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              DOMINATE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">THE NICHE.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-12">
              A comprehensive battle plan to capture the "Frustrated Trader" market, build a cult-like community, and scale to £100k/mo recurring revenue.
            </p>
            
            <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-bold text-white mb-1">£850</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Target LTV</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">3.5%</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Conv. Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">90 Days</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">To Market Leader</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STRATEGIC OBJECTIVES */}
      <section id="objectives" className="py-24 border-b border-white/10 min-h-[50vh] flex items-center bg-white/5">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase italic">
                Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Objectives</span>
              </h2>
              <p className="text-xl text-gray-400 mt-2 max-w-2xl">
                The core mission parameters for the Applecore digital ecosystem.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-white/10 p-8 rounded-2xl hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Authority Dominance</h3>
              <p className="text-gray-400 leading-relaxed">
                Establish Applecore not just as a course, but as the <strong>only institutional-grade standard</strong> in a market flooded with retail noise.
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-2xl hover:border-secondary/50 transition-colors group">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Tribal Cultivation</h3>
              <p className="text-gray-400 leading-relaxed">
                Build a fiercely loyal community ("The Core") that evangelizes the brand, reducing CAC through organic word-of-mouth and social proof.
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-2xl hover:border-accent/50 transition-colors group">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Revenue Velocity</h3>
              <p className="text-gray-400 leading-relaxed">
                Create a high-velocity funnel that converts cold traffic to £497 buyers within 14 days using aggressive retargeting and value-first nurturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BLUE OCEAN (CONTEXTE) */}
      <section id="blue-ocean" className="py-32 border-b border-white/10 relative min-h-screen flex items-center print:min-h-0 print:py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4">The Blue Ocean</h2>
              <p className="text-gray-400 max-w-xl">
                While everyone fights for the "Get Rich Quick" crowd, we build a fortress for the serious, analytical trader who has been burned by the hype.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <span className="text-xs font-mono text-primary border border-primary/30 px-3 py-1 rounded-full">COMPETITIVE LANDSCAPE</span>
            </div>
          </div>

          <div className="relative h-[500px] w-full bg-white/5 rounded-3xl border border-white/10 overflow-hidden p-8">
            {/* Grid Lines */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-20 pointer-events-none">
              <div className="border-r border-white/20"></div>
              <div className="border-r border-white/20"></div>
              <div className="border-r border-white/20"></div>
              <div className="border-r border-white/20"></div>
              <div className="border-b border-white/20 col-span-4 row-start-1"></div>
              <div className="border-b border-white/20 col-span-4 row-start-2"></div>
              <div className="border-b border-white/20 col-span-4 row-start-3"></div>
            </div>

            {/* Axes */}
            <div className="absolute left-8 bottom-8 top-8 w-px bg-white/30 flex flex-col justify-between py-4">
              <span className="text-xs font-mono -ml-6 -rotate-90 whitespace-nowrap text-gray-400">HIGH PRICE</span>
              <span className="text-xs font-mono -ml-6 -rotate-90 whitespace-nowrap text-gray-400">LOW PRICE</span>
            </div>
            <div className="absolute left-8 right-8 bottom-8 h-px bg-white/30 flex justify-between px-4">
              <span className="text-xs font-mono mt-2 text-gray-400">HYPE / GAMBLING</span>
              <span className="text-xs font-mono mt-2 text-gray-400">PROFESSIONAL / SKILL</span>
            </div>

            {/* Competitors */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-secondary/20 rounded-full blur-xl print:hidden"></div>
            <div className="absolute top-1/4 left-1/4 text-accent font-bold text-sm">The Gurus</div>
            
            {/* Applecore Position */}
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl print:hidden"></div>
            <div className="absolute bottom-1/4 right-1/4 text-primary font-bold text-lg flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              APPLECORE
            </div>
            <div className="absolute bottom-[20%] right-[20%] text-xs text-gray-400 max-w-[150px]">
              High Skill, Accessible Price. The "Smart Money" Choice.
            </div>
          </div>
        </div>
      </section>

          {/* 4. PERSONAS (CIBLE) */}
      <section id="personas" className="py-32 border-b border-white/10 relative min-h-screen flex items-center print:min-h-0 print:py-12">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Target Personas</h2>
            <p className="text-gray-400">Who are we talking to? Precision targeting prevents wasted ad spend.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-white/5">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">The "Burned" Seeker</h3>
                <span className="px-3 py-1 rounded-full bg-secondary/20 text-accent text-xs font-mono border border-secondary/30">PRIMARY</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Male, 25-35. Has lost money on "signals" and "bots". Feels betrayed by the industry. Intelligent but frustrated. Looking for a "real" profession, not a lottery ticket.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <AlertTriangle className="h-4 w-4 text-primary" />
                  <span>Pain: "I'm tired of losing money on scams."</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Target className="h-4 w-4 text-primary" />
                  <span>Desire: Mastery, control, and consistency.</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-white/5 opacity-50 hover:opacity-100 transition-opacity">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">The "System" Builder</h3>
                <span className="px-3 py-1 rounded-full bg-white/10 text-gray-400 text-xs font-mono">SECONDARY</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Male, 30-45. Engineer or tech background. Loves data, hates emotion. Wants a mechanical edge. Willing to pay for premium tools and data.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <AlertTriangle className="h-4 w-4 text-gray-500" />
                  <span>Pain: "Discretionary trading is too emotional."</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Target className="h-4 w-4 text-gray-500" />
                  <span>Desire: A repeatable, data-backed system.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FUNNEL (MÉCANIQUE) */}
      <section id="funnel" className="py-32 border-b border-white/10 relative min-h-screen flex items-center print:min-h-0 print:py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4">The User Journey</h2>
              <p className="text-gray-400 max-w-xl">
                From stranger to evangelist. A high-velocity funnel designed to liquidate ad costs immediately.
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden md:block"></div>

            <div className="grid md:grid-cols-4 gap-4 relative z-10">
              {/* Step 1 */}
              <div className="bg-card border border-white/10 p-6 rounded-xl hover:border-primary/50 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-black transition-colors font-bold">1</div>
                <h3 className="text-lg font-bold text-white mb-2">The Hook</h3>
                <p className="text-xs text-gray-400 mb-4">TikTok / Reels / Shorts</p>
                <div className="text-sm text-gray-300">
                  "Stop trading like a gambler." High-contrast, polarizing content that calls out the industry BS.
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-card border border-white/10 p-6 rounded-xl hover:border-primary/50 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-black transition-colors font-bold">2</div>
                <h3 className="text-lg font-bold text-white mb-2">The Tripwire</h3>
                <p className="text-xs text-gray-400 mb-4">£4.99 "Mindset Reset"</p>
                <div className="text-sm text-gray-300">
                  A no-brainer micro-commitment. Filters out freebie seekers. Liquidates ad spend (ROAS &gt; 1).
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-card border border-white/10 p-6 rounded-xl hover:border-primary/50 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-black transition-colors font-bold">3</div>
                <h3 className="text-lg font-bold text-white mb-2">The Core</h3>
                <p className="text-xs text-gray-400 mb-4">£49/mo Membership</p>
                <div className="text-sm text-gray-300">
                  "The Inner Circle". Daily analysis, community, and advanced tools. The recurring revenue engine.
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-card border border-white/10 p-6 rounded-xl hover:border-primary/50 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-black transition-colors font-bold">4</div>
                <h3 className="text-lg font-bold text-white mb-2">The Ascension</h3>
                <p className="text-xs text-gray-400 mb-4">£2,500 Mentorship</p>
                <div className="text-sm text-gray-300">
                  1-on-1 coaching for the top 1% of students. High-margin backend offer.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. LAUNCH CHECKLIST (EXÉCUTION) */}
      <section id="checklist" className="py-32 border-b border-white/10 relative min-h-screen flex items-center print:min-h-0 print:py-12">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4">The Value Ladder</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              How we maximize LTV by guiding customers from a low-risk entry to a high-ticket commitment.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 max-w-4xl mx-auto">
            {/* High Ticket */}
            <div className="w-full max-w-sm p-8 rounded-2xl bg-secondary/10 border border-secondary/30 text-center relative transform hover:scale-105 transition-transform">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">BACKEND (PROFIT)</div>
              <h3 className="text-2xl font-bold text-white mb-2">1-on-1 Mentorship</h3>
              <div className="text-4xl font-bold text-accent mb-4">£2,500</div>
              <p className="text-sm text-gray-400 mb-4">
                Direct access to the founder. Custom trading plan. Accountability.
              </p>
              <div className="flex justify-center gap-2">
                <span className="text-xs bg-secondary/20 text-accent px-2 py-1 rounded">High Margin</span>
                <span className="text-xs bg-secondary/20 text-accent px-2 py-1 rounded">Limited Spots</span>
              </div>
            </div>

            {/* Core Offer */}
            <div className="w-full max-w-md p-8 rounded-2xl bg-card border border-white/10 relative group hover:border-secondary/30 transition-colors transform md:-translate-y-4 shadow-2xl shadow-black z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">CORE OFFER</div>
              <h3 className="text-2xl font-bold text-white mb-2 text-center">Applecore Academy</h3>
              <div className="text-4xl font-bold text-accent mb-4 text-center">£49<span className="text-lg text-gray-500 font-normal">/mo</span></div>
              <p className="text-sm text-gray-400 mb-4 text-center">
                The recurring revenue engine. Community, tools, and ongoing education.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 max-w-xs mx-auto">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Daily Market Breakdown</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Discord Access</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Live Q&A Sessions</li>
              </ul>
            </div>

            {/* Tripwire */}
            <div className="w-full max-w-sm p-6 rounded-2xl bg-white/5 border border-white/10 text-center transform hover:scale-105 transition-transform">
              <div className="text-xs font-mono text-gray-500 mb-2">FRONTEND (ACQUISITION)</div>
              <h3 className="text-xl font-bold text-white mb-1">Mindset Reset</h3>
              <div className="text-2xl font-bold text-white mb-2">£4.99</div>
              <p className="text-xs text-gray-400">
                7-Day Audio Program. Solves the immediate pain of "Tilt".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ROADMAP (EXÉCUTION) */}
      <section id="roadmap" className="py-32 border-b border-white/10 relative min-h-screen flex items-center print:min-h-0 print:py-12">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">90-Day Attack Plan</h2>
            <p className="text-gray-400">Phase-by-phase execution roadmap. Click to expand details.</p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {roadmap.map((phase) => (
              <div key={phase.month} className="border border-white/10 rounded-xl overflow-hidden bg-card transition-all duration-300">
                <div 
                  className="p-6 flex items-center justify-between cursor-pointer hover:bg-white/5"
                  onClick={() => setExpandedMonth(expandedMonth === phase.month ? null : phase.month)}
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${expandedMonth === phase.month ? 'bg-primary text-black' : 'bg-white/10 text-white'}`}>
                      {phase.month}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                      <p className="text-sm text-gray-400">{phase.goal}</p>
                    </div>
                  </div>
                  {expandedMonth === phase.month ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-gray-500" />}
                </div>
                
                {/* Expanded Details */}
                <div className={`border-t border-white/10 bg-white/5 transition-all duration-300 overflow-hidden roadmap-details ${expandedMonth === phase.month ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 space-y-4">
                    {phase.weeks.map((week) => (
                      <div key={week.week} className="flex items-start gap-4">
                        <div className="text-xs font-mono text-primary mt-1 min-w-[60px]">WEEK {week.week}</div>
                        <div className="text-sm text-gray-300">{week.task}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* 8. ORGANIC CONTENT (EXÉCUTION) */}
      <section id="organic" className="py-32 border-b border-white/10 relative min-h-screen flex items-center print:min-h-0 print:py-12">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Organic Content Pillars</h2>
            <p className="text-gray-400">We don't just rely on ads. We build a media machine.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-card border border-white/5 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">The Analyst (YouTube)</h3>
              <p className="text-sm text-gray-400 mb-4">
                Deep dive market breakdowns. 20-minute videos showing "How I predicted this move". Builds extreme authority.
              </p>
              <div className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded w-fit">Search Traffic</div>
            </div>

            <div className="p-6 rounded-xl bg-card border border-white/5 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">The Contrarian (X/Twitter)</h3>
              <p className="text-sm text-gray-400 mb-4">
                Short, punchy threads attacking common trading myths. "Why RSI is a scam". "Stop using Support/Resistance".
              </p>
              <div className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded w-fit">Viral Reach</div>
            </div>

            <div className="p-6 rounded-xl bg-card border border-white/5 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">The Monk (IG/TikTok)</h3>
              <p className="text-sm text-gray-400 mb-4">
                Lifestyle, but not "Lambo". Discipline, gym, charts, routine. Aspirational but grounded.
              </p>
              <div className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded w-fit">Brand Image</div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. AUTOMATION (MÉCANIQUE) */}
      <section id="automation" className="py-32 border-b border-white/10 relative min-h-screen flex items-center print:min-h-0 print:py-12">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Email Automation Hub</h2>
            <p className="text-gray-400">The silent salesman working 24/7. Click to preview scripts.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Nurturing */}
            <div className="bg-card border border-white/10 rounded-2xl overflow-hidden group hover:border-secondary/50 transition-colors">
              <div className="p-6 border-b border-white/10 bg-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono text-accent uppercase tracking-wider">Acquisition</span>
                  <Mail className="h-4 w-4 text-gray-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Nurturing Sequence</h3>
                <p className="text-sm text-gray-400 mt-2">Lead Magnet → Tripwire</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Day 1: The "Casino" Myth</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Day 2: The 90% Rule</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Day 3: The Shift (Hard Sell)</span>
                </div>
                <Button 
                  onClick={() => setSelectedEmail('nurturing')}
                  className="w-full mt-4 bg-white/5 hover:bg-white/10 text-white border border-white/10"
                >
                  View Script
                </Button>
              </div>
            </div>

            {/* Welcome */}
            <div className="bg-card border border-white/10 rounded-2xl overflow-hidden group hover:border-secondary/50 transition-colors">
              <div className="p-6 border-b border-white/10 bg-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono text-accent uppercase tracking-wider">Activation</span>
                  <Mail className="h-4 w-4 text-gray-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Welcome Sequence</h3>
                <p className="text-sm text-gray-400 mt-2">Tripwire (£4.99) → Full Member</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Day 0: Access Granted</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Day 14: The Dip (Motivation)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Day 35: The Unlock (Reward)</span>
                </div>
                <Button 
                  onClick={() => setSelectedEmail('welcome')}
                  className="w-full mt-4 bg-white/5 hover:bg-white/10 text-white border border-white/10"
                >
                  View Script
                </Button>
              </div>
            </div>

            {/* Win-Back */}
            <div className="bg-card border border-white/10 rounded-2xl overflow-hidden group hover:border-secondary/50 transition-colors">
              <div className="p-6 border-b border-white/10 bg-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono text-accent uppercase tracking-wider">Retention</span>
                  <Mail className="h-4 w-4 text-gray-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Win-Back Sequence</h3>
                <p className="text-sm text-gray-400 mt-2">Churned → Reactivated</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Day 30: "Did we fail?"</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Day 45: New Feature Update</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Day 60: One-Time Offer</span>
                </div>
                <Button 
                  onClick={() => setSelectedEmail('winback')}
                  className="w-full mt-4 bg-white/5 hover:bg-white/10 text-white border border-white/10"
                >
                  View Script
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/email-strategy">
              <Button className="bg-primary text-black hover:bg-primary/90 font-bold px-8 py-6 text-lg rounded-full shadow-[0_0_20px_rgba(224,255,152,0.3)] hover:shadow-[0_0_30px_rgba(224,255,152,0.5)] transition-all">
                View Full Email Playbook <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. ASCENSION (MÉCANIQUE) */}
      <section id="ascension" className="py-32 border-b border-white/10 relative min-h-screen flex items-center print:min-h-0 print:py-12">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Retention Mechanics</h2>
            <p className="text-gray-400">How we keep them paying month after month.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Lock className="h-6 w-6 text-primary" />
                The "First Win" Protocol
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Churn happens when users feel overwhelmed. We engineer a "Quick Win" within the first 48 hours.
              </p>
              <div className="bg-card border border-white/10 p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center font-bold">1</div>
                  <div className="text-white font-medium">User Joins</div>
                </div>
                <div className="h-8 border-l border-white/10 ml-4 mb-2"></div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-bold">2</div>
                  <div className="text-white font-medium">Watches "Mindset Reset" (15 mins)</div>
                </div>
                <div className="h-8 border-l border-white/10 ml-4 mb-2"></div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold">3</div>
                  <div className="text-white font-medium">Feels "Relief" (Dopamine Hit)</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="h-6 w-6 text-secondary" />
                Tribal Lock-In
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                People come for the content, but they stay for the community. We build a "Cult of Discipline".
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-white/5 rounded-lg">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Shared Enemy</h4>
                    <p className="text-sm text-gray-500">Us vs. The "Gamblers". Us vs. The "Institutions".</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-white/5 rounded-lg">
                    <Eye className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Status Games</h4>
                    <p className="text-sm text-gray-500">Badges for "30 Days Disciplined". Leaderboards for consistency, not P&L.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FUNNEL (MÉCANIQUE) */}
      <section id="funnel" className="py-32 border-b border-white/10 relative min-h-screen flex items-center print:min-h-0 print:py-12">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">The Engine Room</h2>
            <p className="text-gray-400">Lean, scalable infrastructure. No bloat.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-card border border-white/5 text-center">
              <div className="text-xs font-mono text-gray-500 mb-2">COMMUNITY</div>
              <h3 className="text-xl font-bold text-white mb-2">Skool / Discord</h3>
              <p className="text-sm text-gray-400">Community hosting & course delivery.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-white/5 text-center">
              <div className="text-xs font-mono text-gray-500 mb-2">PAYMENTS</div>
              <h3 className="text-xl font-bold text-white mb-2">Stripe</h3>
              <p className="text-sm text-gray-400">Subscription management & billing.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-white/5 text-center">
              <div className="text-xs font-mono text-gray-500 mb-2">EMAIL / CRM</div>
              <h3 className="text-xl font-bold text-white mb-2">GoHighLevel</h3>
              <p className="text-sm text-gray-400">All-in-one marketing automation.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-white/5 text-center">
              <div className="text-xs font-mono text-gray-500 mb-2">ANALYTICS</div>
              <h3 className="text-xl font-bold text-white mb-2">Hyros</h3>
              <p className="text-sm text-gray-400">Ad tracking & attribution (Scale phase).</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. RISK MITIGATION (STRATÉGIE) */}
      <section id="risk" className="py-32 border-b border-white/10 relative min-h-screen flex items-center print:min-h-0 print:py-12"><div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Risk Mitigation</h2>
            <p className="text-gray-400">Anti-fragility protocols. What happens if things break?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4 text-red-400">Risk: Ad Account Ban</h3>
              <p className="text-gray-400 mb-4 text-sm">Meta hates "Make Money Online" offers.</p>
              <div className="bg-white/5 p-4 rounded-lg border-l-2 border-primary">
                <h4 className="text-white font-bold text-sm mb-1">Solution: Compliance First</h4>
                <p className="text-xs text-gray-400">We never promise returns. We sell "Education" and "Discipline". We use a "Bridge Page" (VSL) to insulate the ad account.</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4 text-red-400">Risk: Copycat Competitors</h3>
              <p className="text-gray-400 mb-4 text-sm">Someone steals the course and sells it for $5.</p>
              <div className="bg-white/5 p-4 rounded-lg border-l-2 border-secondary">
                <h4 className="text-white font-bold text-sm mb-1">Solution: Community Moat</h4>
                <p className="text-xs text-gray-400">They can steal the videos, but they can't steal the live calls, the Discord vibes, and the leaderboards. The value is in the network.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 16. KPI DASHBOARD (CHIFFRES) */}
      <section id="kpi" className="py-32 relative min-h-screen flex items-center print:min-h-0 print:py-12">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Budget & Unit Economics</h2>
            <p className="text-gray-400">The math behind the machine.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Monthly Ad Spend Allocation</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">Testing (Creative/Hooks)</span>
                    <span className="text-primary font-mono">20%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[20%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">Scaling (Proven Winners)</span>
                    <span className="text-secondary font-mono">60%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[60%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">Retargeting (Warm Leads)</span>
                    <span className="text-accent font-mono">20%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[20%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Target Unit Economics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-gray-400">Cost Per Lead (CPL)</span>
                  <span className="text-white font-mono">£3.50</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-gray-400">Cost Per Acquisition (CPA)</span>
                  <span className="text-white font-mono">£45.00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-gray-400">Average Order Value (AOV)</span>
                  <span className="text-white font-mono">£65.00</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-primary font-bold">Target ROAS</span>
                  <span className="text-primary font-mono font-bold text-xl">3.5x</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. TECH STACK (TECHNIQUE) */}
      <section id="tech-stack" className="py-32 border-b border-white/10 relative min-h-screen flex items-center print:min-h-0 print:py-12">       <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Launch Checklist</h2>
            <p className="text-gray-400">Mission Critical items before pressing "GO".</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Server className="h-5 w-5 text-primary" />
                Technical
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-4 h-4 rounded border border-primary/50 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-sm"></div>
                  </div>
                  Stripe Webhooks Tested
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-4 h-4 rounded border border-primary/50 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-sm"></div>
                  </div>
                  Email DKIM/SPF Verified
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-4 h-4 rounded border border-primary/50 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-sm"></div>
                  </div>
                  Pixel Events (Purchase, Lead) Firing
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-4 h-4 rounded border border-primary/50 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-sm"></div>
                  </div>
                  Mobile Responsive Check (iOS/Android)
                </li>
              </ul>
            </div>

            <div className="bg-card border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="h-5 w-5 text-secondary" />
                Content Assets
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-4 h-4 rounded border border-secondary/50 flex items-center justify-center">
                    <div className="w-2 h-2 bg-secondary rounded-sm"></div>
                  </div>
                  5x Ad Creatives (Video + Static)
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-4 h-4 rounded border border-secondary/50 flex items-center justify-center">
                    <div className="w-2 h-2 bg-secondary rounded-sm"></div>
                  </div>
                  VSL Script Recorded & Edited
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-4 h-4 rounded border border-secondary/50 flex items-center justify-center">
                    <div className="w-2 h-2 bg-secondary rounded-sm"></div>
                  </div>
                  Welcome Email Sequence Loaded
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-4 h-4 rounded border border-secondary/50 flex items-center justify-center">
                    <div className="w-2 h-2 bg-secondary rounded-sm"></div>
                  </div>
                  Social Proof Screenshots Collected
                </li>
              </ul>
            </div>

            <div className="bg-card border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                Legal & Compliance
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-4 h-4 rounded border border-accent/50 flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent rounded-sm"></div>
                  </div>
                  Terms of Service & Privacy Policy
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-4 h-4 rounded border border-accent/50 flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent rounded-sm"></div>
                  </div>
                  "Not Financial Advice" Disclaimer
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-4 h-4 rounded border border-accent/50 flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent rounded-sm"></div>
                  </div>
                  Refund Policy Clearly Visible
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-4 h-4 rounded border border-accent/50 flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent rounded-sm"></div>
                  </div>
                  GDPR/Cookie Consent Banner
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 13. KPI DASHBOARD (TRACKING) */}
      <section id="kpi" className="py-32 border-b border-white/10 snap-start min-h-screen flex items-center print:min-h-0 print:py-12">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">KPI Dashboard</h2>
            <p className="text-gray-400">The numbers that matter. If these are green, we scale.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Acquisition</div>
              <div className="text-3xl font-bold text-white mb-1">£1.50</div>
              <div className="text-sm text-primary">Target CPC</div>
              <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[70%]"></div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Conversion</div>
              <div className="text-3xl font-bold text-white mb-1">3.5%</div>
              <div className="text-sm text-secondary">Landing Page CR</div>
              <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[45%]"></div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Revenue</div>
              <div className="text-3xl font-bold text-white mb-1">£65</div>
              <div className="text-sm text-accent">Average Order Value</div>
              <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-accent w-[60%]"></div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Retention</div>
              <div className="text-3xl font-bold text-white mb-1">85%</div>
              <div className="text-sm text-green-400">M1 Retention Rate</div>
              <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-green-400 w-[85%]"></div>
              </div>
            </div>
          </div>

          {/* ROAS Simulator */}
          <div className="mt-12 p-8 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Calculator className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">ROAS Simulator</h3>
                <p className="text-sm text-gray-400">Project your profitability based on key metrics.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300 flex items-center gap-1">
                      Monthly Ad Budget
                      <div className="group relative">
                        <div className="cursor-help text-gray-500 hover:text-gray-300">?</div>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black border border-white/10 rounded text-xs text-gray-300 w-48 hidden group-hover:block z-10">
                          Total amount you are willing to spend on ads per month.
                        </div>
                      </div>
                    </span>
                    <span className="text-white font-mono">£{simBudget.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="50000" 
                    step="1000" 
                    value={simBudget} 
                    onChange={(e) => setSimBudget(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300 flex items-center gap-1">
                      Cost Per Click (CPC)
                      <div className="group relative">
                        <div className="cursor-help text-gray-500 hover:text-gray-300">?</div>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black border border-white/10 rounded text-xs text-gray-300 w-48 hidden group-hover:block z-10">
                          Average cost you pay for each click on your ad.
                        </div>
                      </div>
                    </span>
                    <span className="text-white font-mono">£{simCPC.toFixed(2)}</span>
                  </div>
                  <input 
                    type="range" 
                    min="0.50" 
                    max="5.00" 
                    step="0.10" 
                    value={simCPC} 
                    onChange={(e) => setSimCPC(parseFloat(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300 flex items-center gap-1">
                      Conversion Rate (CR)
                      <div className="group relative">
                        <div className="cursor-help text-gray-500 hover:text-gray-300">?</div>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black border border-white/10 rounded text-xs text-gray-300 w-48 hidden group-hover:block z-10">
                          Percentage of visitors who make a purchase.
                        </div>
                      </div>
                    </span>
                    <span className="text-white font-mono">{simCR}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0.5" 
                    max="10.0" 
                    step="0.1" 
                    value={simCR} 
                    onChange={(e) => setSimCR(parseFloat(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300 flex items-center gap-1">
                      Average Order Value (AOV)
                      <div className="group relative">
                        <div className="cursor-help text-gray-500 hover:text-gray-300">?</div>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black border border-white/10 rounded text-xs text-gray-300 w-48 hidden group-hover:block z-10">
                          Average amount spent by a customer per transaction.
                        </div>
                      </div>
                    </span>
                    <span className="text-white font-mono">£{simAOV}</span>
                  </div>
                  <input 
                    type="range" 
                    min="20" 
                    max="200" 
                    step="5" 
                    value={simAOV} 
                    onChange={(e) => setSimAOV(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>
              </div>

              <div className="bg-black/40 rounded-xl p-6 border border-white/5 flex flex-col justify-center space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Estimated Traffic</span>
                  <span className="text-white font-mono font-bold">{Math.round(simBudget / simCPC).toLocaleString()} clicks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Estimated Sales</span>
                  <span className="text-white font-mono font-bold">{Math.round((simBudget / simCPC) * (simCR / 100))} orders</span>
                </div>
                <div className="h-px bg-white/10"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Projected Revenue</span>
                  <span className="text-white font-mono font-bold text-xl">£{Math.round((simBudget / simCPC) * (simCR / 100) * simAOV).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm flex items-center gap-1">
                    ROAS
                    <div className="group relative">
                      <div className="cursor-help text-gray-500 hover:text-gray-300">?</div>
                      <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-black border border-white/10 rounded text-xs text-gray-300 w-48 hidden group-hover:block z-10">
                        Return On Ad Spend. Revenue divided by Ad Spend.
                      </div>
                    </div>
                  </span>
                  <span className={`font-mono font-bold text-2xl ${((simBudget / simCPC) * (simCR / 100) * simAOV) / simBudget >= 2 ? 'text-green-400' : ((simBudget / simCPC) * (simCR / 100) * simAOV) / simBudget >= 1 ? 'text-yellow-400' : 'text-red-500'}`}>
                    {(((simBudget / simCPC) * (simCR / 100) * simAOV) / simBudget).toFixed(2)}x
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 rounded-xl bg-red-500/10 border border-red-500/20">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-red-500 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Kill Switch Criteria</h3>
                <p className="text-gray-400 text-sm mb-4">Pause ads immediately if any of these conditions are met for &gt; 48 hours:</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-black/40 px-4 py-2 rounded border border-red-500/30 text-sm text-red-300 font-mono">CPC &gt; £3.00</div>
                  <div className="bg-black/40 px-4 py-2 rounded border border-red-500/30 text-sm text-red-300 font-mono">CTR &lt; 0.5%</div>
                  <div className="bg-black/40 px-4 py-2 rounded border border-red-500/30 text-sm text-red-300 font-mono">ROAS &lt; 1.2x</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. MEDIA BUYING PLAN */}
      <section id="media-buying" className="py-32 border-b border-white/10 snap-start min-h-screen flex items-center print:min-h-0 print:py-12">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase italic">
                Media Buying <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Plan</span>
              </h2>
              <p className="text-xl text-gray-400 mt-2 max-w-2xl">
                Strategic allocation of the £3k-£5k monthly budget. We focus on high-intent platforms, avoiding the "social noise" of Facebook to target serious traders where they consume educational content.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Budget Allocation */}
            <div className="bg-card border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Calculator className="h-6 w-6 text-primary" />
                Budget Allocation
              </h3>
              <div className="mb-6 p-4 bg-primary/5 border border-primary/10 rounded-lg">
                <h4 className="text-primary font-bold text-sm uppercase mb-2">Strategic Intent</h4>
                <p className="text-sm text-gray-300">
                  We are bypassing Facebook entirely. The "Applecore" aesthetic and the "No-Nonsense" messaging resonate better on visual-first and fast-paced platforms. Instagram Reels and TikTok allow us to demonstrate the <em>speed</em> of our execution, while YouTube captures the <em>depth</em> of our analysis.
                </p>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white font-bold">Instagram (Reels & Stories Only)</span>
                    <span className="text-primary font-mono">60% (£1,800 - £3,000)</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[60%]"></div>
                  </div>
                  <p className="text-xs text-gray-500">High-fidelity visual platform. Perfect for showcasing "Chart Porn" and lifestyle aspiration.</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white font-bold">TikTok Ads</span>
                    <span className="text-secondary font-mono">25% (£750 - £1,250)</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[25%]"></div>
                  </div>
                  <p className="text-xs text-gray-500">Volume play. Targeting Gen Z / Young Millennial traders looking for "hacks" and quick wins.</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white font-bold">YouTube Shorts / Google</span>
                    <span className="text-accent font-mono">15% (£450 - £750)</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[15%]"></div>
                  </div>
                  <p className="text-xs text-gray-500">Authority play. Retargeting users who need more "proof" before buying.</p>
                </div>
              </div>
            </div>

            {/* Campaign Structure */}
            <div className="bg-card border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Layers className="h-6 w-6 text-secondary" />
                Campaign Structure
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-primary font-bold text-sm uppercase tracking-wider">Level 1: Cold Traffic (The Hook)</span>
                    <span className="text-xs font-mono text-gray-400">70% of Budget</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-2"><strong>Goal:</strong> Stop the scroll and get the click. We are NOT selling the £497 course here. We are selling the <em>curiosity</em>.</p>
                  <p className="text-xs text-gray-500 italic">"Stop guessing. See what the banks see. Click to watch the breakdown."</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-secondary font-bold text-sm uppercase tracking-wider">Level 2: Retargeting (The Logic)</span>
                    <span className="text-xs font-mono text-gray-400">20% of Budget</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-2"><strong>Goal:</strong> Overcome skepticism. Show social proof and results. Target anyone who visited &gt; 10s but didn't buy.</p>
                  <p className="text-xs text-gray-500 italic">"Still trading blind? Here is yesterday's P&L using the Applecore system. You missed this move."</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-accent font-bold text-sm uppercase tracking-wider">Level 3: Loyalty (The Tribe)</span>
                    <span className="text-xs font-mono text-gray-400">10% of Budget</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-2"><strong>Goal:</strong> Ascend existing buyers to High Ticket. Create FOMO for the inner circle.</p>
                  <p className="text-xs text-gray-500 italic">"The Inner Circle is opening 5 spots. Priority access for existing members only."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. CREATIVE ASSETS INVENTORY */}
      <section id="creative-assets" className="py-32 border-b border-white/10 min-h-screen flex items-center print:min-h-0 print:py-12">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/20">
              <Eye className="h-8 w-8 text-secondary" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase italic">
                Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Assets</span>
              </h2>
              <p className="text-xl text-gray-400 mt-2 max-w-2xl">
                Visual inventory and psychological angles for the initial campaign launch.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Asset 1: Story (HTML/CSS) */}
            <div className="group relative">
              <div className="aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-black relative flex flex-col">
                {/* Visual Content */}
                <div className="flex-1 relative bg-black p-6 flex flex-col justify-between overflow-hidden">
                  {/* Background Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
                  
                  {/* Top Text */}
                  <div className="relative z-10">
                    <h3 className="text-4xl font-black text-white leading-none tracking-tighter uppercase italic drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                      STOP<br/>GUESSING.
                    </h3>
                  </div>

                  {/* Center Graphic */}
                  <div className="relative z-10 flex-1 flex items-center justify-center">
                    <div className="w-full h-64 bg-black/50 border border-primary/30 rounded-xl relative overflow-hidden backdrop-blur-sm">
                      {/* Chart Line */}
                      <svg className="absolute inset-0 w-full h-full p-4" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,80 L20,75 L30,85 L40,60 L50,65 L60,40 L70,45 L80,20 L100,10" fill="none" stroke="#E0FF98" strokeWidth="2" className="drop-shadow-[0_0_8px_rgba(224,255,152,0.8)]" />
                        <circle cx="80" cy="20" r="3" fill="#E0FF98" className="animate-pulse" />
                      </svg>
                      {/* Profit Badge */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black font-bold px-3 py-1 rounded text-sm shadow-[0_0_15px_rgba(224,255,152,0.6)]">
                        +450%
                      </div>
                    </div>
                  </div>

                  {/* Bottom Text */}
                  <div className="relative z-10 text-right">
                    <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-white leading-none tracking-tighter uppercase italic">
                      START<br/>PRINTING.
                    </h3>
                    <div className="mt-4 flex justify-end">
                      <div className="bg-white text-black text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                        Swipe Up
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overlay Info */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center z-20 backdrop-blur-sm">
                  <div>
                    <div className="bg-primary/20 border border-primary/30 text-primary text-xs font-bold px-3 py-1 rounded-full w-fit mx-auto mb-2">
                      STORY FORMAT
                    </div>
                    <h4 className="text-white font-bold text-lg">The "Pattern Interrupt"</h4>
                    <p className="text-gray-400 text-sm mt-2">Stops the scroll with high-contrast neon visuals. Direct command: "Stop Guessing".</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Asset 2: Feed (HTML/CSS) */}
            <div className="group relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-black relative flex flex-col">
                {/* Visual Content */}
                <div className="flex-1 relative bg-black flex">
                  {/* Left Side: Them */}
                  <div className="w-1/2 bg-[#1a0505] relative border-r border-white/10 p-4 flex flex-col items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="#ff4444" strokeWidth="1" />
                        <path d="M0,30 Q25,80 50,30 T100,30" fill="none" stroke="#ff4444" strokeWidth="1" opacity="0.5" />
                        <path d="M0,70 Q25,10 50,70 T100,70" fill="none" stroke="#ff4444" strokeWidth="1" opacity="0.5" />
                      </svg>
                    </div>
                    <h4 className="text-red-500 font-mono text-sm mb-2 uppercase tracking-widest">Them</h4>
                    <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">GAMBLING</h3>
                    <X className="h-8 w-8 text-red-500 mt-4 opacity-50" />
                  </div>

                  {/* Right Side: Us */}
                  <div className="w-1/2 bg-[#051a05] relative p-4 flex flex-col items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#E0FF98_1px,transparent_1px),linear-gradient(to_bottom,#E0FF98_1px,transparent_1px)] bg-[size:10px_10px] opacity-10"></div>
                    <h4 className="text-primary font-mono text-sm mb-2 uppercase tracking-widest">Us</h4>
                    <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">PRECISION</h3>
                    <Target className="h-8 w-8 text-primary mt-4 drop-shadow-[0_0_10px_rgba(224,255,152,0.8)]" />
                  </div>

                  {/* Center VS */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black border border-white/20 rounded-full w-10 h-10 flex items-center justify-center z-10">
                    <span className="text-xs font-bold text-white">VS</span>
                  </div>
                </div>

                {/* Overlay Info */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center z-20 backdrop-blur-sm">
                  <div>
                    <div className="bg-secondary/20 border border-secondary/30 text-secondary text-xs font-bold px-3 py-1 rounded-full w-fit mx-auto mb-2">
                      FEED POST
                    </div>
                    <h4 className="text-white font-bold text-lg">The "Us vs Them"</h4>
                    <p className="text-gray-400 text-sm mt-2">Classic comparison. Chaos (Gambling) vs Order (Precision). Positions Applecore as the professional choice.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Asset 3: YouTube (HTML/CSS) */}
            <div className="group relative">
              <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black relative flex flex-col">
                {/* Visual Content */}
                <div className="flex-1 relative bg-black p-6 flex items-center justify-between overflow-hidden">
                  {/* Background Glow */}
                  <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary/10 to-transparent"></div>
                  
                  {/* Left: Chart Graphic */}
                  <div className="w-1/2 h-full flex items-center justify-center relative z-10">
                    <div className="w-full aspect-video bg-black/50 border border-white/10 rounded-lg p-2 relative backdrop-blur-sm">
                      <div className="absolute top-2 right-2 flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <div className="mt-4 h-20 flex items-end gap-1">
                        {[40, 60, 45, 70, 55, 80, 65, 90].map((h, i) => (
                          <div key={i} className="flex-1 bg-primary/50 hover:bg-primary transition-colors" style={{ height: `${h}%` }}></div>
                        ))}
                      </div>
                      {/* Buy Signal */}
                      <div className="absolute bottom-4 right-4 bg-primary text-black text-[10px] font-bold px-2 py-1 rounded animate-pulse shadow-[0_0_10px_rgba(224,255,152,0.8)]">
                        BUY SIGNAL
                      </div>
                    </div>
                  </div>

                  {/* Right: Text */}
                  <div className="w-1/2 pl-6 relative z-10 text-right">
                    <h3 className="text-5xl font-black text-white leading-[0.9] tracking-tighter uppercase italic">
                      90%<br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">WIN RATE?</span>
                    </h3>
                    <div className="mt-2 inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      Live Proof
                    </div>
                  </div>
                </div>

                {/* Overlay Info */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center z-20 backdrop-blur-sm">
                  <div>
                    <div className="bg-accent/20 border border-accent/30 text-accent text-xs font-bold px-3 py-1 rounded-full w-fit mx-auto mb-2">
                      THUMBNAIL
                    </div>
                    <h4 className="text-white font-bold text-lg">The "Bold Claim"</h4>
                    <p className="text-gray-400 text-sm mt-2">High CTR design. Focus on the result (90% Win Rate) and the "Buy Signal" mechanism.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Production Checklist</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-5 h-5 rounded-full border border-primary flex items-center justify-center text-primary text-xs">✓</div>
                <span>Export all static assets in 1080x1080 and 1080x1920</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-5 h-5 rounded-full border border-primary flex items-center justify-center text-primary text-xs">✓</div>
                <span>Create 3 variations of hook text for video ads</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-5 h-5 rounded-full border border-primary flex items-center justify-center text-primary text-xs">✓</div>
                <span>Set up UTM tracking parameters for each creative</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-5 h-5 rounded-full border border-primary flex items-center justify-center text-primary text-xs">✓</div>
                <span>Ensure all text overlays are within "Safe Zones"</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
