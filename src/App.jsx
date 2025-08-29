import "./App.css";
import { useState } from "react";


import Header from "./components/Header";
import Survey from "./components/Survey";

export default function App() {
  const [answers, setAnswers] = useState([]);

  return (
    <>
      <Header />
      <Survey answers={answers} setAnswers={setAnswers}/>
    </>
  );
}
