import { Button } from "./ui/button";

interface WelcomeScreenProps {
  onStartQuiz: () => void;
}

export function WelcomeScreen({ onStartQuiz }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-black via-zinc-900 to-neutral-800">
      <div className="bg-zinc-900 text-white rounded-2xl border border-zinc-700 shadow-xl p-8 max-w-md w-full text-center animate-fade-in">
        
        {/* Icon */}
        <div className="text-6xl mb-4">⚔️</div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-3">
          What's Your Emotional Weapon?
        </h1>

        {/* Description */}
        <p className="text-zinc-300 leading-relaxed mb-6">
          Discover the hidden power that makes you uniquely effective in life's challenges.
          This personality assessment reveals your authentic emotional strengths.
        </p>

        {/* Stats */}
        <div className="mb-8 p-4 bg-zinc-800 rounded-xl text-sm text-zinc-300 flex justify-between">
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

        {/* CTA */}
        <Button
          onClick={onStartQuiz}
          size="lg"
          className="w-full bg-indigo-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-indigo-700 transition-transform duration-200 hover:scale-105 shadow-lg"
        >
          Start Quiz
        </Button>

        {/* Footer */}
        <p className="text-xs text-zinc-400 mt-4">
          Your results are private and not stored.
        </p>
      </div>
    </div>
  );
}
