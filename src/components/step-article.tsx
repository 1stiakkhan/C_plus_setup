import { useState } from "react";
import { Check, ChevronDown, Circle } from "lucide-react";
import {
  adjacent,
  STEPS,
  TRACKED_STEPS,
  type StepId,
} from "@/lib/guide-data";
import { useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";
import { CodeBlock } from "./code-block";
import { InlineText } from "./inline-text";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

function Why({ title, body }: { title: string; body: string }) {
  return (
    <details className="group rounded-lg bg-accent-soft px-4 py-1">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-3 text-sm font-medium text-accent [&::-webkit-details-marker]:hidden">
        {title}
        <ChevronDown className="size-4 shrink-0 transition-transform duration-150 group-open:rotate-180" />
      </summary>
      <p className="pb-3 text-sm text-muted">
        <InlineText text={body} />
      </p>
    </details>
  );
}

function Warn({ title, body }: { title: string; body: string }) {
  return (
    <aside className="rounded-lg bg-warn-soft px-4 py-3 text-sm text-warn">
      <div className="font-medium">{title}</div>
      <p className="mt-1">
        <InlineText text={body} />
      </p>
    </aside>
  );
}

function TroubleList({
  items,
}: {
  items: {
    tag: string;
    title: string;
    cause: string;
    fix: string;
    code?: { id: string; code: string };
  }[];
}) {
  const [q, setQ] = useState("");
  const filtered = items.filter((t) => {
    const hay = `${t.tag} ${t.title} ${t.cause} ${t.fix}`.toLowerCase();
    return hay.includes(q.trim().toLowerCase());
  });
  return (
    <div className="space-y-3">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="এরর মেসেজ দিয়ে ফিল্টার…"
        className="flex h-10 w-full rounded-md border border-line bg-raised px-3 text-sm shadow-border placeholder:text-faint"
      />
      {filtered.length === 0 ? (
        <p className="text-sm text-muted">কোনো মিল পাওয়া যায়নি।</p>
      ) : null}
      {filtered.map((t) => (
        <details key={t.title} className="group rounded-lg bg-surface px-4 py-1 shadow-border">
          <summary className="flex cursor-pointer list-none items-start gap-3 py-3 [&::-webkit-details-marker]:hidden">
            <Badge variant={t.tag === "স্লো" ? "muted" : "warn"}>{t.tag}</Badge>
            <span className="flex-1 font-medium">{t.title}</span>
            <ChevronDown className="mt-0.5 size-4 shrink-0 text-faint transition-transform duration-150 group-open:rotate-180" />
          </summary>
          <div className="space-y-2 pb-3 text-sm text-muted">
            <p>
              <span className="font-medium text-ink">কারণ: </span>
              <InlineText text={t.cause} />
            </p>
            <p>
              <span className="font-medium text-ink">সমাধান: </span>
              <InlineText text={t.fix} />
            </p>
            {t.code ? <CodeBlock code={t.code.code} /> : null}
          </div>
        </details>
      ))}
    </div>
  );
}

export function StepArticle({
  id,
  onGo,
}: {
  id: StepId;
  onGo: (id: StepId) => void;
}) {
  const doc = STEPS[id];
  const completed = useProgress((s) => s.completed);
  const checks = useProgress((s) => s.checks);
  const toggleStep = useProgress((s) => s.toggleStep);
  const setStepDone = useProgress((s) => s.setStepDone);
  const toggleCheck = useProgress((s) => s.toggleCheck);
  const { prev, next } = adjacent(id);
  const isTracked = TRACKED_STEPS.includes(id);
  const done = !!completed[id];
  const checkItems =
    doc.blocks.find((b) => b.type === "checks")?.type === "checks"
      ? (doc.blocks.find((b) => b.type === "checks") as Extract<
          (typeof doc.blocks)[number],
          { type: "checks" }
        >).items
      : [];
  const allChecked = checkItems.length > 0 && checkItems.every((c) => checks[c.id]);

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <div className="font-mono text-xs tracking-wide text-faint uppercase">{doc.kicker}</div>
        {id === "intro" ? (
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink">{doc.title}</h2>
        ) : (
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-ink">{doc.title}</h1>
        )}
        <p className="max-w-prose text-muted">
          <InlineText text={doc.blurb} />
        </p>
      </header>

      <div className="space-y-5">
        {doc.blocks.map((block, i) => {
          switch (block.type) {
            case "p":
              return (
                <p key={i} className="max-w-prose text-muted">
                  <InlineText text={block.text} />
                </p>
              );
            case "h3":
              return (
                <h2 key={i} className="font-serif text-lg font-semibold text-ink">
                  {block.text}
                </h2>
              );
            case "list":
              return block.ordered ? (
                <ol key={i} className="max-w-prose list-decimal space-y-2 pl-5 text-muted">
                  {block.items.map((item) => (
                    <li key={item}>
                      <InlineText text={item} />
                    </li>
                  ))}
                </ol>
              ) : (
                <ul key={i} className="max-w-prose list-disc space-y-2 pl-5 text-muted">
                  {block.items.map((item) => (
                    <li key={item}>
                      <InlineText text={item} />
                    </li>
                  ))}
                </ul>
              );
            case "code":
              return (
                <CodeBlock key={i} code={block.snippet.code} label={block.snippet.label} />
              );
            case "why":
              return <Why key={i} title={block.why.title} body={block.why.body} />;
            case "warn":
              return <Warn key={i} title={block.warn.title} body={block.warn.body} />;
            case "subcards":
              return (
                <div key={i} className="grid gap-3 sm:grid-cols-2">
                  {block.cards.map((card) => (
                    <div key={card.title} className="rounded-lg bg-surface p-4 shadow-border">
                      <h3 className="font-serif text-base font-semibold">{card.title}</h3>
                      <p className="mt-2 text-sm text-muted">
                        <InlineText text={card.body} />
                      </p>
                      {card.link ? (
                        <a
                          href={card.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex text-sm text-accent underline decoration-line underline-offset-2 hover:decoration-accent"
                        >
                          {card.link.label}
                        </a>
                      ) : null}
                      {card.warn ? (
                        <div className="mt-3">
                          <Warn title={card.warn.title} body={card.warn.body} />
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              );
            case "runs":
              return (
                <div key={i} className="grid gap-3 sm:grid-cols-3">
                  {block.cards.map((card) => (
                    <div key={card.key} className="rounded-lg bg-surface p-4 shadow-border">
                      <div className="font-mono text-sm text-accent">{card.key}</div>
                      <p className="mt-2 text-sm text-muted">
                        <InlineText text={card.body} />
                      </p>
                    </div>
                  ))}
                </div>
              );
            case "troubles":
              return <TroubleList key={i} items={block.items} />;
            case "sample":
              return (
                <div key={i} className="space-y-3">
                  <CodeBlock code={block.code} label={block.filename} />
                  <CodeBlock code={block.compile} label="কম্পাইল" />
                  <div className="rounded-lg bg-ok-soft px-4 py-3 text-sm text-ok">
                    <div className="font-medium">প্রত্যাশিত আউটপুট</div>
                    <pre className="mt-1 font-mono">{block.output}</pre>
                  </div>
                </div>
              );
            case "kv":
              return (
                <dl key={i} className="grid gap-3 sm:grid-cols-3">
                  {block.items.map((row) => (
                    <div key={row.k} className="rounded-lg bg-surface p-4 shadow-border">
                      <dt className="text-xs text-faint">{row.k}</dt>
                      <dd className="mt-1 text-sm text-ink">{row.v}</dd>
                    </div>
                  ))}
                </dl>
              );
            case "checks":
              return (
                <ul key={i} className="divide-y divide-line rounded-lg bg-surface shadow-border">
                  {block.items.map((item) => {
                    const on = !!checks[item.id];
                    return (
                      <li key={item.id}>
                        <label className="flex cursor-pointer items-start gap-3 px-4 py-3">
                          <input
                            type="checkbox"
                            checked={on}
                            onChange={() => toggleCheck(item.id)}
                            className="mt-1 size-4 rounded-sm border border-line accent-ok"
                          />
                          <span className={cn("text-sm", on ? "text-faint line-through" : "text-ink")}>
                            <InlineText text={item.label} />
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              );
            default:
              return null;
          }
        })}
      </div>

      {id === "checklist" && allChecked ? (
        <div className="flex items-start gap-3 rounded-lg bg-ok-soft px-4 py-3 text-ok">
          <Check className="mt-0.5 size-5 shrink-0" />
          <p className="text-sm font-medium">
            পুরো সেটআপ শেষ। এখন C++ আর Competitive Programming চর্চায় মন দিতে পারো।
          </p>
        </div>
      ) : null}

      <div className="flex flex-col gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
        {prev ? (
          <Button variant="ghost" onClick={() => onGo(prev)}>
            ← {STEPS[prev].kicker}
          </Button>
        ) : (
          <span />
        )}
        <div className="flex flex-wrap items-center gap-2">
          {isTracked ? (
            <Button
              variant={done ? "soft" : "outline"}
              onClick={() => {
                if (!done && next) {
                  setStepDone(id, true);
                  onGo(next);
                } else {
                  toggleStep(id);
                }
              }}
            >
              {done ? (
                <>
                  <Check className="size-4" /> সম্পন্ন
                </>
              ) : (
                <>
                  <Circle className="size-4" /> {next ? "সম্পন্ন করে এগোও" : "সম্পন্ন করেছি"}
                </>
              )}
            </Button>
          ) : null}
          {next ? (
            <Button onClick={() => onGo(next)}>{doc.nextLabel ?? "পরবর্তী ধাপ"}</Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
