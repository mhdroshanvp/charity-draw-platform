import { CreditCard, Target, Trophy } from "lucide-react";

const steps = [
  {
    icon: CreditCard,
    step: "01",
    title: "Subscribe to a Plan",
    description:
      "Choose a subscription plan that works for you. Monthly or annual options available with instant access to all features.",
  },
  {
    icon: Target,
    step: "02",
    title: "Enter Your Golf Scores",
    description:
      "Log your golf scores each month through our simple interface. Track your progress and see how you compare with others.",
  },
  {
    icon: Trophy,
    step: "03",
    title: "Win in the Monthly Draw",
    description:
      "Every score entry gets you automatic entry into our monthly prize draw. More rounds played, more chances to win!",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to start playing, winning, and making a
            difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              {/* Step number */}
              <div className="absolute -top-4 left-8 px-3 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                {item.step}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {/* Decorative line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
