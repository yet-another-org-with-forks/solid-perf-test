import type { Component } from "solid-js";
import { Dynamic } from "solid-js/web";
import { type FileManagerEntry, formatSize, formatTimestamp, getAttributes, getTypeIcon } from "../fm";

interface NativeFileManagerItemProps {
  entry: FileManagerEntry;
}

export const NativeFileManagerItem: Component<NativeFileManagerItemProps> = (props) => {
  return (
    <tr class="simple-table__row">
      <td class="simple-table__cell">
        <div style={{ display: "flex", "align-items": "center", gap: "5px" }}>
          <Dynamic component={getTypeIcon(props.entry)} />
          {props.entry.name}
        </div>
      </td>
      <td class="simple-table__cell simple-table__cell--align-right">{getAttributes(props.entry)}</td>
      <td class="simple-table__cell simple-table__cell--align-right">
        {props.entry.isDirectory ? "" : formatSize(props.entry.size)}
      </td>
      <td class="simple-table__cell simple-table__cell--align-right">{formatTimestamp(props.entry.mtime)}</td>
    </tr>
  );
};
