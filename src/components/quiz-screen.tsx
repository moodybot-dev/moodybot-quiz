import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface QuizOption {
  label?: string;
  text?: string;
  emoji?: string;
  value: number;
}

interface Question {
  question?: string;
  text?: string;
  options: QuizOption[];
}

interface QuizScreenProps {
  quiz: Question[];
  currentQuestionIndex: number;
  answers: number[];
  onAnswerSelect: (value: number) => void;
  onPreviousQuestion: () => void;
  onNextQuestion: () => void;
  onViewResults: () => void;
}

export default function QuizScreen({
  quiz,
  currentQuestionIndex,
  answers,
  onAnswerSelect,
  onPreviousQuestion,
  onNextQuestion,
  onViewResults,
}: QuizScreenProps) {
  const currentQuestion = quiz[currentQuestionIndex];
  const totalQuestions = quiz.length;
  const progress = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex justify-between text-sm text-gray-300 mb-2">
        <span>
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </span>
        <span>{progress}%</span>
      </div>

      <Progress value={progress} className="mb-6 h-2 rounded-full bg-zinc-800" />

      <Card className="bg-zinc-900 border border-zinc-700 text-white shadow-lg rounded-2xl">
        <CardContent className="space-y-6 p-8">
          <h2 className="text-xl font-semibold leading-snug">
            {currentQuestion.question || currentQuestion.text || "⚠️ Missing question"}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options?.map((option, index) => {
              const isSelected = answers[currentQuestionIndex] === option.value;
              return (
                <Button
                  key={index}
                  onClick={() => onAnswerSelect(option.value)}
                  className={`w-full justify-start px-5 py-4 rounded-xl text-left transition-all text-sm md:text-base ${
                    isSelected
                      ? "bg-indigo-600 text-white"
                      : "bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
                  }`}
                >
                  {option.emoji && (
                    <span className="mr-3 text-lg md:text-xl">{option.emoji}</span>
                  )}
                  <span>{option.label || option.text || "Missing label"}</span>
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between mt-8">
        <Button
          variant="ghost"
          onClick={onPreviousQuestion}
          disabled={currentQuestionIndex === 0}
          className="text-sm"
        >
          ← Previous
        </Button>
        <Button
          onClick={
            currentQuestionIndex === totalQuestions - 1
              ? onViewResults
              : onNextQuestion
          }
          disabled={answers[currentQuestionIndex] == null}
          className="text-sm"
        >
          {currentQuestionIndex === totalQuestions - 1 ? "View Result →" : "Next →"}
        </Button>
      </div>
    </div>
  );
}
