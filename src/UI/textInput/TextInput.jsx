import React from "react";
import classes from "./TextInput.module.sass";
export const TextInput = React.forwardRef(({
    type,
    placeholder,
    value,
    onChange,
    id,
    signature,
    htmlFor,
    ...rest
 }, ref) => {
   return (
      <div>
          <label htmlFor={htmlFor}>{signature}</label>
          <input
              className={classes.textInput}
              type={type}
              placeholder={placeholder}
              ref={ref}
              value={value}
              onChange={onChange}
              id={id}
              {...rest}
          />
      </div>
   );
});

TextInput.displayName = "TextInput";
