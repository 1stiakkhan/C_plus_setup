import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { GuideApp, parseStep } from "@/components/guide-app";
import type { StepId } from "@/lib/guide-data";

type Search = { step?: string };

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    step: typeof search.step === "string" ? search.step : undefined,
  }),
  component: Home,
});

function Home() {
  const { step: raw } = Route.useSearch();
  const navigate = useNavigate({ from: "/" });
  const step = parseStep(raw);

  function onStep(id: StepId) {
    void navigate({
      search: id === "intro" ? {} : { step: id },
      replace: true,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return <GuideApp step={step} onStep={onStep} />;
}
