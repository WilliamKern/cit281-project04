const express = require("express");
const app = express();

const HOST = "localhost";
const PORT = 3000;

app.use(express.json());

const {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
  addQuestionAnswer,
  updateQuestionAnswer,
  deleteQuestionAnswer,
} = require("./p4-module");

const { data } = require("./p4-data");

app.get("/cit/question", (req, res) => {
  res.status(200).type("application/json");
  let response = {
    error: "",
    statusCode: res.statusCode,
    questions: getQuestions(),
  };
  res.send(response);
});

app.post("/cit/question", (req, res) => {
  res.status(201).type("application/jason");
  const info = req.body;
  const result = addQuestionAnswer(info);
  if (result.error === "") {
    res.send({
      error: result.error,
      statusCode: res.statusCode,
      number: result.number,
    });
  } else {
    res.send({ error: result.error, statusCode: 400, number: result.number });
  }
});

app.put("/cit/question", (req, res) => {
  res.status(200).type("application/json");
  const info = req.body;
  const result = updateQuestionAnswer(info);
  if (result.error === "") {
    res.send({
      error: result.error,
      statusCode: res.statusCode,
      number: result.number,
    });
  } else {
    res.send({ error: result.error, statusCode: 400, number: result.number });
  }
});

app.delete("/cit/question/:number", (req, res) => {
  res.status(200).type("application/json");
  const { number } = req.params;
  const info = parseInt(number);
  const result = deleteQuestionAnswer(info);
  if (result.error === "") {
    res.send({
      error: result.error,
      statusCode: res.statusCode,
      number: result.number,
    });
  } else {
    res.send({ error: result.error, statusCode: 400, number: -1, data });
  }
});
app.get("/cit/answer", (req, res) => {
  res.status(200).type("application/json");
  let response = {
    error: "",
    statusCode: res.statusCode,
    answers: getAnswers(),
  };
  res.send(response);
});

app.get("/cit/questionanswer", (req, res) => {
  res.status(200).type("application/json");
  let response = {
    error: "",
    statusCode: res.statusCode,
    questions_answers: getQuestionsAnswers(),
  };
  res.send(response);
});

app.get("/cit/question/:number", (req, res) => {
  res.status(200).type("application/json");
  const { number } = req.params;
  const inputNumber = parseInt(number);
  const output = getQuestion(inputNumber);
  let response = {
    error: output.error,
    statusCode: res.statusCode,
    question: output.question,
    number: output.number,
  };
  res.send(response);
});

app.get("/cit/answer/:number", (req, res) => {
  res.status(200).type("application/json");
  const { number } = req.params;
  const inputNumber = parseInt(number);
  const output = getAnswer(parseInt(inputNumber));
  let response = {
    error: output.error,
    statusCode: res.statusCode,
    answer: output.answer,
    number: output.number,
  };
  res.send(response);
});

app.get("/cit/questionanswer/:number", (req, res) => {
  res.status(200).type("application/json");
  const { number } = req.params;
  const inputNumber = parseInt(number);
  const output = getQuestionAnswer(inputNumber);
  let response = {
    error: output.error,
    statusCode: res.statusCode,
    question: output.question,
    answer: output.answer,
    number: output.number,
  };
  res.send(response);
});

// Handle 404 for all other routs
app.use((req, res) => {
  res.status(404);
  const output = {
    error: "Route not found",
    statusCode: res.statusCode,
  };
  res.send(output);
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
