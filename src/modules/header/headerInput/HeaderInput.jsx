import classes from "./HeaderInput.module.sass";

import { forwardRef, useDeferredValue, useState } from "react";

import { CloseSvg } from "../../../UI/svgComponents/CloseSvg";

import { useSearchStore } from "../../../pages/searchResults/store/useSearchStore";

import { useNavigate } from "react-router-dom";

export const HeaderInput = forwardRef((props, ref) => {
    const {
        type,
        value,
        onChange,
        placeholder,
        onCleanUp,
    } = props;

    const [inputValue, setInputValue] = useState(value || "");
    const defferedInputValue = useDeferredValue(inputValue);
    const [focused, setFocused] = useState(false);
    const { fetchResults } = useSearchStore();
    const navigate = useNavigate();

    const handleFocus = () => setFocused(true);

    const handleBlur = () => setFocused(false);

    const handleValueChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    const handleKeyDown = async () => {
        if (defferedInputValue.trim() === "") {
            return;
        }
        try {
            navigate(`search?search=${encodeURIComponent(defferedInputValue)}`);
            await fetchResults(defferedInputValue);
        } catch (error) {
            console.error("Error during search:", error);
        }
    };

    return (
        <div className={classes.inputWrapper} ref={ref}>
            <input
                className={classes.headerInput}
                type={type}
                value={defferedInputValue}
                onChange={handleValueChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                onKeyDown={(e) => { if (e.key === "Enter") handleKeyDown(); }}
                placeholder={focused ? "" : placeholder}
            />
            <CloseSvg className={classes.closeButton} onClick={() => { setInputValue(""), onCleanUp(); }} />
        </div>
    );
});

HeaderInput.displayName = "HeaderInput";