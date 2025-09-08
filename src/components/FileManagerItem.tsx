import type { Component } from "solid-js";
import { Dynamic } from "solid-js/web";
import { type FileManagerEntry, formatSize, formatTimestamp, getAttributes, getTypeIcon } from "../fm";
import { SimpleTableCell } from "./UI/SimpleTable/SimpleTableCell";
import { SimpleTableRow } from "./UI/SimpleTable/SimpleTableRow";

interface FileManagerItemProps {
  entry: FileManagerEntry;
}

export const FileManagerItem: Component<FileManagerItemProps> = (props) => {
  return (
    <SimpleTableRow>
      <SimpleTableCell>
        <div style={{ display: "flex", "align-items": "center", gap: "5px" }}>
          <Dynamic component={getTypeIcon(props.entry)} />
          {props.entry.name}
        </div>
      </SimpleTableCell>
      <SimpleTableCell align="right">{getAttributes(props.entry)}</SimpleTableCell>
      <SimpleTableCell align="right">{props.entry.isDirectory ? "" : formatSize(props.entry.size)}</SimpleTableCell>
      <SimpleTableCell align="right">{formatTimestamp(props.entry.mtime)}</SimpleTableCell>
    </SimpleTableRow>
  );
};
