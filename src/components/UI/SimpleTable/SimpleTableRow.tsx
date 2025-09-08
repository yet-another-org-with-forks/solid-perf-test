import "./SimpleTable.scss";
import clsx from "clsx";
import { type JSX, type ParentComponent, splitProps } from "solid-js";

export interface SimpleTableRowProps extends JSX.HTMLAttributes<HTMLTableRowElement> {
  hover?: boolean;
}

export const SimpleTableRow: ParentComponent<SimpleTableRowProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "hover"]);
  return (
    <tr class={clsx(local.class, "simple-table__row", local.hover && "simple-table__cell--hover")} {...others}>
      {props.children}
    </tr>
  );
};
