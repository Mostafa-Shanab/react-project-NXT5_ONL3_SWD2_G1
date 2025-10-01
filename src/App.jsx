import TheHeader from "./components/TheHeader/TheHeader";
import TheFooter from "./components/TheFooter/TheFooter";

import "./App.css";

function App() {
  return (
    <div className="app">
      <TheHeader />
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
      </main>
      <TheFooter />
    </div>
  );
}

export default App;
