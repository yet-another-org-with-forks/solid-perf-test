import "./SimpleTable.scss";
import type { ParentComponent } from "solid-js";
import { SimpleTableSection, type SimpleTableSectionProps } from "./SimpleTableSection";

export const SimpleTableHeader: ParentComponent<Omit<SimpleTableSectionProps, "as">> = (props) => {
  return (
    <SimpleTableSection {...props} as="thead">
      {props.children}
    </SimpleTableSection>
  );
};
