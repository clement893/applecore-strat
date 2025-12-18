import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArrowRight, Target, Users, BarChart3, Shield, Zap, Brain, Crosshair, TrendingUp, Lock } from "lucide-react";

export default function DigitalStrategy() {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black">
      {/* Global Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
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
            <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-500 text-xs font-mono uppercase tracking-wider border border-blue-500/20">
              Market Analysis
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -translate-y-1/2"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <h4 className="text-blue-500 font-mono mb-4 tracking-widest uppercase text-sm">Go-To-Market Strategy</h4>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white">
              The Anti-Guru Blueprint
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              How we capture the most valuable segment of the trading market by doing exactly the opposite of what everyone else is doing.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-20 border-b border-white/10">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded bg-blue-500/10 flex items-center justify-center text-blue-500">
              <Target className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-white">Strategic Axes</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-white/5 hover:border-blue-500/50 transition-colors group">
              <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg group-hover:bg-blue-500/20 group-hover:text-blue-500 transition-colors">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">1. Radical Truth</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                The market is flooded with "easy money" promises. We pivot to "hard truth". We validate the user's pain by admitting trading is hard.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>No Lambos, just charts</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>Focus on risk, not reward</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>Transparency on losses</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-colors group">
              <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">2. Institutional Edge</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                We position retail trading methods (RSI, MACD) as "toys". We sell "weapons". The allure is accessing the tools the 1% use.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span>Order Flow vs Indicators</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span>Market Structure vs Patterns</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span>Data vs Intuition</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-white/5 hover:border-purple-500/50 transition-colors group">
              <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg group-hover:bg-purple-500/20 group-hover:text-purple-500 transition-colors">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">3. The 1% Tribe</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                We don't build a customer base; we build a cult of excellence. Membership is framed as an achievement, not a purchase.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-500 rounded-full"></span>Elitist language</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-500 rounded-full"></span>"Not for everyone" framing</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-500 rounded-full"></span>Community as a filter</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The User Journey (Funnel) */}
      <section className="py-20 border-b border-white/10 bg-black/50">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-white">The User Journey</h2>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 -translate-y-1/2 hidden md:block"></div>

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {/* Step 1: Discovery */}
              <div className="bg-card border border-white/10 p-6 rounded-xl hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-black border-2 border-primary flex items-center justify-center text-primary font-bold text-xl mb-4 group-hover:scale-110 transition-transform">1</div>
                <h3 className="text-lg font-bold text-white mb-2">Discovery</h3>
                <div className="text-xs font-mono text-primary mb-3">SOCIAL ADS (META/TIKTOK)</div>
                <p className="text-sm text-gray-400">
                  User sees "Pattern Interrupt" ad. No charts, just hard truth about why they are failing.
                </p>
              </div>

              {/* Step 2: Consideration */}
              <div className="bg-card border border-white/10 p-6 rounded-xl hover:border-secondary/50 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-black border-2 border-secondary flex items-center justify-center text-secondary font-bold text-xl mb-4 group-hover:scale-110 transition-transform">2</div>
                <h3 className="text-lg font-bold text-white mb-2">Consideration</h3>
                <div className="text-xs font-mono text-secondary mb-3">VSL (VIDEO SALES LETTER)</div>
                <p className="text-sm text-gray-400">
                  User watches 5-min video explaining the "Institutional Edge". Value first, pitch second.
                </p>
              </div>

              {/* Step 3: Tripwire */}
              <div className="bg-card border border-white/10 p-6 rounded-xl hover:border-white/50 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-black border-2 border-white flex items-center justify-center text-white font-bold text-xl mb-4 group-hover:scale-110 transition-transform">3</div>
                <h3 className="text-lg font-bold text-white mb-2">Micro-Commitment</h3>
                <div className="text-xs font-mono text-white mb-3">£4.99 TRIPWIRE OFFER</div>
                <p className="text-sm text-gray-400">
                  User buys "The Mindset Reset" mini-course. Low friction, high perceived value.
                </p>
              </div>

              {/* Step 4: Conversion */}
              <div className="bg-card border border-white/10 p-6 rounded-xl hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-black border-2 border-primary flex items-center justify-center text-primary font-bold text-xl mb-4 group-hover:scale-110 transition-transform">4</div>
                <h3 className="text-lg font-bold text-white mb-2">Core Offer</h3>
                <div className="text-xs font-mono text-primary mb-3">ACADEMY SUBSCRIPTION</div>
                <p className="text-sm text-gray-400">
                  Upsell to full membership immediately after purchase or via email sequence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Welcome Sequence (Tripwire to Sub) */}
      <section className="py-20 border-b border-white/10">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center text-secondary">
              <Zap className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-white">The £4.99 to Subscriber Pipeline</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Why the £4.99 Tripwire?</h3>
              <p className="text-gray-400 leading-relaxed">
                It's easier to get a second payment from a customer than a first payment from a stranger. The £4.99 product qualifies the lead: they have a credit card and are willing to pay for a solution.
              </p>
              <div className="p-6 rounded-xl bg-secondary/5 border border-secondary/20">
                <h4 className="font-bold text-secondary mb-4">The Automated Upsell Sequence</h4>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-xs shrink-0">D0</div>
                    <div>
                      <div className="font-bold text-white">Immediate OTO (One-Time Offer)</div>
                      <div className="text-sm text-gray-400">"Upgrade to Full Academy for 50% off first month" shown on Thank You page.</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-xs shrink-0">D1</div>
                    <div>
                      <div className="font-bold text-white">Value Bomb Email</div>
                      <div className="text-sm text-gray-400">Delivering the £4.99 product + bonus unannounced resource.</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-xs shrink-0">D3</div>
                    <div>
                      <div className="font-bold text-white">The "Missing Piece" Email</div>
                      <div className="text-sm text-gray-400">"You have the mindset (Tripwire), now you need the tools (Academy)."</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-xs shrink-0">D7</div>
                    <div>
                      <div className="font-bold text-white">Scarcity Close</div>
                      <div className="text-sm text-gray-400">"Your new member discount expires in 24h."</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Visual Representation of the Pipeline */}
            <div className="relative aspect-square rounded-2xl bg-black border border-white/10 p-8 flex flex-col justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(116,31,144,0.15),transparent_70%)]"></div>
              
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-32 h-32 rounded-full border-4 border-white/10 flex flex-col items-center justify-center text-center p-2 bg-black">
                    <div className="text-2xl font-bold text-white">1,000</div>
                    <div className="text-xs text-gray-500">Leads</div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <ArrowRight className="h-8 w-8 text-gray-600 rotate-90" />
                </div>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-28 h-28 rounded-full border-4 border-white flex flex-col items-center justify-center text-center p-2 bg-black shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    <div className="text-xl font-bold text-white">100</div>
                    <div className="text-xs text-gray-400">Buyers (£4.99)</div>
                    <div className="text-[10px] text-green-400 font-mono mt-1">10% Conv.</div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="h-8 w-8 text-secondary rotate-90" />
                </div>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-24 h-24 rounded-full border-4 border-secondary flex flex-col items-center justify-center text-center p-2 bg-black shadow-[0_0_30px_rgba(116,31,144,0.4)]">
                    <div className="text-lg font-bold text-secondary">30</div>
                    <div className="text-xs text-gray-400">Subscribers</div>
                    <div className="text-[10px] text-green-400 font-mono mt-1">30% Upsell</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retention Mechanics */}
      <section className="py-20 border-b border-white/10 bg-black/50">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded bg-purple-500/10 flex items-center justify-center text-purple-500">
              <Lock className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-white">Retention Mechanics</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* The First Win Protocol */}
            <div className="p-8 rounded-2xl bg-card border border-white/5 hover:border-purple-500/50 transition-colors group">
              <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg group-hover:bg-purple-500/20 group-hover:text-purple-500 transition-colors">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">1. The "First Win" Protocol</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Churn happens when users feel overwhelmed. We engineer a "Quick Win" within the first 7 days to lock in dopamine and trust.
              </p>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 text-xs font-bold">D1</div>
                  <span className="text-gray-300">"Setup Your Charts" (Actionable, easy task)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 text-xs font-bold">D3</div>
                  <span className="text-gray-300">"Identify One Trend" (Skill validation)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 text-xs font-bold">D7</div>
                  <span className="text-gray-300">"Paper Trade Win" (Proof of concept)</span>
                </li>
              </ul>
            </div>

            {/* Tribal Lock-in */}
            <div className="p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-colors group">
              <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">2. Tribal Lock-in</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                We make leaving painful by embedding the user in a social hierarchy. Leaving Applecore means losing your status and your "tribe".
              </p>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  <span className="text-gray-300"><strong>Rank System:</strong> Users progress from "Initiate" to "Operator" based on discipline, not P&L.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  <span className="text-gray-300"><strong>Accountability Pods:</strong> Small groups of 5 that check in daily. You don't want to let your pod down.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  <span className="text-gray-300"><strong>Exclusive Access:</strong> Higher ranks unlock direct access to mentors.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences (Personas) */}
      <section className="py-20 border-b border-white/10 bg-black/50">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded bg-purple-500/10 flex items-center justify-center text-purple-500">
              <Users className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-white">Target Audiences</h2>
          </div>

          <div className="space-y-8">
            {/* Persona 1 */}
            <div className="grid md:grid-cols-12 gap-8 p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="md:col-span-4 border-r border-white/10 pr-8">
                <div className="text-xs font-mono text-red-500 mb-2">PRIMARY TARGET</div>
                <h3 className="text-2xl font-bold text-white mb-2">The Burned Churner</h3>
                <p className="text-lg text-gray-400 italic mb-6">"I've tried everything and nothing works."</p>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Pain Point</div>
                    <div className="text-sm text-white">Lost money on signals, bots, and "magic strategies". Feels stupid and frustrated.</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Hook</div>
                    <div className="text-sm text-white">"It's not your fault. You were given the wrong tools."</div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-8 grid sm:grid-cols-3 gap-6">
                <div className="bg-black/50 p-4 rounded-xl">
                  <div className="text-xs text-gray-500 mb-2">Demographics</div>
                  <div className="font-bold text-white">Male, 25-40</div>
                  <div className="text-sm text-gray-400">Employed, disposable income</div>
                </div>
                <div className="bg-black/50 p-4 rounded-xl">
                  <div className="text-xs text-gray-500 mb-2">Psychographics</div>
                  <div className="font-bold text-white">Skeptical but Desperate</div>
                  <div className="text-sm text-gray-400">Needs validation, hates gurus</div>
                </div>
                <div className="bg-black/50 p-4 rounded-xl">
                  <div className="text-xs text-gray-500 mb-2">Conversion Trigger</div>
                  <div className="font-bold text-white">Logic & Transparency</div>
                  <div className="text-sm text-gray-400">Show the data, hide the hype</div>
                </div>
              </div>
            </div>

            {/* Persona 2 */}
            <div className="grid md:grid-cols-12 gap-8 p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="md:col-span-4 border-r border-white/10 pr-8">
                <div className="text-xs font-mono text-blue-500 mb-2">SECONDARY TARGET</div>
                <h3 className="text-2xl font-bold text-white mb-2">The System Hopper</h3>
                <p className="text-lg text-gray-400 italic mb-6">"I need to optimize my edge."</p>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Pain Point</div>
                    <div className="text-sm text-white">Inconsistent results. Knows the basics but lacks a structured framework.</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Hook</div>
                    <div className="text-sm text-white">"Stop guessing. Start engineering your trade."</div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-8 grid sm:grid-cols-3 gap-6">
                <div className="bg-black/50 p-4 rounded-xl">
                  <div className="text-xs text-gray-500 mb-2">Demographics</div>
                  <div className="font-bold text-white">Male, 28-45</div>
                  <div className="text-sm text-gray-400">Tech/Engineering background</div>
                </div>
                <div className="bg-black/50 p-4 rounded-xl">
                  <div className="text-xs text-gray-500 mb-2">Psychographics</div>
                  <div className="font-bold text-white">Analytical & Methodical</div>
                  <div className="text-sm text-gray-400">Loves data, hates emotion</div>
                </div>
                <div className="bg-black/50 p-4 rounded-xl">
                  <div className="text-xs text-gray-500 mb-2">Conversion Trigger</div>
                  <div className="font-bold text-white">System & Process</div>
                  <div className="text-sm text-gray-400">Detailed curriculum, tools</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Matrix (Blue Ocean) */}
      <section className="py-20 border-b border-white/10">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded bg-orange-500/10 flex items-center justify-center text-orange-500">
              <Crosshair className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-white">Competitive Landscape</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">The Blue Ocean Strategy</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                The market is polarized between "Dream Sellers" (High Hype, Low Substance) and "Academic Tools" (High Substance, Low Engagement). Applecore occupies the unique space of <strong>"High Engagement + High Substance"</strong>.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center text-xs font-bold mt-1">X</div>
                  <div>
                    <strong className="text-white block">The "Lambo Gurus"</strong>
                    <span className="text-sm text-gray-500">Sell lifestyle, churn customers in 3 months. Zero retention.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-500/20 text-gray-500 flex items-center justify-center text-xs font-bold mt-1">X</div>
                  <div>
                    <strong className="text-white block">The "Chart Tools"</strong>
                    <span className="text-sm text-gray-500">Sell software, no community, steep learning curve. High abandonment.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-xs font-bold mt-1">✓</div>
                  <div>
                    <strong className="text-white block">Applecore Position</strong>
                    <span className="text-sm text-gray-500">Sells identity transformation. High retention, high LTV, viral loyalty.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Visual Matrix */}
            <div className="relative aspect-square bg-black/50 rounded-2xl border border-white/10 p-8">
              {/* Axis Labels */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-mono text-gray-500 uppercase">High Emotion / Hype</div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-mono text-gray-500 uppercase">Low Emotion / Dry</div>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-mono text-gray-500 uppercase">Low Substance</div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-xs font-mono text-gray-500 uppercase">High Substance</div>

              {/* Grid Lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-px bg-white/10"></div>
                <div className="h-full w-px bg-white/10 absolute"></div>
              </div>

              {/* Competitors */}
              <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mx-auto mb-2 animate-pulse"></div>
                <span className="text-xs text-red-500 font-bold">Gurus</span>
              </div>
              <div className="absolute bottom-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="w-3 h-3 bg-gray-500 rounded-full mx-auto mb-2"></div>
                <span className="text-xs text-gray-500 font-bold">SaaS Tools</span>
              </div>

              {/* Applecore */}
              <div className="absolute top-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="w-6 h-6 bg-primary rounded-full mx-auto mb-2 shadow-[0_0_20px_rgba(34,197,94,0.5)] flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <span className="text-sm text-primary font-bold bg-black/80 px-2 py-1 rounded border border-primary/20">APPLECORE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acquisition Funnel */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded bg-green-500/10 flex items-center justify-center text-green-500">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-white">The "Anti-Funnel"</h2>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden md:block"></div>

            <div className="space-y-12">
              {/* TOFU */}
              <div className="relative md:pl-24">
                <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-full bg-black border-4 border-blue-500 items-center justify-center z-10">
                  <span className="font-bold text-blue-500">TOFU</span>
                </div>
                <div className="bg-card border border-white/10 p-8 rounded-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">Awareness: The Pattern Interrupt</h3>
                    <span className="text-xs font-mono bg-blue-500/20 text-blue-500 px-2 py-1 rounded">Social Media (Shorts/Reels)</span>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Content that mocks the "Guru Lifestyle". Showing the boring, painful reality of trading.
                    <br />
                    <strong>Key Asset:</strong> "Stop Acting Like An Amateur" video ads.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs border border-white/10 px-2 py-1 rounded text-gray-500">TikTok</span>
                    <span className="text-xs border border-white/10 px-2 py-1 rounded text-gray-500">IG Reels</span>
                    <span className="text-xs border border-white/10 px-2 py-1 rounded text-gray-500">YouTube Shorts</span>
                  </div>
                </div>
              </div>

              {/* MOFU */}
              <div className="relative md:pl-24">
                <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-full bg-black border-4 border-purple-500 items-center justify-center z-10">
                  <span className="font-bold text-purple-500">MOFU</span>
                </div>
                <div className="bg-card border border-white/10 p-8 rounded-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">Consideration: The Value Bomb</h3>
                    <span className="text-xs font-mono bg-purple-500/20 text-purple-500 px-2 py-1 rounded">Long Form Content</span>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Deep-dive breakdowns of market mechanics. Proving expertise without asking for a sale.
                    <br />
                    <strong>Key Asset:</strong> "Why your Stop Loss is always hunted" (Educational Video).
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs border border-white/10 px-2 py-1 rounded text-gray-500">YouTube</span>
                    <span className="text-xs border border-white/10 px-2 py-1 rounded text-gray-500">Newsletter</span>
                    <span className="text-xs border border-white/10 px-2 py-1 rounded text-gray-500">Free Discord</span>
                  </div>
                </div>
              </div>

              {/* BOFU */}
              <div className="relative md:pl-24">
                <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-full bg-black border-4 border-green-500 items-center justify-center z-10">
                  <span className="font-bold text-green-500">BOFU</span>
                </div>
                <div className="bg-card border border-white/10 p-8 rounded-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">Conversion: The Application</h3>
                    <span className="text-xs font-mono bg-green-500/20 text-green-500 px-2 py-1 rounded">Direct Offer</span>
                  </div>
                  <p className="text-gray-400 mb-4">
                    High-ticket framing. "Apply to join". Scarcity based on cohort size, not fake timers.
                    <br />
                    <strong>Key Asset:</strong> The Academy Landing Page (Mindset Revolution).
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs border border-white/10 px-2 py-1 rounded text-gray-500">Retargeting Ads</span>
                    <span className="text-xs border border-white/10 px-2 py-1 rounded text-gray-500">Email Sequence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 90-Day Attack Plan */}
      <section className="py-20 border-b border-white/10 bg-black/50">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded bg-red-500/10 flex items-center justify-center text-red-500">
              <Zap className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-white">90-Day Attack Plan</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative p-8 border-l-2 border-white/10 hover:border-primary transition-colors">
              <div className="absolute -left-[9px] top-8 w-4 h-4 rounded-full bg-black border-2 border-white/20"></div>
              <div className="text-xs font-mono text-gray-500 mb-2">MONTH 1</div>
              <h3 className="text-xl font-bold text-white mb-4">Infiltration</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>• Launch "Stop Acting Like An Amateur" video campaign (TikTok/Reels)</li>
                <li>• Seed "Horror Stories" content in Reddit/Discord communities</li>
                <li>• Release free "Psychology Audit" tool to capture leads</li>
              </ul>
            </div>
            <div className="relative p-8 border-l-2 border-white/10 hover:border-primary transition-colors">
              <div className="absolute -left-[9px] top-8 w-4 h-4 rounded-full bg-black border-2 border-white/20"></div>
              <div className="text-xs font-mono text-gray-500 mb-2">MONTH 2</div>
              <h3 className="text-xl font-bold text-white mb-4">Indoctrination</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>• <strong>Email Sequence:</strong> "The 7-Day Mindset Reset" (Automated Nurturing)</li>
                <li>• Retarget video viewers with "Deep Dive" educational content</li>
                <li>• Host weekly "Live Trading Psychology" sessions (No charts, just mindset)</li>
                <li>• Open applications for "Alpha Cohort" (Scarcity play)</li>
              </ul>
            </div>
            <div className="relative p-8 border-l-2 border-white/10 hover:border-primary transition-colors">
              <div className="absolute -left-[9px] top-8 w-4 h-4 rounded-full bg-black border-2 border-white/20"></div>
              <div className="text-xs font-mono text-gray-500 mb-2">MONTH 3</div>
              <h3 className="text-xl font-bold text-white mb-4">Monetization</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>• Close "Alpha Cohort" and launch paid membership</li>
                <li>• Activate affiliate program for successful students only ("The 1%")</li>
                <li>• Scale ad spend on winning creative variants</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment & Allocation */}
      <section className="py-20 border-b border-white/10 bg-black/30">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded bg-yellow-500/10 flex items-center justify-center text-yellow-500">
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
            <div className="p-8 rounded-2xl bg-blue-500/5 border border-blue-500/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-blue-400">Recommended Ad Spend</h3>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-xs font-mono text-blue-400">VARIABLE COST</span>
              </div>
              <div className="text-4xl font-bold text-white mb-2">£3k - £5k <span className="text-lg font-normal text-gray-500">/ month</span></div>
              <p className="text-sm text-gray-400 mb-6">Paid directly to ad platforms (Meta/Google)</p>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm border-b border-blue-500/10 pb-2">
                  <span className="text-gray-400">Testing Phase (Month 1)</span>
                  <span className="text-white">£3,000</span>
                </div>
                <div className="flex justify-between text-sm border-b border-blue-500/10 pb-2">
                  <span className="text-gray-400">Optimization (Month 2)</span>
                  <span className="text-white">£4,000</span>
                </div>
                <div className="flex justify-between text-sm border-b border-blue-500/10 pb-2">
                  <span className="text-gray-400">Scaling (Month 3)</span>
                  <span className="text-white">£5,000+</span>
                </div>
              </div>
              <div className="mt-6 p-3 bg-blue-500/10 rounded border border-blue-500/20 text-xs text-blue-300">
                <strong>Note:</strong> Ad budget is flexible and will be adjusted based on ROAS (Return on Ad Spend) performance.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unit Economics */}
      <section className="py-20 border-b border-white/10">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded bg-green-500/10 flex items-center justify-center text-green-500">
              <BarChart3 className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-white">Unit Economics (Projections)</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-card border border-white/10">
              <div className="text-sm text-gray-500 mb-1">Target CAC</div>
              <div className="text-3xl font-bold text-white">$45.00</div>
              <div className="text-xs text-green-500 mt-2">Based on organic reach</div>
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
      <footer className="py-12 border-t border-white/10 bg-black">
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
  );
}
