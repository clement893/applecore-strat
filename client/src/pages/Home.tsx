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
              <TabsTrigger value="ads" className="gap-2 py-2 px-4">Ad Templates</TabsTrigger>
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

            <div className="space-y-8">
              {/* Primary Colors */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Primary Colors</h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="group space-y-3">
                    <div className="aspect-[4/3] rounded-xl bg-[#510F66] shadow-lg ring-1 ring-inset ring-white/10 transition-transform group-hover:scale-105" />
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold">Deep Purple</h3>
                        <span className="text-xs font-mono text-muted-foreground">Primary</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <code className="rounded bg-muted px-2 py-0.5 font-mono text-xs">#510F66</code>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => copyToClipboard("#510F66", "p1")}>
                          {copied === "p1" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="group space-y-3">
                    <div className="aspect-[4/3] rounded-xl bg-[#E0FF98] shadow-lg ring-1 ring-inset ring-white/10 transition-transform group-hover:scale-105" />
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold">Pale Lime</h3>
                        <span className="text-xs font-mono text-muted-foreground">Primary</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <code className="rounded bg-muted px-2 py-0.5 font-mono text-xs">#E0FF98</code>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => copyToClipboard("#E0FF98", "p2")}>
                          {copied === "p2" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Neutral Colors */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Neutral Colors</h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="group space-y-3">
                    <div className="aspect-[4/3] rounded-xl bg-[#FFFFFF] shadow-lg ring-1 ring-inset ring-white/10 transition-transform group-hover:scale-105" />
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold">White</h3>
                        <span className="text-xs font-mono text-muted-foreground">Neutral</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <code className="rounded bg-muted px-2 py-0.5 font-mono text-xs">#FFFFFF</code>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => copyToClipboard("#FFFFFF", "n1")}>
                          {copied === "n1" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="group space-y-3">
                    <div className="aspect-[4/3] rounded-xl bg-[#F4EFEC] shadow-lg ring-1 ring-inset ring-white/10 transition-transform group-hover:scale-105" />
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold">Off White</h3>
                        <span className="text-xs font-mono text-muted-foreground">Neutral</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <code className="rounded bg-muted px-2 py-0.5 font-mono text-xs">#F4EFEC</code>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => copyToClipboard("#F4EFEC", "n2")}>
                          {copied === "n2" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="group space-y-3">
                    <div className="aspect-[4/3] rounded-xl bg-[#000000] shadow-lg ring-1 ring-inset ring-white/20 transition-transform group-hover:scale-105" />
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold">Black</h3>
                        <span className="text-xs font-mono text-muted-foreground">Neutral</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <code className="rounded bg-muted px-2 py-0.5 font-mono text-xs">#000000</code>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => copyToClipboard("#000000", "n3")}>
                          {copied === "n3" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="group space-y-3">
                    <div className="aspect-[4/3] rounded-xl bg-[#1E1E1E] shadow-lg ring-1 ring-inset ring-white/20 transition-transform group-hover:scale-105" />
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold">Dark Grey</h3>
                        <span className="text-xs font-mono text-muted-foreground">Neutral</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <code className="rounded bg-muted px-2 py-0.5 font-mono text-xs">#1E1E1E</code>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => copyToClipboard("#1E1E1E", "n4")}>
                          {copied === "n4" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Colors */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Secondary Colors</h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="group space-y-3">
                    <div className="aspect-[4/3] rounded-xl bg-[#D2F3F6] shadow-lg ring-1 ring-inset ring-white/10 transition-transform group-hover:scale-105" />
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold">Ice Blue</h3>
                        <span className="text-xs font-mono text-muted-foreground">Secondary</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <code className="rounded bg-muted px-2 py-0.5 font-mono text-xs">#D2F3F6</code>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => copyToClipboard("#D2F3F6", "s1")}>
                          {copied === "s1" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="group space-y-3">
                    <div className="aspect-[4/3] rounded-xl bg-[#DED9FF] shadow-lg ring-1 ring-inset ring-white/10 transition-transform group-hover:scale-105" />
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold">Lavender</h3>
                        <span className="text-xs font-mono text-muted-foreground">Secondary</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <code className="rounded bg-muted px-2 py-0.5 font-mono text-xs">#DED9FF</code>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => copyToClipboard("#DED9FF", "s2")}>
                          {copied === "s2" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="group space-y-3">
                    <div className="aspect-[4/3] rounded-xl bg-[#FFDDC4] shadow-lg ring-1 ring-inset ring-white/10 transition-transform group-hover:scale-105" />
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold">Peach</h3>
                        <span className="text-xs font-mono text-muted-foreground">Secondary</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <code className="rounded bg-muted px-2 py-0.5 font-mono text-xs">#FFDDC4</code>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => copyToClipboard("#FFDDC4", "s3")}>
                          {copied === "s3" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="group space-y-3">
                    <div className="aspect-[4/3] rounded-xl bg-[#F8FFDC] shadow-lg ring-1 ring-inset ring-white/10 transition-transform group-hover:scale-105" />
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold">Cream</h3>
                        <span className="text-xs font-mono text-muted-foreground">Secondary</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <code className="rounded bg-muted px-2 py-0.5 font-mono text-xs">#F8FFDC</code>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => copyToClipboard("#F8FFDC", "s4")}>
                          {copied === "s4" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>
                  </div>
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
                We use <span className="text-foreground font-semibold">Switzer</span> as our primary typeface. 
                It's a neo-grotesque sans-serif that balances technical precision with human warmth.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-sm text-muted-foreground">Type Scale</span>
                  <div className="space-y-6">
                    <div className="flex items-baseline justify-between border-b border-border/50 pb-2">
                      <span className="text-[256px] leading-none font-bold">H1</span>
                      <span className="font-mono text-sm text-muted-foreground">256px</span>
                    </div>
                    <div className="flex items-baseline justify-between border-b border-border/50 pb-2">
                      <span className="text-[88px] leading-none font-bold">H2</span>
                      <span className="font-mono text-sm text-muted-foreground">88px</span>
                    </div>
                    <div className="flex items-baseline justify-between border-b border-border/50 pb-2">
                      <span className="text-[56px] leading-none font-bold">H3</span>
                      <span className="font-mono text-sm text-muted-foreground">56px</span>
                    </div>
                    <div className="flex items-baseline justify-between border-b border-border/50 pb-2">
                      <span className="text-[40px] leading-none font-bold">H4</span>
                      <span className="font-mono text-sm text-muted-foreground">40px</span>
                    </div>
                    <div className="flex items-baseline justify-between border-b border-border/50 pb-2">
                      <span className="text-[24px] leading-none font-bold">H5</span>
                      <span className="font-mono text-sm text-muted-foreground">24px</span>
                    </div>
                    <div className="flex items-baseline justify-between border-b border-border/50 pb-2">
                      <span className="text-[18px] leading-none">Body 1</span>
                      <span className="font-mono text-sm text-muted-foreground">18px</span>
                    </div>
                    <div className="flex items-baseline justify-between border-b border-border/50 pb-2">
                      <span className="text-[16px] leading-none">Body 2 / Label</span>
                      <span className="font-mono text-sm text-muted-foreground">16px</span>
                    </div>
                  </div>
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
          <TabsContent value="ads" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Ad Templates</h2>
              <p className="max-w-[600px] text-lg text-muted-foreground">
                Ready-to-use marketing assets optimized for conversion.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Instagram Story Template */}
              <div className="space-y-4">
                <div className="relative aspect-[9/16] overflow-hidden rounded-xl border border-border bg-black">
                  {/* Background */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-secondary)_0%,_transparent_70%)] opacity-20"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_transparent_0%,_#000_100%)]"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    <div className="flex justify-center">
                      <img src="/logo.png" alt="Applecore" className="h-8 opacity-80" />
                    </div>
                    
                    <div className="space-y-6 text-center">
                      <div className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                        Limited Offer
                      </div>
                      <h3 className="text-4xl font-black leading-none tracking-tighter text-white">
                        £4.90
                        <span className="block text-lg font-medium text-muted-foreground">First Month</span>
                      </h3>
                      <p className="text-sm text-gray-300">
                        Access professional indicators, live sessions, and the full video library.
                      </p>
                      <div className="w-full rounded-lg bg-primary py-3 text-center font-bold text-black">
                        Start Trial
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Instagram Story</span>
                  <span className="text-xs text-muted-foreground">1080x1920px</span>
                </div>
              </div>

              {/* LinkedIn Post Template */}
              <div className="space-y-4">
                <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-card">
                  <div className="absolute inset-0 flex flex-col p-8">
                    <div className="mb-auto">
                      <img src="/logo.png" alt="Applecore" className="h-6" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-4xl font-bold leading-tight tracking-tight text-white">
                        Don't follow trends.
                        <br />
                        <span className="text-secondary">Predict them.</span>
                      </h3>
                      <div className="h-32 w-full rounded-lg border border-border/50 bg-black/50 p-4 backdrop-blur-sm">
                        {/* Abstract Chart */}
                        <div className="flex h-full items-end gap-1">
                          {[40, 65, 45, 80, 55, 90, 70, 95, 85, 100].map((h, i) => (
                            <div 
                              key={i} 
                              className="flex-1 rounded-t-sm bg-secondary/80 transition-all hover:bg-secondary"
                              style={{ height: `${h}%`, opacity: 0.5 + (i * 0.05) }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">LinkedIn / Square</span>
                  <span className="text-xs text-muted-foreground">1080x1080px</span>
                </div>
              </div>

              {/* Web Banner Template */}
              <div className="space-y-4">
                <div className="relative flex aspect-video flex-col justify-center overflow-hidden rounded-xl border border-border bg-black p-8">
                  <div className="absolute right-0 top-0 h-full w-1/2 bg-[linear-gradient(to_left,_var(--color-primary)_0%,_transparent_100%)] opacity-10"></div>
                  
                  <div className="relative z-10 max-w-[60%] space-y-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                      Now Live
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight text-white">
                      One Membership.
                      <br />
                      Everything Included.
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        Custom Indicators
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        Video Library
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        Private Community
                      </li>
                    </ul>
                    <button className="mt-4 rounded-md bg-white px-6 py-2 text-sm font-bold text-black transition-colors hover:bg-gray-200">
                      Join Now
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Web Banner</span>
                  <span className="text-xs text-muted-foreground">1920x1080px</span>
                </div>
              </div>

              {/* Signature Visual: Trade with Extreme Prejudice */}
              <div className="col-span-full space-y-4 pt-8">
                <h3 className="text-2xl font-bold tracking-tight">Signature Visual</h3>
                <div className="relative aspect-[21/9] overflow-hidden rounded-xl border border-border bg-black">
                  {/* Glitch/Noise Background */}
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="relative">
                      <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mix-blend-difference" style={{ textShadow: '4px 4px 0px var(--color-primary)' }}>
                        TRADE WITH
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary animate-pulse">EXTREME PREJUDICE</span>
                      </h2>
                      {/* Glitch Effect Layers */}
                      <h2 className="absolute inset-0 text-6xl md:text-8xl font-black tracking-tighter text-secondary opacity-30 blur-sm translate-x-1 translate-y-1" aria-hidden="true">
                        TRADE WITH
                        <br />
                        EXTREME PREJUDICE
                      </h2>
                    </div>
                    <p className="mt-6 max-w-2xl text-lg text-gray-400 font-mono uppercase tracking-widest">
                      Zero Bias • Zero Dogma • Raw Data
                    </p>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute bottom-8 left-8 flex gap-4">
                    <div className="h-1 w-12 bg-primary"></div>
                    <div className="h-1 w-4 bg-secondary"></div>
                  </div>
                  <div className="absolute top-8 right-8 font-mono text-xs text-primary/50">
                    SYS.OVERRIDE_INIT
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Brand Signature / Hero</span>
                  <span className="text-xs text-muted-foreground">Ultrawide 21:9</span>
                </div>
              </div>

              {/* New Ad: The Applecore Way */}
              <div className="space-y-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-[#0A0A0A]">
                  <div className="absolute inset-0 p-8 flex flex-col">
                    <div className="flex-1 flex items-center justify-center">
                      <div className="relative w-full aspect-square border border-primary/20 rounded-full flex items-center justify-center">
                        <div className="absolute inset-0 border border-dashed border-primary/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                        <div className="text-center space-y-2">
                          <div className="text-4xl font-bold text-white">Zero</div>
                          <div className="text-sm text-muted-foreground uppercase tracking-widest">Hype</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4 text-center">
                      <h3 className="text-2xl font-bold text-white">The Applecore Way</h3>
                      <p className="text-sm text-gray-400">
                        No paid promoters. No fake screenshots. No rented cars. Just real traders and raw data.
                      </p>
                      <div className="pt-4 border-t border-white/10">
                        <span className="text-primary font-mono text-sm">JOIN THE REVOLUTION &rarr;</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Social / Vertical</span>
                  <span className="text-xs text-muted-foreground">1080x1350px</span>
                </div>
              </div>

              {/* In-Context Previews */}
              <div className="col-span-full space-y-8 pt-8 border-t border-border">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold tracking-tight">In-Context Previews</h3>
                  <span className="text-sm text-muted-foreground">Real-world application mockups</span>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                  {/* Instagram Story Mockup */}
                  <div className="relative mx-auto w-[300px] h-[600px] bg-black rounded-[3rem] border-[8px] border-gray-800 overflow-hidden shadow-2xl">
                    {/* Status Bar */}
                    <div className="absolute top-0 inset-x-0 h-8 px-6 flex items-center justify-between z-20">
                      <span className="text-[10px] font-medium text-white">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full bg-white/20"></div>
                        <div className="w-3 h-3 rounded-full bg-white/20"></div>
                      </div>
                    </div>
                    
                    {/* Story Progress */}
                    <div className="absolute top-3 inset-x-2 flex gap-1 z-20">
                      <div className="h-0.5 flex-1 bg-white/30 rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-white"></div>
                      </div>
                      <div className="h-0.5 flex-1 bg-white/30 rounded-full"></div>
                    </div>

                    {/* User Info */}
                    <div className="absolute top-6 left-4 flex items-center gap-2 z-20">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <img src="/images/logo.png" alt="Applecore" className="w-5 h-5 object-contain brightness-0 invert" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">applecore_trading</div>
                        <div className="text-[10px] text-white/70">Sponsored</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 bg-secondary/5">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full"></div>
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full"></div>
                      
                      <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center">
                        <h3 className="text-2xl font-bold text-white leading-tight mb-6">
                          <span className="inline-block animate-[pulse_4s_ease-in-out_infinite] text-gray-500 line-through decoration-secondary/50 decoration-2">Stop Acting Like An Amateur.</span>
                          <br />
                          <span className="inline-block animate-[pulse_4s_ease-in-out_infinite_2s] text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">Start Acting Like A Millionaire.</span>
                        </h3>
                        <button className="bg-primary text-black font-bold py-3 px-8 rounded-full text-sm hover:bg-primary/90 transition-colors">
                          Start Free Trial
                        </button>
                      </div>
                    </div>

                    {/* Swipe Up */}
                    <div className="absolute bottom-8 inset-x-0 flex flex-col items-center gap-1 z-20">
                      <div className="w-4 h-4 border-t-2 border-r-2 border-white rotate-[135deg]"></div>
                      <span className="text-xs font-bold text-white">Swipe Up</span>
                    </div>
                  </div>

                  {/* LinkedIn Post Mockup */}
                  <div className="col-span-2 bg-card rounded-xl border border-border overflow-hidden">
                    {/* Header */}
                    <div className="p-4 flex gap-3">
                      <div className="w-12 h-12 rounded bg-primary flex items-center justify-center">
                        <img src="/images/logo.png" alt="Applecore" className="w-8 h-8 object-contain brightness-0 invert" />
                      </div>
                      <div>
                        <div className="font-bold text-sm">Applecore Trading</div>
                        <div className="text-xs text-muted-foreground">15,420 followers</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">Promoted <span className="w-0.5 h-0.5 rounded-full bg-muted-foreground"></span> <span className="text-[10px]">🌐</span></div>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="px-4 pb-3 text-sm space-y-2">
                      <p>Most traders are just guessing. They follow trends that are already dead.</p>
                      <p>At Applecore, we don't follow trends. We predict them.</p>
                      <p className="text-primary">#Trading #FinTech #MarketAnalysis</p>
                    </div>

                    {/* Image Content */}
                    <div className="relative aspect-video bg-black overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-black to-black"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <h2 className="text-3xl font-bold text-white tracking-tighter">
                            THE <span className="text-primary">APPLECORE</span> WAY
                          </h2>
                          <div className="flex gap-8 justify-center text-xs font-mono text-gray-400">
                            <span>ZERO HYPE</span>
                            <span>•</span>
                            <span>PURE DATA</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="bg-secondary/5 p-3 flex items-center justify-between border-t border-border">
                      <div className="text-xs">
                        <span className="font-bold">Applecore Trading Academy</span>
                        <span className="mx-1">•</span>
                        <span className="text-muted-foreground">applecore.com</span>
                      </div>
                      <button className="px-4 py-1 rounded-full border border-primary text-primary text-xs font-bold hover:bg-primary/10">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* New Ad: Mindset Revolution (A/B Variants) */}
              <div className="col-span-full space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold tracking-tight">Mindset Revolution (A/B Testing)</h3>
                  <div className="flex gap-2">
                    <button className="rounded-md border border-border bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary hover:bg-secondary/20">
                      Download All Variants
                    </button>
                  </div>
                </div>
                
                <div className="grid gap-8 md:grid-cols-3">
                  {/* Variant A: Amateur vs Millionaire */}
                  <div className="space-y-4">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-secondary/5 group">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full"></div>
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
                      
                      <div className="absolute inset-0 p-8 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="text-xs font-mono text-secondary uppercase">Variant A</div>
                          <h3 className="text-3xl font-bold text-white leading-tight">
                            <span className="inline-block animate-[pulse_4s_ease-in-out_infinite] text-gray-500 line-through decoration-secondary/50 decoration-2">Stop Acting Like An Amateur.</span>
                            <br />
                            <span className="inline-block animate-[pulse_4s_ease-in-out_infinite_2s] text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">Start Acting Like A Millionaire.</span>
                          </h3>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex gap-2">
                            <div className="flex-1 bg-black/50 backdrop-blur p-3 rounded border border-white/10">
                              <div className="text-xs text-gray-400">Focus</div>
                              <div className="text-lg font-bold text-white">100%</div>
                            </div>
                            <div className="flex-1 bg-black/50 backdrop-blur p-3 rounded border border-white/10">
                              <div className="text-xs text-gray-400">Emotion</div>
                              <div className="text-lg font-bold text-white">0%</div>
                            </div>
                          </div>
                          <p className="text-xs text-gray-400">
                            Master the mindset that separates the pros from the gamblers.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Variant A</span>
                      <button className="text-xs text-primary hover:underline">Download .PNG</button>
                    </div>
                  </div>

                  {/* Variant B: Gambler vs Pro */}
                  <div className="space-y-4">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-secondary/5 group">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full"></div>
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
                      
                      <div className="absolute inset-0 p-8 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="text-xs font-mono text-secondary uppercase">Variant B</div>
                          <h3 className="text-3xl font-bold text-white leading-tight">
                            <span className="inline-block animate-[pulse_4s_ease-in-out_infinite] text-gray-500 line-through decoration-secondary/50 decoration-2">Stop Trading Like A Gambler.</span>
                            <br />
                            <span className="inline-block animate-[pulse_4s_ease-in-out_infinite_2s] text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">Start Trading Like A Pro.</span>
                          </h3>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex gap-2">
                            <div className="flex-1 bg-black/50 backdrop-blur p-3 rounded border border-white/10">
                              <div className="text-xs text-gray-400">Risk</div>
                              <div className="text-lg font-bold text-white">Managed</div>
                            </div>
                            <div className="flex-1 bg-black/50 backdrop-blur p-3 rounded border border-white/10">
                              <div className="text-xs text-gray-400">Edge</div>
                              <div className="text-lg font-bold text-white">Defined</div>
                            </div>
                          </div>
                          <p className="text-xs text-gray-400">
                            Stop guessing. Start executing with precision.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Variant B</span>
                      <button className="text-xs text-primary hover:underline">Download .PNG</button>
                    </div>
                  </div>

                  {/* Variant C: Guessing vs Knowing */}
                  <div className="space-y-4">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-secondary/5 group">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full"></div>
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
                      
                      <div className="absolute inset-0 p-8 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="text-xs font-mono text-secondary uppercase">Variant C</div>
                          <h3 className="text-3xl font-bold text-white leading-tight">
                            <span className="inline-block animate-[pulse_4s_ease-in-out_infinite] text-gray-500 line-through decoration-secondary/50 decoration-2">Stop Guessing The Market.</span>
                            <br />
                            <span className="inline-block animate-[pulse_4s_ease-in-out_infinite_2s] text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">Start Knowing The Moves.</span>
                          </h3>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex gap-2">
                            <div className="flex-1 bg-black/50 backdrop-blur p-3 rounded border border-white/10">
                              <div className="text-xs text-gray-400">Bias</div>
                              <div className="text-lg font-bold text-white">Zero</div>
                            </div>
                            <div className="flex-1 bg-black/50 backdrop-blur p-3 rounded border border-white/10">
                              <div className="text-xs text-gray-400">Clarity</div>
                              <div className="text-lg font-bold text-white">100%</div>
                            </div>
                          </div>
                          <p className="text-xs text-gray-400">
                            See what others miss. Trade what actually happens.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Variant C</span>
                      <button className="text-xs text-primary hover:underline">Download .PNG</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* New Ad: Education */}
              <div className="space-y-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-black">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-[gradient_15s_ease_infinite]"></div>
                  
                  <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center space-y-6">
                    <div className="h-16 w-16 bg-white text-black rounded-full flex items-center justify-center font-bold text-2xl">
                      &lt;5
                    </div>
                    <h3 className="text-3xl font-bold text-white">
                      Less than £5
                      <br />
                      <span className="text-primary">to change your life.</span>
                    </h3>
                    <p className="text-sm text-gray-400 max-w-[200px]">
                      Ridiculously low barrier to entry. On purpose.
                    </p>
                    <button className="bg-primary text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-white transition-colors">
                      Start Your Journey
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Social / Vertical</span>
                  <span className="text-xs text-muted-foreground">1080x1350px</span>
                </div>
              </div>
            </div>
          </TabsContent>

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
