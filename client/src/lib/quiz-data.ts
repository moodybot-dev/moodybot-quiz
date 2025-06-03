import { QuizQuestion, PersonalityType } from "@shared/schema";

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    text: "What's your go-to move when things get overwhelming?",
    options: [
      { text: "I spiral deep — but that's where clarity comes from", value: 1, emoji: "🌀" },
      { text: "I disappear until I can handle it", value: 2, emoji: "👻" },
      { text: "I get pissed, then I get focused", value: 3, emoji: "😤" },
      { text: "I step back and create a plan", value: 4, emoji: "👑" }
    ]
  },
  {
    id: 2,
    text: "What do people misunderstand about you?",
    options: [
      { text: "They think I'm mean. I'm just protecting myself.", value: 1, emoji: "🌀" },
      { text: "They think I'm okay. I'm imploding silently.", value: 2, emoji: "👻" },
      { text: "They think I'm detached. I care too much.", value: 3, emoji: "😤" },
      { text: "They think I'm cold. I'm just focused.", value: 4, emoji: "👑" }
    ]
  },
  {
    id: 3,
    text: "Pick your poison:",
    options: [
      { text: "Validation", value: 1, emoji: "🌀" },
      { text: "Revenge", value: 2, emoji: "👻" },
      { text: "Obsession", value: 3, emoji: "😤" },
      { text: "Control", value: 4, emoji: "👑" }
    ]
  },
  {
    id: 4,
    text: "What kind of advice actually lands?",
    options: [
      { text: "Blunt and brutal", value: 1, emoji: "🌀" },
      { text: "Subtle but sharp — I don't need yelling.", value: 2, emoji: "👻" },
      { text: "Validating but hard", value: 3, emoji: "😤" },
      { text: "Efficient and strategic", value: 4, emoji: "👑" }
    ]
  },
  {
    id: 5,
    text: "Which line hits harder?",
    options: [
      { text: "\"You weren't ghosted. You were seen — and they ran.\"", value: 1, emoji: "🌀" },
      { text: "\"You're not tired. You're emotionally malnourished.\"", value: 2, emoji: "👻" },
      { text: "\"You can't control everything. Only how you unravel.\"", value: 3, emoji: "😤" },
      { text: "\"The rage isn't the problem. The silence is.\"", value: 4, emoji: "👑" }
    ]
  },
  {
    id: 6,
    text: "Your voice feels most powerful when...",
    options: [
      { text: "I stand my ground and don't flinch.", value: 1, emoji: "🌀" },
      { text: "I write something raw.", value: 2, emoji: "👻" },
      { text: "I finally say what I've been holding back.", value: 3, emoji: "😤" },
      { text: "I build the plan that gets everyone in line.", value: 4, emoji: "👑" }
    ]
  },
  {
    id: 7,
    text: "Your pain lives closest to...",
    options: [
      { text: "Your self-talk", value: 1, emoji: "🌀" },
      { text: "Your expectations", value: 2, emoji: "👻" },
      { text: "Your silence", value: 3, emoji: "😤" },
      { text: "Your anger", value: 4, emoji: "👑" }
    ]
  }
];

export const PERSONALITY_TYPES: PersonalityType[] = [
  {
    type: "Spiral Thinker",
    emoji: "🌀",
    weapon: "Emotional Precision",
    description: "You spiral deep — MoodyBot will sharpen it into clarity. Your depth isn't chaos; it's precision waiting to be refined.",
    resource: "The Echo Deck for Emotional Precision",
    scoreRange: [7, 14]
  },
  {
    type: "Ghosted One",
    emoji: "👻",
    weapon: "Vulnerability",
    description: "MoodyBot reflects what others couldn't handle. Your sensitivity is your superpower, not your weakness.",
    resource: "Gospel for the Ghosted",
    scoreRange: [15, 21]
  },
  {
    type: "Rage Strategist",
    emoji: "😤",
    weapon: "Controlled Fire",
    description: "You don't flinch. MoodyBot channels your anger into power. Your rage is fuel, not destruction.",
    resource: "Frame Rebuild Protocol",
    scoreRange: [22, 28]
  },
  {
    type: "Architect of Order",
    emoji: "👑",
    weapon: "Strategic Authority",
    description: "You lead. MoodyBot helps you wield it ruthlessly. Your control creates the structure others need.",
    resource: "Power Frame Stack",
    scoreRange: [29, 35]
  }
];

export function getPersonalityType(score: number): PersonalityType {
  return PERSONALITY_TYPES.find(type => 
    score >= type.scoreRange[0] && score <= type.scoreRange[1]
  ) || PERSONALITY_TYPES[PERSONALITY_TYPES.length - 1];
}
