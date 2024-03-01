import React from "react";

export const Input: React.FC<React.HTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return <input type="text" {...props} />;
};
