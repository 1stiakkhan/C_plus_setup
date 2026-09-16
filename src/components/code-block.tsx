import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export async function copyText(text: string) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    return true;
  } catch {
    return false;
  }
}

export function CodeBlock({
  code,
  label,
  className,
}: {
  code: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    const ok = await copyText(code);
    if (ok) {
      setCopied(true);
      toast.success("ক্লিপবোর্ডে কপি হয়েছে");
      window.setTimeout(() => setCopied(false), 1600);
    }
  }

  return (
    <div className={cn("overflow-hidden rounded-lg bg-code shadow-border", className)}>
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-3 py-2">
        <span className="truncate font-mono text-xs text-code-muted">{label ?? "command"}</span>
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex h-8 items-center gap-1.5 rounded-sm px-2 font-mono text-xs text-code-muted transition-colors duration-150 hover:bg-white/5 hover:text-code-fg"
          aria-label="কপি"
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          {copied ? "কপি হয়েছে" : "কপি"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-code-fg">
        <code>{code}</code>
      </pre>
    </div>
  );
}
