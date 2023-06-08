import { useState } from "react";

const FCCounter = () => {
  const [counter, setCounter] = useState(0);
  const [uName, setUName] = useState("Sushant");
  const [isActive, setIsActive] = useState(true);
  const [cartList, setCartList] = useState([]);
  const [profile, setProfile] = useState({ name: "", city: "" });
  const [goals, setGoals] = useState(null);

  const onIncrement = () => {
    setCounter(counter + 1);
  };

  const onDecrement = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  };
  return (
    <div>
      <p>Counter: {counter}</p>
      {/*       <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button> */}

      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};

export default FCCounter;
