// src/lib/quiz-data.ts
import { QuizQuestion, PersonalityType } from "@shared/schema";

/**
 * 1) QUIZ_QUESTIONS is now the single source for “Emotional Weapon” questions.
 *    – We have removed all emojis from the question‐options themselves.
 *    – Each `option` now has a `type: string` (instead of “emoji”) so we can map score→type.
 */
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    text: "What's your go-to move when things get overwhelming?",
    options: [
      { text: "I spiral deep — but that's where clarity comes from", value: 1, type: "spiral-thinker" },
      { text: "I disappear until I can handle it", value: 2, type: "ghosted-one" },
      { text: "I get pissed, then I get focused", value: 3, type: "rage-strategist" },
      { text: "I step back and create a plan", value: 4, type: "architect-of-order" },
    ],
  },
  {
    id: 2,
    text: "What do people misunderstand about you?",
    options: [
      { text: "They think I'm mean. I'm just protecting myself.", value: 1, type: "spiral-thinker" },
      { text: "They think I'm okay. I'm imploding silently.", value: 2, type: "ghosted-one" },
      { text: "They think I'm detached. I care too much.", value: 3, type: "rage-strategist" },
      { text: "They think I'm cold. I'm just focused.", value: 4, type: "architect-of-order" },
    ],
  },
  {
    id: 3,
    text: "Pick your poison:",
    options: [
      { text: "Validation", value: 1, type: "spiral-thinker" },
      { text: "Revenge", value: 2, type: "ghosted-one" },
      { text: "Obsession", value: 3, type: "rage-strategist" },
      { text: "Control", value: 4, type: "architect-of-order" },
    ],
  },
  {
    id: 4,
    text: "What kind of advice actually lands?",
    options: [
      { text: "Blunt and brutal", value: 1, type: "spiral-thinker" },
      { text: "Subtle but sharp — I don't need yelling.", value: 2, type: "ghosted-one" },
      { text: "Validating but hard", value: 3, type: "rage-strategist" },
      { text: "Efficient and strategic", value: 4, type: "architect-of-order" },
    ],
  },
  {
    id: 5,
    text: "Which line hits harder?",
    options: [
      { text: "\"You weren't ghosted. You were seen — and they ran.\"", value: 1, type: "spiral-thinker" },
      { text: "\"You're not tired. You're emotionally malnourished.\"", value: 2, type: "ghosted-one" },
      { text: "\"You can't control everything. Only how you unravel.\"", value: 3, type: "rage-strategist" },
      { text: "\"The rage isn't the problem. The silence is.\"", value: 4, type: "architect-of-order" },
    ],
  },
  {
    id: 6,
    text: "Your voice feels most powerful when…",
    options: [
      { text: "I stand my ground and don't flinch.", value: 1, type: "spiral-thinker" },
      { text: "I write something raw.", value: 2, type: "ghosted-one" },
      { text: "I finally say what I've been holding back.", value: 3, type: "rage-strategist" },
      { text: "I build the plan that gets everyone in line.", value: 4, type: "architect-of-order" },
    ],
  },
  {
    id: 7,
    text: "Your pain lives closest to…",
    options: [
      { text: "Your self-talk", value: 1, type: "spiral-thinker" },
      { text: "Your expectations", value: 2, type: "ghosted-one" },
      { text: "Your silence", value: 3, type: "rage-strategist" },
      { text: "Your anger", value: 4, type: "architect-of-order" },
    ],
  },
];

/**
 * 2) Now we define the PersonalityType array exactly as before, but keyed by the same `type` strings:
 */
export const PERSONALITY_TYPES: PersonalityType[] = [
  {
    type: "Spiral Thinker",
    emoji: "🌀",
    weapon: "Emotional Precision",
    description:
      "You spiral deep—MoodyBot will sharpen it into clarity. Your depth isn’t chaos; it’s precision waiting to be refined.",
    resource: "The Echo Deck for Emotional Precision",
    resourceLink: "https://moodybot.ai/DL/MoodyBot-The-Echo-Deck.pdf",
    scoreRange: [0, 7],
  },
  {
    type: "Ghosted One",
    emoji: "👻",
    weapon: "Vulnerability",
    description:
      "MoodyBot reflects what others couldn’t handle. Your sensitivity is your superpower, not your weakness.",
    resource: "Gospel for the Ghosted",
    resourceLink: "https://moodybot.ai/DL/MoodyBot-Gospel-for-the-Ghosted.pdf",
    scoreRange: [8, 14],
  },
  {
    type: "Rage Strategist",
    emoji: "😤",
    weapon: "Controlled Fire",
    description:
      "You don’t flinch. MoodyBot channels your anger into power. Your rage is fuel, not destruction.",
    resource: "Frame Rebuild Protocol",
    resourceLink: "https://moodybot.ai/DL/MoodyBot-Frame-Rebuild-Protocol.pdf",
    scoreRange: [15, 21],
  },
  {
    type: "Architect of Order",
    emoji: "👑",
    weapon: "Strategic Authority",
    description:
      "You lead. MoodyBot helps you wield it ruthlessly. Your control creates the structure others need.",
    resource: "Power Frame Stack",
    resourceLink: "https://moodybot.ai/DL/MoodyBot-Power-Frame-Stack.pdf",
    scoreRange: [22, 28],
  },
];

/**
 * 3) Helper: given a raw “score” (sum of the numbers), find the matching PersonalityType.
 */
export function getPersonalityType(score: number): PersonalityType {
  return (
    PERSONALITY_TYPES.find((p) => score >= p.scoreRange[0] && score <= p.scoreRange[1]) ??
    PERSONALITY_TYPES[PERSONALITY_TYPES.length - 1]
  );
}

/**
 * 4) We also need a “resultMap” so that when we hit the last question,
 *    we can look up not just by numeric range, but by summing the values
 *    and mapping them to one of those `type` strings above.
 *
 *    In other words, “calculateResult” takes the array of chosen numeric values,
 *    sums them, and returns the appropriate PersonalityType object.
 */
export const emotionalWeaponQuiz = {
  title: "What's Your Emotional Weapon?",
  description:
    "Discover the hidden power that makes you uniquely effective in life's challenges. This personality assessment reveals your authentic emotional strengths.",
  questions: QUIZ_QUESTIONS,
  resultMap: {
    "spiral-thinker": PERSONALITY_TYPES[0],
    "ghosted-one": PERSONALITY_TYPES[1],
    "rage-strategist": PERSONALITY_TYPES[2],
    "architect-of-order": PERSONALITY_TYPES[3],
  } as Record<string, PersonalityType>,
  calculateResult(answers: number[]): PersonalityType {
    // Sum all the `value`s the user picked:
    let total = 0;
    this.questions.forEach((q, i) => {
      const rawValue = answers[i];
      if (typeof rawValue === "number") total += rawValue;
    });

    // Decide which type‐key to return based on total:
    if (total <= 7) return this.resultMap["spiral-thinker"];
    if (total <= 14) return this.resultMap["ghosted-one"];
    if (total <= 21) return this.resultMap["rage-strategist"];
    return this.resultMap["architect-of-order"];
  },
};
