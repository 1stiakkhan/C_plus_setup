import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { FileCode2, Hash, Search, Terminal } from "lucide-react";
import { COMMANDS, NAV, STEPS, TROUBLES, type StepId } from "@/lib/guide-data";
import { copyText } from "./code-block";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";

export function CommandPalette({
  open,
  onOpenChange,
  onGo,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onGo: (id: StepId) => void;
}) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showClose={false}
        className="top-20 -translate-y-0 overflow-hidden p-0"
      >
        <DialogTitle className="sr-only">সার্চ</DialogTitle>
        <Command
          className="bg-raised text-ink"
          label="সার্চ"
          filter={(value, search) => (value.includes(search.toLowerCase()) ? 1 : 0)}
        >
          <div className="flex items-center gap-2 border-b border-line px-3">
            <Search className="size-4 text-faint" />
            <Command.Input
              value={query}
              onValueChange={setQuery}
              placeholder="ধাপ, কমান্ড বা এরর খুঁজুন…"
              className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-faint"
            />
            <kbd className="hidden rounded-sm border border-line px-1.5 py-0.5 font-mono text-xs text-faint sm:inline">
              Esc
            </kbd>
          </div>
          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="px-3 py-8 text-center text-sm text-muted">
              কিছু পাওয়া যায়নি
            </Command.Empty>
            <Command.Group heading="ধাপ" className="text-xs text-faint">
              {NAV.map((item) => (
                <Command.Item
                  key={item.id}
                  value={`${item.label} ${item.short} ${STEPS[item.id].title}`.toLowerCase()}
                  onSelect={() => {
                    onGo(item.id);
                    onOpenChange(false);
                  }}
                  className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm text-ink aria-selected:bg-accent-soft"
                >
                  <Hash className="size-3.5 text-faint" />
                  <span>{item.label}</span>
                  <span className="ml-auto font-mono text-xs text-faint">{item.minutes} মি</span>
                </Command.Item>
              ))}
            </Command.Group>
            <Command.Group heading="কমান্ড" className="mt-2 text-xs text-faint">
              {COMMANDS.map((cmd) => (
                <Command.Item
                  key={cmd.id}
                  value={`${cmd.title} ${cmd.code}`.toLowerCase()}
                  onSelect={async () => {
                    await copyText(cmd.code);
                    onGo(cmd.step);
                    onOpenChange(false);
                  }}
                  className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm text-ink aria-selected:bg-accent-soft"
                >
                  <Terminal className="size-3.5 text-faint" />
                  <span className="min-w-0 flex-1 truncate">{cmd.title}</span>
                  <span className="hidden max-w-40 truncate font-mono text-xs text-faint sm:block">
                    {cmd.code}
                  </span>
                </Command.Item>
              ))}
            </Command.Group>
            <Command.Group heading="সমস্যা" className="mt-2 text-xs text-faint">
              {TROUBLES.map((t) => (
                <Command.Item
                  key={t.title}
                  value={`${t.title} error trouble`.toLowerCase()}
                  onSelect={() => {
                    onGo("s7");
                    onOpenChange(false);
                  }}
                  className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm text-ink aria-selected:bg-accent-soft"
                >
                  <FileCode2 className="size-3.5 text-faint" />
                  <span className="truncate">{t.title}</span>
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
