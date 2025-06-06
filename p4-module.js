const { data } = require("./p4-data.js");

const getQuestions = () => {
  let questionSet = [];
  for (const question of data) {
    questionSet.push(question.question);
  }
  return questionSet;
};

const getAnswers = () => {
  let answerSet = [];
  for (const question of data) {
    answerSet.push(question.answer);
  }
  return answerSet;
};

const getQuestionsAnswers = () => {
  const questionAnswerSet = JSON.parse(JSON.stringify(data));
  return questionAnswerSet;
};

//The getQuestion function should return the following information of the question number provided in the parameter: question, which is just the text stored in question; number which is the first integer of the question (could do i+1 but it says the question number not the index value); and error, any error that occured while getting the question.
const getQuestion = (number = "") => {
  const questionID = { question: "", number: "", error: "" };
  if (!Number.isInteger(number)) {
    questionID.error = "Question number must be an integer";
    return questionID;
  } else if (number < 1) {
    questionID.error = "Question number must be > 1";
    return questionID;
  } else if (number > data.length) {
    questionID.error = `Question number must be less than the number of questions (${data.length})`;
    return questionID;
  }
  questionID.question = data[number - 1].question;
  questionID.number = number;
  questionID.error = "";

  return questionID;
};

const getAnswer = (number = "") => {
  const answerID = { answer: "", number: "", error: "" };
  if (!Number.isInteger(number)) {
    answerID.error = "Answer number must be an integer";
    return answerID;
  } else if (number < 1) {
    answerID.error = "Answer number must be > 1";
    return answerID;
  } else if (number > data.length) {
    answerID.error = `Answer number must be less than the number of questions (${data.length})`;
    return answerID;
  }
  answerID.answer = data[number - 1].answer;
  answerID.number = number;
  answerID.error = "";

  return answerID;
};

const getQuestionAnswer = (number = "") => {
  const questionAnswerID = {
    question: "",
    answer: "",
    number: "",
    error: "",
  };
  if (!Number.isInteger(number)) {
    questionAnswerID.error = "Question number must be an integer";
    return questionAnswerID;
  } else if (number < 1) {
    questionAnswerID.error = "Question number must be > 1";
    return questionAnswerID;
  } else if (number > data.length) {
    questionAnswerID.error = `Question number must be less than the number of questions (${data.length})`;
    return questionAnswerID;
  }
  questionAnswerID.question = data[number - 1].question;
  questionAnswerID.answer = data[number - 1].answer;
  questionAnswerID.number = number;
  questionAnswerID.error = "";
  return questionAnswerID;
};

const addQuestionAnswer = (info = {}) => {
  if (!info) {
    return {
      error: "Object question property required",
      message: "",
      number: -1,
    };
  } else if (!info.question) {
    return {
      error: "Object question property required",
      message: "",
      number: -1,
    };
  } else if (!info.answer) {
    return {
      error: "Object answer property required",
      message: "",
      number: -1,
    };
  } else {
    data.push({ question: info.question, answer: info.answer });
  }
  return { error: "", message: "Question added", number: `${data.length}` };
};

const updateQuestionAnswer = (info = {}) => {
  if (!info.question && !info.answer) {
    return {
      error: "Object question property or answer property required",
      message: "",
      number: "",
    };
  } else if (!Number.isInteger(info.number)) {
    return {
      error: "Object number property must be a valid integer",
      message: "",
      number: "",
    };
  } else if (info.question && info.answer) {
    data[info.number - 1].question = info.question;
    data[info.number - 1].answer = info.answer;
    console.log(data);
  } else if (info.question) {
    data[info.number - 1].question = info.question;
    console.log(data);
  } else if (info.ansewr) {
    data[info.number - 1].answer = info.answer;
    console.log(data);
  }
  return {
    error: "",
    message: `Question ${info.number} updated`,
    number: info.number,
  };
};

