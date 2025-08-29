import AnswersItem from "./DuckAnswer/AnswersItem";

export default function AnswersList({ answers }) {
  return (
    <ul>
      {answers.length == 0
        ? "Nothing yet!"
        : answers.map((answerItem, i) => (
            <AnswersItem key={i} answerItem={answerItem} />
          ))}
    </ul>
  );
}

