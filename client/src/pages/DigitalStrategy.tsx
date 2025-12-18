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
