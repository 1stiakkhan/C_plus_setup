export type StepId =
  | "intro"
  | "s1"
  | "s2"
  | "s3"
  | "s4"
  | "s5"
  | "s6"
  | "s7"
  | "s8"
  | "s9"
  | "s10"
  | "checklist";

export const STEP_IDS: StepId[] = [
  "intro",
  "s1",
  "s2",
  "s3",
  "s4",
  "s5",
  "s6",
  "s7",
  "s8",
  "s9",
  "s10",
  "checklist",
];

export const CHECK_IDS = [
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "c10",
  "c11",
] as const;

export type CheckId = (typeof CHECK_IDS)[number];

export type NavItem = {
  id: StepId;
  label: string;
  short: string;
  minutes: number;
  kind: "intro" | "step" | "ref" | "check";
  pad: string;
};

export const NAV: NavItem[] = [
  { id: "intro", label: "ভূমিকা", short: "ভূমিকা", minutes: 2, kind: "intro", pad: "i" },
  { id: "s1", label: "সফটওয়্যার ইনস্টল", short: "ইনস্টল", minutes: 10, kind: "step", pad: "১" },
  { id: "s2", label: "g++ কম্পাইলার", short: "g++", minutes: 8, kind: "step", pad: "২" },
  { id: "s3", label: "PATH সেট করা", short: "PATH", minutes: 6, kind: "step", pad: "৩" },
  { id: "s4", label: "IntelliSense", short: "IntelliSense", minutes: 4, kind: "step", pad: "৪" },
  { id: "s5", label: "tasks.json", short: "টাস্ক", minutes: 6, kind: "step", pad: "৫" },
  { id: "s6", label: "কোড রান করা", short: "রান", minutes: 4, kind: "step", pad: "৬" },
  { id: "s7", label: "সমস্যা সমাধান", short: "সমস্যা", minutes: 8, kind: "ref", pad: "৭" },
  { id: "s8", label: "জাজে কম্পাইলার", short: "জাজ", minutes: 3, kind: "step", pad: "৮" },
  { id: "s9", label: "প্রথম প্রোগ্রাম", short: "হ্যালো", minutes: 8, kind: "step", pad: "৯" },
  { id: "s10", label: "CP টেমপ্লেট", short: "টেমপ্লেট", minutes: 6, kind: "step", pad: "১০" },
  { id: "checklist", label: "চূড়ান্ত চেকলিস্ট", short: "চেকলিস্ট", minutes: 3, kind: "check", pad: "✓" },
];

export const TRACKED_STEPS: StepId[] = NAV.filter((n) => n.kind === "step" || n.kind === "ref").map(
  (n) => n.id,
);

export type CodeSnippet = {
  id: string;
  code: string;
  label?: string;
};

export type WhyBlock = { title: string; body: string };
export type WarnBlock = { title: string; body: string };
export type Subcard = { title: string; body: string; warn?: WarnBlock; link?: { href: string; label: string } };
export type RunCard = { key: string; body: string };
export type Trouble = {
  tag: string;
  title: string;
  cause: string;
  fix: string;
  code?: CodeSnippet;
};
export type CheckItem = { id: CheckId; label: string };

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "code"; snippet: CodeSnippet }
  | { type: "why"; why: WhyBlock }
  | { type: "warn"; warn: WarnBlock }
  | { type: "subcards"; cards: Subcard[] }
  | { type: "runs"; cards: RunCard[] }
  | { type: "troubles"; items: Trouble[] }
  | { type: "sample"; filename: string; code: string; compile: string; output: string }
  | { type: "kv"; items: { k: string; v: string }[] }
  | { type: "checks"; items: CheckItem[] };

export type StepDoc = {
  id: StepId;
  kicker: string;
  title: string;
  blurb: string;
  blocks: ContentBlock[];
  nextLabel?: string;
  prevLabel?: string;
};

export const COMMANDS: { id: string; title: string; code: string; step: StepId }[] = [
  { id: "pacman-update", title: "প্যাকেজ ডেটাবেস আপডেট", code: "pacman -Syu", step: "s2" },
  {
    id: "pacman-gcc",
    title: "GCC/G++ ইনস্টল",
    code: "pacman -S mingw-w64-ucrt-x86_64-gcc",
    step: "s2",
  },
  { id: "gpp-version", title: "কম্পাইলার ভার্সন চেক", code: "g++ --version", step: "s2" },
  { id: "path", title: "UCRT64 bin পাথ", code: "C:\\msys64\\ucrt64\\bin", step: "s3" },
  {
    id: "dir-gpp",
    title: "g++.exe আছে কি না",
    code: "dir C:\\msys64\\ucrt64\\bin\\g++.exe",
    step: "s3",
  },
  {
    id: "compiler-path",
    title: "Compiler path (IntelliSense)",
    code: "C:\\msys64\\ucrt64\\bin\\g++.exe",
    step: "s4",
  },
  {
    id: "compile-hello",
    title: "হ্যালো ওয়ার্ল্ড কম্পাইল",
    code: "g++ -std=c++20 -O2 -Wall hello.cpp -o hello.exe",
    step: "s9",
  },
  {
    id: "compile-cp",
    title: "CP ফ্ল্যাগ দিয়ে কম্পাইল",
    code: "g++ -std=c++20 -O2 -Wall -Wextra -o a.exe %1",
    step: "s10",
  },
  {
    id: "run-input",
    title: "ফাইল থেকে ইনপুট নিয়ে রান",
    code: ".\\hello.exe < input.txt",
    step: "s9",
  },
];

