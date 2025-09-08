import "./SimpleTable.scss";
import clsx from "clsx";
import { type JSX, type ParentComponent, splitProps } from "solid-js";

export interface SimpleTableProps extends JSX.HTMLAttributes<HTMLTableElement> {}

export const SimpleTable: ParentComponent<SimpleTableProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <table class={clsx(local.class, "simple-table")} {...others}>
      {props.children}
    </table>
  );
};
