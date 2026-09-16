import { QUICK_REF } from "@/lib/guide-data";
import { copyText } from "./code-block";
import { Button } from "./ui/button";

function Row({ k, v, copy }: { k: string; v: string; copy?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-3 py-2">
      <div className="min-w-0">
        <div className="text-xs text-faint">{k}</div>
        <div className="truncate font-mono text-sm text-ink">{v}</div>
      </div>
      {copy ? (
        <Button
          type="button"
          size="sm"
          variant="ghost"
          className="shrink-0"
          onClick={() => copyText(v)}
        >
          কপি
        </Button>
      ) : null}
    </div>
  );
}

export function QuickRefBody() {
  return (
    <div className="space-y-6">
      <section>
        <h3 className="mb-1 font-serif text-sm font-semibold">পাথ</h3>
        <div className="divide-y divide-line">
          {QUICK_REF.paths.map((row) => (
            <Row key={row.k} k={row.k} v={row.v} copy />
          ))}
        </div>
      </section>
      <section>
        <h3 className="mb-1 font-serif text-sm font-semibold">শর্টকাট</h3>
        <div className="divide-y divide-line">
          {QUICK_REF.shortcuts.map((row) => (
            <Row key={row.k} k={row.k} v={row.v} />
          ))}
        </div>
      </section>
      <section>
        <h3 className="mb-1 font-serif text-sm font-semibold">কম্পাইলার ফ্ল্যাগ</h3>
        <div className="divide-y divide-line">
          {QUICK_REF.flags.map((row) => (
            <Row key={row.k} k={row.k} v={row.v} copy />
          ))}
        </div>
      </section>
      <section>
        <h3 className="mb-1 font-serif text-sm font-semibold">জাজ</h3>
        <div className="divide-y divide-line">
          {QUICK_REF.judge.map((row) => (
            <Row key={row.k} k={row.k} v={row.v} />
          ))}
        </div>
      </section>
    </div>
  );
}
