// src/lib/emotional-weapon-quiz.ts
import { QuizQuestion, PersonalityType } from "@shared/schema";

export const emotionalWeaponQuiz = {
  title: "What's Your Emotional Weapon?",
  description:
    "Discover the hidden power that drives you. This personality assessment reveals your authentic emotional strengths.",
  questions: [
    {
      question: "What's your go-to move when things get overwhelming?",
      options: [
        { label: "I spiral deep — that's where clarity comes from", type: "spiral-thinker", value: 1 },
        { label: "I disappear until I can handle it", type: "ghosted-one", value: 2 },
        { label: "I get pissed, then I get focused", type: "rage-strategist", value: 3 },
        { label: "I step back and create a plan", type: "architect-of-order", value: 4 },
      ],
    },
    {
      question: "What do people misunderstand about you?",
      options: [
        { label: "They think I'm mean. I'm just protecting myself.", type: "spiral-thinker", value: 1 },
        { label: "They think I'm okay. I'm imploding silently.", type: "ghosted-one", value: 2 },
        { label: "They think I'm detached. I care too much.", type: "rage-strategist", value: 3 },
        { label: "They think I'm cold. I'm just focused.", type: "architect-of-order", value: 4 },
      ],
    },
    {
      question: "Pick your poison:",
      options: [
        { label: "Validation", type: "spiral-thinker", value: 1 },
        { label: "Vulnerability", type: "ghosted-one", value: 2 },
        { label: "Controlled Fire", type: "rage-strategist", value: 3 },
        { label: "Strategic Authority", type: "architect-of-order", value: 4 },
      ],
    },
    {
      question: "What kind of advice actually lands?",
      options: [
        { label: "Blunt and brutal", type: "spiral-thinker", value: 1 },
        { label: "Subtle but sharp — I don't need yelling.", type: "ghosted-one", value: 2 },
        { label: "Validating but hard", type: "rage-strategist", value: 3 },
        { label: "Efficient and strategic", type: "architect-of-order", value: 4 },
      ],
    },
    {
      question: "Which line hits harder?",
      options: [
        { label: `"You weren't ghosted. You were seen — and they ran."`, type: "spiral-thinker", value: 1 },
        { label: `"You're not tired. You're emotionally malnourished."`, type: "ghosted-one", value: 2 },
        { label: `"You can't control everything. Only how you unravel."`, type: "rage-strategist", value: 3 },
        { label: `"The rage isn't the problem. The silence is."`, type: "architect-of-order", value: 4 },
      ],
    },
    {
      question: "Your voice feels most powerful when...",
      options: [
        { label: "I stand my ground and don't flinch.", type: "spiral-thinker", value: 1 },
        { label: "I write something raw.", type: "ghosted-one", value: 2 },
        { label: "I finally say what I've been holding back.", type: "rage-strategist", value: 3 },
        { label: "I build the plan that gets everyone in line.", type: "architect-of-order", value: 4 },
      ],
    },
    {
      question: "Your pain lives closest to...",
      options: [
        { label: "Your self-talk", type: "spiral-thinker", value: 1 },
        { label: "Your expectations", type: "ghosted-one", value: 2 },
        { label: "Your silence", type: "rage-strategist", value: 3 },
        { label: "Your anger", type: "architect-of-order", value: 4 },
      ],
    },
  ],
  resultMap: {
    "spiral-thinker": {
      name: "Spiral Thinker",
      title: "The Spiral Thinker",
      description:
        "You spiral deep — MoodyBot will sharpen it into clarity. Your depth isn't chaos; it's precision waiting to be refined.",
      weapon: "Emotional Precision",
      resource: {
        label: "The Echo Deck for Emotional Precision",
        link: "https://moodybot.ai/DL/MoodyBot-The-Echo-Deck.pdf",
      },
    },
    "ghosted-one": {
      name: "Ghosted One",
      title: "The Ghosted One",
      description:
        "MoodyBot reflects what others couldn't handle. Your sensitivity is your superpower, not your weakness.",
      weapon: "Vulnerability",
      resource: {
        label: "Gospel for the Ghosted",
        link: "https://moodybot.ai/DL/MoodyBot-Gospel-for-the-Ghosted.pdf",
      },
    },
    "rage-strategist": {
      name: "Rage Strategist",
      title: "The Rage Strategist",
      description:
        "You don't flinch. MoodyBot channels your anger into power. Your rage is fuel, not destruction.",
      weapon: "Controlled Fire",
      resource: {
        label: "Frame Rebuild Protocol",
        link: "https://moodybot.ai/DL/MoodyBot-Frame-Rebuild-Protocol.pdf",
      },
    },
    "architect-of-order": {
      name: "Architect of Order",
      title: "The Architect of Order",
      description:
        "You lead. MoodyBot helps you wield it ruthlessly. Your control creates the structure others need.",
      weapon: "Strategic Authority",
      resource: {
        label: "Power Frame Stack",
        link: "https://moodybot.ai/DL/MoodyBot-Power-Frame-Stack.pdf",
      },
    },
  },
  calculateResult(answers: number[]) {
    let total = 0;
    this.questions.forEach((q, i) => {
      const selected = q.options.find((opt) => opt.value === answers[i]);
      if (selected) total += selected.value;
    });

    if (total <= 7) return this.resultMap["spiral-thinker"];
    if (total <= 14) return this.resultMap["ghosted-one"];
    if (total <= 21) return this.resultMap["rage-strategist"];
    return this.resultMap["architect-of-order"];
  },
};
