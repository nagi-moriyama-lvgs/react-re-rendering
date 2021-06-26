import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const onClickCountUp = () => setCount(count + 1);
  console.log("レンダリングが走りました。");

  return (
    <div className="App">
      <h1>React re-rendering</h1>
      <button onClick={onClickCountUp}>Count UP</button>
      {count}
    </div>
  );
};

export default App;
