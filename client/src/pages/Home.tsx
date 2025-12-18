import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Check, Copy, Download, FileText, Layout, Palette, Type } from "lucide-react";
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
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Brand Guidelines v1.0
              </div>
              <div className="max-w-[400px]">
                <img src="/logo.png" alt="Applecore Logo" className="w-full h-auto" />
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The definitive guide to our visual language. Precision, energy, and clarity for the next generation of trading tools.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-2 font-bold">
                  Download Assets <Download className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  View Components <ArrowRight className="h-4 w-4" />
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
              <TabsTrigger value="components" className="gap-2 py-2 px-4">Components</TabsTrigger>
            </TabsList>
          </div>

          {/* Logo Section */}
          <TabsContent value="logo" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">The Logo</h2>
              <p className="text-muted-foreground max-w-2xl">
                Our logo is the cornerstone of our brand. It represents growth, precision, and the core of our technology.
                Always use the provided assets and maintain clear space.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="overflow-hidden border-border/50 bg-background/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>Primary Logo</CardTitle>
                  <CardDescription>Used on dark backgrounds (Default)</CardDescription>
                </CardHeader>
                <CardContent className="flex aspect-video items-center justify-center bg-[#121212] p-8">
                  <img src="/logo.png" alt="Applecore Logo" className="w-3/4 h-auto" />
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-border/50 bg-background/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>Monochrome</CardTitle>
                  <CardDescription>Used for single-color applications</CardDescription>
                </CardHeader>
                <CardContent className="flex aspect-video items-center justify-center bg-white p-8">
                  <img src="/logo.png" alt="Applecore Logo" className="w-3/4 h-auto brightness-0" />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Construction & Clear Space</h3>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="col-span-2 rounded-xl border border-border bg-muted/20 p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />
                  <div className="relative flex items-center justify-center h-full min-h-[300px]">
                    <div className="relative">
                      {/* Clear space indicators */}
                      <div className="absolute -inset-8 border border-dashed border-primary/50 bg-primary/5" />
                      <div className="relative z-10 w-64">
                        <img src="/logo.png" alt="Applecore Logo" className="w-full h-auto" />
                      </div>
                      {/* Measurement lines */}
                      <div className="absolute -right-8 top-0 bottom-0 w-px bg-primary/50" />
                      <div className="absolute -left-8 top-0 bottom-0 w-px bg-primary/50" />
                      <div className="absolute left-0 right-0 -top-8 h-px bg-primary/50" />
                      <div className="absolute left-0 right-0 -bottom-8 h-px bg-primary/50" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border border-destructive/50 bg-destructive/10">
                    <h4 className="font-bold text-destructive mb-2">Don't</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Stretch or distort</li>
                      <li>Change colors</li>
                      <li>Add drop shadows</li>
                      <li>Rotate</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg border border-primary/50 bg-primary/10">
                    <h4 className="font-bold text-primary mb-2">Do</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Maintain clear space</li>
                      <li>Use high-contrast backgrounds</li>
                      <li>Scale proportionally</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Colors Section */}
          <TabsContent value="colors" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Color Palette</h2>
              <p className="text-muted-foreground max-w-2xl">
                Our colors are electric, high-contrast, and designed for dark mode first. 
                The primary Lime Green represents energy and profit, while the Magenta adds depth and modernity.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Primary Color */}
              <div className="group space-y-3">
                <div className="aspect-[4/3] rounded-xl bg-primary shadow-lg ring-1 ring-inset ring-white/10 transition-transform group-hover:scale-105" />
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold">Neon Lime</h3>
                    <span className="text-xs font-mono text-muted-foreground">Primary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="rounded bg-muted px-2 py-0.5 font-mono text-xs">#9EFF00</code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => copyToClipboard("#9EFF00", "c1")}
                    >
                      {copied === "c1" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">Used for: CTAs, Success states, Highlights</p>
                </div>
              </div>

              {/* Secondary Color */}
              <div className="group space-y-3">
                <div className="aspect-[4/3] rounded-xl bg-secondary shadow-lg ring-1 ring-inset ring-white/10 transition-transform group-hover:scale-105" />
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold">Electric Purple</h3>
                    <span className="text-xs font-mono text-muted-foreground">Secondary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="rounded bg-muted px-2 py-0.5 font-mono text-xs">#D946EF</code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => copyToClipboard("#D946EF", "c2")}
                    >
                      {copied === "c2" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">Used for: Gradients, Accents, Depth</p>
                </div>
              </div>

              {/* Background Color */}
              <div className="group space-y-3">
                <div className="aspect-[4/3] rounded-xl bg-[#121212] shadow-lg ring-1 ring-inset ring-white/20 transition-transform group-hover:scale-105" />
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold">Deep Void</h3>
                    <span className="text-xs font-mono text-muted-foreground">Background</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="rounded bg-muted px-2 py-0.5 font-mono text-xs">#121212</code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => copyToClipboard("#121212", "c3")}
                    >
                      {copied === "c3" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">Used for: Main backgrounds, Surfaces</p>
                </div>
              </div>

              {/* Text Color */}
              <div className="group space-y-3">
                <div className="aspect-[4/3] rounded-xl bg-[#E0E0E0] shadow-lg ring-1 ring-inset ring-white/10 transition-transform group-hover:scale-105" />
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold">Mist White</h3>
                    <span className="text-xs font-mono text-muted-foreground">Text</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="rounded bg-muted px-2 py-0.5 font-mono text-xs">#E0E0E0</code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => copyToClipboard("#E0E0E0", "c4")}
                    >
                      {copied === "c4" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">Used for: Body text, Headings</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="mb-6 text-xl font-semibold">Gradients</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="h-24 rounded-lg bg-gradient-to-r from-primary to-secondary" />
                <div className="h-24 rounded-lg bg-gradient-to-br from-secondary/20 via-background to-primary/20" />
              </div>
            </div>
          </TabsContent>

          {/* Typography Section */}
          <TabsContent value="typography" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Typography</h2>
              <p className="text-muted-foreground max-w-2xl">
                We use Inter for its clean, modern aesthetic and excellent readability. 
                Headings are bold and tight, while body text is open and legible.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="space-y-2">
                  <span className="text-sm text-muted-foreground">Display / Headings</span>
                  <div className="text-6xl font-black tracking-tighter">Inter Black</div>
                  <div className="text-4xl font-bold tracking-tight">Inter Bold</div>
                </div>
                <div className="space-y-2">
                  <span className="text-sm text-muted-foreground">Body / UI</span>
                  <div className="text-2xl font-medium">Inter Medium</div>
                  <div className="text-xl font-normal">Inter Regular</div>
                  <div className="text-lg font-light">Inter Light</div>
                </div>
                <div className="space-y-2">
                  <span className="text-sm text-muted-foreground">Monospace / Data</span>
                  <div className="font-mono text-xl">JetBrains Mono</div>
                </div>
              </div>

              <div className="space-y-6 rounded-xl border border-border bg-card p-8">
                <div className="space-y-2">
                  <h1 className="text-4xl font-black tracking-tighter lg:text-5xl">
                    Trader Test!
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Explore / Learn / Manage
                  </p>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary">Resources</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur. Convallis accumsan. 
                    Our typography system ensures that content is always legible, 
                    hierarchical, and impactful.
                  </p>
                  <Button variant="link" className="p-0 h-auto font-semibold text-white hover:text-primary">
                    Explore <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Data Visualization Section */}
          <TabsContent value="dataviz" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Data Visualization</h2>
              <p className="text-muted-foreground max-w-2xl">
                Trading is about data. Our visualization style is precise, minimal, and high-contrast.
                We use thin lines, glowing accents, and stylized candlestick patterns.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="overflow-hidden border-border/50 bg-[#0A0A0A]">
                <CardHeader>
                  <CardTitle>Market Trends</CardTitle>
                  <CardDescription>Line charts with gradient fills</CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="relative h-48 w-full">
                    {/* Stylized Chart */}
                    <svg viewBox="0 0 100 40" className="h-full w-full overflow-visible">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 35 C 10 35, 15 25, 25 28 C 35 31, 40 15, 50 20 C 60 25, 65 10, 75 15 C 85 20, 90 5, 100 2"
                        fill="url(#chartGradient)"
                        stroke="var(--secondary)"
                        strokeWidth="0.5"
                      />
                      {/* Data Points */}
                      <circle cx="50" cy="20" r="1" fill="var(--primary)" className="animate-pulse" />
                      <circle cx="75" cy="15" r="1" fill="white" />
                      <circle cx="100" cy="2" r="1.5" fill="var(--primary)" />
                    </svg>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-border/50 bg-[#0A0A0A]">
                <CardHeader>
                  <CardTitle>Candlestick Patterns</CardTitle>
                  <CardDescription>Stylized financial data representation</CardDescription>
                </CardHeader>
                <CardContent className="p-8 flex items-end justify-between gap-2 h-64">
                  {/* Stylized Candlesticks */}
                  {[40, 60, 45, 70, 55, 80, 65, 90, 75, 100].map((h, i) => (
                    <div key={i} className="relative w-full flex flex-col items-center justify-end group">
                      <div 
                        className={`w-1.5 rounded-sm transition-all duration-500 group-hover:w-2 ${i % 2 === 0 ? 'bg-primary shadow-[0_0_10px_rgba(204,255,0,0.3)]' : 'bg-secondary shadow-[0_0_10px_rgba(139,92,246,0.3)]'}`}
                        style={{ height: `${h}%` }}
                      />
                      <div className="absolute bottom-0 w-[1px] h-full bg-white/10 -z-10" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Components Section */}
          <TabsContent value="components" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">UI Components</h2>
              <p className="text-muted-foreground max-w-2xl">
                Our components are built to be modular, responsive, and interactive. 
                They feature subtle gradients, sharp borders, and clear hover states.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Card Component */}
              <div className="col-span-full lg:col-span-2 space-y-4">
                <h3 className="text-lg font-semibold">Feature Cards</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card className="group relative overflow-hidden border-border/50 bg-gradient-to-br from-secondary/10 to-background transition-all hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <CardHeader>
                      <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20 text-secondary">
                        <FileText className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-xl text-primary">Resources</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur. Convallis accumsan.
                      </p>
                      <Button variant="ghost" className="group/btn p-0 hover:bg-transparent hover:text-primary">
                        Explore <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="group relative overflow-hidden border-border/50 bg-gradient-to-br from-secondary/10 to-background transition-all hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <CardHeader>
                      <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20 text-secondary">
                        <Layout className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-xl text-primary">Groups</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur. Convallis accumsan.
                      </p>
                      <Button variant="ghost" className="group/btn p-0 hover:bg-transparent hover:text-primary">
                        Explore <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Buttons</h3>
                <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
                  <Button className="rounded-full font-bold">Get Started</Button>
                  <Button variant="secondary" className="rounded-full">Learn More</Button>
                  <Button variant="outline" className="rounded-full">View Demo</Button>
                  <Button variant="ghost" className="justify-start p-0 hover:bg-transparent hover:text-primary">
                    Read Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Pricing Card (New) */}
              <div className="col-span-full lg:col-span-1 space-y-4">
                <h3 className="text-lg font-semibold">Pricing Card</h3>
                <Card className="relative overflow-hidden border-border/50 bg-gradient-to-b from-[#1A1A1A] to-background">
                  <div className="absolute top-0 right-0 p-4">
                    <div className="h-16 w-16 rounded-full bg-secondary/20 blur-xl" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">Pro</CardTitle>
                    <CardDescription>Get 2 months free</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Advanced Analytics
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Exclusive Community
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Priority Support
                      </li>
                    </ul>
                    <Button className="w-full rounded-full font-bold">Subscribe Now</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t border-border/40 bg-muted/20 py-12">
        <div className="container px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Applecore. All rights reserved.</p>
          <p className="mt-2">Designed with precision for the future of trading.</p>
        </div>
      </footer>
    </div>
  );
}
