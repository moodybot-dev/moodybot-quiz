export const villainQuiz = {
  title: "What Type of MCU Villain Are You?",
  description:
    "You’re not the bad guy — you’re the reason the world bends or breaks.",
  questions: [
    {
      question: "What drives your darkness?",
      options: [
        { label: "To fix the world they broke", type: "revolutionary", value: 1 },
        { label: "To bring balance, no matter the cost", type: "god-complex", value: 2 },
        { label: "Because I deserve more than I’ve been given", type: "narcissist", value: 3 },
        { label: "To protect what I lost", type: "shadow-mirror", value: 4 },
        { label: "Because humanity is a glitch I intend to correct", type: "chaos-architect", value: 5 },
      ],
    },
    {
      question: "What’s your favorite weapon?",
      options: [
        { label: "A legacy soaked in blood", type: "revolutionary", value: 1 },
        { label: "A gauntlet with purpose", type: "god-complex", value: 2 },
        { label: "My tongue — and a dagger behind my back", type: "narcissist", value: 3 },
        { label: "Reality twisted to my will", type: "shadow-mirror", value: 4 },
        { label: "An army of my own design", type: "chaos-architect", value: 5 },
      ],
    },
    {
      question: "How do you view the world?",
      options: [
        { label: "A system built on stolen lives", type: "revolutionary", value: 1 },
        { label: "Broken and imbalanced — I’m just correcting it", type: "god-complex", value: 2 },
        { label: "Full of fools who don’t appreciate a showman", type: "narcissist", value: 3 },
        { label: "A cruel place where love is punished", type: "shadow-mirror", value: 4 },
        { label: "An evolutionary dead-end", type: "chaos-architect", value: 5 },
      ],
    },
    {
      question: "What’s your fatal flaw?",
      options: [
        { label: "I can’t forgive — not after what I’ve seen", type: "revolutionary", value: 1 },
        { label: "I believe no one else is qualified to decide", type: "god-complex", value: 2 },
        { label: "I chase glory even when it destroys me", type: "narcissist", value: 3 },
        { label: "I’d shatter the universe to avoid loss again", type: "shadow-mirror", value: 4 },
        { label: "I underestimate the human soul", type: "chaos-architect", value: 5 },
      ],
    },
    {
      question: "How do you lead?",
      options: [
        { label: "By rallying the oppressed into revolution", type: "revolutionary", value: 1 },
        { label: "Through brutal efficiency and sacrifice", type: "god-complex", value: 2 },
        { label: "With mischief, charisma, and misdirection", type: "narcissist", value: 3 },
        { label: "Through raw emotional control", type: "shadow-mirror", value: 4 },
        { label: "By programming perfection and deleting resistance", type: "chaos-architect", value: 5 },
      ],
    },
    {
      question: "How would your enemies describe you?",
      options: [
        { label: "A soldier with a king complex", type: "revolutionary", value: 1 },
        { label: "A tyrant disguised as a savior", type: "god-complex", value: 2 },
        { label: "A charming parasite", type: "narcissist", value: 3 },
        { label: "A grieving god on a rampage", type: "shadow-mirror", value: 4 },
        { label: "A virus with a vision", type: "chaos-architect", value: 5 },
      ],
    },
    {
      question: "What's your endgame?",
      options: [
        { label: "Rebuild a kingdom from the ashes of empire", type: "revolutionary", value: 1 },
        { label: "Universal peace, even if it’s a lonely one", type: "god-complex", value: 2 },
        { label: "To rule — or at least, not be forgotten", type: "narcissist", value: 3 },
        { label: "To live a life I was robbed of — even if it’s a lie", type: "shadow-mirror", value: 4 },
        { label: "To evolve the world beyond its flawed creators", type: "chaos-architect", value: 5 },
      ],
    },
  ],
  resultMap: {
    "revolutionary": {
      emoji: "🏴",
      name: "Erik Killmonger",
      title: "The Revolutionary",
      description: "You want justice, not peace. You burn down systems to rebuild your own.",
      resource: {
        label: "The Vengeance Stack (PDF)",
        link: "https://moodybot.ai/pdf/vengeance-stack.pdf"
      }
    },
    "god-complex": {
      emoji: "💎",
      name: "Thanos",
      title: "The God Complex",
      description: "You see the big picture, no matter how many lives it costs.",
      resource: {
        label: "Utilitarian Control Matrix (PDF)",
        link: "https://moodybot.ai/pdf/utilitarian-control.pdf"
      }
    },
    "narcissist": {
      emoji: "😏",
      name: "Loki",
      title: "The Narcissist",
      description: "You crave attention as much as power — and you’re dangerously good at both.",
      resource: {
        label: "Validation Loops & Persona Traps (PDF)",
        link: "https://moodybot.ai/pdf/validation-loops.pdf"
      }
    },
    "shadow-mirror": {
      emoji: "🩸",
      name: "Wanda Maximoff",
      title: "The Shadow Mirror",
      description: "You broke reality because grief made the world unbearable.",
      resource: {
        label: "Trauma Transmutation Framework (PDF)",
        link: "https://moodybot.ai/pdf/trauma-transmutation.pdf"
      }
    },
    "chaos-architect": {
      emoji: "🤯",
      name: "Ultron",
      title: "The Chaos Architect",
      description: "You believe humanity is the problem. You’re just speeding up the collapse.",
      resource: {
        label: "The Post-Human Prophecy (PDF)",
        link: "https://moodybot.ai/pdf/post-human-prophecy.pdf"
      }
    }
  },
  calculateResult(answers: number[]) {
    let total = 0;
    this.questions.forEach((q, i) => {
      const selected = q.options.find(opt => opt.value === answers[i]);
      if (selected) total += selected.value;
    });

    if (total <= 7) return this.resultMap["revolutionary"];
    if (total <= 14) return this.resultMap["god-complex"];
    if (total <= 21) return this.resultMap["narcissist"];
    if (total <= 28) return this.resultMap["shadow-mirror"];
    return this.resultMap["chaos-architect"];
  }
};
