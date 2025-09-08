import "./SimpleTable.scss";
import type { ParentComponent } from "solid-js";
import { SimpleTableSection, type SimpleTableSectionProps } from "./SimpleTableSection";

export const SimpleTableFooter: ParentComponent<Omit<SimpleTableSectionProps, "as">> = (props) => {
  return (
    <SimpleTableSection {...props} as="tfoot">
      {props.children}
    </SimpleTableSection>
  );
};
