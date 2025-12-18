import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Check, Copy, Download, FileText, Layout, Palette, Type, TrendingUp, TrendingDown, BarChart2 } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 py-16 md:py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              {/* Strategic Navigation */}
              <div className="flex flex-wrap gap-2 mb-4">
                <Link href="/">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/20 cursor-pointer">
                    1. Brand Guide
                  </span>
                </Link>
                <Link href="/mindset-revolution">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-muted-foreground hover:text-white border border-white/10 cursor-pointer transition-colors">
                    2. Ad Concept
                  </span>
                </Link>
                <Link href="/digital-strategy">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-muted-foreground hover:text-white border border-white/10 cursor-pointer transition-colors">
                    3. Digital Strategy
                  </span>
                </Link>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <img src="/logo.png" alt="Applecore" className="h-8 w-auto brightness-0 invert" />
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                  Brand Guidelines v1.0
                </div>
              </div>
              <div className="max-w-[400px]">
                <img src="/logo.png" alt="Applecore Logo" className="w-full h-auto" />
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The definitive guide to our visual language. Precision, energy, and clarity for the next generation of trading tools.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/mindset-revolution">
                  <Button size="lg" className="gap-2 font-bold bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Explore Mindset Revolution <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="gap-2">
                  Download Assets <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-muted/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-8 w-full max-w-md">
                  <div className="aspect-square rounded-lg bg-background border border-border p-4 shadow-lg flex flex-col justify-between group hover:border-primary transition-colors">
                    <div className="h-8 w-8 rounded bg-primary/20 text-primary flex items-center justify-center">
                      <Layout className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="h-2 w-12 rounded bg-muted-foreground/20" />
                      <div className="h-2 w-20 rounded bg-muted-foreground/10" />
                    </div>
                  </div>
                  <div className="aspect-square rounded-lg bg-background border border-border p-4 shadow-lg flex flex-col justify-between group hover:border-secondary transition-colors">
                    <div className="h-8 w-8 rounded bg-secondary/20 text-secondary flex items-center justify-center">
                      <Palette className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="h-2 w-12 rounded bg-muted-foreground/20" />
                      <div className="h-2 w-20 rounded bg-muted-foreground/10" />
                    </div>
                  </div>
                  <div className="col-span-2 aspect-[2/1] rounded-lg bg-background border border-border p-4 shadow-lg flex items-center justify-between group hover:border-primary transition-colors">
                    <div className="space-y-2">
                      <div className="h-2 w-24 rounded bg-muted-foreground/20" />
                      <div className="h-2 w-32 rounded bg-muted-foreground/10" />
                    </div>
                    <div className="h-8 w-8 rounded-full bg-primary/10" />
                  </div>
                </div>
              </div>
              {/* Decorative grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>
          </div>
        </div>
      </header>

      <main className="container px-4 py-12 md:py-24">
        <Tabs defaultValue="logo" className="space-y-12">
          <div className="sticky top-0 z-50 -mx-4 bg-background/95 px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
            <TabsList className="w-full justify-start overflow-x-auto h-auto p-1 bg-muted/50">
              <TabsTrigger value="logo" className="gap-2 py-2 px-4">Logo</TabsTrigger>
              <TabsTrigger value="colors" className="gap-2 py-2 px-4">Colors</TabsTrigger>
              <TabsTrigger value="typography" className="gap-2 py-2 px-4">Typography</TabsTrigger>
              <TabsTrigger value="dataviz" className="gap-2 py-2 px-4">Data Viz</TabsTrigger>
              <TabsTrigger value="candlesticks" className="gap-2 py-2 px-4">Candlesticks</TabsTrigger>
              <TabsTrigger value="components" className="gap-2 py-2 px-4">Components</TabsTrigger>
              <TabsTrigger value="social" className="gap-2 py-2 px-4">Social Media Kit</TabsTrigger>
            </TabsList>
          </div>

          {/* Logo Section */}
          <TabsContent value="logo" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Logo Construction</h2>
              <p className="text-muted-foreground max-w-2xl">
                Our logo is built on geometric precision. The primary mark should always be used with sufficient clear space.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Primary Mark</CardTitle>
                  <CardDescription>Use on dark backgrounds (Preferred)</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center p-12 bg-black rounded-lg border border-border">
                  <img src="/logo.png" alt="Applecore Logo" className="w-64 h-auto" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Clear Space</CardTitle>
                  <CardDescription>Minimum padding required around the logo</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center p-12 bg-muted/50 rounded-lg border border-border border-dashed">
                  <div className="relative p-8 border border-primary/20 bg-background/50">
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary"></div>
                    <img src="/logo.png" alt="Applecore Logo" className="w-48 h-auto opacity-80" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Colors Section */}
          <TabsContent value="colors" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Color Palette</h2>
              <p className="text-muted-foreground max-w-2xl">
                Our colors are designed for high contrast and digital-first applications.
              </p>
            </div>
            <div className="grid gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Primary Colors</h3>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                  {[
                    { name: "Pale Lime", hex: "#E0FF98", class: "bg-[#E0FF98] text-black" },
                    { name: "Deep Purple", hex: "#510F66", class: "bg-[#510F66] text-white" },
                    { name: "Black", hex: "#000000", class: "bg-black text-white border border-white/10" },
                    { name: "Off White", hex: "#F4EFEC", class: "bg-[#F4EFEC] text-black" },
                  ].map((color) => (
                    <div key={color.name} className="group relative overflow-hidden rounded-xl border border-border">
                      <div className={`h-32 ${color.class} flex items-center justify-center`}>
                        <span className="font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                          Aa
                        </span>
                      </div>
                      <div className="p-4 bg-card">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">{color.name}</p>
                            <p className="text-sm text-muted-foreground">{color.hex}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => copyToClipboard(color.hex, color.hex)}
                          >
                            {copied === color.hex ? (
                              <Check className="h-4 w-4" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Secondary Colors</h3>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                  {[
                    { name: "Ice Blue", hex: "#D2F3F6", class: "bg-[#D2F3F6] text-black" },
                    { name: "Lavender", hex: "#DED9FF", class: "bg-[#DED9FF] text-black" },
                    { name: "Peach", hex: "#FFDDC4", class: "bg-[#FFDDC4] text-black" },
                    { name: "Cream", hex: "#F8FFDC", class: "bg-[#F8FFDC] text-black" },
                  ].map((color) => (
                    <div key={color.name} className="group relative overflow-hidden rounded-xl border border-border">
                      <div className={`h-32 ${color.class} flex items-center justify-center`}>
                        <span className="font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                          Aa
                        </span>
                      </div>
                      <div className="p-4 bg-card">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">{color.name}</p>
                            <p className="text-sm text-muted-foreground">{color.hex}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => copyToClipboard(color.hex, color.hex)}
                          >
                            {copied === color.hex ? (
                              <Check className="h-4 w-4" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Typography Section */}
          <TabsContent value="typography" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Typography</h2>
              <p className="text-muted-foreground max-w-2xl">
                We use Switzer for its clean, modern geometry. It works perfectly for both display and body text.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Headings</CardTitle>
                  <CardDescription>Switzer Bold / Semibold</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">H1 - Display</p>
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                      Market Clarity
                    </h1>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">H2 - Section</p>
                    <h2 className="text-3xl font-semibold tracking-tight">
                      The Future of Trading
                    </h2>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">H3 - Subsection</p>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      Data Analysis
                    </h3>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Body & UI</CardTitle>
                  <CardDescription>Switzer Regular / Medium</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Body Large</p>
                    <p className="text-lg leading-7">
                      Trading is not about predicting the future. It's about managing risk and understanding probability in the present moment.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Body Regular</p>
                    <p className="leading-7">
                      Our platform provides the tools you need to make informed decisions. We strip away the noise and focus on the signal.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">UI Label</p>
                    <div className="flex gap-4">
                      <Button>Primary Action</Button>
                      <Button variant="secondary">Secondary</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Data Viz Section */}
          <TabsContent value="dataviz" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Data Visualization</h2>
              <p className="text-muted-foreground max-w-2xl">
                Charts should be clean, minimal, and focused on the data. Use our primary colors for accents.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Chart Styling</CardTitle>
                  <CardDescription>Example of a trading chart using our palette</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[21/9] w-full bg-black rounded-lg border border-border p-6 relative overflow-hidden">
                    {/* Grid lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
                    
                    {/* Chart Line */}
                    <svg className="w-full h-full relative z-10" viewBox="0 0 1000 400" preserveAspectRatio="none">
                      <path
                        d="M0,300 C100,280 200,350 300,200 C400,50 500,150 600,100 C700,50 800,120 1000,80"
                        fill="none"
                        stroke="#E0FF98"
                        strokeWidth="3"
                        className="drop-shadow-[0_0_10px_rgba(224,255,152,0.5)]"
                      />
                      <path
                        d="M0,300 C100,280 200,350 300,200 C400,50 500,150 600,100 C700,50 800,120 1000,80 L1000,400 L0,400 Z"
                        fill="url(#gradient)"
                        opacity="0.2"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#E0FF98" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Data Points */}
                    <div className="absolute top-[25%] left-[60%] w-3 h-3 bg-[#E0FF98] rounded-full shadow-[0_0_15px_#E0FF98]" />
                    <div className="absolute top-[20%] left-[60%] px-3 py-1 bg-[#1a1a1a] border border-[#E0FF98]/30 rounded text-xs text-[#E0FF98] font-mono">
                      $42,590.00
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Candlestick Patterns Section */}
          <TabsContent value="candlesticks" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Candlestick Patterns</h2>
              <p className="text-muted-foreground max-w-2xl">
                We reject the traditional Red/Green dichotomy. Our financial data uses a specialized "Cyber-Industrial" palette to reduce emotional trading and enhance clarity.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Bullish Candle Definition */}
              <Card className="bg-black border-border overflow-hidden">
                <CardHeader className="border-b border-white/10 bg-white/5">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white flex items-center gap-2">
                      <TrendingUp className="text-[#E0FF98]" /> Bullish Candle
                    </CardTitle>
                    <span className="px-2 py-1 rounded text-xs font-mono bg-[#E0FF98]/20 text-[#E0FF98] border border-[#E0FF98]/30">
                      #E0FF98
                    </span>
                  </div>
                  <CardDescription className="text-gray-400">
                    Represents upward price movement. Filled or hollow body with Pale Lime stroke.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-12 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]" />
                  
                  {/* Bullish Candle Visual */}
                  <div className="relative flex flex-col items-center group">
                    <div className="w-[2px] h-12 bg-[#E0FF98]/50"></div>
                    <div className="w-8 h-24 bg-[#E0FF98]/10 border-2 border-[#E0FF98] shadow-[0_0_15px_rgba(224,255,152,0.3)] group-hover:shadow-[0_0_25px_rgba(224,255,152,0.5)] transition-shadow"></div>
                    <div className="w-[2px] h-12 bg-[#E0FF98]/50"></div>
                    
                    {/* Labels */}
                    <div className="absolute -right-24 top-0 text-xs text-gray-500 font-mono">High</div>
                    <div className="absolute -right-24 top-12 text-xs text-gray-500 font-mono">Close</div>
                    <div className="absolute -right-24 bottom-12 text-xs text-gray-500 font-mono">Open</div>
                    <div className="absolute -right-24 bottom-0 text-xs text-gray-500 font-mono">Low</div>
                  </div>
                </CardContent>
              </Card>

              {/* Bearish Candle Definition */}
              <Card className="bg-black border-border overflow-hidden">
                <CardHeader className="border-b border-white/10 bg-white/5">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white flex items-center gap-2">
                      <TrendingDown className="text-[#510F66]" /> Bearish Candle
                    </CardTitle>
                    <span className="px-2 py-1 rounded text-xs font-mono bg-[#510F66]/20 text-[#DED9FF] border border-[#510F66]/50">
                      #510F66
                    </span>
                  </div>
                  <CardDescription className="text-gray-400">
                    Represents downward price movement. Solid Deep Purple body with Lavender stroke.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-12 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]" />
                  
                  {/* Bearish Candle Visual */}
                  <div className="relative flex flex-col items-center group">
                    <div className="w-[2px] h-12 bg-[#DED9FF]/50"></div>
                    <div className="w-8 h-24 bg-[#510F66] border-2 border-[#DED9FF] shadow-[0_0_15px_rgba(81,15,102,0.5)] group-hover:shadow-[0_0_25px_rgba(81,15,102,0.8)] transition-shadow"></div>
                    <div className="w-[2px] h-12 bg-[#DED9FF]/50"></div>

                    {/* Labels */}
                    <div className="absolute -left-24 top-0 text-xs text-gray-500 font-mono text-right w-20">High</div>
                    <div className="absolute -left-24 top-12 text-xs text-gray-500 font-mono text-right w-20">Open</div>
                    <div className="absolute -left-24 bottom-12 text-xs text-gray-500 font-mono text-right w-20">Close</div>
                    <div className="absolute -left-24 bottom-0 text-xs text-gray-500 font-mono text-right w-20">Low</div>
                  </div>
                </CardContent>
              </Card>

              {/* Chart Example */}
              <Card className="col-span-2 bg-black border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart2 className="w-5 h-5 text-white" /> Live Chart Application
                  </CardTitle>
                  <CardDescription>
                    How these patterns interact in a live trading environment. Note the lack of "alarmist" red colors.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[21/9] w-full bg-[#050505] rounded-lg border border-white/10 relative overflow-hidden p-8 flex items-end justify-around gap-2">
                    {/* Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px]" />
                    
                    {/* Random Candles Generation for Demo */}
                    {[
                      { h: 16, type: 'bull' }, { h: 24, type: 'bull' }, { h: 12, type: 'bear' }, 
                      { h: 32, type: 'bull' }, { h: 40, type: 'bull' }, { h: 20, type: 'bear' },
                      { h: 16, type: 'bear' }, { h: 28, type: 'bull' }, { h: 48, type: 'bull' },
                      { h: 36, type: 'bear' }, { h: 24, type: 'bear' }, { h: 12, type: 'bull' },
                      { h: 32, type: 'bull' }, { h: 56, type: 'bull' }, { h: 40, type: 'bear' }
                    ].map((candle, i) => (
                      <div key={i} className="flex flex-col items-center justify-end h-full w-full relative group">
                        {/* Wick */}
                        <div className={`w-[1px] absolute ${candle.type === 'bull' ? 'bg-[#E0FF98]/50' : 'bg-[#DED9FF]/50'}`} 
                             style={{ height: `${candle.h * 4 + 20}px`, bottom: '10px' }}></div>
                        {/* Body */}
                        <div 
                          className={`w-full max-w-[20px] rounded-sm border ${
                            candle.type === 'bull' 
                              ? 'bg-[#E0FF98]/10 border-[#E0FF98] shadow-[0_0_10px_rgba(224,255,152,0.1)]' 
                              : 'bg-[#510F66] border-[#DED9FF]'
                          }`}
                          style={{ height: `${candle.h * 3}px`, marginBottom: `${candle.type === 'bull' ? 20 + Math.random()*20 : 20 + Math.random()*40}px` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Components Section */}
          <TabsContent value="components" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">UI Components</h2>
              <p className="text-muted-foreground max-w-2xl">
                Our components are built on shadcn/ui but customized to fit our brand aesthetic.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Buttons</CardTitle>
                  <CardDescription>Primary, Secondary, and Outline variants</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <Button>Primary Button</Button>
                    <Button variant="secondary">Secondary Button</Button>
                    <Button variant="outline">Outline Button</Button>
                    <Button variant="ghost">Ghost Button</Button>
                    <Button variant="link">Link Button</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Cards</CardTitle>
                  <CardDescription>Container style for content</CardDescription>
                </CardHeader>
                <CardContent>
                  <Card className="bg-muted/50">
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                      This is a card component used to group related content.
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Social Media Kit Section */}
          <TabsContent value="social" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Social Media Kit</h2>
              <p className="text-muted-foreground max-w-2xl">
                Ready-to-use templates for Instagram, TikTok, and LinkedIn. Designed to stop the scroll and drive engagement.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Instagram Story */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-pink-500"></span> Instagram Story
                </h3>
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
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" /> Download Template
                    </Button>
                  </div>
                </div>
              </div>

              {/* TikTok/Reel Cover */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span> TikTok / Reel Cover
                </h3>
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
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" /> Download Template
                    </Button>
                  </div>
                </div>
              </div>

              {/* LinkedIn Carousel Slide */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span> LinkedIn Carousel
                </h3>
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
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="outline" className="gap-2 text-white border-white hover:bg-white hover:text-black">
                      <Download className="h-4 w-4" /> Download Template
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
