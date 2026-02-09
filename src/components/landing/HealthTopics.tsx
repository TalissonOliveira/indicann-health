"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const WA_LINK = "https://wa.me/5511989929987";

const topics = [
  { value: "alcoholismo", label: "Alcoolismo" },
  { value: "alzheimer", label: "Alzheimer" },
  { value: "anorexia", label: "Anorexia" },
  { value: "ansiedade", label: "Ansiedade" },
  { value: "autismo", label: "Autismo" },
  { value: "bipolaridade", label: "Bipolaridade" },
  { value: "crohn", label: "Crohn" },
  { value: "depressao", label: "Depressão" },
  { value: "diabetes", label: "Diabetes" },
  { value: "dor-cronica", label: "Dor crônica" },
  { value: "dores", label: "Dores" },
  { value: "epilepsia", label: "Epilepsia" },
  { value: "enxaqueca", label: "Enxaqueca" },
  { value: "fibromialgia", label: "Fibromialgia" },
  { value: "insonia", label: "Insônia" },
  { value: "intestino-irritavel", label: "Intestino irritável" },
  { value: "odontologicos", label: "Odontológicos" },
  { value: "tabagismo", label: "Tabagismo" },
  { value: "tdah", label: "TDAH" },
  { value: "parkinson", label: "Parkinson" },
];

const buildWhatsAppHref = (baseLink: string, text: string) => {
  const sep = baseLink.includes("?") ? "&" : "?";
  return `${baseLink}${sep}text=${encodeURIComponent(text)}`;
};

const HealthTopics = () => {
  const [selected, setSelected] = React.useState<string[]>([]);

  const topicLabelByValue = React.useMemo(() => {
    return Object.fromEntries(topics.map((t) => [t.value, t.label] as const));
  }, []);

  const selectedLabels = React.useMemo(() => {
    return selected
      .map((v) => topicLabelByValue[v])
      .filter(Boolean)
      .join(", ");
  }, [selected, topicLabelByValue]);

  const message = `Oi! Gostaria de agendar uma consulta. Sintomas: ${selectedLabels}`;
  const waHref = buildWhatsAppHref(WA_LINK, message);

  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-wide text-foreground mb-4">
            O que você está buscando melhorar?
          </h2>
          <p className="text-lg text-muted-foreground">
            Selecione um ou mais temas para direcionarmos sua avaliação e o próximo passo do seu
            acompanhamento.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <ToggleGroup
            type="multiple"
            value={selected}
            onValueChange={setSelected}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            {topics.map((t) => (
              <ToggleGroupItem
                key={t.value}
                value={t.value}
                aria-label={t.label}
                className="
                  w-full justify-center rounded-2xl
                  border bg-transparent px-5 py-4
                  text-[15px] font-medium text-foreground
                  shadow-sm transition
                  hover:bg-muted/50
                  focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                  data-[state=on]:bg-muted
                  data-[state=on]:border-ring/30
                  data-[state=on]:shadow-none
                "
              >
                {t.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>

          <div className="mt-10 flex justify-center min-h-12">
            <Button
              asChild
              size="lg"
              className={
                selected.length > 0
                  ? "visible rounded-lg px-10 text-base font-semibold w-full sm:w-auto"
                  : "invisible rounded-lg px-10 text-base font-semibold w-full sm:w-auto"
              }
            >
              <a href={waHref} target="_blank" rel="noopener noreferrer">
                Agendar Consulta
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthTopics;
