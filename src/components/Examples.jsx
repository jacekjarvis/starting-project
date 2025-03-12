import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";

export default function Examples() {
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

  let tabContent = <p>Click a button to see content.</p>;
  if (topic) {
    tabContent = (
      <>
        <h3>{EXAMPLES[topic].title}</h3>
        <p>{EXAMPLES[topic].description}</p>
        <pre>
          <code>{EXAMPLES[topic].code}</code>
        </pre>
      </>
    );
  }

  return (
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
      <div id="tab-content">{tabContent}</div>
    </section>
  );
}
