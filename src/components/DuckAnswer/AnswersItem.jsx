import "./style.css";

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it",
  yellow: "It's yellow!",
  squeaks: "It squeaks",
  logo: "It has a logo!",
  big: "It's big!",
};

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <li>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

export default function AnswersItem({
  key,
  answerItem: {
    best,
    worst,
    consistency,
    colour,
    logo,
    timeSpent,
    review,
    username,
    email,
  },
}) {
  return (
    <li key={key}>
      <article className="answer">
        {username ? <h3>{"Anon"} said:</h3> : <h3>{username} said:</h3>}

        {best ? (
          <p>
            <em>
              {
                "What would you say that are the best features of your rubber duck?"
              }
            </em>
            <span className="answer__line">{best}</span>
          </p>
        ) : null}

        {worst ? (
          <p>
            <em>
              {
                "What would you say that are the worst features of your rubber duck?"
              }
            </em>
            <span className="answer__line">{worst}</span>
          </p>
        ) : null}

        {consistency ? (
          <p>
            <em>{"How do you rate your rubber duck consistency?"}</em>
            <span className="answer__line">{consistency}</span>
          </p>
        ) : null}

        {colour ? (
          <p>
            <em>{"How do you rate your rubber duck colour?"}</em>
            <span className="answer__line">{colour}</span>
          </p>
        ) : null}

        {logo ? (
          <p>
            <em>{"How do you rate your rubber duck logo?"}</em>
            <span className="answer__line">{logo}</span>
          </p>
        ) : null}

        {timeSpent ? (
          <p>
            <em>{"How do you like to spend time with your rubber duck?"}</em>
            <ItemsList list={timeSpent} />
          </p>
        ) : null}

        {review[0] ? (
          <p>
            <em>{"What else have you got to say about your rubber duck?"}</em>
            <span className="answer__line">{review}</span>
          </p>
        ) : (
          <p>
            <em>{"What else have you got to say about your rubber duck?"}</em>
            <span className="answer__line">{"Nothing."}</span>
          </p>
        )}
      </article>
    </li>
  );
}
