import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArrowLeft, Mail, Copy, Check, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function EmailStrategy() {
  const [location] = useLocation();
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedEmails, setExpandedEmails] = useState<Record<string, boolean>>({});

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleEmail = (id: string) => {
    setExpandedEmails(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const sequences = [
    {
      id: "nurturing",
      title: "Nurturing Sequence (Cold Leads)",
      description: "Designed to build authority and shift beliefs before asking for a sale.",
      emails: [
        {
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
          day: "Day 3",
          subject: "Why Your Indicators Are Lying to You",
          body: `[Name],

You have 5 indicators on your chart. RSI, MACD, Bollinger Bands...

And you're still losing money. Why?

Because indicators are lagging. They tell you what happened, not what IS happening.

The banks don't use RSI. They use Order Flow.

Tomorrow, I'll show you how to spot where the big money is hiding.

Stay sharp.

- Applecore HQ`
        },
        {
          day: "Day 5",
          subject: "The Institutional Edge (Open Now)",
          body: `This is it, [Name].

You've seen the difference between gambling and trading.
You know why indicators fail.

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
      emails: [
        {
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
          day: "Day 2",
          subject: "You're missing 90% of the puzzle",
          body: `[Name],

I hope you enjoyed the Mindset Reset.

But I have to be real with you. Mindset alone won't make you profitable. You need a System.

The strategies we teach in the full Academy have generated consistent returns for our members.

Because you're already a customer, I'm giving you a 24h pass to upgrade at a special rate.

Don't let this slip.

[Upgrade Link]

- Applecore HQ`
        },
        {
          day: "Day 14 (The Dip)",
          subject: "Why most quit today (Don't be them)",
          body: `[Name],

Statistically, today is the day most new traders give up.

The excitement has worn off. The reality of the work sets in.
This is "The Dip".

Amateurs quit in The Dip. Professionals push through it.

I want you to look at your P&L. If it's not where you want it to be, it's not because the market is rigged. It's because you haven't mastered the process yet.

I've just uploaded a new case study in the portal: "How Alex recovered from a 20% drawdown".

Go watch it. Get your head back in the game.

[Link to Case Study]

- Applecore HQ`
        },
        {
          day: "Day 21 (Habit)",
          subject: "21 Days later...",
          body: `They say it takes 21 days to build a habit.

If you've been following the protocol, you should feel different today.
Less anxious. More calculated.

You're no longer reacting. You're anticipating.

I want to challenge you: Post your best trade of the week in the community Discord.
Let the tribe see your progress.

[Link to Discord]

Keep stacking wins.

- Applecore HQ`
        },
        {
          day: "Day 28 (Pre-Renewal)",
          subject: "Your roadmap for next month",
          body: `[Name],

You're approaching the end of your first month.
Most people overestimate what they can do in a month, and underestimate what they can do in a year.

Next month, we're unlocking "Level 2: Advanced Order Flow".
This is where we go deep into liquidity pools and stop hunts.

It's not for beginners. But you're not a beginner anymore.

Your seat is reserved. Don't lose your momentum now.

See you on the other side.

- Applecore HQ`
        },
        {
          day: "Day 35 (Post-Renewal)",
          subject: "Level 2 Unlocked: Welcome back",
          body: `Boom. You made it to Month 2.

90% of traders wash out before this point. You're still standing.

As promised, I've unlocked the Advanced Order Flow module in your dashboard.
This is the heavy artillery.

Treat it with respect.

Let's get to work.

[Link to Module]

- Applecore HQ`
        }
      ]
    },
    {
      id: "winback",
      title: "Win-Back Sequence (Churned)",
      description: "Re-activation campaign appealing to ego and fear of missing out.",
      emails: [
        {
          day: "Week 1",
          subject: "Did We Fail You?",
          body: `[Name],

I noticed you cancelled your subscription. I'm not here to beg you to come back.

I just want to know: Did we fail to deliver on our promise?

Reply to this email and tell me the truth. I read every response.

- Founder, Applecore`
        },
        {
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
          day: "Week 8",
          subject: "One last ride?",
          body: `This is the last time I'll email you about this, [Name].

You joined us for a reason. You wanted to be a Pro.

That ambition doesn't just disappear.

If you're ready to get back in the arena, here is a one-time link to rejoin at your old rate.

See you inside?

[Rejoin Link]

- Applecore HQ`
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black">
      {/* Global Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold tracking-tighter text-primary">
              Applecore
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
              <Link href="/" className={location === "/" ? "text-white" : "hover:text-white transition-colors"}>Brand Guide</Link>
              <Link href="/mindset-revolution" className={location === "/mindset-revolution" ? "text-white" : "hover:text-white transition-colors"}>Ad Concept</Link>
              <Link href="/digital-strategy" className={location === "/digital-strategy" || location === "/email-strategy" ? "text-white" : "hover:text-white transition-colors"}>Strategy</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex border-white/10 hover:bg-white/5 hover:text-white">
              Client Login
            </Button>
            <Button className="bg-primary text-black hover:bg-primary/90 font-bold">
              Download Assets
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20 container max-w-4xl">
        <div className="mb-12">
          <Link href="/digital-strategy" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Strategy
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Email Strategy <span className="text-primary">Playbook</span>
          </h1>
          <p className="text-xl text-gray-400">
            Complete scripts and templates for all automated sequences.
          </p>
        </div>

        <div className="space-y-16">
          {sequences.map((seq) => (
            <section key={seq.id} className="scroll-mt-24" id={seq.id}>
              <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                <div className="p-3 rounded bg-white/5 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{seq.title}</h2>
                  <p className="text-gray-400 text-sm">{seq.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                {seq.emails.map((email, idx) => {
                  const emailId = `${seq.id}-${idx}`;
                  const isExpanded = expandedEmails[emailId];

                  return (
                    <div key={idx} className="bg-card border border-white/5 rounded-xl overflow-hidden transition-all duration-200 hover:border-white/10">
                      <div 
                        className="bg-white/5 px-6 py-4 flex items-center justify-between cursor-pointer select-none"
                        onClick={() => toggleEmail(emailId)}
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-sm text-primary font-bold w-24">{email.day}</span>
                          <span className="text-white font-medium">{email.subject}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-400 hover:text-white h-8"
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(email.subject + "\n\n" + email.body, emailId);
                            }}
                          >
                            {copiedId === emailId ? (
                              <Check className="h-4 w-4 mr-2 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4 mr-2" />
                            )}
                            Copy
                          </Button>
                          {isExpanded ? (
                            <ChevronUp className="h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                      </div>
                      
                      <div className={cn(
                        "grid transition-all duration-200 ease-in-out",
                        isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}>
                        <div className="overflow-hidden">
                          <div className="p-6 border-t border-white/5 bg-black/20">
                            <div className="space-y-4">
                              <div>
                                <span className="text-xs uppercase tracking-wider text-gray-500 font-bold">Email Body</span>
                                <div className="mt-2 text-gray-300 whitespace-pre-line font-mono text-sm leading-relaxed bg-black/20 p-4 rounded border border-white/5">
                                  {email.body}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="py-8 border-t border-white/10 mt-20">
        <div className="container text-center text-gray-500 text-sm">
          <p>&copy; 2024 Applecore. Confidential Strategy Document.</p>
        </div>
      </footer>
    </div>
  );
}
