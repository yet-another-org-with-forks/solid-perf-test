import "./SimpleTable.scss";
import type { ParentComponent } from "solid-js";
import { SimpleTableCell, type SimpleTableCellProps } from "./SimpleTableCell";

export const SimpleTableHeadCell: ParentComponent<Omit<SimpleTableCellProps, "as">> = (props) => {
  return (
    <SimpleTableCell {...props} as="th">
      {props.children}
    </SimpleTableCell>
  );
};
