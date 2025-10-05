import { useEffect, useState } from "react";

import TheHeader from "./components/TheHeader/TheHeader";
import TheFooter from "./components/TheFooter/TheFooter";

import "./App.css";

const headerLinks = [
  { title: "Shop", path: "/shop" },
  { title: "On Sale", path: "/on-sale" },
  { title: "New Arrivals", path: "/new-arrivals" },
  { title: "Brands", path: "/brands" },
  { title: "White Friday", path: "/white-friday" },
];

function App() {
  // 1- useState Hook
  const [counter, setCounter] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  console.log("🚀 ~ App ~ showHeader:", showHeader);

  const handleCounterButtons = (type, value) => {
    // setCounter(counter + 5);
    // setCounter(counter + 5);
    // setCounter(counter + 5);
    // setCounter(counter + 5);
    setCounter((preValue) => preValue + 5);
    setCounter((preValue) => preValue + 5);
    setCounter((preValue) => preValue + 5);
    setCounter((preValue) => preValue + 5);
    // if (type === "increase") {
    //   setCounter((preValue) => preValue + value);
    // } else if (type === "decrease") {
    //   setCounter((preValue) => preValue - value);
    // } else {
    //   setCounter(0);
    // }
  };

  // Component Lifecycle Steps:
  // 1- Mount === Created === Finish DOM Creation
  // 2- Updated
  // 3- UnMount === Deleted

  console.log("Hello From Before App useEffect");

  // will be fired on every change in states
  useEffect(() => {
    console.log("Hello From App useEffect 1");
  });
  // will be fired once after mount
  useEffect(() => {
    console.log("Hello From App useEffect 1");
  }, []);
  // will be fired after mount and every change in counter state
  useEffect(() => {
    console.log("Hello From App useEffect 2");
  }, [counter]);
  console.log("Hello From After App useEffect");

  return (
    <div className="app">
      <h1>Hello React</h1>
      <button onClick={() => setShowHeader((prev) => !prev)}>
        Toogle Show Title
      </button>
      {showHeader && <TheHeader headerLinks={headerLinks} />}
      <main>
        <section>
          <h2>About React</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quis
            nihil fuga autem quasi officiis reprehenderit impedit id mollitia
            incidunt expedita molestias, temporibus, repellat exercitationem
            obcaecati perspiciatis. Quos, repellendus beatae.
          </p>
        </section>

        <section>
          <h2>Counter</h2>
          <span>{counter}</span>
          <div className="buttons-wrapper">
            <button onClick={() => handleCounterButtons("increase", 5)}>
              increase
            </button>
            <button onClick={() => handleCounterButtons("decrease", 5)}>
              decrease
            </button>
            <button onClick={() => handleCounterButtons("reset")}>reset</button>
          </div>
        </section>
      </main>
      <TheFooter />
    </div>
  );
}

export default App;
