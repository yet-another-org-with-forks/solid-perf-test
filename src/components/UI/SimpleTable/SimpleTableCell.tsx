import "./SimpleTable.scss";
import clsx from "clsx";
import { type JSX, mergeProps, type ParentComponent, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

export interface SimpleTableCellProps extends JSX.HTMLAttributes<HTMLTableCellElement> {
  align?: "left" | "right" | "center";
  as?: "th" | "td";
}

export const SimpleTableCell: ParentComponent<SimpleTableCellProps> = (props) => {
  const [local, others] = splitProps(mergeProps({ as: "td" }, props), ["class", "align", "as"]);
  return (
    <Dynamic
      component={local.as}
      class={clsx(local.class, "simple-table__cell", local.align && `simple-table__cell--align-${local.align}`)}
      {...others}
    >
      {props.children}
    </Dynamic>
  );
};
