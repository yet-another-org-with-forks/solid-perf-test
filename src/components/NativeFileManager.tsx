import "./UI/SimpleTable/SimpleTable.scss";
import { type Component, For } from "solid-js";
import { testEntries } from "../data";
import { NativeFileManagerItem } from "./NativeFileManagerItem";

export const NativeFileManager: Component = () => {
  return (
    <>
      <h1>NATIVE TABLE</h1>
      <table class="simple-table" style={{ width: "100%" }}>
        <thead class="simple-table__section">
          <tr class="simple-table__row">
            <th class="simple-table__cell">Name</th>
            <th class="simple-table__cell simple-table__cell--align-right">Mode</th>
            <th class="simple-table__cell simple-table__cell--align-right">Size</th>
            <th class="simple-table__cell simple-table__cell--align-right">Modified</th>
          </tr>
        </thead>
        <tbody class="simple-table__section">
          <For each={testEntries}>{(entry) => <NativeFileManagerItem entry={entry} />}</For>
        </tbody>
      </table>
    </>
  );
};
