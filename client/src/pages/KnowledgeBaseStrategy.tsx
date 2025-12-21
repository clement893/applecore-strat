import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Target, Zap, TrendingUp, BarChart3, Search, Share2, AlertTriangle, CheckCircle, Users, Layers, FileText, Video, MessageCircle } from "lucide-react";

export default function KnowledgeBaseStrategy() {
  const contentClusters = [
    {
      name: "The Game is Treacherous",
      icon: AlertTriangle,
      color: "red",
      description: "Why retail traders lose. Market structure. Broker incentives.",
      keywords: ["why traders lose", "retail trading statistics", "market structure", "broker incentives"],
      articles: [
        "Why 89% of Retail Traders Lose Money",
        "How Brokers Profit From Your Losses",
        "The Hidden Costs of Trading"
      ]
    },
    {
      name: "Bias-Free Foundations",
      icon: Search,
      color: "blue",
      description: "Clear market vision. Psychological biases. Structured learning.",
      keywords: ["trading psychology", "cognitive biases", "market analysis", "trader mindset"],
      articles: [
        "The Bias-Free Framework",
        "Cognitive Biases in Trading",
        "Building Your Trading Mindset"
      ]
    },
    {
      name: "The Verification Lab",
      icon: Layers,
      color: "orange",
      description: "Building your own edge. Backtesting. Rule-based systems.",
      keywords: ["backtesting", "trading systems", "rule-based trading", "strategy development"],
      articles: [
        "Building Your Own Trading Edge",
        "Backtesting 101",
        "Creating Rule-Based Trading Systems"
      ]
    },
    {
      name: "Workshop Community",
      icon: Users,
      color: "purple",
      description: "Accountability. Process-based wins. Structured community.",
      keywords: ["trading community", "accountability", "trader psychology", "trading discipline"],
      articles: [
        "The Power of Trading Accountability",
        "Building a Winning Trading Mindset",
        "Community-Driven Trading Success"
      ]
    },
    {
      name: "Technical Foundations",
      icon: BarChart3,
      color: "cyan",
      description: "Chart reading. Technical analysis. Market structure.",
      keywords: ["technical analysis", "chart patterns", "market structure", "price action"],
      articles: [
        "Technical Analysis Fundamentals",
        "Reading Price Action",
        "Chart Patterns That Matter"
      ]
    }
  ];

  const seoStrategy = {
    monthlyTargets: {
      articles: 3,
      videos: 2,
      guides: 1
    },
    keywords: [
      "how to start trading",
      "retail trading statistics",
      "trading psychology",
      "technical analysis basics",
      "backtesting trading strategies",
      "trader mindset",
      "market structure",
      "trading discipline",
      "cognitive biases trading",
      "rule-based trading systems",
      "trading journal template",
      "prop trading firms",
      "forex vs stocks",
      "risk management trading",
      "trading education",
      "price action trading",
      "trader accountability",
      "trading plan template",
      "emotional trading",
      "trading strategy testing",
      "UK trading education",
      "retail trader success rate"
    ],
    targetRegion: "United Kingdom",
    searchIntent: ["Educational", "Problem-solving", "Comparison", "How-to"]
  };

  const distributionStrategy = {
    channels: [
      { name: "YouTube", format: "Long-form (10-15 min)", frequency: "2x/month", icon: Video },
      { name: "Discord", format: "Snippets + Discussion", frequency: "3x/week", icon: MessageCircle },
      { name: "Email", format: "Deep-dives", frequency: "1x/week", icon: FileText },
      { name: "Social Media", format: "Clips + Hooks", frequency: "Daily", icon: Share2 }
    ]
  };

  const metricsKpis = [
    { metric: "Monthly Organic Traffic", target: "5,000 visitors/month", icon: TrendingUp },
    { metric: "Average Time on Page", target: "> 3 minutes", icon: BarChart3 },
    { metric: "Email Subscribers", target: "500 by Month 6", icon: Users },
    { metric: "YouTube Subscribers", target: "1,000 by Month 12", icon: Video },
    { metric: "Content Pieces", target: "36 articles/year", icon: FileText },
    { metric: "Backlinks", target: "20+ from authority sites", icon: Link }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <div className="border-b border-white/5 bg-zinc-900/50 sticky top-0 z-40">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <Link href="/digital-strategy">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowRight className="w-4 h-4 rotate-180" />
                Back to Strategy
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">Knowledge Base Strategy</h1>
            <div className="w-24" />
          </div>
        </div>
      </div>

      <div className="container py-16">
        {/* Intro */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl font-bold mb-6">Content That Educates & Converts</h2>
          <p className="text-xl text-zinc-400 leading-relaxed mb-8">
            A strategic content architecture designed to attract, educate, and convert traders through SEO-optimized, value-first content. 22 target keywords. 5 content clusters. 36 articles/year.
          </p>
          <div className="flex gap-4">
            <div className="px-4 py-2 rounded-lg bg-primary/20 text-primary font-semibold text-sm">
              22 Target Keywords
            </div>
            <div className="px-4 py-2 rounded-lg bg-accent/20 text-accent font-semibold text-sm">
              5 Content Clusters
            </div>
            <div className="px-4 py-2 rounded-lg bg-secondary/20 text-secondary font-semibold text-sm">
              36 Articles/Year
            </div>
          </div>
        </div>

        {/* Content Clusters */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold mb-12">Content Clusters</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentClusters.map((cluster, idx) => {
              const Icon = cluster.icon;
              const colorMap = {
                red: "border-red-500/20 bg-red-500/5",
                blue: "border-blue-500/20 bg-blue-500/5",
                orange: "border-orange-500/20 bg-orange-500/5",
                purple: "border-purple-500/20 bg-purple-500/5",
                cyan: "border-cyan-500/20 bg-cyan-500/5"
              };
              const textColorMap = {
                red: "text-red-400",
                blue: "text-blue-400",
                orange: "text-orange-400",
                purple: "text-purple-400",
                cyan: "text-cyan-400"
              };

              return (
                <div key={idx} className={`p-8 rounded-xl border ${colorMap[cluster.color as keyof typeof colorMap]} hover:border-opacity-40 transition-colors`}>
                  <div className="flex items-start gap-4 mb-6">
                    <Icon className={`w-6 h-6 flex-shrink-0 ${textColorMap[cluster.color as keyof typeof textColorMap]}`} />
                    <h4 className="text-xl font-bold">{cluster.name}</h4>
                  </div>
                  <p className="text-zinc-400 mb-6">{cluster.description}</p>
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3">Target Keywords</p>
                    <div className="flex flex-wrap gap-2">
                      {cluster.keywords.map((kw, i) => (
                        <span key={i} className="px-2 py-1 rounded text-xs bg-white/5 text-zinc-300">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3">Planned Articles</p>
                    <ul className="space-y-2">
                      {cluster.articles.map((article, i) => (
                        <li key={i} className="text-sm text-zinc-400 flex gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-zinc-600" />
                          {article}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SEO Strategy */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold mb-12">SEO Strategy</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-zinc-900 border border-white/5">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Target Keywords (22)
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {seoStrategy.keywords.map((kw, idx) => (
                  <div key={idx} className="px-3 py-2 rounded bg-white/5 text-sm text-zinc-300">
                    {kw}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-xl bg-zinc-900 border border-white/5">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                Publishing Schedule
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-zinc-400 mb-2">Monthly Targets</p>
                  <ul className="space-y-2">
                    <li className="flex justify-between text-sm">
                      <span>Articles</span>
                      <span className="font-bold text-primary">{seoStrategy.monthlyTargets.articles}</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span>Videos</span>
                      <span className="font-bold text-accent">{seoStrategy.monthlyTargets.videos}</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span>Guides</span>
                      <span className="font-bold text-secondary">{seoStrategy.monthlyTargets.guides}</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-2">Target Region</p>
                  <p className="text-sm font-semibold">{seoStrategy.targetRegion}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Distribution */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold mb-12">Distribution Channels</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {distributionStrategy.channels.map((channel, idx) => {
              const Icon = channel.icon;
              return (
                <div key={idx} className="p-8 rounded-xl bg-zinc-900 border border-white/5 hover:border-primary/20 transition-colors">
                  <div className="flex items-start gap-4 mb-6">
                    <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold">{channel.name}</h4>
                      <p className="text-sm text-zinc-400">{channel.format}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-400">Frequency</span>
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                      {channel.frequency}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* KPIs */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold mb-12">Success Metrics</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metricsKpis.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 rounded-xl bg-zinc-900 border border-white/5">
                  <Icon className="w-5 h-5 text-accent mb-3" />
                  <h4 className="font-semibold mb-2">{item.metric}</h4>
                  <p className="text-sm text-primary font-bold">{item.target}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold mb-12">12-Month Timeline</h3>
          <div className="space-y-6">
            {[
              { quarter: "Q1", focus: "Foundation & SEO Setup", items: ["Keyword research & mapping", "Content calendar creation", "First 3 pillar articles", "YouTube channel setup"] },
              { quarter: "Q2", focus: "Content Acceleration", items: ["9 articles published", "6 videos published", "Email list to 100 subscribers", "First backlink outreach"] },
              { quarter: "Q3", focus: "Community Building", items: ["18 articles total", "12 videos total", "Email list to 300 subscribers", "Discord integration"] },
              { quarter: "Q4", focus: "Scale & Optimize", items: ["36 articles total", "24 videos total", "Email list to 500 subscribers", "Organic traffic: 5,000/month"] }
            ].map((q, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-zinc-900 border border-white/5">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary font-bold">
                      {q.quarter}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold mb-4">{q.focus}</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {q.items.map((item, i) => (
                        <li key={i} className="flex gap-2 text-zinc-300">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center py-12">
          <p className="text-zinc-400 mb-6">Ready to execute this strategy?</p>
          <Link href="/digital-strategy">
            <Button size="lg" className="gap-2">
              Back to Digital Strategy
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
