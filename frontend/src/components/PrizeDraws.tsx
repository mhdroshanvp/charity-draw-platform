import { Star, Zap, Award } from "lucide-react";

const prizeTiers = [
  {
    icon: Star,
    matches: 5,
    title: "Jackpot",
    percentage: "40%",
    description: "Match all 5 numbers and claim the grand jackpot prize pool.",
    highlight: true,
  },
  {
    icon: Zap,
    matches: 4,
    title: "Super Prize",
    percentage: "35%",
    description: "Match 4 numbers for a substantial share of the prize pool.",
    highlight: false,
  },
  {
    icon: Award,
    matches: 3,
    title: "Winner",
    percentage: "25%",
    description: "Match 3 numbers and still take home a fantastic prize.",
    highlight: false,
  },
];

export function PrizeDraws() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Prize Draw Tiers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Multiple ways to win every month. The more you play, the better your
            chances.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {prizeTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                tier.highlight
                  ? "bg-gradient-to-b from-primary/20 to-card border-2 border-primary glow-green-strong"
                  : "bg-card border border-border hover:border-primary/30"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wider">
                  Top Prize
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  tier.highlight ? "bg-primary/30" : "bg-primary/10"
                }`}
              >
                <tier.icon
                  className={`w-8 h-8 ${
                    tier.highlight ? "text-primary" : "text-primary"
                  }`}
                />
              </div>

              {/* Match indicator */}
              <div className="flex items-center gap-2 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i < tier.matches ? "bg-primary animate-glow" : "bg-border"
                    }`}
                  />
                ))}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-1">
                {tier.title}
              </h3>
              <div className="text-4xl font-bold text-primary mb-4">
                {tier.percentage}
              </div>
              <p className="text-muted-foreground">{tier.description}</p>

              {/* Match count */}
              <div className="mt-6 pt-6 border-t border-border">
                <span className="text-sm text-muted-foreground">
                  Match{" "}
                  <span className="text-foreground font-semibold">
                    {tier.matches} numbers
                  </span>{" "}
                  to win
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Prize pool percentages are distributed among all winners in each tier.
        </p>
      </div>
    </section>
  );
}
