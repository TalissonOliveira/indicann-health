import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Como funciona a consulta?",
    answer:
      "A consulta é realizada de forma individual e acolhedora. Você conversa com nossos profissionais sobre seu histórico de saúde, expectativas e dúvidas. A partir disso, avaliamos se a modulação do sistema endocanabinoide pode ser indicada para o seu caso.",
  },
  {
    question: "Preciso de acompanhamento?",
    answer:
      "Sim, o acompanhamento é fundamental para garantir que o tratamento seja eficaz e seguro. Nossa equipe estará ao seu lado durante todo o processo, fazendo ajustes quando necessário.",
  },
  {
    question: "O atendimento é confidencial?",
    answer:
      "Absolutamente. Todas as suas informações são tratadas com total sigilo e respeito à sua privacidade. Seguimos rigorosos protocolos de confidencialidade.",
  },
  {
    question: "Como agendar?",
    answer:
      "O agendamento é simples e rápido. Basta entrar em contato conosco pelo WhatsApp e nossa equipe irá ajudá-lo(a) a encontrar o melhor horário para sua consulta.",
  },
  {
    question: "Posso tirar dúvidas antes?",
    answer:
      "Claro! Estamos disponíveis para esclarecer todas as suas dúvidas antes de você decidir agendar. Entre em contato pelo WhatsApp e converse com nossa equipe.",
  },
  {
    question: "Quanto tempo leva para ser atendido?",
    answer:
      "Buscamos oferecer o atendimento mais ágil possível. Após o contato inicial, geralmente conseguimos agendar sua consulta em poucos dias, dependendo da disponibilidade.",
  },
];

const FAQ = () => {
  return (
    <section id="duvidas" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-wide text-foreground mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre nosso atendimento.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-muted/50 rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 text-[16px] leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
