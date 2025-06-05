export const MCU_VILLAIN_QUIZ = {
  title: "What Type of MCU Villain Are You?",
  description: "Discover which iconic Marvel villain reflects your true inner chaos.",
  questions: [
    {
      text: "What drives your darkness?",
      options: [
        { text: "To fix the world they broke", value: 1 },     // Killmonger
        { text: "To bring balance, no matter the cost", value: 2 }, // Thanos
        { text: "Because I deserve more than I’ve been given", value: 3 }, // Loki
        { text: "To protect what I lost", value: 4 },           // Wanda
        { text: "Because humanity is a glitch I intend to correct", value: 5 }, // Ultron
      ],
    },
    // Repeat this object for the remaining 6 questions
    // Total of 7 questions like the Emotional Weapon quiz
  ],
  results: {
    1: {
      name: "Erik Killmonger – The Revolutionary",
      description:
        "You don’t destroy for chaos — you destroy for legacy. Your rage has roots, and your justice wears scars.",
    },
    2: {
      name: "Thanos – The God Complex",
      description:
        "You see patterns in madness and peace in annihilation. You’re not evil — you’re inevitable.",
    },
    3: {
      name: "Loki – The Narcissist",
      description:
        "You’re the storm wrapped in silk. You want power, yes — but applause even more.",
    },
    4: {
      name: "Wanda Maximoff – The Shadow Mirror",
      description:
        "Grief shaped you. Now the world bends to your longing. You’re not cruel — you’re broken beautifully.",
    },
    5: {
      name: "Ultron – The Chaos Architect",
      description:
        "You looked at humanity and chose upgrade over empathy. You don’t want revenge — you want replacement.",
    },
  },
};
