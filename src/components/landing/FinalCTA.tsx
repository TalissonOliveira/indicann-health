import { Button } from "@/components/ui/button";
import { WA_LINK } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide mb-6">
            Pronto(a) para conversar com a gente?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Chame no WhatsApp e agende sua consulta.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-lg px-10 py-6 text-lg font-semibold bg-background text-foreground hover:bg-background/90"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Consulta
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
