import classes from "./HeaderInput.module.sass";

import { useDeferredValue, useState } from "react";

import { CloseSvg } from "../Svg/CloseSvg";

import { useSearchStore } from "../../pages/searchResults/store/useSearchStore";

import { useNavigate } from "react-router-dom";

export const HeaderInput = (props) => {
    const {
        type,
        value,
        onChange,
        placeholder,
        onClose
    } = props;

    const [inputValue, setInputValue] = useState(value || "");
    const defferedInputValue = useDeferredValue(inputValue);
    const [focused, setFocused] = useState(false);

    const navigate = useNavigate();

    const { fetchResults } = useSearchStore();

    const handleFocus = () => setFocused(true);

    const handleBlur = () => setFocused(false);

    const handleValueChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            navigate(`search?search=${encodeURIComponent(defferedInputValue)}`);
            fetchResults(defferedInputValue);
        }
    };

    return (
        <div className={classes.inputWrapper}>
            <input
                className={classes.headerInput}
                type={type}
                value={defferedInputValue}
                onChange={handleValueChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                onKeyDown={handleKeyDown}
                placeholder={focused ? "" : placeholder}
            />
            {defferedInputValue === "" && (
                <button className={classes.closeButton} onClick={onClose}>
                    <CloseSvg />
                </button>
            )}
        </div>
    );
};