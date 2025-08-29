import { useState } from "react";
import Form from "./Duckform/Form";
import AnswersList from "./Answer";

function Survey() {
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState([]);


  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answers={answers}/>
      </section>
      <section className="survey__form">
        <Form answers={answers} setAnswers={setAnswers}/>
      </section>
    </main>
  );
}

export default Survey;
