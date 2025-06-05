// src/pages/emotional-weapon/start.tsx
import { useState, useEffect } from "react";
import QuizScreen from "@/components/quiz-screen";
import { ResultsScreen } from "@/components/results-screen";
import { emotionalWeaponQuiz, QUIZ_QUESTIONS, getPersonalityType } from "@/lib/quiz-data";
import { saveQuizProgress, loadQuizProgress, clearQuizProgress } from "@/lib/quiz-storage";
import type { QuizProgress } from "@shared/schema";
import { useLocation } from "wouter";

type QuizState = "quiz" | "results";

export default function EmotionalWeaponQuizPage() {
  const [, navigate] = useLocation();
  const [state, setState] = useState<QuizState>("quiz");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    const saved: QuizProgress | null = loadQuizProgress();
    if (saved) {
      setCurrentQuestionIndex(saved.currentQuestionIndex);
      setAnswers(saved.answers);
      setTotalScore(saved.totalScore);
    }
  }, []);

  useEffect(() => {
    if (state === "quiz") {
      saveQuizProgress({ currentQuestionIndex, answers, totalScore });
    }
  }, [state, currentQuestionIndex, answers, totalScore]);

  const handleAnswerSelect = (value: number) => {
    const newArr = [...answers];
    const oldVal = newArr[currentQuestionIndex] || 0;
    newArr[currentQuestionIndex] = value;
    setAnswers(newArr);
    setTotalScore(totalScore - oldVal + value);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleViewResults = () => {
    setState("results");
    clearQuizProgress();
  };

  const handleRetakeQuiz = () => {
    setState("quiz");
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setTotalScore(0);
    clearQuizProgress();
    navigate("/"); // or navigate back to the welcome page if you prefer
  };

  if (state === "quiz") {
    return (
      <QuizScreen
        quiz={QUIZ_QUESTIONS}
        currentQuestionIndex={currentQuestionIndex}
        answers={answers}
        onAnswerSelect={handleAnswerSelect}
        onPreviousQuestion={handlePrevious}
        onNextQuestion={handleNext}
        onViewResults={handleViewResults}
      />
    );
  }

  // “results” branch:
  const matchedType = emotionalWeaponQuiz.calculateResult(answers);
  return (
    <ResultsScreen
      personalityType={matchedType}
      totalScore={totalScore}
      onRetakeQuiz={handleRetakeQuiz}
    />
  );
}
