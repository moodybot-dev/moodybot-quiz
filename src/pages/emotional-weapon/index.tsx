// src/pages/emotional-weapon/index.tsx
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function EmotionalWeaponWelcome() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-black via-zinc-900 to-neutral-800">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">
  ⚔️ What's Your Emotional Weapon?
      </h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          Discover the hidden power that makes you uniquely effective in life's challenges.
          This personality assessment reveals your authentic emotional strengths.
        </p>

        <Button
          size="lg"
          className="w-full bg-indigo-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-indigo-700"
          onClick={() => navigate("/emotional-weapon/start")}
        >
          Start Quiz
        </Button>

        <p className="text-xs text-gray-500 mt-4">
          Your results are private and not stored.
        </p>
      </div>
    </div>
  );
}
