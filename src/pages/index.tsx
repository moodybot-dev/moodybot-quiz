import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const quizzes = [
  {
    icon: "⚔️",
    title: "What's Your Emotional Weapon?",
    subtitle:
      "Discover the hidden power that makes you uniquely effective in life's challenges. This personality assessment reveals your authentic emotional strengths.",
    href: "/emotional-weapon/start",
  },
  {
    icon: "🦹‍♂️",
    title: "What Type of MCU Villain Are You?",
    subtitle:
      "You’re not evil. You’re inevitable. A symptom of their failures, sharpened by pain. You didn’t choose darkness. It recognized you. Now let’s name the monster they made.",
    href: "/quiz/mcu-villain/start",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-neutral-800 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-4 text-center">
        MoodyBot Quizzes
      </h1>
      <p className="text-zinc-300 text-center max-w-xl mb-10">
        Emotional diagnostics, identity mirrors, and villainy tests — all laced with style and subtext.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {quizzes.map((quiz) => (
          <Card
            key={quiz.href}
            className="p-6 bg-zinc-900 border border-zinc-700 rounded-xl shadow-md flex flex-col justify-between text-center text-white"
          >
            <div className="mb-4">
              {/* Icon */}
              <div className="text-4xl mb-2">{quiz.icon}</div>

              {/* Title */}
              <h2 className="text-xl font-bold mb-2">{quiz.title}</h2>

              {/* Description */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                {quiz.subtitle}
              </p>

              {/* Stats */}
              <div className="mb-4 p-3 bg-zinc-800 rounded-xl text-xs text-zinc-400 flex justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                  7 Questions
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  2 Minutes
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  Instant Results
                </span>
              </div>

              {/* Start Button */}
              <Link href={quiz.href}>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white w-full text-sm">
                  Start Quiz
                </Button>
              </Link>

              {/* Footer Note */}
              <p className="text-xs text-zinc-500 mt-3 text-center">
                Your results are private and not stored.
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
