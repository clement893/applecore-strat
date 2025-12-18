import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function MindsetRevolution() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <img src="/images/logo.png" alt="Applecore" className="h-6 w-auto brightness-0 invert transition-transform group-hover:scale-105" />
            </div>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/">
              <span className="text-sm font-medium text-muted-foreground hover:text-primary cursor-pointer transition-colors">Brand Book</span>
            </Link>
            <Button className="bg-primary text-black hover:bg-primary/90 font-bold rounded-full">
              Join Academy
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-background to-background"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-wider text-primary">The Applecore Philosophy</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-none">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 blur-[2px] transform scale-95 opacity-50 absolute inset-0 select-none" aria-hidden="true">
              MINDSET
              <br />
              REVOLUTION
            </span>
            <span className="relative block bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
              MINDSET
              <br />
              REVOLUTION
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Trading isn't about charts. It's about <span className="text-white font-bold">psychology</span>.
            <br />
            Stop fighting the market. Start mastering yourself.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold rounded-full px-8 h-14 text-lg">
              Start The Transformation
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/5 rounded-full px-8 h-14 text-lg">
              Read The Manifesto
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest">Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* The Problem: Amateur vs Pro */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Most traders are
                <br />
                <span className="text-secondary line-through decoration-primary decoration-4">Gamblers</span>.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                They chase green candles. They panic sell red ones. They look for a "magic indicator" that doesn't exist.
                This is the <span className="text-white font-bold">Amateur Cycle</span>. And it's designed to make you lose.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </div>
                  <div>
                    <div className="font-bold text-white">Emotional Trading</div>
                    <div className="text-sm text-muted-foreground">Reacting to price instead of structure</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </div>
                  <div>
                    <div className="font-bold text-white">FOMO Entries</div>
                    <div className="text-sm text-muted-foreground">Buying the top because "it's flying"</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-primary/20 blur-[100px] rounded-full"></div>
              <div className="relative bg-card border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
                <div className="space-y-8">
                  <div className="flex justify-between items-end border-b border-white/10 pb-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Account Balance</div>
                      <div className="text-3xl font-mono font-bold text-red-500">-£4,250.00</div>
                    </div>
                    <div className="text-red-500 text-sm font-mono">▼ 45%</div>
                  </div>
                  
                  {/* Chaos Chart */}
                  <div className="h-48 flex items-end gap-1 opacity-50">
                    {[40, 60, 30, 80, 20, 90, 10, 50, 20, 10].map((h, i) => (
                      <div key={i} className="flex-1 bg-red-500/50 rounded-t-sm" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>

                  <div className="text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-500 text-xs font-bold uppercase tracking-wider">
                      The Amateur Reality
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution: Extreme Prejudice */}
      <section className="py-32 bg-white text-black relative overflow-hidden">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-20">
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

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Zero Bias",
                desc: "We don't care if the market goes up or down. We only care about being on the right side of the move.",
                icon: "🎯"
              },
              {
                title: "Zero Emotion",
                desc: "Fear and Greed are expensive. Our system is built on logic, probability, and risk management.",
                icon: "🤖"
              },
              {
                title: "Zero Hype",
                desc: "No moonboys. No lambos. Just consistent, boring, profitable execution day after day.",
                icon: "📉"
              }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-3xl border border-gray-200 hover:border-black transition-colors group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="container text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Ready to stop playing games?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join the Academy today. Master the mindset. Become the 1%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold rounded-full px-12 h-16 text-xl shadow-[0_0_40px_rgba(162,207,120,0.3)] hover:shadow-[0_0_60px_rgba(162,207,120,0.5)] transition-all">
              Join For £4.90
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            30-day money-back guarantee. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Applecore" className="h-6 w-auto brightness-0 invert" />
            <span className="text-sm text-muted-foreground">© 2024 Applecore Trading</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
