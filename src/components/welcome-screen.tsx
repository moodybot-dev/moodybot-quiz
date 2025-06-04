import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface WelcomeScreenProps {
  onStartQuiz: () => void;
}

export function WelcomeScreen({ onStartQuiz }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-black via-zinc-900 to-neutral-800 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center transform transition-all">
        <div className="mb-6">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            What's Your Emotional Weapon?
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Discover the hidden power that makes you uniquely effective in life's challenges. 
            This personality assessment reveals your authentic emotional strengths.
          </p>
        </div>
        
        <div className="mb-8 p-4 bg-gray-50 rounded-xl">
          <div className="flex justify-between items-center text-sm text-gray-700">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
              7 Questions
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              2 Minutes
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Instant Results
            </span>
          </div>
        </div>
        
        <Button 
          onClick={onStartQuiz}
          className="w-full bg-indigo-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          size="lg"
        >
          Start Quiz
        </Button>
        
        <p className="text-xs text-gray-500 mt-4">Your results are private and not stored</p>
      </div>
    </div>
  );
}
