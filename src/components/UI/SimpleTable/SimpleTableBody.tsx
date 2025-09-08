import "./SimpleTable.scss";
import type { ParentComponent } from "solid-js";
import { SimpleTableSection, type SimpleTableSectionProps } from "./SimpleTableSection";

export const SimpleTableBody: ParentComponent<Omit<SimpleTableSectionProps, "as">> = (props) => {
  return (
    <SimpleTableSection {...props} as="tbody">
      {props.children}
    </SimpleTableSection>
  );
};
