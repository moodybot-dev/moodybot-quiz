import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const quizzes = [
  {
    title: "⚔️ What's Your Emotional Weapon?",
    subtitle: "Discover the hidden power that makes you uniquely effective in life's challenges. This personality assessment reveals your authentic emotional strengths.",
    href: "/quiz",
  },
  {
    title: "🦹‍♂️ What Type of MCU Villain Are You?",
    subtitle: "You’re not the bad guy — you’re the reason the world bends or breaks.",
    href: "/mcu-villain",
  },
];



export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-neutral-800 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-4 text-center">
        MoodyBot Quizzes
      </h1>
      <p className="text-gray-300 text-center max-w-xl mb-10">
        Emotional diagnostics, identity mirrors, and villainy tests -- all laced with style and subtext.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
       {quizzes.map((quiz) => (
  <Card
  key={quiz.href}
  className="p-6 bg-white border border-gray-200 rounded-xl shadow-md flex flex-col justify-between"
>
  <div className="mb-4">
    <h2 className="text-2xl font-semibold text-gray-900">{quiz.title}</h2>
    <p className="text-gray-600 mt-2">{quiz.subtitle}</p>
  </div>
  <Link href={quiz.href}>
    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white w-full mt-4">
      Start Quiz
    </Button>
  </Link>
</Card>

))}

      </div>
    </div>
  );
}
