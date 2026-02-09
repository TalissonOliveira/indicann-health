import { Button } from "@/components/ui/button";
import { WA_LINK } from "@/lib/constants";
import { Heart, Users, Shield } from "lucide-react";

const trustBadges = [
  { icon: Heart, label: "Atendimento humanizado" },
  { icon: Users, label: "Orientação individualizada" },
  { icon: Shield, label: "Acolhimento e privacidade" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 md:pb-24">
      {/* Background decoration */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-muted/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-wide text-foreground">
                Tratamento natural com canabinoides e acompanhamento profissional e acolhedor
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Entenda se o tratamento é adequado para você e tenha um plano
                personalizado com orientação especializada.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="rounded-lg px-8 text-base font-semibold"
              >
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  Agendar Consulta
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-lg px-8 text-base font-semibold border-secondary text-foreground hover:bg-muted"
              >
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  Tirar dúvidas no WhatsApp
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 bg-muted/60 px-4 py-2 rounded-full"
                >
                  <badge.icon className="w-4 h-4 text-secondary" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-foreground/80">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/bg.jpg"
                alt="Cuidado e acolhimento em saúde"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-muted rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/30 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
