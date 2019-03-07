export default {
  surveys: {
    life: {
      questions: [
        {
          key: "1",
          question: "How old are you?",
          type: "fv", // Finite Value
          min: 14,
          max: 99,
          answerType: "number"
        },
        {
          key: "2",
          question: "How much do you weigh?",
          type: "fv", // Finite Value
          min: 14,
          max: 99,
          answerType: "number"
        },
        {
          key: "3",
          question: "How small are you?",
          type: "fv", // Finite Value
          min: 14,
          max: 99,
          answerType: "number"
        },
        {
          key: "4",
          question: "Do you excersize?",
          type: "boolean", // boolean
          answers: ["yes", "no"],
          branch: {
            yes: "3",
            no: "4"
          }
        },
        {
          key: "5",
          question: "List your top favorite activities in order.",
          type: "op", // Order of precidence
          min: 2, // Minimum number of choices
          max: 5, // Maximim number of choices
          answers: [
            "Hike",
            "Walk",
            "Run",
            "Swim",
            "Bike",
            "Video Games",
            "Shop",
            "Skateboard",
            "Roller Skate/Blade"
          ]
        },
        {
          key: "6",
          question: "What is your favorite Something?",
          type: "mc", // Multiple Choice
          answers: ["yeah", "No", "Kick", "Punch"]
        },
        {
          key: "7",
          question: "What is your favorite Nothing?",
          type: "mc", // Multiple Choice
          answers: ["yeah", "No", "Kick", "Punch"]
        },
        {
          key: "8",
          question: "What is your favorite Almond?",
          type: "mc", // Multiple Choice
          answers: ["yeah", "No", "Kick", "Punch"]
        },
        {
          key: "9",
          question: "If you were to do anything what would it be?",
          type: "mc", // Multiple Choice
          answers: ["Go out", "Go home", "Go homeless", "Get a life"]
        },
        {
          key: "10",
          question: "Do you speak a language other than English?",
          type: "boolean", // Boolean
          answers: ["yes", "no"]
        }
      ] // questions
    } // Survey "life"
  } // Surveys
}; // root
