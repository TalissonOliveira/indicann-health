import { Button } from "@/components/ui/button";
import { WA_LINK } from "@/lib/constants";
import { MessageSquare, Stethoscope, FileCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Agende pelo WhatsApp",
    description:
      "Entre em contato conosco e escolha o melhor horário para sua consulta.",
  },
  {
    number: "02",
    icon: Stethoscope,
    title: "Consulta e avaliação do seu caso",
    description:
      "Converse com nossos profissionais e receba uma avaliação completa e individualizada.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Plano e acompanhamento",
    description:
      "Receba um plano de cuidado personalizado e conte com suporte contínuo.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Steps */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-wide text-foreground mb-4">
              Como funciona
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Um processo simples e acolhedor, pensado para você.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center shrink-0">
                      <step.icon className="w-6 h-6 text-secondary" strokeWidth={1.5} />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-px h-full bg-border mt-4" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8">
                    <span className="text-xs font-semibold text-secondary tracking-wider">
                      PASSO {step.number}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mt-1 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="text-center">
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-card-foreground mb-4">
                Pronto para dar o primeiro passo?
              </h3>
              <p className="text-muted-foreground mb-8">
                Entre em contato conosco pelo WhatsApp e agende sua consulta de
                forma rápida e prática.
              </p>
              <Button
                asChild
                size="lg"
                className="rounded-lg px-10 text-base font-semibold w-full sm:w-auto"
              >
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  Agendar Consulta
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
