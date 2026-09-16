import { Button } from "@/components/ui/button";
import { Mail, ExternalLink, Code2, Sparkles, GraduationCap } from "lucide-react";
import React from "react";

export const GlowingShadow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative group overflow-hidden rounded-[14px]">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[14px] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-zinc-950 rounded-[14px] ring-1 ring-white/10 shadow-2xl">
        {children}
      </div>
    </div>
  );
};

export const DeveloperInfo = () => {
  return (
    <GlowingShadow>
      <section className="w-full rounded-[14px] border-0 bg-transparent p-6 sm:p-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/70">
              <Code2 className="h-3.5 w-3.5" />
              About The Developer
            </div>
            <h2 className="mb-4 text-xl font-semibold tracking-tight text-white">
              Hello! I'm Istiak Khan 🎓
            </h2>

            <p className="mb-2 flex items-center gap-2 text-sm font-medium text-white">
              <Sparkles className="h-4 w-4 text-white" />
              Who Am I:
            </p>
            <ul className="grid gap-2 text-sm text-white/70 sm:grid-cols-2">
              <li className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-white/90" />
                Computer Science Student
              </li>
              <li className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-white/90" />
                Passionate Developer
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-white/90" />
                Problem Solver
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-white/90" />
                Always Learning New Tech
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center gap-4 rounded-xl border border-white/10 bg-black/20 p-5">
            <div>
              <p className="mb-1.5 flex items-center gap-2 text-sm font-medium text-white">
                <Mail className="h-4 w-4 text-white" />
                Contact &amp; Feedback:
              </p>
              <p className="text-sm text-white/70">
                Send your suggestions and feedback directly to me!
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button asChild size="sm" variant="secondary" className="bg-white text-black hover:bg-white/90">
                <a href="https://t.me/ik_051" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Contact Developer
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild className="border-white/20 text-white hover:bg-white/10 hover:text-white">
                <a
                  href="https://istiak-khan-i742.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  More Links
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </GlowingShadow>
  );
};
