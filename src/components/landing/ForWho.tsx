import { Sparkles, UserCheck, HeartHandshake } from "lucide-react";

const forWhoItems = [
  {
    icon: Sparkles,
    text: "Busca mais qualidade de vida e bem-estar",
  },
  {
    icon: UserCheck,
    text: "Quer uma avaliação individualizada para o seu caso",
  },
  {
    icon: HeartHandshake,
    text: "Precisa de um acompanhamento próximo durante o processo",
  },
];

const ForWho = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-wide text-foreground mb-4">
            Para quem é
          </h2>
          <p className="text-lg text-muted-foreground">
            O acompanhamento com canabinoides medicinais pode ser indicado para você se:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {forWhoItems.map((item, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-secondary" strokeWidth={1.5} />
              </div>
              <p className="text-lg font-medium text-card-foreground leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWho;