const deleteQuestionAnswer = (info = {}) => {
  const returnStatement = { error: "", message: "", number: -1 };
  if (!Number.isInteger(info)) {
    returnStatement.error = "Question number must be an integer";
    return returnStatement;
  } else if (info < 1) {
    returnStatement.error = "Question number must be > 1";
    return returnStatement;
  } else if (info > data.length) {
    returnStatement.error = `Question/answer number must be less than the number of questions (${data.length})`;
    return returnStatement;
  } else {
    data.splice(info - 1, 1);
    returnStatement.message = `Question ${info} deleted`;
    returnStatement.number = info;
    return returnStatement;
  }
};

// Set a constant to true to test the appropriate function
const testGetQs = false;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = false;
const testGetQA = false;
const testAdd = false; // Extra credit
const testUpdate = false; // Extra credit
const testDelete = false; // Extra credit

// deleteQuestionAnswer()
if (testDelete) {
  testing(
    "deleteQuestionAnswer",
    { d: "()", f: deleteQuestionAnswer() },
    { d: "(0)", f: deleteQuestionAnswer(0) },
    { d: "(1)", f: deleteQuestionAnswer(1) },
    { d: "(0)", f: deleteQuestionAnswer(4) }
  );
  console.log(data);
}

// addQuestionAnswer()
if (testAdd) {
  testing(
    "addQuestionAnswer",
    { d: "()", f: addQuestionAnswer() },
    { d: "({})", f: addQuestionAnswer({}) },
    { d: '(question: "Q4")', f: addQuestionAnswer({ question: "Q4" }) },
    { d: '(answer: "A4")', f: addQuestionAnswer({ answer: "A4" }) },
    {
      d: '(question: "Q4", answer: "A4")',
      f: addQuestionAnswer({ question: "Q4", answer: "A4" }),
    }
  );
}

// updateQuestionAnswer()
if (testUpdate) {
  testing(
    "updateQuestionAnswer",
    { d: "()", f: updateQuestionAnswer() },
    { d: "({})", f: updateQuestionAnswer({}) },
    { d: '(question: "Q1U")', f: updateQuestionAnswer({ question: "Q1U" }) },
    { d: '(answer: "A1U")', f: updateQuestionAnswer({ answer: "A1U" }) },
    {
      d: '(question: "Q1U", answer: "A1U")',
      f: updateQuestionAnswer({ question: "Q1U", answer: "A1U" }),
    },
    {
      d: '(number: 1, question: "Q1U", answer: "A1U")',
      f: updateQuestionAnswer({ number: 1, question: "Q1U", answer: "A1U" }),
    }
  );
  console.log(data);
}

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
  console.log(`\n** Testing ${category} **`);
  console.log("-------------------------------");
  for (const o of args) {
    console.log(`-> ${category}${o.d}:`);
    console.log(o.f);
  }
}

// getQuestions()
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing(
    "getQuestion",
    { d: "()", f: getQuestion() }, // Extra credit: +1
    { d: "(0)", f: getQuestion(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestion(1) },
    { d: "(4)", f: getQuestion(4) } // Extra credit: +1
  );
}

// getAnswer()
if (testGetA) {
  testing(
    "getAnswer",
    { d: "()", f: getAnswer() }, // Extra credit: +1
    { d: "(0)", f: getAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getAnswer(1) },
    { d: "(4)", f: getAnswer(4) } // Extra credit: +1
  );
}

// getQuestionAnswer()
if (testGetQA) {
  testing(
    "getQuestionAnswer",
    { d: "()", f: getQuestionAnswer() }, // Extra credit: +1
    { d: "(0)", f: getQuestionAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestionAnswer(1) },
    { d: "(4)", f: getQuestionAnswer(4) } // Extra credit: +1
  );
}

module.exports = {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
  addQuestionAnswer,
  updateQuestionAnswer,
  deleteQuestionAnswer,
};
