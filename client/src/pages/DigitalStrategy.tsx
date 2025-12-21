import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArrowRight, Target, Users, BarChart3, Shield, Zap, Brain, Crosshair, TrendingUp, Lock, Eye, X, Maximize2, Minimize2, Layers, Smartphone, Server, AlertTriangle, ChevronDown, ChevronUp, Download, Calculator, Mail, DollarSign, PieChart, FileText, Video, MessageCircle, Menu, Palette, ListChecks, Check, CheckCircle, XCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function DigitalStrategy() {
  const [location] = useLocation();
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);
  const [immersiveMode, setImmersiveMode] = useState(false);
  const [activeMonthTab, setActiveMonthTab] = useState(1);
  const [activeSection, setActiveSection] = useState(0);
  const [simBudget, setSimBudget] = useState(2000);
  const [simCPC, setSimCPC] = useState(1.20);
  const [simCR, setSimCR] = useState(1.5);
  const [simAOV, setSimAOV] = useState(97);
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
    { id: "transparency", label: "Transparency" },
    { id: "pillars", label: "Narrative Pillars" },
    { id: "blue-ocean", label: "Blue Ocean" },
    { id: "personas", label: "Personas" },
    { id: "funnel", label: "User Journey" },
    { id: "automation", label: "Automation" },
    { id: "organic", label: "Organic Content" },
    { id: "retention", label: "Retention" },
    { id: "value-ladder", label: "Value Ladder" },
    { id: "risk", label: "Risk Mitigation" },
    { id: "media-plan", label: "Media Plan" },
    { id: "roadmap", label: "90-Day Plan" },
    { id: "checklist", label: "Launch Checklist" },
    { id: "kpi", label: "KPI Dashboard" },
    { id: "creative-assets", label: "Creative Assets" },
    { id: "alpha-cohort", label: "Alpha Cohort" }
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
      actions: [
        { 
          title: "The 'Amateur' Campaign",
          task: "Launch 'Stop Acting Like An Amateur' video campaign",
          context: "High-contrast videos attacking common retail habits (revenge trading, FOMO).",
          icon: <Video className="w-4 h-4" />
        },
        { 
          title: "The Lead Magnet",
          task: "Release free 'Psychology Audit' tool",
          context: "Interactive quiz categorizing traders (e.g., 'The Gambler'). Captures email for results.",
          icon: <FileText className="w-4 h-4" />
        },
        { 
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
      actions: [
        { 
          title: "The Nurture Sequence",
          task: "Activate 'The 7-Day Mindset Reset' Email Sequence",
          context: "Automated daily emails. Each fixes ONE psychological leak. Builds massive trust.",
          icon: <Mail className="w-4 h-4" />
        },
        { 
          title: "Authority Event",
          task: "First 'Live Trading Psychology' session",
          context: "Live webinar reviewing RECORDED trades. Proving execution is harder than technicals.",
          icon: <Users className="w-4 h-4" />
        },
        { 
          title: "Scarcity Launch",
          task: "Open applications for 'Alpha Cohort'",
          context: "Application-only access. Reverses the dynamic—they try to impress us.",
          icon: <Lock className="w-4 h-4" />
        }
      ]
    },
    {
      month: 3,
      title: "Sustainability",
      goal: "Reach Break-Even & Validate LTV",
      description: "Ensure the machine pays for itself before aggressive scaling.",
      actions: [
        { 
          title: "The £2,500 Backend",
          task: "Launch 'Inner Circle' Mentorship (High Ticket)",
          context: "Premium 1-on-1 access. This is where the real margin is made. 10 sales = £25k.",
          icon: <DollarSign className="w-4 h-4" />
        },
        { 
          title: "LTR Focus (Long Term Retention)",
          task: "Implement 'Tribal Lock-In' mechanics",
          context: "Community challenges and status badges to keep users paying month after month.",
          icon: <TrendingUp className="w-4 h-4" />
        },
        { 
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
        #kpi { display: none !important; }
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
          .border-white\/10 { border-color: #ddd !important; }
          .bg-card { background-color: #f9f9f9 !important; border: 1px solid #ddd !important; }
          .roadmap-details { display: block !important; opacity: 1 !important; position: relative !important; transform: none !important; margin-bottom: 2rem !important; }
        }
      `}</style>

      {/* Navigation Bar */}
      <nav className="fixed top-0 z-[100] w-full border-b border-white/5 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 no-print">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer font-bold text-xl tracking-tighter">
                <span className="text-primary">Applecore</span>
                <span className="text-zinc-500 font-normal text-sm hidden sm:inline-block">| Brand Book</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-1">
              <Link href="/">
                <span className="px-4 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 cursor-pointer transition-colors">
                  1. Brand Guide
                </span>
              </Link>
              <Link href="/mindset-revolution">
                <span className="px-4 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 cursor-pointer transition-colors">
                  2. Ad Concept
                </span>
              </Link>
              <Link href="/digital-strategy">
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 cursor-pointer transition-colors">
                  3. Digital Strategy
                </span>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu className="h-5 w-5" />
            </Button>
            <Button size="sm" className="hidden md:flex gap-2 bg-white text-black hover:bg-zinc-200">
              Download Assets <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

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
                V1 - For internal discussion
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                Building Traders<br />Who <span className="text-primary">Think for Themselves.</span>
              </h1>
              <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                A structured path from confusion to confidence. Grounded in process, not promises. Designed for traders who want to understand the market, not copy calls.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-primary/20 transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-white mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Honest About the Game</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  74-89% of retail traders lose money. We explain why—and show you how the system is designed that way. No hype, no shortcuts, just truth.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-primary/20 transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-white mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Bias-Free Foundations</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Most traders inherit biased methods. We teach you to see time, structure, and behaviour first—then use tools to support, not replace, your thinking.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-primary/20 transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-white mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Build Your Own Edge</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Stop renting other people's edges. Learn to test, journal, and iterate your own strategy. Success is knowledge + behaviour change, not a specific P&L outcome.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* 3.5 How AppleCore Makes Money */}
        <section id="transparency" className="py-32 border-b border-white/5 snap-start bg-zinc-900/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <Shield className="text-primary w-8 h-8" /> How AppleCore Makes Money
              </h2>
              <p className="text-zinc-400 max-w-2xl text-lg mb-12">
                Transparency about incentives is our competitive advantage. Here's exactly how we earn revenue—and why it matters.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-8 rounded-xl bg-primary/5 border border-primary/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="text-primary w-5 h-5" /> How We Earn Revenue
                  </h3>
                  <ul className="space-y-3 text-zinc-300">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">1.</span>
                      <span><strong>Monthly Subscription (£49/mo)</strong> – Access to Academy, Discord, indicators, and live sessions</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">2.</span>
                      <span><strong>Premium Features</strong> – Advanced tools, 1-on-1 mentorship, and Alpha Cohort program</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">3.</span>
                      <span><strong>That's it.</strong> No referral links, no broker kickbacks, no incentives based on your trading activity.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-8 rounded-xl bg-red-500/5 border border-red-500/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <XCircle className="text-red-500 w-5 h-5" /> What We Don't Do
                  </h3>
                  <ul className="space-y-3 text-zinc-300">
                    <li className="flex gap-3">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>We don't profit from your losses</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>We don't have affiliate deals with brokers or prop firms</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>We don't incentivize over-trading or excessive risk</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>We don't make money when you lose money</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-8 rounded-xl bg-zinc-900 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Why This Matters</h3>
                <p className="text-zinc-300 leading-relaxed">
                  74-89% of retail traders lose money. Most "education" brands profit from this. Signal groups, prop-firm referrals, and broker kickbacks create perverse incentives—the more you trade (and lose), the more they earn. AppleCore is different. Our success is tied to your learning and behaviour change, not your trading activity. When you succeed, we succeed. When you fail, we fail. That alignment is rare in this industry, and it's why we're transparent about how we make money.
                </p>
              </div>
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

            <div className="mb-12 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-zinc-400 font-semibold">Feature</th>
                    <th className="text-left py-4 px-4 text-red-400 font-semibold">Competitors (Red Ocean)</th>
                    <th className="text-left py-4 px-4 text-primary font-semibold">Applecore (Blue Ocean)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5 hover:bg-white/2 transition-colors">
                    <td className="py-4 px-4 text-zinc-300 font-medium">Core Promise</td>
                    <td className="py-4 px-4 text-zinc-500">"Get Rich Quick"</td>
                    <td className="py-4 px-4 text-primary">"Master Your Mind"</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/2 transition-colors">
                    <td className="py-4 px-4 text-zinc-300 font-medium">Visual Style</td>
                    <td className="py-4 px-4 text-zinc-500">Lamborghinis, Cash, Beaches</td>
                    <td className="py-4 px-4 text-primary">Dark, Industrial, Data-Driven</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/2 transition-colors">
                    <td className="py-4 px-4 text-zinc-300 font-medium">Product Focus</td>
                    <td className="py-4 px-4 text-zinc-500">Magic Indicators (Black Box)</td>
                    <td className="py-4 px-4 text-primary">Education & Tools (Glass Box)</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/2 transition-colors">
                    <td className="py-4 px-4 text-zinc-300 font-medium">Community</td>
                    <td className="py-4 px-4 text-zinc-500">Signal Following (Sheep)</td>
                    <td className="py-4 px-4 text-primary">Skill Building (Wolves)</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/2 transition-colors">
                    <td className="py-4 px-4 text-zinc-300 font-medium">Retention</td>
                    <td className="py-4 px-4 text-zinc-500">Low (Churn after loss)</td>
                    <td className="py-4 px-4 text-primary">High (Loyalty to process)</td>
                  </tr>
                </tbody>
              </table>
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

        {/* 4.5 Narrative Pillars */}
        <section id="pillars" className="py-32 border-b border-white/5 snap-start bg-zinc-950">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Core Narrative</h2>
              <p className="text-zinc-400 max-w-2xl text-lg">
                Four pillars that guide everything we create, teach, and build.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Pillar 1 */}
              <div className="p-8 rounded-xl bg-red-500/5 border border-red-500/20 hover:border-red-500/40 transition-colors">
                <div className="flex items-start gap-4 mb-6">
                  <AlertTriangle className="text-red-500 w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">The Game Is Treacherous</h3>
                    <p className="text-red-400 text-sm font-semibold">We Show You the Script</p>
                  </div>
                </div>
                <div className="space-y-4 text-zinc-300">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-red-400 font-semibold mb-2">The Reality</p>
                    <p className="text-sm leading-relaxed">74-89% of retail traders lose money. Brokers profit from your losses. Signal groups create false hope. The system is designed to extract money from retail traders.</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-red-400 font-semibold mb-2">Our Stance</p>
                    <p className="text-sm leading-relaxed">We break the fourth wall. We explain how the game really works—without cashing in on your confusion. Transparency about incentives is our competitive advantage.</p>
                  </div>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-8 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/40 transition-colors">
                <div className="flex items-start gap-4 mb-6">
                  <Eye className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">See the Market Clearly</h3>
                    <p className="text-primary text-sm font-semibold">Bias-Free Foundations</p>
                  </div>
                </div>
                <div className="space-y-4 text-zinc-300">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">The Problem</p>
                    <p className="text-sm leading-relaxed">Most traders learn from biased sources. They inherit "the usual" methods. Indicator stacks without understanding. Social media noise.</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">Our Approach</p>
                    <p className="text-sm leading-relaxed">Time → Structure → Behaviour → Tools. We teach you to see clearly first, then use indicators as supporting tools, not magic answers.</p>
                  </div>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-8 rounded-xl bg-accent/5 border border-accent/20 hover:border-accent/40 transition-colors">
                <div className="flex items-start gap-4 mb-6">
                  <Layers className="text-accent w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Build Your Own Edge</h3>
                    <p className="text-accent text-sm font-semibold">The Verification Lab</p>
                  </div>
                </div>
                <div className="space-y-4 text-zinc-300">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">The Trap</p>
                    <p className="text-sm leading-relaxed">Most traders rent other people's edges. Copy-trading. Signal groups. "This one system fixed everything" promises.</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">Our Lab</p>
                    <p className="text-sm leading-relaxed">Low-ticket entry to test and build your own framework. Journals, rule-sets, backtesting. Success = knowledge + behaviour change, not a specific P&L outcome.</p>
                  </div>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="p-8 rounded-xl bg-purple-500/5 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                <div className="flex items-start gap-4 mb-6">
                  <Users className="text-purple-400 w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Workshop, Not Wolf Pack</h3>
                    <p className="text-purple-400 text-sm font-semibold">The Community That Works</p>
                  </div>
                </div>
                <div className="space-y-4 text-zinc-300">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-purple-400 font-semibold mb-2">The Noise</p>
                    <p className="text-sm leading-relaxed">Discord signal rooms. Telegram drama. "Ape in" mentality. Blame cycles when trades go wrong.</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-purple-400 font-semibold mb-2">Our Workshop</p>
                    <p className="text-sm leading-relaxed">Structured spaces. Beginner questions safe. Advanced strategy for tinkerers. Wins & Accountability based on process, not P&L flexing.</p>
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

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl bg-blue-500/5 border border-blue-500/20 hover:border-blue-500/40 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-1">Blank Canvas Beginner</h3>
                <p className="text-blue-400 font-mono text-sm mb-6">18-26 years old</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">Who They Are</h4>
                    <p className="text-zinc-300 text-sm leading-relaxed">Heavy YouTube, Instagram, TikTok users. Curious about markets but haven't adopted a fixed school yet.</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">Pain Points</h4>
                    <p className="text-zinc-300 text-sm leading-relaxed">Overwhelmed by conflicting advice. Afraid of being scammed. Don't know why most people lose.</p>
                  </div>
                  <div className="pt-4 border-t border-blue-500/20">
                    <p className="text-blue-300 font-semibold text-sm">The place you go when you'd rather understand the market than copy calls.</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-xl bg-red-500/5 border border-red-500/20 hover:border-red-500/40 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-1">Rebuilder</h3>
                <p className="text-red-400 font-mono text-sm mb-6">25-40 years old</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">Who They Are</h4>
                    <p className="text-zinc-300 text-sm leading-relaxed">Already tried courses, signal groups, or prop challenges. Has scars. Deeply sceptical.</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">Pain Points</h4>
                    <p className="text-zinc-300 text-sm leading-relaxed">Lost money in toxic spaces. Doesn't want to feel duped again.</p>
                  </div>
                  <div className="pt-4 border-t border-red-500/20">
                    <p className="text-red-300 font-semibold text-sm">You weren't stupid. The game is set up this way. Here's how you walk back in with your eyes open.</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-xl bg-purple-500/5 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-1">Systems Tinkerer</h3>
                <p className="text-purple-400 font-mono text-sm mb-6">25-40 years old</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">Who They Are</h4>
                    <p className="text-zinc-300 text-sm leading-relaxed">Analytical by nature. Comfortable with spreadsheets/backtesting. Built or modified indicators before.</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">Pain Points</h4>
                    <p className="text-zinc-300 text-sm leading-relaxed">Too many ideas, partial systems. Broker differences unclear. Indicators oversold and under-explained.</p>
                  </div>
                  <div className="pt-4 border-t border-purple-500/20">
                    <p className="text-purple-300 font-semibold text-sm">Build and test your own framework with our bias-aware system.</p>
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

            <div className="space-y-8">
              {/* Step 1: Discovery */}
              <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">1</div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-1">Discovery (The Pattern Interrupt)</h3>
                    <p className="text-zinc-400 mb-4">User sees a "Mindset Revolution" ad. It attacks their insecurity (gambling mentality) rather than promising riches.</p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-lg bg-black/30 border border-white/5">
                        <h4 className="text-xs font-mono text-zinc-500 uppercase mb-2">Channel</h4>
                        <p className="text-white font-medium">Ads / Organic</p>
                      </div>
                      <div className="p-4 rounded-lg bg-black/30 border border-white/5">
                        <h4 className="text-xs font-mono text-zinc-500 uppercase mb-2">Asset</h4>
                        <p className="text-primary font-medium">"Stop Acting Like An Amateur" Video</p>
                      </div>
                      <div className="p-4 rounded-lg bg-black/30 border border-white/5">
                        <h4 className="text-xs font-mono text-zinc-500 uppercase mb-2">KPI</h4>
                        <p className="text-secondary font-medium">CTR &gt; 1.5%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Indoctrination */}
              <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-lg">2</div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-1">Indoctrination (The Value Hook)</h3>
                    <p className="text-zinc-400 mb-4">User lands on a VSL (Video Sales Letter) that explains the "Psychological Edge". They opt-in for a free "Trader Personality Test".</p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-lg bg-black/30 border border-white/5">
                        <h4 className="text-xs font-mono text-zinc-500 uppercase mb-2">Channel</h4>
                        <p className="text-white font-medium">Landing Page</p>
                      </div>
                      <div className="p-4 rounded-lg bg-black/30 border border-white/5">
                        <h4 className="text-xs font-mono text-zinc-500 uppercase mb-2">Asset</h4>
                        <p className="text-primary font-medium">Personality Quiz / Lead Magnet</p>
                      </div>
                      <div className="p-4 rounded-lg bg-black/30 border border-white/5">
                        <h4 className="text-xs font-mono text-zinc-500 uppercase mb-2">KPI</h4>
                        <p className="text-secondary font-medium">Opt-in Rate &gt; 25%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Conversion */}
              <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-lg">3</div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-1">Conversion (The Tripwire)</h3>
                    <p className="text-zinc-400 mb-4">Immediately after opt-in, user is offered a low-ticket product (£4.99 "Trading Journal Template") to break the wallet barrier.</p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-lg bg-black/30 border border-white/5">
                        <h4 className="text-xs font-mono text-zinc-500 uppercase mb-2">Channel</h4>
                        <p className="text-white font-medium">Checkout</p>
                      </div>
                      <div className="p-4 rounded-lg bg-black/30 border border-white/5">
                        <h4 className="text-xs font-mono text-zinc-500 uppercase mb-2">Offer</h4>
                        <p className="text-primary font-medium">£4.99 No-Brainer</p>
                      </div>
                      <div className="p-4 rounded-lg bg-black/30 border border-white/5">
                        <h4 className="text-xs font-mono text-zinc-500 uppercase mb-2">KPI</h4>
                        <p className="text-secondary font-medium">Purchase Rate &gt; 5%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4: Ascension */}
              <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold text-lg">4</div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-1">Ascension (The Core Offer)</h3>
                    <p className="text-zinc-400 mb-4">Buyers are nurtured via email to join the "Applecore Academy" (Monthly Subscription). Non-buyers get the "7-Day Mindset Reset" sequence.</p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-lg bg-black/30 border border-white/5">
                        <h4 className="text-xs font-mono text-zinc-500 uppercase mb-2">Channel</h4>
                        <p className="text-white font-medium">Email Upsell</p>
                      </div>
                      <div className="p-4 rounded-lg bg-black/30 border border-white/5">
                        <h4 className="text-xs font-mono text-zinc-500 uppercase mb-2">Product</h4>
                        <p className="text-primary font-medium">£49/mo Membership</p>
                      </div>
                      <div className="p-4 rounded-lg bg-black/30 border border-white/5">
                        <h4 className="text-xs font-mono text-zinc-500 uppercase mb-2">KPI</h4>
                        <p className="text-secondary font-medium">LTV &gt; £250</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5: Upsell */}
              <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-500 font-bold text-lg">5</div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-1">Upsell (High Ticket)</h3>
                    <p className="text-zinc-400 mb-4">Active members are offered the "Alpha Cohort" - an intensive 8-week implementation program with 1-on-1 mentorship and inner circle access.</p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-lg bg-black/30 border border-white/5">
                        <h4 className="text-xs font-mono text-zinc-500 uppercase mb-2">Channel</h4>
                        <p className="text-white font-medium">In-App Upsell</p>
                      </div>
                      <div className="p-4 rounded-lg bg-black/30 border border-white/5">
                        <h4 className="text-xs font-mono text-zinc-500 uppercase mb-2">Product</h4>
                        <p className="text-primary font-medium">£2,500 Alpha Cohort</p>
                      </div>
                      <div className="p-4 rounded-lg bg-black/30 border border-white/5">
                        <h4 className="text-xs font-mono text-zinc-500 uppercase mb-2">KPI</h4>
                        <p className="text-secondary font-medium">Conversion Rate &gt; 10%</p>
                      </div>
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
              <div className="flex items-center justify-between max-w-2xl">
                <p className="text-zinc-400 text-lg">
                  The silent salesman working 24/7. Click to preview scripts.
                </p>
                <Link href="/email-strategy">
                  <Button variant="outline" className="gap-2 border-white/10 hover:bg-white/5">
                    View Full Email Playbook <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
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

        {/* 8. Organic Content Pillars */}
        <section id="organic" className="py-32 border-b border-white/5 snap-start bg-zinc-950">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <Smartphone className="text-primary w-8 h-8" /> Organic Content Pillars
              </h2>
              <p className="text-zinc-400 max-w-2xl text-lg">
                We don't just rely on ads. We build a media machine.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-6">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">The Analyst (YouTube)</h3>
                <p className="text-zinc-400 mb-4">Deep dive market breakdowns. 20-minute videos showing "How I predicted this move". Builds extreme authority.</p>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider border border-zinc-800 px-2 py-1 rounded">Search Traffic</span>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">The Contrarian (X/Twitter)</h3>
                <p className="text-zinc-400 mb-4">Short, punchy threads attacking common trading myths. "Why RSI is a scam". "Stop using Support/Resistance".</p>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider border border-zinc-800 px-2 py-1 rounded">Viral Reach</span>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">The Monk (IG/TikTok)</h3>
                <p className="text-zinc-400 mb-4">Lifestyle, but not "Lambo". Discipline, gym, charts, routine. Aspirational but grounded.</p>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider border border-zinc-800 px-2 py-1 rounded">Brand Image</span>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Retention Mechanics */}
        <section id="retention" className="py-32 border-b border-white/5 snap-start bg-zinc-900/30">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <Lock className="text-white w-8 h-8" /> Retention Mechanics
              </h2>
              <p className="text-zinc-400 max-w-2xl text-lg">
                How we keep them paying month after month.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6">The "First Win" Protocol</h3>
                <p className="text-zinc-400 mb-6">Churn happens when users feel overwhelmed. We engineer a "Quick Win" within the first 48 hours.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">1</div>
                    <span className="text-zinc-300">User Joins</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">2</div>
                    <span className="text-zinc-300">Watches "Mindset Reset" (15 mins)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">3</div>
                    <span className="text-zinc-300">Feels "Relief" (Dopamine Hit)</span>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6">Tribal Lock-In</h3>
                <p className="text-zinc-400 mb-6">People come for the content, but they stay for the community. We build a "Cult of Discipline".</p>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-bold mb-2">Shared Enemy</h4>
                    <p className="text-zinc-500 text-sm">Us vs. The "Gamblers". Us vs. The "Institutions".</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Status Games</h4>
                    <p className="text-zinc-500 text-sm">Badges for "30 Days Disciplined". Leaderboards for consistency, not P&L.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. The Value Ladder */}
        <section id="value-ladder" className="py-32 border-b border-white/5 snap-start bg-zinc-950">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <TrendingUp className="text-primary w-8 h-8" /> The Value Ladder
              </h2>
              <p className="text-zinc-400 max-w-2xl text-lg">
                How we maximize LTV by guiding customers from a low-risk entry to a high-ticket commitment.
              </p>
            </div>

            <div className="space-y-8">
              {/* Backend - High Ticket */}
              <div className="p-8 rounded-3xl bg-gradient-to-r from-rose-500/10 to-transparent border border-rose-500/20">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xs font-mono text-rose-400 uppercase tracking-wider mb-2">Backend (Profit)</h3>
                    <h4 className="text-2xl font-bold text-white mb-2">1-on-1 Mentorship</h4>
                    <p className="text-zinc-400 text-sm mb-4">Direct access to the founder. Custom trading plan. Accountability.</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-rose-400 mb-2">£2,500</div>
                    <div className="flex flex-col gap-2">
                      <span className="px-3 py-1 rounded-full bg-rose-500/20 text-xs text-rose-400 border border-rose-500/20">High Margin</span>
                      <span className="px-3 py-1 rounded-full bg-rose-500/20 text-xs text-rose-400 border border-rose-500/20">Limited Spots</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-gradient-to-r from-rose-500/10 to-transparent border border-rose-500/20">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xs font-mono text-rose-400 uppercase tracking-wider mb-2">Backend (Profit)</h3>
                    <h4 className="text-2xl font-bold text-white mb-2">Alpha Cohort</h4>
                    <p className="text-zinc-400 text-sm mb-4">8-week intensive implementation program. Live execution, psychology deep-work, and tribal accountability.</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-rose-400 mb-2">£497</div>
                    <div className="flex flex-col gap-2">
                      <span className="px-3 py-1 rounded-full bg-rose-500/20 text-xs text-rose-400 border border-rose-500/20">High Margin</span>
                      <span className="px-3 py-1 rounded-full bg-rose-500/20 text-xs text-rose-400 border border-rose-500/20">Scalable</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Offer */}
              <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 shadow-[0_0_50px_rgba(224,255,152,0.05)]">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xs font-mono text-primary uppercase tracking-wider mb-2">Core Offer</h3>
                    <h4 className="text-2xl font-bold text-white mb-2">Applecore Academy</h4>
                    <p className="text-zinc-400 text-sm mb-4">The recurring revenue engine. Community, tools, and ongoing education.</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-zinc-300 border border-zinc-700">Daily Market Breakdown</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-zinc-300 border border-zinc-700">Discord Access</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-zinc-300 border border-zinc-700">Live Q&A Sessions</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary mb-2">£49<span className="text-lg">/mo</span></div>
                    <div className="flex flex-col gap-2">
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-xs text-primary border border-primary/20">Recurring</span>
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-xs text-primary border border-primary/20">Sticky</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Frontend - Entry */}
              <div className="p-8 rounded-3xl bg-gradient-to-r from-secondary/10 to-transparent border border-secondary/20">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xs font-mono text-secondary uppercase tracking-wider mb-2">Frontend (Acquisition)</h3>
                    <h4 className="text-2xl font-bold text-white mb-2">Mindset Reset</h4>
                    <p className="text-zinc-400 text-sm mb-4">7-Day Audio Program. Solves the immediate pain of "Tilt".</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-secondary mb-2">£4.99</div>
                    <div className="flex flex-col gap-2">
                      <span className="px-3 py-1 rounded-full bg-secondary/20 text-xs text-secondary border border-secondary/20">Low Barrier</span>
                      <span className="px-3 py-1 rounded-full bg-secondary/20 text-xs text-secondary border border-secondary/20">High Volume</span>
                    </div>
                  </div>
                </div>
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

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {phase.actions.map((action, i) => (
                        <div key={i} className="group relative bg-black/40 border border-zinc-800 hover:border-primary/50 rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(224,255,152,0.8)] animate-pulse"></div>
                          </div>
                          
                          <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-primary group-hover:border-primary/30 transition-colors mb-6">
                            {action.icon}
                          </div>
                          
                          <div className="mb-4">
                            <span className="inline-block px-2 py-1 rounded bg-zinc-900 text-zinc-500 text-xs font-mono mb-2 border border-zinc-800">
                              IDEA {i + 1}
                            </span>
                            <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                              {action.title}
                            </h4>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="p-3 rounded bg-zinc-900/50 border border-zinc-800/50">
                              <p className="text-sm font-medium text-zinc-200 mb-1">Action:</p>
                              <p className="text-sm text-zinc-400">{action.task}</p>
                            </div>
                            <p className="text-xs text-zinc-500 leading-relaxed pl-1 border-l border-zinc-800">
                              {action.context}
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
        {/* 9. Risk Mitigation */}
        <section id="risk" className="py-32 border-b border-white/5 snap-start bg-zinc-900/30">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <Shield className="text-white w-8 h-8" /> Risk Mitigation
              </h2>
              <p className="text-zinc-400 max-w-2xl text-lg">
                Anti-fragility protocols. What happens if things break?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-zinc-900 border border-red-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <AlertTriangle className="text-red-500 w-6 h-6" />
                  <h3 className="text-xl font-bold text-white">Risk: Ad Account Ban</h3>
                </div>
                <p className="text-zinc-400 mb-4">Meta hates "Make Money Online" offers.</p>
                <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                  <h4 className="text-primary font-bold text-sm uppercase mb-2">Solution: Compliance First</h4>
                  <p className="text-zinc-500 text-sm">We never promise returns. We sell "Education" and "Discipline". We use a "Bridge Page" (VSL) to insulate the ad account.</p>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-900 border border-yellow-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <AlertTriangle className="text-yellow-500 w-6 h-6" />
                  <h3 className="text-xl font-bold text-white">Risk: Copycat Competitors</h3>
                </div>
                <p className="text-zinc-400 mb-4">Someone steals the course and sells it for $5.</p>
                <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                  <h4 className="text-primary font-bold text-sm uppercase mb-2">Solution: Community Moat</h4>
                  <p className="text-zinc-500 text-sm">They can steal the videos, but they can't steal the live calls, the Discord vibes, and the leaderboards. The value is in the network.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Launch Checklist */}
        <section id="checklist" className="py-32 border-b border-white/5 snap-start bg-zinc-950">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <ListChecks className="text-primary w-8 h-8" /> Launch Checklist
              </h2>
              <p className="text-zinc-400 max-w-2xl text-lg">
                Mission Critical items before pressing "GO".
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-white font-bold border-b border-white/10 pb-2">Technical</h3>
                <ul className="space-y-3">
                  {["Stripe Webhooks Tested", "Email DKIM/SPF Verified", "Pixel Events (Purchase, Lead) Firing", "Mobile Responsive Check"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-400">
                      <div className="w-4 h-4 rounded border border-zinc-600 flex items-center justify-center"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-white font-bold border-b border-white/10 pb-2">Content Assets</h3>
                <ul className="space-y-3">
                  {["5x Ad Creatives (Video + Static)", "VSL Script Recorded & Edited", "Welcome Email Sequence Loaded", "Social Proof Screenshots Collected"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-400">
                      <div className="w-4 h-4 rounded border border-zinc-600 flex items-center justify-center"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-white font-bold border-b border-white/10 pb-2">Legal & Compliance</h3>
                <ul className="space-y-3">
                  {["Terms of Service & Privacy Policy", "'Not Financial Advice' Disclaimer", "Refund Policy Clearly Visible", "GDPR/Cookie Consent Banner"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-400">
                      <div className="w-4 h-4 rounded border border-zinc-600 flex items-center justify-center"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 13. KPI Dashboard */}
        <section id="kpi" className="py-32 snap-start bg-zinc-950">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <BarChart3 className="text-primary w-8 h-8" /> KPI Dashboard
              </h2>
              <p className="text-zinc-400 max-w-2xl text-lg">
                The numbers that matter. If these are green, we scale. Target: 500 users in 12 months.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Acquisition KPIs */}
              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                <div className="text-xs font-mono text-zinc-500 uppercase mb-2">Monthly Leads</div>
                <div className="text-4xl font-bold text-primary mb-2">1,260</div>
                <div className="text-xs text-zinc-500">Target: 42 leads/day</div>
                <div className="mt-3 h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                <div className="text-xs font-mono text-zinc-500 uppercase mb-2">Cost Per Lead</div>
                <div className="text-4xl font-bold text-secondary mb-2">£2.50</div>
                <div className="text-xs text-zinc-500">Target: &lt; £3/lead</div>
                <div className="mt-3 h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                <div className="text-xs font-mono text-zinc-500 uppercase mb-2">Opt-in Rate</div>
                <div className="text-4xl font-bold text-accent mb-2">28%</div>
                <div className="text-xs text-zinc-500">Target: &gt; 25%</div>
                <div className="mt-3 h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                <div className="text-xs font-mono text-zinc-500 uppercase mb-2">Monthly Ad Spend</div>
                <div className="text-4xl font-bold text-emerald-500 mb-2">£3,000</div>
                <div className="text-xs text-zinc-500">Budget: £3k-5k/month</div>
                <div className="mt-3 h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Conversion KPIs */}
              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                <div className="text-xs font-mono text-zinc-500 uppercase mb-2">Tripwire Conversion</div>
                <div className="text-4xl font-bold text-primary mb-2">6%</div>
                <div className="text-xs text-zinc-500">£4.99 offer conversion</div>
                <div className="mt-3 h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                <div className="text-xs font-mono text-zinc-500 uppercase mb-2">Core Offer Conversion</div>
                <div className="text-4xl font-bold text-secondary mb-2">22%</div>
                <div className="text-xs text-zinc-500">£49/mo membership</div>
                <div className="mt-3 h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full" style={{width: '88%'}}></div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                <div className="text-xs font-mono text-zinc-500 uppercase mb-2">High-Ticket Conversion</div>
                <div className="text-4xl font-bold text-accent mb-2">8%</div>
                <div className="text-xs text-zinc-500">£497 Alpha Cohort</div>
                <div className="mt-3 h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                <div className="text-xs font-mono text-zinc-500 uppercase mb-2">Mentorship Conversion</div>
                <div className="text-4xl font-bold text-rose-500 mb-2">3%</div>
                <div className="text-xs text-zinc-500">£2,500 1-on-1</div>
                <div className="mt-3 h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-rose-500 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Retention & Revenue KPIs */}
              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                <div className="text-xs font-mono text-zinc-500 uppercase mb-2">Monthly Churn Rate</div>
                <div className="text-4xl font-bold text-primary mb-2">8%</div>
                <div className="text-xs text-zinc-500">Target: &lt; 10%</div>
                <div className="mt-3 h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{width: '92%'}}></div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                <div className="text-xs font-mono text-zinc-500 uppercase mb-2">Customer LTV</div>
                <div className="text-4xl font-bold text-secondary mb-2">£380</div>
                <div className="text-xs text-zinc-500">Lifetime value per user</div>
                <div className="mt-3 h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                <div className="text-xs font-mono text-zinc-500 uppercase mb-2">Monthly Recurring Revenue</div>
                <div className="text-4xl font-bold text-accent mb-2">£5,400</div>
                <div className="text-xs text-zinc-500">From £49/mo members</div>
                <div className="mt-3 h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{width: '82%'}}></div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                <div className="text-xs font-mono text-zinc-500 uppercase mb-2">Annual Recurring Revenue</div>
                <div className="text-4xl font-bold text-emerald-500 mb-2">£64,800</div>
                <div className="text-xs text-zinc-500">Projected ARR</div>
                <div className="mt-3 h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{width: '88%'}}></div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Growth Targets */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                <div className="text-xs font-mono text-primary uppercase mb-4">12-Month Target</div>
                <div className="text-5xl font-bold text-white mb-2">500</div>
                <div className="text-lg text-zinc-400 mb-4">Active Users</div>
                <div className="space-y-2 text-sm text-zinc-400">
                  <div>• 42 new users/day</div>
                  <div>• 1,260 users/month</div>
                  <div>• £190k annual revenue</div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20">
                <div className="text-xs font-mono text-secondary uppercase mb-4">Funnel Health</div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-zinc-400">Awareness &rarr; Lead</span>
                      <span className="text-secondary font-bold">28%</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-secondary rounded-full" style={{width: '28%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-zinc-400">Lead &rarr; Buyer</span>
                      <span className="text-secondary font-bold">6%</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-secondary rounded-full" style={{width: '6%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-zinc-400">Buyer &rarr; Member</span>
                      <span className="text-secondary font-bold">22%</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-secondary rounded-full" style={{width: '22%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
                <div className="text-xs font-mono text-accent uppercase mb-4">Monthly Breakdown</div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Ad Spend</span>
                    <span className="text-accent font-bold">£3,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">New Leads</span>
                    <span className="text-accent font-bold">1,260</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">New Members</span>
                    <span className="text-accent font-bold">42</span>
                  </div>
                  <div className="flex justify-between border-t border-white/5 pt-3 mt-3">
                    <span className="text-zinc-400">CAC (Member)</span>
                    <span className="text-accent font-bold">£71.43</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 14. Creative Assets */}
        <section id="creative-assets" className="py-32 snap-start bg-zinc-950">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <Palette className="text-primary w-8 h-8" /> Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Assets</span>
              </h2>
              <p className="text-zinc-400 max-w-2xl text-lg">
                Visual inventory and psychological angles for the initial campaign launch.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Asset 1: Story */}
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
                      <p className="text-zinc-400 text-sm mt-2">Stops the scroll with high-contrast neon visuals. Direct command: "Stop Guessing".</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Asset 2: Feed */}
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
                      <p className="text-zinc-400 text-sm mt-2">Classic comparison. Chaos (Gambling) vs Order (Precision). Positions Applecore as the professional choice.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Asset 3: YouTube */}
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
                      <p className="text-zinc-400 text-sm mt-2">High CTR design. Focus on the result (90% Win Rate) and the "Buy Signal" mechanism.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Production Checklist</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-zinc-300">
                  <div className="w-5 h-5 rounded-full border border-primary flex items-center justify-center text-primary text-xs">✓</div>
                  <span>Export all static assets in 1080x1080 and 1080x1920</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <div className="w-5 h-5 rounded-full border border-primary flex items-center justify-center text-primary text-xs">✓</div>
                  <span>Create 3 variations of hook text for video ads</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <div className="w-5 h-5 rounded-full border border-primary flex items-center justify-center text-primary text-xs">✓</div>
                  <span>Set up UTM tracking parameters for each creative</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <div className="w-5 h-5 rounded-full border border-primary flex items-center justify-center text-primary text-xs">✓</div>
                  <span>Ensure all text overlays are within "Safe Zones"</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge Base Strategy Link */}
        <section className="py-20 border-t border-white/5 bg-gradient-to-b from-transparent to-primary/5">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Content Engine?</h2>
              <p className="text-zinc-400 text-lg mb-8">
                The Digital Strategy is just the beginning. Discover how to attract, educate, and convert traders through a strategic Knowledge Base.
              </p>
              <Link href="/knowledge-base-strategy">
                <Button size="lg" className="gap-2">
                  View Knowledge Base Strategy
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
