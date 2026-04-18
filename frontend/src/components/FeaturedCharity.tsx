import { Heart, ArrowRight } from "lucide-react";

export function FeaturedCharity() {
  return (
    <section id="charities" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Making an Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Charity
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every subscription supports incredible organizations making real
            change in the world.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/30 transition-colors">
            <div className="grid md:grid-cols-2">
              {/* Image placeholder */}
              <div className="relative aspect-video md:aspect-auto bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-12 h-12 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-sm">
                    Charity Partner
                  </span>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary/20 rounded-full text-xs text-primary font-medium">
                  Featured
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Golf for Good Foundation
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The Golf for Good Foundation brings the joy of golf to
                  underserved communities, providing equipment, coaching, and
                  access to courses for young people who might never have the
                  opportunity otherwise. Your subscription directly funds
                  programs across 15 communities nationwide.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div>
                    <div className="text-xl font-bold text-primary">5,000+</div>
                    <div className="text-xs text-muted-foreground">
                      Youth Reached
                    </div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-primary">15</div>
                    <div className="text-xs text-muted-foreground">
                      Communities
                    </div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-primary">$250K</div>
                    <div className="text-xs text-muted-foreground">
                      Raised
                    </div>
                  </div>
                </div>

                <button className="group inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary font-semibold rounded-xl hover:bg-primary/20 transition-all self-start">
                  View Charity
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={18}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
