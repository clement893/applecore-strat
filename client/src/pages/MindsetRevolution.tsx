import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Target, Lightbulb, Users, Zap, Layout, MessageSquare } from "lucide-react";

export default function MindsetRevolution() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer group">
                <img src="/logo.png" alt="Applecore" className="h-6 w-auto brightness-0 invert transition-transform group-hover:scale-105" />
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-1">
              <Link href="/">
                <span className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-white transition-colors cursor-pointer">
                  1. Brand Guide
                </span>
              </Link>
              <Link href="/mindset-revolution">
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary/20 text-primary border border-primary/20 transition-colors cursor-pointer">
                  2. Ad Concept
                </span>
              </Link>
              <Link href="/digital-strategy">
                <span className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-white transition-colors cursor-pointer">
                  3. Digital Strategy
                </span>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-mono uppercase tracking-wider border border-primary/20">
              Internal Strategy Doc
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Strategy Section */}
      <section className="pt-32 pb-20 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <h4 className="text-primary font-mono mb-4 tracking-widest uppercase text-sm">Campaign Concept v1.0</h4>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white">
              Mindset Revolution
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              A strategic pivot from "Technical Analysis" to "Psychological Mastery". 
              We aren't selling another chart indicator. We are selling the transformation from Gambler to Professional.
            </p>
          </div>
        </div>
      </section>

      {/* The Insight */}
      <section className="py-20 border-b border-white/10 bg-black/50">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="sticky top-32">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-white">The Core Insight</h2>
                <p className="text-muted-foreground">
                  Why the current market messaging is failing and where the opportunity lies.
                </p>
              </div>
            </div>
            <div className="md:col-span-8 space-y-8">
              <div className="p-8 rounded-2xl bg-card border border-white/5 hover:border-white/10 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">The "Indicator Fatigue"</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our target audience has bought every course and indicator. They know technical analysis, yet they still lose money. They are frustrated not because they lack knowledge, but because they lack discipline.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-card border border-white/5 hover:border-white/10 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">The Emotional Gap</h3>
                <p className="text-gray-400 leading-relaxed">
                  Competitors sell "Easy Money" and "Lifestyle". This creates a dissonance when the user inevitably faces a loss. By acknowledging the pain and difficulty of trading, we build immediate trust and authority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Strategy */}
      <section className="py-20 border-b border-white/10">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="sticky top-32">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-white">Strategic Pivot</h2>
                <p className="text-muted-foreground">
                  How we position Applecore differently from the noise.
                </p>
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/10">
                  <span className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2 block">The Old Way</span>
                  <h4 className="text-lg font-bold text-white mb-2">"Get Rich Quick"</h4>
                  <p className="text-sm text-gray-500">Focus on lifestyle, cars, and easy wins. Attracts low-quality leads who churn quickly.</p>
                </div>
                <div className="p-6 rounded-xl bg-primary/5 border border-primary/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">The Applecore Way</span>
                  <h4 className="text-lg font-bold text-white mb-2">"Master Yourself"</h4>
                  <p className="text-sm text-gray-500">Focus on discipline, psychology, and professional execution. Attracts serious students.</p>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold text-white mb-6">Key Messaging Pillars</h3>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0 mt-1">1</div>
                    <div>
                      <h5 className="font-bold text-white">Radical Honesty</h5>
                      <p className="text-sm text-gray-400">We tell them what they need to hear, not what they want to hear.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0 mt-1">2</div>
                    <div>
                      <h5 className="font-bold text-white">Extreme Prejudice</h5>
                      <p className="text-sm text-gray-400">Trading without emotion. Executing the plan regardless of fear or greed.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0 mt-1">3</div>
                    <div>
                      <h5 className="font-bold text-white">Identity Shift</h5>
                      <p className="text-sm text-gray-400">Moving from "I am a gambler" to "I am a risk manager".</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Execution Showcase */}
      <section className="py-20 bg-black/50">
        <div className="container">
          <div className="mb-16 max-w-3xl">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6">
              <Layout className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">Creative Execution</h2>
            <p className="text-muted-foreground text-lg">
              Visualizing the concept across different touchpoints. These assets are designed to stop the scroll by breaking the pattern of "luxury lifestyle" ads.
            </p>
          </div>

          {/* Asset 1: The Manifesto */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">01. The Manifesto (Brand Awareness)</h3>
              <span className="text-xs text-muted-foreground border border-white/10 px-2 py-1 rounded">Format: Web / Print</span>
            </div>
            <div className="p-8 bg-white text-black rounded-xl overflow-hidden relative">
              <div className="max-w-2xl mx-auto text-center py-12">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
                  TRADE WITH
                  <br />
                  <span className="text-primary bg-black px-4 transform -skew-x-12 inline-block mt-2">EXTREME PREJUDICE</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We don't guess. We don't hope. We execute.
                  <br />
                  Our methodology strips away the noise and leaves only the raw truth of the market.
                </p>
              </div>
              <div className="absolute bottom-4 right-4 text-xs text-gray-400 font-mono">
                CAMPAIGN_ASSET_REF_01
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Why it works: High contrast, aggressive typography, and a slogan that implies military-grade discipline.
            </p>
          </div>

          {/* Asset 2: Social Proof / Reality Check */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Instagram Story */}
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">02. Instagram Story</h3>
                <span className="text-xs text-muted-foreground border border-white/10 px-2 py-1 rounded">Format: 9:16</span>
              </div>
              <div className="aspect-[9/16] bg-black rounded-xl border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('/images/chart-bg.png')] opacity-20 bg-cover bg-center"></div>
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono text-primary border border-primary/50 px-2 py-1 rounded">NEW SIGNAL</span>
                    <img src="/logo.png" className="h-4 w-auto brightness-0 invert" />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-3xl font-bold text-white leading-none">STOP<br/>GUESSING.</h4>
                    <p className="text-sm text-gray-300">The market leaves clues. Are you reading them?</p>
                    <div className="bg-white text-black text-center py-3 rounded-full font-bold text-sm mt-4">
                      Swipe Up to Learn
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Why it works: High contrast, direct command ("Stop Guessing"), and clear CTA.
              </p>
            </div>

            {/* TikTok/Reel Cover */}
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">03. TikTok / Reel</h3>
                <span className="text-xs text-muted-foreground border border-white/10 px-2 py-1 rounded">Format: 9:16</span>
              </div>
              <div className="aspect-[9/16] bg-[#121212] rounded-xl border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/20 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded mb-4 uppercase tracking-wider">Controversial Truth</div>
                  <h4 className="text-2xl font-bold text-white mb-2">WHY YOUR<br/>INDICATORS<br/>ARE LYING</h4>
                  <div className="w-12 h-1 bg-primary rounded-full mt-4"></div>
                </div>
                <div className="absolute bottom-6 left-0 w-full text-center">
                  <p className="text-xs text-gray-500">@applecore_trading</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Why it works: "Controversial Truth" hook creates curiosity gap.
              </p>
            </div>

            {/* LinkedIn Carousel Slide */}
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">04. LinkedIn Carousel</h3>
                <span className="text-xs text-muted-foreground border border-white/10 px-2 py-1 rounded">Format: 1:1</span>
              </div>
              <div className="aspect-square bg-[#F4EFEC] rounded-xl border border-black/10 relative overflow-hidden group text-black">
                <div className="absolute inset-0 flex flex-col p-8">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-8 h-8 bg-black rounded-full"></div>
                    <span className="text-4xl font-serif opacity-20">01</span>
                  </div>
                  <h4 className="text-3xl font-bold mb-4 leading-tight">The Psychology of the "Dip"</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Most traders panic when they see red. Smart money sees a discount. Here is how to tell the difference...
                  </p>
                  <div className="mt-auto flex justify-between items-center border-t border-black/10 pt-4">
                    <span className="text-xs font-bold">APPLECORE</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Why it works: Educational value upfront establishes authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A/B Testing Strategy */}
      <section className="py-20 border-b border-white/10">
        <div className="container">
          <div className="mb-16 max-w-3xl">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
              <Users className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">A/B Testing Strategy</h2>
            <p className="text-muted-foreground text-lg">
              We will test 6 distinct messaging angles to identify which psychological trigger resonates most with our audience. Each variant targets a specific pain point or aspiration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Variant A */}
            <div className="bg-card border border-white/10 rounded-xl overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="p-6 border-b border-white/5 bg-black/50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono text-primary border border-primary/20 px-2 py-1 rounded">Variant A</span>
                  <span className="text-xs text-muted-foreground">Identity Shift</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Amateur vs Millionaire</h3>
                <div className="flex gap-4 text-xs font-mono text-gray-500 mb-4">
                  <div>Focus: <span className="text-white">100%</span></div>
                  <div>Emotion: <span className="text-white">0%</span></div>
                </div>
                <p className="text-sm text-gray-400 italic">"Master the mindset that separates the pros from the gamblers."</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-black to-gray-900 flex flex-col justify-center items-center text-center min-h-[200px]">
                <div className="space-y-2">
                  <div className="text-gray-500 line-through decoration-red-500/50">Stop Acting Like An Amateur.</div>
                  <div className="text-white font-bold text-lg">Start Acting Like A Millionaire.</div>
                </div>
                <Button variant="outline" size="sm" className="mt-6 gap-2 border-white/10 hover:bg-white/5">
                  Download .PNG <Layout className="h-3 w-3" />
                </Button>
              </div>
            </div>

            {/* Variant B */}
            <div className="bg-card border border-white/10 rounded-xl overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="p-6 border-b border-white/5 bg-black/50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono text-primary border border-primary/20 px-2 py-1 rounded">Variant B</span>
                  <span className="text-xs text-muted-foreground">Professionalism</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Gambler vs Pro</h3>
                <div className="flex gap-4 text-xs font-mono text-gray-500 mb-4">
                  <div>Risk: <span className="text-white">Managed</span></div>
                  <div>Edge: <span className="text-white">Defined</span></div>
                </div>
                <p className="text-sm text-gray-400 italic">"Stop guessing. Start executing with precision."</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-black to-gray-900 flex flex-col justify-center items-center text-center min-h-[200px]">
                <div className="space-y-2">
                  <div className="text-gray-500 line-through decoration-red-500/50">Stop Trading Like A Gambler.</div>
                  <div className="text-white font-bold text-lg">Start Trading Like A Pro.</div>
                </div>
                <Button variant="outline" size="sm" className="mt-6 gap-2 border-white/10 hover:bg-white/5">
                  Download .PNG <Layout className="h-3 w-3" />
                </Button>
              </div>
            </div>

            {/* Variant C */}
            <div className="bg-card border border-white/10 rounded-xl overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="p-6 border-b border-white/5 bg-black/50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono text-primary border border-primary/20 px-2 py-1 rounded">Variant C</span>
                  <span className="text-xs text-muted-foreground">Certainty</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Guessing vs Knowing</h3>
                <div className="flex gap-4 text-xs font-mono text-gray-500 mb-4">
                  <div>Bias: <span className="text-white">Zero</span></div>
                  <div>Clarity: <span className="text-white">100%</span></div>
                </div>
                <p className="text-sm text-gray-400 italic">"See what others miss. Trade what actually happens."</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-black to-gray-900 flex flex-col justify-center items-center text-center min-h-[200px]">
                <div className="space-y-2">
                  <div className="text-gray-500 line-through decoration-red-500/50">Stop Guessing The Market.</div>
                  <div className="text-white font-bold text-lg">Start Knowing The Moves.</div>
                </div>
                <Button variant="outline" size="sm" className="mt-6 gap-2 border-white/10 hover:bg-white/5">
                  Download .PNG <Layout className="h-3 w-3" />
                </Button>
              </div>
            </div>

            {/* Variant D */}
            <div className="bg-card border border-white/10 rounded-xl overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="p-6 border-b border-white/5 bg-black/50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono text-primary border border-primary/20 px-2 py-1 rounded">Variant D</span>
                  <span className="text-xs text-muted-foreground">Predator/Prey</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Liquidity vs Hunter</h3>
                <div className="flex gap-4 text-xs font-mono text-gray-500 mb-4">
                  <div>Role: <span className="text-white">Hunter</span></div>
                  <div>Prey: <span className="text-white">Retail</span></div>
                </div>
                <p className="text-sm text-gray-400 italic">"You are either the liquidity or the one taking it."</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-black to-gray-900 flex flex-col justify-center items-center text-center min-h-[200px]">
                <div className="space-y-2">
                  <div className="text-gray-500 line-through decoration-red-500/50">Stop Being The Liquidity.</div>
                  <div className="text-white font-bold text-lg">Start Being The Hunter.</div>
                </div>
                <Button variant="outline" size="sm" className="mt-6 gap-2 border-white/10 hover:bg-white/5">
                  Download .PNG <Layout className="h-3 w-3" />
                </Button>
              </div>
            </div>

            {/* Variant E */}
            <div className="bg-card border border-white/10 rounded-xl overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="p-6 border-b border-white/5 bg-black/50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono text-primary border border-primary/20 px-2 py-1 rounded">Variant E</span>
                  <span className="text-xs text-muted-foreground">FOMO vs Patience</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Chasing vs Catching</h3>
                <div className="flex gap-4 text-xs font-mono text-gray-500 mb-4">
                  <div>FOMO: <span className="text-white">None</span></div>
                  <div>Patience: <span className="text-white">Infinite</span></div>
                </div>
                <p className="text-sm text-gray-400 italic">"The market comes to you. You don't run after it."</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-black to-gray-900 flex flex-col justify-center items-center text-center min-h-[200px]">
                <div className="space-y-2">
                  <div className="text-gray-500 line-through decoration-red-500/50">Stop Chasing Green Candles.</div>
                  <div className="text-white font-bold text-lg">Start Catching The Reversals.</div>
                </div>
                <Button variant="outline" size="sm" className="mt-6 gap-2 border-white/10 hover:bg-white/5">
                  Download .PNG <Layout className="h-3 w-3" />
                </Button>
              </div>
            </div>

            {/* Variant F */}
            <div className="bg-card border border-white/10 rounded-xl overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="p-6 border-b border-white/5 bg-black/50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono text-primary border border-primary/20 px-2 py-1 rounded">Variant F</span>
                  <span className="text-xs text-muted-foreground">Confusion vs Logic</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Chaos vs Structure</h3>
                <div className="flex gap-4 text-xs font-mono text-gray-500 mb-4">
                  <div>Noise: <span className="text-white">Filtered</span></div>
                  <div>Logic: <span className="text-white">Absolute</span></div>
                </div>
                <p className="text-sm text-gray-400 italic">"Find the order in the chaos. Trade the structure."</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-black to-gray-900 flex flex-col justify-center items-center text-center min-h-[200px]">
                <div className="space-y-2">
                  <div className="text-gray-500 line-through decoration-red-500/50">Stop Trading The Chaos.</div>
                  <div className="text-white font-bold text-lg">Start Trading The Structure.</div>
                </div>
                <Button variant="outline" size="sm" className="mt-6 gap-2 border-white/10 hover:bg-white/5">
                  Download .PNG <Layout className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Strategy Note */}
      <footer className="py-12 border-t border-white/10 bg-black">
        <div className="container">
          <div className="flex items-start gap-4 p-6 rounded-xl bg-primary/5 border border-primary/10">
            <MessageSquare className="h-6 w-6 text-primary shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-white mb-2">Conclusion</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                This campaign positions Applecore not just as an academy, but as a <strong>performance psychology center</strong> for traders. By owning the "Mindset" niche, we separate ourselves from the crowded "Technical Analysis" market and attract higher LTV customers who are committed to long-term growth.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
