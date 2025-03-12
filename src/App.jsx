import { useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
  const [topic, setTopic] = useState(null);

  const props = "props";
  const jsx = "jsx";
  const components = "components";
  const state = "state";

  function handleSelect(selectedButton) {
    // selectedButton => "components", "jsx", "props", "state"
    setTopic(selectedButton);
    console.log(selectedButton);
  }

  let tabContent = (
    <div id="tab-content">
      <p>Click a button to see content.</p>
    </div>
  );
  if (topic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[topic].title}</h3>
        <p>{EXAMPLES[topic].description}</p>
        <pre>
          <code>{EXAMPLES[topic].code}</code>
        </pre>
      </div>
    );
  }

  console.log("Rendering App Component");
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={topic === components}
              onSelect={() => handleSelect(components)}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={topic === jsx}
              onSelect={() => handleSelect(jsx)}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={topic === props}
              onSelect={() => handleSelect(props)}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={topic === state}
              onSelect={() => handleSelect(state)}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