export const QUICK_REF = {
  paths: [
    { k: "MSYS2 root", v: "C:\\msys64" },
    { k: "Compiler bin", v: "C:\\msys64\\ucrt64\\bin" },
    { k: "g++.exe", v: "C:\\msys64\\ucrt64\\bin\\g++.exe" },
  ],
  shortcuts: [
    { k: "Extensions", v: "Ctrl+Shift+X" },
    { k: "Command Palette", v: "Ctrl+Shift+P" },
    { k: "Code Runner", v: "Ctrl+Alt+N" },
    { k: "Run (no debug)", v: "Ctrl+F5" },
    { k: "এই গাইড সার্চ", v: "Ctrl+K" },
  ],
  flags: [
    { k: "-std=c++20", v: "জাজের G++20-এর কাছাকাছি স্ট্যান্ডার্ড" },
    { k: "-O2", v: "স্পিড অপটিমাইজ — কনটেস্টে এটাই স্ট্যান্ডার্ড" },
    { k: "-Wall", v: "সাধারণ ওয়ার্নিং চালু" },
    { k: "-Wextra", v: "বাড়তি ওয়ার্নিং — বাগ ধরতে সাহায্য করে" },
    { k: "-g", v: "ডিবাগ সিম্বল — tasks.json-এ আছে" },
  ],
  judge: [
    { k: "নাও", v: "GNU G++20 13.2 (64 bit, winlibs)" },
    { k: "বিকল্প", v: "GNU G++17 7.3.0" },
    { k: "এড়াও", v: "GNU GCC C11, খুব নতুন G++23" },
  ],
};

export const TASKS_JSON = `{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "C/C++: gcc.exe build active file",
            "type": "shell",
            "command": "C:\\\\msys64\\\\ucrt64\\\\bin\\\\g++.exe",
            "args": [
                "-std=c++20",
                "-O2",
                "-Wall",
                "-g",
                "\${file}",
                "-o",
                "\${fileDirname}\\\\\${fileBasenameNoExtension}.exe"
            ],
            "group": {
                "kind": "build",
                "isDefault": true
            },
            "problemMatcher": ["$gcc"],
            "detail": "compiler: C:\\\\msys64\\\\ucrt64\\\\bin\\\\g++.exe"
        }
    ]
}`;

export const HELLO_CPP = `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string name;
    if (!(cin >> name)) name = "CP";
    cout << "Hello, " << name << "\\n";
    return 0;
}`;

export const CP_TEMPLATE = `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int t = 1;
    // cin >> t;
    while (t--) {
        int n;
        if (!(cin >> n)) return 0;
        vector<int> a(n);
        for (int i = 0; i < n; i++) cin >> a[i];

        long long sum = 0;
        for (int x : a) sum += x;
        cout << sum << "\\n";
    }
    return 0;
}`;

