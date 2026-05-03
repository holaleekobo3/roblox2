export interface Vocabulary {
  id: string;
  word: string;
  definition: string;
  example: string;
}

export interface GrammarRule {
  id: string;
  rule: string;
  explanation: string;
  example: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface ContentData {
  title: string;
  comprehension: string;
  vocabulary: Vocabulary[];
  grammar: GrammarRule[];
  quiz: QuizQuestion[];
}

export const VIDEO_CONTENT: ContentData = {
  title: "I Got Hunted by the World's Deadliest Assassin",
  comprehension: "In a thrilling blocky adventure, a brave player faced a massive challenge: they were suddenly hunted by an extremely dangerous assassin! The game started peacefully in a quiet, sunny village. The player was happily gathering simple resources like wood, dirt, and plain apples. However, without any warning, a secret assassin appeared. This mysterious hunter, dressed in dark armor, began to follow the player across the tall mountains and deep, dark forests. The exciting chase had officially begun!\n\nTo escape from this fast enemy, the player had to use all of their survival skills and quick thinking. Building a strong, hidden base was a clever strategy to stay safe. They quickly dug a secret tunnel into the side of a rocky hill and blocked the door with heavy stones. But the assassin was very smart and always seemed to be just one step behind. The player realized they could not hide forever in the dark. They carefully gathered harder materials, like iron and bright diamonds, to craft shiny swords and thick armor. \n\nThroughout this intense game of hide-and-seek, the player encountered many frightening obstacles. They bravely jumped over bubbling hot lava pits, avoided scary traps, and explored deep, empty caves. The secret assassin proved to be the deadliest enemy in the whole wide world. He was the fastest runner and the quietest climber in the game, leaving no room for any silly mistakes. \n\nIn order to survive the longest night, the player had to keep moving continuously and stay entirely quiet. Finally, after many exciting chases, the player decided to stop running. Using their very best strategy, they mined glowing redstone and set up an amazing, heavy trap near a tall waterfall. When the assassin stepped on the secret button, cold water rushed down and trapped him securely in a cage of strong blocks! The brave player had finally defeated the scary hunter in this action-packed journey of bravery and survival.",
  vocabulary: [
    {
      id: "v1",
      word: "Assassin",
      definition: "A person who is hired to catch or defeat someone secretly.",
      example: "The secret assassin slowly approached his target in the game."
    },
    {
      id: "v2",
      word: "Deadliest",
      definition: "The most dangerous, most likely to cause failure or harm.",
      example: "The dragon was the deadliest creature in the whole Minecraft world."
    },
    {
      id: "v3",
      word: "Survive",
      definition: "To stay alive or continue to exist, especially in a difficult situation.",
      example: "He needed to find food and shelter to survive the night."
    },
    {
      id: "v4",
      word: "Strategy",
      definition: "A careful plan or method to achieve a particular goal.",
      example: "Building a strong wall was a clever strategy to keep the zombies away."
    }
  ],
  grammar: [
    {
      id: "g1",
      rule: "Superlatives ending in '-est'",
      explanation: "We use superlative adjectives to compare three or more things. When words are short, we add '-est' to the end. It shows the highest degree of a quality.",
      example: "Fast → The fastest. Deadly → The deadliest."
    },
    {
      id: "g2",
      rule: "Past Tense Verbs",
      explanation: "We use the past tense to talk about things that have already happened. Regular past tense verbs end in '-ed', but some irregular verbs completely change their form.",
      example: "Regular: Hunt → Hunted. Irregular: Catch → Caught."
    }
  ],
  quiz: [
    {
      id: "q1",
      text: "What is the main challenge the player faces in the video?",
      options: [
        "Building the biggest house",
        "Finding rare diamonds",
        "Being hunted by a dangerous assassin",
        "Defeating the Ender Dragon"
      ],
      correctAnswerIndex: 2,
      explanation: "According to the summary, the player's massive challenge is being hunted by an extremely dangerous assassin."
    },
    {
      id: "q2",
      text: "What does the word 'Survive' mean?",
      options: [
        "To quickly lose a game",
        "To easily make new friends",
        "To run very fast",
        "To stay alive in a difficult situation"
      ],
      correctAnswerIndex: 3,
      explanation: "'Survive' means to stay alive or continue to exist, especially when things are tough."
    },
    {
      id: "q3",
      text: "Which of the following is the correct superlative form of 'deadly'?",
      options: [
        "More deadly",
        "Deadliest",
        "Deadlyer",
        "The most deadly"
      ],
      correctAnswerIndex: 1,
      explanation: "For short words ending in 'y' like deadly, we change the 'y' to 'i' and add '-est'. So, 'deadliest' is correct."
    },
    {
      id: "q4",
      text: "What is the past tense of the regular verb 'hunt'?",
      options: [
        "Hunts",
        "Hunting",
        "Hunted",
        "Caught"
      ],
      correctAnswerIndex: 2,
      explanation: "Regular verbs in the past tense usually end in '-ed', making 'hunted' the correct answer."
    },
    {
      id: "q5",
      text: "Why did the player need a 'strategy'?",
      options: [
        "To carefully plan how to escape and stay alive",
        "To learn how to fly in Minecraft",
        "To buy things from the village",
        "To trick their friends into joining the game"
      ],
      correctAnswerIndex: 0,
      explanation: "A strategy is a careful plan to achieve a goal, which the player needs to escape the assassin."
    }
  ]
};
