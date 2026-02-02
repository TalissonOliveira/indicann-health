import { Quote } from "lucide-react";

const testimonials = [
  {
    initial: "A.",
    text: "Fui acolhido(a) e tive orientação com clareza. Me senti seguro(a) durante todo o processo.",
  },
  {
    initial: "M.",
    text: "Senti confiança no acompanhamento desde o primeiro contato. A equipe é muito atenciosa e profissional.",
  },
  {
    initial: "R.",
    text: "O atendimento foi humano e cuidadoso. Finalmente encontrei um lugar onde me sinto respeitado(a).",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-wide text-foreground mb-4">
            Histórias reais, com respeito e discrição
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça a experiência de quem já passou pelo nosso cuidado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-xl shadow-sm relative"
            >
              <Quote
                className="w-10 h-10 text-secondary/30 absolute top-6 right-6"
                strokeWidth={1}
              />
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading text-xl font-semibold mb-6">
                {testimonial.initial}
              </div>
              <p className="text-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Depoimentos reais de pacientes. Nomes preservados para garantir privacidade.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
