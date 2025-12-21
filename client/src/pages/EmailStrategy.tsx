import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Copy, Check, Mail, Clock, RefreshCw } from "lucide-react";
import { useState } from "react";

export default function EmailStrategy() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const sequences = [
    {
      id: "nurturing",
      title: "Nurturing Sequence (Cold Leads)",
      description: "Designed to build authority and shift beliefs before asking for a sale.",
      icon: <Mail className="w-6 h-6 text-primary" />,
      emails: [
        {
          id: "nurture-1",
          day: "Day 1",
          subject: "Stop Trading Like a Gambler (Read This)",
          body: `Hey [Name],

Most traders fail because they treat the market like a casino. They chase green candles and panic sell red ones.

Here is the hard truth: The market doesn't care about your feelings. It only respects execution.

In the next 5 days, I'm going to show you how the 1% actually trade. No indicators. No noise. Just price.

Are you ready to stop gambling?

- Applecore HQ`
        },
        {
          id: "nurture-3",
          day: "Day 3",
          subject: "Why Your Indicators Are Lying to You",
          body: `[Name],

You have 5 indicators on your chart. RSI, MACD, Bollinger Bands... And you're still losing money.

Why? Because indicators are lagging. They tell you what happened, not what IS happening.

The banks don't use RSI. They use Order Flow.

Tomorrow, I'll show you how to spot where the big money is hiding. Stay sharp.

- Applecore HQ`
        },
        {
          id: "nurture-5",
          day: "Day 5",
          subject: "The Institutional Edge (Open Now)",
          body: `This is it, [Name].

You've seen the difference between gambling and trading. You know why indicators fail.

Now you have a choice.

Option A: Keep guessing and bleeding capital.
Option B: Adopt the Institutional Edge and trade with precision.

The Applecore Academy is open. We don't want everyone. We want the disciplined few.

Join the 1% here: [Link]

- Applecore HQ`
        }
      ]
    },
    {
      id: "welcome",
      title: "Welcome Sequence (Tripwire £4.99)",
      description: "Immediate value delivery + Upsell to full Academy membership + Retention to Month 2.",
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      emails: [
        {
          id: "welcome-0",
          day: "Day 0",
          subject: "You're In. Now What?",
          body: `Welcome to the inner circle, [Name].

You've taken the first step with the Mindset Reset.

But let's be honest: Mindset is only 10% of the game. The other 90% is having an Edge.

Right now, you're trading with a dull knife. You need a scalpel.

I've unlocked a hidden bonus video in your dashboard: 'The Institutional Order Flow'. Watch it before it expires.

[Link to Dashboard]

- Applecore HQ`
        },
        {
          id: "welcome-2",
          day: "Day 2",
          subject: "You're missing 90% of the puzzle",
          body: `[Name],

I hope you enjoyed the Mindset Reset. But I have to be real with you.

Mindset alone won't make you profitable. You need a System.

The strategies we teach in the full Academy have generated consistent returns for our members.

Because you're already a customer, I'm giving you a 24h pass to upgrade at a special rate. Don't let this slip.

[Upgrade Link]

- Applecore HQ`
        },
        {
          id: "welcome-14",
          day: "Day 14 (The Dip)",
          subject: "Why most quit today (Don't be them)",
          body: `[Name],

Statistically, today is the day most new traders give up. The excitement has worn off. The reality of the work sets in.

This is "The Dip". Amateurs quit in The Dip. Professionals push through it.

I want you to look at your P&L. If it's not where you want it to be, it's not because the market is rigged. It's because you haven't mastered the process yet.

I've just uploaded a new case study in the portal: "How Alex recovered from a 20% drawdown". Go watch it. Get your head back in the game.

[Link to Case Study]

- Applecore HQ`
        },
        {
          id: "welcome-21",
          day: "Day 21 (Habit)",
          subject: "21 Days later...",
          body: `They say it takes 21 days to build a habit.

If you've been following the protocol, you should feel different today. Less anxious. More calculated.

You're no longer reacting. You're anticipating.

I want to challenge you: Post your best trade of the week in the community Discord. Let the tribe see your progress.

[Link to Discord]

Keep stacking wins.

- Applecore HQ`
        },
        {
          id: "welcome-28",
          day: "Day 28 (Pre-Renewal)",
          subject: "Your roadmap for next month",
          body: `[Name],

You're approaching the end of your first month. Most people overestimate what they can do in a month, and underestimate what they can do in a year.

Next month, we're unlocking "Level 2: Advanced Order Flow". This is where we go deep into liquidity pools and stop hunts.

It's not for beginners. But you're not a beginner anymore.

Your seat is reserved. Don't lose your momentum now. See you on the other side.

- Applecore HQ`
        },
        {
          id: "welcome-35",
          day: "Day 35 (Post-Renewal)",
          subject: "Level 2 Unlocked: Welcome back",
          body: `Boom. You made it to Month 2.

90% of traders wash out before this point. You're still standing.

As promised, I've unlocked the Advanced Order Flow module in your dashboard. This is the heavy artillery.

Treat it with respect. Let's get to work.

[Link to Module]

- Applecore HQ`
        }
      ]
    },
    {
      id: "winback",
      title: "Win-Back Sequence (Churned)",
      description: "Re-activation campaign appealing to ego and fear of missing out.",
      icon: <RefreshCw className="w-6 h-6 text-purple-500" />,
      emails: [
        {
          id: "winback-1",
          day: "Week 1",
          subject: "Did We Fail You?",
          body: `[Name],

I noticed you cancelled your subscription. I'm not here to beg you to come back.

I just want to know: Did we fail to deliver on our promise?

Reply to this email and tell me the truth. I read every response.

- Founder, Applecore`
        },
        {
          id: "winback-4",
          day: "Week 4",
          subject: "What you missed (New Update)",
          body: `[Name],

Since you left, things have moved fast.

We just released the 'Liquidity Hunter' module. Our members are using it to catch moves you're currently missing.

The market is evolving. Are you?

Check out the new module: [Link]

- Applecore HQ`
        },
        {
          id: "winback-8",
          day: "Week 8",
          subject: "One last ride?",
          body: `This is the last time I'll email you about this, [Name].

You joined us for a reason. You wanted to be a Pro. That ambition doesn't just disappear.

If you're ready to get back in the arena, here is a one-time link to rejoin at your old rate.

See you inside?

[Rejoin Link]

- Applecore HQ`
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-primary selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer group">
                <img src="/logo.png" alt="Applecore" className="h-6 w-auto brightness-0 invert transition-transform group-hover:scale-105" />
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-1">
              <Link href="/">
                <span className="px-4 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer">
                  1. Brand Guide
                </span>
              </Link>
              <Link href="/mindset-revolution">
                <span className="px-4 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer">
                  2. Ad Concept
                </span>
              </Link>
              <Link href="/digital-strategy">
                <span className="px-4 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer">
                  3. Digital Strategy
                </span>
              </Link>
            </div>
          </div>
          <Link href="/digital-strategy">
            <Button variant="ghost" size="sm" className="gap-2 text-zinc-400 hover:text-white">
              <ArrowLeft className="w-4 h-4" /> Back to Strategy
            </Button>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-32 container max-w-5xl">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Email Strategy <span className="text-primary">Playbook</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Complete scripts and templates for all automated sequences.
          </p>
        </div>

        <div className="space-y-24">
          {sequences.map((seq) => (
            <section key={seq.id} className="scroll-mt-32" id={seq.id}>
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 rounded-xl bg-zinc-900 border border-white/10">
                  {seq.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{seq.title}</h2>
                  <p className="text-zinc-400">{seq.description}</p>
                </div>
              </div>

              <div className="space-y-6">
                {seq.emails.map((email) => (
                  <div key={email.id} className="group rounded-2xl border border-white/5 bg-zinc-900/50 overflow-hidden hover:border-white/10 transition-colors">
                    <div className="p-6 border-b border-white/5 flex items-center justify-between bg-zinc-900">
                      <div className="flex items-center gap-4">
                        <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-zinc-400 border border-white/5">
                          {email.day}
                        </span>
                        <h3 className="font-medium text-white">{email.subject}</h3>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 text-zinc-500 hover:text-white"
                        onClick={() => copyToClipboard(email.body, email.id)}
                      >
                        {copiedId === email.id ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                        {copiedId === email.id ? "Copied" : "Copy"}
                      </Button>
                    </div>
                    <div className="p-6 bg-black/20">
                      <pre className="font-sans text-zinc-400 whitespace-pre-wrap leading-relaxed text-sm">
                        {email.body}
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
