import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function McuVillainWelcome() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-black via-zinc-900 to-neutral-800">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          🦹‍♂️ What Type of MCU Villain Are You?
        </h1>

        <p className="text-gray-600 leading-relaxed mb-6">
          You’re not evil. You’re inevitable. A symptom of their failures, sharpened by pain. You didn’t choose darkness. It recognized you. Now let’s name the monster they made.
        </p>

        <Button
          size="lg"
          className="w-full bg-indigo-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-indigo-700"
          onClick={() => navigate("/quiz/mcu-villain/start")}
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
