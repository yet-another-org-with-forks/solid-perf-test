import { type Component, createSignal, Show } from "solid-js";
import { FileManager } from "./components/FileManager";
import { NativeFileManager } from "./components/NativeFileManager";

const App: Component = () => {
  const [renderType, setRenderType] = createSignal<string>();

  const handleRender = (type: string) => {
    setRenderType(undefined);
    setTimeout(() => {
      setRenderType(type);
    }, 0);
  };

  return (
    <>
      <button type="button" onClick={() => handleRender("components")}>
        Show components table
      </button>
      <button type="button" onClick={() => handleRender("native")}>
        Show native table
      </button>

      <Show when={renderType() === "components"}>
        <FileManager />
      </Show>

      <Show when={renderType() === "native"}>
        <NativeFileManager />
      </Show>
    </>
  );
};

export default App;
