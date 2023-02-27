import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

const FormTextarea = ({
                          label,
                          name,
                          disabled,
                          value: propValue,
                          rows,
                          autoFocus,
                          errorMessage,
                          onChange,
                          onFocus,
                          placeholder
                      }) => {
    const [value, setValue] = useState(propValue);
    const [isInputError, setIsInputError] = useState(false);
    const [isFirstFocus, setIsFirstFocus] = useState(false);

    const ref = useRef(null);

    const handleChange = (e) => {
        const checkError = false;
        setIsInputError(checkError);
        setValue(e.target.value);

        if (onChange) {
            onChange(name, e.target.value);
        }
    };

    const handleFocus = (e) => {
        if (!isFirstFocus) {
            setIsFirstFocus(true);
        }

        if (onFocus) {
            onFocus(name, e.target.value);
        }
    };

    const handleMount = () => {
        if (autoFocus) {
            ref.current.focus();
        }
    };

    return (
        <div>
            {label && (
                <label
                    htmlFor={`input_${name}`}
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    {label}
                </label>
            )}
            <textarea
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id={`input_${name}`}
                value={value}
                ref={ref}
                onChange={handleChange}
                onFocus={handleFocus}
                disabled={disabled}
                rows={rows}
                placeholder={placeholder}
                onLoad={handleMount}
            />
            {isInputError && errorMessage}
        </div>
    );
};

FormTextarea.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    autoFocus: PropTypes.bool,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
};

FormTextarea.defaultProps = {
    value: "",
    type: "text",
    disabled: false,
    autoFocus: false,
    rows: 8,
    onChange: null,
    onFocus: null,
};

export default FormTextarea;