export const STEPS: Record<StepId, StepDoc> = {
  intro: {
    id: "intro",
    kicker: "শুরুর আগে",
    title: "এই গাইডে কী থাকছে",
    blurb:
      "তুমি এখন C জানো, আর এখন লক্ষ্য C++ দিয়ে Competitive Programming। কোড লেখার আগে দরকার একটা জায়গা যেখানে কোড লিখবে, কম্পাইল করবে আর রান করবে — সেটাই এই ডেস্ক ধাপে ধাপে বানিয়ে দেবে।",
    nextLabel: "পরবর্তী: সফটওয়্যার ইনস্টল",
    blocks: [
      {
        type: "p",
        text: "মোট ১০টা কাজের ধাপ আছে। বাম পাশের তালিকা থেকে যেকোনোটায় যাও, অথবা নিচের বাটন দিয়ে সিরিয়ালি এগোও। প্রতিটা ধাপ শেষ করলে টিক দাও — অগ্রগতি এই ব্রাউজারেই সেভ থাকবে।",
      },
      {
        type: "kv",
        items: [
          { k: "সময়", v: "প্রায় ৬০–৭০ মিনিট, একবারই" },
          { k: "সিস্টেম", v: "Windows 10/11, 64-bit" },
          { k: "লক্ষ্য", v: "VS Code + g++ ২০ স্ট্যান্ডার্ড, জাজে সাবমিট-রেডি" },
        ],
      },
      {
        type: "why",
        why: {
          title: "কম্পাইলার আসলে কী?",
          body: "কম্পাইলার হলো একজন অনুবাদকের মতো। তুমি যে C++ কোড লেখো সেটা মানুষের পড়ার মতো ভাষায় — কিন্তু কম্পিউটার সরাসরি সেটা বোঝে না। কম্পাইলার (এখানে `g++`) তোমার কোডকে মেশিন কোডে রূপান্তর করে, তারপরই সেটা `.exe` হিসেবে রান করা যায়। Linux বা Mac-এ এই কম্পাইলার আগে থেকেই থাকে; Windows-এ নিজে থেকে ইনস্টল করতে হয় — এই গাইডের বড় অংশ আসলে সেটাই।",
        },
      },
      {
        type: "p",
        text: "সার্চ খুলতে `Ctrl+K` চাপো — ধাপ, কমান্ড বা এরর মেসেজ খুঁজে সরাসরি যেতে পারবে। ডান পাশের রেফারেন্স প্যানেলে PATH, শর্টকাট আর কম্পাইলার ফ্ল্যাগ সবসময় হাতের কাছে থাকবে।",
      },
    ],
  },
  s1: {
    id: "s1",
    kicker: "ধাপ ১",
    title: "প্রয়োজনীয় সফটওয়্যার ডাউনলোড ও ইনস্টল",
    blurb: "চারটা জিনিস দরকার। প্রথম তিনটা বাধ্যতামূলক, শেষেরটা ঐচ্ছিক কিন্তু প্র্যাকটিসের জন্য সুবিধাজনক।",
    prevLabel: "ভূমিকা",
    nextLabel: "পরবর্তী: g++ কম্পাইলার",
    blocks: [
      {
        type: "subcards",
        cards: [
          {
            title: "১.১ Visual Studio Code",
            body: "সাইট নিজে থেকেই Windows ডিটেক্ট করে সঠিক ইনস্টলার দেখাবে। `.exe` রান করে ডিফল্ট সেটিংসেই ইনস্টল করো — পাথ বদলানোর দরকার নেই।",
            link: { href: "https://code.visualstudio.com/", label: "code.visualstudio.com" },
          },
          {
            title: "১.২ MSYS2 (C++ কম্পাইলার)",
            body: "Windows-এ নিজে থেকে `g++` থাকে না। MSYS2-এর ভেতরে `g++` আর `gdb` দুটোই আসে। ফাইলের নাম মোটামুটি `msys2-x86_64-YYYYMMDD.exe`। ইনস্টলেশন পাথ ডিফল্ট রাখো — `C:\\msys64`।",
            link: { href: "https://www.msys2.org/", label: "msys2.org" },
            warn: {
              title: "পাথ সতর্কতা",
              body: "ইনস্টলেশন পাথে স্পেস বা বাংলার মতো নন-ল্যাটিন অক্ষর রাখবে না — কম্পাইলার এগুলোতে সমস্যা করে।",
            },
          },
          {
            title: "১.৩ C/C++ এক্সটেনশন",
            body: "VS Code খুলে Extensions (`Ctrl+Shift+X`) থেকে `C++` সার্চ করে Microsoft-এর **C/C++** এক্সটেনশন ইনস্টল করো। IntelliSense, ডিবাগিং আর বিল্ড টাস্ক এর উপর দাঁড়ায়।",
          },
          {
            title: "১.৪ Code Runner (ঐচ্ছিক)",
            body: "Jun Han-এর **Code Runner** এক্সটেনশন ইনস্টল করলে `Ctrl+Alt+N`-এ এক ক্লিকে রান হয়। কনটেস্ট প্র্যাকটিসে সময় বাঁচায়।",
          },
        ],
      },
      {
        type: "why",
        why: {
          title: "কেন VS Code আর MSYS2 আলাদা?",
          body: "VS Code শুধু একটা এডিটর — নিজে থেকে কোনো ভাষা কম্পাইল করে না। কম্পাইলার (MSYS2/`g++`) আলাদা টুল যেটা আসল অনুবাদের কাজ করে। দুটো কনফিগার করে দিলে VS Code পুরোদমে একটা C++ IDE-এর মতো কাজ করে, অথচ হালকা থাকে।",
        },
      },
    ],
  },
  s2: {
    id: "s2",
    kicker: "ধাপ ২",
    title: "MSYS2 টার্মিনালে g++ ইনস্টল",
    blurb:
      "MSYS2 ইনস্টল হয়ে গেলে Start মেনু থেকে **MSYS2 UCRT64** টার্মিনাল খোলো। তারপর কমান্ডগুলো একটার পর একটা চালাও।",
    prevLabel: "সফটওয়্যার ইনস্টল",
    nextLabel: "পরবর্তী: PATH সেট করা",
    blocks: [
      {
        type: "h3",
        text: "১. প্যাকেজ ডেটাবেস আপডেট",
      },
      {
        type: "code",
        snippet: { id: "pacman-update", code: "pacman -Syu" },
      },
      {
        type: "p",
        text: "কিছুটা সময় নিতে পারে। মাঝপথে থেমে গেলে টার্মিনাল বন্ধ করে আবার খুলে একই কমান্ড চালাও — এটা স্বাভাবিক।",
      },
      {
        type: "h3",
        text: "২. GCC / G++ ইনস্টল",
      },
      {
        type: "code",
        snippet: { id: "pacman-gcc", code: "pacman -S mingw-w64-ucrt-x86_64-gcc" },
      },
      {
        type: "p",
        text: "এক কমান্ডেই `gcc`, `g++` আর `gdb` — তিনটাই ইনস্টল হয়ে যায়।",
      },
      {
        type: "h3",
        text: "৩. ইনস্টলেশন যাচাই",
      },
      {
        type: "code",
        snippet: { id: "gpp-version", code: "g++ --version" },
      },
      {
        type: "p",
        text: "ভার্সন দেখালে (যেমন `g++ (Rev5, Built by MSYS2 project) 16.1.0`) বুঝবে সব ঠিকঠাক। এই আউটপুটটা ধরে রাখো — জাজে কম্পাইলার বাছাইয়ের সময় কাজে লাগবে।",
      },
      {
        type: "why",
        why: {
          title: "pacman, -Syu আর -S মানে কী?",
          body: "`pacman` হলো MSYS2-এর প্যাকেজ ম্যানেজার — Python-এর `pip` বা Linux-এর `apt`-এর মতো। `-Syu` মানে তালিকা সিঙ্ক করে আপগ্রেড করা; আগে না করলে পুরনো বেমানান ভার্সন ইনস্টল হতে পারে। `-S` মানে নির্দিষ্ট প্যাকেজ ইনস্টল।",
        },
      },
    ],
  },
  s3: {
    id: "s3",
    kicker: "ধাপ ৩",
    title: "সিস্টেম PATH-এ কম্পাইলার যোগ করা",
    blurb:
      "কম্পাইলার ইনস্টল হলেও Command Prompt বা VS Code টার্মিনাল থেকে `g++` চলবে না — যতক্ষণ না bin ফোল্ডারটা PATH-এ থাকে।",
    prevLabel: "g++ কম্পাইলার",
    nextLabel: "পরবর্তী: IntelliSense",
    blocks: [
      {
        type: "why",
        why: {
          title: "PATH জিনিসটা আসলে কী?",
          body: "PATH একটা ঠিকানার তালিকা। টার্মিনালে `g++` লিখলে Windows জানে না প্রোগ্রামটা কোথায় — যদি না তুমি বলে দাও কোন ফোল্ডারগুলোতে খুঁজতে হবে। PATH-এ ফোল্ডার যোগ করা মানে সেই তালিকায় নতুন ঠিকানা দেওয়া।",
        },
      },
      {
        type: "h3",
        text: "সঠিক পাথ",
      },
      {
        type: "code",
        snippet: { id: "path", code: "C:\\msys64\\ucrt64\\bin", label: "User PATH-এ যোগ করো" },
      },
      {
        type: "h3",
        text: "যেভাবে যোগ করবে",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "`Windows Key + R` চেপে `sysdm.cpl` লিখে এন্টার দাও।",
          "**Advanced** ট্যাব → **Environment Variables** → **User variables**-এর `Path` সিলেক্ট করে **Edit**।",
          "**New**-এ `C:\\msys64\\ucrt64\\bin` লিখে যোগ করো।",
          "সব উইন্ডোতে **OK** দিয়ে বন্ধ করো।",
          "পুরনো CMD / VS Code বন্ধ করে নতুন করে খোলো — পুরনো টার্মিনাল নতুন PATH দেখে না।",
        ],
      },
      {
        type: "p",
        text: "যাচাই: নতুন Command Prompt-এ `g++ --version` — ভার্সন দেখালেই PATH ঠিক।",
      },
      {
        type: "warn",
        warn: {
          title: "সাধারণ ভুল",
          body: "অনেকে `C:\\msys64\\mingw64\\bin` দিয়ে ফেলে। UCRT64 দিয়ে ইনস্টল করলে আসল কম্পাইলার থাকে `C:\\msys64\\ucrt64\\bin`-এ। আগে নিচের কমান্ড দিয়ে ফাইলটা আছে কি না দেখে নাও।",
        },
      },
      {
        type: "code",
        snippet: { id: "dir-gpp", code: "dir C:\\msys64\\ucrt64\\bin\\g++.exe" },
      },
    ],
  },
  s4: {
    id: "s4",
    kicker: "ধাপ ৪",
    title: "VS Code-এ IntelliSense কনফিগারেশন",
    blurb:
      'প্রথমবার কোনো `.cpp` ফাইল খুললে পপআপ আসবে: "How would you like to configure IntelliSense for this folder?" — `C:/msys64/ucrt64/bin/`-এ পাওয়া **Use g++.exe** সিলেক্ট করো।',
    prevLabel: "PATH সেট করা",
    nextLabel: "পরবর্তী: tasks.json",
    blocks: [
      {
        type: "why",
        why: {
          title: "IntelliSense কী কাজ করে?",
          body: "ফোনের কিবোর্ডের অটো-সাজেশনের মতো, কিন্তু কোডের জন্য — ফাংশনের নাম সাজেস্ট করে, ভুল থাকলে লাল দাগ দেখায়। ঠিকমতো কাজ করতে হলে জানা দরকার কোন কম্পাইলার আর কোন C++ স্ট্যান্ডার্ড ব্যবহার করছ।",
        },
      },
      {
        type: "p",
        text: "পপআপ মিস হলে: `Ctrl+Shift+P` → `C/C++: Edit Configurations (UI)` → Compiler path-এ নিচের পাথ বসাও। IntelliSense Mode `windows-gcc-x64` আর C++ standard `c++20` রাখো।",
      },
      {
        type: "code",
        snippet: {
          id: "compiler-path",
          code: "C:\\msys64\\ucrt64\\bin\\g++.exe",
          label: "Compiler path",
        },
      },
    ],
  },
  s5: {
    id: "s5",
    kicker: "ধাপ ৫",
    title: "বিল্ড টাস্ক (tasks.json) কনফিগার করা",
    blurb:
      "ডিফল্ট Run বাটনে (▶️) ক্লিক করলে যদি `preLaunchTask 'C/C++: gcc.exe build active file' terminated with exit code -1` আসে — VS Code ভুল করে `gcc` খুঁজছে। নিজের হাতে টাস্ক ফাইল বানাও।",
    prevLabel: "IntelliSense",
    nextLabel: "পরবর্তী: কোড রান করা",
    blocks: [
      {
        type: "why",
        why: {
          title: "tasks.json কী?",
          body: "VS Code-কে দেওয়া একটা রেসিপি। Run চাপলে এই ফাইলের নির্দেশ অনুযায়ী কাজ হয় — কোন কম্পাইলার, কোন ফাইল, আউটপুট কোথায়। রেসিপি ছাড়া VS Code অনুমান করে, আর সেই অনুমান মাঝে মাঝে ভুল হয়।",
        },
      },
      {
        type: "list",
        ordered: true,
        items: [
          "প্রোজেক্ট ফোল্ডারে `.vscode` ফোল্ডার খোলো (না থাকলে বানাও)।",
          "সেখানে `tasks.json` বানিয়ে নিচের কনটেন্ট পেস্ট করো।",
        ],
      },
      {
        type: "code",
        snippet: { id: "tasks-json", code: TASKS_JSON, label: "tasks.json" },
      },
      {
        type: "h3",
        text: "এখানে কী কী আছে",
      },
      {
        type: "list",
        items: [
          '`"command"` — কম্পাইলারের সম্পূর্ণ পাথ, PATH ভাঙলেও কাজ করে।',
          '`"args"` — `-std=c++20 -O2 -Wall` যোগ করা হয়েছে যাতে লোকাল রান জাজের কাছাকাছি হয়।',
          '`"label"`-এ ইচ্ছাকৃতভাবে `gcc.exe` লেখা — VS Code ঠিক এই নামের টাস্ক খোঁজে।',
          '`"problemMatcher"` — কম্পাইল এরর Problems প্যানেলে দেখায়।',
        ],
      },
    ],
  },
  s6: {
    id: "s6",
    kicker: "ধাপ ৬",
    title: "কোড রান করা",
    blurb: "যেকোনো `.cpp` ফাইল খুলে নিচের যেকোনো একভাবে রান করতে পারো।",
    prevLabel: "tasks.json",
    nextLabel: "পরবর্তী: সমস্যা সমাধান",
    blocks: [
      {
        type: "runs",
        cards: [
          {
            key: "ডিফল্ট Play বাটন",
            body: "`tasks.json` ঠিক থাকলে কম্পাইল আর রান দুটোই হবে, gcc এরর ছাড়াই।",
          },
          {
            key: "Ctrl+Alt+N",
            body: "Code Runner ইনস্টল থাকলে এই শর্টকাটে সরাসরি রান হয় — আলাদা কনফিগ লাগে না।",
          },
          {
            key: "Ctrl+F5",
            body: "Run Without Debugging — ডিবাগারের বাড়তি লোডিং ছাড়া দ্রুত রান। প্র্যাকটিসে এটাই সবচেয়ে কাজের।",
          },
        ],
      },
      {
        type: "p",
        text: "প্রোগ্রাম রান হলে নিচের টার্মিনাল প্যানেলেই ইনপুট দাও আর আউটপুট দেখো — অনলাইন জাজের মতো। `F5` (ডিবাগ) প্র্যাকটিসের সময় এড়িয়ে চলো; লাইব্রেরি লোড করতে সময় লাগে।",
      },
      {
        type: "warn",
        warn: {
          title: "ফাইলের নাম",
          body: "নামে স্পেস দিও না। `Problem_1.cpp` লিখো, `Problem 1.cpp` নয় — বিল্ড টাস্ক স্পেস সবসময় ঠিকমতো হ্যান্ডেল করে না।",
        },
      },
    ],
  },
  s7: {
    id: "s7",
    kicker: "ধাপ ৭ · রেফারেন্স",
    title: "সাধারণ সমস্যা ও সমাধান",
    blurb: "সেটআপের সময় এই সমস্যাগুলোই সবচেয়ে বেশি হয়। আটকে গেলে মিলিয়ে দেখো, অথবা `Ctrl+K` দিয়ে এরর মেসেজ সার্চ করো।",
    prevLabel: "কোড রান করা",
    nextLabel: "পরবর্তী: জাজে কম্পাইলার",
    blocks: [
      {
        type: "troubles",
        items: [
          {
            tag: "এরর",
            title: "'g++' is not recognized",
            cause: "PATH-এ কম্পাইলারের `bin` ফোল্ডার নেই, অথবা ভুল পাথ দেওয়া হয়েছে।",
            fix: "ধাপ ৩ অনুযায়ী `C:\\msys64\\ucrt64\\bin` PATH-এ যোগ করো, তারপর CMD ও VS Code পুরোপুরি বন্ধ করে আবার খোলো।",
          },
          {
            tag: "এরর",
            title: "preLaunchTask 'gcc.exe build active file' terminated",
            cause: "VS Code ডিফল্টভাবে `gcc` খুঁজছে, ইনস্টল আছে `g++`।",
            fix: "ধাপ ৫-এর `tasks.json`-এ `command`-এ `g++.exe`-এর সম্পূর্ণ পাথ বসাও।",
          },
          {
            tag: "এরর",
            title: "ফাইলের নামে স্পেস থাকলে কম্পাইল এরর",
            cause: "বিল্ড টাস্ক স্পেসযুক্ত নাম সবসময় ঠিকভাবে কোট করে না।",
            fix: "আন্ডারস্কোর ব্যবহার করো — `Problem_1.cpp`।",
          },
          {
            tag: "স্লো",
            title: "ডিবাগ মোডে (F5) অপ্রয়োজনীয় লোডিং",
            cause: "F5 চাপলে ডিবাগার সব লাইব্রেরি লোড করে, প্র্যাকটিসে দরকার নেই।",
            fix: "`Ctrl+F5` বা Code Runner-এর `Ctrl+Alt+N` ব্যবহার করো।",
          },
          {
            tag: "এরর",
            title: "'.\\Problem_2.exe' is not recognized",
            cause: "ফাইল তৈরিই হয়নি (কম্পাইল ফেইল), অথবা ভুল ফোল্ডারে আছে।",
            fix: "`dir` দিয়ে `.exe` আছে কি না দেখো। না থাকলে সরাসরি পুরো পাথ দিয়ে কম্পাইল করো।",
            code: {
              id: "manual-compile",
              code: "C:\\msys64\\ucrt64\\bin\\g++.exe Problem_2.cpp -o Problem_2.exe",
            },
          },
          {
            tag: "এরর",
            title: "bits/stdc++.h: No such file or directory",
            cause: "ভুল কম্পাইলার (MSVC) সিলেক্ট হয়েছে, অথবা IntelliSense/টাস্ক `cl.exe` ধরেছে।",
            fix: "Compiler path `g++.exe`-এ সেট করো। `bits/stdc++.h` শুধু GCC/MinGW-এ আছে, MSVC-তে নয়।",
          },
        ],
      },
    ],
  },
  s8: {
    id: "s8",
    kicker: "ধাপ ৮",
    title: "অনলাইন জাজে কম্পাইলার ভার্সন নির্বাচন",
    blurb:
      "Codeforces-এর মতো জাজে সাবমিট করার সময় যে কম্পাইলার নেবে সেটা তোমার লোকাল কম্পাইলারের কাছাকাছি হওয়া দরকার।",
    prevLabel: "সমস্যা সমাধান",
    nextLabel: "পরবর্তী: প্রথম প্রোগ্রাম",
    blocks: [
      {
        type: "list",
        items: [
          "**নাও:** `GNU G++20 13.2 (64 bit, winlibs)` অথবা `GNU G++17 7.3.0`।",
          "**কেন:** লোকাল MSYS2 `g++` সাধারণত C++20 পুরোপুরি সাপোর্ট করে। জাজের G++20 (13.2)-এর সাথে আচরণ সবচেয়ে বেশি মেলে।",
          "**এড়িয়ে চলো:** `GNU GCC C11` — এটা C কম্পাইলার, C++ না। খুব নতুন `G++23`-ও এড়াও; কিছু জাজে লাইব্রেরি মিলতে পারে না।",
        ],
      },
      {
        type: "why",
        why: {
          title: "কেন ভার্সন মেলানো জরুরি?",
          body: "C++-এর প্রতিটা স্ট্যান্ডার্ডে (11, 14, 17, 20) নতুন ফিচার আসে — structured bindings, ranges। লোকাল কম্পাইলার সাপোর্ট করলেও জাজের পুরনো কম্পাইলার না-ও করতে পারে। ফলে লোকালে চলা কোড জাজে Compilation Error দিতে পারে — কোড ভুল নয়, ভার্সন না মেলার কারণে।",
        },
      },
    ],
  },
  s9: {
    id: "s9",
    kicker: "ধাপ ৯",
    title: "প্রথম প্রোগ্রাম — সেটআপ যাচাই",
    blurb:
      "সব কনফিগারেশন কাজ করছে কি না একটা ছোট প্রোগ্রাম দিয়ে নিশ্চিত করো। এই ধাপ পার হলে পরিবেশ সাবমিট-রেডি।",
    prevLabel: "জাজে কম্পাইলার",
    nextLabel: "পরবর্তী: CP টেমপ্লেট",
    blocks: [
      {
        type: "list",
        ordered: true,
        items: [
          "যেমন `C:\\cp` নামে একটা ফোল্ডার বানাও — পাথে স্পেস রাখো না।",
          "VS Code-এ **File → Open Folder** দিয়ে সেই ফোল্ডার খোলো।",
          "`hello.cpp` নামে ফাইল বানিয়ে নিচের কোড পেস্ট করো।",
        ],
      },
      {
        type: "sample",
        filename: "hello.cpp",
        code: HELLO_CPP,
        compile: "g++ -std=c++20 -O2 -Wall hello.cpp -o hello.exe",
        output: "Hello, CP",
      },
      {
        type: "p",
        text: "টার্মিনালে প্রোগ্রাম রান করে `CP` লিখে এন্টার দাও। আউটপুট `Hello, CP` হলে কম্পাইলার, PATH আর VS Code — তিনটেই ঠিক আছে।",
      },
      {
        type: "h3",
        text: "ফাইল থেকে ইনপুট (জাজের মতো)",
      },
      {
        type: "p",
        text: "একই ফোল্ডারে `input.txt` বানিয়ে এক লাইনে `World` লেখো, তারপর:",
      },
      {
        type: "code",
        snippet: { id: "run-input", code: ".\\hello.exe < input.txt" },
      },
      {
        type: "p",
        text: "আউটপুট হবে `Hello, World`। কনটেস্টে স্যাম্পল ইনপুট এভাবেই টেস্ট করো — হাতে বারবার টাইপ করতে হয় না।",
      },
      {
        type: "why",
        why: {
          title: "bits/stdc++.h কেন?",
          body: "GCC/MinGW-এর এই হেডার practically সব স্ট্যান্ডার্ড লাইব্রেরি টেনে আনে। কনটেস্টে `#include` লিখতে সময় বাঁচে। MSVC-তে এটা নেই — তাই g++ দরকার। প্রোডাকশন কোডে এটা ব্যবহার হয় না; CP-তে স্ট্যান্ডার্ড।",
        },
      },
    ],
  },
  s10: {
    id: "s10",
    kicker: "ধাপ ১০",
    title: "Competitive Programming টেমপ্লেট ও ফ্ল্যাগ",
    blurb:
      "লোকাল কম্পাইল জাজের কাছাকাছি রাখতে একই স্ট্যান্ডার্ড, অপটিমাইজেশন আর ওয়ার্নিং ব্যবহার করো। নিচের টেমপ্লেটটা স্টার্টার হিসেবে রাখো।",
    prevLabel: "প্রথম প্রোগ্রাম",
    nextLabel: "পরবর্তী: চূড়ান্ত চেকলিস্ট",
    blocks: [
      {
        type: "h3",
        text: "কম্পাইল কমান্ড (জাজ-মিরর)",
      },
      {
        type: "code",
        snippet: {
          id: "compile-cp",
          code: "g++ -std=c++20 -O2 -Wall -Wextra sol.cpp -o sol.exe",
          label: "কনটেস্ট স্টাইল",
        },
      },
      {
        type: "kv",
        items: [
          { k: "-std=c++20", v: "জাজের G++20-এর সাথে মিল" },
          { k: "-O2", v: "স্পিড — TLE এড়াতে জাজেও এটাই" },
          { k: "-Wall -Wextra", v: "সাইলেন্ট বাগ ধরতে" },
        ],
      },
      {
        type: "h3",
        text: "স্টার্টার টেমপ্লেট",
      },
      {
        type: "code",
        snippet: { id: "cp-template", code: CP_TEMPLATE, label: "sol.cpp" },
      },
      {
        type: "list",
        items: [
          "`ios::sync_with_stdio(false)` আর `cin.tie(nullptr)` — বড় ইনপুটে cin/cout কে scanf-এর কাছাকাছি করে।",
          "মাল্টি-টেস্ট প্রবলেমে `cin >> t` আনকমেন্ট করো।",
          "`endl` ব্যবহার কোরো না; `\\n` দিলে ফ্ল্যাশ হয় না, বড় আউটপুটে ফারাক হয়।",
          "গ্লোবাল `using namespace std;` CP-তে চলে; বড় প্রোজেক্টে চলে না — এখানে ঠিক আছে।",
        ],
      },
      {
        type: "warn",
        warn: {
          title: "ম্যাক্রো সাবধান",
          body: "`#define int long long` এর মতো ম্যাক্রো অনেক স্টার্টার প্যাক আসে। এড়িয়ে চলো — ওভারফ্লো ঢেকে দেয়, ডিবাগ কঠিন করে, আর কিছু জাজে unexpected আচরণ হয়। দরকার হলে `long long` স্পষ্ট করে লেখো।",
        },
      },
    ],
  },
  checklist: {
    id: "checklist",
    kicker: "সারসংক্ষেপ",
    title: "চূড়ান্ত চেকলিস্ট",
    blurb: "পুরো সেটআপ একনজরে — একটা একটা করে টিক দিয়ে যাও। সবগুলো টিক হলে পরিবেশ রেডি।",
    prevLabel: "CP টেমপ্লেট",
    blocks: [
      {
        type: "checks",
        items: [
          { id: "c1", label: "VS Code ডাউনলোড ও ইনস্টল (code.visualstudio.com)" },
          { id: "c2", label: "MSYS2 ডাউনলোড ও ইনস্টল (msys2.org), পাথ `C:\\msys64`" },
          { id: "c3", label: "UCRT64-এ `pacman -S mingw-w64-ucrt-x86_64-gcc` চালানো" },
          { id: "c4", label: "`C:\\msys64\\ucrt64\\bin` PATH-এ যোগ করা, নতুন টার্মিনালে `g++ --version` কাজ করে" },
          { id: "c5", label: "VS Code-এ Microsoft C/C++ এক্সটেনশন ইনস্টল" },
          { id: "c6", label: "IntelliSense-এ g++ সিলেক্ট, স্ট্যান্ডার্ড c++20" },
          { id: "c7", label: "`tasks.json`-এ g++.exe পাথ ও `-std=c++20 -O2`" },
          { id: "c8", label: "Code Runner ইনস্টল (ঐচ্ছিক)" },
          { id: "c9", label: "`hello.cpp` কম্পাইল ও রান, আউটপুট মিলেছে" },
          { id: "c10", label: "অনলাইন জাজে GNU G++20 সিলেক্ট করে টেস্ট সাবমিট" },
          { id: "c11", label: "CP টেমপ্লেট ফোল্ডারে সেভ করা" },
        ],
      },
    ],
  },
};

export const TROUBLES =
  (STEPS.s7.blocks.find((b) => b.type === "troubles") as Extract<
    ContentBlock,
    { type: "troubles" }
  >).items;

export function stepIndex(id: StepId) {
  return STEP_IDS.indexOf(id);
}

export function adjacent(id: StepId): { prev?: StepId; next?: StepId } {
  const i = stepIndex(id);
  return {
    prev: i > 0 ? STEP_IDS[i - 1] : undefined,
    next: i < STEP_IDS.length - 1 ? STEP_IDS[i + 1] : undefined,
  };
}

export function isStepId(value: string | undefined): value is StepId {
  return !!value && (STEP_IDS as string[]).includes(value);
}

export const TOTAL_MINUTES = NAV.reduce((sum, n) => sum + n.minutes, 0);
