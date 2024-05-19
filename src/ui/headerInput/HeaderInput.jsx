import styles from "./HeaderInput.module.sass";
import { CloseSvg } from "../Svg/CloseSvg";
import { useState } from "react";

export const HeaderInput = (props) => {
    const {
        type,
        value,
        onChange,
        placeholder,
        onClose
    } = props;

    const [inputValue, setInputValue] = useState(value || "");
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        setFocused(!focused);
    };

    const handleBlur = () => {
        setFocused(!focused);
    };

    const handleValueChange = (e) => {
        setInputValue(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <div className={styles.inputWrapper}>
            <input
                className={styles.headerInput}
                type={type}
                value={inputValue}
                onChange={handleValueChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                placeholder={focused ? "" : placeholder}
            />
            <button className={styles.closeButton} onClick={onClose}>
                <CloseSvg />
            </button>
        </div>
    );
};