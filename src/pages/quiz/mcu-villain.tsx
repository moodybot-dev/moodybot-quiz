import { useState } from "react";
import QuizEngine from "../../components/quiz-screen"; // ✅ default export
import { McuQuizResults } from "../../components/mcu-quiz-results"; // ✅ named export
import { villainQuiz } from "../../lib/villainQuiz"; // ✅ default or named — match export

export default function McuVillainQuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswerSelect = (value: number) => {
    const updated = [...answers];
    updated[currentQuestionIndex] = value;
    setAnswers(updated);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handleViewResults = () => {
    setIsComplete(true);
  };

  const handleRestart = () => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setIsComplete(false);
  };

  if (isComplete) {
    return (
      <McuQuizResults
        answers={answers}
        onRestart={handleRestart}
        quiz={villainQuiz}
      />
    );
  }

  return (
    <QuizEngine
      quiz={villainQuiz.questions}
      currentQuestionIndex={currentQuestionIndex}
      answers={answers}
      onAnswerSelect={handleAnswerSelect}
      onPreviousQuestion={handlePrevious}
      onNextQuestion={handleNext}
      onViewResults={handleViewResults}
    />
  );
}
