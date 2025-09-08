import { type Component, createSignal, getOwner, type JSX, runWithOwner } from "solid-js";
import { FileManager } from "./components/FileManager";
import { NativeFileManager } from "./components/NativeFileManager";

const App: Component = () => {
  const [renderResult, setRenderResult] = createSignal<JSX.Element>();

  const owner = getOwner();

  const handleRender = (type: string) => {
    runWithOwner(owner, () => {
      console.time(`render ${type}`);
      if (type === "components") {
        setRenderResult(<FileManager />);
      }
      if (type === "native") {
        setRenderResult(<NativeFileManager />);
      }
      console.timeEnd(`render ${type}`);
    });
  };

  return (
    <>
      <button type="button" onClick={() => handleRender("components")}>
        Show components table
      </button>
      <button type="button" onClick={() => handleRender("native")}>
        Show native table
      </button>

      {renderResult()}
    </>
  );
};

export default App;
