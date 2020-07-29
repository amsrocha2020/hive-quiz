const dataQuestions = [
  {
    question: "What can you do on the Hive Blockchain?",
    answers: [
      "Create content",
      "Play Games",
      "Socialize",
      "The three above",
    ],
    correct: "The three above",
    questionId: "1",
    level: 1,
    nextLevel: false
  }
  ,
  {
    question: "How many seconds is a block created on the Hive blockchain?",
    answers: ["1 second", "3 seconds", "60 seconds", "360 seconds"],
    correct: "3 seconds",
    questionId: "2",
    level: 1,
    nextLevel: false
  }
  ,
  {
    question:
      "If I already have an account with Steem do I need an account with Hive?",
    answers: [
      "Yes.",
      "No. I can use the same keys and username on Hive.",
      "I will try",
      "Let me see",
    ],
    correct: "No. I can use the same keys and username on Hive.",
    questionId: "3",
    level: 1,
    nextLevel: true
  }
  ,
  {
    question: "Where can I create an account?",
    answers: [
      "https://hive.blog",
      "https://signup.hive.io/",
      "https://peakd.com/",
      "https://hive.io/",
    ],
    correct: "https://signup.hive.io/",
    questionId: "4",
    level: 2,
    nextLevel: false
  }
  ,
  {
    question: "How long does a free account take to be active?",
    answers: [
        "2 hours", 
        "24 hours", 
        "72 hours", 
        "84 hours"
    ],
    correct: "72 hours",
    questionId: "5",
    level: 2,
    nextLevel: false
  },
  {
    question: "Can you do plagiarism?",
    answers: [
        "No", 
        "Yes", 
        "Maybe", 
        "I don´t know"
    ],
    correct: "No",
    questionId: "6",
    level: 2,
    nextLevel: true
  },
  {
    question: "What should I do for the first post?",
    answers: [
      "Place only one photo",
      "My presentation",
      "Insulting Trump",
      "Press all keys and submit",
    ],
    correct: "My presentation",
    questionId: "7",
    level: 3,
    nextLevel: false
  },
  {
    question: "What tag should I use in my first Post?",
    answers: [
        "#hiveblog", 
        "#hive", 
        "#introduceyourself", 
        "#introducemyself"
    ],
    correct: "#introduceyourself",
    questionId: "8",
    level: 3,
    nextLevel: false
  },
  {
    question: "What is Hive Token (HIVE)?",
    answers: [
        "Dollars value on the Hive platform", 
        "Hive platform token percentage", 
        "The primary token of the Hive Blockchain and often a reward on posts", 
        "Another Hive token which is often rewarded on posts"
    ],
    correct: "The primary token of the Hive Blockchain and often a reward on posts",
    questionId: "9",
    level: 3,
    nextLevel: true
  },
  {
    question: "What is Hive Power (HP)?",
    answers: [
        "Bitcoin in my wallet", 
        "Power to vote for everyone", 
        "Dollars in my wallet", 
        "Hive token locked in your hive wallet that give you influence and power to curate others in Hive Blockchain"
    ],
    correct: "Hive token locked in your hive wallet that give you influence and power to curate others in Hive Blockchain",
    questionId: "10",
    level: 4,
    nextLevel: false
  },
  {
    question: "What is a delegation on Hive?",
    answers: [
        "Delegating a task", 
        "Delegate a post for yourself", 
        "Lend HP to your account", 
        "Pay for HP"
    ],
    correct: "Lend HP to your account",
    questionId: "11",
    level: 4,
    nextLevel: false
  },
  {
    question: "What is Power Up?",
    answers: [
        "Transfer Hive Power to Liquid Hive", 
        "Sell Hive on exchange", 
        "Transfer Liquid Hive to Hive Power", 
        "Buy Hive on exchange"
    ],
    correct: "Transfer Liquid Hive to Hive Power",
    questionId: "12",
    level: 4,
    nextLevel: true
  },
  {
    question: "What is Power Down?",
    answers: [
        "Transfer Hive Power to Liquid Hive", 
        "Sell Hive on exchange", 
        "Transfer Liquid Hive to Hive Power", 
        "Buy Hive on exchange"
    ],
    correct: "Transfer Hive Power to Liquid Hive",
    questionId: "13",
    level: 5,
    nextLevel: false
  },
  {
    question: "How many days does it take to have Post Payout?",
    answers: [
        "1 day", 
        "5 days", 
        "7 days", 
        "15 days"
    ],
    correct: "7 days",
    questionId: "14",
    level: 5,
    nextLevel: false
  },
  {
    question: "What is a witness on Hive?",
    answers: [
        "Are Witnesses who do marketing on other social networks", 
        "There is a server that runs one of the Hive nodes", 
        "Witnesses are people who know Hive's secrets", 
        "Are all users"
    ],
    correct: "There is a server that runs one of the Hive nodes",
    questionId: "15",
    level: 5,
    nextLevel: false
  },
  {
    question: "I pay fees for making a transfer to the exchange?",
    answers: [
        "1 HP", 
        "1 HIVE", 
        "1 HBD", 
        "Free"
    ],
    correct: "Free",
    questionId: "16",
    level: 5,
    nextLevel: false
  }
  
];

export default dataQuestions;
