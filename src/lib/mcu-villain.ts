// mcu-villain.tsx
import { QuizEngine } from "@/components/quiz-engine";
import { MCU_VILLAIN_QUIZ } from "@/lib/mcu-villain-quiz";
import { McuQuizResults } from "@/components/mcu-quiz-results";

export default function MCUVillainQuizPage() {
  return <QuizEngine config={MCU_VILLAIN_QUIZ} />;
}
