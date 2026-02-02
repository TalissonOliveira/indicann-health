import {
  Heart,
  MessageCircle,
  RefreshCw,
  ClipboardList,
  Lock,
  HelpCircle,
} from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Acolhimento e escuta",
    description: "Você será ouvido(a) com atenção e respeito em cada etapa.",
  },
  {
    icon: MessageCircle,
    title: "Orientação clara e sem julgamento",
    description: "Informações transparentes para você tomar decisões conscientes.",
  },
  {
    icon: RefreshCw,
    title: "Acompanhamento contínuo",
    description: "Suporte durante todo o processo de tratamento.",
  },
  {
    icon: ClipboardList,
    title: "Plano de cuidado personalizado",
    description: "Cada pessoa é única e merece um cuidado sob medida.",
  },
  {
    icon: Lock,
    title: "Privacidade e respeito",
    description: "Suas informações são tratadas com total confidencialidade.",
  },
  {
    icon: HelpCircle,
    title: "Suporte para suas dúvidas",
    description: "Estamos disponíveis para esclarecer qualquer questão.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-wide text-foreground mb-4">
            Um cuidado que olha para você por inteiro
          </h2>
          <p className="text-lg text-muted-foreground">
            Nosso compromisso é oferecer uma experiência de cuidado completa e humanizada.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-secondary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
