import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Search, c as Moon, d as Copy, f as Circle, h as BookOpen, i as Sun, l as Hash, m as Check, o as RotateCcw, p as ChevronDown, r as Terminal, s as PanelRight, t as X, u as FileCode2 } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, l as Slot, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Route } from "./router-DJPFKT8p.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as _e } from "../_libs/cmdk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-4JZGpa7q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STEP_IDS = [
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
	"checklist"
];
var CHECK_IDS = [
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
	"c11"
];
var NAV = [
	{
		id: "intro",
		label: "ভূমিকা",
		short: "ভূমিকা",
		minutes: 2,
		kind: "intro",
		pad: "i"
	},
	{
		id: "s1",
		label: "সফটওয়্যার ইনস্টল",
		short: "ইনস্টল",
		minutes: 10,
		kind: "step",
		pad: "১"
	},
	{
		id: "s2",
		label: "g++ কম্পাইলার",
		short: "g++",
		minutes: 8,
		kind: "step",
		pad: "২"
	},
	{
		id: "s3",
		label: "PATH সেট করা",
		short: "PATH",
		minutes: 6,
		kind: "step",
		pad: "৩"
	},
	{
		id: "s4",
		label: "IntelliSense",
		short: "IntelliSense",
		minutes: 4,
		kind: "step",
		pad: "৪"
	},
	{
		id: "s5",
		label: "tasks.json",
		short: "টাস্ক",
		minutes: 6,
		kind: "step",
		pad: "৫"
	},
	{
		id: "s6",
		label: "কোড রান করা",
		short: "রান",
		minutes: 4,
		kind: "step",
		pad: "৬"
	},
	{
		id: "s7",
		label: "সমস্যা সমাধান",
		short: "সমস্যা",
		minutes: 8,
		kind: "ref",
		pad: "৭"
	},
	{
		id: "s8",
		label: "জাজে কম্পাইলার",
		short: "জাজ",
		minutes: 3,
		kind: "step",
		pad: "৮"
	},
	{
		id: "s9",
		label: "প্রথম প্রোগ্রাম",
		short: "হ্যালো",
		minutes: 8,
		kind: "step",
		pad: "৯"
	},
	{
		id: "s10",
		label: "CP টেমপ্লেট",
		short: "টেমপ্লেট",
		minutes: 6,
		kind: "step",
		pad: "১০"
	},
	{
		id: "checklist",
		label: "চূড়ান্ত চেকলিস্ট",
		short: "চেকলিস্ট",
		minutes: 3,
		kind: "check",
		pad: "✓"
	}
];
var TRACKED_STEPS = NAV.filter((n) => n.kind === "step" || n.kind === "ref").map((n) => n.id);
var COMMANDS = [
	{
		id: "pacman-update",
		title: "প্যাকেজ ডেটাবেস আপডেট",
		code: "pacman -Syu",
		step: "s2"
	},
	{
		id: "pacman-gcc",
		title: "GCC/G++ ইনস্টল",
		code: "pacman -S mingw-w64-ucrt-x86_64-gcc",
		step: "s2"
	},
	{
		id: "gpp-version",
		title: "কম্পাইলার ভার্সন চেক",
		code: "g++ --version",
		step: "s2"
	},
	{
		id: "path",
		title: "UCRT64 bin পাথ",
		code: "C:\\msys64\\ucrt64\\bin",
		step: "s3"
	},
	{
		id: "dir-gpp",
		title: "g++.exe আছে কি না",
		code: "dir C:\\msys64\\ucrt64\\bin\\g++.exe",
		step: "s3"
	},
	{
		id: "compiler-path",
		title: "Compiler path (IntelliSense)",
		code: "C:\\msys64\\ucrt64\\bin\\g++.exe",
		step: "s4"
	},
	{
		id: "compile-hello",
		title: "হ্যালো ওয়ার্ল্ড কম্পাইল",
		code: "g++ -std=c++20 -O2 -Wall hello.cpp -o hello.exe",
		step: "s9"
	},
	{
		id: "compile-cp",
		title: "CP ফ্ল্যাগ দিয়ে কম্পাইল",
		code: "g++ -std=c++20 -O2 -Wall -Wextra -o a.exe %1",
		step: "s10"
	},
	{
		id: "run-input",
		title: "ফাইল থেকে ইনপুট নিয়ে রান",
		code: ".\\hello.exe < input.txt",
		step: "s9"
	}
];
var QUICK_REF = {
	paths: [
		{
			k: "MSYS2 root",
			v: "C:\\msys64"
		},
		{
			k: "Compiler bin",
			v: "C:\\msys64\\ucrt64\\bin"
		},
		{
			k: "g++.exe",
			v: "C:\\msys64\\ucrt64\\bin\\g++.exe"
		}
	],
	shortcuts: [
		{
			k: "Extensions",
			v: "Ctrl+Shift+X"
		},
		{
			k: "Command Palette",
			v: "Ctrl+Shift+P"
		},
		{
			k: "Code Runner",
			v: "Ctrl+Alt+N"
		},
		{
			k: "Run (no debug)",
			v: "Ctrl+F5"
		},
		{
			k: "এই গাইড সার্চ",
			v: "Ctrl+K"
		}
	],
	flags: [
		{
			k: "-std=c++20",
			v: "জাজের G++20-এর কাছাকাছি স্ট্যান্ডার্ড"
		},
		{
			k: "-O2",
			v: "স্পিড অপটিমাইজ — কনটেস্টে এটাই স্ট্যান্ডার্ড"
		},
		{
			k: "-Wall",
			v: "সাধারণ ওয়ার্নিং চালু"
		},
		{
			k: "-Wextra",
			v: "বাড়তি ওয়ার্নিং — বাগ ধরতে সাহায্য করে"
		},
		{
			k: "-g",
			v: "ডিবাগ সিম্বল — tasks.json-এ আছে"
		}
	],
	judge: [
		{
			k: "নাও",
			v: "GNU G++20 13.2 (64 bit, winlibs)"
		},
		{
			k: "বিকল্প",
			v: "GNU G++17 7.3.0"
		},
		{
			k: "এড়াও",
			v: "GNU GCC C11, খুব নতুন G++23"
		}
	]
};
var STEPS = {
	intro: {
		id: "intro",
		kicker: "শুরুর আগে",
		title: "এই গাইডে কী থাকছে",
		blurb: "তুমি এখন C জানো, আর এখন লক্ষ্য C++ দিয়ে Competitive Programming। কোড লেখার আগে দরকার একটা জায়গা যেখানে কোড লিখবে, কম্পাইল করবে আর রান করবে — সেটাই এই ডেস্ক ধাপে ধাপে বানিয়ে দেবে।",
		nextLabel: "পরবর্তী: সফটওয়্যার ইনস্টল",
		blocks: [
			{
				type: "p",
				text: "মোট ১০টা কাজের ধাপ আছে। বাম পাশের তালিকা থেকে যেকোনোটায় যাও, অথবা নিচের বাটন দিয়ে সিরিয়ালি এগোও। প্রতিটা ধাপ শেষ করলে টিক দাও — অগ্রগতি এই ব্রাউজারেই সেভ থাকবে।"
			},
			{
				type: "kv",
				items: [
					{
						k: "সময়",
						v: "প্রায় ৬০–৭০ মিনিট, একবারই"
					},
					{
						k: "সিস্টেম",
						v: "Windows 10/11, 64-bit"
					},
					{
						k: "লক্ষ্য",
						v: "VS Code + g++ ২০ স্ট্যান্ডার্ড, জাজে সাবমিট-রেডি"
					}
				]
			},
			{
				type: "why",
				why: {
					title: "কম্পাইলার আসলে কী?",
					body: "কম্পাইলার হলো একজন অনুবাদকের মতো। তুমি যে C++ কোড লেখো সেটা মানুষের পড়ার মতো ভাষায় — কিন্তু কম্পিউটার সরাসরি সেটা বোঝে না। কম্পাইলার (এখানে `g++`) তোমার কোডকে মেশিন কোডে রূপান্তর করে, তারপরই সেটা `.exe` হিসেবে রান করা যায়। Linux বা Mac-এ এই কম্পাইলার আগে থেকেই থাকে; Windows-এ নিজে থেকে ইনস্টল করতে হয় — এই গাইডের বড় অংশ আসলে সেটাই।"
				}
			},
			{
				type: "p",
				text: "সার্চ খুলতে `Ctrl+K` চাপো — ধাপ, কমান্ড বা এরর মেসেজ খুঁজে সরাসরি যেতে পারবে। ডান পাশের রেফারেন্স প্যানেলে PATH, শর্টকাট আর কম্পাইলার ফ্ল্যাগ সবসময় হাতের কাছে থাকবে।"
			}
		]
	},
	s1: {
		id: "s1",
		kicker: "ধাপ ১",
		title: "প্রয়োজনীয় সফটওয়্যার ডাউনলোড ও ইনস্টল",
		blurb: "চারটা জিনিস দরকার। প্রথম তিনটা বাধ্যতামূলক, শেষেরটা ঐচ্ছিক কিন্তু প্র্যাকটিসের জন্য সুবিধাজনক।",
		prevLabel: "ভূমিকা",
		nextLabel: "পরবর্তী: g++ কম্পাইলার",
		blocks: [{
			type: "subcards",
			cards: [
				{
					title: "১.১ Visual Studio Code",
					body: "সাইট নিজে থেকেই Windows ডিটেক্ট করে সঠিক ইনস্টলার দেখাবে। `.exe` রান করে ডিফল্ট সেটিংসেই ইনস্টল করো — পাথ বদলানোর দরকার নেই।",
					link: {
						href: "https://code.visualstudio.com/",
						label: "code.visualstudio.com"
					}
				},
				{
					title: "১.২ MSYS2 (C++ কম্পাইলার)",
					body: "Windows-এ নিজে থেকে `g++` থাকে না। MSYS2-এর ভেতরে `g++` আর `gdb` দুটোই আসে। ফাইলের নাম মোটামুটি `msys2-x86_64-YYYYMMDD.exe`। ইনস্টলেশন পাথ ডিফল্ট রাখো — `C:\\msys64`।",
					link: {
						href: "https://www.msys2.org/",
						label: "msys2.org"
					},
					warn: {
						title: "পাথ সতর্কতা",
						body: "ইনস্টলেশন পাথে স্পেস বা বাংলার মতো নন-ল্যাটিন অক্ষর রাখবে না — কম্পাইলার এগুলোতে সমস্যা করে।"
					}
				},
				{
					title: "১.৩ C/C++ এক্সটেনশন",
					body: "VS Code খুলে Extensions (`Ctrl+Shift+X`) থেকে `C++` সার্চ করে Microsoft-এর **C/C++** এক্সটেনশন ইনস্টল করো। IntelliSense, ডিবাগিং আর বিল্ড টাস্ক এর উপর দাঁড়ায়।"
				},
				{
					title: "১.৪ Code Runner (ঐচ্ছিক)",
					body: "Jun Han-এর **Code Runner** এক্সটেনশন ইনস্টল করলে `Ctrl+Alt+N`-এ এক ক্লিকে রান হয়। কনটেস্ট প্র্যাকটিসে সময় বাঁচায়।"
				}
			]
		}, {
			type: "why",
			why: {
				title: "কেন VS Code আর MSYS2 আলাদা?",
				body: "VS Code শুধু একটা এডিটর — নিজে থেকে কোনো ভাষা কম্পাইল করে না। কম্পাইলার (MSYS2/`g++`) আলাদা টুল যেটা আসল অনুবাদের কাজ করে। দুটো কনফিগার করে দিলে VS Code পুরোদমে একটা C++ IDE-এর মতো কাজ করে, অথচ হালকা থাকে।"
			}
		}]
	},
	s2: {
		id: "s2",
		kicker: "ধাপ ২",
		title: "MSYS2 টার্মিনালে g++ ইনস্টল",
		blurb: "MSYS2 ইনস্টল হয়ে গেলে Start মেনু থেকে **MSYS2 UCRT64** টার্মিনাল খোলো। তারপর কমান্ডগুলো একটার পর একটা চালাও।",
		prevLabel: "সফটওয়্যার ইনস্টল",
		nextLabel: "পরবর্তী: PATH সেট করা",
		blocks: [
			{
				type: "h3",
				text: "১. প্যাকেজ ডেটাবেস আপডেট"
			},
			{
				type: "code",
				snippet: {
					id: "pacman-update",
					code: "pacman -Syu"
				}
			},
			{
				type: "p",
				text: "কিছুটা সময় নিতে পারে। মাঝপথে থেমে গেলে টার্মিনাল বন্ধ করে আবার খুলে একই কমান্ড চালাও — এটা স্বাভাবিক।"
			},
			{
				type: "h3",
				text: "২. GCC / G++ ইনস্টল"
			},
			{
				type: "code",
				snippet: {
					id: "pacman-gcc",
					code: "pacman -S mingw-w64-ucrt-x86_64-gcc"
				}
			},
			{
				type: "p",
				text: "এক কমান্ডেই `gcc`, `g++` আর `gdb` — তিনটাই ইনস্টল হয়ে যায়।"
			},
			{
				type: "h3",
				text: "৩. ইনস্টলেশন যাচাই"
			},
			{
				type: "code",
				snippet: {
					id: "gpp-version",
					code: "g++ --version"
				}
			},
			{
				type: "p",
				text: "ভার্সন দেখালে (যেমন `g++ (Rev5, Built by MSYS2 project) 16.1.0`) বুঝবে সব ঠিকঠাক। এই আউটপুটটা ধরে রাখো — জাজে কম্পাইলার বাছাইয়ের সময় কাজে লাগবে।"
			},
			{
				type: "why",
				why: {
					title: "pacman, -Syu আর -S মানে কী?",
					body: "`pacman` হলো MSYS2-এর প্যাকেজ ম্যানেজার — Python-এর `pip` বা Linux-এর `apt`-এর মতো। `-Syu` মানে তালিকা সিঙ্ক করে আপগ্রেড করা; আগে না করলে পুরনো বেমানান ভার্সন ইনস্টল হতে পারে। `-S` মানে নির্দিষ্ট প্যাকেজ ইনস্টল।"
				}
			}
		]
	},
	s3: {
		id: "s3",
		kicker: "ধাপ ৩",
		title: "সিস্টেম PATH-এ কম্পাইলার যোগ করা",
		blurb: "কম্পাইলার ইনস্টল হলেও Command Prompt বা VS Code টার্মিনাল থেকে `g++` চলবে না — যতক্ষণ না bin ফোল্ডারটা PATH-এ থাকে।",
		prevLabel: "g++ কম্পাইলার",
		nextLabel: "পরবর্তী: IntelliSense",
		blocks: [
			{
				type: "why",
				why: {
					title: "PATH জিনিসটা আসলে কী?",
					body: "PATH একটা ঠিকানার তালিকা। টার্মিনালে `g++` লিখলে Windows জানে না প্রোগ্রামটা কোথায় — যদি না তুমি বলে দাও কোন ফোল্ডারগুলোতে খুঁজতে হবে। PATH-এ ফোল্ডার যোগ করা মানে সেই তালিকায় নতুন ঠিকানা দেওয়া।"
				}
			},
			{
				type: "h3",
				text: "সঠিক পাথ"
			},
			{
				type: "code",
				snippet: {
					id: "path",
					code: "C:\\msys64\\ucrt64\\bin",
					label: "User PATH-এ যোগ করো"
				}
			},
			{
				type: "h3",
				text: "যেভাবে যোগ করবে"
			},
			{
				type: "list",
				ordered: true,
				items: [
					"`Windows Key + R` চেপে `sysdm.cpl` লিখে এন্টার দাও।",
					"**Advanced** ট্যাব → **Environment Variables** → **User variables**-এর `Path` সিলেক্ট করে **Edit**।",
					"**New**-এ `C:\\msys64\\ucrt64\\bin` লিখে যোগ করো।",
					"সব উইন্ডোতে **OK** দিয়ে বন্ধ করো।",
					"পুরনো CMD / VS Code বন্ধ করে নতুন করে খোলো — পুরনো টার্মিনাল নতুন PATH দেখে না।"
				]
			},
			{
				type: "p",
				text: "যাচাই: নতুন Command Prompt-এ `g++ --version` — ভার্সন দেখালেই PATH ঠিক।"
			},
			{
				type: "warn",
				warn: {
					title: "সাধারণ ভুল",
					body: "অনেকে `C:\\msys64\\mingw64\\bin` দিয়ে ফেলে। UCRT64 দিয়ে ইনস্টল করলে আসল কম্পাইলার থাকে `C:\\msys64\\ucrt64\\bin`-এ। আগে নিচের কমান্ড দিয়ে ফাইলটা আছে কি না দেখে নাও।"
				}
			},
			{
				type: "code",
				snippet: {
					id: "dir-gpp",
					code: "dir C:\\msys64\\ucrt64\\bin\\g++.exe"
				}
			}
		]
	},
	s4: {
		id: "s4",
		kicker: "ধাপ ৪",
		title: "VS Code-এ IntelliSense কনফিগারেশন",
		blurb: "প্রথমবার কোনো `.cpp` ফাইল খুললে পপআপ আসবে: \"How would you like to configure IntelliSense for this folder?\" — `C:/msys64/ucrt64/bin/`-এ পাওয়া **Use g++.exe** সিলেক্ট করো।",
		prevLabel: "PATH সেট করা",
		nextLabel: "পরবর্তী: tasks.json",
		blocks: [
			{
				type: "why",
				why: {
					title: "IntelliSense কী কাজ করে?",
					body: "ফোনের কিবোর্ডের অটো-সাজেশনের মতো, কিন্তু কোডের জন্য — ফাংশনের নাম সাজেস্ট করে, ভুল থাকলে লাল দাগ দেখায়। ঠিকমতো কাজ করতে হলে জানা দরকার কোন কম্পাইলার আর কোন C++ স্ট্যান্ডার্ড ব্যবহার করছ।"
				}
			},
			{
				type: "p",
				text: "পপআপ মিস হলে: `Ctrl+Shift+P` → `C/C++: Edit Configurations (UI)` → Compiler path-এ নিচের পাথ বসাও। IntelliSense Mode `windows-gcc-x64` আর C++ standard `c++20` রাখো।"
			},
			{
				type: "code",
				snippet: {
					id: "compiler-path",
					code: "C:\\msys64\\ucrt64\\bin\\g++.exe",
					label: "Compiler path"
				}
			}
		]
	},
	s5: {
		id: "s5",
		kicker: "ধাপ ৫",
		title: "বিল্ড টাস্ক (tasks.json) কনফিগার করা",
		blurb: "ডিফল্ট Run বাটনে (▶️) ক্লিক করলে যদি `preLaunchTask 'C/C++: gcc.exe build active file' terminated with exit code -1` আসে — VS Code ভুল করে `gcc` খুঁজছে। নিজের হাতে টাস্ক ফাইল বানাও।",
		prevLabel: "IntelliSense",
		nextLabel: "পরবর্তী: কোড রান করা",
		blocks: [
			{
				type: "why",
				why: {
					title: "tasks.json কী?",
					body: "VS Code-কে দেওয়া একটা রেসিপি। Run চাপলে এই ফাইলের নির্দেশ অনুযায়ী কাজ হয় — কোন কম্পাইলার, কোন ফাইল, আউটপুট কোথায়। রেসিপি ছাড়া VS Code অনুমান করে, আর সেই অনুমান মাঝে মাঝে ভুল হয়।"
				}
			},
			{
				type: "list",
				ordered: true,
				items: ["প্রোজেক্ট ফোল্ডারে `.vscode` ফোল্ডার খোলো (না থাকলে বানাও)।", "সেখানে `tasks.json` বানিয়ে নিচের কনটেন্ট পেস্ট করো।"]
			},
			{
				type: "code",
				snippet: {
					id: "tasks-json",
					code: `{
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
}`,
					label: "tasks.json"
				}
			},
			{
				type: "h3",
				text: "এখানে কী কী আছে"
			},
			{
				type: "list",
				items: [
					"`\"command\"` — কম্পাইলারের সম্পূর্ণ পাথ, PATH ভাঙলেও কাজ করে।",
					"`\"args\"` — `-std=c++20 -O2 -Wall` যোগ করা হয়েছে যাতে লোকাল রান জাজের কাছাকাছি হয়।",
					"`\"label\"`-এ ইচ্ছাকৃতভাবে `gcc.exe` লেখা — VS Code ঠিক এই নামের টাস্ক খোঁজে।",
					"`\"problemMatcher\"` — কম্পাইল এরর Problems প্যানেলে দেখায়।"
				]
			}
		]
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
						body: "`tasks.json` ঠিক থাকলে কম্পাইল আর রান দুটোই হবে, gcc এরর ছাড়াই।"
					},
					{
						key: "Ctrl+Alt+N",
						body: "Code Runner ইনস্টল থাকলে এই শর্টকাটে সরাসরি রান হয় — আলাদা কনফিগ লাগে না।"
					},
					{
						key: "Ctrl+F5",
						body: "Run Without Debugging — ডিবাগারের বাড়তি লোডিং ছাড়া দ্রুত রান। প্র্যাকটিসে এটাই সবচেয়ে কাজের।"
					}
				]
			},
			{
				type: "p",
				text: "প্রোগ্রাম রান হলে নিচের টার্মিনাল প্যানেলেই ইনপুট দাও আর আউটপুট দেখো — অনলাইন জাজের মতো। `F5` (ডিবাগ) প্র্যাকটিসের সময় এড়িয়ে চলো; লাইব্রেরি লোড করতে সময় লাগে।"
			},
			{
				type: "warn",
				warn: {
					title: "ফাইলের নাম",
					body: "নামে স্পেস দিও না। `Problem_1.cpp` লিখো, `Problem 1.cpp` নয় — বিল্ড টাস্ক স্পেস সবসময় ঠিকমতো হ্যান্ডেল করে না।"
				}
			}
		]
	},
	s7: {
		id: "s7",
		kicker: "ধাপ ৭ · রেফারেন্স",
		title: "সাধারণ সমস্যা ও সমাধান",
		blurb: "সেটআপের সময় এই সমস্যাগুলোই সবচেয়ে বেশি হয়। আটকে গেলে মিলিয়ে দেখো, অথবা `Ctrl+K` দিয়ে এরর মেসেজ সার্চ করো।",
		prevLabel: "কোড রান করা",
		nextLabel: "পরবর্তী: জাজে কম্পাইলার",
		blocks: [{
			type: "troubles",
			items: [
				{
					tag: "এরর",
					title: "'g++' is not recognized",
					cause: "PATH-এ কম্পাইলারের `bin` ফোল্ডার নেই, অথবা ভুল পাথ দেওয়া হয়েছে।",
					fix: "ধাপ ৩ অনুযায়ী `C:\\msys64\\ucrt64\\bin` PATH-এ যোগ করো, তারপর CMD ও VS Code পুরোপুরি বন্ধ করে আবার খোলো।"
				},
				{
					tag: "এরর",
					title: "preLaunchTask 'gcc.exe build active file' terminated",
					cause: "VS Code ডিফল্টভাবে `gcc` খুঁজছে, ইনস্টল আছে `g++`।",
					fix: "ধাপ ৫-এর `tasks.json`-এ `command`-এ `g++.exe`-এর সম্পূর্ণ পাথ বসাও।"
				},
				{
					tag: "এরর",
					title: "ফাইলের নামে স্পেস থাকলে কম্পাইল এরর",
					cause: "বিল্ড টাস্ক স্পেসযুক্ত নাম সবসময় ঠিকভাবে কোট করে না।",
					fix: "আন্ডারস্কোর ব্যবহার করো — `Problem_1.cpp`।"
				},
				{
					tag: "স্লো",
					title: "ডিবাগ মোডে (F5) অপ্রয়োজনীয় লোডিং",
					cause: "F5 চাপলে ডিবাগার সব লাইব্রেরি লোড করে, প্র্যাকটিসে দরকার নেই।",
					fix: "`Ctrl+F5` বা Code Runner-এর `Ctrl+Alt+N` ব্যবহার করো।"
				},
				{
					tag: "এরর",
					title: "'.\\Problem_2.exe' is not recognized",
					cause: "ফাইল তৈরিই হয়নি (কম্পাইল ফেইল), অথবা ভুল ফোল্ডারে আছে।",
					fix: "`dir` দিয়ে `.exe` আছে কি না দেখো। না থাকলে সরাসরি পুরো পাথ দিয়ে কম্পাইল করো।",
					code: {
						id: "manual-compile",
						code: "C:\\msys64\\ucrt64\\bin\\g++.exe Problem_2.cpp -o Problem_2.exe"
					}
				},
				{
					tag: "এরর",
					title: "bits/stdc++.h: No such file or directory",
					cause: "ভুল কম্পাইলার (MSVC) সিলেক্ট হয়েছে, অথবা IntelliSense/টাস্ক `cl.exe` ধরেছে।",
					fix: "Compiler path `g++.exe`-এ সেট করো। `bits/stdc++.h` শুধু GCC/MinGW-এ আছে, MSVC-তে নয়।"
				}
			]
		}]
	},
	s8: {
		id: "s8",
		kicker: "ধাপ ৮",
		title: "অনলাইন জাজে কম্পাইলার ভার্সন নির্বাচন",
		blurb: "Codeforces-এর মতো জাজে সাবমিট করার সময় যে কম্পাইলার নেবে সেটা তোমার লোকাল কম্পাইলারের কাছাকাছি হওয়া দরকার।",
		prevLabel: "সমস্যা সমাধান",
		nextLabel: "পরবর্তী: প্রথম প্রোগ্রাম",
		blocks: [{
			type: "list",
			items: [
				"**নাও:** `GNU G++20 13.2 (64 bit, winlibs)` অথবা `GNU G++17 7.3.0`।",
				"**কেন:** লোকাল MSYS2 `g++` সাধারণত C++20 পুরোপুরি সাপোর্ট করে। জাজের G++20 (13.2)-এর সাথে আচরণ সবচেয়ে বেশি মেলে।",
				"**এড়িয়ে চলো:** `GNU GCC C11` — এটা C কম্পাইলার, C++ না। খুব নতুন `G++23`-ও এড়াও; কিছু জাজে লাইব্রেরি মিলতে পারে না।"
			]
		}, {
			type: "why",
			why: {
				title: "কেন ভার্সন মেলানো জরুরি?",
				body: "C++-এর প্রতিটা স্ট্যান্ডার্ডে (11, 14, 17, 20) নতুন ফিচার আসে — structured bindings, ranges। লোকাল কম্পাইলার সাপোর্ট করলেও জাজের পুরনো কম্পাইলার না-ও করতে পারে। ফলে লোকালে চলা কোড জাজে Compilation Error দিতে পারে — কোড ভুল নয়, ভার্সন না মেলার কারণে।"
			}
		}]
	},
	s9: {
		id: "s9",
		kicker: "ধাপ ৯",
		title: "প্রথম প্রোগ্রাম — সেটআপ যাচাই",
		blurb: "সব কনফিগারেশন কাজ করছে কি না একটা ছোট প্রোগ্রাম দিয়ে নিশ্চিত করো। এই ধাপ পার হলে পরিবেশ সাবমিট-রেডি।",
		prevLabel: "জাজে কম্পাইলার",
		nextLabel: "পরবর্তী: CP টেমপ্লেট",
		blocks: [
			{
				type: "list",
				ordered: true,
				items: [
					"যেমন `C:\\cp` নামে একটা ফোল্ডার বানাও — পাথে স্পেস রাখো না।",
					"VS Code-এ **File → Open Folder** দিয়ে সেই ফোল্ডার খোলো।",
					"`hello.cpp` নামে ফাইল বানিয়ে নিচের কোড পেস্ট করো।"
				]
			},
			{
				type: "sample",
				filename: "hello.cpp",
				code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string name;
    if (!(cin >> name)) name = "CP";
    cout << "Hello, " << name << "\\n";
    return 0;
}`,
				compile: "g++ -std=c++20 -O2 -Wall hello.cpp -o hello.exe",
				output: "Hello, CP"
			},
			{
				type: "p",
				text: "টার্মিনালে প্রোগ্রাম রান করে `CP` লিখে এন্টার দাও। আউটপুট `Hello, CP` হলে কম্পাইলার, PATH আর VS Code — তিনটেই ঠিক আছে।"
			},
			{
				type: "h3",
				text: "ফাইল থেকে ইনপুট (জাজের মতো)"
			},
			{
				type: "p",
				text: "একই ফোল্ডারে `input.txt` বানিয়ে এক লাইনে `World` লেখো, তারপর:"
			},
			{
				type: "code",
				snippet: {
					id: "run-input",
					code: ".\\hello.exe < input.txt"
				}
			},
			{
				type: "p",
				text: "আউটপুট হবে `Hello, World`। কনটেস্টে স্যাম্পল ইনপুট এভাবেই টেস্ট করো — হাতে বারবার টাইপ করতে হয় না।"
			},
			{
				type: "why",
				why: {
					title: "bits/stdc++.h কেন?",
					body: "GCC/MinGW-এর এই হেডার practically সব স্ট্যান্ডার্ড লাইব্রেরি টেনে আনে। কনটেস্টে `#include` লিখতে সময় বাঁচে। MSVC-তে এটা নেই — তাই g++ দরকার। প্রোডাকশন কোডে এটা ব্যবহার হয় না; CP-তে স্ট্যান্ডার্ড।"
				}
			}
		]
	},
	s10: {
		id: "s10",
		kicker: "ধাপ ১০",
		title: "Competitive Programming টেমপ্লেট ও ফ্ল্যাগ",
		blurb: "লোকাল কম্পাইল জাজের কাছাকাছি রাখতে একই স্ট্যান্ডার্ড, অপটিমাইজেশন আর ওয়ার্নিং ব্যবহার করো। নিচের টেমপ্লেটটা স্টার্টার হিসেবে রাখো।",
		prevLabel: "প্রথম প্রোগ্রাম",
		nextLabel: "পরবর্তী: চূড়ান্ত চেকলিস্ট",
		blocks: [
			{
				type: "h3",
				text: "কম্পাইল কমান্ড (জাজ-মিরর)"
			},
			{
				type: "code",
				snippet: {
					id: "compile-cp",
					code: "g++ -std=c++20 -O2 -Wall -Wextra sol.cpp -o sol.exe",
					label: "কনটেস্ট স্টাইল"
				}
			},
			{
				type: "kv",
				items: [
					{
						k: "-std=c++20",
						v: "জাজের G++20-এর সাথে মিল"
					},
					{
						k: "-O2",
						v: "স্পিড — TLE এড়াতে জাজেও এটাই"
					},
					{
						k: "-Wall -Wextra",
						v: "সাইলেন্ট বাগ ধরতে"
					}
				]
			},
			{
				type: "h3",
				text: "স্টার্টার টেমপ্লেট"
			},
			{
				type: "code",
				snippet: {
					id: "cp-template",
					code: `#include <bits/stdc++.h>
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
}`,
					label: "sol.cpp"
				}
			},
			{
				type: "list",
				items: [
					"`ios::sync_with_stdio(false)` আর `cin.tie(nullptr)` — বড় ইনপুটে cin/cout কে scanf-এর কাছাকাছি করে।",
					"মাল্টি-টেস্ট প্রবলেমে `cin >> t` আনকমেন্ট করো।",
					"`endl` ব্যবহার কোরো না; `\\n` দিলে ফ্ল্যাশ হয় না, বড় আউটপুটে ফারাক হয়।",
					"গ্লোবাল `using namespace std;` CP-তে চলে; বড় প্রোজেক্টে চলে না — এখানে ঠিক আছে।"
				]
			},
			{
				type: "warn",
				warn: {
					title: "ম্যাক্রো সাবধান",
					body: "`#define int long long` এর মতো ম্যাক্রো অনেক স্টার্টার প্যাক আসে। এড়িয়ে চলো — ওভারফ্লো ঢেকে দেয়, ডিবাগ কঠিন করে, আর কিছু জাজে unexpected আচরণ হয়। দরকার হলে `long long` স্পষ্ট করে লেখো।"
				}
			}
		]
	},
	checklist: {
		id: "checklist",
		kicker: "সারসংক্ষেপ",
		title: "চূড়ান্ত চেকলিস্ট",
		blurb: "পুরো সেটআপ একনজরে — একটা একটা করে টিক দিয়ে যাও। সবগুলো টিক হলে পরিবেশ রেডি।",
		prevLabel: "CP টেমপ্লেট",
		blocks: [{
			type: "checks",
			items: [
				{
					id: "c1",
					label: "VS Code ডাউনলোড ও ইনস্টল (code.visualstudio.com)"
				},
				{
					id: "c2",
					label: "MSYS2 ডাউনলোড ও ইনস্টল (msys2.org), পাথ `C:\\msys64`"
				},
				{
					id: "c3",
					label: "UCRT64-এ `pacman -S mingw-w64-ucrt-x86_64-gcc` চালানো"
				},
				{
					id: "c4",
					label: "`C:\\msys64\\ucrt64\\bin` PATH-এ যোগ করা, নতুন টার্মিনালে `g++ --version` কাজ করে"
				},
				{
					id: "c5",
					label: "VS Code-এ Microsoft C/C++ এক্সটেনশন ইনস্টল"
				},
				{
					id: "c6",
					label: "IntelliSense-এ g++ সিলেক্ট, স্ট্যান্ডার্ড c++20"
				},
				{
					id: "c7",
					label: "`tasks.json`-এ g++.exe পাথ ও `-std=c++20 -O2`"
				},
				{
					id: "c8",
					label: "Code Runner ইনস্টল (ঐচ্ছিক)"
				},
				{
					id: "c9",
					label: "`hello.cpp` কম্পাইল ও রান, আউটপুট মিলেছে"
				},
				{
					id: "c10",
					label: "অনলাইন জাজে GNU G++20 সিলেক্ট করে টেস্ট সাবমিট"
				},
				{
					id: "c11",
					label: "CP টেমপ্লেট ফোল্ডারে সেভ করা"
				}
			]
		}]
	}
};
var TROUBLES = STEPS.s7.blocks.find((b) => b.type === "troubles").items;
function stepIndex(id) {
	return STEP_IDS.indexOf(id);
}
function adjacent(id) {
	const i = stepIndex(id);
	return {
		prev: i > 0 ? STEP_IDS[i - 1] : void 0,
		next: i < STEP_IDS.length - 1 ? STEP_IDS[i + 1] : void 0
	};
}
function isStepId(value) {
	return !!value && STEP_IDS.includes(value);
}
var TOTAL_MINUTES = NAV.reduce((sum, n) => sum + n.minutes, 0);
var emptyCompleted = () => Object.fromEntries(STEP_IDS.map((id) => [id, false]));
var emptyChecks = () => Object.fromEntries(CHECK_IDS.map((id) => [id, false]));
function applyTheme(theme) {
	if (typeof document === "undefined") return;
	document.documentElement.dataset.theme = theme;
}
var useProgress = create()(persist((set, get) => ({
	completed: emptyCompleted(),
	checks: emptyChecks(),
	theme: "light",
	toggleStep: (id) => {
		set({ completed: {
			...get().completed,
			[id]: !get().completed[id]
		} });
	},
	setStepDone: (id, done) => {
		set({ completed: {
			...get().completed,
			[id]: done
		} });
	},
	toggleCheck: (id) => {
		set({ checks: {
			...get().checks,
			[id]: !get().checks[id]
		} });
	},
	setTheme: (theme) => {
		applyTheme(theme);
		set({ theme });
	},
	reset: () => {
		set({
			completed: emptyCompleted(),
			checks: emptyChecks()
		});
	}
}), {
	name: "compiler-desk-progress-v1",
	skipHydration: true
}));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
async function copyText(text) {
	try {
		if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(text);
		else {
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
function CodeBlock({ code, label, className }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	async function onCopy() {
		if (await copyText(code)) {
			setCopied(true);
			toast.success("ক্লিপবোর্ডে কপি হয়েছে");
			window.setTimeout(() => setCopied(false), 1600);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("overflow-hidden rounded-lg bg-code shadow-border", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3 border-b border-white/10 px-3 py-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "truncate font-mono text-xs text-code-muted",
				children: label ?? "command"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onCopy,
				className: "inline-flex h-8 items-center gap-1.5 rounded-sm px-2 font-mono text-xs text-code-muted transition-colors duration-150 hover:bg-white/5 hover:text-code-fg",
				"aria-label": "কপি",
				children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" }), copied ? "কপি হয়েছে" : "কপি"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "overflow-x-auto p-4 text-sm leading-relaxed text-code-fg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: code })
		})]
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-ink/40", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, showClose = true, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed top-1/2 left-1/2 z-50 w-dialog -translate-x-1/2 -translate-y-1/2 rounded-xl bg-raised p-5 text-ink shadow-border", className),
	...props,
	children: [children, showClose ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
		className: "absolute top-3 right-3 inline-flex size-8 items-center justify-center rounded-md text-muted hover:bg-surface hover:text-ink",
		"aria-label": "বন্ধ",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
	}) : null]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-serif text-lg font-semibold tracking-tight", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("text-sm text-muted", className),
		...props
	});
}
function CommandPalette({ open, onOpenChange, onGo }) {
	const [query, setQuery] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!open) setQuery("");
	}, [open]);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				onOpenChange(!open);
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open, onOpenChange]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			showClose: false,
			className: "top-20 -translate-y-0 overflow-hidden p-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "sr-only",
				children: "সার্চ"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e, {
				className: "bg-raised text-ink",
				label: "সার্চ",
				filter: (value, search) => value.includes(search.toLowerCase()) ? 1 : 0,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 border-b border-line px-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-faint" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Input, {
							value: query,
							onValueChange: setQuery,
							placeholder: "ধাপ, কমান্ড বা এরর খুঁজুন…",
							className: "h-12 w-full bg-transparent text-sm outline-none placeholder:text-faint"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
							className: "hidden rounded-sm border border-line px-1.5 py-0.5 font-mono text-xs text-faint sm:inline",
							children: "Esc"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e.List, {
					className: "max-h-80 overflow-y-auto p-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Empty, {
							className: "px-3 py-8 text-center text-sm text-muted",
							children: "কিছু পাওয়া যায়নি"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
							heading: "ধাপ",
							className: "text-xs text-faint",
							children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e.Item, {
								value: `${item.label} ${item.short} ${STEPS[item.id].title}`.toLowerCase(),
								onSelect: () => {
									onGo(item.id);
									onOpenChange(false);
								},
								className: "flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm text-ink aria-selected:bg-accent-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hash, { className: "size-3.5 text-faint" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "ml-auto font-mono text-xs text-faint",
										children: [item.minutes, " মি"]
									})
								]
							}, item.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
							heading: "কমান্ড",
							className: "mt-2 text-xs text-faint",
							children: COMMANDS.map((cmd) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e.Item, {
								value: `${cmd.title} ${cmd.code}`.toLowerCase(),
								onSelect: async () => {
									await copyText(cmd.code);
									onGo(cmd.step);
									onOpenChange(false);
								},
								className: "flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm text-ink aria-selected:bg-accent-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "size-3.5 text-faint" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0 flex-1 truncate",
										children: cmd.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden max-w-40 truncate font-mono text-xs text-faint sm:block",
										children: cmd.code
									})
								]
							}, cmd.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
							heading: "সমস্যা",
							className: "mt-2 text-xs text-faint",
							children: TROUBLES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e.Item, {
								value: `${t.title} error trouble`.toLowerCase(),
								onSelect: () => {
									onGo("s7");
									onOpenChange(false);
								},
								className: "flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm text-ink aria-selected:bg-accent-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCode2, { className: "size-3.5 text-faint" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: t.title
								})]
							}, t.title))
						})
					]
				})]
			})]
		})
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-150 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:not-disabled:scale-[0.96] active:not-disabled:transition-transform", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:opacity-90",
			secondary: "bg-raised text-ink shadow-border hover:shadow-border-hover",
			ghost: "text-muted hover:bg-surface hover:text-ink",
			outline: "border border-line bg-transparent text-ink hover:bg-surface",
			soft: "bg-accent-soft text-accent hover:bg-accent hover:text-accent-fg",
			warn: "bg-warn-soft text-warn hover:bg-warn hover:text-warn-fg"
		},
		size: {
			default: "h-10 px-4",
			sm: "h-8 px-3 text-xs",
			lg: "h-11 px-5",
			icon: "size-10",
			"icon-sm": "size-8"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function Row({ k, v, copy }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start justify-between gap-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs text-faint",
				children: k
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "truncate font-mono text-sm text-ink",
				children: v
			})]
		}), copy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "button",
			size: "sm",
			variant: "ghost",
			className: "shrink-0",
			onClick: () => copyText(v),
			children: "কপি"
		}) : null]
	});
}
function QuickRefBody() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-1 font-serif text-sm font-semibold",
				children: "পাথ"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-line",
				children: QUICK_REF.paths.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
					k: row.k,
					v: row.v,
					copy: true
				}, row.k))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-1 font-serif text-sm font-semibold",
				children: "শর্টকাট"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-line",
				children: QUICK_REF.shortcuts.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
					k: row.k,
					v: row.v
				}, row.k))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-1 font-serif text-sm font-semibold",
				children: "কম্পাইলার ফ্ল্যাগ"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-line",
				children: QUICK_REF.flags.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
					k: row.k,
					v: row.v,
					copy: true
				}, row.k))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-1 font-serif text-sm font-semibold",
				children: "জাজ"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-line",
				children: QUICK_REF.judge.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
					k: row.k,
					v: row.v
				}, row.k))
			})] })
		]
	});
}
var TOKEN = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
function InlineText({ text, className }) {
	const parts = text.split(TOKEN);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className,
		children: parts.map((part, i) => {
			if (part.startsWith("**") && part.endsWith("**")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
				className: "font-medium text-ink",
				children: part.slice(2, -2)
			}, i);
			if (part.startsWith("`") && part.endsWith("`")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
				className: "rounded-sm bg-accent-soft px-1 py-px font-mono text-xs text-accent",
				children: part.slice(1, -1)
			}, i);
			const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
			if (link) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: link[2],
				target: "_blank",
				rel: "noopener noreferrer",
				className: "text-accent underline decoration-line underline-offset-2 hover:decoration-accent",
				children: link[1]
			}, i);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: part }, i);
		})
	});
}
var badgeVariants = cva("inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium", {
	variants: { variant: {
		default: "bg-accent-soft text-accent",
		muted: "bg-surface text-muted",
		ok: "bg-ok-soft text-ok",
		warn: "bg-warn-soft text-warn",
		outline: "border border-line text-muted"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function Why({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
		className: "group rounded-lg bg-accent-soft px-4 py-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
			className: "flex cursor-pointer list-none items-center justify-between gap-3 py-3 text-sm font-medium text-accent [&::-webkit-details-marker]:hidden",
			children: [title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0 transition-transform duration-150 group-open:rotate-180" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "pb-3 text-sm text-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, { text: body })
		})]
	});
}
function Warn({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "rounded-lg bg-warn-soft px-4 py-3 text-sm text-warn",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-medium",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, { text: body })
		})]
	});
}
function TroubleList({ items }) {
	const [q, setQ] = (0, import_react.useState)("");
	const filtered = items.filter((t) => {
		return `${t.tag} ${t.title} ${t.cause} ${t.fix}`.toLowerCase().includes(q.trim().toLowerCase());
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "এরর মেসেজ দিয়ে ফিল্টার…",
				className: "flex h-10 w-full rounded-md border border-line bg-raised px-3 text-sm shadow-border placeholder:text-faint"
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "কোনো মিল পাওয়া যায়নি।"
			}) : null,
			filtered.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "group rounded-lg bg-surface px-4 py-1 shadow-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
					className: "flex cursor-pointer list-none items-start gap-3 py-3 [&::-webkit-details-marker]:hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: t.tag === "স্লো" ? "muted" : "warn",
							children: t.tag
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1 font-medium",
							children: t.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "mt-0.5 size-4 shrink-0 text-faint transition-transform duration-150 group-open:rotate-180" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 pb-3 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-ink",
							children: "কারণ: "
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, { text: t.cause })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-ink",
							children: "সমাধান: "
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, { text: t.fix })] }),
						t.code ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, { code: t.code.code }) : null
					]
				})]
			}, t.title))
		]
	});
}
function StepArticle({ id, onGo }) {
	const doc = STEPS[id];
	const completed = useProgress((s) => s.completed);
	const checks = useProgress((s) => s.checks);
	const toggleStep = useProgress((s) => s.toggleStep);
	const setStepDone = useProgress((s) => s.setStepDone);
	const toggleCheck = useProgress((s) => s.toggleCheck);
	const { prev, next } = adjacent(id);
	const isTracked = TRACKED_STEPS.includes(id);
	const done = !!completed[id];
	const checkItems = doc.blocks.find((b) => b.type === "checks")?.type === "checks" ? doc.blocks.find((b) => b.type === "checks").items : [];
	const allChecked = checkItems.length > 0 && checkItems.every((c) => checks[c.id]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-xs tracking-wide text-faint uppercase",
						children: doc.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-serif text-3xl font-semibold tracking-tight text-ink",
						children: doc.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-prose text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, { text: doc.blurb })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-5",
				children: doc.blocks.map((block, i) => {
					switch (block.type) {
						case "p": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-prose text-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, { text: block.text })
						}, i);
						case "h3": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-lg font-semibold text-ink",
							children: block.text
						}, i);
						case "list": return block.ordered ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "max-w-prose list-decimal space-y-2 pl-5 text-muted",
							children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, { text: item }) }, item))
						}, i) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "max-w-prose list-disc space-y-2 pl-5 text-muted",
							children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, { text: item }) }, item))
						}, i);
						case "code": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
							code: block.snippet.code,
							label: block.snippet.label
						}, i);
						case "why": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Why, {
							title: block.why.title,
							body: block.why.body
						}, i);
						case "warn": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Warn, {
							title: block.warn.title,
							body: block.warn.body
						}, i);
						case "subcards": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 sm:grid-cols-2",
							children: block.cards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-surface p-4 shadow-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-base font-semibold",
										children: card.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, { text: card.body })
									}),
									card.link ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: card.link.href,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "mt-3 inline-flex text-sm text-accent underline decoration-line underline-offset-2 hover:decoration-accent",
										children: card.link.label
									}) : null,
									card.warn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Warn, {
											title: card.warn.title,
											body: card.warn.body
										})
									}) : null
								]
							}, card.title))
						}, i);
						case "runs": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 sm:grid-cols-3",
							children: block.cards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-surface p-4 shadow-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-sm text-accent",
									children: card.key
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, { text: card.body })
								})]
							}, card.key))
						}, i);
						case "troubles": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TroubleList, { items: block.items }, i);
						case "sample": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
									code: block.code,
									label: block.filename
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
									code: block.compile,
									label: "কম্পাইল"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg bg-ok-soft px-4 py-3 text-sm text-ok",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-medium",
										children: "প্রত্যাশিত আউটপুট"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
										className: "mt-1 font-mono",
										children: block.output
									})]
								})
							]
						}, i);
						case "kv": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "grid gap-3 sm:grid-cols-3",
							children: block.items.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-surface p-4 shadow-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs text-faint",
									children: row.k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-sm text-ink",
									children: row.v
								})]
							}, row.k))
						}, i);
						case "checks": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "divide-y divide-line rounded-lg bg-surface shadow-border",
							children: block.items.map((item) => {
								const on = !!checks[item.id];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex cursor-pointer items-start gap-3 px-4 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: on,
										onChange: () => toggleCheck(item.id),
										className: "mt-1 size-4 rounded-sm border border-line accent-ok"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("text-sm", on ? "text-faint line-through" : "text-ink"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, { text: item.label })
									})]
								}) }, item.id);
							})
						}, i);
						default: return null;
					}
				})
			}),
			id === "checklist" && allChecked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3 rounded-lg bg-ok-soft px-4 py-3 text-ok",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: "পুরো সেটআপ শেষ। এখন C++ আর Competitive Programming চর্চায় মন দিতে পারো।"
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between",
				children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					onClick: () => onGo(prev),
					children: ["← ", STEPS[prev].kicker]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [isTracked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: done ? "soft" : "outline",
						onClick: () => {
							if (!done && next) {
								setStepDone(id, true);
								onGo(next);
							} else toggleStep(id);
						},
						children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), " সম্পন্ন"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "size-4" }),
							" ",
							next ? "সম্পন্ন করে এগোও" : "সম্পন্ন করেছি"
						] })
					}) : null, next ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => onGo(next),
						children: doc.nextLabel ?? "পরবর্তী ধাপ"
					}) : null]
				})]
			})
		]
	});
}
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: "size-8 text-accent",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "2",
				y: "2",
				width: "28",
				height: "28",
				rx: "8",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 10 L7 16 L12 22",
				fill: "none",
				stroke: "var(--accent-fg)",
				strokeWidth: "2.2",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M18 10 L23 16 L18 22",
				fill: "none",
				stroke: "var(--accent-fg)",
				strokeWidth: "2.2",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			})
		]
	});
}
function GuideApp({ step, onStep }) {
	const completed = useProgress((s) => s.completed);
	const theme = useProgress((s) => s.theme);
	const setTheme = useProgress((s) => s.setTheme);
	const reset = useProgress((s) => s.reset);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [refOpen, setRefOpen] = (0, import_react.useState)(false);
	const [resetOpen, setResetOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const unsub = useProgress.persist.onFinishHydration((state) => {
			applyTheme(state.theme);
		});
		useProgress.persist.rehydrate();
		return unsub;
	}, []);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			const target = e.target;
			if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) return;
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
	const pct = Math.round(doneCount / TRACKED_STEPS.length * 100);
	const remainingMin = (0, import_react.useMemo)(() => NAV.filter((n) => TRACKED_STEPS.includes(n.id) && !completed[n.id]).reduce((sum, n) => sum + n.minutes, 0), [completed]);
	const current = NAV.find((n) => n.id === step) ?? NAV[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-canvas text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-raised focus:px-3 focus:py-2",
				children: "কন্টেন্টে যান"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-30 border-b border-line bg-canvas/90 backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-14 max-w-7xl items-center gap-3 px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate font-serif text-base font-semibold leading-tight",
								children: "Compiler Desk"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden truncate font-mono text-xs text-faint sm:block",
								children: "VS Code · C++ · Windows"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "sm",
								onClick: () => setSearchOpen(true),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: "সার্চ"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
										className: "hidden rounded-sm border border-line px-1 font-mono text-xs text-faint lg:inline",
										children: "Ctrl+K"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon-sm",
								className: "xl:hidden",
								"aria-label": "রেফারেন্স",
								onClick: () => setRefOpen(true),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelRight, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon-sm",
								"aria-label": theme === "dark" ? "লাইট মোড" : "ডার্ক মোড",
								onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative size-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: cn("absolute inset-0 size-4 transition-[opacity,transform,filter] duration-300", theme === "dark" ? "scale-100 opacity-100 blur-0" : "scale-25 opacity-0 blur-sm") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: cn("absolute inset-0 size-4 transition-[opacity,transform,filter] duration-300", theme === "light" ? "scale-100 opacity-100 blur-0" : "scale-25 opacity-0 blur-sm") })]
								})
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-1 bg-surface",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full bg-accent transition-[width] duration-300 ease-out",
						style: { width: `${pct}%` }
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[220px_minmax(0,1fr)_260px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "border-b border-line lg:sticky lg:top-header lg:h-panel lg:overflow-y-auto lg:border-r lg:border-b-0",
						"aria-label": "ধাপ",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1 overflow-x-auto px-3 py-2 lg:flex-col lg:overflow-visible lg:px-3 lg:py-5",
							children: NAV.map((item) => {
								const active = item.id === step;
								const isDone = !!completed[item.id];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => onStep(item.id),
									"aria-current": active ? "step" : void 0,
									className: cn("flex shrink-0 items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm transition-colors duration-150", active ? "bg-accent-soft text-accent" : "text-muted hover:bg-surface hover:text-ink"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("inline-flex size-6 items-center justify-center rounded-full border font-mono text-xs", isDone ? "border-ok bg-ok text-ok-fg" : active ? "border-accent text-accent" : "border-line text-faint"),
											children: isDone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" }) : item.pad
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "hidden lg:inline",
											children: item.label
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "lg:hidden",
											children: item.short
										})
									]
								}, item.id);
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
						id: "content",
						className: "min-w-0 px-4 py-8 sm:px-8",
						children: [step === "intro" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "mb-8 rounded-xl bg-surface p-6 shadow-border sm:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-xs text-faint",
									children: "সেটআপ গাইড · C/C++ · VS Code"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-2 max-w-xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl",
									children: "VS Code-এ C++ সেটআপ — শূন্য থেকে শুরু"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-prose text-muted",
									children: "Competitive Programming-এর প্রথম ধাপ: কম্পিউটারে একটা কাজ-করা C++ পরিবেশ। অগ্রগতি এখানেই সেভ থাকে, কমান্ড এক ক্লিকে কপি হয়, আর সমস্যা হলে সার্চ করে সমাধান পাবে।"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-6 grid gap-3 sm:grid-cols-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-lg bg-raised p-3 shadow-border",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-xs text-faint",
												children: "ধাপ"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
												className: "font-mono text-lg tabular-nums",
												children: [
													doneCount,
													"/",
													TRACKED_STEPS.length
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-lg bg-raised p-3 shadow-border",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-xs text-faint",
												children: "বাকি সময়"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
												className: "font-mono text-lg tabular-nums",
												children: [remainingMin, " মি"]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-lg bg-raised p-3 shadow-border",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-xs text-faint",
												children: "মোট"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
												className: "font-mono text-lg tabular-nums",
												children: [TOTAL_MINUTES, " মি"]
											})]
										})
									]
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 flex flex-wrap items-center gap-2 text-xs text-faint",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-3.5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"ধাপ ",
									STEP_IDS.indexOf(step) + 1,
									" / ",
									STEP_IDS.length
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "·"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [current.minutes, " মিনিট"] })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepArticle, {
							id: step,
							onGo: onStep
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						className: "hidden border-l border-line xl:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sticky top-header h-panel overflow-y-auto px-4 py-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-6 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-serif text-sm font-semibold",
										children: "অগ্রগতি"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setResetOpen(true),
										className: "inline-flex items-center gap-1 text-xs text-faint hover:text-warn",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3" }), "রিসেট"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mb-6 font-mono text-sm tabular-nums text-muted",
									children: [
										doneCount,
										" / ",
										TRACKED_STEPS.length,
										" ধাপ · ",
										pct,
										"%"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mb-3 font-serif text-sm font-semibold",
									children: "দ্রুত রেফারেন্স"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickRefBody, {})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line px-4 py-6 text-center text-sm text-faint",
				children: "কোনো ধাপে আটকে গেলে এরর মেসেজটা সার্চ করো — ধাপ ৭-এ সাধারণ সমস্যাগুলোর সমাধান আছে।"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandPalette, {
				open: searchOpen,
				onOpenChange: setSearchOpen,
				onGo: onStep
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: refOpen,
				onOpenChange: setRefOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-h-sheet overflow-y-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "দ্রুত রেফারেন্স" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
							className: "mb-4",
							children: "পাথ, শর্টকাট আর কম্পাইলার ফ্ল্যাগ — সবসময় হাতের কাছে।"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickRefBody, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "warn",
								size: "sm",
								onClick: () => setResetOpen(true),
								children: "প্রোগ্রেস রিসেট"
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: resetOpen,
				onOpenChange: setResetOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "সব প্রোগ্রেস মুছবে?" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "ধাপের টিক আর চেকলিস্ট মুছে যাবে। কমান্ড বা কনটেন্ট থাকবে।" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex justify-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: () => setResetOpen(false),
							children: "থাক"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "warn",
							onClick: () => {
								reset();
								setResetOpen(false);
							},
							children: "মুছে ফেলো"
						})]
					})
				] })
			})
		]
	});
}
function parseStep(value) {
	return isStepId(typeof value === "string" ? value : void 0) ? value : "intro";
}
function Home() {
	const { step: raw } = Route.useSearch();
	const navigate = useNavigate({ from: "/" });
	const step = parseStep(raw);
	function onStep(id) {
		navigate({
			search: id === "intro" ? {} : { step: id },
			replace: true
		});
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuideApp, {
		step,
		onStep
	});
}
//#endregion
export { Home as component };
