import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { QUIZ_QUESTIONS } from "@/lib/quiz-data";
import { QuizOption } from "@shared/schema";

interface QuizScreenProps {
  currentQuestionIndex: number;
  answers: number[];
  onAnswerSelect: (value: number) => void;
  onPreviousQuestion: () => void;
  onNextQuestion: () => void;
  onViewResults: () => void;
}

export function QuizScreen({
  currentQuestionIndex,
  answers,
  onAnswerSelect,
  onPreviousQuestion,
  onNextQuestion,
  onViewResults
}: QuizScreenProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100;
  const isLastQuestion = currentQuestionIndex === QUIZ_QUESTIONS.length - 1;
  const hasAnswer = answers[currentQuestionIndex] !== undefined;

  useEffect(() => {
    setSelectedAnswer(answers[currentQuestionIndex] ?? null);
  }, [currentQuestionIndex, answers]);

  const handleAnswerClick = (option: QuizOption) => {
    setSelectedAnswer(option.value);
    onAnswerSelect(option.value);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      onViewResults();
    } else {
      onNextQuestion();
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-md mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}
            </span>
            <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="mb-6 shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 leading-relaxed">
              {currentQuestion.text}
            </h2>
            
            {/* Answer Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  className={`w-full p-4 border-2 rounded-xl text-left transition-all duration-200 group ${
                    selectedAnswer === option.value
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-600 hover:bg-indigo-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{option.emoji}</span>
                    <span className={`font-medium transition-colors ${
                      selectedAnswer === option.value
                        ? 'text-indigo-600'
                        : 'text-gray-800 group-hover:text-indigo-600'
                    }`}>
                      {option.text}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            onClick={onPreviousQuestion}
            disabled={currentQuestionIndex === 0}
            variant="ghost"
            className="px-6 py-3 text-gray-600 font-medium hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={!hasAnswer}
            className={`px-6 py-3 font-medium rounded-lg transition-colors ${
              hasAnswer
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isLastQuestion ? 'View Results' : 'Next →'}
          </Button>
        </div>
      </div>
    </div>
  );
}
