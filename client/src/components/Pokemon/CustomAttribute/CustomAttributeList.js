import React from "react";

import CustomAttributeView from "./CustomAttributeView";

function CustomAttributeList({ attributes, onEdit, onDelete }) {
  return (
    <>
      {attributes.map((item) => (
        <CustomAttributeView
          item={item}
          key={item.id}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </>
  );
}

export default CustomAttributeList;
