import React from "react";
export const TextInput = React.forwardRef(({ type, placeholder }, ref) => {
   return <input ref={ref} type={type} placeholder={placeholder} />;
});

TextInput.displayName = "TextInput";
