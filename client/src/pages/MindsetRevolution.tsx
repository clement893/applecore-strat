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

      {/* 1. The Insight */}
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

      {/* 2. THE MANIFESTO (BIG IDEA) */}
      <section className="py-32 border-b border-white/10 bg-white text-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-black text-white text-xs font-bold tracking-widest uppercase mb-8">
              The Big Idea
            </span>
            
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-12 uppercase">
              Stop Acting Like <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">An Amateur.</span>
              <br/>
              Start Acting Like <br/>
              <span className="text-primary bg-black px-4 inline-block transform -skew-x-6 mt-2">A Millionaire.</span>
            </h2>

            <div className="max-w-2xl mx-auto">
              <p className="text-2xl md:text-3xl font-medium leading-tight mb-8">
                "Trading isn't about predicting the future. It's about controlling yourself when the future is uncertain."
              </p>
              <div className="h-1 w-20 bg-black mx-auto mb-8"></div>
              <p className="text-gray-600 text-lg">
                This campaign challenges the user's identity. It forces them to choose: are you a gambler chasing a high, or a professional building an empire?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Creative Execution Showcase */}
      <section className="py-20 bg-black/50">
        <div className="container">
          <div className="mb-16 max-w-3xl">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6">
              <Layout className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">Visual Executions</h2>
            <p className="text-muted-foreground text-lg">
              Translating the manifesto into high-converting ad formats.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 02. Instagram Story */}
            <div className="group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">02. Instagram Story</h3>
                <span className="text-xs text-muted-foreground border border-white/10 px-2 py-1 rounded">9:16</span>
              </div>
              <div className="aspect-[9/16] bg-zinc-900 rounded-xl border border-white/10 p-6 flex flex-col relative overflow-hidden group-hover:border-primary/50 transition-colors">
                {/* Mockup Content */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50"></div>
                <div className="relative z-10 flex-1 flex flex-col justify-center text-center">
                  <h4 className="text-4xl font-black text-white uppercase leading-none mb-2">
                    Stop<br/>Guessing
                  </h4>
                  <div className="w-12 h-1 bg-primary mx-auto my-4"></div>
                  <p className="text-sm text-gray-300 mb-6">
                    The market doesn't care about your feelings.
                  </p>
                  <div className="bg-white text-black font-bold py-3 px-6 rounded-full text-sm uppercase tracking-wider mx-auto">
                    Get The System
                  </div>
                </div>
                {/* UI Elements */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-800"></div>
                  <div className="text-xs text-white font-bold mt-1">Applecore</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                <strong>Pattern Interrupt:</strong> Uses negative space and aggressive typography to stop the scroll.
              </p>
            </div>

            {/* 03. TikTok / Reel */}
            <div className="group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">03. TikTok / Reel</h3>
                <span className="text-xs text-muted-foreground border border-white/10 px-2 py-1 rounded">9:16 Video</span>
              </div>
              <div className="aspect-[9/16] bg-zinc-900 rounded-xl border border-white/10 relative overflow-hidden group-hover:border-primary/50 transition-colors">
                <div className="absolute inset-0 flex flex-col">
                  {/* Split Screen Effect */}
                  <div className="h-1/2 bg-red-900/20 flex items-center justify-center border-b border-white/10">
                    <span className="text-red-500 font-mono font-bold">THE AMATEUR</span>
                  </div>
                  <div className="h-1/2 bg-green-900/20 flex items-center justify-center">
                    <span className="text-primary font-mono font-bold">THE PRO</span>
                  </div>
                  {/* Overlay Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/80 backdrop-blur px-6 py-3 rounded-xl border border-white/20">
                      <span className="text-white font-bold text-xl">WHICH ONE ARE YOU?</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                <strong>Identity Challenge:</strong> A split-screen comparison that forces the user to self-select.
              </p>
            </div>

            {/* 04. LinkedIn Carousel */}
            <div className="group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">04. LinkedIn Carousel</h3>
                <span className="text-xs text-muted-foreground border border-white/10 px-2 py-1 rounded">4:5 Slide</span>
              </div>
              <div className="aspect-[4/5] bg-white text-black rounded-xl border border-white/10 p-8 flex flex-col relative overflow-hidden group-hover:border-primary/50 transition-colors">
                <div className="flex-1">
                  <h4 className="text-3xl font-bold mb-4 leading-tight">
                    3 Signs You Are <br/>
                    <span className="bg-black text-white px-2">Over-Leveraged</span>
                  </h4>
                  <ul className="space-y-3 text-sm font-medium text-gray-600">
                    <li className="flex gap-2">
                      <span className="text-red-500">✗</span> You check your phone every 2 mins
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-500">✗</span> You can't sleep at night
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-500">✗</span> You pray for a reversal
                    </li>
                  </ul>
                </div>
                <div className="flex justify-between items-end border-t border-gray-200 pt-4">
                  <span className="font-bold text-sm">Applecore</span>
                  <span className="text-gray-400 text-xs">Slide 1/5</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                <strong>Value First:</strong> Delivers immediate diagnostic value before pitching the solution.
              </p>
            </div>
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
