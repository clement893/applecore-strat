import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Target, Lightbulb, Users, Zap, Layout, MessageSquare, Smartphone, Monitor, MousePointer2, Download } from "lucide-react";

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

      {/* A/B Testing Strategy - The 6 Hooks */}
      <section className="py-20 border-b border-white/10 bg-black/30">
        <div className="container">
          <div className="mb-16 max-w-3xl">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">A/B Testing Strategy</h2>
            <p className="text-muted-foreground text-lg">
              We will test 6 distinct messaging angles to identify which psychological trigger resonates most with our audience. Each variant targets a specific pain point or aspiration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Variant A: Identity Shift */}
            <div className="p-8 rounded-xl bg-card border border-white/5 hover:border-primary/50 transition-all group flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">VARIANT A</div>
                <div className="text-xs font-mono text-muted-foreground">IDENTITY SHIFT</div>
              </div>
              
              <div className="mb-6 space-y-2">
                <div className="flex justify-between text-xs text-zinc-500 font-mono">
                  <span>Focus: 100%</span>
                  <span>Emotion: 0%</span>
                </div>
                <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-full"></div>
                </div>
              </div>

              <blockquote className="text-sm text-zinc-400 italic mb-6 border-l-2 border-zinc-700 pl-3">
                "Master the mindset that separates the pros from the gamblers."
              </blockquote>

              <div className="space-y-2 mb-8 flex-grow">
                <p className="text-lg font-bold text-zinc-500 line-through decoration-red-500/50 decoration-2">
                  Stop Acting Like An Amateur.
                </p>
                <p className="text-xl font-black text-white group-hover:text-primary transition-colors">
                  Start Acting Like A Millionaire.
                </p>
              </div>


            </div>

            {/* Variant B: Professionalism */}
            <div className="p-8 rounded-xl bg-card border border-white/5 hover:border-primary/50 transition-all group flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">VARIANT B</div>
                <div className="text-xs font-mono text-muted-foreground">PROFESSIONALISM</div>
              </div>
              
              <div className="mb-6 space-y-2">
                <div className="flex justify-between text-xs text-zinc-500 font-mono">
                  <span>Risk: Managed</span>
                  <span>Edge: Defined</span>
                </div>
                <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[80%]"></div>
                </div>
              </div>

              <blockquote className="text-sm text-zinc-400 italic mb-6 border-l-2 border-zinc-700 pl-3">
                "Stop guessing. Start executing with precision."
              </blockquote>

              <div className="space-y-2 mb-8 flex-grow">
                <p className="text-lg font-bold text-zinc-500 line-through decoration-red-500/50 decoration-2">
                  Stop Trading Like A Gambler.
                </p>
                <p className="text-xl font-black text-white group-hover:text-primary transition-colors">
                  Start Trading Like A Pro.
                </p>
              </div>


            </div>

            {/* Variant C: Certainty */}
            <div className="p-8 rounded-xl bg-card border border-white/5 hover:border-primary/50 transition-all group flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">VARIANT C</div>
                <div className="text-xs font-mono text-muted-foreground">CERTAINTY</div>
              </div>
              
              <div className="mb-6 space-y-2">
                <div className="flex justify-between text-xs text-zinc-500 font-mono">
                  <span>Bias: Zero</span>
                  <span>Clarity: 100%</span>
                </div>
                <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[90%]"></div>
                </div>
              </div>

              <blockquote className="text-sm text-zinc-400 italic mb-6 border-l-2 border-zinc-700 pl-3">
                "See what others miss. Trade what actually happens."
              </blockquote>

              <div className="space-y-2 mb-8 flex-grow">
                <p className="text-lg font-bold text-zinc-500 line-through decoration-red-500/50 decoration-2">
                  Stop Guessing The Market.
                </p>
                <p className="text-xl font-black text-white group-hover:text-primary transition-colors">
                  Start Knowing The Moves.
                </p>
              </div>


            </div>

            {/* Variant D: Predator/Prey */}
            <div className="p-8 rounded-xl bg-card border border-white/5 hover:border-primary/50 transition-all group flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">VARIANT D</div>
                <div className="text-xs font-mono text-muted-foreground">PREDATOR/PREY</div>
              </div>
              
              <div className="mb-6 space-y-2">
                <div className="flex justify-between text-xs text-zinc-500 font-mono">
                  <span>Role: Hunter</span>
                  <span>Prey: Retail</span>
                </div>
                <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[70%]"></div>
                </div>
              </div>

              <blockquote className="text-sm text-zinc-400 italic mb-6 border-l-2 border-zinc-700 pl-3">
                "You are either the liquidity or the one taking it."
              </blockquote>

              <div className="space-y-2 mb-8 flex-grow">
                <p className="text-lg font-bold text-zinc-500 line-through decoration-red-500/50 decoration-2">
                  Stop Being The Liquidity.
                </p>
                <p className="text-xl font-black text-white group-hover:text-primary transition-colors">
                  Start Being The Hunter.
                </p>
              </div>


            </div>

            {/* Variant E: FOMO vs Patience */}
            <div className="p-8 rounded-xl bg-card border border-white/5 hover:border-primary/50 transition-all group flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">VARIANT E</div>
                <div className="text-xs font-mono text-muted-foreground">FOMO VS PATIENCE</div>
              </div>
              
              <div className="mb-6 space-y-2">
                <div className="flex justify-between text-xs text-zinc-500 font-mono">
                  <span>FOMO: None</span>
                  <span>Patience: Infinite</span>
                </div>
                <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[95%]"></div>
                </div>
              </div>

              <blockquote className="text-sm text-zinc-400 italic mb-6 border-l-2 border-zinc-700 pl-3">
                "The market comes to you. You don't run after it."
              </blockquote>

              <div className="space-y-2 mb-8 flex-grow">
                <p className="text-lg font-bold text-zinc-500 line-through decoration-red-500/50 decoration-2">
                  Stop Chasing Green Candles.
                </p>
                <p className="text-xl font-black text-white group-hover:text-primary transition-colors">
                  Start Catching The Reversals.
                </p>
              </div>


            </div>

            {/* Variant F: Confusion vs Logic */}
            <div className="p-8 rounded-xl bg-card border border-white/5 hover:border-primary/50 transition-all group flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">VARIANT F</div>
                <div className="text-xs font-mono text-muted-foreground">CONFUSION VS LOGIC</div>
              </div>
              
              <div className="mb-6 space-y-2">
                <div className="flex justify-between text-xs text-zinc-500 font-mono">
                  <span>Noise: Filtered</span>
                  <span>Logic: Absolute</span>
                </div>
                <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[85%]"></div>
                </div>
              </div>

              <blockquote className="text-sm text-zinc-400 italic mb-6 border-l-2 border-zinc-700 pl-3">
                "Find the order in the chaos. Trade the structure."
              </blockquote>

              <div className="space-y-2 mb-8 flex-grow">
                <p className="text-lg font-bold text-zinc-500 line-through decoration-red-500/50 decoration-2">
                  Stop Trading The Chaos.
                </p>
                <p className="text-xl font-black text-white group-hover:text-primary transition-colors">
                  Start Trading The Structure.
                </p>
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
          <div className="mb-24">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">01. The Manifesto (Brand Awareness)</h3>
              <span className="text-xs text-muted-foreground border border-white/10 px-2 py-1 rounded">Format: Web / Print</span>
            </div>
            <div className="p-12 bg-white text-black rounded-xl overflow-hidden relative shadow-[0_0_50px_rgba(255,255,255,0.1)]">
              <div className="max-w-4xl mx-auto text-center py-12">
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
                  TRADE WITH
                  <br />
                  <span className="text-primary bg-black px-6 transform -skew-x-12 inline-block mt-4">EXTREME PREJUDICE</span>
                </h2>
                <p className="text-2xl text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto">
                  We don't guess. We don't hope. We execute.
                  <br />
                  Our methodology strips away the noise and leaves only the raw truth of the market.
                </p>
              </div>
              <div className="absolute bottom-6 right-6 text-sm text-gray-400 font-mono">
                CAMPAIGN_ASSET_REF_01
              </div>
            </div>
            <p className="mt-6 text-base text-muted-foreground italic">
              Why it works: High contrast, aggressive typography, and a slogan that implies military-grade discipline.
            </p>
          </div>

          {/* Asset 2: Social Proof / Reality Check - ENLARGED & PROMINENT */}
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            {/* Instagram Story - LARGE */}
            <div className="group">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">02. Instagram Story</h3>
                <span className="text-sm text-muted-foreground border border-white/10 px-3 py-1 rounded flex items-center gap-2">
                  <Smartphone className="w-4 h-4" /> 9:16
                </span>
              </div>
              <div className="aspect-[9/16] bg-zinc-900 rounded-2xl border border-white/10 p-8 flex flex-col relative overflow-hidden group-hover:border-primary/50 transition-all duration-500 shadow-2xl">
                {/* Mockup Content */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50"></div>
                
                {/* Story UI Top */}
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <div className="flex gap-1 w-full">
                    <div className="h-1 flex-1 bg-white rounded-full"></div>
                    <div className="h-1 flex-1 bg-white/30 rounded-full"></div>
                  </div>
                </div>

                <div className="relative z-10 flex-1 flex flex-col justify-center text-center">
                  <h4 className="text-6xl font-black text-white uppercase leading-[0.9] mb-6 tracking-tighter">
                    Stop<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">Guessing</span>
                  </h4>
                  <div className="w-20 h-2 bg-primary mx-auto my-8"></div>
                  <p className="text-xl text-gray-300 mb-12 font-medium leading-tight">
                    The market doesn't care about your feelings.
                    <br/><br/>
                    It only respects <span className="text-white font-bold underline decoration-primary decoration-4 underline-offset-4">execution</span>.
                  </p>
                  
                  <div className="mt-auto">
                    <div className="bg-white text-black font-bold py-4 px-8 rounded-full text-lg uppercase tracking-wider mx-auto inline-block hover:scale-105 transition-transform cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                      Get The System
                    </div>
                    <div className="mt-4 text-white/50 text-sm font-mono animate-pulse">
                      Swipe Up
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-base text-gray-500">
                <strong>Pattern Interrupt:</strong> Uses negative space and aggressive typography to stop the scroll.
              </p>
            </div>

            {/* TikTok / Reel - LARGE */}
            <div className="group">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">03. TikTok / Reel</h3>
                <span className="text-sm text-muted-foreground border border-white/10 px-3 py-1 rounded flex items-center gap-2">
                  <Smartphone className="w-4 h-4" /> 9:16 Video
                </span>
              </div>
              <div className="aspect-[9/16] bg-zinc-900 rounded-2xl border border-white/10 relative overflow-hidden group-hover:border-primary/50 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-0 flex flex-col">
                  {/* Split Screen Effect */}
                  <div className="h-1/2 bg-red-900/10 flex items-center justify-center border-b border-white/10 relative">
                    <div className="absolute inset-0 bg-[url('/images/amateur-trader.jpg')] bg-cover bg-center opacity-20 grayscale mix-blend-overlay"></div>
                    <div className="text-center relative z-10">
                      <span className="text-red-500 font-mono font-bold text-2xl bg-black/50 px-4 py-2 rounded backdrop-blur-sm border border-red-500/30">THE AMATEUR</span>
                      <p className="text-white/60 text-sm mt-2">Panic Selling</p>
                    </div>
                  </div>
                  <div className="h-1/2 bg-green-900/10 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-[url('/images/pro-trader.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                    <div className="text-center relative z-10">
                      <span className="text-primary font-mono font-bold text-2xl bg-black/50 px-4 py-2 rounded backdrop-blur-sm border border-primary/30">THE PRO</span>
                      <p className="text-white/60 text-sm mt-2">Systematic Execution</p>
                    </div>
                  </div>
                  
                  {/* Overlay Text */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-black/90 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20 shadow-2xl transform rotate-[-5deg]">
                      <span className="text-white font-black text-3xl italic">WHICH ONE<br/>ARE YOU?</span>
                    </div>
                  </div>

                  {/* TikTok UI Right */}
                  <div className="absolute right-4 bottom-20 flex flex-col gap-6 items-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center"><div className="w-6 h-6 bg-white rounded-full"></div></div>
                    <div className="flex flex-col items-center gap-1"><div className="w-8 h-8 text-white"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></div><span className="text-white text-xs font-bold">24K</span></div>
                    <div className="flex flex-col items-center gap-1"><div className="w-8 h-8 text-white"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></div><span className="text-white text-xs font-bold">842</span></div>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-base text-gray-500">
                <strong>Identity Challenge:</strong> A split-screen comparison that forces the user to self-select.
              </p>
            </div>
          </div>

          {/* LinkedIn Carousel - FULL WIDTH */}
          <div className="mb-24">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">04. LinkedIn Carousel</h3>
              <span className="text-sm text-muted-foreground border border-white/10 px-3 py-1 rounded flex items-center gap-2">
                <Monitor className="w-4 h-4" /> 4:5 Slide
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-8 bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
              {/* Slide 1 */}
              <div className="aspect-[4/5] bg-white text-black rounded-xl border border-white/10 p-10 flex flex-col relative overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-300">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-lg mb-8 font-bold text-xl">01</div>
                  <h4 className="text-5xl font-bold mb-6 leading-tight tracking-tight">
                    3 Signs You Are <br/>
                    <span className="bg-black text-white px-3 py-1 inline-block transform -rotate-1 mt-2">Over-Leveraged</span>
                  </h4>
                  <ul className="space-y-6 text-lg font-medium text-gray-600 mt-8">
                    <li className="flex gap-4 items-center">
                      <span className="text-red-500 text-2xl font-bold">✗</span> You check your phone every 2 mins
                    </li>
                    <li className="flex gap-4 items-center">
                      <span className="text-red-500 text-2xl font-bold">✗</span> You can't sleep at night
                    </li>
                    <li className="flex gap-4 items-center">
                      <span className="text-red-500 text-2xl font-bold">✗</span> You pray for a reversal
                    </li>
                  </ul>
                </div>
                <div className="flex justify-between items-end border-t border-gray-200 pt-6 mt-8">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-black rounded-full"></div>
                    <span className="font-bold text-sm">Applecore Strategy</span>
                  </div>
                  <span className="text-gray-400 text-sm font-mono">Slide 1/5</span>
                </div>
              </div>

              {/* Slide 2 (Solution) */}
              <div className="aspect-[4/5] bg-black text-white rounded-xl border border-white/10 p-10 flex flex-col relative overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="flex-1 relative z-10">
                  <div className="w-12 h-12 bg-primary text-black flex items-center justify-center rounded-lg mb-8 font-bold text-xl">02</div>
                  <h4 className="text-4xl font-bold mb-6 leading-tight">
                    The Fix: <span className="text-primary">Position Sizing</span>
                  </h4>
                  <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    Professional traders don't focus on how much they can <span className="text-white font-bold">make</span>.
                    <br/><br/>
                    They focus on how much they can <span className="text-white font-bold">lose</span>.
                  </p>
                  
                  <div className="bg-zinc-900 p-6 rounded-lg border border-white/10">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Risk per trade</span>
                      <span className="text-primary font-mono">1%</span>
                    </div>
                    <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-primary w-[1%] h-full"></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">
                      If you risk 1%, you can be wrong 10 times in a row and still be in the game.
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-end border-t border-white/10 pt-6 mt-8 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                    <span className="font-bold text-sm">Applecore Strategy</span>
                  </div>
                  <span className="text-gray-400 text-sm font-mono">Slide 2/5</span>
                </div>
              </div>
            </div>
            <p className="mt-6 text-base text-gray-500">
              <strong>Value First:</strong> Delivers immediate diagnostic value before pitching the solution.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to deploy this campaign?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/digital-strategy">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 h-14 px-8 text-lg rounded-full">
                View Execution Plan <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-white/10 hover:bg-white/5">
                Back to Brand Guide
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
