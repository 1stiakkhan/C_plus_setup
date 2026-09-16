import { useEffect, useMemo, useState } from "react";
import {
  BookOpen,
  Check,
  Moon,
  PanelRight,
  RotateCcw,
  Search,
  Sun,
} from "lucide-react";
import {
  adjacent,
  isStepId,
  NAV,
  STEP_IDS,
  STEPS,
  TOTAL_MINUTES,
  TRACKED_STEPS,
  type StepId,
} from "@/lib/guide-data";
import { applyTheme, useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";
import { CommandPalette } from "./command-palette";
import { QuickRefBody } from "./quick-ref";
import { StepArticle } from "./step-article";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";

function Logo() {
  return (
    <svg viewBox="0 0 32 32" className="size-8 text-accent" aria-hidden="true">
      <rect x="2" y="2" width="28" height="28" rx="8" fill="currentColor" />
      <path
        d="M12 10 L7 16 L12 22"
        fill="none"
        stroke="var(--accent-fg)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 10 L23 16 L18 22"
        fill="none"
        stroke="var(--accent-fg)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GuideApp({
  step,
  onStep,
}: {
  step: StepId;
  onStep: (id: StepId) => void;
}) {
  const completed = useProgress((s) => s.completed);
  const theme = useProgress((s) => s.theme);
  const setTheme = useProgress((s) => s.setTheme);
  const reset = useProgress((s) => s.reset);
  const [searchOpen, setSearchOpen] = useState(false);
  const [refOpen, setRefOpen] = useState(false);
  const [resetOpen, setResetOpen] = useState(false);

  useEffect(() => {
    const unsub = useProgress.persist.onFinishHydration((state) => {
      applyTheme(state.theme);
    });
    void useProgress.persist.rehydrate();
    return unsub;
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      const typing =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);
      if (typing) return;
      if (e.key === "[" || e.key === "ArrowLeft") {
        const prev = adjacent(step).prev;
        if (prev) onStep(prev);
      }
      if (e.key === "]" || e.key === "ArrowRight") {
        const next = adjacent(step).next;
        if (next) onStep(next);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step, onStep]);

  const doneCount = TRACKED_STEPS.filter((id) => completed[id]).length;
  const pct = Math.round((doneCount / TRACKED_STEPS.length) * 100);
  const remainingMin = useMemo(
    () =>
      NAV.filter((n) => TRACKED_STEPS.includes(n.id) && !completed[n.id]).reduce(
        (sum, n) => sum + n.minutes,
        0,
      ),
    [completed],
  );
  const current = NAV.find((n) => n.id === step) ?? NAV[0];

  return (
    <div className="min-h-dvh bg-canvas text-ink">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-raised focus:px-3 focus:py-2"
      >
        কন্টেন্টে যান
      </a>

      <header className="sticky top-0 z-30 border-b border-line bg-canvas/90 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-4">
          <div className="flex min-w-0 items-center gap-2.5">
            <Logo />
            <div className="min-w-0">
              <div className="truncate font-serif text-base font-semibold leading-tight">
                Compiler Desk
              </div>
              <div className="hidden truncate font-mono text-xs text-faint sm:block">
                VS Code · C++ · Windows
              </div>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <Button variant="ghost" size="sm" onClick={() => setSearchOpen(true)}>
              <Search className="size-4" />
              <span className="hidden sm:inline">সার্চ</span>
              <kbd className="hidden rounded-sm border border-line px-1 font-mono text-xs text-faint lg:inline">
                Ctrl+K
              </kbd>
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              className="xl:hidden"
              aria-label="রেফারেন্স"
              onClick={() => setRefOpen(true)}
            >
              <PanelRight className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label={theme === "dark" ? "লাইট মোড" : "ডার্ক মোড"}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <span className="relative size-4">
                <Sun
                  className={cn(
                    "absolute inset-0 size-4 transition-[opacity,transform,filter] duration-300",
                    theme === "dark" ? "scale-100 opacity-100 blur-0" : "scale-25 opacity-0 blur-sm",
                  )}
                />
                <Moon
                  className={cn(
                    "absolute inset-0 size-4 transition-[opacity,transform,filter] duration-300",
                    theme === "light" ? "scale-100 opacity-100 blur-0" : "scale-25 opacity-0 blur-sm",
                  )}
                />
              </span>
            </Button>
          </div>
        </div>
        <div className="h-1 bg-surface">
          <div
            className="h-full bg-accent transition-[width] duration-300 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row">
        <nav
          className="border-b border-line lg:sticky lg:top-header lg:h-panel lg:w-56 lg:shrink-0 lg:overflow-y-auto lg:border-r lg:border-b-0"
          aria-label="ধাপ"
        >
          <div className="flex gap-1 overflow-x-auto px-3 py-2 lg:flex-col lg:overflow-visible lg:px-3 lg:py-5">
            {NAV.map((item) => {
              const active = item.id === step;
              const isDone = !!completed[item.id];
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onStep(item.id)}
                  aria-current={active ? "step" : undefined}
                  className={cn(
                    "flex min-h-11 shrink-0 items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm transition-colors duration-150",
                    active ? "bg-accent-soft text-accent" : "text-muted hover:bg-surface hover:text-ink",
                  )}
                >
                  <span
                    className={cn(
                      "inline-flex size-6 items-center justify-center rounded-full border font-mono text-xs",
                      isDone
                        ? "border-ok bg-ok text-ok-fg"
                        : active
                          ? "border-accent text-accent"
                          : "border-line text-faint",
                    )}
                  >
                    {isDone ? <Check className="size-3" /> : item.pad}
                  </span>
                  <span className="hidden lg:inline">{item.label}</span>
                  <span className="lg:hidden">{item.short}</span>
                </button>
              );
            })}
          </div>
        </nav>

        <main id="content" className="min-w-0 flex-1 px-4 py-8 sm:px-8">
          {step === "intro" ? (
            <section className="mb-8 rounded-xl bg-surface p-6 shadow-border sm:p-8">
              <div className="font-mono text-xs text-faint">সেটআপ গাইড · C/C++ · VS Code</div>
              <h1 className="mt-2 max-w-xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                VS Code-এ C++ সেটআপ — শূন্য থেকে শুরু
              </h1>
              <p className="mt-3 max-w-prose text-muted">
                Competitive Programming-এর প্রথম ধাপ: কম্পিউটারে একটা কাজ-করা C++ পরিবেশ।
                অগ্রগতি এখানেই সেভ থাকে, কমান্ড এক ক্লিকে কপি হয়, আর সমস্যা হলে সার্চ করে সমাধান পাবে।
              </p>
              <dl className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg bg-raised p-3 shadow-border">
                  <dt className="text-xs text-faint">ধাপ</dt>
                  <dd className="font-mono text-lg tabular-nums">
                    {doneCount}/{TRACKED_STEPS.length}
                  </dd>
                </div>
                <div className="rounded-lg bg-raised p-3 shadow-border">
                  <dt className="text-xs text-faint">বাকি সময়</dt>
                  <dd className="font-mono text-lg tabular-nums">{remainingMin} মি</dd>
                </div>
                <div className="rounded-lg bg-raised p-3 shadow-border">
                  <dt className="text-xs text-faint">মোট</dt>
                  <dd className="font-mono text-lg tabular-nums">{TOTAL_MINUTES} মি</dd>
                </div>
              </dl>
            </section>
          ) : (
            <div className="mb-6 flex flex-wrap items-center gap-2 text-xs text-faint">
              <BookOpen className="size-3.5" />
              <span>
                ধাপ {STEP_IDS.indexOf(step) + 1} / {STEP_IDS.length}
              </span>
              <span aria-hidden="true">·</span>
              <span>{current.minutes} মিনিট</span>
            </div>
          )}
          <StepArticle id={step} onGo={onStep} />
        </main>

        <aside className="hidden w-64 shrink-0 border-l border-line xl:block">
          <div className="sticky top-header h-panel overflow-y-auto px-4 py-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-serif text-sm font-semibold">অগ্রগতি</h2>
              <button
                type="button"
                onClick={() => setResetOpen(true)}
                className="inline-flex items-center gap-1 text-xs text-faint hover:text-warn"
              >
                <RotateCcw className="size-3" />
                রিসেট
              </button>
            </div>
            <p className="mb-6 font-mono text-sm tabular-nums text-muted">
              {doneCount} / {TRACKED_STEPS.length} ধাপ · {pct}%
            </p>
            <h2 className="mb-3 font-serif text-sm font-semibold">দ্রুত রেফারেন্স</h2>
            <QuickRefBody />
          </div>
        </aside>
      </div>

      <footer className="border-t border-line px-4 py-6 text-center text-sm text-faint">
        কোনো ধাপে আটকে গেলে এরর মেসেজটা সার্চ করো — ধাপ ৭-এ সাধারণ সমস্যাগুলোর সমাধান আছে।
      </footer>

      <CommandPalette open={searchOpen} onOpenChange={setSearchOpen} onGo={onStep} />

      <Dialog open={refOpen} onOpenChange={setRefOpen}>
        <DialogContent className="max-h-sheet overflow-y-auto">
          <DialogTitle>দ্রুত রেফারেন্স</DialogTitle>
          <DialogDescription className="mb-4">
            পাথ, শর্টকাট আর কম্পাইলার ফ্ল্যাগ — সবসময় হাতের কাছে।
          </DialogDescription>
          <QuickRefBody />
          <div className="mt-6 flex justify-end">
            <Button variant="warn" size="sm" onClick={() => setResetOpen(true)}>
              প্রোগ্রেস রিসেট
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={resetOpen} onOpenChange={setResetOpen}>
        <DialogContent>
          <DialogTitle>সব প্রোগ্রেস মুছবে?</DialogTitle>
          <DialogDescription>
            ধাপের টিক আর চেকলিস্ট মুছে যাবে। কমান্ড বা কনটেন্ট থাকবে।
          </DialogDescription>
          <div className="mt-5 flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setResetOpen(false)}>
              থাক
            </Button>
            <Button
              variant="warn"
              onClick={() => {
                reset();
                setResetOpen(false);
              }}
            >
              মুছে ফেলো
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export function parseStep(value: unknown): StepId {
  return isStepId(typeof value === "string" ? value : undefined) ? (value as StepId) : "intro";
}
