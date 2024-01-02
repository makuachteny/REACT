import React, { useState } from "react";
const Tweet = (props) => {
  const [counter, setCounter] = useState(0);

  /**
   * Increments the value.
   */
  const increment = () => setCounter(counter + 1);

  const decrement = () => setCounter(counter - 1);

  const text = props.text;
  const author = props.author;
  const date = props.date;

  return (
    <div>
      <h2>{text.toUpperCase()}</h2>
      <h4>
        By {author} On {date}
      </h4>
      <h5>Counter: {counter}</h5>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Minus</button>
    </div>
  );
};

export default Tweet;
