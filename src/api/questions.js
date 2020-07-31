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
    question: "If I already have an account with Steem do I need an account with Hive?",
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
  // ,
  // {
  //   question: "Where can I create an account?",
  //   answers: [
  //     "https://hive.blog",
  //     "https://signup.hive.io/",
  //     "https://peakd.com/",
  //     "https://hive.io/",
  //   ],
  //   correct: "https://signup.hive.io/",
  //   questionId: "4",
  //   level: 2,
  //   nextLevel: false
  // }
  // ,
  // {
  //   question: "How long does a free account take to be active?",
  //   answers: [
  //       "2 hours", 
  //       "24 hours", 
  //       "72 hours", 
  //       "84 hours"
  //   ],
  //   correct: "72 hours",
  //   questionId: "5",
  //   level: 2,
  //   nextLevel: false
  // },
  // {
  //   question: "Can you do plagiarism?",
  //   answers: [
  //       "No", 
  //       "Yes", 
  //       "Maybe", 
  //       "I don´t know"
  //   ],
  //   correct: "No",
  //   questionId: "6",
  //   level: 2,
  //   nextLevel: false
  // },
  // {
  //   question: "What should I do for the first post?",
  //   answers: [
  //     "Place only one photo",
  //     "My presentation",
  //     "Insulting Trump",
  //     "Press all keys and submit",
  //   ],
  //   correct: "My presentation",
  //   questionId: "7",
  //   level: 2,
  //   nextLevel: false
  // },
  // {
  //   question: "What tag should I use in my first Post?",
  //   answers: [
  //       "#hiveblog", 
  //       "#hive", 
  //       "#introduceyourself", 
  //       "#introducemyself"
  //   ],
  //   correct: "#introduceyourself",
  //   questionId: "8",
  //   level: 2,
  //   nextLevel: true
  // },
  // {
  //   question: "What is a tribe?",
  //   answers: [
  //       "It is a group of users with a low reputation", 
  //       "It is a community that creates content on a topic", 
  //       "It is a group of users with a high reputation", 
  //       "It is a community that shares the subject of tribes"
  //   ],
  //   correct: "#introduceyourself",
  //   questionId: "9",
  //   level: 3,
  //   nextLevel: false
  // },
  // {
  //   question: "What is Hive Token (HIVE)?",
  //   answers: [
  //       "Dollars value on the Hive platform", 
  //       "Hive platform token percentage", 
  //       "The primary token of the Hive Blockchain and often a reward on posts", 
  //       "Another Hive token which is often rewarded on posts"
  //   ],
  //   correct: "The primary token of the Hive Blockchain and often a reward on posts",
  //   questionId: "10",
  //   level: 3,
  //   nextLevel: false
  // },
  // {
  //   question: "What are curators?",
  //   answers: [
  //       "Views of your posts", 
  //       "Users who comment on your posts", 
  //       "Users who follow you", 
  //       "Users who vote on your content"
  //   ],
  //   correct: "Users who vote on your content",
  //   questionId: "11",
  //   level: 3,
  //   nextLevel: false
  // },
  // {
  //   question: "What is Hive Power (HP)?",
  //   answers: [
  //       "Bitcoin in my wallet", 
  //       "Power to vote for everyone", 
  //       "Dollars in my wallet", 
  //       "Hive token locked in your hive wallet that give you influence and power to curate others in Hive Blockchain"
  //   ],
  //   correct: "Hive token locked in your hive wallet that give you influence and power to curate others in Hive Blockchain",
  //   questionId: "12",
  //   level: 3,
  //   nextLevel: false
  // },
  // {
  //   question: "What is HBD?",
  //   answers: [
  //       "A community token on the Hive platform", 
  //       "Hive Backed Dollar, $1 worth of Hive", 
  //       "Locked version of HIVE which gives account influence on the platform", 
  //       "Currency of the blockchain, liquid version"
  //   ],
  //   correct: "Hive Backed Dollar, $1 worth of Hive",
  //   questionId: "13",
  //   level: 3,
  //   nextLevel: false
  // },
  // {
  //   question: "What is a delegation on Hive?",
  //   answers: [
  //       "Delegating a task", 
  //       "Delegate a post for yourself", 
  //       "Lend HP to your account", 
  //       "Pay for HP"
  //   ],
  //   correct: "Lend HP to your account",
  //   questionId: "14",
  //   level: 3,
  //   nextLevel: false
  // },
  // {
  //   question: "What is Power Up?",
  //   answers: [
  //       "Transfer Hive Power to Liquid Hive", 
  //       "Sell Hive on exchange", 
  //       "Transfer Liquid Hive to Hive Power", 
  //       "Buy Hive on exchange"
  //   ],
  //   correct: "Transfer Liquid Hive to Hive Power",
  //   questionId: "15",
  //   level: 3,
  //   nextLevel: false
  // },
  // {
  //   question: "What is Power Down?",
  //   answers: [
  //       "Transfer Hive Power to Liquid Hive", 
  //       "Sell Hive on exchange", 
  //       "Transfer Liquid Hive to Hive Power", 
  //       "Buy Hive on exchange"
  //   ],
  //   correct: "Transfer Hive Power to Liquid Hive",
  //   questionId: "16",
  //   level: 3,
  //   nextLevel: true
  // },
  // {
  //   question: "How many days does it take to have Post Payout?",
  //   answers: [
  //       "1 day", 
  //       "5 days", 
  //       "7 days", 
  //       "15 days"
  //   ],
  //   correct: "7 days",
  //   questionId: "17",
  //   level: 4,
  //   nextLevel: false
  // },
  // {
  //   question: "What is the owner key?",
  //   answers: [
  //       "The key to making transfers", 
  //       "The key to giving to anyone", 
  //       "The key for place orders in the internal market", 
  //       "Is the master key for the account and is required to change the other keys"
  //   ],
  //   correct: "Is the master key for the account and is required to change the other keys",
  //   questionId: "18",
  //   level: 4,
  //   nextLevel: false
  // },
  // {
  //   question: "What is the active key?",
  //   answers: [
  //       "The key to making transfers", 
  //       "Is used to make transfers and place orders in the internal market", 
  //       "The key for me to log into the Hive Platform", 
  //       "Is the master key for the account and is required to change the other keys"
  //   ],
  //   correct: "Is used to make transfers and place orders in the internal market",
  //   questionId: "19",
  //   level: 4,
  //   nextLevel: false
  // },
  // {
  //   question: "What is the private key?",
  //   answers: [
  //       "The key to making transfers", 
  //       "Is used to make transfers and place orders in the internal market", 
  //       "Is to sign a transaction with account's auth", 
  //       "Is the master key for the account and is required to change the other keys"
  //   ],
  //   correct: "Is to sign a transaction with account's auth",
  //   questionId: "20",
  //   level: 4,
  //   nextLevel: false
  // },
  // {
  //   question: "What is a node?",
  //   answers: [
  //       "Process to release protocol/blockchain consensus upgrades", 
  //       "A node is an instance of the Hive blockchain running on a server.", 
  //       "Process to release protocol/blockchain software improvements", 
  //       "It's just a centralized server with the Hive blockchain"
  //   ],
  //   correct: "A node is an instance of the Hive blockchain running on a server.",
  //   questionId: "21",
  //   level: 4,
  //   nextLevel: false
  // },
  // {
  //   question: "What is a witness on Hive?",
  //   answers: [
  //       "Are Witnesses who do marketing on other social networks", 
  //       "There is a server that runs one of the Hive nodes", 
  //       "Witnesses are people who know Hive's secrets", 
  //       "Are all users"
  //   ],
  //   correct: "There is a server that runs one of the Hive nodes",
  //   questionId: "22",
  //   level: 4,
  //   nextLevel: false
  // },
  // {
  //   question: "How many votes can I give in a witness?",
  //   answers: [
  //       "1 vote", 
  //       "3 votes", 
  //       "10 votes", 
  //       "The votes I want"
  //   ],
  //   correct: "1 vote",
  //   questionId: "23",
  //   level: 4,
  //   nextLevel: false
  // },
  // {
  //   question: "What is the top witness?",
  //   answers: [
  //       "Top 10", 
  //       "Top 20", 
  //       "Top 50", 
  //       "Top 100"
  //   ],
  //   correct: "Top 20",
  //   questionId: "24",
  //   level: 4,
  //   nextLevel: true
  // },
  // {
  //   question: "I pay fees for making a transfer to the exchange?",
  //   answers: [
  //       "1 HP", 
  //       "1 HIVE", 
  //       "1 HBD", 
  //       "Free"
  //   ],
  //   correct: "Free",
  //   questionId: "25",
  //   level: 5,
  //   nextLevel: false
  // },
  // {
  //   question: "What is Reward Pool?",
  //   answers: [
  //       "Hive that is burnt", 
  //       "User group with joint rewards", 
  //       "A fixed amount of HIVE tokens are allocated to the network reward fund", 
  //       "A fixed amount of HIVE tokens that is given to all users"
  //   ],
  //   correct: "A fixed amount of HIVE tokens are allocated to the network reward fund",
  //   questionId: "26",
  //   level: 5,
  //   nextLevel: false
  // },
  // {
  //   question: "What is RocksDB?",
  //   answers: [
  //       "It is a Rock band known throughout the Hive community", 
  //       "A fast-on-disk data store with an advanced caching layer, which minimizes latency when reading/writing to and from disk", 
  //       "Multi Index Rocksdb Adapter that updates the database backend of Hive from memory mapped files to a disk log-structured merge-tree implemented via the RocksDB library", 
  //       "It is one of the largest communities in Hive"
  //   ],
  //   correct: "A fast-on-disk data store with an advanced caching layer, which minimizes latency when reading/writing to and from disk",
  //   questionId: "27",
  //   level: 5,
  //   nextLevel: false
  // }
  
];

export default dataQuestions;
