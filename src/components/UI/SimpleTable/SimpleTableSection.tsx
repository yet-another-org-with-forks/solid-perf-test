import "./SimpleTable.scss";
import clsx from "clsx";
import { type JSX, type ParentComponent, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

export interface SimpleTableSectionProps extends JSX.HTMLAttributes<HTMLTableSectionElement> {
  as: "thead" | "tbody" | "tfoot";
}

export const SimpleTableSection: ParentComponent<SimpleTableSectionProps> = (props) => {
  const [local, others] = splitProps(props, ["as", "class"]);
  return (
    <Dynamic component={local.as} class={clsx(local.class, `simple-table__section`)} {...others}>
      {props.children}
    </Dynamic>
  );
};
