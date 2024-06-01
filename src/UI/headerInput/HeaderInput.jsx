import classes from "./HeaderInput.module.sass";

import { useDeferredValue, useEffect, useState } from "react";

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
    const [showDropdown, setShowdropDown] = useState(false);
    const navigate = useNavigate();

    const { searchResults, fetchResults, clearResults, language } = useSearchStore();

    useEffect(() => {
        if (defferedInputValue.trim() !== "") {
            fetchResults(defferedInputValue);
            setShowdropDown(!showDropdown);
        } else {
            setShowdropDown(showDropdown);
            clearResults();
        }
    }, [defferedInputValue, fetchResults, language]);

    const handleFocus = () => {
        setFocused(!focused);
        if (inputValue.trim() !== "") {
            setShowdropDown(!showDropdown);
        }
    };

    const handleBlur = () => {
        setFocused(focused);
        setTimeout(() => setShowdropDown(showDropdown), 200);
    };

    const handleValueChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    const handleResultClick = (result) => {
        setInputValue(result.title);
        setShowdropDown(showDropdown);
        clearResults();
        if (onChange) {
            onChange(result.title);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            navigate(`search?query=${encodeURIComponent(inputValue)}`);
            setShowdropDown(showDropdown);
        }
    };

    return (
        <div className={classes.inputWrapper}>
            <input
                className={classes.headerInput}
                type={type}
                value={inputValue}
                onChange={handleValueChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                onKeyDown={handleKeyDown}
                placeholder={focused ? "" : placeholder}
            />
            {inputValue === "" && (
                <button className={classes.closeButton} onClick={onClose}>
                    <CloseSvg />
                </button>
            )}
            {showDropdown && (
                <ul className={classes.dropdown}>
                    {searchResults?.map((result) => (
                        <li
                            key={result.id}
                            className={classes.dropdownItem}
                            onMouseDown={() => handleResultClick(result)}
                        >
                            {result.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};