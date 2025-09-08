import { type Component, For } from "solid-js";
import { testEntries } from "../data";
import { FileManagerItem } from "./FileManagerItem";
import { SimpleTable } from "./UI/SimpleTable/SimpleTable";
import { SimpleTableBody } from "./UI/SimpleTable/SimpleTableBody";
import { SimpleTableHeadCell } from "./UI/SimpleTable/SimpleTableHeadCell";
import { SimpleTableHeader } from "./UI/SimpleTable/SimpleTableHeader";
import { SimpleTableRow } from "./UI/SimpleTable/SimpleTableRow";

export const FileManager: Component = () => {
  return (
    <>
      <h1>COMPONENTS TABLE</h1>
      <SimpleTable style={{ width: "100%" }}>
        <SimpleTableHeader>
          <SimpleTableRow>
            <SimpleTableHeadCell>Name</SimpleTableHeadCell>
            <SimpleTableHeadCell align="right">Mode</SimpleTableHeadCell>
            <SimpleTableHeadCell align="right">Size</SimpleTableHeadCell>
            <SimpleTableHeadCell align="right">Modified</SimpleTableHeadCell>
          </SimpleTableRow>
        </SimpleTableHeader>
        <SimpleTableBody>
          <For each={testEntries}>{(entry) => <FileManagerItem entry={entry} />}</For>
        </SimpleTableBody>
      </SimpleTable>
    </>
  );
};
