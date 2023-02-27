import React, { useState } from "react";
import PropTypes from "prop-types";

const FormInput = ({
                       label,
                       name,
                       type,
                       errorMessage,
                       disabled,
                       placeholder,
                       required,
                       value = "",
                       onChange = () => {},
                       onFocus = () => {},
                   }) => {
    const [inputValue, setInputValue] = useState(value);
    const [isInputError, setIsInputError] = useState(false);
    const [isFirstFocus, setIsFirstFocus] = useState(false);

    const handleChange = (e,name) => {
        let checkError = false;
        setIsInputError(checkError);
        setInputValue(e.target.value);
        onChange(name, e.target.value);
    };

    const handleFocus = (e,name) => {
        if (!isFirstFocus) {
            setIsFirstFocus(true);
        }
        onFocus(name, e.target.value);
    };

    return (
        <div>
            <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
                <span className="text-primary ml-1"> *</span>
            </label>
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={inputValue}
                type={type}
                onChange= {(e) => handleChange(e, name)}
                onFocus= {(e) => handleFocus(e, name)}
                disabled={disabled}
                placeholder={placeholder}
                required={required}
            />
            {isInputError && errorMessage}
        </div>
    );
};

FormInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(["text", "password", "number"]),
    required: PropTypes.bool,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
};

export default FormInput;