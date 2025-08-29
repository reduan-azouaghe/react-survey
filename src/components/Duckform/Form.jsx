import "./style.css";
import React from "react";

function Form({ answers, setAnswers }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = [...new FormData(e.target).entries()];
    const grouped = formData.reduce( (group, [name, value]) => {
      if (!group[name]) {
        group[name] = [];
      }
      group[name].push(value);
      return group;
    }, {});

    console.log(grouped)


    setAnswers([...answers,grouped]);
  };

  //TODO: Clear after submit

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <h2>{"Tell us what you think about your rubber duck!"}</h2>

      <div className="form__group checkbox">
        <h3>
          {"What would you say that are the best features of your rubber duck?"}
        </h3>
        <label>
          <input type="checkbox" value="yellow" name="best" />
          {"It's yellow!"}
        </label>
        <label>
          <input type="checkbox" value="squeaks" name="best" />
          {"It squeaks!"}
        </label>
        <label>
          <input type="checkbox" value="logo" name="best" />
          {"It has a logo!"}
        </label>
        <label>
          <input type="checkbox" value="big" name="best" />
          {"It's big!"}
        </label>
      </div>

      <div className="form__group checkbox">
        <h3>
          {"What would you say that are the worst bits of your rubber duck?"}
        </h3>
        <label>
          <input type="checkbox" value="yellow" name="worst" />
          {"It's yellow!"}
        </label>
        <label>
          <input type="checkbox" value="squeaks" name="worst" />
          {"It squeaks!"}
        </label>
        <label>
          <input type="checkbox" value="logo" name="worst" />
          {"It has a logo!"}
        </label>
        <label>
          <input type="checkbox" value="big" name="worst" />
          {"It's big!"}
        </label>
      </div>

      <div className="form__group radio">
        <h3>{"How would you rate your rubber duck consistency?"}</h3>
        {[...Array(4).keys()].map((i) => (
          <React.Fragment key={i}>
            <input
              type="radio"
              id={`consistency-${i}`}
              name="consistency"
              value={i + 1}
            />
            <label htmlFor={`consistency-${i}`}>{i + 1}</label>
          </React.Fragment>
        ))}
      </div>

      <div className="form__group radio">
        <h3>{"How would you rate your rubber duck colour?"}</h3>
        {[...Array(4).keys()].map((i) => (
          <React.Fragment key={i}>
            <input
              type="radio"
              id={`colour-${i}`}
              name="colour"
              value={i + 1}
            />
            <label htmlFor={`colour-${i}`}>{i + 1}</label>
          </React.Fragment>
        ))}
      </div>

      <div className="form__group radio">
        <h3>{"How would you rate your rubber duck logo?"}</h3>
        {[...Array(4).keys()].map((i) => (
          <React.Fragment key={i}>
            <input type="radio" id={`logo-${i}`} name="logo" value={i + 1} />
            <label htmlFor={`logo-${i}`}>{i + 1}</label>
          </React.Fragment>
        ))}
      </div>

      <div className="form__group checkbox">
        <h3>{"How do you like to spend time with your rubber duck?"}</h3>
        <label>
          <input type="checkbox" value="swimming" name="timeSpent" />
          {"Swimming"}
        </label>
        <label>
          <input type="checkbox" value="bathing" name="timeSpent" />
          {"Bathing"}
        </label>
        <label>
          <input type="checkbox" value="chatting" name="timeSpent" />
          {"Chatting"}
        </label>
        <label>
          <input type="checkbox" value="noTime" name="timeSpent" />
          {"I don't like to spent time with it"}
        </label>
      </div>

      <div>
        <label>
          {"What else have you got to say about your rubber duck?"}
          <textarea
            name="review"
            cols="30"
            rows="10"
            defaultValue={null}
          ></textarea>
        </label>
      </div>

      <div>
        <label>
          {"Put your name here (if you feel like it):"}
          <input type="text" name="username" defaultValue={null}  />
        </label>
      </div>

      <div>
        <label>
          {"Leave us your email pretty please?"}
          <input type="email" name="email" defaultValue={null} />
        </label>
      </div>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}

export default Form;
