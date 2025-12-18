import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArrowRight, Target, Users, BarChart3, Shield, Zap, Brain, Crosshair, TrendingUp, Lock, Eye, X, Maximize2, Minimize2, Layers, Smartphone, Server, AlertTriangle, ChevronDown, ChevronUp, Download } from "lucide-react";
import { useState } from "react";

export default function DigitalStrategy() {
  const [location] = useLocation();
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);
  const [immersiveMode, setImmersiveMode] = useState(false);
  const [expandedMonth, setExpandedMonth] = useState<number | null>(null);

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
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black snap-y snap-mandatory h-screen overflow-y-scroll print:h-auto print:overflow-visible">
      {/* Global Navigation - Hidden in Immersive Mode */}
      <nav className={`fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md transition-transform duration-500 ${immersiveMode ? '-translate-y-full' : 'translate-y-0'} no-print`}>
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer group">
                <img src="/images/logo.png" alt="Applecore" className="h-6 w-auto brightness-0 invert transition-transform group-hover:scale-105" />
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
            <span className="px-2 py-1 rounded bg-secondary/20 text-secondary text-xs font-mono uppercase tracking-wider border border-secondary/30">
              Market Analysis
            </span>
          </div>
        </div>
      </nav>

      {/* 1. HERO (CONTEXTE) */}
      <section className="pt-32 pb-20 border-b border-white/10 relative overflow-hidden snap-start min-h-screen flex items-center print:min-h-0 print:py-12">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 print:hidden"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <h4 className="text-primary font-mono mb-4 tracking-widest uppercase text-sm">Go-To-Market Strategy</h4>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white print:text-black">
              The Anti-Guru Blueprint
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              How we capture the most valuable segment of the trading market by doing exactly the opposite of what everyone else is doing.
            </p>
          </div>
        </div>
      </section>

      {/* 2. COMPETITIVE MATRIX (CONTEXTE) */}
      <section className="py-32 border-b border-white/10 snap-start min-h-screen flex items-center print:min-h-0 print:py-12 print:break-inside-avoid">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center text-accent">
              <Crosshair className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-white">The Blue Ocean</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Escaping the "Red Ocean"</h3>
              <p className="text-gray-400 leading-relaxed">
                The current market is saturated with "Get Rich Quick" offers. This is a Red Ocean: high competition, low trust, high churn.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We are creating a Blue Ocean by targeting the "Disillusioned Seeker" - the trader who has already failed with the gurus and is looking for the truth.
              </p>
              <div className="flex gap-4 mt-4">
                <div className="px-4 py-2 rounded bg-secondary/10 border border-secondary/20 text-secondary text-sm">
                  <span className="block font-bold mb-1">Competitors</span>
                  "Easy Money, Fast Cars, Signals"
                </div>
                <div className="px-4 py-2 rounded bg-primary/10 border border-primary/20 text-primary text-sm">
                  <span className="block font-bold mb-1">Applecore</span>
                  "Hard Work, Discipline, Skills"
                </div>
              </div>
            </div>
            
            <div className="relative aspect-square bg-black/50 rounded-2xl border border-white/10 p-8 flex items-center justify-center print:border-black">
              {/* Matrix Visualization */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                <div className="border-r border-b border-white/10 p-4 flex flex-col justify-between">
                  <span className="text-xs text-gray-600 uppercase">High Hype</span>
                  <span className="text-xs text-gray-600 uppercase">Low Skill</span>
                </div>
                <div className="border-b border-white/10 p-4 flex flex-col justify-between items-end">
                  <span className="text-xs text-gray-600 uppercase">High Hype</span>
                  <span className="text-xs text-gray-600 uppercase">High Skill</span>
                </div>
                <div className="border-r border-white/10 p-4 flex flex-col justify-between">
                  <span className="text-xs text-gray-600 uppercase">Low Hype</span>
                  <span className="text-xs text-gray-600 uppercase">Low Skill</span>
                </div>
                <div className="p-4 flex flex-col justify-between items-end">
                  <span className="text-xs text-gray-600 uppercase">Low Hype</span>
                  <span className="text-xs text-gray-600 uppercase">High Skill</span>
                </div>
              </div>
              
              {/* Competitors */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-secondary/20 rounded-full blur-xl print:hidden"></div>
              <div className="absolute top-1/4 left-1/4 text-secondary font-bold text-sm">The Gurus</div>
              
              {/* Applecore Position */}
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl print:hidden"></div>
              <div className="absolute bottom-1/4 right-1/4 text-primary font-bold text-lg flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse print:animate-none"></div>
                Applecore
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PERSONAS (CONTEXTE) */}
      <section className="py-32 border-b border-white/10 bg-black/50 snap-start min-h-screen flex items-center print:min-h-0 print:py-12 print:break-inside-avoid">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center text-secondary">
              <Users className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-white">Target Personas</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-white/5">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">The "Burned" Seeker</h3>
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-xs font-mono text-secondary">PRIMARY</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Male, 25-35. Has lost money on "signals" and "bots". Feels betrayed by the industry. Intelligent but frustrated. Looking for a "real" profession, not a lottery ticket.
              </p>
              <div className="space-y-3">
                <div className="bg-black/50 p-4 rounded-xl print:bg-transparent print:border print:border-gray-800">
                  <div className="text-xs text-gray-500 mb-2">Pain Point</div>
                  <div className="font-bold text-white">"I know trading works, but I can't make it work."</div>
                </div>
                <div className="bg-black/50 p-4 rounded-xl print:bg-transparent print:border print:border-gray-800">
                  <div className="text-xs text-gray-500 mb-2">Conversion Trigger</div>
                  <div className="font-bold text-white">Radical Honesty</div>
                  <div className="text-sm text-gray-400">Admitting it's hard validates his struggle.</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-white/5">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">The Systemizer</h3>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-xs font-mono text-accent">SECONDARY</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Male, 30-45. Engineer, Developer, or Analytical background. Hates ambiguity. Wants clear rules, data, and logic. Rejects "gut feel" trading.
              </p>
              <div className="space-y-3">
                <div className="bg-black/50 p-4 rounded-xl print:bg-transparent print:border print:border-gray-800">
                  <div className="text-xs text-gray-500 mb-2">Pain Point</div>
                  <div className="font-bold text-white">"The market seems random and chaotic."</div>
                </div>
                <div className="bg-black/50 p-4 rounded-xl print:bg-transparent print:border print:border-gray-800">
                  <div className="text-xs text-gray-500 mb-2">Conversion Trigger</div>
                  <div className="font-bold text-white">System & Process</div>
                  <div className="text-sm text-gray-400">Detailed curriculum, tools</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STRATEGIC PILLARS (CONTEXTE) */}
      <section className="py-32 border-b border-white/10 snap-start min-h-screen flex items-center print:min-h-0 print:py-12 print:break-inside-avoid">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
              <Target className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-white">Strategic Axes</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-colors group">
              <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">1. Radical Truth</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                The market is flooded with "easy money" promises. We pivot to "hard truth". We validate the user's pain by admitting trading is hard.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span>No Lambos, just charts</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span>Focus on risk, not reward</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span>Transparency on losses</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-white/5 hover:border-secondary/50 transition-colors group">
              <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg group-hover:bg-secondary/20 group-hover:text-secondary transition-colors">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">2. Institutional Edge</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                We position retail trading methods (RSI, MACD) as "toys". We sell "weapons". The allure is accessing the tools the 1% use.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full"></span>Order Flow vs Indicators</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full"></span>Market Structure vs Patterns</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full"></span>Data vs Intuition</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-white/5 hover:border-accent/50 transition-colors group">
              <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">3. The 1% Tribe</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                We don't build a customer base; we build a cult of excellence. Membership is framed as an achievement, not a purchase.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span>Elitist language</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span>"Not for everyone" framing</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span>Community as a filter</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. USER JOURNEY (EXECUTION) */}
      <section className="py-32 border-b border-white/10 bg-black/50 snap-start min-h-screen flex items-center print:min-h-0 print:py-12 print:break-inside-avoid">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-white">The User Journey</h2>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 hidden md:block print:hidden"></div>

            <div className="grid md:grid-cols-4 gap-6 relative z-10">
              {/* Step 1: Discovery */}
              <div className="group">
                <div className="bg-black border border-white/10 p-6 rounded-xl hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-bold mb-4 group-hover:bg-primary group-hover:text-black transition-colors">1</div>
                  <h3 className="text-lg font-bold text-white mb-2">Discovery</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Ads targeting "Pain Points" (Gambling, Losses, Confusion).
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-500">Meta Ads</span>
                    <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-500">TikTok</span>
                  </div>
                </div>
              </div>

              {/* Step 2: The Tripwire */}
              <div className="group">
                <div className="bg-black border border-white/10 p-6 rounded-xl hover:border-primary/50 transition-all duration-300 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-primary text-black text-[10px] font-bold px-2 py-1">£4.99</div>
                  <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-bold mb-4 group-hover:bg-primary group-hover:text-black transition-colors">2</div>
                  <h3 className="text-lg font-bold text-white mb-2">The Filter</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Low-ticket offer to qualify buyers. "The Mindset Reset".
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Micro-Commitment</span>
                  </div>
                </div>
              </div>

              {/* Step 3: Indoctrination */}
              <div className="group">
                <div className="bg-black border border-white/10 p-6 rounded-xl hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-bold mb-4 group-hover:bg-primary group-hover:text-black transition-colors">3</div>
                  <h3 className="text-lg font-bold text-white mb-2">Indoctrination</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    7-Day Email Sequence delivering massive value + "The Institutional Edge".
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-500">Email</span>
                    <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-500">Video</span>
                  </div>
                </div>
              </div>

              {/* Step 4: Conversion */}
              <div className="group">
                <div className="bg-black border border-white/10 p-6 rounded-xl hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-bold mb-4 group-hover:bg-primary group-hover:text-black transition-colors">4</div>
                  <h3 className="text-lg font-bold text-white mb-2">The Academy</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Upsell to full membership. "Join the 1%".
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Recurring Rev</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ASCENSION MODEL (NEW) */}
      <section className="py-32 border-b border-white/10 snap-start min-h-screen flex items-center print:min-h-0 print:py-12 print:break-inside-avoid">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center text-secondary">
              <Layers className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-white">The Ascension Model</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-end">
            {/* Low Ticket */}
            <div className="p-6 rounded-2xl bg-card border border-white/5 relative group hover:border-primary/30 transition-colors">
              <div className="absolute -top-4 left-6 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full">ENTRY POINT</div>
              <h3 className="text-xl font-bold text-white mb-2">The Mindset Reset</h3>
              <div className="text-3xl font-bold text-primary mb-4">£4.99</div>
              <p className="text-sm text-gray-400 mb-4">
                The "No-Brainer" offer. Filters out freebie seekers. Delivers immediate value and establishes authority.
              </p>
              <ul className="space-y-2 text-xs text-gray-500">
                <li className="flex items-center gap-2">✓ 7-Day Video Course</li>
                <li className="flex items-center gap-2">✓ Trading Psychology Audit</li>
              </ul>
            </div>

            {/* Core Offer */}
            <div className="p-8 rounded-2xl bg-card border border-white/10 relative group hover:border-secondary/30 transition-colors transform md:-translate-y-4 shadow-2xl shadow-black">
              <div className="absolute -top-4 left-6 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">CORE OFFER</div>
              <h3 className="text-2xl font-bold text-white mb-2">Applecore Academy</h3>
              <div className="text-4xl font-bold text-secondary mb-4">£49<span className="text-lg text-gray-500 font-normal">/mo</span></div>
              <p className="text-sm text-gray-400 mb-4">
                The recurring revenue engine. Community, tools, and ongoing education.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">✓ Full Video Library</li>
                <li className="flex items-center gap-2">✓ Discord Community Access</li>
                <li className="flex items-center gap-2">✓ Weekly Live Calls</li>
              </ul>
            </div>

            {/* High Ticket */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-secondary/10 to-black border border-secondary/20 relative group hover:border-secondary/50 transition-colors">
              <div className="absolute -top-4 left-6 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">HIGH TICKET</div>
              <h3 className="text-xl font-bold text-white mb-2">Inner Circle</h3>
              <div className="text-3xl font-bold text-white mb-4">£2,500+</div>
              <p className="text-sm text-gray-400 mb-4">
                For the top 5% of students who want direct mentorship and career acceleration.
              </p>
              <ul className="space-y-2 text-xs text-gray-500">
                <li className="flex items-center gap-2">✓ 1-on-1 Mentorship</li>
                <li className="flex items-center gap-2">✓ Prop Firm Funding Prep</li>
                <li className="flex items-center gap-2">✓ In-Person Masterminds</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 90-DAY PLAN (INTERACTIVE) */}
      <section className="py-32 border-b border-white/10 bg-black/50 snap-start min-h-screen flex items-center print:min-h-0 print:py-12 print:break-inside-avoid">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center text-secondary">
              <Zap className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-white">90-Day Attack Plan</h2>
          </div>

          <div className="space-y-4">
            {roadmap.map((month) => (
              <div 
                key={month.month} 
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${expandedMonth === month.month ? 'bg-white/5 border-primary/50' : 'bg-black border-white/10 hover:border-white/30'} print:border-gray-800 print:bg-transparent`}
              >
                <div 
                  className="p-6 flex items-center justify-between cursor-pointer print:cursor-default"
                  onClick={() => setExpandedMonth(expandedMonth === month.month ? null : month.month)}
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${expandedMonth === month.month ? 'bg-primary text-black' : 'bg-white/10 text-white'} print:bg-gray-200 print:text-black`}>
                      {month.month}
                    </div>
                    <div>
                      <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">Month {month.month}</div>
                      <h3 className="text-xl font-bold text-white">{month.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden md:block text-sm text-gray-400">{month.goal}</span>
                    <div className="print:hidden">
                      {expandedMonth === month.month ? <ChevronUp className="h-5 w-5 text-primary" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
                    </div>
                  </div>
                </div>
                
                {/* Always show details in print mode via CSS class roadmap-details */}
                <div className={`px-6 pb-6 pt-0 border-t border-white/5 ${expandedMonth === month.month ? 'block' : 'hidden'} roadmap-details`}>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    {month.weeks.map((week, idx) => (
                      <div key={idx} className="flex gap-4 p-4 rounded-xl bg-black/50 border border-white/5 print:border-gray-800">
                        <div className="text-xs font-mono text-primary pt-1 whitespace-nowrap">Week {week.week}</div>
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

      {/* 8. ORGANIC CONTENT ECOSYSTEM (NEW) */}
      <section className="py-32 border-b border-white/10 snap-start min-h-screen flex items-center print:min-h-0 print:py-12 print:break-inside-avoid">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center text-accent">
              <Smartphone className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-white">Organic Content Ecosystem</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-card border border-white/5">
              <h3 className="text-lg font-bold text-white mb-4">The Analyst (YouTube)</h3>
              <p className="text-sm text-gray-400 mb-4">
                Long-form, deep-dive content. Logic, data, and backtesting. Builds massive authority.
              </p>
              <div className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded w-fit">Search Traffic</div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-white/5">
              <h3 className="text-lg font-bold text-white mb-4">The Contrarian (X/Twitter)</h3>
              <p className="text-sm text-gray-400 mb-4">
                Short, punchy, polarizing text. Attacks industry myths. "Why RSI is for losers".
              </p>
              <div className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded w-fit">Viral Reach</div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-white/5">
              <h3 className="text-lg font-bold text-white mb-4">The Monk (IG/TikTok)</h3>
              <p className="text-sm text-gray-400 mb-4">
                Lifestyle, but not "Lambo". Discipline, gym, charts, routine. Aspirational but grounded.
              </p>
              <div className="text-xs font-mono text-secondary bg-secondary/10 px-2 py-1 rounded w-fit">Brand Image</div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. EMAIL AUTOMATION HUB (MECANIQUE) */}
      <section className="py-32 border-b border-white/10 snap-start min-h-screen flex items-center print:min-h-0 print:py-12 print:break-inside-avoid">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
              <Zap className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-white">Email Automation Hub</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Nurturing */}
            <div className="bg-card border border-white/10 rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="p-6 border-b border-white/10 bg-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono text-primary uppercase tracking-wider">Acquisition</span>
                  <MailIcon className="h-4 w-4 text-gray-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Nurturing Sequence</h3>
                <p className="text-sm text-gray-400 mt-2">Cold Leads → Warm Prospects</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="text-sm text-gray-300">
                  <strong className="text-white">Goal:</strong> Shift beliefs. Move from "Gambler" to "Student".
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Day 1: Stop Gambling
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Day 3: Why Indicators Lie
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Day 5: The Institutional Edge
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-white/10 hover:bg-white/5 hover:text-white print:hidden"
                  onClick={() => setSelectedEmail('nurturing')}
                >
                  <Eye className="mr-2 h-4 w-4" /> View Template
                </Button>
              </div>
            </div>

            {/* Welcome */}
            <div className="bg-card border border-white/10 rounded-2xl overflow-hidden group hover:border-secondary/50 transition-colors">
              <div className="p-6 border-b border-white/10 bg-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono text-secondary uppercase tracking-wider">Activation</span>
                  <MailIcon className="h-4 w-4 text-gray-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Welcome Sequence</h3>
                <p className="text-sm text-gray-400 mt-2">Tripwire (£4.99) → Full Member</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="text-sm text-gray-300">
                  <strong className="text-white">Goal:</strong> Upsell to Academy + Retention M2.
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Day 0: Access Granted
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Day 2: The Missing Piece (Upsell)
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Day 14-35: Retention Arc
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-white/10 hover:bg-white/5 hover:text-white print:hidden"
                  onClick={() => setSelectedEmail('welcome')}
                >
                  <Eye className="mr-2 h-4 w-4" /> View Template
                </Button>
              </div>
            </div>

            {/* Win-Back */}
            <div className="bg-card border border-white/10 rounded-2xl overflow-hidden group hover:border-secondary/50 transition-colors">
              <div className="p-6 border-b border-white/10 bg-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono text-secondary uppercase tracking-wider">Retention</span>
                  <MailIcon className="h-4 w-4 text-gray-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Win-Back Sequence</h3>
                <p className="text-sm text-gray-400 mt-2">Churned → Reactivated</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="text-sm text-gray-300">
                  <strong className="text-white">Goal:</strong> Reactivate cancelled members.
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Week 1: Did we fail?
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Week 4: New Module Alert
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Week 8: Last Chance
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-white/10 hover:bg-white/5 hover:text-white print:hidden"
                  onClick={() => setSelectedEmail('winback')}
                >
                  <Eye className="mr-2 h-4 w-4" /> View Template
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center print:hidden">
            <Link href="/email-strategy">
              <Button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-6 text-lg h-auto">
                <span className="mr-2">📂</span> Open Full Email Playbook
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. RETENTION MECHANICS (MECANIQUE) */}
      <section className="py-32 border-b border-white/10 bg-black/50 snap-start min-h-screen flex items-center print:min-h-0 print:py-12 print:break-inside-avoid">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center text-secondary">
              <Lock className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-white">Retention Mechanics</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* First Win Protocol */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-white/20">01</div>
                <h3 className="text-2xl font-bold text-white">First Win Protocol</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Churn happens when users feel "stuck". We engineer a quick win within the first 7 days to lock in dopamine.
              </p>
              <div className="bg-card border border-white/10 p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-white">The "Setup Hunter" Badge</div>
                    <div className="text-xs text-gray-500">Gamification Reward</div>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  Users unlock this badge by posting their first correct chart markup in Discord. It's not about profit; it's about <span className="text-white font-bold">process validation</span>.
                </p>
              </div>
            </div>

            {/* Tribal Lock-in */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-white/20">02</div>
                <h3 className="text-2xl font-bold text-white">Tribal Lock-in</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                People leave products; they don't leave tribes. We create social cost to leaving.
              </p>
              <div className="bg-card border border-white/10 p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Accountability Pods</div>
                    <div className="text-xs text-gray-500">Social Structure</div>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  Members are assigned to small "Pods" of 5 traders. If one leaves, the Pod feels it. This creates <span className="text-white font-bold">positive peer pressure</span> to stay and improve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. TECH STACK (NEW) */}
      <section className="py-32 border-b border-white/10 snap-start min-h-screen flex items-center print:min-h-0 print:py-12 print:break-inside-avoid">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
              <Server className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-white">The Engine Room (Tech Stack)</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-card border border-white/10 text-center">
              <div className="text-sm text-gray-500 mb-2">Community & Course</div>
              <div className="text-xl font-bold text-white mb-1">Skool / Discord</div>
              <div className="text-xs text-primary">Engagement</div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-white/10 text-center">
              <div className="text-sm text-gray-500 mb-2">Email & Automation</div>
              <div className="text-xl font-bold text-white mb-1">GoHighLevel</div>
              <div className="text-xs text-primary">CRM & Funnels</div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-white/10 text-center">
              <div className="text-sm text-gray-500 mb-2">Payments</div>
              <div className="text-xl font-bold text-white mb-1">Stripe</div>
              <div className="text-xs text-primary">Processing</div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-white/10 text-center">
              <div className="text-sm text-gray-500 mb-2">Charting</div>
              <div className="text-xl font-bold text-white mb-1">TradingView</div>
              <div className="text-xs text-primary">Product</div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. RISK MITIGATION (NEW) */}
      <section className="py-32 border-b border-white/10 bg-black/50 snap-start min-h-screen flex items-center print:min-h-0 print:py-12 print:break-inside-avoid">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center text-secondary">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-white">Risk Mitigation (Anti-Fragility)</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-card border border-white/5">
              <h3 className="text-lg font-bold text-white mb-2">Ad Account Bans</h3>
              <p className="text-sm text-gray-400 mb-4">
                Trading is a "High Risk" category. Meta bans are inevitable.
              </p>
              <div className="text-xs text-white bg-white/10 p-3 rounded">
                <strong>Solution:</strong> Use Agency Ad Accounts (tier 2/3) to insulate main business assets.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-white/5">
              <h3 className="text-lg font-bold text-white mb-2">Platform Dependency</h3>
              <p className="text-sm text-gray-400 mb-4">
                If YouTube/IG algorithm changes, traffic dies.
              </p>
              <div className="text-xs text-white bg-white/10 p-3 rounded">
                <strong>Solution:</strong> Aggressive email collection. We own the list. The list is the business.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-white/5">
              <h3 className="text-lg font-bold text-white mb-2">Copycat Competitors</h3>
              <p className="text-sm text-gray-400 mb-4">
                Others will steal the ads and the funnel.
              </p>
              <div className="text-xs text-white bg-white/10 p-3 rounded">
                <strong>Solution:</strong> Brand & Community (Tribal Lock-in). They can copy the ads, but not the culture.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. INVESTMENT & ALLOCATION (CHIFFRES) */}
      <section className="py-32 border-b border-white/10 bg-black/30 snap-start min-h-screen flex items-center print:min-h-0 print:py-12 print:break-inside-avoid">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center text-accent">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-white">Investment & Allocation</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Agency Fees */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Agency Management Fees</h3>
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-gray-400">FIXED COST</span>
              </div>
              <div className="text-4xl font-bold text-white mb-2">£4,880</div>
              <p className="text-sm text-gray-400 mb-6">Total for Strategy, Setup & 3-Month Management</p>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                  <span className="text-gray-400">Strategy & Setup</span>
                  <span className="text-white">Included</span>
                </div>
                <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                  <span className="text-gray-400">Campaign Management (Month 1)</span>
                  <span className="text-white">Included</span>
                </div>
                <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                  <span className="text-gray-400">Campaign Management (Month 2)</span>
                  <span className="text-white">Included</span>
                </div>
                <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                  <span className="text-gray-400">Campaign Management (Month 3)</span>
                  <span className="text-white">Included</span>
                </div>
              </div>
            </div>

            {/* Ad Spend */}
            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-primary">Recommended Ad Spend</h3>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-xs font-mono text-primary">VARIABLE COST</span>
              </div>
              <div className="text-4xl font-bold text-white mb-2">£3k - £5k <span className="text-lg font-normal text-gray-500">/ month</span></div>
              <p className="text-sm text-gray-400 mb-6">Paid directly to ad platforms (Meta/Google)</p>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm border-b border-primary/10 pb-2">
                  <span className="text-gray-400">Testing Phase (Month 1)</span>
                  <span className="text-white">£3,000</span>
                </div>
                <div className="flex justify-between text-sm border-b border-primary/10 pb-2">
                  <span className="text-gray-400">Optimization (Month 2)</span>
                  <span className="text-white">£4,000</span>
                </div>
                <div className="flex justify-between text-sm border-b border-primary/10 pb-2">
                  <span className="text-gray-400">Scaling (Month 3)</span>
                  <span className="text-white">£5,000+</span>
                </div>
              </div>
              <div className="mt-6 p-3 bg-primary/10 rounded border border-primary/20 text-xs text-primary">
                <strong>Note:</strong> Ad budget is flexible and will be adjusted based on ROAS (Return on Ad Spend) performance.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. UNIT ECONOMICS (CHIFFRES) */}
      <section className="py-32 border-b border-white/10 snap-start min-h-screen flex items-center print:min-h-0 print:py-12 print:break-inside-avoid">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
              <BarChart3 className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-white">Unit Economics (Projections)</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-card border border-white/10">
              <div className="text-sm text-gray-500 mb-1">Target CAC</div>
              <div className="text-3xl font-bold text-white">$45.00</div>
              <div className="text-xs text-primary mt-2">Based on organic reach</div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-white/10">
              <div className="text-sm text-gray-500 mb-1">Average Order Value</div>
              <div className="text-3xl font-bold text-white">$297.00</div>
              <div className="text-xs text-gray-400 mt-2">Initial Course Access</div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-white/10">
              <div className="text-sm text-gray-500 mb-1">Lifetime Value (LTV)</div>
              <div className="text-3xl font-bold text-white">$850.00</div>
              <div className="text-xs text-gray-400 mt-2">Includes Upsells/Sub</div>
            </div>
            <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
              <div className="text-sm text-primary mb-1">LTV:CAC Ratio</div>
              <div className="text-3xl font-bold text-white">18.8x</div>
              <div className="text-xs text-primary mt-2">Highly Profitable</div>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-500 italic text-center">
            *Projections based on industry benchmarks for high-ticket educational products with strong community retention.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black snap-start print:hidden">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Applecore" className="h-6 w-auto brightness-0 invert" />
            <span className="text-sm text-muted-foreground">© 2024 Applecore Strategy</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/">Brand Guide</Link>
            <Link href="/mindset-revolution">Ad Concept</Link>
            <Link href="/digital-strategy">Strategy</Link>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
